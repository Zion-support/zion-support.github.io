#!/usr/bin/env node
/**
 * Link Auditor Agent
 * Finds broken internal links in the codebase
 */

const fs = require('fs');
const path = require('path');

const WORKSPACE = '/root/.openclaw/workspace/zion.app';
const IGNORE = ['node_modules', '.next', 'out', 'dist', 'build', '.git'];

function findFiles(dir, exts) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    if (IGNORE.includes(item.name)) continue;
    const full = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      files.push(...findFiles(full, exts));
    } else if (exts.some(ext => item.name.endsWith(ext))) {
      files.push(full);
    }
  }
  return files;
}

console.log('🔍 Scanning for broken internal links...\n');

const pages = findFiles(path.join(WORKSPACE, 'app'), ['.tsx', '.ts', '.js']);
const broken = [];
const links = new Set();

// Extract internal links from pages
// Excludes: http, https, mailto, tel, #fragment, data:, blob:
const linkRegex = /href=["'](?!http|https|mailto|tel|#|data:|blob:)[^"']+["']/g;
const importRegex = /from\s+["'](?!\.|http)[^"']+["']/g;

for (const file of pages) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(WORKSPACE, file);
  
  // Find href links
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const linkMatch = match[0].match(/href=["']([^"']+)["']/);
    if (!linkMatch) continue;
    
    // Strip query/fragment before checking (\"?foo\" and \"#anchor\" are valid routes)
    const rawLink = linkMatch[1];
    const cleanLink = rawLink.split('?')[0].split('#')[0].replace(/[\s"'#].*$/, '').replace(/^\//, '');
    
    // Canonicalise dynamic route segment [id] → id for matching
    const linkCanon = cleanLink.replace(/\[([^\]]+)\]/g, '$1');
    
    if (linkCanon && !linkCanon.endsWith('.css') && !linkCanon.endsWith('.js') && !linkCanon.endsWith('.json') && !linkCanon.endsWith('.xml')) {
      links.add({ file: relPath, link: linkCanon });
    }
  }
}

// Check which pages exist
const existingPages = new Set(pages.map(f => {
  let p = path.relative(path.join(WORKSPACE, 'app'), f);
  p = p.replace(/\.tsx?$/, '');
  p = p.replace(/\[([^\]]+)\]/g, '$1');
  return p;
}));

// Also check public/ static assets (sitemap.xml, robots.txt, favicon, etc.)
const publicDir = path.join(WORKSPACE, 'public');
const publicAssets = new Set();
try {
  for (const f of findFiles(publicDir, [])) {
    const name = path.relative(publicDir, f);
    publicAssets.add(name);
  }
} catch (_) {}

for (const { file, link } of links) {
    // Skip pages from source files that no longer exist (stale broken-links.json)
  const absFile = path.join(WORKSPACE, file);
  if (!fs.existsSync(absFile)) {
    continue;
  }
  
  const isPublicAsset = [...publicAssets].some(a => a === link || a.endsWith('/' + link));
  const exists = isPublicAsset || [...existingPages].some(p => 
    p.includes(link) || link.includes(p.split('/').pop())
  );
  if (!exists && link.length > 2) {
    broken.push({ file, link });
  }
}

if (broken.length > 0) {
  console.log(`⚠️ Found ${broken.length} potential broken links:\n`);
  broken.slice(0, 20).forEach(({ file, link }) => {
    console.log(`  ${file} → ${link}`);
  });
  
  fs.writeFileSync(
    path.join(WORKSPACE, 'broken-links.json'),
    JSON.stringify(broken, null, 2)
  );
} else {
  console.log('✅ No obvious broken links found');
}
