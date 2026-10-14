"use strict";
const test=require('node:test'),assert=require('node:assert/strict');
const {IDS,LOCALES,protectedParts,attrs,sections,transform}=require('./consolidate-home-promotions.cjs');
function fixture(locale){return '<!doctype html><html lang="'+(locale==='pt'?'pt-BR':locale)+'"><head><style>.section{padding:1rem}</style></head><body><main><section id="app-paths-home"><h2>'+locale+'</h2><details><summary>'+locale+' archive</summary><section id="old-promotion"><a href="/old/">old</a></section></details></section>'+[...IDS].map(id=>'<section id="'+id+'"><h2>'+locale+'</h2><section id="'+id+'-child"><a href="/'+locale+'/resource/">resource</a></section></section>').join('')+'<section id="services"><form action="/unchanged"><input name="email"></form></section><script>const example="<section>not markup</section>";</script></main></body></html>';}
for(const locale of Object.keys(LOCALES))test('preservation and idempotence: '+locale,()=>{
 const before=fixture(locale),r=transform(before);
 assert.equal(r.moved.length,9);assert.deepEqual(protectedParts(r.html),protectedParts(before));
 assert.deepEqual(attrs(r.html,'href'),attrs(before,'href'));assert.deepEqual(attrs(r.html,'id'),attrs(before,'id'));
 const owner=sections(r.html).find(s=>s.id==='app-paths-home');
 for(const id of IDS)assert(owner.html.includes('id="'+id+'"'));
 assert.equal(sections(r.html).filter(s=>IDS.has(s.id)).length,0);
 assert.equal(transform(r.html).html,r.html);assert.deepEqual(transform(r.html).moved,[]);
});
test('protected promotion is left outside archive',()=>{
 const h=fixture('en').replace('<section id="registry-explorer-path">','<section id="registry-explorer-path"><form action="/safe"></form>');
 const r=transform(h);assert.equal(r.moved.length,8);assert(sections(r.html).some(s=>s.id==='registry-explorer-path'));
 assert.deepEqual(protectedParts(r.html),protectedParts(h));
});
test('missing archive fails closed',()=>assert.throws(()=>transform('<html><section id="registry-explorer-path"></section></html>'),/archive required/));
test('unbalanced section fails closed',()=>assert.throws(()=>transform('<section id="app-paths-home">'),/Unclosed section/));
test('missing details fails closed',()=>assert.throws(()=>transform('<section id="app-paths-home"></section>'),/details required/));
test('missing summary fails closed',()=>assert.throws(()=>transform('<section id="app-paths-home"><details></details></section>'),/summary required/));
