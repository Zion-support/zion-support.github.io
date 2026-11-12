'use strict';
// Read-only validation of the real publish artifact. Never render test fixtures into out/.
const fs=require('node:fs'), path=require('node:path'), assert=require('node:assert/strict'), crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const copy=JSON.parse(fs.readFileSync(path.join(root,'content/finops-scenario.json'),'utf8'));
const L=['en','pt','es','fr','de'];
const origin='https://ziontechgroup.com';
const prefix=l=>l==='en'?'/':'/'+l+'/';
const route=(l,guide=false)=>prefix(l)+'apps/finops-'+(guide?'pilot-guide':'scenario-estimator')+'.html';
const esc=s=>String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const file=(dir,u)=>path.join(dir,u.slice(1)+(u.endsWith('/')?'index.html':''));
function checkPage(h,l,guide){
 const c=copy[l],u=route(l,guide),title=guide?c.guide:c.title;
 assert(h.includes('<html lang="'+c.lang+'"'),u+' language');
 assert(h.includes('<title>'+esc(title)+' — Zion Tech Group</title>'),u+' translated title');
 assert(h.includes('rel="canonical" href="'+origin+u+'"'),u+' canonical');
 assert(!/http-equiv\s*=\s*["']refresh/i.test(h),u+' must not redirect');
 assert.equal((h.match(/<h1\b/g)||[]).length,1,u+' one h1');
 for(const k of L)assert(h.includes('hreflang="'+copy[k].lang+'" href="'+origin+route(k,guide)+'"'),u+' alternate '+k);
 assert.equal((h.match(/rel="alternate"/g)||[]).length,6,u+' six alternates');
 if(guide){
  for(const step of c.steps)assert(h.includes(esc(step)),u+' complete translated steps');
 }else{
  assert.equal((h.match(/<form\b/g)||[]).length,1,u+' working calculator form');
  assert(h.includes('id="finops-scenario-form"'),u+' form identifier');
  for(const id of ['baseline','reduction','recurring','implementation','months'])assert(h.includes('id="'+id+'"'),u+' input '+id);
  assert(h.includes('id="finops-scenario-result"'),u+' result container');
  assert(h.includes('src="/assets/js/finops-scenario.js"'),u+' calculator script');
  const embedded=h.match(/<script type="application\/json" id="finops-scenario-copy">([\s\S]*?)<\/script>/);
  assert(embedded,u+' localized runtime data');
  assert.deepEqual(JSON.parse(embedded[1]),c,u+' complete runtime translation');
 }
 for(const key of ['limits','method'])assert(h.includes(esc(c[key])),u+' '+key);
}
function verify(output){
 const dir=path.resolve(output),read=u=>fs.readFileSync(file(dir,u),'utf8');
 const before=new Map(),capture=u=>{const f=file(dir,u);before.set(f,crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex'));};
 for(const l of L){
  for(const guide of [false,true]){capture(route(l,guide));checkPage(read(route(l,guide)),l,guide);}
  for(const u of ['/'+l+'/',...['roi-calc','sla-calculator','ai-governance-checklist'].map(s=>prefix(l)+s+'/'),prefix(l)+'apps/network-learning-paths.html']){
   capture(u);const h=read(u);
   assert.equal((h.match(/<!--finops-scenario:start-->/g)||[]).length,1,u+' unique promotion');
   assert(h.includes(esc(copy[l].promotion)),u+' promotion in selected language');
   assert(h.includes('href="'+route(l)+'"'),u+' localized estimator link');
  }
 }
 const manifest=JSON.parse(read('/apps/finops-scenario-publication.json'));
 assert.equal(manifest.pages.length,10);assert.equal(manifest.homepages.length,5);assert.equal(manifest.reciprocalPages.length,20);
 assert(fs.statSync(file(dir,'/assets/js/finops-scenario.js')).size>0,'Calculator runtime required');
 // Regression cases: the former title-only fixture and missing runtime controls must fail.
 const good=read(route('en'));
 for(const bad of [
  good.replace(/<form\b[\s\S]*?<\/form>/,''),
  good.replace('id="baseline"','id="missing-baseline"'),
  good.replace('src="/assets/js/finops-scenario.js"','src="/missing.js"'),
  good.replace('<html lang="en"','<html lang="pt-BR"')
 ])assert.throws(()=>checkPage(bad,'en',false));
 for(const [f,hash] of before)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex'),hash,'Validation changed '+f);
 console.log('PASS: 10 real FinOps pages, 25 localized promotions, runtime, manifest, 4 negative cases; all artifact bytes preserved.');
}
module.exports={verify,checkPage};
if(require.main===module)verify(process.argv[2]||path.join(root,'out'));
