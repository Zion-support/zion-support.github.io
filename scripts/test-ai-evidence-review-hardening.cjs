'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),vm=require('node:vm');
const review=require('./render-ai-evidence-review.cjs'),base=require('./render-ai-evidence-locales.cjs'),hard=require('./harden-ai-evidence-review.cjs');
const out=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evidence-hardening-'));
review.render(process.env.ZION_APPS_ROOT||path.resolve(__dirname,'../public'),out);
class Element {
 constructor(id=''){this.id=id;this.value='';this.checked=false;this.textContent='';this.className='';this.children=[];this.events={};this.options=[];}
 addEventListener(k,f){this.events[k]=f;}
 replaceChildren(...a){this.children=[...a];if(this.id==='failure'){this.options=[...a];this.value=a[0]?.value||'';}}
 append(...a){this.children.push(...a);if(this.id==='failure'){this.options.push(...a);if(this.options.length===1)this.value=a[0].value;}}
 appendChild(a){this.append(a);return a;}
 click(){return this.events.click();}
}
function boot(slug,i){const html=fs.readFileSync(path.join(out,['','pt','es','fr','de'][i],slug,'index.html'),'utf8'),els=new Map();let copied=[];const el=id=>{if(!els.has(id))els.set(id,new Element(id));return els.get(id);};
 if(slug==='field-sla-acceptance-matrix'){
  for(const[k,v]of Object.entries({sites:'2',concurrent:'1',hrs:'4',travel:'1.5',handoff:'1',techs:'1',vendor:'100',extras:'25',skill:'yes',verified:'yes'}))el(k).value=v;
  for(const id of['parts','siteaccess','client','po','zion'])el(id).checked=true;
 }
 vm.runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],{document:{getElementById:el,createElement:t=>new Element(t)},navigator:{clipboard:{writeText:t=>{copied.push(t);return Promise.resolve();}}}},{timeout:5000});return{html,el,copied};
}
for(let i=0;i<5;i++){
 test(base.locales[i]+' translated worked examples and unchanged reciprocal links',()=>{
  for(let a=0;a<3;a++){const{html}=boot(base.slugs[a],i);assert.equal((html.match(/id="safe-worked-example"/g)||[]).length,1);assert.ok(html.includes(hard.titles[i]));assert.ok(html.includes(hard.examples[a][i]));for(const slug of base.slugs.filter(s=>s!==base.slugs[a]))assert.ok(html.includes('href="/'+(i?['','pt','es','fr','de'][i]+'/':'')+slug+'/"'));assert.ok(!/<form|<iframe|<script[^>]*src=/.test(html));}
 });
 test(base.locales[i]+' edited trace input immediately invalidates old results',()=>{
  const{el}=boot(base.slugs[0],i);el('demo').click();assert.ok(el('metrics').children.length>0);el('trace').value='{changed';assert.equal(typeof el('trace').events.input,'function');el('trace').events.input();assert.equal(el('metrics').children.length,0);assert.equal(el('rows').children.length,0);assert.equal(el('flags').children.length,0);assert.equal(el('status').textContent,base.rows.ready[i]);el('analyze').click();assert.ok(el('status').textContent.includes(review.errors[i]));
 });
 test(base.locales[i]+' edited graph cannot reuse the previous failure scenario',()=>{
  const{el}=boot(base.slugs[2],i);el('sample').click();assert.ok(el('metrics').children.length>0);el('graph').value=JSON.stringify([{id:'new',dependsOn:[]}]);assert.equal(typeof el('graph').events.input,'function');el('graph').events.input();el('simulate').click();assert.equal(el('metrics').children.length,0);assert.equal(el('affected').children.length,0);assert.equal(el('failure').options.length,0);el('parse').click();assert.equal(el('failure').options.length,1);assert.equal(el('metrics').children[0].children[0].textContent,0);
 });
 test(base.locales[i]+' missing, fractional, excessive and nonfinite numbers block copied evidence',async()=>{
  const invalid=[['travel',''],['vendor',''],['extras',' '],['techs','1.5'],['sites','2.5'],['concurrent','1.5'],['sites','101'],['techs','101'],['hrs','97'],['travel','73'],['handoff','73'],['vendor','1000000001'],['extras','1e309'],['vendor','-1'],['travel','NaN']];
  for(const[id,value]of invalid){const{el,copied}=boot(base.slugs[1],i);el('copy').click();await Promise.resolve();assert.equal(copied.length,1);el(id).value=value;assert.equal(typeof el(id).events.input,'function');el(id).events.input();assert.equal(el('result').className,'status bad',id+'='+value);assert.equal(el('evidence').children.length,0);assert.equal(el('commercial').textContent,'');el('copy').click();await Promise.resolve();assert.equal(copied.length,1,'no stale copy after '+id+'='+value);}
  const{el}=boot(base.slugs[1],i);assert.ok(el('commercial').textContent.includes(Number(175).toLocaleString(base.locales[i],{minimumFractionDigits:2,maximumFractionDigits:2})));el('po').checked=false;el('assess').click();assert.ok(el('result').textContent.startsWith('HOLD'));
 });
}
test('hardening refuses unknown locales and source-contract drift',()=>{assert.throws(()=>hard.harden('<main></main>',base.slugs[0],5),/Unknown/);assert.throws(()=>hard.harden('<main></main>',base.slugs[0],0),/Missing/);assert.throws(()=>hard.harden('<main><script>const nothing=0;</script></main>',base.slugs[1],0),/contract changed/);});
