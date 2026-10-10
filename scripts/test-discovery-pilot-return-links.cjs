'use strict';
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const apply=require('./render-discovery-pilot-return-links.cjs');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-pilot-links-'));
const locales={en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'};
try{
 const guide=path.join(tmp,'apps/free-discovery-to-pilot-guide.html');fs.mkdirSync(path.dirname(guide),{recursive:true});fs.writeFileSync(guide,'<main>Guide fixture</main>');
 for(const [l,lang] of Object.entries(locales)){
  const p=path.join(tmp,l==='en'?'en':l,'index.html');fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,`<html lang="${lang}"><main><p id="keep-existing">Keep existing homepage content</p></main></html>`);
 }
 cp.execFileSync(process.execPath,[path.join(__dirname,'render-network-benefits.cjs'),tmp],{stdio:'pipe'});
 let cases=0;const snapshots={};
 for(const [l,lang] of Object.entries(locales))for(const kind of ['discovery-benefits','discovery-workflow-paths']){
  const file=path.join(tmp,l==='en'?'':l,'apps',kind+'.html');const h=fs.readFileSync(file,'utf8');snapshots[file]=h;
  assert(h.includes(`<html lang="${lang}">`));assert.equal((h.match(/hreflang=/g)||[]).length,6);assert.equal((h.match(/id="free-discovery-pilot-return-link"/g)||[]).length,1);
  assert(h.includes('href="/apps/free-discovery-to-pilot-guide.html"'));assert(h.includes('commercial@ziontechgroup.com'));assert(!h.includes('<form'));assert(!h.includes('<script'));cases++;
 }
 assert.equal(apply(tmp),10);for(const [f,h] of Object.entries(snapshots)){assert.equal(fs.readFileSync(f,'utf8'),h);cases++;}
 for(const l of Object.keys(locales)){assert(fs.readFileSync(path.join(tmp,l==='en'?'en':l,'index.html'),'utf8').includes('id="keep-existing"'));cases++;}
 const missing=path.join(tmp,'absent');fs.mkdirSync(missing);assert.throws(()=>apply(missing),/Pilot guide must exist/);cases++;
 const malformed=path.join(tmp,'apps/discovery-benefits.html');fs.writeFileSync(malformed,'<html>Missing main</html>');assert.throws(()=>apply(tmp),/main landmark/);cases++;
 console.log(JSON.stringify({passed:cases,generatedPages:10,locales:5,checks:['all-locales','language-metadata','existing-content','unique-backlinks','idempotence','missing-guide-fail-closed','malformed-page-fail-closed','no-forms-or-network']},null,2));
}finally{fs.rmSync(tmp,{recursive:true,force:true});}
