'use strict';
// Runs the real inline questionnaire script with synthetic data and no network.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(process.argv[2] || path.join(__dirname, '../public/discovery/index.html'), 'utf8');
assert.equal((html.match(/<form\b[^>]*\bid=["']dq["']/gi) || []).length, 1,
  'Exactly one current questionnaire is required');
assert.match(html, /<form\b[^>]*\bid="dq"[^>]*\bmethod="post"/i,
  'Native fallback must never place participant data in a GET URL');
assert.match(html, /<button\b[^>]*\btype="submit"[^>]*\bdisabled/i,
  'Sending starts disabled until the reviewed handler is installed');
assert.match(html, /<noscript>[\s\S]*?commercial@ziontechgroup\.com[\s\S]*?<\/noscript>/i,
  'No-JavaScript users get an explicit manual contact path');
assert.equal((html.match(/\bid=["']dq-results["']/gi) || []).length, 1,
  'Exactly one results region is required');
const schemas = [...html.matchAll(/<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  .map(match => JSON.parse(match[1]));
const discovery = schemas.find(schema => schema['@type'] === 'Service' &&
  schema.url === 'https://ziontechgroup.com/discovery/');
assert.ok(discovery, 'The Discovery service must have structured data');
assert.equal(String(discovery.offers?.price), '0', 'Discovery must remain free');
assert.equal(discovery.offers?.url, 'https://ziontechgroup.com/discovery/',
  'The free offer must lead to the online questionnaire');
assert.match(html, /<a\b[^>]*\bhref=["']#dq["'][^>]*>/i,
  'The page must link directly to its free online questionnaire');
for (const checkout of [
  'https://buy.stripe.com/9B69AU8NW5dt71t8BG4ZG09',
  'https://buy.stripe.com/8x214o8NW35l5Xp3hm4ZG0b',
]) {
  assert.ok(!html.includes(checkout), 'Legacy paid Discovery checkouts must not return');
}
function questionnaireSource(markup) {
  return [...markup.matchAll(/<script>([\s\S]*?)<\/script>/gi)].map(m => m[1]).find(s => s.includes("var MAP="));
}
const source = questionnaireSource(html);
assert.ok(source, 'Questionnaire script exists');
let scenarios = 0;
function fixture(mode = 'accepted', script = source) {
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
      const response = {ok:mode!=='http-error',status:mode==='http-error'?503:200,json:async()=>{
        if(mode==='invalid-json')throw new SyntaxError('Synthetic invalid JSON');
        if(mode==='json-pending')return new Promise(r=>{release=r;});
        return mode==='missing' ? {} : mode==='null' ? null : {success:mode==='rejected'?false:mode==='string-false'?'false':mode==='string-true'?'true':true};
      }};
      if(mode==='network')throw new Error('Synthetic offline');
      if(mode==='pending')return new Promise(r=>{release=()=>r(response);});
      return response;
    }
  };
  vm.runInNewContext(script,context);
  return {answers,calls,get,button,submit:()=>handler({preventDefault(){}}),
    setValid(v){valid=v;},expire(){for(const fn of [...timers.values()])fn();},
    release(v){release(v);},timers};
}
const flush=()=>new Promise(r=>setImmediate(r));
const resourceKinds = {
  pt: ['Ferramenta', 'Guia ou catálogo', 'Serviço'],
  en: ['Tool', 'Guide or catalog', 'Service'],
  es: ['Herramienta', 'Guía o catálogo', 'Servicio'],
  fr: ['Outil', 'Guide ou catalogue', 'Service'],
  de: ['Werkzeug', 'Leitfaden oder Katalog', 'Dienstleistung'],
};
async function testRecommendationMatrix(markup, locale) {
  const runtime = questionnaireSource(markup);
  assert.ok(runtime, locale + ' questionnaire script');
  const [tool, guide, service] = resourceKinds[locale];
  const choices = name => [...markup.matchAll(new RegExp('name="' + name + '"\\s+value="([^"]+)"', 'g'))]
    .map(match => match[1]);
  const industries = choices('industry');
  const challenges = choices('challenge');
  assert.equal(new Set(industries).size, 6);
  assert.equal(new Set(challenges).size, 5);
  const overlappingRoutes = {
    'healthcare/data': ['/ai-readiness-assessment/', '/ai-readiness-framework/', '/zion-app-network/'],
    'finance/costs': ['/finops-consulting/', '/apps/cloud-cost-optimizer.html', '/roi-calculator/'],
    'energy/costs': ['/finops-consulting/', '/apps/cloud-cost-optimizer.html', '/ai-energy-optimization/'],
    'retail/sales': ['/ai-lead-generation/', '/lead-score-copilot/', '/zion-app-network/'],
  };
  const challengeOrder = {
    support: ['/ai-powered-customer-support/', '/ai-observability-and-incident-management/'],
    sla: ['/ai-observability-and-incident-management/', '/ai-incident-response/'],
    costs: ['/finops-consulting/', '/apps/cloud-cost-optimizer.html'],
    sales: ['/ai-lead-generation/', '/lead-score-copilot/'],
    data: ['/ai-readiness-assessment/', '/ai-readiness-framework/'],
  };
  const sectorOrder = {
    'field-service': ['/zion-app-network/field-visit-handoff-2026.html', '/ai-field-service-automation/'],
    healthcare: ['/ai-readiness-assessment/'],
    finance: ['/finops-consulting/', '/roi-calculator/'],
    energy: ['/ai-energy-optimization/', '/apps/cloud-cost-optimizer.html'],
    retail: ['/ai-lead-generation/'],
    other: ['/zion-app-network/', '/services/'],
  };
  const guideRoutes = new Set([
    '/apps/cloud-cost-optimizer.html', '/ai-readiness-framework/', '/lead-score-copilot/',
    '/zion-app-network/', '/zion-app-network/field-visit-handoff-2026.html',
  ]);
  const expectedKind = url => url === '/roi-calculator/' ? tool :
    (guideRoutes.has(url) ? guide : service);
  const represented = new Set();
  for (const industry of industries) {
    for (const challenge of challenges) {
      const pair = industry + '/' + challenge;
      const form = fixture('accepted', runtime);
      Object.assign(form.answers, { industry, challenge });
      await form.submit();
      const screen = [...form.get('dq-results').innerHTML.matchAll(/<li><strong>([^<]+)<\/strong>: <a href="([^"]+)">([^<]+)<\/a><\/li>/g)];
      const paths = screen.map(match => match[2]);
      assert.ok(paths.length >= 3 && paths.length <= 4, pair + ' result count');
      assert.equal(new Set(paths).size, paths.length, pair + ' repeats a URL');
      assert.deepEqual(paths, overlappingRoutes[pair] || challengeOrder[challenge].concat(sectorOrder[industry]), pair + ' order');
      for (const [, kind, url] of screen) assert.equal(kind, expectedKind(url), pair + ' kind: ' + url);
      assert.equal(form.calls.length, 1, pair);
      const emailLines = form.calls[0].data.results.split('\n').filter(line => line.startsWith('- '));
      assert.deepEqual(emailLines, screen.map(([, kind, url, label]) =>
        '- [' + kind + '] ' + label + ': https://ziontechgroup.com' + url), pair + ' screen/email mismatch');
      for (const url of paths) represented.add(url);
      scenarios++;
    }
  }
  assert.equal(represented.size, 15, 'All reviewed resource destinations must remain reachable');
}
async function run() {
  {
    const mixedCase = '<SCRIPT>' + source + '</ScRiPt>';
    const extracted = questionnaireSource(mixedCase);
    assert.equal(extracted, source, 'HTML script tag names are case-insensitive');
    const f=fixture('accepted', extracted);await f.submit();
    assert.equal(f.calls.length,1);
    scenarios++;
  }
  for(const mode of ['accepted','string-true','rejected','string-false','http-error','invalid-json','missing','null','network']) {
    const f=fixture(mode); await f.submit();
    assert.equal(f.calls.length,1);
    assert.equal(f.calls[0].url,'https://formsubmit.co/ajax/commercial@ziontechgroup.com');
    assert.equal(f.calls[0].options.method,'POST');
    assert.deepEqual(Object.keys(f.calls[0].data).sort(),
      ['_cc','_replyto','_subject','email','name','results'].sort(),
      'Only the reviewed report and recipient fields may be submitted');
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
    const expectedPhase = {
      accepted:'accepted','string-true':'accepted',rejected:'rejected','string-false':'rejected',
      'http-error':'http','invalid-json':'body',missing:'unrecognized-response',
      null:'unrecognized-response',network:'request'
    };
    const diagnostic = f.get('dq-mail-status').attrs;
    assert.deepEqual(Object.keys(diagnostic).sort(), ['data-elapsed-ms','data-http-class','data-request-phase']);
    assert.equal(diagnostic['data-request-phase'], expectedPhase[mode]);
    assert.equal(diagnostic['data-http-class'], mode==='network'?'none':mode==='http-error'?'5xx':'2xx');
    assert.match(diagnostic['data-elapsed-ms'], /^[0-9]+$/);
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
    const diagnostic = {...f.get('dq-mail-status').attrs};
    assert.equal(diagnostic['data-request-phase'],mode==='pending'?'request-timeout':'body-timeout');
    assert.equal(diagnostic['data-http-class'],mode==='pending'?'none':'2xx');
    f.release({success:true});await flush();
    assert.deepEqual(f.get('dq-mail-status').attrs,diagnostic,'late response cannot change diagnostics');
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
  await testRecommendationMatrix(html, 'pt');
  for (const locale of Object.keys(resourceKinds)) {
    const localizedPath = path.join(__dirname, '../public', locale, 'discovery/index.html');
    await testRecommendationMatrix(fs.readFileSync(localizedPath, 'utf8'), locale);
  }
  console.log('Current Discovery: '+scenarios+' synthetic runtime scenarios passed; all fetches mocked.');
}
let completed=false;
process.on('beforeExit',()=>{if(!completed){console.error('Test suite did not complete');process.exitCode=1;}});
run().then(()=>{completed=true;}).catch(e=>{completed=true;console.error(e);process.exitCode=1;});
