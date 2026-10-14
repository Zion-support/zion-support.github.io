'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {render,targets,route,home,copy,locales,inject}=require('./render-curated-network.cjs');
function fixture(){const root=fs.mkdtempSync(path.join(os.tmpdir(),'curated-network-'));const file=u=>path.join(root,u.slice(1)+(u.endsWith('/')?'index.html':''));for(const l of locales)for(const u of [home(l),...targets(l)]){const f=file(u);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,'<!DOCTYPE html><html lang="'+copy[l][0]+'"><body><main><h1>Existing content</h1><form action="/preserved"><input name="evidence"></form></main><script>const pricing="unchanged";</script></body></html>');}return {root,file};}
test('five locales have distinct complete copy',()=>{assert.equal(new Set(locales.map(l=>copy[l][1])).size,5);for(const l of locales){assert.equal(copy[l].length,20);for(const text of copy[l])assert(text.length>0);}});
for(const l of locales)test(l+' canonical, alternates, same-language targets and reciprocal paths',()=>{const {root,file}=fixture();try{render(root);const html=fs.readFileSync(file(route(l)),'utf8');assert(html.includes('<html lang="'+copy[l][0]+'">'));assert(html.includes('rel="canonical" href="https://ziontechgroup.com'+route(l)+'"'));assert.equal((html.match(/rel="alternate"/g)||[]).length,6);assert.equal((html.match(/aria-current="page"/g)||[]).length,1);assert.equal((html.match(/<article /g)||[]).length,4);assert.equal((html.match(/<h1>/g)||[]).length,1);assert(!/<form\b|<script\b/i.test(html));for(const target of targets(l)){assert(html.includes('href="'+target+'"'));const page=fs.readFileSync(file(target),'utf8');assert(page.includes('href="'+route(l)+'"'));assert(page.includes('<form action="/preserved">'));assert(page.includes('const pricing="unchanged";'));}assert(fs.readFileSync(file(home(l)),'utf8').includes('href="'+route(l)+'"'));}finally{fs.rmSync(root,{recursive:true,force:true});}});
test('rendering twice is byte-identical',()=>{const {root}=fixture();try{const result=render(root),first=result.files.map(f=>fs.readFileSync(f,'utf8'));render(root);assert.deepEqual(result.files.map(f=>fs.readFileSync(f,'utf8')),first);}finally{fs.rmSync(root,{recursive:true,force:true});}});
test('missing target fails before writing a homepage',()=>{const {root,file}=fixture();try{const hp=fs.readFileSync(file(home('en')),'utf8');fs.unlinkSync(file(targets('de')[2]));assert.throws(()=>render(root),/Missing artifact/);assert.equal(fs.readFileSync(file(home('en')),'utf8'),hp);assert(!fs.existsSync(file(route('en'))));}finally{fs.rmSync(root,{recursive:true,force:true});}});
test('redirect target is rejected before writes',()=>{const {root,file}=fixture();try{fs.writeFileSync(file(targets('fr')[0]),'<html><head><meta http-equiv="refresh" content="0;url=/"></head><body></body></html>');assert.throws(()=>render(root),/Redirect target/);assert(!fs.existsSync(file(route('en'))));}finally{fs.rmSync(root,{recursive:true,force:true});}});
test('missing insertion anchor is rejected',()=>assert.throws(()=>inject('<body>','<aside>Guide</aside>','body'),/Missing closing/));

test('pilot routes match the published five-language family',()=>{for(const l of locales){const p=l==='en'?'/':'/'+l+'/';assert.equal(targets(l)[3],p+'apps/free-discovery-to-pilot-guide.html');}});

// Missing or wrong input language must fail before any artifact writes.
for(const l of locales)for(const scope of ['home','guide'])for(const issue of ['missing','wrong'])test(l+' '+scope+' '+issue+' language fails atomically',()=>{const {root,file}=fixture();try{const u=scope==='home'?home(l):targets(l)[0];const f=file(u);let html=fs.readFileSync(f,'utf8');html=issue==='missing'?html.replace(/ lang="[^"]+"/,''):html.replace(/ lang="[^"]+"/,' lang="'+(l==='en'?'de':'en')+'"');fs.writeFileSync(f,html);const files=locales.flatMap(k=>[home(k),...targets(k)]).map(file);const before=files.map(p=>fs.readFileSync(p,'utf8'));assert.throws(()=>render(root),/Artifact language mismatch/);assert.deepEqual(files.map(p=>fs.readFileSync(p,'utf8')),before);for(const k of locales)assert(!fs.existsSync(file(route(k))));}finally{fs.rmSync(root,{recursive:true,force:true});}});

