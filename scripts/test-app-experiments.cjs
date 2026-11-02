"use strict";
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(process.argv[2]||'out');
const langs={en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'};
const manifest=JSON.parse(fs.readFileSync(path.join(root,'apps/app-experiment-publication.json'),'utf8'));
assert.equal(manifest.pages.length,5);assert.equal(manifest.emailInboxVerified,false);
for(const [l,lang] of Object.entries(langs)){
 const file=path.join(root,l==='en'?'':l,'apps/app-experiment-planner.html');
 const html=fs.readFileSync(file,'utf8');assert(html.includes(`<html lang="${lang}">`));assert.equal((html.match(/hreflang=/g)||[]).length,6);assert.equal((html.match(/maxlength="1000"/g)||[]).length,5);assert(html.includes('aria-live="polite"'));assert(html.includes('/assets/css/discovery.css'));assert(html.includes('commercial@ziontechgroup.com'));assert(html.includes('app-experiments-2026-10-08'));
 const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];new Function(script);
 assert(!/fetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|innerHTML/.test(script),'Planner must be local-only and use safe text rendering');
 const handlers={},nodes={};
 for(const id of ['experiment','brief','status','download','f0','f1','f2','f3','f4'])nodes[id]={textContent:'',value:id==='f0'?'<img src=x onerror=alert(1)>':'sample',hidden:true,reportValidity:()=>true,addEventListener:(event,fn)=>{handlers[id+':'+event]=fn;}};
 const document={getElementById:id=>nodes[id],createElement:()=>({click(){}})};
 vm.runInNewContext(script,{document,URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}},Blob:function(){},setTimeout:fn=>fn()});
 handlers['experiment:submit']({preventDefault(){}});assert(nodes.brief.textContent.includes('<img src=x onerror=alert(1)>'));assert(nodes.status.textContent.length>10);assert.equal(nodes.download.hidden,false);handlers['download:click']();
 const homefile=path.join(root,l==='pt'?'':l,'index.html');assert(fs.readFileSync(homefile,'utf8').includes('app-experiment-promotion'));
}
for(const url of manifest.reciprocal){assert(fs.readFileSync(path.join(root,new URL(url).pathname,'index.html'),'utf8').includes('app-experiment-related'));}
console.log('PASS: five locale pages, translated form states, safe rendering, local-only download, homepage promotion and reciprocal links. No email sent.');
