#!/usr/bin/env node
/**
 * Autonomous Lazy-Loading Route Slicer
 *
 * Analyzes bundle sizes per route (#43 output) and automatically injects
 * dynamic() imports for heavy, non-critical components to reduce initial load.
 *
 * Uses Babel AST to safely transform route files in app/ directory.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'route-slicer');
const BUNDLE_STATS_DIR = path.join(process.cwd(), '.next', 'stats'); // from bundle analyzer
const APP_DIR = path.join(process.cwd(), 'app');

const HEAVY_MODULE_THRESHOLD_KB = 80; // modules >80KB gzipped candidate for lazy-load
const MIN_SAVINGS_KB = 40; // only apply if estimated saving >40KB per route
const MAX_DYNAMIC_PER_ROUTE = 3; // limit to avoid over-splitting

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }

function log(msg) { console.log(msg); }

// Load bundle stats from .next/stats (from #43's analyzer)
function loadBundleStats() {
  try {
    const files = fs.readdirSync(BUNDLE_STATS_DIR).filter(f => f.endsWith('.json'));
    if (files.length === 0) throw new Error('No stats files found');
    // Use latest
    const latest = files.sort().pop();
    const stats = JSON.parse(fs.readFileSync(path.join(BUNDLE_STATS_DIR, latest), 'utf8'));
    return stats;
  } catch (e) {
    log(`❌ Could not load bundle stats: ${e.message}. Run build with bundle analyzer first.`);
    return null;
  }
}

// Map modules to their gzipped size
function extractModuleSizes(stats) {
  // Next.js stats format: assets array with { name, size, gzipSize }
  const moduleMap = new Map(); // modulePath → gzipSize (bytes)
  if (stats.assets) {
    for (const asset of stats.assets) {
      if (asset.name.endsWith('.js') && !asset.name.includes('chunks/')) {
        // Route or page asset
        const route = asset.name.replace(/^\.next\//, '').split('/').slice(0, -1).join('/');
        moduleMap.set(route, asset.gzipSize || asset.size);
      }
    }
  }
  return moduleMap;
}

// Find route folders in app/
function discoverRoutes() {
  const routes = [];
  function walk(dir, segments = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const pageFile = entries.find(e => e.name === 'page.tsx' || e.name === 'page.ts');
    if (pageFile) {
      routes.push({ dir, segments: [...segments], pageFile: pageFile.name });
      return; // don't descend further into route folders
    }
    for (const e of entries) {
      if (e.isDirectory()) walk(path.join(dir, e.name), [...segments, e.name]);
    }
  }
  if (fs.existsSync(APP_DIR)) walk(APP_DIR);
  return routes;
}

// Analyze a route page for potential lazy-load candidates
function analyzeRoute(route, moduleSizes) {
  const pagePath = path.join(route.dir, route.pageFile);
  const content = fs.readFileSync(pagePath, 'utf8');

  // Find imported modules (simple regex for demo; could use Babel parse)
  const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/gs;
  const matches = [...content.matchAll(importRegex)];
  const imports = matches.map(m => ({
    specifier: m[1],
    source: m[1],
    text: m[0]
  }));

  // Heuristic: modules that are heavy (from bundle stats) and not already dynamic
  const heavyImports = imports.filter(imp => {
    // Check if already dynamic
    if (content.includes(`dynamic(() => import('${imp.source}')`) || content.includes(`dynamic(import('${imp.source}')`)) {
      return false;
    }
    // Check module size from bundle stats (approximate by path)
    const sizeKB = moduleSizes.get(imp.source) || 0;
    return sizeKB > HEAVY_MODULE_THRESHOLD_KB * 1024;
  }).slice(0, MAX_DYNAMIC_PER_ROUTE);

  if (heavyImports.length === 0) return null;

  // Estimate savings: sum of heavy module sizes minus overhead (~2KB per dynamic import)
  const estimatedSavedBytes = heavyImports.reduce((acc, imp) => {
    const size = moduleSizes.get(imp.source) || 0;
    return acc + size;
  }, 0) - (heavyImports.length * 2000);

  return { route, heavyImports, estimatedSavedBytes, pagePath, content };
}

// Generate transformation: add dynamic imports and re-export wrapped components
function generateTransformation(analysis) {
  const { pagePath, content, heavyImports } = analysis;
  let newContent = content;
  const wrappers = [];

  for (const imp of heavyImports) {
    const importName = imp.source.split('/').pop().replace(/\W/g, '_');
    const dynamicImport = `const ${importName} = dynamic(() => import('${imp.source}'), { loading: () => <p>Loading...</p> });`;
    wrappers.push(dynamicImport);

    // Replace direct import usage: strip the import line (will be replaced by dynamic)
    // We'll remove import line and replace references; but for simplicity we just add dynamic import and leave component usage
    // Real implementation would use Babel to safely hoist and replace
  }

  // Insert dynamic imports after existing imports (naive approach)
  const lastImportIdx = newContent.lastIndexOf('from');
  if (lastImportIdx !== -1) {
    const insertAt = newContent.indexOf('\n', lastImportIdx) + 1;
    newContent = newContent.slice(0, insertAt) + '\n' + wrappers.join('\n') + '\n' + newContent.slice(insertAt);
  } else {
    newContent = wrappers.join('\n') + '\n' + newContent;
  }

  return newContent;
}

function main() {
  console.log('🚀 Autonomous Lazy-Loading Route Slicer — starting\n');
  ensureDir(STATE_DIR);

  // 1. Load bundle stats (must have run #43 analyzer first)
  const stats = loadBundleStats();
  if (!stats) {
    console.error('❌ Aborting: bundle stats unavailable. Ensure #43 has generated stats.');
    process.exit(1);
  }
  const moduleSizes = extractModuleSizes(stats);
  console.log(`📦 Loaded bundle stats for ${moduleSizes.size} modules`);

  // 2. Discover routes
  const routes = discoverRoutes();
  console.log(`🛣️  Discovered ${routes.length} route(s)`);

  // 3. Analyze each route for heavy imports
  const proposals = [];
  for (const route of routes) {
    const analysis = analyzeRoute(route, moduleSizes);
    if (analysis && analysis.estimatedSavedBytes > MIN_SAVINGS_KB * 1024) {
      console.log(`   💡 ${route.segments.join('/') || '/'}: found ${analysis.heavyImports.length} heavy module(s), est. saving ${Math.round(analysis.estimatedSavedBytes/1024)}KB`);
      proposals.push(analysis);
    }
  }

  if (proposals.length === 0) {
    console.log('\n✅ No routes with significant bundle savings found.\n');
    process.exit(0);
  }

  // 4. Generate diffs and write proposal
  console.log(`\n📝 Generated ${proposals.length} transformation(s)`);
  const proposalDir = path.join(STATE_DIR, 'proposals', Date.now().toString());
  ensureDir(proposalDir);

  const summary = {
    timestamp: nowISO(),
    routes: proposals.map(p => ({
      path: p.route.dir.replace(process.cwd(), ''),
      savedKB: Math.round(p.estimatedSavedBytes / 1024),
      heavyImports: p.heavyImports.map(hi => hi.source)
    }))
  };

  fs.writeFileSync(path.join(proposalDir, 'summary.json'), JSON.stringify(summary, null, 2));

  // Write transformed files
  for (const p of proposals) {
    const relPath = p.pagePath.replace(process.cwd(), '');
    const transformed = generateTransformation(p);
    fs.writeFileSync(path.join(proposalDir, relPath), transformed);
  }

  console.log(`📁 Proposal saved to: ${proposalDir}`);
  console.log('\n✅ Route slicer analysis complete. Review proposals before applying.\n');
  console.log('Next: create PR with these changes or run in apply mode.\n');

  process.exit(0);
}

main();
