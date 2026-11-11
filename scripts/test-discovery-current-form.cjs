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
function storage(initial) {
  const data = initial || new Map();
  const api = {data, fail:null, silent:false,
    getItem(k){if(api.fail === 'get')throw new Error('blocked read'); return data.has(k)?data.get(k):null;},
    setItem(k,v){if(api.fail === 'set')throw new Error('quota');if(!api.silent)data.set(k,String(v));},
    removeItem(k){if(api.fail === 'remove')throw new Error('blocked remove');if(!api.silent)data.delete(k);}
  };
  return api;
}
function world() {
  const local = storage(), held = new Set();
  return {local,held,locks:{async request(key,options,fn){
    assert.equal(options.ifAvailable,true);
    if(held.has(key))return fn(null);
    held.add(key);
    try{return await fn({name:key});}finally{held.delete(key);}
  }}};
}
function fixture(mode = 'accepted', config = {}) {
  const shared=config.world || world(), session=config.session || storage();
  const created=[];

  const nodes = new Map(), calls = [], timers = new Map();
  const answers = {name:'Synthetic Visitor',email:'client@example.test',industry:'finance',challenge:'costs',size:'1-10',speed:'days',aiuse:'none',outcome:'save-time',deploy:'saas'};
  let valid = true, handler, release, serial = 0;
  const button = {disabled:false};
  function element(id){return {id,hidden:true,innerHTML:'',textContent:'',attrs:{},style:{},children:[],handlers:{},
      append(...children){this.children.push(...children);},
      insertAdjacentElement(position,node){this.adjacent=node;},
      scrollIntoView(){}, addEventListener(type, fn){if(id==='dq' && type==='submit')handler=fn;this.handlers[type]=fn;},
      reportValidity(){return valid;}, querySelector(){return button;},
      setAttribute(k,v){this.attrs[k]=v;}};}
  function get(id){if(!nodes.has(id))nodes.set(id,element(id));return nodes.get(id);}
  const context = {
    document:{getElementById:get,createElement(tag){const el=element(tag);created.push(el);return el;}},
    localStorage:shared.local, sessionStorage:session,
    navigator:config.noLocks?{}:{locks:shared.locks},
    crypto:{subtle:config.noCrypto?null:{digest:async(algorithm,bytes)=>{assert.equal(algorithm,'SHA-256');return Uint8Array.from(require('node:crypto').createHash('sha256').update(bytes).digest()).buffer;}}},TextEncoder,
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
  return {answers,calls,get,button,shared,session,created,recovery:()=>get('dq').adjacent,submit:()=>handler({preventDefault(){}}),
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
    const f=fixture('pending'), p=f.submit();await flush();await f.submit();
    assert.equal(f.calls.length,1);assert.equal(f.button.disabled,true);
    f.answers.industry='healthcare';await f.submit();assert.equal(f.calls.length,1);
    f.release();await p;assert.equal(f.button.disabled,false);
    const second=f.submit();await flush();assert.equal(f.calls.length,2); // changed answers allowed
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

  // Separate runtimes share origin-local receipts/locks, but have per-tab recovery.
  for(const mode of ['accepted','network','invalid-json','http-error']) {
    const shared=world(),a=fixture(mode,{world:shared});await a.submit();
    const b=fixture('accepted',{world:shared});await b.submit();
    assert.equal(a.calls.length+b.calls.length,1,mode+' cross-tab duplicate');
    assert.match(b.get('dq-mail-status').textContent,/bloqueado neste navegador/);
    const reload=fixture('accepted',{world:shared,session:a.session});
    assert.match(reload.recovery().children[2].textContent,/Synthetic Visitor/);
    assert.equal(reload.calls.length,0,'reload does not submit');
    await reload.submit();assert.equal(reload.calls.length,0,'reload blocks duplicate');
    assert.equal(shared.held.size,0);
    const ledger=JSON.stringify([...shared.local.data]);
    assert.doesNotMatch(ledger,/Synthetic Visitor|client@example|finance|costs/,'no raw answers in cross-tab ledger');
    assert([...shared.local.data.keys()].every(k=>/^zion\.discovery\.receipt\.v1\.[a-f0-9]{64}$/.test(k)));
    scenarios++;
  }
  {
    const shared=world(),a=fixture('pending',{world:shared}),b=fixture('accepted',{world:shared});
    const pending=a.submit();await flush();await b.submit();
    assert.equal(a.calls.length,1);assert.equal(b.calls.length,0);
    assert.match(b.get('dq-mail-status').textContent,/Outra aba/);
    assert.equal(JSON.parse([...shared.local.data.values()][0]).state,'uncertain','receipt persisted before response');
    assert.match(a.recovery().children[2].textContent,/Recommended apps/);
    a.release();await pending;await b.submit();assert.equal(b.calls.length,0);
    scenarios++;
  }
  {
    const shared=world(),a=fixture('pending',{world:shared});const pending=a.submit();await flush();
    const receipt=[...shared.local.data];
    // Model closed tab: lock is released by the browser, durable receipt survives.
    shared.held.clear();
    const b=fixture('accepted',{world:shared,session:a.session});await b.submit();
    assert.equal(b.calls.length,0);assert.deepEqual([...shared.local.data],receipt);
    a.expire();await pending;scenarios++;
  }
  {
    const shared=world(),a=fixture('pending',{world:shared}),b=fixture('pending',{world:shared});
    b.answers.challenge='support';
    const pa=a.submit(),pb=b.submit();await flush();
    assert.equal(a.calls.length+b.calls.length,2,'different reports do not block one another');
    a.release();b.release();await Promise.all([pa,pb]);scenarios++;
  }
  {
    const shared=world(),a=fixture('rejected',{world:shared});await a.submit();
    assert.equal(shared.local.data.size,0);
    const b=fixture('accepted',{world:shared});await b.submit();assert.equal(b.calls.length,1);
    scenarios++;
  }
  for(const config of [{noLocks:true},{noCrypto:true}]) {
    const f=fixture('accepted',config);await f.submit();assert.equal(f.calls.length,0);
    assert.match(f.recovery().children[2].textContent,/Synthetic Visitor/);
    assert.match(f.get('dq-mail-status').textContent,/foi bloqueado/);scenarios++;
  }
  for(const target of ['local','session'])for(const fail of ['get','set']) {
    const shared=world(),session=storage();(target==='local'?shared.local:session).fail=fail;
    const f=fixture('accepted',{world:shared,session});await f.submit();
    assert.equal(f.calls.length,0);assert.equal(f.button.disabled,false);
    assert.match(f.recovery().children[2].textContent,/Synthetic Visitor/);
    scenarios++;
  }
  for(const target of ['local','session']) {
    const shared=world(),session=storage();(target==='local'?shared.local:session).silent=true;
    const f=fixture('accepted',{world:shared,session});await f.submit();assert.equal(f.calls.length,0);scenarios++;
  }
  for(const bad of ['{','null','{"version":2,"state":"accepted"}','{"version":1,"state":"expired"}']) {
    const shared=world(),a=fixture('network',{world:shared});await a.submit();
    const key=[...shared.local.data.keys()][0];shared.local.data.set(key,bad);
    const b=fixture('accepted',{world:shared});await b.submit();assert.equal(b.calls.length,0);
    assert.equal(shared.local.data.get(key),bad,'malformed receipt preserved');scenarios++;
  }
  for(const bad of ['{','null','{"version":1,"reports":[3]}']) {
    const session=storage(new Map([['zion.discovery.reports.v1',bad]])),f=fixture('accepted',{session});
    await f.submit();assert.equal(f.calls.length,0);
    assert.equal(session.data.get('zion.discovery.reports.v1'),bad,'malformed recovery data preserved');scenarios++;
  }
  {
    const f=fixture('network');await f.submit();const first=f.calls[0].data.results;
    f.answers.challenge='support';await f.submit();
    const reports=JSON.parse(f.session.getItem('zion.discovery.reports.v1')).reports;
    assert.equal(reports.length,2);assert.equal(reports[0],first,'uncertain earlier report not evicted');
    const reload=fixture('accepted',{world:f.shared,session:f.session});
    assert.equal(reload.calls.length,0);assert.match(reload.recovery().children[2].textContent,/Challenge: costs/);
    assert.match(reload.recovery().children[2].textContent,/Challenge: support/);scenarios++;
  }
  {
    const session=storage(new Map([['zion.discovery.reports.v1',JSON.stringify({version:1,reports:Array.from({length:20},(_,i)=>'Prior uncertain report '+i)})]]));
    const before=session.getItem('zion.discovery.reports.v1'),f=fixture('accepted',{session});
    await f.submit();assert.equal(f.calls.length,0);assert.equal(session.getItem('zion.discovery.reports.v1'),before);
    assert.match(f.recovery().children[2].textContent,/Synthetic Visitor/);scenarios++;
  }
  {
    const f=fixture('network');await f.submit();const prior=[...f.shared.local.data];
    f.recovery().children[3].handlers.click();
    assert.equal(f.session.getItem('zion.discovery.reports.v1'),null);
    assert.deepEqual([...f.shared.local.data],prior,'clear recovery does not clear dedupe');
    await f.submit();assert.equal(f.calls.length,1);scenarios++;
  }
  {
    const f=fixture('network');await f.submit();const text=f.recovery().children[2].textContent;
    f.session.fail='remove';f.recovery().children[3].handlers.click();
    assert.equal(f.recovery().children[2].textContent,text);assert.equal(f.recovery().hidden,false);scenarios++;
  }
  {
    const shared=world(),a=fixture('pending',{world:shared});const p=a.submit();await flush();
    shared.local.fail='set';a.release();await p;
    assert.match(a.get('dq-mail-status').textContent,/aceita pelo serviço/);
    assert.equal(JSON.parse([...shared.local.data.values()][0]).state,'uncertain');
    shared.local.fail=null;const b=fixture('accepted',{world:shared});await b.submit();assert.equal(b.calls.length,0);scenarios++;
  }
  {
    const shared=world();shared.local.fail='remove';const a=fixture('rejected',{world:shared});await a.submit();
    shared.local.fail=null;const b=fixture('accepted',{world:shared});await b.submit();assert.equal(b.calls.length,0);scenarios++;
  }


  {
    const f=fixture('network');await f.submit();const text=f.recovery().children[2].textContent;
    f.session.silent=true;f.recovery().children[3].handlers.click();
    assert.equal(f.recovery().children[2].textContent,text,'silent deletion failure retains recovery display');
    assert.equal(f.recovery().hidden,false);scenarios++;
  }
  {
    const shared=world();shared.locks.request=async()=>{throw new Error('lock denied');};
    const f=fixture('accepted',{world:shared});await f.submit();assert.equal(f.calls.length,0);
    assert.match(f.recovery().children[2].textContent,/Synthetic Visitor/);scenarios++;
  }
  {
    const f=fixture('network');f.answers.name='<img src=x onerror=alert(1)>';await f.submit();
    const reload=fixture('accepted',{session:f.session,world:f.shared});
    assert.match(reload.recovery().children[2].textContent,/<img/);
    assert.equal(reload.recovery().children[2].innerHTML,'','recovered data never parsed as HTML');scenarios++;
  }


  // Regression: a second unsaved report must not replace the first one on screen.
  for(const fail of ['get','set']) {
    const session=storage(),f=fixture('network',{session});
    await f.submit();const persisted=session.getItem('zion.discovery.reports.v1');
    const oldReport=f.calls[0].data.results;
    session.fail=fail;
    f.answers.challenge='support';await f.submit();
    const firstUnsaved=f.recovery().children[2].textContent;
    assert.match(firstUnsaved,/Challenge: support/);
    f.answers.industry='healthcare';await f.submit();
    const recovered=f.recovery().children[2].textContent;
    assert.ok(recovered.includes(firstUnsaved),fail+': prior visible reports retained');
    assert.ok(recovered.includes(oldReport),fail+': prior persisted report retained in memory');
    assert.match(recovered,/Industry: healthcare/);
    assert.match(f.recovery().children[1].textContent,/antes de recarregar/);
    assert.equal(session.data.get('zion.discovery.reports.v1'),persisted,fail+': persisted bytes untouched');
    assert.equal(f.calls.length,1,'storage failure cannot send');
    session.fail=null;await f.submit();
    const saved=JSON.parse(session.getItem('zion.discovery.reports.v1'));
    assert.equal(saved.reports.length,3,'save recovered archive after storage becomes usable');
    const reload=fixture('accepted',{session,world:f.shared});
    assert.ok(reload.recovery().children[2].textContent.includes(firstUnsaved));
    assert.equal(reload.calls.length,0);scenarios++;
  }
  {
    const existing=Array.from({length:20},(_,i)=>'Persisted uncertain report '+i);
    const session=storage(new Map([['zion.discovery.reports.v1',JSON.stringify({version:1,reports:existing})]]));
    const persisted=session.getItem('zion.discovery.reports.v1'),f=fixture('accepted',{session});
    await f.submit();const firstUnsaved=f.recovery().children[2].textContent;
    assert.match(firstUnsaved,/Challenge: costs/);
    f.answers.challenge='support';await f.submit();
    const visible=f.recovery().children[2].textContent;
    assert.ok(visible.includes(firstUnsaved),'capacity: first unsaved report retained');
    assert.match(visible,/Challenge: support/);
    for(const text of existing)assert.ok(visible.includes(text));
    assert.equal(session.getItem('zion.discovery.reports.v1'),persisted,'capacity preserves stored bytes');
    assert.equal(f.calls.length,0);assert.equal(f.button.disabled,false);
    assert.match(f.recovery().children[1].textContent,/antes de recarregar/);
    scenarios++;
  }


  {
    const f=fixture('accepted');f.session.fail='set';
    await f.submit();f.answers.challenge='support';await f.submit();
    f.session.fail=null;f.recovery().children[3].handlers.click();
    f.answers.challenge='data';await f.submit();
    const saved=JSON.parse(f.session.getItem('zion.discovery.reports.v1')).reports;
    assert.equal(saved.length,1,'explicit clear also clears unsaved memory copies');
    assert.match(saved[0],/Challenge: data/);
    scenarios++;
  }


  // Failed deletion must not hide the warning that unsaved RAM is lost on reload.
  for(const mode of ['remove','get','silent']) {
    const f=fixture('accepted');f.session.fail='set';
    await f.submit();f.answers.challenge='support';await f.submit();
    const report=f.recovery().children[2].textContent;
    assert.match(f.recovery().children[1].textContent,/antes de recarregar ou fechar/);
    f.session.fail=mode==='silent'?null:mode;
    f.session.silent=mode==='silent';
    // Make silent deletion observably fail rather than removing an absent entry.
    if(mode==='silent')f.session.data.set('zion.discovery.reports.v1',JSON.stringify({version:1,reports:['Stored report']}));
    f.recovery().children[3].handlers.click();
    assert.match(f.recovery().children[1].textContent,/Parte dos relatórios pode não estar salva/);
    assert.match(f.recovery().children[1].textContent,/Não foi possível confirmar a exclusão/);
    assert.match(f.recovery().children[1].textContent,/Copie o texto antes de recarregar ou fechar a aba/);
    assert.equal(f.recovery().children[2].textContent,report);
    assert.equal(f.recovery().hidden,false);
    assert.equal(f.calls.length,0);
    scenarios++;
  }

  console.log('Current Discovery: '+scenarios+' synthetic runtime scenarios passed; all fetches mocked.');
}
let completed=false;
process.on('beforeExit',()=>{if(!completed){console.error('Test suite did not complete');process.exitCode=1;}});
run().then(()=>{completed=true;}).catch(e=>{completed=true;console.error(e);process.exitCode=1;});
