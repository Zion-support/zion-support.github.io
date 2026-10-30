'use strict';
// Preserve the existing field release byte-for-byte in the base module.
require('./render-field-evidence-release-base.cjs');
// Synchronous child execution waits for all Planner QA before artifact upload.
const {execFileSync}=require('node:child_process'),path=require('node:path');
for(const script of ['render-pilot-planner-locales.cjs','render-pilot-planner-guide-links.cjs','render-field-planner-primary.cjs','render-agriculture111.cjs'])execFileSync(process.execPath,[path.join(__dirname,script),process.argv[2]||'out'],{stdio:'inherit'});

// Keep legacy locale entry URLs identical to the completed translated guides.
// Copy only after all guide promotions and primary-link transforms have run.
const fs=require('node:fs'),assert=require('node:assert/strict');
const output=process.argv[2]||'out';
for(const [locale,suffix] of [['pt','pt-br'],['es','es'],['fr','fr'],['de','de']]){
 const source=path.join(output,'apps','field-service-evidence-guide.'+suffix+'.html');
 const target=path.join(output,locale,'apps','field-service-evidence-guide.html');
 const bytes=fs.readFileSync(source);
 fs.mkdirSync(path.dirname(target),{recursive:true});
 fs.writeFileSync(target,bytes);
 assert(fs.readFileSync(target).equals(bytes),'Field guide alias differs: '+locale);
}
console.log('PASS final field guide aliases: four locale URLs match the completed canonical pages.');

