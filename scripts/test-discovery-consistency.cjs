// Offline assembled-artifact tests; all network and clipboard calls are mocked.
'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const out=path.resolve(process.argv[2]||'out');
function fixture(locale,mode='success',email='qa@example.test'){
 const html=fs.readFileSync(path.join(out,locale==='en'?'discovery/index.html':locale+'/discovery/index.html'),'utf8');
 const script=html.match(/<script data-discovery-parity="2026-10-08">([\s\S]*?)<\/script>/)[1];
 const nodes={};
 class E{constructor(){this.style={};this.children=[];this.listeners={};this.attrs={};this.textContent='';}append(...xs){this.children.push(...xs);}prepend(x){this.children.unshift(x);}replaceChildren(...xs){this.children=xs;}addEventListener(k,f){this.listeners[k]=f;}setAttribute(k,v){this.attrs[k]=v;}scrollIntoView(){}click(){}}
 for(const id of ['dform','result','sent','score','summary','form-errors','download-report','email-report'])nodes[id]=new E();
 const form=nodes.dform;let process=1,hours=0,timeline=0;
 form.reportValidity=()=>true;const submit=new E();form.querySelector=()=>submit;
 form.elements={namedItem:n=>({selectedIndex:{process,hours,timeline}[n]})};
 const fields={name:'QA only',email,company:'<img src=x onerror=evil()>',process:'translated process',hours:'translated hours',systems:'Email',goal:'Measure baseline',timeline:'translated immediate'};
 const requests=[];let resolve;
 const context={window:{},document:{getElementById:id=>nodes[id]||null,createElement:()=>new E()},navigator:{clipboard:{writeText:async()=>{}}},URL,Blob,AbortController,FormData:class{entries(){return Object.entries(fields);}},setTimeout:()=>1,clearTimeout:()=>{},fetch:(url,options)=>{requests.push({url,payload:JSON.parse(options.body)});return mode==='pending'?new Promise(r=>{resolve=r;}):mode==='network-error'?Promise.reject(new Error('mock')):Promise.resolve({ok:mode==='success',json:async()=>({success:mode==='success'})});}};
 vm.createContext(context);vm.runInContext(script,context);
 return {context,nodes,requests,submit,run:()=>form.listeners.submit({preventDefault(){},target:form}),set:(p,h,t)=>{process=p;hours=h;timeline=t;},resolve:()=>resolve({ok:true,json:async()=>({success:true})})};
}
(async()=>{
 let checks=0;
 for(const locale of ['en','pt','es','fr','de']){
  const x=fixture(locale);assert.equal(x.context.window.ZionDiscoveryShared.score(15,0,true,true),55);assert.equal(x.context.window.ZionDiscoveryShared.score(50,1,true,true),57);checks+=2;
  const home=fs.readFileSync(path.join(out,locale==='pt'?'index.html':locale+'/index.html'),'utf8');assert(home.includes('id="discovery-pilot-journey"'));checks++;
  if(locale==='en')continue;
  await x.run();assert.equal(x.nodes.score.textContent,55);assert.equal(x.requests.length,1);assert.equal(x.requests[0].payload.score,55);assert.equal(x.requests[0].payload._cc,'qa@example.test,carlos@ziontechgroup.com');assert(x.requests[0].payload.message.includes('<img src=x onerror=evil()>'));assert(x.context.window.__zionDiscoveryReport.includes('https://ziontechgroup.com/ai-ticket-triage/'));await x.run();assert.equal(x.requests.length,1);checks+=7;
  for(let p=1;p<=10;p++){const a=fixture(locale);a.set(p,1,2);await a.run();assert.equal(a.requests.length,1);assert.equal(a.requests[0].payload.score,47);assert(a.context.window.__zionDiscoveryReport.includes('https://ziontechgroup.com'));checks+=3;}
  for(const mode of ['failure','network-error']){const a=fixture(locale,mode);await a.run();assert(a.context.window.__zionDiscoveryReport);assert.equal(a.submit.disabled,false);assert.equal(a.requests.length,1);checks+=3;}
  const a=fixture(locale,'pending');const pending=a.run();assert(a.context.window.__zionDiscoveryReport);assert.equal(a.submit.disabled,true);await a.run();assert.equal(a.requests.length,1);a.resolve();await pending;checks+=3;
  for(const email of ['a@example.test,b@example.test','a@example.test\r\nBcc:evil@example.test','bad']){const a=fixture(locale,'success',email);await a.run();assert.equal(a.requests.length,0);checks++;}
  const bad=fixture(locale);bad.set(0,0,0);await bad.run();assert.equal(bad.requests.length,0);checks++;
 }
 console.log(checks+' assertions passed: five-locale scoring, ten process paths, recipient copies, local report before provider, duplicates, errors and invalid recipients. No real email.');
})().catch(e=>{console.error(e);process.exitCode=1;});
