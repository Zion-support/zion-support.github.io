'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const base=require('./render-ai-evidence-locales.cjs'),review=require('./render-ai-evidence-review.cjs');
const SOURCE=process.env.ZION_APPS_ROOT||path.resolve(__dirname,'../public');
const output=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evidence-review-'));
review.render(SOURCE,output);
const codes=['','pt','es','fr','de'];
class Element{
 constructor(id=''){this.id=id;this.value='';this.checked=false;this.textContent='';this.className='';this.children=[];this.events={};this.options=[];}
 addEventListener(k,f){this.events[k]=f;}replaceChildren(...a){this.children=[...a];if(this.id==='failure'){this.options=[...a];this.value=a[0]?.value||'';}}
 append(...a){this.children.push(...a);if(this.id==='failure'){this.options.push(...a);if(this.options.length===1)this.value=a[0].value;}}appendChild(a){this.append(a);return a;}click(){return this.events.click();}
}
function boot(slug,i){const html=fs.readFileSync(path.join(output,codes[i],slug,'index.html'),'utf8');const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];const elems=new Map();let copied='';const el=id=>{if(!elems.has(id))elems.set(id,new Element(id));return elems.get(id);};const document={getElementById:el,createElement:t=>new Element(t)};
 if(slug==='field-sla-acceptance-matrix')for(const[k,v]of Object.entries({sites:'2',concurrent:'1',hrs:'4',travel:'1.5',handoff:'1',techs:'0',vendor:'100',extras:'0',skill:'no',verified:'no'}))el(k).value=v;
 new vm.Script(code);vm.runInNewContext(code,{document,navigator:{clipboard:{writeText:t=>{copied=t;return Promise.resolve();}}},console},{timeout:5000});return{html,el,copied:()=>copied};}
