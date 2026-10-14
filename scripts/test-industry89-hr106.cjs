'use strict';
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict');
const r=require('./render-industry89-hr106.cjs'),out=fs.mkdtempSync(path.join(os.tmpdir(),'industry-guides-'));let checks=0;
const check=f=>{f();checks++;};
try{
 for(const l of r.L){const f=path.join(out,r.home(l).slice(1),'index.html');fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,'<!DOCTYPE html><html><head><link rel="canonical" href="https://ziontechgroup.com'+r.home(l)+'"></head><body><form><input name="keep"></form><script>const preserved=1;</script><main><!--zion-network-home:start--><section><h2>Existing promotion</h2><div>Historical cards</div></section><!--zion-network-home:end--><!--construction106:start--><aside>Existing construction</aside><!--construction106:end--></main></body></html>');}
 const originals=Object.fromEntries(r.L.map(l=>[l,fs.readFileSync(path.join(out,r.home(l).slice(1),'index.html'),'utf8')]));
 const m=r.run(out);check(()=>assert.equal(m.pages.length,10));
 for(const l of r.L){for(let i=0;i<2;i++){const h=fs.readFileSync(path.join(out,r.route(l,i).slice(1)),'utf8');check(()=>{assert(h.includes('<html lang="'+l+'">'));assert(h.includes('rel="canonical" href="https://ziontechgroup.com'+r.route(l,i)+'"'));assert.equal((h.match(/rel="alternate"/g)||[]).length,6);assert.equal((h.match(/aria-current="page"/g)||[]).length,1);assert.equal((h.match(/<article>/g)||[]).length,i?4:8);assert(!/<form\b|<script\b|the moment you submit|all live|oee-intelligence-copilot\//i.test(h));assert(h.includes(r.C[l].limits[i]));for(const k of r.L)assert(h.includes('href="'+r.route(k,i)+'"'));});}check(()=>assert.equal(fs.readFileSync(path.join(out,r.home(l).slice(1),'index.html'),'utf8').replace(r.owned,''),originals[l]));}
 const snapshot=JSON.stringify([m,...r.L.flatMap(l=>[fs.readFileSync(path.join(out,r.home(l).slice(1),'index.html'),'utf8'),...([0,1].map(i=>fs.readFileSync(path.join(out,r.route(l,i).slice(1)),'utf8')))])]);const n=r.run(out);check(()=>assert.equal(JSON.stringify([n,...r.L.flatMap(l=>[fs.readFileSync(path.join(out,r.home(l).slice(1),'index.html'),'utf8'),...([0,1].map(i=>fs.readFileSync(path.join(out,r.route(l,i).slice(1)),'utf8')))])]),snapshot));
 check(()=>assert.throws(()=>r.promote('<main>No network anchor</main>','en')));
 check(()=>assert.throws(()=>r.promote('<meta http-equiv="refresh" content="0">','en')));
 check(()=>assert.throws(()=>r.promote('<!--zion-network-home:start--><section></section><!--zion-network-home:end-->'.repeat(2),'en')));
 const bad=path.join(out,r.route('en',0).slice(1));fs.writeFileSync(bad,'<form>Protected</form>');check(()=>assert.throws(()=>r.run(out)));
 console.log('PASS '+checks+' scoped assertions: ten locales/pages, protected homepage bytes, idempotence and negative gates. Synthetic fixtures only; no production build/browser/native-speaker certification.');
}finally{fs.rmSync(out,{recursive:true,force:true});}
