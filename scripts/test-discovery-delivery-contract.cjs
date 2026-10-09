'use strict';
// Offline safety contract. All fetch calls are mocked; no real email is sent.
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const file=process.env.DISCOVERY_HTML||path.resolve(__dirname,'../public/discovery/index.html');
const html=fs.readFileSync(file,'utf8');
const inline=[...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).find(s=>s.includes('const APPMAP='));
const source=inline||fs.readFileSync(path.resolve(__dirname,'../public/assets/js/discovery-delivery.js'),'utf8');
if(!inline)assert.match(html,/src="\/assets\/js\/discovery-delivery.js/);
function harness(mode='success',overrides={},lang='en'){
 const fields={name:'QA Only',email:'qa@example.test',company:'Test Company',industry:'Technology / SaaS',process:'IT operations / incident response',hours:'20–80',systems:'Test system',goal:'Bounded test',timeline:'This quarter',...overrides};
 class Element{constructor(){this.children=[];this.style={};this.attrs={};this.listeners={};this.textContent='';this.innerHTML='';this.disabled=false;this.hidden=false;}addEventListener(n,f){this.listeners[n]=f;}replaceChildren(...c){this.children=c;}appendChild(c){this.children.push(c);return c;}append(...c){this.children.push(...c);}setAttribute(k,v){this.attrs[k]=v;}reportValidity(){return true;}scrollIntoView(){}click(){}}
 const ids=['dform','form-errors','rscore','rbar','rsummary','rapps','rnext','report-text','email-fallback','result','copy-report','rsent','submit-report','download-report'];
 const nodes=Object.fromEntries(ids.map(id=>[id,new Element()])),requests=[],timers=new Map();let timerId=0,resolveRequest;
 const context={document:{documentElement:{lang},getElementById:id=>{assert.ok(nodes[id],id);return nodes[id];},createElement:()=>new Element(),referrer:'https://ref.example/private/client?token=DO_NOT_LEAK#private'},window:{},location:{href:'https://ziontechgroup.com/discovery/?utm_source=test&token=DO_NOT_LEAK#private',search:'?utm_source=test&token=DO_NOT_LEAK'},navigator:{clipboard:{writeText:async()=>{}}},URL,URLSearchParams,Blob,AbortController,FormData:class{entries(){return Object.entries(fields);}},setTimeout:fn=>{timers.set(++timerId,fn);return timerId;},clearTimeout:id=>timers.delete(id),fetch:(url,options)=>{requests.push({url,options,payload:JSON.parse(options.body)});if(mode==='malformed-json')return Promise.resolve({ok:true,json:async()=>{throw new SyntaxError('Invalid mocked JSON');}});if(mode==='missing-success')return Promise.resolve({ok:true,json:async()=>({})});if(mode==='false-success')return Promise.resolve({ok:true,json:async()=>({success:false})});if(mode==='numeric-success')return Promise.resolve({ok:true,json:async()=>({success:1})});if(mode==='http-error-success')return Promise.resolve({ok:false,json:async()=>({success:true})});if(mode==='failure')return Promise.resolve({ok:false,json:async()=>({success:false})});if(mode==='network-error')return Promise.reject(new Error('Offline test'));if(mode==='pending')return new Promise((resolve,reject)=>{resolveRequest=resolve;options.signal.addEventListener('abort',()=>{const e=new Error('Aborted');e.name='AbortError';reject(e);});});return Promise.resolve({ok:true,json:async()=>({success:true})});}};
 vm.createContext(context);vm.runInContext(source,context,{timeout:1000,filename:file});
 return{fields,nodes,requests,context,submit:()=>nodes.dform.listeners.submit({preventDefault(){},target:nodes.dform}),accept:()=>resolveRequest({ok:true,json:async()=>({success:'true'})}),timeout:()=>{for(const fn of [...timers.values()])fn();}};
}
test('report and fallback precede email acceptance',async()=>{const h=harness('pending'),work=h.submit();assert.equal(h.nodes.result.style.display,'block');assert.ok(h.context.window.__zionDiscoveryReport.includes('Discovery is free'));assert.match(h.nodes['email-fallback'].children[0].href,/^mailto:commercial@ziontechgroup.com\?/);assert.equal(h.nodes['submit-report'].disabled,true);h.accept();await work;assert.equal(h.nodes['submit-report'].disabled,false);});
test('pending and accepted identical submissions do not duplicate',async()=>{const h=harness('pending'),work=h.submit();await h.submit();assert.equal(h.requests.length,1);h.accept();await work;await h.submit();assert.equal(h.requests.length,1);assert.match(h.nodes.rsent.textContent,/No duplicate/);});
test('exact recipients: Commercial and validated client, never Carlos',async()=>{const h=harness();await h.submit();const p=h.requests[0].payload;assert.equal(h.requests[0].url,'https://formsubmit.co/ajax/commercial@ziontechgroup.com');assert.equal(p._cc,'qa@example.test');assert.equal(p._replyto,h.fields.email);assert.equal(p.message,h.context.window.__zionDiscoveryReport);assert.equal(Object.hasOwn(p,'_autoresponse'),false);assert.equal(JSON.stringify(p).includes('carlos@'),false);});
test('company markup remains literal text',async()=>{const payload='<img src=x onerror="throw new Error(1)">',h=harness('success',{company:payload});await h.submit();assert.ok(h.nodes.rsummary.textContent.includes(payload));assert.equal(h.nodes.rsummary.innerHTML,'');assert.equal(h.nodes.rsummary.children.length,0);});
test('URL secrets and private referrer paths are excluded',async()=>{const h=harness();await h.submit();const p=h.requests[0].payload;assert.equal(p.source_url,'https://ziontechgroup.com/discovery/');assert.equal(p.referrer,'https://ref.example');assert.equal(p.utm_source,'test');assert.equal(JSON.stringify(p).includes('DO_NOT_LEAK'),false);});
test('recipient lists are rejected',async()=>{const h=harness('success',{email:'qa@example.test,other@example.test'});await h.submit();assert.equal(h.requests.length,0);assert.equal(h.nodes['form-errors'].hidden,false);});
test('unknown process cannot inject recommendations',async()=>{const h=harness('success',{process:'<script>alert(1)</script>'});await h.submit();assert.equal(h.requests.length,0);assert.equal(h.nodes['form-errors'].hidden,false);});
test('acceptance never claims inbox delivery',async()=>{const h=harness();await h.submit();assert.match(h.nodes.rsent.textContent,/Inbox delivery is not yet confirmed/);});
test('provider failure preserves report and never retries',async()=>{const h=harness('failure');await h.submit();assert.equal(h.requests.length,1);assert.match(h.nodes.rsent.textContent,/not confirmed/);assert.ok(h.context.window.__zionDiscoveryReport);assert.equal(h.nodes['submit-report'].disabled,false);});
test('timeout warns of unknown acceptance and releases form',async()=>{const h=harness('pending'),work=h.submit();h.timeout();await work;assert.equal(h.requests.length,1);assert.match(h.nodes.rsent.textContent,/may already have been accepted/);assert.equal(h.nodes['submit-report'].disabled,false);assert.ok(h.nodes['email-fallback'].children.length);});
test('network error preserves report without retry',async()=>{const h=harness('network-error');await h.submit();assert.equal(h.requests.length,1);assert.match(h.nodes.rsent.textContent,/unavailable/);assert.ok(h.context.window.__zionDiscoveryReport);assert.equal(h.nodes.dform.attrs['aria-busy'],'false');});
test('honeypot aborts before outbound request',async()=>{const h=harness('success',{_honey:'bot'});await h.submit();assert.equal(h.requests.length,0);});
for(const lang of ['pt','es','fr','de'])test('localized delivery contract: '+lang,async()=>{const h=harness('success',{},lang);await h.submit();assert.equal(h.requests[0].payload._cc,'qa@example.test');assert.equal(h.requests[0].payload.language,lang);assert.equal(h.requests[0].payload.message,h.context.window.__zionDiscoveryReport);assert.ok(h.nodes['email-fallback'].children.length);assert.notEqual(h.nodes.rsent.textContent,harness().nodes.rsent.textContent);});


test('Commercial participant has no redundant automatic CC',async()=>{const h=harness('success',{email:'Commercial@ZionTechGroup.com'});await h.submit();assert.equal(h.requests.length,1);const p=h.requests[0].payload;assert.equal(p._cc,'');assert.equal(p._replyto,h.fields.email);const fallback=new URL(h.nodes['email-fallback'].children[0].href);assert.equal(fallback.searchParams.get('cc'),'');assert.equal(fallback.searchParams.get('body'),h.context.window.__zionDiscoveryReport);});
test('newline recipient injection is rejected before any request',async()=>{const h=harness('success',{email:'qa@example.test\r\nCc: other@example.test'});await h.submit();assert.equal(h.requests.length,0);assert.equal(h.nodes['form-errors'].hidden,false);});
test('manual fallback preserves exact report and participant CC',async()=>{const h=harness('failure');await h.submit();const fallback=new URL(h.nodes['email-fallback'].children[0].href);assert.equal(fallback.pathname,'commercial@ziontechgroup.com');assert.equal(fallback.searchParams.get('cc'),'qa@example.test');assert.equal(fallback.searchParams.get('body'),h.context.window.__zionDiscoveryReport);assert.equal(fallback.href.includes('carlos%40'),false);});

for(const mode of ['malformed-json','missing-success','false-success','numeric-success','http-error-success'])test('provider acknowledgement must be explicit: '+mode,async()=>{const h=harness(mode);await h.submit();assert.equal(h.requests.length,1);assert.equal(h.nodes.rsent.textContent,'Email acceptance was not confirmed. Copy or download your report or use the manual email fallback. No automatic retry was made.');assert.ok(h.context.window.__zionDiscoveryReport);assert.equal(h.nodes.result.style.display,'block');assert.equal(h.nodes['submit-report'].disabled,false);assert.equal(h.nodes.dform.attrs['aria-busy'],'false');const fallback=new URL(h.nodes['email-fallback'].children[0].href);assert.equal(fallback.searchParams.get('body'),h.context.window.__zionDiscoveryReport);});

// Recommendation classifications must use the report locale in the UI and email report.
const expectedKinds={
 en:['Interactive calculator','Documentation / concept','Service page'],
 pt:['Calculadora interativa','Documentação / conceito','Página de serviço'],
 es:['Calculadora interactiva','Documentación / concepto','Página de servicio'],
 fr:['Calculateur interactif','Documentation / concept','Page de service'],
 de:['Interaktiver Rechner','Dokumentation / Konzept','Dienstleistungsseite']
};
for(const [lang,kinds] of Object.entries(expectedKinds))test('recommendation classification is localized: '+lang,async()=>{
 for(const [process,indexes] of [['Reporting & analytics',[0,2]],['Other',[1]]]){
  const h=harness('success',{process},lang);await h.submit();
  const rendered=h.nodes.rapps.children.map(item=>item.children[1].textContent).join(' ');
  for(const i of indexes){assert.ok(rendered.includes(kinds[i]),lang+' UI: '+kinds[i]);assert.ok(h.context.window.__zionDiscoveryReport.includes(kinds[i]),lang+' report: '+kinds[i]);}
  assert.equal(h.requests[0].payload.message,h.context.window.__zionDiscoveryReport);
 }
});
for(const [lang,expected] of [['pt-BR',expectedKinds.pt],['zz',expectedKinds.en]])test('recommendation locale fallback: '+lang,async()=>{
 const h=harness('success',{process:'Reporting & analytics'},lang);await h.submit();
 assert.ok(h.context.window.__zionDiscoveryReport.includes(expected[0]));assert.ok(h.context.window.__zionDiscoveryReport.includes(expected[2]));
});

