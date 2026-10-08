'use strict';
// Reuse reviewed translations and the common page shell; no app capability is fabricated.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=path.resolve(process.cwd(),process.argv[2]||'out');
const locales=['en','pt','es','fr','de'];
const lang={en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'};
const apps=[['AML Screening AI','aml-screening-ai'],['Fraud Transaction Monitor','fraud-transaction-monitor']];
const guide=l=>(l==='en'?'':'/'+l)+'/apps/risk-review-guide.html';
const appRoute=(l,slug)=>(l==='en'?'':'/'+l)+'/'+slug+'/';
const manifest=JSON.parse(fs.readFileSync(path.join(out,'apps/risk-benefits-release.json'),'utf8'));
manifest.app_routes=[];
for(const l of locales){
 const file=path.join(out,guide(l).slice(1));let original=fs.readFileSync(file,'utf8');
 // The localized guide must lead to the matching localized app overview.
 for(const [,slug] of apps)original=original.replaceAll('href="/'+slug+'/"','href="'+appRoute(l,slug)+'"');
 fs.writeFileSync(file,original);
 for(const [name,slug] of apps){
  let html=original;
  html=html.replace(/<title>[\s\S]*?<\/title>/,'<title>'+name+' | Zion Tech Group</title>').replace(/<h1>[\s\S]*?<\/h1>/,'<h1>'+name+'</h1>');
  // Canonical/hreflang links and language navigation refer to this app, not another guide.
  html=html.replace(/<link\b[^>]*>/g,tag=>{for(const k of locales)tag=tag.replace('https://ziontechgroup.com'+guide(k),'https://ziontechgroup.com'+appRoute(k,slug));return tag;});
  html=html.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g,nav=>{if(!nav.includes('lang="'))return nav;for(const k of locales)nav=nav.replace('href="'+guide(k)+'"','href="'+appRoute(k,slug)+'"');return nav;});
  html=html.replace(/<article class="card">[\s\S]*?<\/article>/g,card=>card.includes('<h2>'+name+'</h2>')?card:'');
  const peer=apps.find(a=>a[1]!==slug);
  html=html.replace('</main>','<p><a href="'+appRoute(l,peer[1])+'">'+peer[0]+'</a> · <a href="https://ziontechgroup.com/claims-automation-ai/">Claims Automation AI</a> · <a href="https://ziontechgroup.com/underwriting-copilot-ai/">Underwriting Copilot AI</a> · <a href="https://ziontechgroup.com/policy-comparison-ai/">Policy Comparison AI</a> · <a href="https://ziontechgroup.com/ar-collections-copilot/">AR Collections Copilot</a> · <a href="https://ziontechgroup.com/cash-flow-forecaster/">Cash Flow Forecaster</a> · <a href="https://ziontechgroup.com/meeting-intelligence-ai/">Meeting Intelligence AI</a> · <a href="https://ziontechgroup.com/voicemail-triage-ai/">Voicemail Triage AI</a></p></main>');
  assert(html.includes('<html lang="'+lang[l]+'"'));
  assert(html.includes('href="https://ziontechgroup.com'+appRoute(l,slug)+'"'));
  assert((html.match(/hreflang=/g)||[]).length===6);
  assert(html.includes('href="'+guide(l)+'"'),'Return-to-guide link missing');
  assert(html.includes('href="'+appRoute(l,peer[1])+'"'),'Reciprocal app link missing');
  const target=path.join(out,appRoute(l,slug).slice(1),'index.html');fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,html);
  manifest.app_routes.push({path:appRoute(l,slug),language:lang[l],functionality:'informational_concept_overview'});
 }
 const home=path.join(out,l==='pt'?'index.html':l+'/index.html');let html=fs.readFileSync(home,'utf8');
 for(const k of locales){const url='https://ziontechgroup.com'+(k==='pt'?'/':'/'+k+'/');if(!html.includes('hreflang="'+lang[k]+'"'))html=html.replace('</head>','<link rel="alternate" hreflang="'+lang[k]+'" href="'+url+'"></head>');}
 fs.writeFileSync(home,html);
}
fs.writeFileSync(path.join(out,'apps/risk-benefits-release.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('Ten localized concept overviews, reciprocal app/guide navigation and five homepage language alternatives validated.');
