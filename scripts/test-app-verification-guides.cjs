'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {C,L,RELEASE,route,home,page,run,promoteHome}=require('./render-app-verification-guides.cjs');
function verify(root){
  for(const l of L){
    const c=C[l],prefix=l==='en'?'/':'/'+l+'/',h=fs.readFileSync(path.join(root,route(l).slice(1)),'utf8');
    assert(h.includes(`data-verification-guide="${RELEASE}"`),'Current guide marker');
    assert.equal((h.match(/<h1\b/g)||[]).length,1,'One H1');
    assert(h.includes(`<html lang="${c.lang}">`),'Document language');
    assert(h.includes(`href="#main">${c.nav[4]}`),'Translated skip link');
    assert(h.includes('id="main" tabindex="-1"'),'Focusable skip target');
    assert(h.includes(`rel="canonical" href="https://ziontechgroup.com${route(l)}"`),'Canonical');
    assert.equal((h.match(/rel="alternate"/g)||[]).length,6,'Reciprocal alternates');
    assert.equal((h.match(/aria-current="page"/g)||[]).length,1,'One current locale');
    for(const k of L)assert(h.includes(`href="${route(k)}" lang="${C[k].lang}"`),'Same-topic language switch');
    for(const u of [home(l),prefix+'apps/',prefix+'apps/network.html',prefix+'discovery/',prefix+'apps/finops-scenario-estimator.html',prefix+'apps/finops-pilot-guide.html'])assert(h.includes(`href="${u}"`),'Localized destination '+u);
    assert(!h.includes('/apps/#app-paths-home'),'No broken catalog anchor');
    if(l!=='en')assert(!h.includes('>Skip to content<'),'No English skip leak');
    const ids=[...h.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'Unique IDs');
    assert(h.includes('/assets/css/apps-directory.css'),'Shared catalog styling');
    assert(!h.includes('/assets/css/site.css'),'Avoid conflicting legacy heading colors');
    assert(!/<(?:form|script)\b/i.test(h),'Editorial content only');
    const esc=s=>s.replace(/[&<>"']/g,k=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[k]));
    for(const [title,body] of [...c.levels,...c.checks,...c.record]){assert(h.includes(esc(title)));assert(h.includes(esc(body)));}
    assert(h.includes(esc(c.example)),'Complete translated example');
    const homepage=fs.readFileSync(path.join(root,home(l).slice(1),'index.html'),'utf8');
    assert.equal(promoteHome(homepage,l),homepage,'Homepage promotion present and idempotent');
    assert.equal((homepage.match(/data-verification-guide-home=/g)||[]).length,1,'One homepage promotion');
  }
  return 'PASS five verification guides and five homepage promotions: locale, working skip target, same-topic switcher, localized links, complete body and no forms/scripts in guides';
}
function regression(){
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-guide-regression-'));
  try{
    for(const l of L){
      const f=path.join(tmp,route(l).slice(1));fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,page(l));
      const h=path.join(tmp,home(l).slice(1),'index.html');fs.mkdirSync(path.dirname(h),{recursive:true});
      fs.writeFileSync(h,`<!doctype html><html lang="${C[l].lang}"><head><title>Existing</title></head><body><main><!--zion-network-map-home:start--><p>Existing map</p><!--zion-network-map-home:end--><form id="existing-form"><input name="keep"></form><script>const existing = true;</script></main></body></html>`);
    }
    const f=path.join(tmp,route('pt').slice(1)),block='<!--legacy-three-guide:start--><aside data-existing="keep">Existing reviewed resource links</aside><!--legacy-three-guide:end-->';
    fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace('</main>',block+'</main>'));
    run(tmp);const once=fs.readFileSync(f,'utf8');assert(once.includes(block),'Preserve reviewed injection bytes');run(tmp);assert.equal(fs.readFileSync(f,'utf8'),once,'Byte idempotence');
    fs.writeFileSync(f,once.replace('</main>','<form id="must-not-change"></form></main>'));
    const protectedContent=fs.readFileSync(f,'utf8');assert.throws(()=>run(tmp),/interactive/);assert.equal(fs.readFileSync(f,'utf8'),protectedContent,'Refuse interactive overwrite');
    console.log('PASS guide regeneration: extension preservation, idempotence and interactive-content refusal');
  }finally{fs.rmSync(tmp,{recursive:true,force:true});}
}
module.exports={verify};
if(require.main===module){regression();console.log(verify(process.argv[2]||'public'));}
