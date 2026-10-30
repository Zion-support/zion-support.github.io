"use strict";
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),vm=require('node:vm');
const review=require('./render-ai-evidence-review.cjs'),base=require('./render-ai-evidence-locales.cjs'),fallback=require('./complete-ai-evidence-fallbacks.cjs');
const out=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evidence-fallbacks-'));
review.render(process.env.ZION_APPS_ROOT||path.resolve(__dirname,'../public'),out);
class Element{
 constructor(id=''){this.id=id;this.value='';this.checked=false;this.textContent='';this.className='';this.children=[];this.events={};}
 addEventListener(k,f){this.events[k]=f;}
 replaceChildren(...a){this.children=[...a];if(this.id==='failure')this.value=a[0]?.value||'';}
 append(...a){this.children.push(...a);if(this.id==='failure'&&this.children.length===1)this.value=a[0].value;}
 appendChild(a){this.append(a);return a;}
 click(){return this.events.click();}
}
function boot(slug,i,clipboard){
 const html=fs.readFileSync(path.join(out,['','pt','es','fr','de'][i],slug,'index.html'),'utf8'),els=new Map();
 const el=id=>{if(!els.has(id))els.set(id,new Element(id));return els.get(id);};
 if(slug===base.slugs[1]){
  for(const[k,v]of Object.entries({sites:'2',concurrent:'1',hrs:'4',travel:'1.5',handoff:'1',techs:'1',vendor:'100',extras:'25',skill:'yes',verified:'yes'}))el(k).value=v;
  for(const id of['parts','siteaccess','client','po','zion'])el(id).checked=true;
 }
 vm.runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],{document:{getElementById:el,createElement:t=>new Element(t)},navigator:clipboard===undefined?{}:{clipboard}},{timeout:5000});
 return{html,el};
}
for(let i=0;i<5;i++){
 test(base.locales[i]+' all three apps explain the no-JavaScript limitation',()=>{
  for(const slug of base.slugs){const{html}=boot(slug,i);assert.ok(html.includes('<noscript>'));assert.ok(html.includes(fallback.nojs[i]));}
 });
 test(base.locales[i]+' manual report works without clipboard and clears invalid evidence',async()=>{
  for(const clip of[undefined,{writeText:()=>Promise.reject(new Error('blocked'))}]){
   const{html,el}=boot(base.slugs[1],i,clip);assert.ok(html.includes(fallback.labels[i]));assert.match(html,/<textarea id="readiness-brief" readonly/);
   const original=el('readiness-brief').value;assert.ok(original.length>50);el('copy').click();await new Promise(resolve=>setImmediate(resolve));assert.equal(el('readiness-brief').value,original);
   el('po').checked=false;el('assess').click();assert.ok(el('readiness-brief').value.includes('HOLD'));
   el('sites').value='';el('sites').events.input();assert.equal(el('readiness-brief').value,'');el('copy').click();assert.equal(el('readiness-brief').value,'');
  }
 });
 test(base.locales[i]+' graph critical flags reject strings, numbers and null',()=>{
  const{el}=boot(base.slugs[2],i);el('sample').click();assert.ok(el('metrics').children.length>0);
  for(const value of['false','true',1,0,null,{},[]]){
   el('graph').value=JSON.stringify([{id:'upstream',dependsOn:[]},{id:'child',dependsOn:['upstream'],critical:value}]);el('parse').click();assert.equal(el('status').className,'status bad');assert.ok(el('status').textContent.includes(review.errors[i]));assert.equal(el('metrics').children.length,0);
  }
  for(const value of[true,false]){el('graph').value=JSON.stringify([{id:'upstream',dependsOn:[]},{id:'child',dependsOn:['upstream'],critical:value}]);el('parse').click();assert.equal(el('status').className,'status');assert.equal(el('metrics').children[1].children[0].textContent,value?1:0);}
 });
}
