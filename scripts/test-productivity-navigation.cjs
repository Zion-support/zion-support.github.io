'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const n=require('./render-productivity-navigation.cjs'),a=require('./render-legacy-three-locales.cjs'),b=require('./render-productivity-incident-locales.cjs'),w=require('./render-productivity-workflow-links.cjs');
let checks=0;const eq=(x,y,msg)=>{assert.deepEqual(x,y,msg);checks++;};const ok=(x,msg)=>{assert(x,msg);checks++;};const fail=f=>{assert.throws(f);checks++;};
const owned=/<!--productivity-related:start-->[\s\S]*?<!--productivity-related:end-->/g,homeOwned=/<!--productivity-workflow-link:start-->[\s\S]*?<!--productivity-workflow-link:end-->/g;
function protectedBytes(s){return s.match(/<(?:script|form)\b[\s\S]*?<\/(?:script|form)>/gi)||[];}
function head(s){return s.match(/<head>[\s\S]*?<\/head>/)[0];}
const out=fs.mkdtempSync(path.join(os.tmpdir(),'productivity-navigation-')),before=new Map();
const disk=u=>path.join(out,u.slice(1)+(u.endsWith('/')?'index.html':''));
const put=(u,s)=>{const f=disk(u);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,s);before.set(u,s);};
try{
 for(const l of n.L){
  for(let i=0;i<n.slugs.length;i++){const s=n.slugs[i],renderer=a.slugs.includes(s)?a:b,j=renderer.slugs.indexOf(s);let html=renderer.page(l,j);html=html.replace('</main>','<form action="/unchanged" data-price="100"><input name="recipient" value="unchanged"></form></main>');put(n.route(l,s),html);}
  // Homepage is a fixture using the real existing promotion renderer, not a live snapshot.
  const h='<!DOCTYPE html><html lang="'+n.LANG[l]+'"><head><title>Fixture</title></head><body><!--zion-network-home:start--><section><h2>Existing promotion</h2></section><!--zion-network-home:end--><form action="/keep" data-price="100"><input name="recipient" value="unchanged"></form><script>const unchanged=1;</script></body></html>';
  put(n.home(l),w.transform(h,l));
  a.checkBrief(l,a.briefJS(l));checks++;b.testRuntime(l,0);checks++;b.testRuntime(l,1);checks++;
 }
 const manifest=n.run(out);eq(manifest.pages.length,30);eq(manifest.homes.length,5);eq(manifest.fullNetworkComplete,false);
 for(const l of n.L){for(let i=0;i<n.slugs.length;i++){
  const u=n.route(l,n.slugs[i]),s=fs.readFileSync(disk(u),'utf8'),old=before.get(u);
  eq(s.replace(owned,''),old,'All original resource bytes preserved');eq(head(s),head(old),'Metadata unchanged');eq(protectedBytes(s),protectedBytes(old),'Form/runtime bytes unchanged');eq(n.transformResource(s,l,i),s);
  eq((s.match(/data-productivity-navigation=/g)||[]).length,1);for(const j of n.related[i])ok(s.includes('href="'+n.route(l,n.slugs[j])+'"'));
  ok(s.includes('href="/zion-app-network/CATALOG-PRODUCTIVITY-REVIEW.html#'+l+'"'));ok(s.includes('aria-labelledby="productivity-related-heading"'));ok(s.includes(':focus-visible'));ok(s.includes(n.C[l].privacy));
 }
 const u=n.home(l),s=fs.readFileSync(disk(u),'utf8'),old=before.get(u);eq(s.replace(homeOwned,''),old.replace(homeOwned,''));eq(protectedBytes(s),protectedBytes(old));eq(n.transformHome(s,l),s);eq((s.match(/data-productivity-workflow=/g)||[]).length,1);eq((s.match(/<!--zion-network-home:start-->/g)||[]).length,1);for(const slug of n.slugs)ok(s.includes('href="'+n.route(l,slug)+'"'));
 }
 const first=fs.readFileSync(disk(n.route('en','agent-brief')),'utf8');
 fail(()=>n.transformResource(first.replace('lang="en"','lang="fr"'),'en',0));
 fail(()=>n.transformResource(first.replace('rel="canonical"','rel="not-canonical"'),'en',0));
 fail(()=>n.transformResource(first.replace('hreflang="x-default"','hreflang="invalid"'),'en',0));
 fail(()=>n.transformResource(first.replace('</head>','<meta http-equiv="refresh" content="0;url=/"></head>'),'en',0));
 fail(()=>n.transformResource(first.replace('</main>',''),'en',0));
 fail(()=>n.transformResource(first.replace('</main>','<!--productivity-related:start--></main>'),'en',0));
 const hs=before.get(n.home('en'));
 fail(()=>n.transformHome(hs.replace(homeOwned,''),'en'));
 fail(()=>n.transformHome(hs+hs.match(homeOwned)[0],'en'));
 fail(()=>n.transformHome(hs.replace('<!--productivity-workflow-link:end-->','<form></form><!--productivity-workflow-link:end-->'),'en'));
 const snapshot=fs.readFileSync(disk(n.route('en','agent-brief')),'utf8');
 // A late missing source must reject the entire preflight before any file is modified.
 fs.unlinkSync(disk(n.route('de','admissions-essay-reviewer')));fail(()=>n.run(out));eq(fs.readFileSync(disk(n.route('en','agent-brief')),'utf8'),snapshot);
 console.log('PASS '+checks+' assertions, 30 actual-renderer resource editions, five real-promotion fixtures, 15 existing locale runtime checks, negative controls and no-write-on-preflight-failure. NOT full-site build, live/browser, mobile or native-speaker certification.');
}finally{fs.rmSync(out,{recursive:true,force:true});}
