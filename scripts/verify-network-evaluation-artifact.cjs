'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const crypto=require('node:crypto');
const {copy,release}=require('./render-network-evaluation.cjs');
const {guide,home}=require('./bootstrap-network-evaluation.cjs');
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function verify(root='out'){
 const report=JSON.parse(fs.readFileSync(path.join(root,'apps/network-evaluation-publication.json'),'utf8'));assert.equal(report.pages.length,10);for(const p of report.pages){assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p.path.slice(1)))).digest('hex'),p.sha256,'Stale publication hash '+p.path);}
 let checks=0;const ok=(v,m)=>{assert(v,m);checks++;};
 for(const [l,c] of Object.entries(copy)){
  const g=fs.readFileSync(path.join(root,guide(l).slice(1)),'utf8'),h=fs.readFileSync(path.join(root,`${home(l)}index.html`.slice(1)),'utf8');
  ok(g.includes(`data-network-evaluation="${release}"`),'Guide marker');ok(h.includes(`data-network-evaluation-cta="${release}"`),'CTA marker');
  ok(c.questions.every(([q,a])=>g.includes(esc(q))&&g.includes(esc(a))),'Complete translated question/answer body');
  ok(g.includes(`href="${home(l)}#network-start-title"`),'Locale return');ok(h.includes(`href="${guide(l)}#network-evaluation"`),'Locale CTA');
  ok((g.match(/id="network-evaluation"/g)||[]).length===1,'Unique guide anchor');ok((h.match(/id="network-start-title"/g)||[]).length===1,'Unique home anchor');
  ok((h.match(/data-network-evaluation-cta=/g)||[]).length===1,'No duplicate CTA');
  ok(new RegExp(`<html\\b[^>]*\\blang=["']${c.lang}["']`,'i').test(g),'Guide language');
  if(g.includes(`data-network-entry-bootstrap="${release}"`)){
   ok(g.includes(`<link rel="canonical" href="https://ziontechgroup.com${guide(l)}">`),'Self canonical');
   ok((g.match(/rel="alternate"/g)||[]).length===6,'Five alternates plus default');
   ok((g.match(/aria-current="page"/g)||[]).length===1,'Current language');
   for(const [k,d] of Object.entries(copy))ok(g.includes(`hreflang="${d.lang}" href="https://ziontechgroup.com${guide(k)}"`),'Reciprocal language route');
  }
 }
 return {release,checks,scope:'Ten local artifact pages only; not live or full-network certification.'};
}
module.exports={verify};if(require.main===module)console.log(JSON.stringify(verify(process.argv[2]||'out')));
