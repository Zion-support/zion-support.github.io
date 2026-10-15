'use strict';
// Self-contained, scoped prerequisite generation. No old broad renderer pipeline.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const {render,copy,release}=require('./render-network-evaluation.cjs');
const locales=Object.keys(copy),names={en:'English',pt:'Português',es:'Español',fr:'Français',de:'Deutsch'};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const guide=l=>`${l==='en'?'':l+'/'}apps/network-start-here.html`,home=l=>`${l==='pt'?'':l+'/'}index.html`;
const block=s=>s.match(/<(form|script)\b[\s\S]*?<\/\1\s*>/gi)||[];
function scaffold(l){
 const c=copy[l],alternates=locales.map(k=>`<link rel="alternate" hreflang="${copy[k].lang}" href="https://ziontechgroup.com/${guide(k)}">`).join('');
 const nav=locales.map(k=>`<a href="/${guide(k)}" lang="${copy[k].lang}" hreflang="${copy[k].lang}"${k===l?' aria-current="page"':''}>${names[k]}</a>`).join(' · ');
 return `<!DOCTYPE html><html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(c.title)} — Zion Tech Group</title><meta name="description" content="${esc(c.intro)}"><link rel="canonical" href="https://ziontechgroup.com/${guide(l)}">${alternates}<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com/${guide('en')}"><style>body{margin:0;background:#0e1628;color:#f4f7ff;font:1rem/1.6 system-ui,sans-serif}main{box-sizing:border-box;max-width:70rem;margin:auto;padding:1.5rem;overflow-wrap:anywhere}a{color:#7dd3fc}a:focus-visible{outline:3px solid #f59e0b;outline-offset:4px}nav a{display:inline-block;padding:.5rem}</style></head><body><main id="main" data-network-evaluation-guide="${release}"><h1>${esc(c.cta)}</h1><nav aria-label="${esc(c.title)}">${nav}</nav></main></body></html>`;
}
function bootstrap(root='out'){
 const stage=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evaluation-stage-')),plans=[];
 try{
  for(const l of locales){
   const c=copy[l],hf=path.join(root,home(l)),gf=path.join(root,guide(l));
   assert(fs.existsSync(hf),`Missing homepage source: ${home(l)}`);
   const original=fs.readFileSync(hf,'utf8');let h=original;
   assert(!/http-equiv\s*=\s*["']refresh/i.test(h),`Redirect homepage: ${home(l)}`);
   const opens=(h.match(/<main\b/gi)||[]).length,closes=(h.match(/<\/main>/gi)||[]).length;
   assert(opens===closes&&closes<=1,`Unbalanced main: ${home(l)}`);assert.equal((h.match(/<\/body>/gi)||[]).length,1,`Expected one body: ${home(l)}`);
   const boundary=closes?/<\/main>/i:/<footer\b/i.test(h)?/<footer\b/i:/<\/body>/i;
   if(!h.includes('<!--zion-network-home:start-->')){
    assert(!h.includes('<!--zion-network-home:end-->'),`Orphan promotion marker: ${home(l)}`);
    assert(!/id=["']network-start-title["']/i.test(h),`Conflicting promotion ID: ${home(l)}`);
    const promo=`<!--zion-network-home:start--><section class="section section-soft" data-network-home="${release}" aria-labelledby="network-start-title"><div class="wrap"><h2 id="network-start-title">${esc(c.title)}</h2><p>${esc(c.intro)}</p></div></section><!--zion-network-home:end-->`;
    h=h.replace(boundary,match=>promo+match);
   }
   const exists=fs.existsSync(gf),g=exists?fs.readFileSync(gf,'utf8'):scaffold(l);
   assert(!/http-equiv\s*=\s*["']refresh/i.test(g),`Redirect guide: ${guide(l)}`);
   for(const [rel,html] of [[home(l),h],[guide(l),g]]){const f=path.join(stage,rel);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,html);}
   plans.push({l,rel:home(l),before:original},{l,rel:guide(l),before:exists?g:null});
  }
  // Existing strict finalizer validates all staged languages, IDs and promotion shapes.
  render(stage);
  const report={release,scope:'Five guide and homepage editions only; artifact evidence, not live or whole-network certification.',pages:[]};
  for(const p of plans){p.after=fs.readFileSync(path.join(stage,p.rel),'utf8');if(p.before!==null)assert.deepEqual(block(p.after),block(p.before),`Protected blocks changed: ${p.rel}`);report.pages.push({locale:copy[p.l].lang,path:'/'+p.rel,sha256:crypto.createHash('sha256').update(p.after).digest('hex')});}
  // No destination is changed until every staged page passes all preflight checks.
  for(const p of plans){const f=path.join(root,p.rel);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,p.after);}
  const mf=path.join(root,'apps/network-evaluation-publication.json');fs.mkdirSync(path.dirname(mf),{recursive:true});fs.writeFileSync(mf,JSON.stringify(report,null,2)+'\n');
  return report;
 }finally{fs.rmSync(stage,{recursive:true,force:true});}
}
module.exports={bootstrap,scaffold,guide,home};
if(require.main===module)console.log(`PASS ${release}: ${bootstrap(process.argv[2]||'out').pages.length} scoped artifact pages`);
