'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),cp=require('node:child_process');
const {bootstrap,guide,home}=require('./bootstrap-network-evaluation.cjs');
const {verify}=require('./verify-network-evaluation-artifact.cjs');
const {copy}=require('./render-network-evaluation.cjs');
let checks=0;const ok=(v,m)=>{assert(v,m);checks++;};const dirs=[];
const write=(root,rel,text)=>{const f=path.join(root,rel);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,text);};
function fixture(){
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evaluation-build-'));dirs.push(root);
 for(const f of ['prepare-pages-out.sh','render-network-evaluation.cjs','test-network-evaluation.cjs','bootstrap-network-evaluation.cjs','verify-network-evaluation-artifact.cjs']){fs.mkdirSync(path.join(root,'scripts'),{recursive:true});fs.copyFileSync(path.join(__dirname,f),path.join(root,'scripts',f));}
 for(const [l,c] of Object.entries(copy)){
  const body='<a href="/preserved/">Existing link</a><form action="/unchanged"><input name="example"></form><script>const unchanged=true;</script>';
  const content=l==='pt'?body+'<footer>Existing footer</footer>':'<main>'+body+'</main>';
  write(root,'public'+home(l)+'index.html',`<!doctype html><html lang="${c.lang}"><head><link rel="stylesheet" href="/assets/css/site.css"><title>Existing SEO</title></head><body>Discovery $99${content}</body></html>`);
 }
 for(const rel of ['services/ai-automation/index.html','plans/index.html','discovery/index.html'])write(root,'public/'+rel,'7sY00k7JScFV99Bf044ZG06<!--'+'x'.repeat(5200)+'-->');
 write(root,'public/managed-it-services/index.html','proof-fgv SDCOMPRASTIC-6963');write(root,'public/autonomous-ai-agents/index.html','Existing scope');return root;
}
const run=root=>cp.spawnSync('bash',['scripts/prepare-pages-out.sh'],{cwd:root,encoding:'utf8'});
const snapshots=root=>Object.keys(copy).flatMap(l=>[home(l)+'index.html',guide(l)]).filter(u=>fs.existsSync(path.join(root,'out',u.slice(1)))).map(u=>[u,fs.readFileSync(path.join(root,'out',u.slice(1)),'utf8')]);
try{
 const root=fixture();ok(!fs.existsSync(path.join(root,'public/apps/network-start-here.html')),'No preseeded guides');
 const built=run(root);ok(built.status===0,built.stderr);ok(built.stdout.includes('92 assertions'),'Unit suite reached');ok(built.stdout.includes('"checks":85'),'Artifact verifier reached');
 const out=path.join(root,'out');ok(verify(out).checks===85,'Five generated guide editions verified');
 for(const [l,c] of Object.entries(copy)){
  const original=fs.readFileSync(path.join(root,'public',`${home(l)}index.html`.slice(1)),'utf8'),after=fs.readFileSync(path.join(out,`${home(l)}index.html`.slice(1)),'utf8');
  ok(after.includes('<form action="/unchanged"><input name="example"></form>'),'Form preserved');ok(after.includes('<script>const unchanged=true;</script>'),'Script preserved');ok(after.includes('href="/preserved/"'),'Existing href preserved');
  ok(after.match(/<head>[\s\S]*?<\/head>/)[0]===original.match(/<head>[\s\S]*?<\/head>/)[0],'SEO unchanged');
 }
 const first=snapshots(root);bootstrap(out);ok(first.every(([u,text])=>fs.readFileSync(path.join(out,u.slice(1)),'utf8')===text),'Byte-identical bootstrap repeat');
 const second=run(root);ok(second.status===0,second.stderr);ok(first.every(([u,text])=>fs.readFileSync(path.join(out,u.slice(1)),'utf8')===text),'Byte-identical clean rebuild');
 const money=fixture();write(money,'public/plans/index.html','Missing payment gate');const failed=run(money);ok(failed.status!==0&&failed.stderr.includes('stub-sized'),'Money guard remains active');ok(!fs.existsSync(path.join(money,'out/apps/network-start-here.html')),'Generation occurs only after guards');
 function negative(change,pattern){const r=fixture();fs.cpSync(path.join(r,'public'),path.join(r,'out'),{recursive:true});change(path.join(r,'out'));const before=snapshots(r);assert.throws(()=>bootstrap(path.join(r,'out')),pattern);checks++;ok(before.every(([u,text])=>fs.readFileSync(path.join(r,'out',u.slice(1)),'utf8')===text),'Failed preflight writes no destination');ok(!fs.existsSync(path.join(r,'out/apps/network-start-here.html')),'Failed preflight creates no guides');}
 negative(out=>fs.unlinkSync(path.join(out,'de/index.html')),/Missing homepage/);
 negative(out=>{const f=path.join(out,'de/index.html');fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace('lang="de"','lang="en"'));},/Wrong bootstrap language/);
 negative(out=>{const f=path.join(out,'en/index.html');fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace('</head>','<meta http-equiv="refresh" content="0;url=/"></head>'));},/Refuse redirect/);
 negative(out=>{const f=path.join(out,'en/index.html');fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace('</body>','<p id="network-start-title">Conflict</p></body>'));},/Conflicting homepage anchor/);
 console.log(`PASS network build integration: ${checks} assertions; synthetic full shell fixture, no live deployment.`);
}finally{for(const d of dirs)fs.rmSync(d,{recursive:true,force:true});}
