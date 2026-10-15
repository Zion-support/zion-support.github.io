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

for(const [name,archive] of [
 ['unmatched closing details','<summary>archive</summary></details>'],
 ['missing closing details','<details><summary>archive</summary>'],
 ['summary outside details','<summary>archive</summary><details></details>'],
 ['duplicate outer details','<details><summary>A</summary></details><details><summary>B</summary></details>'],
 ['unclosed summary','<details><summary>archive</details>']
])test('malformed archive rejected: '+name,()=>assert.throws(()=>transform('<section id="app-paths-home">'+archive+'</section><section id="registry-explorer-path"><a href="/resource/">resource</a></section>')));
test('duplicate archive owner rejected',()=>assert.throws(()=>transform('<section id="app-paths-home"><details><summary>A</summary></details></section><section id="app-paths-home"><details><summary>B</summary></details></section>')));
test('late locale failure does not write earlier locales',()=>{
 const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{render}=require('./consolidate-home-promotions.cjs');
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-archive-'));
 try{const files=[];for(const [locale,url] of Object.entries(LOCALES)){const file=path.join(root,url.slice(1),'index.html');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,fixture(locale));files.push(file);}
 fs.writeFileSync(files.at(-1),'<section id="app-paths-home"><summary>broken</summary></details></section>');
 const before=files.map(f=>fs.readFileSync(f));assert.throws(()=>render(root));files.forEach((f,i)=>assert.deepEqual(fs.readFileSync(f),before[i]));
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});
