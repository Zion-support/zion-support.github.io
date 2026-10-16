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


// Deliberately narrow source-authoring policy, not a general HTML sanitizer.
// Only &amp; query separators are allowed; encoded schemes fail closed.
function allowedHref(href) {
  const value = href.replace(/&amp;/gi, '&');
  if (!value || value === '#' || /[\u0000-\u0020\u007f\\]/.test(value) ||
      /&(?:#|[a-z][a-z0-9]*;)/i.test(value) || value.startsWith('//')) return false;
  const scheme = /^([a-z][a-z0-9+.-]*):/i.exec(value);
  if (scheme && !['http', 'https', 'mailto', 'tel'].includes(scheme[1].toLowerCase())) return false;
  if (scheme && /^https?$/i.test(scheme[1]) && !/^https?:\/\//i.test(value)) return false;
  try {
    const url = new URL(value, 'https://navigation.invalid/');
    return scheme ? ['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol) :
      url.origin === 'https://navigation.invalid';
  } catch { return false; }
}

const safeHrefs = ['#main', '/', '/apps/', './guide.html', '../apps/', 'guide.html',
  '?lang=pt-BR', '/apps/?a=1&amp;b=2', 'https://example.com/', 'HTTP://example.com/',
  'mailto:commercial@ziontechgroup.com', 'tel:+15551234567'];
const unsafeHrefs = ['', '#', 'javascript:alert(1)', 'JavaScript:alert(1)',
  'data:text/html,test', 'vbscript:msgbox(1)', 'file:///tmp/test', 'blob:https://example.com/id',
  'custom:action', '//example.com/', '\\example.com', ' https://example.com/',
  'java\tscript:alert(1)', 'java\nscript:alert(1)', 'javascript&#58;alert(1)',
  'java&#x73;cript:alert(1)', 'javascript&colon;alert(1)', 'java&Tab;script:alert(1)',
  '&#106;avascript:alert(1)', 'https:example.com', 'https://', '/apps/\u0000test'];

function validate(html, spec) {
  const failures = [];
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map(m => m[1]);
  const links = [...html.matchAll(/<a\b[^>]*\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/gi)].map(m => m[1] ?? m[2] ?? m[3]);
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
    if (!allowedHref(href)) failures.push('placeholder/unsafe link');
    if (href.startsWith('#') && !ids.includes(href.slice(1))) failures.push('broken fragment: ' + href);
  }
  for (const href of spec.paths) if (!links.includes(href)) failures.push('missing curated interlink: ' + href);
  return failures;
}

let errors = 0;
for (const href of safeHrefs) {
  if (!allowedHref(href)) { console.error('FAIL safe URI fixture: ' + href); errors++; }
}
for (const href of unsafeHrefs) {
  if (allowedHref(href)) { console.error('FAIL unsafe URI allowlist: ' + JSON.stringify(href)); errors++; }
}
console.log('URI fixtures: ' + safeHrefs.length + ' allowed, ' + unsafeHrefs.length + ' rejected');
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

  // Require the URI-specific failure, not an unrelated missing-route failure.
  for (const href of unsafeHrefs) {
    for (const anchor of [`<a href="${href}">fixture</a>`, `<a href = '${href}'>fixture</a>`]) {
      if (!validate(html + anchor, spec).includes('placeholder/unsafe link')) {
        console.error('FAIL unsafe URI fixture: ' + JSON.stringify(href)); errors++;
      }
    }
  }
  // Exercise the extractor as well as allowedHref; allowed links must not
  // accidentally fail another rule or disappear during attribute parsing.
  for (const href of safeHrefs) {
    for (const anchor of [`<a href="${href}">fixture</a>`, `<a href = '${href}'>fixture</a>`]) {
      const issues = validate(html + anchor, spec);
      if (issues.length) {
        console.error('FAIL safe URI integration fixture: ' + JSON.stringify(href) + ': ' + issues.join(', '));
        errors++;
      }
    }
  }
  // HTML unquoted attributes cannot contain whitespace or quote/equal/angle/
  // backtick characters. Do not manufacture invalid HTML for this matrix.
  for (const href of unsafeHrefs.filter(value => value && !/[\s"'=<>`]/.test(value))) {
    if (!validate(html + `<a href=${href}>fixture</a>`, spec).includes('placeholder/unsafe link')) {
      console.error('FAIL unquoted unsafe URI fixture: ' + JSON.stringify(href)); errors++;
    }
  }

  // Built-in negative fixtures prove the checks reject regressions.
  if (!validate(html.replace('id="main"', 'id="removed-main"'), spec).includes('main landmark')) {
    console.error('FAIL negative fixture: missing main accepted');
    errors++;
  }
  if (!validate(html.replace('href="#main"', 'href="#missing-destination"'), spec).includes('broken fragment: #missing-destination')) {
    console.error('FAIL negative fixture: broken skip link accepted');
    errors++;
  }
}
if (errors) {
  console.error('Guided app navigation: FAIL (' + errors + ' checks)');
  process.exit(1);
}
console.log('Guided app navigation: PASS. This is source QA, not live deployment or inbox-delivery evidence.');
