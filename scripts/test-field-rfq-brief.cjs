#!/usr/bin/env node
/**
 * Read-only regression tests for the multilingual Field Services RFQ brief.
 * No browser, remote calls, workflows, deployment or mutations.
 * Usage: node scripts/test-field-rfq-brief.cjs
 */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const langs = [
  ['en', 'en', ''],
  ['pt', 'pt-BR', 'pt/'],
  ['es', 'es', 'es/'],
  ['fr', 'fr', 'fr/'],
  ['de', 'de', 'de/'],
];
const host = 'https://ziontechgroup.com';
const url = (prefix) => host + '/' + prefix + 'field-services/rfq-brief/';
const read = (file) => fs.readFileSync(path.join(root, 'public', file), 'utf8');
const expectCount = (content, needle, expected, context) => {
  const found = content.split(needle).length - 1;
  assert.equal(found, expected, context + ': unexpected count of ' + needle);
};
for (const [lang, htmlLang, prefix] of langs) {
  const file = prefix + 'field-services/rfq-brief/index.html';
  const html = read(file);
  assert.match(html, new RegExp('<html lang="' + htmlLang + '"'));
  assert.ok(html.includes('<link rel="canonical" href="' + url(prefix) + '">'), file + ': canonical');
  for (const [, tag, p] of langs) {
    assert.ok(html.includes('hreflang="' + tag + '" href="' + url(p) + '"'), file + ': reciprocal hreflang ' + tag);
  }
  assert.ok(html.includes('hreflang="x-default" href="' + url('') + '"'), file + ': x-default');
  expectCount(html, '<label for="f', 6, file);
  expectCount(html, 'id="f', 6, file);
  assert.ok(html.includes('navigator.clipboard.writeText'), file + ': clipboard');
  assert.ok(html.includes('id="out"'), file + ': draft field');
  assert.ok(html.includes('id="status"'), file + ': status');
  assert.ok(html.includes('id="notice"'), file + ': notice');
  assert.ok(html.includes('href="/contact/"'), file + ': contact CTA');
  assert.ok(html.includes('href="/discovery/"'), file + ': Discovery CTA');
  assert.ok(html.includes('href="/zion-app-network/field-visit-handoff-2026'), file + ': handoff CTA');
  for (const forbidden of ['fetch(', 'XMLHttpRequest', 'sendBeacon', 'localStorage', 'sessionStorage']) {
    assert.ok(!html.includes(forbidden), file + ': unexpected external or persistent operation ' + forbidden);
  }
  const showcase = read(prefix + 'apps-network-showcase/index.html');
  assert.ok(showcase.includes('href="/' + prefix + 'field-services/rfq-brief/"'), file + ': showcase interlink');
  expectCount(showcase, 'class="resource"', 7, prefix + 'showcase');
  expectCount(showcase, 'class="path"', 4, prefix + 'showcase');
}
const index = read('sitemap.xml');
assert.ok(index.includes(host + '/field-services-rfq-sitemap.xml'), 'sitemap index missing RFQ sitemap');
const sitemap = read('field-services-rfq-sitemap.xml');
expectCount(sitemap, '<url>', 5, 'RFQ sitemap');
expectCount(sitemap, 'hreflang=', 30, 'RFQ sitemap');
for (const [, htmlLang, prefix] of langs) {
  assert.ok(sitemap.includes('<loc>' + url(prefix) + '</loc>'), 'sitemap lacks ' + htmlLang);
  assert.ok(sitemap.includes('hreflang="' + htmlLang + '" href="' + url(prefix) + '"'), 'sitemap lacks alternate ' + htmlLang);
}
console.log('PASS: 5 localized RFQ pages, 5 reciprocal showcases, 6-field drafts, sitemap and no automatic sends');
