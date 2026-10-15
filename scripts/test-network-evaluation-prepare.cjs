'use strict';
// Run manually: this invokes the preparation script, so never call it from that script.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),cp=require('node:child_process');
const {copy}=require('./render-network-evaluation.cjs'),{guide:guideUrl,home:homeUrl}=require('./bootstrap-network-evaluation.cjs'),{verify}=require('./test-network-evaluation-artifact.cjs');
const guide=l=>guideUrl(l).slice(1),home=l=>homeUrl(l).slice(1)+'index.html';
const files=['prepare-pages-out.sh','render-network-evaluation.cjs','test-network-evaluation.cjs','bootstrap-network-evaluation.cjs','test-network-evaluation-artifact.cjs','verify-network-evaluation-artifact.cjs'];
let checks=0;const ok=(x,m)=>{assert(x,m);checks++;},dirs=[];
function fixture(){const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-prepare-test-'));dirs.push(root);fs.mkdirSync(path.join(root,'scripts'));for(const f of files)fs.copyFileSync(path.join(__dirname,f),path.join(root,'scripts',f));const put=(rel,s)=>{const f=path.join(root,'public',rel);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,s);};for(const rel of ['services/ai-automation/index.html','plans/index.html','discovery/index.html'])put(rel,'<!doctype html><html><body>7sY00k7JScFV99Bf044ZG06<!--'+'x'.repeat(5200)+'--></body></html>');for(const [l,c] of Object.entries(copy))put(home(l),`<!doctype html><html lang="${c.lang}"><head><link rel="stylesheet" href="/assets/css/site.css"></head><body><main>Discovery $99 <a href="https://example.invalid/pay">Unchanged checkout</a></main></body></html>`);put('managed-it-services/index.html','proof-fgv SDCOMPRASTIC-6963');put('autonomous-ai-agents/index.html','Existing official ladder');return root;}
try{
 const root=fixture(),run=r=>cp.spawnSync('bash',['scripts/prepare-pages-out.sh'],{cwd:r,encoding:'utf8'}),first=run(root);ok(first.status===0,first.stderr);verify(path.join(root,'out'));checks++;
 const urls=Object.keys(copy).flatMap(l=>[home(l),guide(l)]).concat('apps/network-evaluation-publication.json'),snapshot=urls.map(u=>fs.readFileSync(path.join(root,'out',u),'utf8'));
 for(const l of Object.keys(copy)){ok(fs.existsSync(path.join(root,'out',guide(l))),'Unseeded guide generated');ok(fs.readFileSync(path.join(root,'public',home(l)),'utf8').includes('Unchanged checkout'),'Public source untouched');}
 const second=run(root);ok(second.status===0,second.stderr);ok(urls.every((u,i)=>fs.readFileSync(path.join(root,'out',u),'utf8')===snapshot[i]),'Full preparation repeated output equality');
 const broken=fixture();fs.writeFileSync(path.join(broken,'public/plans/index.html'),'too short');const bad=run(broken);ok(bad.status!==0&&bad.stderr.includes('stub-sized'),'Original money guard still blocks');ok(!fs.existsSync(path.join(broken,'out',guide('en'))),'No guide generated after money guard failure');
 const missing=fixture();fs.unlinkSync(path.join(missing,'public',home('de')));const absent=run(missing);ok(absent.status!==0&&absent.stderr.includes('Missing homepage'),'Missing locale fails closed');ok(!fs.existsSync(path.join(missing,'out',guide('en'))),'No partial generated guide after missing locale');
 console.log(`PASS preparation chain: ${checks} assertions; exact script with synthetic supporting routes, no publication.`);
}finally{for(const r of dirs)fs.rmSync(r,{recursive:true,force:true});}

