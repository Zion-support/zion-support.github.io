#!/usr/bin/env node
'use strict';

// Static, offline navigation contract. No network calls or production side effects.
// Run from the repository root: node scripts/test-guided-app-navigation.cjs
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

const pages = [
  {
    file: 'public/apps/start-here.html',
    anchors: ['main', 'choose-title', 'field', 'procurement', 'operations', 'finops', 'pilot', 'communications'],
    paths: ['/apps/', '/discovery/', '/apps/app-network-use-case-map.html', '/apps/content-hub.html',
      '/apps/network-learning-paths.html', '/pt/apps/network-learning-paths.html',
      '/es/apps/network-learning-paths.html', '/fr/apps/network-learning-paths.html',
      '/de/apps/network-learning-paths.html'],
    language: 'en', minLinks: 55,
  },
  {
    file: 'public/apps/app-network-use-case-map.html',
    anchors: ['main', 'field', 'network', 'ops', 'security', 'procurement', 'cost', 'automation', 'sales', 'data', 'logistics'],
    paths: ['/apps/', '/discovery/', '/apps/start-here.html',
      '/apps/field-service-evidence-guide.html', '/apps/supplier-quote-evidence-workbench.html',
      '/apps/service-readiness-paths.html', '/apps/pilot-evidence-checklist.html'],
    language: 'en', minLinks: 65,
  },
];

const sourceRoutes = [
  'public/discovery/index.html',
  'public/apps/index.html',
  'public/apps/start-here.html',
  'public/apps/app-network-use-case-map.html',
  'public/apps/content-hub.html',
  'public/apps/network.html',
  'public/apps/network-learning-paths.html',
  'public/pt/apps/network-learning-paths.html',
  'public/es/apps/network-learning-paths.html',
  'public/fr/apps/network-learning-paths.html',
  'public/de/apps/network-learning-paths.html',
  'public/apps/field-service-evidence-guide.html',
  'public/apps/supplier-quote-evidence-workbench.html',
  'public/apps/service-readiness-paths.html',
  'public/apps/communications-discovery-guide.html',
  'public/apps/pilot-evidence-checklist.html',
];

function validate(html, spec) {
  const failures = [];
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map(m => m[1]);
  const links = [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)].map(m => m[1]);
  for (const id of new Set(ids)) {
    if (ids.filter(x => x === id).length !== 1) failures.push('duplicate id: ' + id);
  }
  if (!new RegExp('<html\\b[^>]*\\blang=["\\x27]' + spec.language + '["\\x27]', 'i').test(html)) failures.push('html lang');
  if ((html.match(/<h1\b/gi) || []).length !== 1) failures.push('exactly one h1');
  if (!/<main\b[^>]*\bid=["']main["']/i.test(html)) failures.push('main landmark');
  if (!/href=["']#main["']/i.test(html)) failures.push('skip-to-main link');
  if (!/aria-label=["'][^"']+(?:navigation|category|goal)[^"']*["']/i.test(html)) failures.push('labeled navigation');
  if (!html.includes(':focus-visible')) failures.push('visible keyboard focus style');
  if (!/rel=["']canonical["']/i.test(html)) failures.push('canonical URL');
  if (/<form\b/i.test(html)) failures.push('unexpected data-collection form');
  if (!/does not guarantee|not proof of inbox receipt|not guaranteed/i.test(html)) failures.push('Discovery delivery caveat');
  if (links.length < spec.minLinks) failures.push('too few useful internal links');
  for (const id of spec.anchors) if (!ids.includes(id)) failures.push('missing category: ' + id);
  for (const href of links) {
    if (href === '#' || href.startsWith('javascript:')) failures.push('placeholder/unsafe link');
    if (href.startsWith('#') && !ids.includes(href.slice(1))) failures.push('broken fragment: ' + href);
  }
  for (const href of spec.paths) if (!links.includes(href)) failures.push('missing curated interlink: ' + href);
  return failures;
}

let errors = 0;
for (const relative of sourceRoutes) {
  if (!fs.existsSync(path.join(root, relative))) {
    console.error('MISSING SOURCE ROUTE ' + relative);
    errors++;
  }
}
for (const spec of pages) {
  const html = fs.readFileSync(path.join(root, spec.file), 'utf8');
  const issues = validate(html, spec);
  if (issues.length) {
    for (const issue of issues) console.error('FAIL ' + spec.file + ': ' + issue);
    errors += issues.length;
  } else {
    console.log('PASS ' + spec.file + ': anchors, paths, accessibility basics and disclosure');
  }
  // Built-in negative fixtures prove the checks reject regressions.
  if (!validate(html.replace('id="main"', 'id="removed-main"'), spec).length) {
    console.error('FAIL negative fixture: missing main accepted');
    errors++;
  }
  if (!validate(html.replace('href="#main"', 'href="#missing-destination"'), spec).length) {
    console.error('FAIL negative fixture: broken skip link accepted');
    errors++;
  }
}
if (errors) {
  console.error('Guided app navigation: FAIL (' + errors + ' checks)');
  process.exit(1);
}
console.log('Guided app navigation: PASS. This is source QA, not live deployment or inbox-delivery evidence.');
