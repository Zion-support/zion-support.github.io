'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const out=process.argv[2]||'out';
const original=fs.readFileSync('public/assets/js/supplier-quote-evidence.js','utf8');
const core=original.match(/const gates=\[[\s\S]*?(?=root\.ZionQuoteEvidence=)/)[0];
for(const l of ['en','pt','es','fr','de']){
 const suffix=l==='en'?'':'.'+(l==='pt'?'pt-br':l),html=fs.readFileSync(path.join(out,'apps/supplier-quote-evidence-workbench'+suffix+'.html'),'utf8');
 const script=fs.readFileSync(path.join(out,'assets/js/supplier-evidence-'+l+'.js'),'utf8');
 assert(script.includes(core),'Calculation core changed '+l);assert(!/fetch\s*\(|XMLHttpRequest|localStorage|sessionStorage/.test(script));
 assert.equal((html.match(/rel="alternate"/g)||[]).length,6);assert(html.includes('<html lang="'+(l==='pt'?'pt-BR':l)+'">'));assert(html.includes('aria-current="page"'));assert(html.includes('data-supplier-release="supplier-evidence-2026-10-09-v2"'));
 for(const id of ['quote-form','example','export','output','include-b','supplier-a','supplier-b'])assert(html.includes('id="'+id+'"'));
 const sandbox={};vm.runInNewContext(script,sandbox);const {calculate,gates}=sandbox.ZionQuoteEvidence;
 const row={base:100,travel:10,freight:5,nonrecoverable:5,other:10};const r=calculate(row,40,10,'USD');assert.equal(r.cost,130);assert.equal(r.sell,182);assert.equal(r.clientTax,18.2);assert.equal(r.total,200.2);assert.equal(r.missing.length,9);
 assert.throws(()=>calculate(row,39,0,'USD'));assert.throws(()=>calculate({...row,base:-1},40,0,'USD'));assert.throws(()=>calculate({...row,base:0.001},40,0,'USD'));
 const ready={...row};for(const g of gates)ready[g]=true;assert.match(calculate(ready,40,0,'USD').status,/owner review/);
 const home=l==='pt'?'index.html':l+'/index.html';assert.equal((fs.readFileSync(path.join(out,home),'utf8').match(/data-supplier-evidence=/g)||[]).length,1);
}
console.log('PASS supplier evidence: 5 locales, calculation integrity, markup/tax/gates/privacy and publication metadata.');

// Protect local UI state and downloaded report parity on every supplier build.
require('node:child_process').execFileSync(process.execPath, [path.join(__dirname,'test-supplier-evidence-runtime.cjs'),out], {stdio:'inherit'});
