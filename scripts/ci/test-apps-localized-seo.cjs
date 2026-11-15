'use strict';
// Read-only, offline SEO contract for the five real Zion Apps directory pages.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const root = 'https://ziontechgroup.com';
const locales = [
  ['en', 'public/apps/index.html', '/apps/'],
  ['pt-BR', 'public/pt/apps/index.html', '/pt/apps/'],
  ['es', 'public/es/apps/index.html', '/es/apps/'],
  ['fr', 'public/fr/apps/index.html', '/fr/apps/'],
  ['de', 'public/de/apps/index.html', '/de/apps/']
];
const expected = Object.fromEntries(locales.map(([code,,path])=>[code,root+path]));
expected['x-default'] = root+'/apps/';

function attrs(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/\b([a-zA-Z][\w-]*)\s*=\s*["']([^"']*)["']/g)]
      .map(m => [m[1].toLowerCase(),m[2]])
  );
}
for(const [lang,file,path] of locales) {
  const html = fs.readFileSync(file,'utf8');
  const h = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);
  assert.ok(h,file+' missing head');
  const htmlTag = html.match(/<html\b[^>]*>/i);
  assert.ok(htmlTag,file+' missing html element');
  assert.equal(attrs(htmlTag[0]).lang,lang,file+' wrong html lang');
  const links = [...h[1].matchAll(/<link\b[^>]*>/gi)].map(m=>attrs(m[0]));
  const canon = links.filter(v => v.rel === 'canonical');
  assert.equal(canon.length,1,file+' canonical count');
  assert.equal(canon[0].href,root+path,file+' wrong canonical');
  const alternates = links.filter(v=>v.rel === 'alternate');
  assert.equal(alternates.length,6,file+' alternate count');
  const found = {};
  for (const a of alternates) {
    assert.ok(a.hreflang,file+' unlabeled alternate');
    assert.ok(!Object.hasOwn(found,a.hreflang),file+' duplicate alternate');
    found[a.hreflang] = a.href;
  }
  assert.deepEqual(found,expected,file+' mismatched reciprocal hreflang links');
  const scripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map(m=>JSON.parse(m[1])).filter(s=>s['@type']==='CollectionPage');
  assert.equal(scripts.length,1,file+' CollectionPage count');
  assert.equal(scripts[0].url,root+path,file+' JSON-LD URL');
  assert.equal(scripts[0].inLanguage,lang,file+' JSON-LD language');
  assert.ok(scripts[0].name && scripts[0].description,file+' JSON-LD text');
  assert.ok(!scripts[0].review && !scripts[0].aggregateRating,file+' unsupported ratings');
  console.log('SEO OK '+lang+': '+file);
}
console.log('PASS: canonical, alternate URLs, and CollectionPage evidence in five languages');
