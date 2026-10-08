'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),os=require('node:os'),cp=require('node:child_process');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-ops-field-'));
const inputs=['index.html','en/index.html','es/index.html','fr/index.html','de/index.html','roi-calc/index.html','sla-calculator/index.html','ai-governance-checklist/index.html'];
const form='<form action="/original"><input name="preserve" value="same"></form>';
try{
 for(const f of inputs){fs.mkdirSync(path.dirname(path.join(tmp,f)),{recursive:true});fs.writeFileSync(path.join(tmp,f),'<html lang="en"><body><main>'+form+'</main></body></html>');}
 const renderer=path.join(__dirname,'render-ops-field-guides.cjs');
 cp.execFileSync(process.execPath,[renderer,tmp]);
 const before={};for(const f of inputs)before[f]=fs.readFileSync(path.join(tmp,f),'utf8');
 cp.execFileSync(process.execPath,[renderer,tmp]);
 for(const f of inputs){const s=fs.readFileSync(path.join(tmp,f),'utf8');assert.equal(s,before[f]);assert(s.includes(form));assert.equal((s.match(/<form\b/g)||[]).length,1);}
 for(const l of ['en','pt','es','fr','de'])for(const slug of ['ai-it-ops-command-center','field-services-smart-hands-playbook']){
  const f=path.join(tmp,l==='en'?'':l,'apps',slug+'.html'),s=fs.readFileSync(f,'utf8');assert(s.includes('lang="'+(l==='pt'?'pt-BR':l)+'"'));assert.equal((s.match(/rel="alternate"/g)||[]).length,6);assert(!/<form\b|<script\b/i.test(s));
  for(const m of s.matchAll(/rel="alternate"[^>]*href="https:\/\/ziontechgroup.com\/([^\"]+)"/g))assert(fs.existsSync(path.join(tmp,m[1])));
 }
 console.log('PASS operations/field fixture: ten locales, 60 alternate targets, two identical renders, original forms retained.');
}finally{fs.rmSync(tmp,{recursive:true,force:true});}
