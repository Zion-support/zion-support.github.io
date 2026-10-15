#!/usr/bin/env node
'use strict';
// Supplement the existing offline contract; no network or production writes.
// Run: node scripts/test-guided-app-uri-matrix.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const sourceFile = path.join(__dirname, 'test-guided-app-navigation.cjs');
const context = vm.createContext({ require, console, URL, __dirname, process: {
  exit(code) { throw new Error('Existing navigation contract failed: ' + code); }
} });
vm.runInContext(fs.readFileSync(sourceFile, 'utf8') +
  '\n;globalThis.contract = { allowedHref, validate, pages };', context,
  { filename: sourceFile, timeout: 10000 });
const { allowedHref, validate, pages } = context.contract;
const allowed = ['HTTPS://example.com/path?q=1', 'MAILTO:review@example.com',
  'TEL:+15551234567', '/apps/start-here.html#main', './guide.html?lang=de',
  '../apps/?lang=fr', '?lang=es', '/apps/?a=1&amp;b=2'];
const rejected = ['DaTa:text/html,test', 'VbScRiPt:msgbox(1)',
  'JaVaScRiPt:alert(1)', 'https://example.com/\rtest',
  'https://example.com/\ttest', 'https://example.com/\ntest',
  'https://example.com/\u007ftest', 'https://example.com/\\test',
  'https&#58;//example.com', '&#x64;ata:text/html,test',
  'data&colon;text/html,test', 'https://example.com/ '];
for (const href of allowed) assert.equal(allowedHref(href), true, JSON.stringify(href));
for (const href of rejected) assert.equal(allowedHref(href), false, JSON.stringify(href));
let integrations = 0;
for (const spec of pages) {
  const html = fs.readFileSync(path.join(__dirname, '..', spec.file), 'utf8');
  assert.equal(validate(html, spec).length, 0, 'real baseline must pass');
  const baselineLinkCount = (html.match(/<a\b[^>]*\bhref\s*=/gi) || []).length;
  for (const href of allowed) {
    const anchors = [`<a href="${href}">matrix</a>`, `<a href = '${href}'>matrix</a>`];
    if (!/[\s"'=<>`]/.test(href)) anchors.push(`<a href=${href}>matrix</a>`);
    for (const anchor of anchors) {
      // Raising the minimum proves the new anchor was extracted, not ignored.
      const issues = validate(html + anchor, { ...spec, minLinks: baselineLinkCount + 1 });
      assert.equal(issues.length, 0, JSON.stringify({ href, anchor, issues }));
      integrations++;
    }
  }
  for (const href of rejected) {
    for (const anchor of [`<a href="${href}">matrix</a>`, `<a href = '${href}'>matrix</a>`]) {
      assert.equal(validate(html + anchor, spec).includes('placeholder/unsafe link'), true,
        'missing URI-specific failure: ' + JSON.stringify(href));
      integrations++;
    }
  }
}
console.log(`Extended URI matrix PASS: ${allowed.length} allowed, ${rejected.length} rejected; ${integrations} page/anchor checks.`);
console.log('Offline source contract only; not an HTML sanitizer, browser audit or deployment proof.');
