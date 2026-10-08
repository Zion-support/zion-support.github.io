'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),vm=require('node:vm'),cp=require('node:child_process');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-finance-')),out=path.join(root,'out'),renderer=path.resolve('scripts/render-finance-insurance-paths.cjs');
const shared=JSON.parse(fs.readFileSync('content/discovery-showcase.json','utf8'));
const slugs=['cash-flow-forecaster','ar-collections-copilot','policy-comparison-ai','underwriting-copilot-ai','claims-automation-ai','fraud-transaction-monitor','aml-screening-ai'];
const write=(f,s)=>{fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,s);};
write(path.join(root,'content/discovery-showcase.json'),JSON.stringify(shared));
const preserved='<form id="preserved"><input name="baseline"></form>';
for(const l of Object.keys(shared)){const p=l==='en'?'':l+'/';for(const r of [p+'discovery/index.html',...slugs.map(s=>p+s+'/index.html'),(l==='pt'?'':l+'/')+'index.html'])write(path.join(out,r),'<html lang="'+shared[l].lang+'"><body><main>'+preserved+'</main></body></html>');}
try{
 for(let i=0;i<2;i++)cp.execFileSync(process.execPath,[renderer,out],{cwd:root,stdio:'pipe',timeout:20000});
 const manifest=JSON.parse(fs.readFileSync(path.join(out,'apps/finance-insurance-publication.json'),'utf8'));
 assert.equal(manifest.pages.length,5);assert.equal(manifest.homepages.length,5);assert.equal(manifest.appLinks.length,35);
 for(const route of [...manifest.homepages,...manifest.appLinks]){const h=fs.readFileSync(path.join(out,route.slice(1),'index.html'),'utf8');assert(h.includes(preserved));assert.equal((h.match(/<!--finance-paths:start-->/g)||[]).length,1);}
 for(const [i,route] of manifest.pages.entries()){
  const h=fs.readFileSync(path.join(out,route.slice(1)),'utf8'),l=['en','pt','es','fr','de'][i];assert(h.includes('<html lang="'+shared[l].lang+'">'));assert.equal((h.match(/rel="alternate"/g)||[]).length,6);assert.equal((h.match(/type="checkbox"/g)||[]).length,4);assert(!/<form\b|fetch\(|XMLHttpRequest|localStorage/.test(h));
  const script=(h.match(/<script>([\s\S]*?)<\/script>/)||[])[1];assert(script);new vm.Script(script);
  const listeners={},checks=[0,1,2,3].map(i=>({checked:i<2,addEventListener:(e,fn)=>{listeners['change'+i]=fn;}})),progress={value:''},button={addEventListener:(e,fn)=>{listeners.download=fn;}};let downloaded=false,parts;
  const document={querySelectorAll:s=>s==='input[type=checkbox]'?checks:s==='input:checked'?checks.filter(x=>x.checked):checks.map((x,i)=>({textContent:'Item '+i,querySelector:()=>x})),getElementById:s=>s==='progress'?progress:s==='download-checklist'?button:{textContent:'Synthetic-only planning limits'},querySelector:()=>({textContent:'Local checklist'}),createElement:()=>({click:()=>{downloaded=true;}})};
  vm.runInNewContext(script,{document,Blob:function(p){parts=p;},URL:{createObjectURL:()=> 'blob:local-test',revokeObjectURL:()=>{}},setTimeout:fn=>fn()});listeners.change0();assert.equal(progress.value,'2 / 4');listeners.download();assert(downloaded);assert(parts[0].includes(String.fromCharCode(10)));assert(parts[0].includes('[x] Item 0'));assert(parts[0].includes('[ ] Item 3'));
 }
 console.log('PASS: EN/PT/ES/FR/DE, 35 reciprocal links, five homepage ads, idempotency, preserved forms, generated JS syntax, progress and local text export.');
}finally{fs.rmSync(root,{recursive:true,force:true});}
