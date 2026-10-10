'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),cp=require('node:child_process');
const out=fs.mkdtempSync(path.join(os.tmpdir(),'tide-network-'));
const locales=['en','pt','es','fr','de'];const prefix=l=>l==='en'?'':l+'/';const form='<form id="preserve"><input name="email"><button>Original</button></form>';
function write(p,lang){const f=path.join(out,p);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,'<!doctype html><html lang="'+lang+'"><body>'+form+'</body></html>');}
for(const l of locales){const p=prefix(l);for(const r of ['index.html','apps/index.html','discovery/index.html','apps/finance-insurance-paths.html'])write(p+r,l);}
write('en/index.html','en');
const run=()=>cp.execFileSync(process.execPath,[path.join(__dirname,'render-network-start-here.cjs'),out],{encoding:'utf8'});
run();const snapshot=new Map();
for(const l of locales){const f=path.join(out,prefix(l)+'apps/network-start-here.html');const h=fs.readFileSync(f,'utf8');assert(h.includes('href="/'+prefix(l)+'apps/finance-insurance-paths.html"'));assert.equal((h.match(/<article>/g)||[]).length,7);assert.equal((h.match(/rel="alternate"/g)||[]).length,6);assert.equal((h.match(/zion-network-nav:start/g)||[]).length,1);snapshot.set(f,h);}
run();for(const [f,h]of snapshot)assert.equal(fs.readFileSync(f,'utf8'),h,'idempotency');
for(const l of locales){const h=fs.readFileSync(path.join(out,prefix(l)+'apps/finance-insurance-paths.html'),'utf8');assert(h.includes(form),'original form preserved');}
fs.unlinkSync(path.join(out,'de/apps/finance-insurance-paths.html'));run();const de=fs.readFileSync(path.join(out,'de/apps/network-start-here.html'),'utf8');assert(!de.includes('href="/de/apps/finance-insurance-paths.html"'));assert.equal((de.match(/<article>/g)||[]).length,7);
console.log('PASS: 5 localized finance cards; 7 pathways per guide; head alternates preserved; idempotent renders; existing forms preserved; missing destination suppressed.');fs.rmSync(out,{recursive:true,force:true});
