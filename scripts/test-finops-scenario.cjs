'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const pagesOnly=process.argv.includes('--pages-only');
const out=process.argv[2]||'out',copy=JSON.parse(fs.readFileSync('content/finops-scenario.json','utf8')),L=['en','pt','es','fr','de'],prefix=l=>l==='en'?'/':'/'+l+'/',file=u=>path.join(out,u.slice(1)+(u.endsWith('/')?'index.html':''));
const js=fs.readFileSync(file('/assets/js/finops-scenario.js'),'utf8');assert(!/fetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon|innerHTML/.test(js));
const context={};vm.runInNewContext(js,context);const calc=context.ZionFinopsScenario.calculate;
assert.deepEqual(Array.from(calc([10000,15,200,3000,12])).slice(0,3),[1500,1300,12600]);assert.equal(calc([10000,15,200,3000,12])[3],3000/1300);assert.equal(calc([0,0,0,0,1])[3],null);assert.equal(calc([100,0,25,50,2])[2],-100);assert.equal(calc([100,100,0,0,1])[3],0);
assert.deepEqual(Array.from(calc([1000,20,50,200,6])),[200,150,700,200/150]);
assert.deepEqual(Array.from(calc([1000,20,250,200,6])),[200,-50,-500,null]);
for(const v of [[-1,1,0,0,1],[1,101,0,0,1],[1,1,0,0,0],[1,1,0,0,1.5],[Infinity,1,0,0,1],[1,1,NaN,0,1],[1,1,0,-1,1],[1,1,0,0,121]])assert.throws(()=>calc(v));
const esc=s=>s.replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const common=JSON.parse(fs.readFileSync('content/operational-tools.json','utf8'));
for(const l of L){
 const c=copy[l],p=prefix(l);
 for(const slug of ['finops-scenario-estimator','finops-pilot-guide']){
  const guide=slug.endsWith('guide'),html=fs.readFileSync(file(p+'apps/'+slug+'.html'),'utf8');
  assert(html.includes('lang="'+c.lang+'"'));
  assert.equal((html.match(/rel="alternate"/g)||[]).length,6);
  assert(html.includes('data-finops-scenario="2026-10-09-finops-scenario-v1"'));
  const intro=guide?c.pilot.intro:c.intro;
  for(const text of [intro,c.limits,c.method,...c.faq.flat()])assert(html.includes(esc(text)),'Translated content '+l+' '+slug);
  assert(html.includes('<meta name="description" content="'+esc(intro)+'">'),'Specific description '+l+' '+slug);
  assert.equal((html.match(/<form\b/g)||[]).length,guide?0:1);
  const catalog='<a href="'+p+'apps/">'+esc(common[l].network)+'</a>';
  assert.equal(html.split(catalog).length-1,2,'Header/footer preserve catalog locale '+l+' '+slug);
  if(l!=='en')assert(!html.includes('<a href="/apps/">'+esc(common[l].network)+'</a>'),'No English catalog return '+l);
  assert(html.includes('href="'+p+'apps/network.html"'),'Localized map '+l);
  assert(html.includes('href="'+p+'apps/app-verification-guide.html"'),'Localized verification '+l);
  assert.equal((html.match(/data-finops-peer-links=/g)||[]).length,1,'Unique peer links '+l);
  if(guide){
   assert(!html.includes(esc(c.intro)),'Guide must not call itself a calculator '+l);
   assert.equal((html.match(/data-finops-pilot=/g)||[]).length,1,'One worked example '+l);
   for(const text of [c.pilot.exampleTitle,c.pilot.exampleIntro,...c.pilot.scenarioNames,c.pilot.exampleNote,c.pilot.reviewTitle,...c.pilot.reviewSteps])assert(html.includes(esc(text)),'Complete pilot copy '+l);
   for(const inputs of [[1000,20,50,200,6],[1000,20,250,200,6]]){
    const expected=Array.from(calc(inputs)).map((value,i)=>'<dt>'+esc(c.outputs[i])+'</dt><dd>'+esc(value===null?c.noPayback:new Intl.NumberFormat(c.locale,i===3?{maximumFractionDigits:2}:{style:'currency',currency:'USD'}).format(value))+'</dd>').join('');
    assert(html.includes('<dl>'+expected+'</dl>'),'Worked example matches unchanged runtime '+l);
   }
  }
 }
 const ids={},events={};function element(){return {textContent:'',children:[],replaceChildren(){this.children=[];this.textContent='';},append(...children){this.children.push(...children);}};}
 ids['finops-scenario-copy']={textContent:JSON.stringify(c)};ids['finops-scenario-result']=element();ids['finops-scenario-form']={addEventListener:(type,fn)=>events[type]=fn,checkValidity:()=>true};['baseline','reduction','recurring','implementation','months'].forEach((id,i)=>ids[id]={value:String([10000,15,200,3000,12][i])});
 const browser={document:{getElementById:id=>ids[id],createElement:()=>element()},Intl};vm.runInNewContext(js,browser);assert.equal(ids['finops-scenario-result'].textContent,c.pending);events.submit({preventDefault(){}});assert.equal(ids['finops-scenario-result'].children.length,1);assert.equal(ids['finops-scenario-result'].children[0].children.length,8);assert.equal(ids['finops-scenario-result'].children[0].children[0].textContent,c.outputs[0]);events.input();assert.equal(ids['finops-scenario-result'].textContent,c.pending);assert.equal(ids['finops-scenario-result'].children.length,0);
 for(const bad of ['', '<img src=x onerror=alert(1)>','Infinity','-1']){ids.baseline.value=bad;events.submit({preventDefault(){}});assert.equal(ids['finops-scenario-result'].textContent,c.error);assert.equal(ids['finops-scenario-result'].children.length,0);}
 if(!pagesOnly){
 for(const u of [l==='pt'?'/':'/'+l+'/',...['roi-calc','sla-calculator','ai-governance-checklist'].map(s=>p+s+'/'),p+'apps/network-learning-paths.html']){const h=fs.readFileSync(file(u),'utf8');assert.equal((h.match(/<!--finops-scenario:start-->/g)||[]).length,1);assert(h.includes('href="'+p+'apps/finops-scenario-estimator.html"'));}
 const learning=fs.readFileSync(file(p+'apps/network-learning-paths.html'),'utf8');assert(learning.includes('minmax(min(100%,260px),1fr)'));assert.equal((learning.match(/id="finops-mobile-fix"/g)||[]).length,1);
 }
}
if(!pagesOnly){const m=JSON.parse(fs.readFileSync(file('/apps/finops-scenario-publication.json'),'utf8'));assert.equal(m.pages.length,10);assert.equal(m.homepages.length,5);assert.equal(m.reciprocalPages.length,20);}
console.log('PASS FinOps math, bounds, negative/zero cases, localized DOM result/error/reset, no transmission/storage APIs, five-language metadata, catalog links and worked examples'+(pagesOnly?'; scoped to ten pages and runtime.':', plus original reciprocal promotion and manifest checks.'));
