'use strict';
// Runs the real inline questionnaire script with synthetic data and no network.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(process.argv[2] || path.join(__dirname, '../public/discovery/index.html'), 'utf8');
const source = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(s => s.includes("var MAP="));
assert.ok(source, 'Questionnaire script exists');
let scenarios = 0;
function fixture(mode = 'accepted') {
  const nodes = new Map(), calls = [], timers = new Map();
  const answers = {name:'Synthetic Visitor',email:'client@example.test',industry:'finance',challenge:'costs',size:'1-10',speed:'days',aiuse:'none',outcome:'save-time',deploy:'saas'};
  let valid = true, handler, release, serial = 0;
  const button = {disabled:false};
  function get(id) {
    if (!nodes.has(id)) nodes.set(id, {hidden:true,innerHTML:'',textContent:'',attrs:{},
      scrollIntoView(){}, addEventListener(type, fn){handler=fn;},
      reportValidity(){return valid;}, querySelector(){return button;},
      setAttribute(k,v){this.attrs[k]=v;}});
    return nodes.get(id);
  }
  const context = {
    document:{getElementById:get},
    FormData:class{entries(){return Object.entries(answers);}},
    AbortController, console,
    setTimeout(fn){timers.set(++serial,fn);return serial;},
    clearTimeout(id){timers.delete(id);},
    fetch:async(url,options)=>{
      calls.push({url,options,data:JSON.parse(options.body)});
      const response = {ok:mode!=='http-error',json:async()=>{
        if(mode==='invalid-json')throw new SyntaxError('Synthetic invalid JSON');
        if(mode==='json-pending')return new Promise(r=>{release=r;});
        return mode==='missing' ? {} : mode==='null' ? null : {success:mode==='rejected'?false:mode==='string-false'?'false':mode==='string-true'?'true':true};
      }};
      if(mode==='network')throw new Error('Synthetic offline');
      if(mode==='pending')return new Promise(r=>{release=()=>r(response);});
      return response;
    }
  };
  vm.runInNewContext(source,context);
  return {answers,calls,get,button,submit:()=>handler({preventDefault(){}}),
    setValid(v){valid=v;},expire(){for(const fn of [...timers.values()])fn();},
    release(v){release(v);},timers};
}
const flush=()=>new Promise(r=>setImmediate(r));
async function run() {
  for(const mode of ['accepted','string-true','rejected','string-false','http-error','invalid-json','missing','null','network']) {
    const f=fixture(mode); await f.submit();
    assert.equal(f.calls.length,1);
    assert.equal(f.calls[0].url,'https://formsubmit.co/ajax/commercial@ziontechgroup.com');
    assert.equal(f.calls[0].data._cc,'client@example.test');
    assert.equal(f.calls[0].data._replyto,'client@example.test');
    assert.match(f.calls[0].data.results,/Industry: finance\nChallenge: costs/);
    assert.match(f.calls[0].data.results,/FinOps Consulting: https:\/\/ziontechgroup.com\/finops-consulting\//);
    assert.equal(f.get('dq-results').hidden,false);
    assert.match(f.get('dq-results').innerHTML,/FinOps Consulting/);
    assert.equal(f.button.disabled,false);
    assert.equal(f.get('dq').attrs['aria-busy'],'false');
    assert.equal(f.timers.size,0);
    const status=f.get('dq-mail-status').textContent;
    if(['accepted','string-true'].includes(mode)){
      assert.match(status,/aceita pelo serviço/);
      assert.match(status,/ainda não foi confirmada/);
    } else {
      assert.doesNotMatch(status,/Solicitação aceita/);
      assert.match(f.get('dq-fallback').innerHTML,/mailto:client%40example.test\?cc=commercial@ziontechgroup.com/);
    }
    await f.submit();
    assert.equal(f.calls.length,['rejected','string-false'].includes(mode)?2:1,mode+' retry policy');
    scenarios++;
  }
  {
    const f=fixture('pending'), p=f.submit();await f.submit();
    assert.equal(f.calls.length,1);assert.equal(f.button.disabled,true);
    f.answers.industry='healthcare';await f.submit();assert.equal(f.calls.length,1);
    f.release();await p;assert.equal(f.button.disabled,false);
    const second=f.submit();assert.equal(f.calls.length,2); // changed answers allowed
    f.release(); await second;
    scenarios++;
  }
  for(const mode of ['pending','json-pending']) {
    const f=fixture(mode),p=f.submit();await flush();f.expire();await p;
    assert.equal(f.calls[0].options.signal.aborted,true);
    assert.equal(f.button.disabled,false);
    assert.match(f.get('dq-mail-status').textContent,/nenhum reenvio automático/);
    const status=f.get('dq-mail-status').textContent;
    f.release({success:true});await flush();
    assert.equal(f.get('dq-mail-status').textContent,status,'late response cannot change timeout state');
    await f.submit();assert.equal(f.calls.length,1);
    scenarios++;
  }
  {
    const f=fixture();await f.submit();f.answers.challenge='support';await f.submit();
    assert.equal(f.calls.length,2);f.answers.challenge='costs';await f.submit();
    assert.equal(f.calls.length,2,'earlier accepted payload remains suppressed');scenarios++;
  }
  for(const email of ['a@example.test,b@example.test','a@example.test;b@example.test','a@example.test\r\nBcc: b@example.test','bad']) {
    const f=fixture();f.answers.email=email;await f.submit();assert.equal(f.calls.length,0);scenarios++;
  }
  {
    const f=fixture();f.answers.email='COMMERCIAL@ziontechgroup.com';await f.submit();
    assert.equal(f.calls[0].data._cc,'');scenarios++;
  }
  {
    const f=fixture();f.setValid(false);await f.submit();assert.equal(f.calls.length,0);scenarios++;
  }
  {
    const f=fixture('rejected');f.answers.name='<img src=x onerror=alert(1)>';await f.submit();
    assert.doesNotMatch(f.get('dq-results').innerHTML,/<img/);
    assert.doesNotMatch(f.get('dq-fallback').innerHTML,/<img/);scenarios++;
  }
  console.log('Current Discovery: '+scenarios+' synthetic runtime scenarios passed; all fetches mocked.');
}
let completed=false;
process.on('beforeExit',()=>{if(!completed){console.error('Test suite did not complete');process.exitCode=1;}});
run().then(()=>{completed=true;}).catch(e=>{completed=true;console.error(e);process.exitCode=1;});