function msg(key,i){return base.runtime.find(r=>r[0]===key)[i];}
for(let i=0;i<5;i++){
 test(base.locales[i]+' metadata, localized UI, reciprocal routes and privacy',()=>{
  for(const slug of base.slugs){const{html}=boot(slug,i);const route='/'+(i?codes[i]+'/':'')+slug+'/';assert.ok(html.includes('<html lang="'+base.locales[i]+'">'));assert.ok(html.includes('rel="canonical" href="https://ziontechgroup.com'+route+'"'));assert.equal((html.match(/rel="alternate"/g)||[]).length,6);assert.equal((html.match(/aria-current="page"/g)||[]).length,1);assert.ok(html.includes(base.rows.privacy[i]));assert.ok(html.includes('href="#main"'));assert.ok(html.includes(base.rows.draft[i]));for(const other of base.slugs.filter(s=>s!==slug))assert.ok(html.includes('href="/'+(i?codes[i]+'/':'')+other+'/"'));assert.ok(!/\bfetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|<iframe|<script[^>]*src=/.test(html));}
  for(const row of Object.values(base.rows))assert.equal(row.length,5);for(const row of base.runtime)assert.equal(row.length,5);
 });
 test(base.locales[i]+' trace parsing, sensitive signals and invalid-data clearing',()=>{
  const{el}=boot('agent-trace-evidence-lab',i);el('demo').click();assert.ok(el('status').textContent.startsWith(msg('Analyzed ',i)));assert.equal(el('metrics').children[1].children[0].textContent,'180');assert.equal(el('metrics').children[2].children[0].textContent,'90');el('trace').value=JSON.stringify([{name:'synthetic',startTimeUnixNano:'1',endTimeUnixNano:'2',attributes:{note:'fake@example.invalid'}}]);el('analyze').click();assert.ok(el('flags').children.some(x=>x.textContent.startsWith(msg('Possible sensitive attribute patterns in ',i))));el('trace').value='{invalid';el('analyze').click();assert.ok(el('status').textContent.includes(review.errors[i]));assert.equal(el('metrics').children.length,0);assert.equal(el('rows').children.length,0);el('clear').click();assert.equal(el('trace').value,'');
 });
 test(base.locales[i]+' field gates, locale money, localized copied brief and stale export blocking',async()=>{
  const b=boot('field-sla-acceptance-matrix',i),{el}=b;el('techs').value='1';el('skill').value='yes';el('assess').click();assert.ok(el('result').textContent.startsWith('HOLD'));assert.ok(el('evidence').children.some(x=>x.textContent.includes(msg('Applicable PO',i))));for(const id of['parts','siteaccess','client','po','zion'])el(id).checked=true;el('verified').value='yes';el('assess').click();assert.ok(el('result').textContent.startsWith(msg('EVIDENCE PRESENT - manual final verification still required',i)));assert.ok(el('commercial').textContent.includes(Number(140).toLocaleString(base.locales[i],{minimumFractionDigits:2,maximumFractionDigits:2})));el('copy').click();await Promise.resolve();assert.ok(b.copied().includes(msg('Missing evidence: ',i)));assert.ok(b.copied().includes(msg('No client quotation or dispatch authorization implied.',i)));el('concurrent').value='2';el('assess').click();assert.ok(el('result').textContent.startsWith('HOLD'));el('concurrent').value='3';el('assess').click();assert.equal(el('commercial').textContent,'');assert.equal(el('evidence').children.length,0);const old=b.copied();el('copy').click();assert.equal(b.copied(),old,'invalid input must not copy stale report');
 });
 test(base.locales[i]+' dependency transitive paths, cycle termination and invalid-state clearing',()=>{
  const{el}=boot('ai-dependency-blast-radius',i);el('sample').click();assert.ok(el('status').textContent.startsWith(msg('Validated ',i)));el('failure').value='gpu-cluster';el('simulate').click();assert.equal(el('metrics').children[0].children[0].textContent,4);assert.ok(el('affected').children.some(x=>x.textContent.includes('customer-portal')));el('graph').value=JSON.stringify([{id:'a',dependsOn:['b']},{id:'b',dependsOn:['a']}]);el('parse').click();assert.equal(el('affected').children.length,1);el('graph').value=JSON.stringify([{id:'a',dependsOn:['missing']}]);el('parse').click();assert.ok(el('status').textContent.includes(msg('Unknown dependency ',i)));assert.equal(el('metrics').children.length,0);assert.equal(el('affected').children.length,0);
 });
 test(base.locales[i]+' homepage promotion draft is truthful, localized and nonduplicate',()=>{
  const html=fs.readFileSync(path.join(output,'review-promotions',['en','pt','es','fr','de'][i]+'.html'),'utf8');assert.equal((html.match(/id="zion-next-gen-labs"/g)||[]).length,1);assert.ok(html.includes(base.rows.promotion[i]));assert.ok(html.includes(base.rows.draft[i]));for(const slug of base.slugs)assert.ok(html.includes('/'+(i?codes[i]+'/':'')+slug+'/'));assert.ok(!/<script|<form|<iframe/.test(html));
 });
}
test('repeated render is byte-idempotent and manifest cannot claim live',()=>{const digest=()=>{const files=[];function walk(d){for(const ent of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,ent.name);if(ent.isDirectory())walk(p);else files.push(p);}}walk(output);return files.sort().map(p=>[path.relative(output,p),crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')]);};const first=digest();review.render(SOURCE,output);assert.deepEqual(digest(),first);const manifest=JSON.parse(fs.readFileSync(path.join(output,'ai-evidence-locales-review.json')));assert.equal(manifest.pages,15);assert.equal(manifest.homepageFragments,5);assert.equal(manifest.productionIntegrated,false);assert.equal(manifest.status,'review-only-not-live');});


// Independent release-gate and complete-cost regressions across all review locales.
for (let i = 0; i < base.locales.length; i++) {
  test(base.locales[i] + ' each missing written gate independently prevents readiness', async () => {
    const b = boot('field-sla-acceptance-matrix', i), {el} = b;
    const gates = ['parts', 'siteaccess', 'client', 'po', 'zion'];
    function ready() {
      el('techs').value = '1'; el('skill').value = 'yes'; el('verified').value = 'yes';
      for (const id of gates) el(id).checked = true;
      el('assess').click();
      assert.ok(el('result').textContent.startsWith(msg('EVIDENCE PRESENT - manual final verification still required', i)));
    }
    for (const id of gates) {
      ready(); el(id).checked = false; el('assess').click();
      assert.ok(el('result').textContent.startsWith('HOLD'), id + ' must independently block readiness');
      el('copy').click(); await Promise.resolve();
      assert.ok(b.copied().includes('HOLD'), id + ' must not export the prior positive state');
      assert.ok(b.copied().includes(msg('No client quotation or dispatch authorization implied.', i)));
    }
    for (const [id, value] of [['skill', 'no'], ['techs', '0']]) {
      ready(); el(id).value = value; el('assess').click();
      assert.ok(el('result').textContent.startsWith('HOLD'), id + ' must independently block readiness');
    }
  });
  test(base.locales[i] + ' internal markup includes documented extras and never authorizes a quote', async () => {
    const b = boot('field-sla-acceptance-matrix', i), {el} = b;
    el('verified').value = 'yes'; el('vendor').value = '620'; el('extras').value = '80'; el('assess').click();
    const amount = value => Number(value).toLocaleString(base.locales[i], {minimumFractionDigits: 2, maximumFractionDigits: 2});
    assert.ok(el('commercial').textContent.includes(amount(980)), 'all-in 700 x 1.40, not base-only 620 x 1.40');
    assert.ok(el('result').textContent.startsWith('HOLD'));
    el('copy').click(); await Promise.resolve();
    assert.ok(b.copied().includes(msg('No client quotation or dispatch authorization implied.', i)));
    el('extras').value = '0'; el('assess').click();
    assert.ok(el('commercial').textContent.includes(amount(868)), 'removing extras recalculates from current inputs');
    el('verified').value = 'no'; el('assess').click();
    assert.ok(!el('commercial').textContent.includes(amount(868)), 'unverified costs cannot keep the old indicative price');
    assert.ok(el('commercial').textContent.includes(msg('Price blocked: written, current all-in vendor terms and itemization not confirmed.', i)));
  });
}