for(const l of locales)test(l+' valid html language syntax is accepted',()=>{const {root,file}=fixture();try{for(const u of [home(l),...targets(l)]){const f=file(u);const h=fs.readFileSync(f,'utf8');fs.writeFileSync(f,h.replace(/lang="[^"]+"/,'LANG = '+copy[l][0].toUpperCase()));}render(root);assert(fs.existsSync(file(route(l))));}finally{fs.rmSync(root,{recursive:true,force:true});}});
test('generic Portuguese declaration is accepted',()=>{const {root,file}=fixture();try{for(const u of [home('pt'),...targets('pt')]){const f=file(u);fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace('lang="pt-BR"',"lang='pt'"));}render(root);assert(fs.existsSync(file(route('pt'))));}finally{fs.rmSync(root,{recursive:true,force:true});}});

test('unowned existing guide is preserved and prevents all writes',()=>{const {root,file}=fixture();try{const hp=fs.readFileSync(file(home('en')),'utf8');const destination=file(route('de'));fs.mkdirSync(path.dirname(destination),{recursive:true});const existing='<html lang="de"><body>Existing independently maintained guide</body></html>';fs.writeFileSync(destination,existing);assert.throws(()=>render(root),/Refusing to overwrite unowned guide/);assert.equal(fs.readFileSync(destination,'utf8'),existing);assert.equal(fs.readFileSync(file(home('en')),'utf8'),hp);assert(!fs.existsSync(file(route('en'))));}finally{fs.rmSync(root,{recursive:true,force:true});}});

// Actual pure filesystem finalizer: reproduce post-render drift, then restore equality.
test('curated backlinks survive real finalization in all four locale aliases',()=>{
 const {finalize,pairs}=require('./finalize-field-evidence-aliases.cjs');
 const {root,file}=fixture();
 try{
  const all=['en','pt-BR','es','fr','de'];
  const canonical=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+l.toLowerCase())+'.html';
  for(const l of locales){
   const hf=file(home(l));fs.writeFileSync(hf,fs.readFileSync(hf,'utf8').replace('</main>','<!--field-evidence-locales:start--><section><div></div></section><!--field-evidence-locales:end--></main>'));
   const lang=copy[l][0];
   const alternate=[...all,'x-default'].map(k=>'<link rel="alternate" hreflang="'+k+'" href="https://ziontechgroup.com'+canonical(k==='x-default'?'en':k)+'">').join('');
   const nav='<nav data-field-evidence-languages>'+all.map(k=>'<a href="'+canonical(k)+'">'+k+'</a>').join('')+'</nav>';
   const checklist='<!--field-evidence-pack:start--><section id="evidence-pack"><ul>'+Array(6).fill('<li>Evidence</li>').join('')+'</ul></section><!--field-evidence-pack:end-->';
   const faq='<!--field-evidence-faq:start--><section id="field-evidence-faq" data-field-evidence-faq="fixture">'+Array(4).fill('<details><summary>Question</summary>Answer</details>').join('')+'</section><!--field-evidence-faq:end-->';
   fs.writeFileSync(file(targets(l)[0]),'<!DOCTYPE html><html lang="'+lang+'"><head><link rel="canonical" href="https://ziontechgroup.com'+canonical(lang)+'">'+alternate+'</head><body><main><h1>Field evidence</h1>'+nav+'<section id="tools"></section>'+checklist+faq+'<a href="'+targets(l)[1]+'">Telecom</a></main></body></html>');
  }
  const protectedHome=locales.map(l=>{const h=fs.readFileSync(file(home(l)),'utf8');return [h.match(/<form\b[\s\S]*?<\/form>/g),h.match(/<script\b[\s\S]*?<\/script>/g)];});
  finalize(root);for(const p of pairs)assert.equal(fs.readFileSync(file(p.alias),'utf8'),fs.readFileSync(file(p.canonical),'utf8'));
  render(root);for(const p of pairs)assert.notEqual(fs.readFileSync(file(p.alias),'utf8'),fs.readFileSync(file(p.canonical),'utf8'),'Fixture must reproduce stale aliases');
  finalize(root);
  for(const p of pairs){const h=fs.readFileSync(file(p.alias),'utf8');assert.equal(h,fs.readFileSync(file(p.canonical),'utf8'));const l=p.language==='pt-BR'?'pt':p.language;assert(h.includes('href="'+route(l)+'"'),'Alias lost curated return');assert.equal((h.match(/zion-curated-resource:start/g)||[]).length,1);}
  const integrity=JSON.parse(fs.readFileSync(file('/apps/field-evidence-final-integrity.json'),'utf8'));assert.equal(integrity.pairs.length,4);
  render(root);finalize(root);for(const p of pairs)assert.equal(fs.readFileSync(file(p.alias),'utf8'),fs.readFileSync(file(p.canonical),'utf8'));
  for(const [i,l] of locales.entries()){const h=fs.readFileSync(file(home(l)),'utf8');assert.deepEqual([h.match(/<form\b[\s\S]*?<\/form>/g),h.match(/<script\b[\s\S]*?<\/script>/g)],protectedHome[i]);}
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('deployment finalizes aliases after curated rendering and before reconciliation/upload',()=>{
 const yaml=fs.readFileSync(path.join(__dirname,'../.github/workflows/static-deploy.yml'),'utf8');
 const step=yaml.match(/- name: Validate and render curated five-language resource paths\n\s+run: ([^\n]+)/);assert(step,'Curated deployment step missing');
 assert(step[1].includes('node scripts/render-curated-network.cjs out && node scripts/finalize-field-evidence-aliases.cjs out'),'Curated rendering must finish with real alias finalization');
 const start=yaml.indexOf(step[0]);assert(start<yaml.indexOf('node scripts/verify-network-publication.cjs out'));assert(start<yaml.indexOf('actions/upload-pages-artifact@v3'));
});
