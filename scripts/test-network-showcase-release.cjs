'use strict';
// Compatibility check for the optional legacy homepage promotion chain.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const map = require('./render-network-map.cjs');
const {verify} = require('./test-network-map.cjs');
const out = process.argv[2] || 'out';
for (const locale of map.locales) verify(fs.readFileSync(path.join(out,map.route(locale).slice(1)),'utf8'),locale);
for (const locale of ['en','pt']) {
  const home = fs.readFileSync(path.join(out,map.home(locale).slice(1),'index.html'),'utf8');
  assert.equal((home.match(/data-showcase-promotion="2026-10-11-showcase-v1"/g)||[]).length,1,'Exactly one original homepage promotion');
  assert(home.includes(`href="${map.route(locale)}"`),'Matching-locale map backlink');
}
console.log('PASS five map locales and the existing EN/PT homepage promotion contract.');
