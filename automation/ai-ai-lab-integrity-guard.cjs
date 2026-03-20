#!/usr/bin/env node

/**
 * AI Lab Integrity Guard
 * Prevents duplicate entries and broken internal hrefs for:
 * - app/ai-lab/ai-lab-tools.ts
 * - app/features/featuredItems.ts
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const AI_LAB_TOOLS_PATH = path.join(ROOT, 'app', 'ai-lab', 'ai-lab-tools.ts');
const FEATURED_ITEMS_PATH = path.join(ROOT, 'app', 'features', 'featuredItems.ts');

function readFile(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

function collectValues(content, regex) {
  const values = [];
  let match;
  while ((match = regex.exec(content))) {
    values.push(match[1]);
  }
  return values;
}

function duplicates(values) {
  const counts = new Map();
  values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return Array.from(counts.entries())
    .filter(([, count]) => count > 1)
    .map(([value]) => value);
}

function routeExists(href) {
  if (!href.startsWith('/')) return false;
  const route = href === '/' ? '' : href;
  const pagePath = path.join(ROOT, 'app', route, 'page.tsx');
  const dynamicPath = path.join(ROOT, 'app', route + '.tsx');
  return fs.existsSync(pagePath) || fs.existsSync(dynamicPath);
}

function checkFile(filePath, label) {
  const content = readFile(filePath);
  if (!content) {
    return [`${label}: file not found or empty`];
  }

  const ids = collectValues(content, /\bid:\s*'([^']+)'/g);
  const hrefs = collectValues(content, /\bhref:\s*'([^']+)'/g);

  const errors = [];
  const dupIds = duplicates(ids);
  const dupHrefs = duplicates(hrefs);
  if (dupIds.length) {
    errors.push(`${label}: duplicate ids -> ${dupIds.join(', ')}`);
  }
  if (dupHrefs.length) {
    errors.push(`${label}: duplicate hrefs -> ${dupHrefs.join(', ')}`);
  }

  const missingRoutes = hrefs
    .filter((href) => href.startsWith('/'))
    .filter((href) => !routeExists(href));
  return { errors, missingRoutes };
}

function run() {
  const aiLabResult = checkFile(AI_LAB_TOOLS_PATH, 'AI_LAB_TOOLS');
  const featuredResult = checkFile(FEATURED_ITEMS_PATH, 'FEATURED_ITEMS');
  const errors = [...aiLabResult.errors, ...featuredResult.errors];

  if (errors.length) {
    console.error('[AI Lab Integrity Guard] FAILED');
    errors.forEach((error) => console.error(`- ${error}`));
    process.exit(1);
  }

  const warnings = [...aiLabResult.missingRoutes, ...featuredResult.missingRoutes];
  if (warnings.length) {
    console.log('[AI Lab Integrity Guard] WARN: missing routes detected (non-blocking)');
    warnings.forEach((warning) => console.log(`- ${warning}`));
  }

  console.log('[AI Lab Integrity Guard] PASS');
}

if (require.main === module) {
  run();
}

module.exports = { run };
