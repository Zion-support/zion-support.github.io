'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {render,copy}=require('./render-network-evaluation.cjs');
let checks=0;const ok=(condition,message)=>{assert(condition,message);checks++;};
const dirs=[];
function fixture(){const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evaluation-'));dirs.push(root);const files=[];for(const [l,c] of Object.entries(copy)){const p=l==='en'?'':l+'/',home=l==='pt'?'':l+'/';for(const [rel,kind] of [[p+'apps/network-start-here.html','guide'],[home+'index.html','home']]){const file=path.join(root,rel);fs.mkdirSync(path.dirname(file),{recursive:true});const content=kind==='guide'?'<h1>Existing guide</h1><a href="/apps/">Existing tool</a>':'<!--zion-network-home:start--><section><div class="wrap"><h2 id="network-start-title">Existing promotion</h2><div class="actions">Existing CTAs</div><article>Existing card</article></div></section><!--zion-network-home:end-->';const html=`<!DOCTYPE html><html lang="${c.lang}"><head><title>Preserved</title><link rel="canonical" href="https://example.invalid/${rel}"></head><body><main>${content}<form action="/unchanged"><input name="example"></form><script>const unchanged=true;</script></main></body></html>`;fs.writeFileSync(file,html);files.push({file,l,kind,before:html});}}return {root,files};}
try{
 const f=fixture(),result=render(f.root);ok(result.pages===10,'Ten pages');
 const first=f.files.map(({file})=>fs.readFileSync(file,'utf8'));
 for(let i=0;i<f.files.length;i++){
  const {l,kind,before}=f.files[i],html=first[i],c=copy[l],prefix=l==='en'?'/':`/${l}/`,home=l==='pt'?'/':`/${l}/`;
  ok(html.includes(`<html lang="${c.lang}">`),'Language retained');
  ok(html.includes('<form action="/unchanged"><input name="example"></form>'),'Form retained');
  ok(html.includes('<script>const unchanged=true;</script>'),'Script retained');
  ok(html.match(/<head>[\s\S]*?<\/head>/)[0]===before.match(/<head>[\s\S]*?<\/head>/)[0],'SEO retained');
  if(kind==='guide'){
   ok((html.match(/id="network-evaluation"/g)||[]).length===1,'Unique section ID');
   ok(c.questions.every(([q,a])=>html.includes(q.replace(/&/g,'&amp;'))&&html.includes(a.replace(/&/g,'&amp;'))),'All localized questions and answers');
   ok(html.includes(`href="${home}#network-start-title"`),'Locale homepage return');
   ok(html.includes('href="/zion-app-network/"'),'Network catalog interlink');
  }else{
   ok((html.match(/data-network-evaluation-cta=/g)||[]).length===1,'One CTA');
   ok(html.includes(`href="${prefix}apps/network-start-here.html#network-evaluation"`),'Locale guide target');
   ok(html.includes('Existing CTAs')&&html.includes('Existing card'),'Previous promotion retained');
   ok(html.indexOf('data-network-evaluation-cta=')<html.indexOf('</div></section>'),'CTA inside wrapper');
  }
 }
 render(f.root);ok(f.files.every(({file},i)=>fs.readFileSync(file,'utf8')===first[i]),'Byte-identical second run');
 function negative(change,pattern){const f=fixture();change(f);const snapshots=f.files.filter(({file})=>fs.existsSync(file)).map(({file})=>[file,fs.readFileSync(file,'utf8')]);assert.throws(()=>render(f.root),pattern);checks++;ok(snapshots.every(([file,text])=>fs.readFileSync(file,'utf8')===text),'No partial write on failed preflight');}
 negative(f=>fs.unlinkSync(f.files.at(-1).file),/Missing home/);
 negative(f=>{const file=f.files.at(-1).file;fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('lang="de"','lang="en"'));},/Wrong language/);
 negative(f=>{const file=f.files[1].file,s=fs.readFileSync(file,'utf8');fs.writeFileSync(file,s.replace('<!--zion-network-home:end-->','<!--zion-network-home:end--><!--zion-network-home:start--><section></section><!--zion-network-home:end-->'));},/Expected one owned promotion/);
 negative(f=>{const file=f.files[0].file;fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('</main>',''));},/Missing main/);
 negative(f=>{const file=f.files[0].file;fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('<h1>','<p id="network-evaluation">Conflict</p><h1>'));},/Conflicting evaluation ID/);
 console.log(`PASS network evaluation: ${checks} assertions; synthetic fixtures only, not live or visual QA.`);
}finally{for(const d of dirs)fs.rmSync(d,{recursive:true,force:true});}
