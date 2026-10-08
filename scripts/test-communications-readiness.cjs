'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const out=path.resolve(process.argv[2]||'out'),locales=['en','pt','es','fr','de'];
const file=r=>path.join(out,r.slice(1)+(r.endsWith('/')?'index.html':''));
const runtime=fs.readFileSync(file('/assets/js/communications-readiness.js'),'utf8');
assert(!/fetch\(|XMLHttpRequest|localStorage|sessionStorage|innerHTML/.test(runtime));
const manifest=JSON.parse(fs.readFileSync(file('/apps/communications-readiness-publication.json'),'utf8'));
assert.equal(manifest.routes.length,5);assert.equal(new Set(manifest.linkedRoutes).size,35);
for(const l of locales){
 const route=(l==='en'?'/':'/'+l+'/')+'apps/communications-readiness.html',html=fs.readFileSync(file(route),'utf8');
 assert(html.includes('<html lang="'+(l==='pt'?'pt-BR':l)+'">'));assert(html.includes('href="https://ziontechgroup.com'+route+'"'));
 assert.equal((html.match(/hreflang=/g)||[]).length,6);assert.equal((html.match(/type="checkbox"/g)||[]).length,7);assert.equal((html.match(/<details>/g)||[]).length,3);
 const cfg=JSON.parse(html.match(/id="readiness-config">([\s\S]*?)<\/script>/)[1]);
 const handlers={},elements={},state={checked:[],downloads:0,revoked:0};
 const eventTarget=id=>({hidden:id==='readiness-result',textContent:'',addEventListener:(event,fn)=>{handlers[id+':'+event]=fn;}});
 for(const id of ['readiness-config','readiness-form','readiness-result','readiness-notes','readiness-status','readiness-download'])elements[id]=eventTarget(id);
 elements['readiness-config'].textContent=JSON.stringify(cfg);elements['readiness-form'].querySelectorAll=()=>state.checked.map(value=>({value:String(value)}));
 const sandbox={document:{getElementById:id=>elements[id],createElement:()=>({click(){state.downloads++;}})},Blob,URL:{createObjectURL:()=> 'blob:local-test',revokeObjectURL:()=>{state.revoked++;}},setTimeout:fn=>fn()};
 vm.runInNewContext(runtime,sandbox);let prevented=false;
 handlers['readiness-form:submit']({preventDefault(){prevented=true;}});assert(prevented);assert.equal(elements['readiness-result'].hidden,false);assert(elements['readiness-status'].textContent.endsWith('0/7'));assert(elements['readiness-notes'].textContent.includes(cfg.next));
 state.checked=[0,2,6];handlers['readiness-form:change']();assert(elements['readiness-status'].textContent.endsWith('3/7'));assert.equal((elements['readiness-notes'].textContent.match(/\[x\]/g)||[]).length,3);
 state.checked=[0,1,2,3,4,5,6];handlers['readiness-form:submit']({preventDefault(){}});assert(elements['readiness-status'].textContent.endsWith('7/7'));assert(elements['readiness-notes'].textContent.includes(cfg.result));assert(elements['readiness-notes'].textContent.includes(cfg.next));handlers['readiness-download:click']();assert.equal(state.downloads,1);assert.equal(state.revoked,1);
 for(const [,slug] of [['','smart-call-routing-ai'],['','call-intelligence-hub'],['','voicemail-triage-ai'],['','meeting-intelligence-ai']])assert(html.includes('href="'+(l==='en'?'/':'/'+l+'/')+slug+'/"'));
}
for(const route of manifest.linkedRoutes){const html=fs.readFileSync(file(route),'utf8');assert.equal((html.match(/id="communications-readiness-path"/g)||[]).length,1);}
console.log('PASS: 5 locales, zero/partial/full evidence states, changes, local downloads, no network/storage APIs, 35 unique reciprocal sections.');
