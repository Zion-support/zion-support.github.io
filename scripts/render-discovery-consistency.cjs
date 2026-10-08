'use strict';
// Artifact-only consistency checks and localized homepage journeys.
// Questionnaires now share one tested source module; never inject a second submit handler.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=path.resolve(process.argv[2]||'out');
const journey=JSON.parse(fs.readFileSync('content/discovery-journey.json','utf8'));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const asset=path.join(out,'assets/js/discovery-delivery.js');
assert(fs.existsSync(asset),'Shared Discovery application missing');
const source=fs.readFileSync(asset,'utf8');
assert(source.includes('https://formsubmit.co/ajax/commercial@ziontechgroup.com'),'Delivery endpoint missing');
assert(!source.includes('carlos@ziontechgroup.com'),'Unexpected extra recipient');
for(const locale of ['en','pt','es','fr','de']){
 const rel=locale==='en'?'discovery/index.html':locale+'/discovery/index.html';
 const html=fs.readFileSync(path.join(out,rel),'utf8');
 assert(html.includes('src="/assets/js/discovery-delivery.js"'),rel+' must use shared application');
 assert(!html.includes('const APPMAP='),rel+' has obsolete duplicate application');
 assert(!html.includes('data-discovery-parity'),rel+' has obsolete duplicate submit handler');
 for(const id of ['dform','form-errors','rscore','rbar','rsummary','rapps','rnext','report-text','email-fallback','result','copy-report','rsent','submit-report','download-report'])assert(html.includes('id="'+id+'"'),rel+' missing '+id);
 assert(!html.includes('carlos@ziontechgroup.com'),'Unexpected recipient in '+rel);
 const home=path.join(out,locale==='pt'?'index.html':locale+'/index.html');let page=fs.readFileSync(home,'utf8');
 const c=journey[locale];assert(c&&c.steps.length===3&&c.benefits.length===4);
 if(!page.includes('id="discovery-pilot-journey"')){
  const section='<section class="section section-soft" id="discovery-pilot-journey" data-discovery-parity="2026-10-08"><div class="wrap"><h2>'+esc(c.title)+'</h2><p>'+esc(c.intro)+'</p><ul>'+c.benefits.map(b=>'<li>'+esc(b)+'</li>').join('')+'</ul><ol>'+c.steps.map(b=>'<li>'+esc(b)+'</li>').join('')+'</ol><p><a class="btn" href="'+esc(c.discoveryUrl)+'">'+esc(c.cta)+'</a> · <a href="/apps/">'+esc(c.related)+'</a></p></div></section>';
  assert(page.includes('</main>'),'Homepage insertion anchor missing');page=page.replace('</main>',section+'\n</main>');fs.writeFileSync(home,page);
 }
}
console.log('Preserved five shared-module questionnaires and five localized homepage journeys. No email sent.');
