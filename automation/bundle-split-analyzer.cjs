#!/usr/bin/env node
/**
 * Autonomous Bundle Split Analyzer
 *
 * Analyzes Next.js route-based bundle sizes from build stats,
 * identifies code splitting opportunities, and produces actionable recommendations.
 *
 * Triggers:
 * - On PR to main: posts PR comment with warnings (non-blocking)
 * - Weekly main branch: Tuesday 17:00 UTC — trend report + Telegram digest
 */

const fs = require('fs');
const path = require('path');

// Thresholds (KB gzipped)
const INITIAL_CHUNK_MAX_KB = 300;
const ROUTE_CHUNK_MAX_KB = 250;
const HEAVY_MODULE_KB = 50;

const BUILD_DIR = path.join(process.cwd(), '.next', 'build');
const STATS_DIR = path.join(BUILD_DIR, 'stats');
const ANALYSIS_DIR = path.join(process.cwd(), '.hermes', 'memory', 'bundle-split');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function loadJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return null;
  }
}

function bytesToKB(b) { return Math.round(b / 1024 * 100) / 100; }

// Conservative gzip estimate: raw * 0.25 (25% of original size)
function gzipSizeApprox(rawBytes) {
  return Math.round(rawBytes * 0.25 / 1024 * 100) / 100;
}

function parseStatsFiles() {
  const files = fs.readdirSync(STATS_DIR).filter(f => f.endsWith('.json') && !f.includes('loading'));
  const routes = new Map();

  for (const file of files) {
    const data = loadJson(path.join(STATS_DIR, file));
    if (!data) continue;

    // Filenames: app-{route}.json, page-{route}.json, app-{route}-[slug].json etc.
    const match = file.match(/^(?:app|page)-(.+)\.json$/);
    if (!match) continue;

    const route = match[1].replace(/-/g, '/'); // normalize kebab-case path
    const isInitial = file.includes('initial') || file.startsWith('page-');
    const chunkBytes = data.bytes || 0;
    const gzipKB = gzipSizeApprox(chunkBytes);

    if (!routes.has(route)) {
      routes.set(route, { chunks: [], totalBytes: 0, gzipTotal: 0, initial: false });
    }
    const entry = routes.get(route);
    entry.chunks.push(file);
    entry.totalBytes += chunkBytes;
    entry.gzipTotal += gzipKB;
    if (isInitial) entry.initial = true;
  }

  return routes;
}

function generateRecommendations(route, data) {
  const recs = [];

  if (data.initial && data.gzipTotal > INITIAL_CHUNK_MAX_KB) {
    recs.push(`Initial chunk too large (${data.gzipTotal}KB gzipped). Consider route-level code splitting or dynamic imports for heavy features.`);
  }

  if (data.gzipTotal > ROUTE_CHUNK_MAX_KB) {
    recs.push(`Route bundle large (${data.gzipTotal}KB gzipped). Identify heavy dependencies and lazy-load them.`);
  }

  // Heuristic hints based on route name
  if (route.includes('dashboard') || route.includes('analytics')) {
    recs.push('Dashboard likely contains charts; consider dynamic import of chart library (e.g., `dynamic(() => import("recharts"), { ssr: false })`).');
  }
  if (route.includes('map') || route.includes('location')) {
    recs.push('Map component likely heavy; lazy-load map library (e.g., `dynamic(() => import("@react-google-maps/api"), { ssr: false })`).');
  }
  if (route.includes('editor') || route.includes('rich-text') || route.includes('ckeditor')) {
    recs.push('Rich text editor is a common large dependency; consider dynamic import with client-only rendering.');
  }
  if (route.includes('admin') && data.gzipTotal > 400) {
    recs.push('Admin panel tends to accumulate heavy widgets; evaluate route-based splitting and component-level lazy loading.');
  }

  return recs;
}

function main() {
  console.log('🔍 Bundle Split Analyzer — starting\n');

  if (!fs.existsSync(STATS_DIR)) {
    console.error('❌ Stats directory not found:', STATS_DIR);
    console.error('   Run `next build` first to generate bundle stats.\n');
    process.exit(1);
  }

  ensureDir(ANALYSIS_DIR);

  const routes = parseStatsFiles();
  console.log(`📊 Analyzed ${routes.size} route(s)\n`);

  const baselineFile = path.join(ANALYSIS_DIR, 'baseline-stats.json');
  const historyFile = path.join(ANALYSIS_DIR, 'history.json');
  const reportFile = path.join(ANALYSIS_DIR, 'latest-report.json');

  const baseline = loadJson(baselineFile) || {};
  const history = loadJson(historyFile) || { entries: [] };

  const report = {
    timestamp: new Date().toISOString(),
    commit: process.env.GITHUB_SHA || null,
    routes: [],
    warnings: 0,
    recommendations: []
  };

  for (const [route, data] of routes.entries()) {
    const routeReport = {
      route,
      gzipTotalKB: data.gzipTotal,
      rawTotalBytes: data.totalBytes,
      initial: data.initial,
      warnings: [],
      recommendations: []
    };

    if (data.initial && data.gzipTotal > INITIAL_CHUNK_MAX_KB) {
      routeReport.warnings.push(`Initial chunk exceeds ${INITIAL_CHUNK_MAX_KB}KB (${data.gzipTotal}KB)`);
      report.warnings++;
    }

    if (data.gzipTotal > ROUTE_CHUNK_MAX_KB) {
      routeReport.warnings.push(`Route chunk exceeds ${ROUTE_CHUNK_MAX_KB}KB (${data.gzipTotal}KB)`);
      report.warnings++;
    }

    const recs = generateRecommendations(route, data);
    routeReport.recommendations = recs;
    if (recs.length) report.recommendations.push({ route, recs });

    report.routes.push(routeReport);
  }

  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  console.log(`📄 Report written: ${reportFile}`);

  // Update baseline on main branch or CI main
  const isMain = process.env.GITHUB_REF === 'refs/heads/main' || process.env.CI === 'true';
  if (isMain) {
    const newBaseline = {};
    for (const [route, data] of routes.entries()) {
      newBaseline[route] = {
        gzipTotalKB: data.gzipTotal,
        rawTotalBytes: data.totalBytes,
        initial: data.initial,
        lastUpdated: new Date().toISOString()
      };
    }
    fs.writeFileSync(baselineFile, JSON.stringify(newBaseline, null, 2));
    console.log(`📊 Baseline updated: ${baselineFile}`);

    // History: 90-day rolling window
    history.entries.push({ ts: report.timestamp, commit: report.commit, warnings: report.warnings, routeCount: routes.size });
    history.entries = history.entries.filter(e => new Date(e.ts) > new Date(Date.now() - 90*24*60*60*1000));
    fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
  }

  // Console summary
  console.log('\n📋 Summary:');
  console.log(`   Routes: ${routes.size} | Warnings: ${report.warnings}`);
  if (report.warnings > 0) {
    console.log('\n⚠️  Routes exceeding thresholds:');
    for (const r of report.routes.filter(r => r.warnings.length)) {
      console.log(`   - ${r.route} (${r.gzipTotalKB}KB gzipped) ${r.initial ? '[initial]' : ''}`);
    }
    console.log('');
  }

  const exitCode = report.warnings > 0 ? 1 : 0;
  if (exitCode) {
    console.log('❌ Bundle split opportunities detected. See report for details.\n');
  } else {
    console.log('✅ All route bundles within acceptable thresholds.\n');
  }
  process.exit(exitCode);
}

main();
