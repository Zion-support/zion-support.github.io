'use strict';
// Validate the actual assembled forms, then run mocked behavioral contracts.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),{spawnSync}=require('node:child_process');
const out=path.resolve(process.argv[2]||'out');
const asset=fs.readFileSync(path.join(out,'assets/js/discovery-delivery.js'),'utf8');
assert.equal(asset,fs.readFileSync('public/assets/js/discovery-delivery.js','utf8'),'Artifact application differs from tested source');
assert(!asset.includes('carlos@ziontechgroup.com'),'Unapproved extra CC');
let checks=0;
for(const [locale,lang] of [['en','en'],['pt','pt-BR'],['es','es'],['fr','fr'],['de','de']]){
 const file=path.join(out,locale==='en'?'discovery/index.html':locale+'/discovery/index.html');const html=fs.readFileSync(file,'utf8');
 assert(html.includes('<html lang="'+lang+'"'),'Wrong page language: '+locale);
 assert(html.includes('src="/assets/js/discovery-delivery.js"'),'Shared application missing: '+locale);
 assert(html.includes('/assets/css/discovery.css'),'Shared style missing: '+locale);
 assert(!html.includes('data-discovery-parity'),'Duplicate submit handler: '+locale);
 assert(!html.includes('carlos@ziontechgroup.com'),'Unexpected extra recipient: '+locale);
 for(const id of ['dform','form-errors','rscore','rbar','rsummary','rapps','rnext','report-text','email-fallback','result','copy-report','rsent','submit-report','download-report'])assert.equal([...html.matchAll(new RegExp('id="'+id+'"','g'))].length,1,'Unique form element '+id+' in '+locale);
 const process=html.match(/<select[^>]*name="process"[^>]*>([\s\S]*?)<\/select>/);assert(process,'Process selector missing');
 assert.equal([...process[1].matchAll(/<option\b/g)].length,11,'Expected placeholder and ten process paths');
 const home=fs.readFileSync(path.join(out,locale==='pt'?'index.html':locale+'/index.html'),'utf8');assert(home.includes('id="discovery-pilot-journey"'),'Localized homepage journey missing');
 const result=spawnSync(process.execPath||require('node:process').execPath,['--test','scripts/test-discovery-delivery-contract.cjs'],{encoding:'utf8',env:{...require('node:process').env,DISCOVERY_HTML:file}});
 if(result.status!==0){console.error(result.stdout,result.stderr);throw new Error('Discovery safety contract failed for '+locale);}
 checks+=22;
}
console.log(checks+' assembled-form assertions and 80 mocked behavioral tests passed; no real email sent.');
