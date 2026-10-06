'use strict';
// Run: node scripts/check-discovery-safe-delivery.cjs [public/discovery/index.html]
// Offline tests only. DOM, clipboard and fetch are mocked; no email is sent.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const input = fs.readFileSync(process.argv[2] || 'public/discovery/index.html', 'utf8');
const source = input.includes('<script>') ? [...input.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x=>x[1]).join('\n') : input;
assert(source.includes('discoveryPending'), 'Expected Discovery implementation was not found');
let count = 0;
function fixture(fetchImpl, overrides = {}) {
 const nodes = new Map();
 class Node {
  constructor(tag = 'div') { this.tagName=tag; this.children=[]; this.style={}; this.attrs={}; this.events={}; this.textContent=''; }
  set innerHTML(value) { assert(!value.includes('TEST-INJECT'), 'User input entered an HTML sink'); this.html=value; }
  get innerHTML() { return this.html||''; }
  addEventListener(type, fn) { this.events[type]=fn; }
  appendChild(node) { this.children.push(node); return node; }
  replaceChildren(...children) { this.children=children; }
  setAttribute(key,value) { this.attrs[key]=value; }
  reportValidity() { return this.valid!==false; }
  scrollIntoView() {}
  click() {}
 }
 const get=id=>{ if(!nodes.has(id))nodes.set(id,new Node()); return nodes.get(id); };
 const form=get('dform');
 form.data={name:'QA Test',email:'qa@example.com',company:'Test Company',industry:'Technology / SaaS',process:'Customer support / ticket triage',hours:'20\u201380',systems:'CRM',goal:'Reduce repeated work',timeline:'This quarter',...overrides};
 get('submit-report').textContent='Get report';
 const requests=[];
 const context={document:{getElementById:get,createElement:t=>new Node(t),referrer:'https://example.com/private/client?access_token=SECRET#private'},location:{href:'https://ziontechgroup.com/discovery/?token=SECRET&utm_source=test#private',search:'?token=SECRET&utm_source=test'},window:{},URL,URLSearchParams,Blob,AbortController,setTimeout,clearTimeout,navigator:{clipboard:{writeText:async()=>{}}},FormData:class {constructor(f){this.data=f.data;}entries(){return Object.entries(this.data);}},fetch:async(url,options)=>{requests.push({url,options,payload:JSON.parse(options.body)});return fetchImpl(url,options);}};
 vm.createContext(context); vm.runInContext(source,context);
 return {get,form,context,requests,submit:()=>form.events.submit({preventDefault(){},target:form})};
}
const ok=async()=>({ok:true,json:async()=>({success:true})});
async function test(name,fn){await fn();count++;console.log('PASS '+name);}
(async()=>{
 await test('same local report payload targets Commercial with client and Carlos copied',async()=>{
  const x=fixture(ok);await x.submit();const p=x.requests[0].payload;
  assert.equal(x.requests.length,1);assert.equal(x.requests[0].url,'https://formsubmit.co/ajax/commercial@ziontechgroup.com');
  assert.equal(p._cc,'qa@example.com,carlos@ziontechgroup.com');assert.equal(p._replyto,'qa@example.com');assert(!('_autoresponse' in p));
  assert.equal(p.message,x.context.window.__zionDiscoveryReport);assert.equal(p.message,x.get('report-text').textContent);
 });
 await test('success means acceptance, not confirmed inbox delivery',async()=>{
  for(const success of [true,'true']){const x=fixture(async()=>({ok:true,json:async()=>({success})}));await x.submit();assert.match(x.get('rsent').textContent,/Inbox delivery is not yet confirmed/);}
 });
 await test('HTML injection stays text and subject control characters are stripped',async()=>{
  const x=fixture(ok,{company:'<img src=x onerror="TEST-INJECT">',name:'QA\r\nBcc: another@example.com'});await x.submit();
  assert(x.get('rsummary').textContent.includes('<img'));assert.equal(x.get('rsummary').innerHTML,'');assert(!/[\r\n]/.test(x.requests[0].payload._subject));
 });
 await test('URLs omit private query strings, fragments and referrer paths',async()=>{
  const x=fixture(ok);await x.submit();const p=x.requests[0].payload;assert.equal(p.source_url,'https://ziontechgroup.com/discovery/');assert.equal(p.referrer,'https://example.com');assert.equal(p.utm_source,'test');assert(!JSON.stringify(p).includes('SECRET'));
 });
 await test('concurrent clicks do not duplicate send and report is ready before network resolves',async()=>{
  let resolve;const x=fixture(()=>new Promise(r=>{resolve=r;}));const pending=x.submit();await x.submit();assert.equal(x.requests.length,1);assert(x.context.window.__zionDiscoveryReport);assert.equal(x.get('submit-report').disabled,true);resolve({ok:true,json:async()=>({success:true})});await pending;assert.equal(x.get('submit-report').disabled,false);
 });
 await test('repeat accepted report is suppressed for the current page session',async()=>{const x=fixture(ok);await x.submit();await x.submit();assert.equal(x.requests.length,1);assert.match(x.get('rsent').textContent,/No duplicate/);});
 for(const [name,reply] of [['HTTP failure',async()=>({ok:false,json:async()=>({success:true})})],['provider rejection',async()=>({ok:true,json:async()=>({success:false})})],['invalid JSON',async()=>({ok:true,json:async()=>{throw Error('Invalid JSON');}})]]){
  await test(name+' retains report and manual fallback',async()=>{const x=fixture(reply);await x.submit();assert(x.get('report-text').textContent);assert.match(x.get('rsent').textContent,/acceptance was not confirmed/);assert(!x.get('rsent').textContent.includes('activation'));assert(x.get('email-fallback').children[0].href.startsWith('mailto:commercial@ziontechgroup.com?cc='));assert.equal(x.requests.length,1);});
 }
 for(const name of ['AbortError','TypeError']){
  await test(name+' preserves local result and clears pending state',async()=>{const x=fixture(async()=>{const e=Error('mock network error');e.name=name;throw e;});await x.submit();assert(x.get('report-text').textContent);assert.equal(x.get('submit-report').disabled,false);assert.equal(x.form.attrs['aria-busy'],'false');assert.equal(x.requests.length,1);if(name==='AbortError')assert.match(x.get('rsent').textContent,/may already have been accepted/);});
 }
 await test('invalid and multiple-recipient email input is blocked',async()=>{for(const email of ['a@example.com,b@example.com','a@example.com;evil@example.com','a@example.com\r\nBcc: evil@example.com','not-an-email']){const x=fixture(ok,{email});await x.submit();assert.equal(x.requests.length,0);assert.equal(x.get('form-errors').hidden,false);}});
 await test('all ten process choices generate three safe internal app links',async()=>{const base=fixture(ok);const choices=vm.runInContext('Object.keys(APPMAP)',base.context);assert.equal(choices.length,10);for(const process of choices){const x=fixture(ok,{process});await x.submit();assert.equal(x.get('rapps').children.length,3);for(const item of x.get('rapps').children){assert(item.children[0].href.startsWith('/'));assert(item.children[0].textContent);}}});
 await test('unknown model choices cannot access inherited object properties',async()=>{for(const data of [{process:'__proto__'},{hours:'constructor'}]){const x=fixture(ok,data);await x.submit();assert.equal(x.requests.length,0);}});
 console.log('TOTAL '+count+' passed; isolated mock DOM/network, no real delivery or browser layout tested.');
})().catch(e=>{console.error(e);process.exitCode=1;});
