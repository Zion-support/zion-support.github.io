'use strict';
// Offline navigation contract: no network requests, form submissions or emails.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const m=require('./render-pilot-tool-paths.cjs');
function run(){let checks=0;const ok=(v,msg)=>{assert(v,msg);checks++;},eq=(a,b,msg)=>{assert.deepEqual(a,b,msg);checks++;};
 const guide=l=>(l==='en'?'':'/'+l)+'/apps/free-discovery-to-pilot-guide.html';
 const lang=l=>l==='pt'?'pt-BR':l;
 const fixture='<!doctype html><html><head><title>Preserved title</title></head><body><nav><a href="/existing/">Existing</a></nav><main><p id="existing">Existing body</p><form action="/unchanged"><input name="email"></form><a href="https://buy.stripe.com/unchanged">Optional plan</a></main><script>const untouched="preserve";</script><footer>Preserved footer</footer></body></html>';
 const protectedBlocks=h=>h.match(/<form\b[\s\S]*?<\/form>|<script\b[\s\S]*?<\/script>|<a\b[^>]*href="https:\/\/buy\.stripe\.com[^>]*>[\s\S]*?<\/a>/g)||[];
 for(const r of m.routes){const h=m.transform(fixture,r);m.verifyHtml(h,r);checks++;eq(m.transform(h,r),h,'Byte idempotence '+r.url);eq(protectedBlocks(h),protectedBlocks(fixture),'Protected content '+r.url);ok(h.includes('<p id="existing">Existing body</p>'),'Body preserved');ok(h.includes('<footer>Preserved footer</footer>'),'Footer preserved');ok(h.includes('href="/existing/"'),'Unrelated link preserved');
  if(r.home){const section=h.match(/<section\b[^>]*id="pilot-tool-paths"[\s\S]*?<\/section>/);ok(section,'Homepage promotion');ok(section[0].includes('lang="'+lang(r.locale)+'" hreflang="'+lang(r.locale)+'" href="'+guide(r.locale)+'"'),'Matching localized guide CTA');for(const u of m.targets)ok(section[0].includes('href="'+u+'"'),'Planning destination '+u);}
  else{const nav=h.match(/<nav id="pilot-guide-languages"[\s\S]*?<\/nav>/);ok(nav,'Language switcher');eq((nav[0].match(/aria-current="page"/g)||[]).length,1,'One current language');for(const l of ['en','pt','es','fr','de'])ok(nav[0].includes('lang="'+lang(l)+'" hreflang="'+lang(l)+'"'+(l===r.locale?' aria-current="page"':'')+' href="'+guide(l)+'"'),'Language target '+l);eq((h.match(/<link rel="alternate" hreflang=/g)||[]).length,6,'Five languages plus x-default');ok(h.includes('hreflang="x-default" href="https://ziontechgroup.com'+guide('en')+'"'),'Default route');}
 }
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-tool-path-contract-'));const file=u=>path.join(root,u.slice(1)+(u.endsWith('/')?'index.html':''));
 try{for(const u of [...m.routes.map(r=>r.url),...m.targets]){fs.mkdirSync(path.dirname(file(u)),{recursive:true});fs.writeFileSync(file(u),fixture);}eq(m.render(root),10,'Ten publication pages');const first=m.routes.map(r=>fs.readFileSync(file(r.url),'utf8'));m.render(root);eq(m.routes.map(r=>fs.readFileSync(file(r.url),'utf8')),first,'Whole-artifact idempotence');const manifest=JSON.parse(fs.readFileSync(file('/apps/pilot-tool-paths-publication.json'),'utf8'));eq(manifest.emailSubmitted,false,'No submission');eq(manifest.pages.length,10,'Manifest page scope');fs.unlinkSync(file(m.targets.at(-1)));assert.throws(()=>m.render(root),/Published destination exists/);checks++;eq(m.routes.map(r=>fs.readFileSync(file(r.url),'utf8')),first,'Missing target fails before writes');}
 finally{fs.rmSync(root,{recursive:true,force:true});}
 for(const r of m.routes){assert.throws(()=>m.transform(fixture.replace('<main>','').replace('</main>',''),r));checks++;}
 console.log('Pilot navigation contract: '+checks+' offline checks passed; language metadata, localized homepage CTA, byte idempotence and protected content. No network or email.');return checks;
}
module.exports={run};if(require.main===module)run();
