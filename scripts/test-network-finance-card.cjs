'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),cp=require('node:child_process');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'tide-network-')),out=path.join(root,'out'),scripts=path.join(root,'scripts');
fs.mkdirSync(scripts,{recursive:true});fs.copyFileSync(path.join(__dirname,'render-network-start-here.cjs'),path.join(scripts,'render-network-start-here.cjs'));
const locales=['en','pt','es','fr','de'];const prefix=l=>l==='en'?'':l+'/';const form='<form id="preserve"><input name="email"><button>Original</button></form>';
function write(p,lang){const f=path.join(out,p);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,'<!doctype html><html lang="'+lang+'"><body><main>'+form+'</main></body></html>');}
for(const l of locales){const p=prefix(l);for(const r of ['index.html','apps/index.html','discovery/index.html','apps/finance-insurance-paths.html'])write(p+r,l);}
write('en/index.html','en');
const run=()=>cp.execFileSync(process.execPath,[path.join(scripts,'render-network-start-here.cjs'),out],{encoding:'utf8'});
try{
 run();const snapshot=new Map();
 for(const l of locales){const f=path.join(out,prefix(l)+'apps/network-start-here.html');const h=fs.readFileSync(f,'utf8');assert(h.includes('href="/'+prefix(l)+'apps/finance-insurance-paths.html"'));assert.equal((h.match(/<article>/g)||[]).length,7);assert(h.includes('box-sizing:border-box;overflow-wrap:anywhere;max-width:1120px'));assert.equal((h.match(/rel="alternate"/g)||[]).length,6);assert.equal((h.match(/zion-network-nav:start/g)||[]).length,1);snapshot.set(f,h);}
 run();for(const [f,h]of snapshot)assert.equal(fs.readFileSync(f,'utf8'),h,'idempotency');
 for(const l of locales){const h=fs.readFileSync(path.join(out,prefix(l)+'apps/finance-insurance-paths.html'),'utf8');assert(h.includes(form),'original form preserved');}
 fs.unlinkSync(path.join(out,'de/apps/finance-insurance-paths.html'));run();let de=fs.readFileSync(path.join(out,'de/apps/network-start-here.html'),'utf8');assert(!de.includes('href="/de/apps/finance-insurance-paths.html"'));assert.equal((de.match(/<article>/g)||[]).length,7);
 // A deterministic dependency fixture proves generation happens before card availability checks.
 const dependency=path.join(scripts,'render-finance-insurance-paths.cjs');
 fs.writeFileSync(dependency,"const fs=require('node:fs'),path=require('node:path');const out=process.argv[2];fs.writeFileSync(path.join(out,'de/apps/finance-insurance-paths.html'),'<html lang=\"de\"><body>Generated finance destination</body></html>');fs.writeFileSync(path.join(out,'finance-dependency-ran.txt'),process.cwd());");
 run();de=fs.readFileSync(path.join(out,'de/apps/network-start-here.html'),'utf8');assert(de.includes('href="/de/apps/finance-insurance-paths.html"'));assert.equal(fs.readFileSync(path.join(out,'finance-dependency-ran.txt'),'utf8'),root);
 console.log('PASS: five localized cards; seven pathways; metadata; idempotency; forms preserved; absent targets hidden; dependency runs before link checks.');
}finally{fs.rmSync(root,{recursive:true,force:true});}
