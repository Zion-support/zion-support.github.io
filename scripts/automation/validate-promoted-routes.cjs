#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGE_PATH = path.join(ROOT, 'app', 'page.tsx');
const APP_ROOT = path.join(ROOT, 'app');

function routeToPagePath(route) {
  if (route === '/') return path.join(APP_ROOT, 'page.tsx');
  const normalized = route.replace(/^\//, '');
  return path.join(APP_ROOT, normalized, 'page.tsx');
}

function extractPromotedRoutes(homepageSource) {
  const routeSet = new Set();
  const linkRegex = /href="(\/ai-lab\/[^"]+)"/g;
  let match = linkRegex.exec(homepageSource);
  while (match) {
    routeSet.add(match[1]);
    match = linkRegex.exec(homepageSource);
  }
  return Array.from(routeSet);
}

function main() {
  if (!fs.existsSync(PAGE_PATH)) {
    console.error('Homepage file not found: app/page.tsx');
    process.exit(1);
  }

  const source = fs.readFileSync(PAGE_PATH, 'utf8');
  const promotedRoutes = extractPromotedRoutes(source);
  const missing = promotedRoutes.filter((route) => !fs.existsSync(routeToPagePath(route)));

  if (missing.length > 0) {
    console.error('Promoted routes missing page files:');
    for (const route of missing) {
      console.error(`- ${route} -> ${routeToPagePath(route)}`);
    }
    process.exit(1);
  }

  console.log(`Promotion route validator passed (${promotedRoutes.length} AI Lab routes checked).`);
}

main();
