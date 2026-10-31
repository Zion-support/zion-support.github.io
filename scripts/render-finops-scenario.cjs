'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',version='2026-10-09-finops-scenario-v1',base='https://ziontechgroup.com';
const localeRelease='finops-locales-2026-10-30-v2',pagesOnly=process.argv.includes('--pages-only'),homeOnly=process.argv.includes('--home-only'),toolPromotionsOnly=process.argv.includes('--tool-promotions-only');
const copy=JSON.parse(fs.readFileSync('content/finops-scenario.json','utf8')),common=JSON.parse(fs.readFileSync('content/operational-tools.json','utf8')),L=['en','pt','es','fr','de'];
const prefix=l=>l==='en'?'/':'/'+l+'/',home=l=>l==='pt'?'/':'/'+l+'/',route=(l,guide=false)=>prefix(l)+'apps/finops-'+(guide?'pilot-guide':'scenario-estimator')+'.html';
const file=u=>path.join(out,u.slice(1)+(u.endsWith('/')?'index.html':'')),exists=u=>fs.existsSync(file(u)),write=(u,s)=>{fs.mkdirSync(path.dirname(file(u)),{recursive:true});fs.writeFileSync(file(u),s);};
const esc=s=>String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const names={en:'English',pt:'Português',es:'Español',fr:'Français',de:'Deutsch'};
const css='.finops-shell{max-width:1100px;margin:auto;padding:24px;box-sizing:border-box;overflow-wrap:anywhere}.finops-shell *, .finops-promotion *{box-sizing:border-box;min-width:0}.finops-shell nav{display:flex;flex-wrap:wrap;gap:12px;margin:12px 0}.finops-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:16px}.finops-shell .card,.finops-promotion{padding:20px;border:1px solid #64748b;border-radius:12px;margin:16px 0}.finops-shell input{display:block;width:100%;max-width:100%;padding:10px;margin:6px 0 14px}.finops-shell button{padding:12px;margin:12px 0}.finops-shell a:focus-visible,.finops-shell input:focus-visible,.finops-shell button:focus-visible{outline:3px solid #2563eb;outline-offset:3px}.finops-shell dt{font-weight:bold}.finops-shell dd{margin:0 0 12px}.finops-promotion{overflow-wrap:anywhere}';
const peers=['roi-calc','sla-calculator','ai-governance-checklist'];
const manifest={version,scope:'Five local calculators and five guides; no provider integrations or full-network completeness claim.',pages:[],homepages:[],reciprocalPages:[]};
function nav(l){const c=copy[l],n=common[l];return '<nav aria-label="'+esc(n.network)+'"><a href="'+home(l)+'">'+esc(n.home)+'</a><a href="'+prefix(l)+'apps/">'+esc(n.network)+'</a><a href="'+prefix(l)+'discovery/">'+esc(n.discovery)+'</a><a href="'+route(l)+'">'+esc(c.title)+'</a><a href="'+route(l,true)+'">'+esc(c.guide)+'</a></nav>';}

