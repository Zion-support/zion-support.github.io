'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {copy,transform,render,protectedParts}=require('./render-supplier-keyboard.cjs');
function run(root){let checks=0;const ok=(condition,message)=>{assert(condition,message);checks++;};
 for(const key of Object.keys(copy)){
  const c=copy[key],file=path.join(root,'apps/supplier-quote-evidence-workbench'+c.suffix+'.html'),before=fs.readFileSync(file,'utf8'),after=transform(before,key);
  ok(after===transform(after,key),'Idempotence '+key);
  ok(JSON.stringify(protectedParts(before))===JSON.stringify(protectedParts(after)),'Protected byte parity '+key);
  for(const id of ['supplier-calculator-target','supplier-report-target','supplier-keyboard-help','supplier-keyboard-style'])ok(after.split('id="'+id+'"').length===2,'Unique '+id+' '+key);
  for(const text of [c.calculator,c.report,c.title])ok(after.includes(text),'Translated label '+key);
  for(const fragment of ['supplier-calculator-target','supplier-report-target'])ok(after.includes('href="#'+fragment+'"')&&after.includes('id="'+fragment+'" tabindex="-1"'),'Focusable destination '+key);
  ok((before.match(/<link rel="(?:alternate|canonical)"[^>]*>/g)||[]).join('')===(after.match(/<link rel="(?:alternate|canonical)"[^>]*>/g)||[]).join(''),'Locale metadata preservation '+key);
  ok((before.match(/<script\b/g)||[]).length===(after.match(/<script\b/g)||[]).length,'No added scripts '+key);
  for(const anchor of ['</head>','<header','<form id="quote-form">','<section aria-labelledby="report-title">','</main>']){assert.throws(()=>transform(before.replace(anchor,''),key));checks++;}
  assert.throws(()=>transform(before.replace('<html lang="'+c.lang+'">','<html lang="zz">'),key));checks++;
 }
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'supplier-keyboard-'));
 try{fs.mkdirSync(path.join(temp,'apps'));for(const c of Object.values(copy)){const name='supplier-quote-evidence-workbench'+c.suffix+'.html';fs.copyFileSync(path.join(root,'apps',name),path.join(temp,'apps',name));}const first=path.join(temp,'apps/supplier-quote-evidence-workbench.html'),saved=fs.readFileSync(first);fs.unlinkSync(path.join(temp,'apps/supplier-quote-evidence-workbench.de.html'));assert.throws(()=>render(temp));checks++;ok(fs.readFileSync(first).equals(saved),'Missing final locale causes no partial writes');}finally{fs.rmSync(temp,{recursive:true,force:true});}
 console.log('PASS '+checks+' supplier keyboard structural/preservation/negative checks; no browser certification.');return checks;
}
module.exports={run};if(require.main===module)run(process.argv[2]||'out');
