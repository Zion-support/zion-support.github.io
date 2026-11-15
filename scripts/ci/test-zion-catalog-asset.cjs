'use strict';
// Repo-only static asset contract. No network, publish step, credentials or writes.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const path = 'public/assets/js/zion-catalog.js';
const source = fs.readFileSync(path, 'utf8');
assert.ok(source.length > 300, 'Catalog asset is empty or incomplete');
new vm.Script(source, {filename: path});

for (const marker of [
  'name: "Free Discovery", href: "/discovery/"',
  'Agentes Telegram', 'Estimador FinOps', 'ensureFinops', 'finops-form'
]) {
  assert.ok(source.includes(marker), 'Required real resource missing: '+marker);
}
assert.doesNotMatch(source, /Discovery\s*(?:\$|USD|R\$)\s*99\b/i, 'Legacy paid Discovery must not return');
assert.doesNotMatch(source, /href:\s*["']\/agents\/["']/i, 'Broken /agents/ alias must not be advertised');
assert.doesNotMatch(source, /\b(?:fetch|XMLHttpRequest|sendBeacon)\s*\(/, 'Catalog must not send data');
const urls = [...source.matchAll(/\bhref:\s*"([^"]+)"/g)].map(m=>m[1]);
assert.ok(urls.length >= 5, 'Expected useful first-party links');
assert.ok(urls.every(url=>/^\/[a-z0-9/-]+\/$/.test(url)), 'Catalog has unsafe or non-canonical URLs');
const fakeDocument = {
  readyState: 'complete',
  getElementById: function () { return null; }
};
vm.runInNewContext(source, {document: fakeDocument, console}, {timeout:1000});
console.log('PASS: first-party links, no paid Discovery, parseable JS, no global DOM injection.');
