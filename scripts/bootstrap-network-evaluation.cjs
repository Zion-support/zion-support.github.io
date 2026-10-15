'use strict';
// Scoped artifact bootstrap: ten pages only; never changes public sources.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {render,copy,release}=require('./render-network-evaluation.cjs');
const locales=Object.keys(copy),names={en:'English',pt:'Português',es:'Español',fr:'Français',de:'Deutsch'};
const guide=l=>(l==='en'?'/':`/${l}/`)+'apps/network-start-here.html';
const home=l=>l==='pt'?'/':`/${l}/`;
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const blocks=s=>s.match(/<(script|form)\b[\s\S]*?<\/\1\s*>/gi)||[];
const hrefs=s=>[...s.matchAll(/\bhref\s*=\s*(["'])(.*?)\1/gi)].map(m=>m[2]);
const language=(s,c)=>new RegExp(`<html\\b[^>]*\\blang=["']${c.lang}["']`,'i').test(s);
function skeleton(l,c){
 const alt=locales.map(k=>`<link rel="alternate" hreflang="${copy[k].lang}" href="https://ziontechgroup.com${guide(k)}">`).join('');
 const nav=locales.map(k=>`<a lang="${copy[k].lang}" hreflang="${copy[k].lang}" href="${guide(k)}"${k===l?' aria-current="page"':''}>${names[k]}</a>`).join(' · ');
 return `<!doctype html><html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(c.cta)} — Zion Tech Group</title><meta name="description" content="${esc(c.intro)}"><link rel="canonical" href="https://ziontechgroup.com${guide(l)}">${alt}<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com${guide('en')}"><style>body{font:1rem/1.6 system-ui,sans-serif;margin:0;color:#172033;background:#fff}main{box-sizing:border-box;max-width:70rem;margin:auto;padding:1.5rem;overflow-wrap:anywhere}a{color:#075985}a:focus-visible{outline:3px solid #b45309;outline-offset:4px}nav a{display:inline-block;padding:.5rem}</style></head><body><main id="main" data-network-entry-bootstrap="${release}"><nav aria-label="${esc(c.cta)}">${nav}</nav><h1>${esc(c.cta)}</h1><p>${esc(c.intro)}</p><p><a href="${home(l)}">${esc(c.back)}</a> · <a href="/zion-app-network/">${esc(c.catalog)}</a></p></main></body></html>`;
}
function bootstrap(root='out'){
 const stage=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evaluation-stage-')),plans=[];
 try{
  for(const [l,c] of Object.entries(copy)){
   for(const [url,kind] of [[`${home(l)}index.html`,'home'],[guide(l),'guide']]){
    const file=path.join(root,url.slice(1)),exists=fs.existsSync(file);assert(exists||kind==='guide',`Missing homepage ${url}`);
    const before=exists?fs.readFileSync(file,'utf8'):null;let html=before===null?skeleton(l,c):before;
    assert(language(html,c),`Wrong bootstrap language ${url}`);assert(!/http-equiv\s*=\s*["']refresh/i.test(html),`Refuse redirect ${url}`);assert(kind==='home'?/<\/body>/i.test(html):/<\/main>/i.test(html),`Missing bootstrap container ${url}`);
    if(kind==='home'){
     const count=(html.match(/<!--zion-network-home:start-->/g)||[]).length;assert(count<=1,`Duplicate promotion ${url}`);
     if(!count){assert(!/id=["']network-start-title["']/i.test(html),`Conflicting homepage anchor ${url}`);
      const promo=`<!--zion-network-home:start--><section class="section section-soft" data-network-bootstrap="${release}" aria-labelledby="network-start-title"><div class="wrap"><h2 id="network-start-title">${esc(c.cta)}</h2><p>${esc(c.intro)}</p></div></section><!--zion-network-home:end-->`;
      const anchor=/<\/main>/i.test(html)?/<\/main>/i:/<footer\b/i.test(html)?/<footer\b/i:/<\/body>/i;html=html.replace(anchor,m=>promo+m);
     }
    }
    const staged=path.join(stage,url.slice(1));fs.mkdirSync(path.dirname(staged),{recursive:true});fs.writeFileSync(staged,html);plans.push({file,staged,before});
   }
  }
  render(stage);
  for(const p of plans){const after=fs.readFileSync(p.staged,'utf8');if(p.before!==null){assert.deepEqual(blocks(after),blocks(p.before),'Protected blocks changed');for(const u of hrefs(p.before))assert(hrefs(after).includes(u),`Removed existing href ${u}`);assert.equal((after.match(/<head\b[\s\S]*?<\/head>/i)||[])[0],(p.before.match(/<head\b[\s\S]*?<\/head>/i)||[])[0],'Existing SEO changed');}p.after=after;}
  // Preflight all ten staged pages before writing any artifact destination.
  for(const p of plans){fs.mkdirSync(path.dirname(p.file),{recursive:true});fs.writeFileSync(p.file,p.after);}
  return {release,pages:plans.length,createdGuides:plans.filter(p=>p.before===null).length};
 }finally{fs.rmSync(stage,{recursive:true,force:true});}
}
module.exports={bootstrap,guide,home};
if(require.main===module)console.log(JSON.stringify(bootstrap(process.argv[2]||'out')));