const protectedParts=html=>html.match(/<(form|script)\b[\s\S]*?<\/\1\s*>/gi)||[];
const pilotMarker=/<!--finops-pilot-example:start-->[\s\S]*?<!--finops-pilot-example:end-->/g;
const peerMarker=/<!--finops-locale-peers:start-->[\s\S]*?<!--finops-locale-peers:end-->/g;
function pilotBody(l){
 const c=copy[l],p=c.pilot;
 const scenarios=[50,250].map((operating,index)=>{
  const gross=1000*20/100,net=gross-operating,values=[gross,net,net*6-200,net>0?200/net:null];
  const rows=values.map((value,i)=>'<dt>'+esc(c.outputs[i])+'</dt><dd>'+esc(value===null?c.noPayback:new Intl.NumberFormat(c.locale,i===3?{maximumFractionDigits:2}:{style:'currency',currency:'USD'}).format(value))+'</dd>').join('');
  return '<article class="card"><h3>'+esc(p.scenarioNames[index])+'</h3><dl>'+rows+'</dl></article>';
 }).join('');
 return '<!--finops-pilot-example:start--><section data-finops-pilot="'+localeRelease+'" aria-labelledby="finops-example-title"><h2 id="finops-example-title">'+esc(p.exampleTitle)+'</h2><p>'+esc(p.exampleIntro)+'</p><div class="finops-grid">'+scenarios+'</div><p>'+esc(p.exampleNote)+'</p><h2>'+esc(p.reviewTitle)+'</h2><ol>'+p.reviewSteps.map(step=>'<li>'+esc(step)+'</li>').join('')+'</ol></section><!--finops-pilot-example:end-->';
}
function peerLinks(l){const c=copy[l];return '<!--finops-locale-peers:start--><nav data-finops-peer-links="'+localeRelease+'" aria-label="'+esc(common[l].network)+'"><a href="'+prefix(l)+'apps/network.html">'+esc(c.pilot.map)+'</a><a href="'+prefix(l)+'apps/app-verification-guide.html">'+esc(c.pilot.verify)+'</a></nav><!--finops-locale-peers:end-->';}
// Only known FinOps fragments change. Preserve later publisher additions and every form/script byte.
function refreshPage(before,l,guide){
 const c=copy[l],n=common[l],u=route(l,guide);
 assert(before.includes('data-finops-scenario="'+version+'"'),'Unexpected FinOps source '+u);
 assert(before.includes('<html lang="'+c.lang+'"'),'Unexpected locale '+u);
 assert(before.includes('rel="canonical" href="'+base+u+'"'),'Unexpected canonical '+u);
 assert.equal((before.match(/<\/main>/gi)||[]).length,1,'One main container '+u);
 const oldLink='<a href="/apps/">'+esc(n.network)+'</a>',newLink='<a href="'+prefix(l)+'apps/">'+esc(n.network)+'</a>';
 let after=before.split(oldLink).join(newLink);
 assert.equal(after.split(newLink).length-1,2,'Two localized catalog returns '+u);
 if(guide){
  const oldMeta='<meta name="description" content="'+esc(c.intro)+'">',newMeta='<meta name="description" content="'+esc(c.pilot.intro)+'">';
  after=after.replace(oldMeta,newMeta);assert.equal(after.split(newMeta).length-1,1,'Guide description '+u);
  const start='<h1>'+esc(c.guide)+'</h1><p>';
  after=after.replace(start+esc(c.intro)+'</p>',start+esc(c.pilot.intro)+'</p>');
  assert.equal(after.split(start+esc(c.pilot.intro)+'</p>').length-1,1,'Guide introduction '+u);
  after=after.replace(pilotMarker,'');
  const anchor='<section class="card"><p>'+esc(c.limits)+'</p>';
  assert.equal(after.split(anchor).length-1,1,'Known limits section '+u);
  after=after.replace(anchor,pilotBody(l)+anchor);
 }
 after=after.replace(peerMarker,'').replace('</main>',peerLinks(l)+'</main>');
 assert.deepEqual(protectedParts(after),protectedParts(before),'FinOps form/script preservation '+u);
 return after;
}
function refreshPages(){
 const plans=[];
 for(const l of L)for(const guide of [false,true]){
  const u=route(l,guide);assert(exists(u),'Missing source page '+u);
  const before=fs.readFileSync(file(u),'utf8'),after=refreshPage(before,l,guide);
  assert.equal(refreshPage(after,l,guide),after,'Idempotent FinOps update '+u);
  plans.push({u,before,after});
 }
 for(const plan of plans)assert.equal(fs.readFileSync(file(plan.u),'utf8'),plan.before,'Source changed before write '+plan.u);
 for(const plan of plans)write(plan.u,plan.after);
 return plans.length;
}

