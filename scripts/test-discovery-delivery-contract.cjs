'use strict';
// Offline contract tests: no real email, browser, secrets or third-party dependency.
// Run from repository root: node --test scripts/test-discovery-delivery-contract.cjs
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const file = process.env.DISCOVERY_HTML || path.resolve(__dirname, '../public/discovery/index.html');
const html = fs.readFileSync(file, 'utf8');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
const source = scripts.find(s => s.includes('const APPMAP='));
assert.ok(source, 'Expected the current inline Discovery application; update this test if extracted into a module.');

function harness(mode = 'success', overrides = {}) {
  const fields = {name:'QA Only',email:'qa@example.test',company:'Test Company',industry:'Technology / SaaS',process:'IT operations / incident response',hours:'20\u201380',systems:'Test system',goal:'Bounded test',timeline:'This quarter',...overrides};
  class Element {
    constructor(tag='div') { this.tag=tag; this.children=[]; this.style={}; this.attrs={}; this.listeners={}; this.textContent=''; this.innerHTML=''; this.disabled=false; this.hidden=false; }
    addEventListener(name, handler) { this.listeners[name]=handler; }
    replaceChildren(...children) { this.children=children; }
    appendChild(child) { this.children.push(child); return child; }
    setAttribute(name,value) { this.attrs[name]=value; }
    reportValidity() { return true; }
    scrollIntoView() {}
    click() { this.clicked=true; }
  }
  const ids = ['dform','form-errors','rscore','rbar','rsummary','rapps','rnext','report-text','email-fallback','result','copy-report','rsent','submit-report','download-report'];
  const nodes = Object.fromEntries(ids.map(id => [id,new Element()]));
  nodes['submit-report'].textContent='Get my free Discovery report';
  const requests=[];
  let resolveRequest, rejectRequest;
  const timers=new Map(); let timerId=0;
  const context = {
    document:{getElementById:id => { assert.ok(nodes[id], `Unknown element ${id}`); return nodes[id]; },createElement:tag=>new Element(tag),referrer:'https://ref.example/private/client?token=DO_NOT_LEAK#private'},
    window:{},location:{href:'https://ziontechgroup.com/discovery/?utm_source=test&token=DO_NOT_LEAK#private',search:'?utm_source=test&token=DO_NOT_LEAK'},
    navigator:{clipboard:{writeText:async()=>{}}},URL,URLSearchParams,Blob,AbortController,
    FormData:class { entries(){ return Object.entries(fields); } },
    setTimeout:fn=>{timers.set(++timerId,fn);return timerId;},clearTimeout:id=>timers.delete(id),
    fetch:(url,options)=>{
      requests.push({url,options,payload:JSON.parse(options.body)});
      if(mode==='failure')return Promise.resolve({ok:false,json:async()=>({success:false})});
      if(mode==='network-error')return Promise.reject(new Error('Offline test'));
      if(mode==='pending')return new Promise((resolve,reject)=>{
        resolveRequest=resolve;rejectRequest=reject;
        options.signal.addEventListener('abort',()=>{const e=new Error('Aborted');e.name='AbortError';reject(e);});
      });
      return Promise.resolve({ok:true,json:async()=>({success:true})});
    }
  };
  vm.createContext(context);
  vm.runInContext(source,context,{timeout:1000,filename:file});
  return {fields,nodes,requests,context,
    submit:()=>nodes.dform.listeners.submit({preventDefault(){},target:nodes.dform}),
    accept:()=>resolveRequest({ok:true,json:async()=>({success:'true'})}),
    reject:()=>rejectRequest(new Error('Offline test')),
    timeout:()=>{for(const fn of [...timers.values()])fn();}
  };
}

test('report and fallback exist before the email request completes', async()=>{
  const h=harness('pending');const work=h.submit();
  assert.equal(h.nodes.result.style.display,'block');
  assert.ok(h.context.window.__zionDiscoveryReport.includes('Discovery is free'));
  assert.match(h.nodes['email-fallback'].children[0].href,/^mailto:commercial@ziontechgroup.com\?/);
  assert.equal(h.nodes['submit-report'].disabled,true);
  h.accept();await work;
  assert.equal(h.nodes['submit-report'].disabled,false);
});

test('one pending submission and one accepted identical submission only',async()=>{
  const h=harness('pending');const work=h.submit();await h.submit();
  assert.equal(h.requests.length,1);h.accept();await work;await h.submit();
  assert.equal(h.requests.length,1);assert.match(h.nodes.rsent.textContent,/No duplicate/);
});

test('provider copy goes to client and Carlos; autoresponse is not relied upon',async()=>{
  const h=harness();await h.submit();const p=h.requests[0].payload;
  assert.equal(h.requests[0].url,'https://formsubmit.co/ajax/commercial@ziontechgroup.com');
  assert.deepEqual(p._cc.split(','),['qa@example.test','carlos@ziontechgroup.com']);
  assert.equal(p._replyto,h.fields.email);assert.equal(p.message,h.context.window.__zionDiscoveryReport);
  assert.equal(Object.hasOwn(p,'_autoresponse'),false);
});

test('company markup is literal text, never HTML',async()=>{
  const payload='<img src=x onerror="throw new Error(1)">';
  const h=harness('success',{company:payload});await h.submit();
  assert.ok(h.nodes.rsummary.textContent.includes(payload));
  assert.equal(h.nodes.rsummary.innerHTML,'');
  assert.equal(h.nodes.rsummary.children.length,0);
});

test('private URL parameters and referrer paths never enter the payload',async()=>{
  const h=harness();await h.submit();const p=h.requests[0].payload;
  assert.equal(p.source_url,'https://ziontechgroup.com/discovery/');
  assert.equal(p.referrer,'https://ref.example');assert.equal(p.utm_source,'test');
  assert.equal(JSON.stringify(p).includes('DO_NOT_LEAK'),false);
});

test('invalid email recipient list is rejected before a network request',async()=>{
  const h=harness('success',{email:'qa@example.test,other@example.test'});await h.submit();
  assert.equal(h.requests.length,0);assert.equal(h.nodes['form-errors'].hidden,false);
});

test('invalid process is rejected and cannot alter recommendations',async()=>{
  const h=harness('success',{process:'<script>alert(1)</script>'});await h.submit();
  assert.equal(h.requests.length,0);assert.equal(h.nodes['form-errors'].hidden,false);
});

test('accepted provider response does not claim inbox delivery',async()=>{
  const h=harness();await h.submit();
  assert.match(h.nodes.rsent.textContent,/Inbox delivery is not yet confirmed/);
});

test('failed provider response preserves report and does not retry',async()=>{
  const h=harness('failure');await h.submit();
  assert.equal(h.requests.length,1);assert.match(h.nodes.rsent.textContent,/not confirmed/);
  assert.ok(h.context.window.__zionDiscoveryReport);assert.equal(h.nodes['submit-report'].disabled,false);
});

test('timeout retains result, warns of unknown acceptance and releases the form',async()=>{
  const h=harness('pending');const work=h.submit();h.timeout();await work;
  assert.equal(h.requests.length,1);assert.match(h.nodes.rsent.textContent,/may already have been accepted/);
  assert.equal(h.nodes['submit-report'].disabled,false);assert.ok(h.nodes['email-fallback'].children.length);
});

test('network error preserves local result and performs no automatic retry',async()=>{
  const h=harness('network-error');await h.submit();
  assert.equal(h.requests.length,1);assert.match(h.nodes.rsent.textContent,/unavailable/);
  assert.ok(h.context.window.__zionDiscoveryReport);assert.equal(h.nodes.dform.attrs['aria-busy'],'false');
});
