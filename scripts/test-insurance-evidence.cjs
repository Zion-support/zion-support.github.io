'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),cp=require('node:child_process'),vm=require('node:vm');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evidence-'));
const locales=['en','pt','es','fr','de'],slugs=['policy-comparison-ai','underwriting-copilot-ai','claims-automation-ai'];
// Browser assets are classic scripts. The repository uses type:module, so
// require(.js) does not provide CommonJS exports under the CI Node runtime.
// Execute the exact source in an isolated no-DOM context, without networking.
const browserModule={exports:{}};
vm.runInNewContext(fs.readFileSync('public/assets/js/insurance-evidence.js','utf8'),{module:browserModule},{filename:'insurance-evidence.js',timeout:1000});
const {evidenceReport}=browserModule.exports;assert.equal(typeof evidenceReport,'function');
const write=(rel,content)=>{const f=path.join(root,rel);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,content);};
try{
write('assets/js/insurance-evidence.js',fs.readFileSync('public/assets/js/insurance-evidence.js'));
for(const l of locales){const p=l==='en'?'':l+'/';const home=l==='pt'?'index.html':l+'/index.html';
write(home,'<!doctype html><main><form id="existing"><input name="preserved"></form></main>');
write(p+'apps/insurance-finance-guide.html','<!doctype html><main></main>');
for(const slug of slugs)write(p+slug+'/index.html','<!doctype html><main></main>');}
for(let i=0;i<2;i++)cp.execFileSync(process.execPath,['scripts/render-insurance-evidence.cjs',root],{stdio:'pipe'});
const manifest=JSON.parse(fs.readFileSync(path.join(root,'apps/insurance-evidence-publication.json'),'utf8'));
assert.equal(manifest.pages.length,5);assert.equal(manifest.homepages.length,5);
let cases=0;
for(const url of manifest.pages){const html=fs.readFileSync(path.join(root,url.slice(1)),'utf8');
const c=JSON.parse(html.match(/id="evidence-copy">([^<]+)</)[1]);
assert.equal(c.labels.length,6);assert.equal(c.modes.length,3);
for(const mode of c.modes){const empty=evidenceReport({mode},c);assert.equal(empty.missing.length,6);cases++;
const full=evidenceReport({mode,example:'SYNTHETIC',owner:'Owner',baseline:'10 examples',evidence:'Checklist',reviewer:'Reviewer',stop:'Stop on missing permission'},c);assert.equal(full.missing.length,0);assert(full.text.includes(c.limit));cases++;}
for(const lang of ['en','pt-BR','es','fr','de'])assert(html.includes('hreflang="'+lang+'"'));
for(const id of ['example','owner','baseline','evidence','reviewer','stop','mode','evidence-form','evidence-report','evidence-download'])assert.equal((html.match(new RegExp('id="'+id+'"','g'))||[]).length,1);
assert(html.includes('hreflang="x-default"'));}
for(const url of manifest.homepages){const html=fs.readFileSync(path.join(root,url.slice(1),'index.html'),'utf8');assert(html.includes('<form id="existing"><input name="preserved"></form>'));assert.equal((html.match(/data-evidence-link=/g)||[]).length,1);}
for(const l of locales){const p=l==='en'?'':l+'/';for(const slug of slugs){const html=fs.readFileSync(path.join(root,p+slug+'/index.html'),'utf8');assert.equal((html.match(/data-evidence-link=/g)||[]).length,1);}}
const asset=fs.readFileSync('public/assets/js/insurance-evidence.js','utf8');assert(!/innerHTML|fetch\(|XMLHttpRequest|localStorage|sessionStorage/.test(asset));assert(asset.includes('textContent=report'));
console.log('PASS '+cases+' report cases; five-language metadata, stable form IDs, 15 reciprocal app links, preserved homepage forms, idempotence and no network/storage/innerHTML.');
}finally{fs.rmSync(root,{recursive:true,force:true});}