function page(l,guide){const c=copy[l],n=common[l],u=route(l,guide),title=guide?c.guide:c.title,intro=guide?c.pilot.intro:c.intro;
 const runtimeCopy={...c};delete runtimeCopy.pilot;
 const alts=L.map(k=>'<link rel="alternate" hreflang="'+copy[k].lang+'" href="'+base+route(k,guide)+'">').join('')+'<link rel="alternate" hreflang="x-default" href="'+base+route('en',guide)+'">';
 const languages=L.map(k=>'<a lang="'+copy[k].lang+'" href="'+route(k,guide)+'"'+(k===l?' aria-current="page"':'')+'>'+names[k]+'</a>').join(' · ');
 const inputs=['baseline','reduction','recurring','implementation','months'].map((id,i)=>'<label for="'+id+'">'+esc(c.labels[i])+'</label><input id="'+id+'" type="number" value="'+[10000,15,200,3000,12][i]+'" min="'+(i===4?1:0)+'" max="'+(i===1?100:i===4?120:1e9)+'" step="'+(i===4?1:'any')+'" required>');
 const body=guide?'<ol>'+c.steps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ol><p><a href="'+route(l)+'">'+esc(c.calculate)+'</a></p>':'<form id="finops-scenario-form"><div class="finops-grid">'+inputs.map(s=>'<div>'+s+'</div>').join('')+'</div><button type="submit">'+esc(c.calculate)+'</button></form><div class="card" id="finops-scenario-result" aria-live="polite"></div><script type="application/json" id="finops-scenario-copy">'+JSON.stringify(runtimeCopy).replace(/</g,'\\u003c')+'</script><script src="/assets/js/finops-scenario.js" defer></script>';
 return '<!doctype html><html lang="'+c.lang+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+' — Zion Tech Group</title><meta name="description" content="'+esc(intro)+'"><link rel="canonical" href="'+base+u+'">'+alts+'<link rel="stylesheet" href="/assets/css/discovery.css"><style>'+css+'</style></head><body data-finops-scenario="'+version+'"><div class="finops-shell"><a href="#main">'+esc(n.skip)+'</a>'+nav(l)+'<nav aria-label="'+esc(n.network)+'">'+languages+'</nav><main id="main"><h1>'+esc(title)+'</h1><p>'+esc(intro)+'</p>'+body+(guide?pilotBody(l):'')+'<section class="card"><p>'+esc(c.limits)+'</p><p>'+esc(c.method)+'</p></section><section>'+c.faq.map(([q,a])=>'<h2>'+esc(q)+'</h2><p>'+esc(a)+'</p>').join('')+'</section><section class="card"><nav>'+peers.map((s,i)=>'<a href="'+prefix(l)+s+'/">'+esc(n.titles[i])+'</a>').join('')+'</nav><a href="'+prefix(l)+'apps/network-learning-paths.html">'+esc(n.network)+'</a></section>'+peerLinks(l)+'</main><footer>'+nav(l)+'<a href="https://github.com/Zion-support/zion-support.github.io/blob/main/scripts/render-finops-scenario.cjs">'+esc(n.source)+'</a></footer></div></body></html>';
}
function promote(u,l,isHome=false){
 assert(exists(u),'Missing reciprocal page '+u);
 const before=fs.readFileSync(file(u),'utf8'),protectedParts=s=>s.match(/<(form|script)\b[\s\S]*?<\/\1>/gi)||[];
 const owned=/<!--finops-scenario:start-->[\s\S]*?<!--finops-scenario:end-->/g;
 const matches=[...before.matchAll(owned)];assert(matches.length<=1,'Duplicate FinOps promotion '+u);
 const isTool=!isHome&&peers.some(slug=>u===prefix(l)+slug+'/'),target=route(l);
 const destinations=html=>[...html.matchAll(/<a\b[^>]*\shref="([^"]*)"[^>]*>/g)].map(m=>m[1]).filter(href=>href===target);
 const existing=isTool?destinations(before.replace(owned,'')).length:0;
 if(isTool)assert(existing<=1,'Duplicate native FinOps destination '+u);
 const c=copy[l],p=isHome?c.homePromotion:null;
 if(isHome)assert(p&&p.title&&p.intro&&p.baseline,'Missing homepage translation '+l);
 const baseline=p?'<a href="'+prefix(l)+'roi-calc/">'+esc(p.baseline)+'</a> · ':'';
 const estimator=existing?esc(c.title):'<a href="'+target+'">'+esc(c.title)+'</a>';
 const block='<!--finops-scenario:start--><aside class="card finops-promotion" data-finops-promotion="'+version+'"'+(p?' data-cost-journey="2026-10-30-v1"':'')+'><h2>'+esc(p?p.title:c.promotion)+'</h2><p>'+esc(p?p.intro:c.intro)+'</p><p>'+baseline+estimator+' · <a href="'+route(l,true)+'">'+esc(c.guide)+'</a></p></aside><!--finops-scenario:end-->';
 assert(/<\/main>|<\/body>/i.test(before),'Missing insertion anchor '+u);
 const after=matches.length?before.replace(owned,()=>block):before.replace(/<\/main>|<\/body>/i,x=>block+x);
 if(isTool)assert.equal(destinations(after).length,1,'Unique local FinOps destination '+u);
 assert.deepEqual(protectedParts(after),protectedParts(before),'Existing forms/scripts changed '+u);
 write(u,after);(isHome?manifest.homepages:manifest.reciprocalPages).push(u);
}
if(toolPromotionsOnly){
 for(const l of L)for(const slug of peers)promote(prefix(l)+slug+'/',l);
 console.log('PASS fifteen localized FinOps tool promotions; existing forms/scripts and other pages preserved.');
}else if(homeOnly){
 for(const l of L)promote(home(l),l,true);
 console.log('PASS five existing cost-journey homepage promotions; forms/scripts and placement preserved.');
}else if(pagesOnly){
 console.log('PASS '+localeRelease+': '+refreshPages()+' pages, localized catalog/map/verification links, guide examples and unchanged form/script bytes.');
 require('./test-finops-scenario.cjs');
}else{
for(const l of L){assert.equal(copy[l].labels.length,5);assert.equal(copy[l].outputs.length,4);for(const g of [false,true]){write(route(l,g),page(l,g));manifest.pages.push(route(l,g));}promote(home(l),l,true);for(const slug of peers)promote(prefix(l)+slug+'/',l);const learning=prefix(l)+'apps/network-learning-paths.html';promote(learning,l);let h=fs.readFileSync(file(learning),'utf8');h=h.replace(/<style id="finops-mobile-fix">[\s\S]*?<\/style>/g,'').replace('</head>','<style id="finops-mobile-fix">*{box-sizing:border-box}main,nav,.grid,.card{min-width:0;max-width:100%;overflow-wrap:anywhere}nav{display:flex;flex-wrap:wrap;gap:12px}.grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))}main{width:100%;padding:24px}.card{min-width:0}img,input{max-width:100%}</style></head>');write(learning,h);}
write('/assets/js/finops-scenario.js',fs.readFileSync('public/assets/js/finops-scenario.js','utf8'));
write('/apps/finops-scenario-publication.json',JSON.stringify(manifest,null,2)+'\n');
const coverage=file('/apps/network-publication-coverage.json');if(fs.existsSync(coverage)){const report=JSON.parse(fs.readFileSync(coverage,'utf8'));for(const p of ['apps/finops-scenario-estimator.html','apps/finops-pilot-guide.html']){report.groups=report.groups.filter(g=>g.path!==p);report.groups.push({path:p,available:L,missing:[]});}report.groups.sort((a,b)=>a.path.localeCompare(b.path));report.fiveLanguageGroups=report.groups.filter(g=>g.missing.length===0).length;report.translationGapGroups=report.groups.filter(g=>g.missing.length>0).length;report.finopsScenarioRelease=version;fs.writeFileSync(coverage,JSON.stringify(report,null,2)+'\n');}
require('./test-finops-scenario.cjs');
console.log('PASS '+version+': 10 translated pages, 5 homepage promotions and 20 reciprocal links; legacy redirect preserved.');

}
