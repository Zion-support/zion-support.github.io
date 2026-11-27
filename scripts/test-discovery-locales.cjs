'use strict';
// Exercise the actual generated questionnaires. Every delivery call is mocked.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=process.argv[2]||'public',locales=['en','pt','es','fr','de'];
const renderer=require('./render-discovery-locales.cjs');
const sourceParity=process.argv.includes('--source-parity');
const canonicalHtml=fs.readFileSync(path.join(root,'discovery/index.html'),'utf8');
assert.match(canonicalHtml,/<html\b[^>]*\slang="pt-BR"/,'Canonical Discovery remains Portuguese');
const inlineApplications=html=>[...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).filter(s=>s.includes('var MAP='));
assert.equal(inlineApplications(canonicalHtml).length,1,'One reviewed canonical application');
const canonicalScript=inlineApplications(canonicalHtml)[0];
// Independent question contract: seven groups and the participant's name/email.
const groups={industry:['field-service','healthcare','finance','energy','retail','other'],challenge:['support','sla','costs','sales','data'],size:['1-10','11-100','101-1000','1000+'],speed:['days','weeks','quarter'],aiuse:['none','some','many'],outcome:['save-time','cut-costs','grow-revenue','reduce-risk'],deploy:['saas','cloud','onprem']};
const attributes=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*(["'])(.*?)\2/g)].map(m=>[m[1],m[3]]));
const files=locales.map(l=>[l,path.join(root,l,'discovery/index.html')]);
async function check(l,file){
 const html=fs.readFileSync(file,'utf8'),expected=l==='pt'?'pt-BR':l;
 if(sourceParity)assert.equal(html,l==='pt'?canonicalHtml:renderer.page(l,canonicalScript),'Committed questionnaire differs from its authored generator: '+file);
 assert.match(html,new RegExp('<html lang="'+expected+'"'));
 assert.equal((html.match(/<form\b[^>]*id="dq"/g)||[]).length,1);
 assert.equal((html.match(/<form\b/gi)||[]).length,1,'Only one questionnaire handler target: '+l);
 assert.equal((html.match(/\bid="dq-results"/g)||[]).length,1,'Unique result region: '+l);
 assert(!html.includes('/assets/js/discovery-delivery.js'),'Do not attach incompatible dform runtime: '+l);
 assert(!html.includes('data-discovery-parity'),'No duplicate delivery handler: '+l);
 assert(!html.toLowerCase().includes('carlos@ziontechgroup.com'),'No additional recipient: '+l);
 assert.match(html,/<form\b[^>]*\bmethod="post"/,'Never use GET for participant details');
 assert.match(html,/<button\b[^>]*\btype="submit"[^>]*\bdisabled/,'Require installed JavaScript handler');
 assert.match(html,/<noscript>[\s\S]*?mailto:commercial@ziontechgroup\.com[\s\S]*?<\/noscript>/,'Explicit manual fallback');
 for(const name of ['industry','challenge','size','speed','aiuse','outcome','deploy','name','email'])assert(html.includes('name="'+name+'"'),'Missing field '+l+':'+name);
 const inputs=[...html.matchAll(/<input\b[^>]*>/gi)].map(m=>({tag:m[0],...attributes(m[0])}));
 const radios=inputs.filter(input=>input.type==='radio');
 assert.deepEqual([...new Set(radios.map(input=>input.name))].sort(),Object.keys(groups).sort(),'Exactly seven question groups: '+l);
 for(const [name,values]of Object.entries(groups)){
  const choices=radios.filter(input=>input.name===name);
  assert.deepEqual(choices.map(input=>input.value),values,'Question options changed: '+l+'/'+name);
  assert(choices.some(input=>/\brequired(?:\s|\/?\>)/.test(input.tag)),'Question must be required: '+l+'/'+name);
 }
 for(const [name,type]of [['name','text'],['email','email']]){
  const contact=inputs.filter(input=>input.name===name);
  assert.equal(contact.length,1,'Unique participant field: '+l+'/'+name);
  assert.equal(contact[0].type,type,'Participant field type: '+l+'/'+name);
  const id='dq-'+name;
  assert.equal(contact[0].id,id,'Participant field ID: '+l+'/'+name);
  assert.equal((html.match(new RegExp('\\bid="'+id+'"','g'))||[]).length,1,'Unique participant field ID: '+l+'/'+name);
  assert.equal((html.match(new RegExp('<label\\b[^>]*\\bfor="'+id+'"[^>]*>\\s*[^<\\s]','g'))||[]).length,1,'Visible associated participant label: '+l+'/'+name);
  assert.equal(contact[0].autocomplete,name,'Participant field autocomplete: '+l+'/'+name);
  assert(/\brequired(?:\s|\/?\>)/.test(contact[0].tag),'Required participant field: '+l+'/'+name);
 }
 const canonical='https://ziontechgroup.com'+(l==='pt'?'/discovery/':'/'+l+'/discovery/');
 assert(html.includes('rel="canonical" href="'+canonical+'"'));
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
 assert.equal(schema.url,canonical);assert.equal(String(schema.offers.price),'0');assert.equal(schema.inLanguage,expected);
 assert.equal(schema.offers.url,canonical,'Free offer targets its questionnaire: '+l);
 for(const k of locales)assert(html.includes('hreflang="'+(k==='pt'?'pt-BR':k)+'" href="https://ziontechgroup.com'+(k==='pt'?'/discovery/':'/'+k+'/discovery/')+'"'));
 const script=[...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).find(s=>s.includes('var MAP='));assert(script);
 assert.equal(inlineApplications(html).length,1,'One reviewed locale application: '+l);
 assert.equal(script,l==='pt'?canonicalScript:renderer.runtime(canonicalScript,l),'Locale runtime must preserve canonical delivery logic: '+l);
 assert(!/(^|[^\w])_autoresponse\s*:/m.test(script),'No unsupported AJAX autoresponse: '+l);
 const statuses=l==='pt'?{
  accepted:'Solicitação aceita pelo serviço de e-mail. A entrega nas caixas do cliente e do Commercial ainda não foi confirmada.',
  rejected:'O serviço recusou a solicitação. Você pode tentar novamente ou usar o envio manual.',
  uncertain:'Não foi possível confirmar a aceitação. A solicitação pode ter sido recebida; nenhum reenvio automático será feito. Confira seu e-mail antes de usar o envio manual.'
 }:{accepted:renderer.C[l].ui[5],rejected:renderer.C[l].ui[6],uncertain:renderer.C[l].ui[3]};
 for(const mode of ['accepted','rejected','uncertain']){
  let handler,calls=0;const nodes=new Map(),button={disabled:false};
  const get=id=>{if(!nodes.has(id))nodes.set(id,{innerHTML:'',textContent:'',hidden:true,attrs:{},scrollIntoView(){},querySelector(){return button;},reportValidity(){return true;},addEventListener(t,f){handler=f;},setAttribute(k,v){this.attrs[k]=v;}});return nodes.get(id);};
  const answers={industry:'finance',challenge:'costs',size:'1-10',speed:'weeks',aiuse:'none',outcome:'save-time',deploy:'saas',name:'Synthetic Visitor',email:'visitor@example.test'};
  vm.runInNewContext(script,{document:{getElementById:get},FormData:class{entries(){return Object.entries(answers);}},AbortController,setTimeout,clearTimeout,console,fetch:async(url,options)=>{calls++;assert.equal(url,'https://formsubmit.co/ajax/commercial@ziontechgroup.com');assert.equal(options.method,'POST');assert.equal(options.headers['Content-Type'],'application/json');assert.equal(options.headers.Accept,'application/json');const body=JSON.parse(options.body);assert.deepEqual(Object.keys(body).sort(),['_cc','_replyto','_subject','email','name','results'].sort(),'Only reviewed recipient/report fields');assert.equal(body._cc,answers.email);assert.equal(body._replyto,answers.email);assert.match(body.results,/https:\/\/ziontechgroup.com\//);if(mode==='uncertain')throw Error('offline fixture');return{ok:true,json:async()=>({success:mode==='accepted'})};}});
  await handler({preventDefault(){}});assert.equal(calls,1);assert.equal(button.disabled,false);assert.equal(get('dq').attrs['aria-busy'],'false');assert.equal(get('dq-results').hidden,false);assert.match(get('dq-results').innerHTML,/<strong>.+<\/strong>/,'Resource types visible');
  if(l!=='pt')assert.doesNotMatch(get('dq-results').innerHTML+get('dq-mail-status').textContent+get('dq-fallback').innerHTML,/Suas recomendações|Solicitação aceita|Não foi possível|Enviar estes resultados/,'No Portuguese state text in '+l);
  assert.equal(get('dq-mail-status').textContent,statuses[mode],'Honest localized delivery state: '+l+'/'+mode);
  if(mode!=='accepted')assert.match(get('dq-fallback').innerHTML,/mailto:visitor%40example.test\?cc=commercial@ziontechgroup.com/);
  await handler({preventDefault(){}});assert.equal(calls,mode==='rejected'?2:1,'Retry policy '+l+'/'+mode);
 }
}
(async()=>{for(const [l,file]of files)await check(l,file);console.log('PASS five Discovery languages: real forms, seven required groups plus name/email, free schema, reciprocal metadata, canonical runtime parity, localized UI, mocked delivery states and duplicate suppression (15 scenarios).'+(sourceParity?' Committed sources match the authored generator.':''));})().catch(e=>{console.error(e);process.exitCode=1;});
