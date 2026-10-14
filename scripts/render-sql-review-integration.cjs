'use strict';
// Owner-approved, scoped offline artifact adaptation. Never calls deployment APIs.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const R=require('./render-sql-review-release.cjs'),B=require('./render-batch91-locales.cjs');
const RELEASE='sql-review-integration-2026-10-14-v2';
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const home=l=>l==='pt'?'/':l==='en'?'/en/':'/'+l+'/';
const prefix=l=>l==='en'?'/':'/'+l+'/';
const disk=(root,u)=>path.join(root,u.slice(1),u.endsWith('/')?'index.html':'');
const OWN=/<!--sql-integration:start-->[\s\S]*?<!--sql-integration:end-->/g;
function assertPage(h,l,u){assert(new RegExp('<html[^>]*lang=["\']'+R.LANG[l]+'["\']','i').test(h),'Locale mismatch '+u);assert(!/http-equiv\s*=\s*["']refresh/i.test(h),'Redirect '+u);assert.equal((h.match(/<\/body\s*>/gi)||[]).length,1,'Ambiguous body '+u);}
function promotion(l){return '<!--sql-integration:start--><aside class="card" data-sql-integration="'+RELEASE+'" lang="'+R.LANG[l]+'"><h2>'+esc(R.C[l].title)+'</h2><p>'+esc(R.C[l].lead)+'</p><p><a href="'+R.guideRoute(l)+'">'+esc(R.C[l].nav[2])+'</a> · <a href="'+prefix(l)+'sql-query-explainer/">'+esc(R.C[l].nav[1])+'</a></p><p><small>'+esc(R.C[l].limits)+'</small></p></aside><!--sql-integration:end-->';}
function addOwned(h,block,u){const base=h.replace(OWN,''),old=/<!--sql-review:start-->[\s\S]*?<!--sql-review:end-->/g;assert(!old.test(base),'Earlier SQL guide block requires reviewed reconciliation '+u);const mains=base.match(/<\/main\s*>/gi)||[];assert(mains.length<=1,'Ambiguous main '+u);const anchor=mains.length?/<\/main\s*>/i:/<\/body\s*>/i;assert.equal((base.match(anchor)||[]).length,1,'Missing insertion anchor '+u);const next=base.replace(anchor,()=>block+(base.match(anchor)||[])[0]);assert.equal(next.replace(OWN,''),base,'Unowned bytes changed '+u);return next;}
function repairSQL(h,l,u){let n=0;const next=h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,s=>{if(!s.includes('function ex()')||(!s.includes('const patterns=')&&!s.includes('const sqlReview=')))return s;n++;return '<script>'+R.runtime(l)+'</script>';});assert.equal(n,1,'Unknown SQL runtime '+u);return next;}
function plan(root){
 const writes=new Map(),created=[],optional=[];const read=u=>fs.readFileSync(disk(root,u),'utf8');
 assert(fs.existsSync(disk(root,'/assets/css/site.css')),'Missing shared stylesheet');
 const generated=h=>{for(const v of h.matchAll(/href="(\/(?:[^"#]*))(?:#[^"]*)?"/g)){const u=v[1];if(u.includes('/discovery/'))optional.push(u);}return h;};
 for(const l of R.L){
  const hu=home(l);assert(fs.existsSync(disk(root,hu)),'Missing homepage '+hu);const before=read(hu);assertPage(before,l,hu);writes.set(hu,addOwned(before,promotion(l),hu));
  for(let i=0;i<3;i++){
   const u=B.route(l,B.S[i]),exists=fs.existsSync(disk(root,u));let h=exists?read(u):B.page(l,i);assertPage(h,l,u);
   if(!exists){created.push(u);h=generated(h);h=h.replace(/<a\b[^>]*href="([^"#]+(?:#[^"]*)?)"[^>]*>[\s\S]*?<\/a>/g,(a,target)=>{const clean=target.split('#')[0];if(clean.includes('/discovery/'))return '';if(clean===prefix(l)+'apps/app-verification-guide.html'&&!fs.existsSync(disk(root,clean)))return a.replace(target,R.guideRoute(l)+'#main');if(clean==='/zion-app-network/CATALOG-BATCH91-REVIEW.html'&&!fs.existsSync(disk(root,clean)))return a.replace(target,R.guideRoute(l)+'#main');return a;});}
   const old=h;if(i===0)h=repairSQL(h,l,u);h=addOwned(h,'<!--sql-integration:start--><p data-sql-integration="'+RELEASE+'"><a href="'+R.guideRoute(l)+'">'+esc(R.C[l].title)+'</a></p><!--sql-integration:end-->',u);
   assert.deepEqual(h.match(/<form\b[\s\S]*?<\/form>/gi)||[],old.match(/<form\b[\s\S]*?<\/form>/gi)||[],'Forms changed '+u);
   if(i!==0)assert.deepEqual(h.match(/<script\b[\s\S]*?<\/script>/gi)||[],old.match(/<script\b[\s\S]*?<\/script>/gi)||[],'Peer scripts changed '+u);
   writes.set(u,h);
  }
  const gu=R.guideRoute(l);let g=R.guide(l);if(!fs.existsSync(disk(root,prefix(l)+'apps/app-verification-guide.html')))g=g.replace('href="'+prefix(l)+'apps/app-verification-guide.html"','href="'+gu+'#main"');
  const gf=disk(root,gu);if(fs.existsSync(gf)){const old=read(gu);assert(old.includes('data-sql-review="'+R.RELEASE+'"'),'Unowned guide collision '+gu);assert(!/<form\b|<script\b/i.test(old),'Interactive guide collision '+gu);}else created.push(gu);writes.set(gu,g);
 }
 // Complete preflight, then mutations. Existing source forms and scripts preserved except known SQL runtime.
 for(const [u,h] of writes){assert.equal((h.match(/data-sql-integration=/g)||[]).length,u.includes('sql-pattern-review-guide')?0:1,'Owned block count '+u);if(!fs.existsSync(disk(root,u)))continue;const b=read(u);assert.deepEqual(h.match(/<form\b[\s\S]*?<\/form>/gi)||[],b.match(/<form\b[\s\S]*?<\/form>/gi)||[],'Original forms changed '+u);}
 const priorFile=disk(root,'/apps/sql-review-integration.json'),prior=fs.existsSync(priorFile)?JSON.parse(read('/apps/sql-review-integration.json')):null;if(prior)assert.equal(prior.release,RELEASE,'Unknown integration manifest');
 const originalCreated=[...new Set([...(prior?prior.created:[]),...created])].sort(),originalSkipped=[...new Set([...(prior?prior.skippedOptionalLinks:[]),...optional])].sort();
 const entries=[...writes].map(([u,h])=>({path:u,sha256:hash(h)}));
 const manifest={release:RELEASE,contentRelease:R.RELEASE,localOnly:true,fullNetworkComplete:false,assets:[{path:'/assets/css/site.css',sha256:hash(fs.readFileSync(disk(root,'/assets/css/site.css')))}],entries,created:originalCreated,skippedOptionalLinks:originalSkipped,scope:'Five guides, fifteen scoped resource editions and five real homepage promotions; existing Discovery, prices, recipients and unrelated files unchanged. Source/artifact checks only.'};
 return {writes,manifest};
}
function verify(root){const m=JSON.parse(fs.readFileSync(disk(root,'/apps/sql-review-integration.json'),'utf8'));assert.equal(m.release,RELEASE);assert.equal(m.entries.length,25);for(const a of m.assets)assert.equal(hash(fs.readFileSync(disk(root,a.path))),a.sha256,'Asset hash mismatch '+a.path);for(const e of m.entries){const h=fs.readFileSync(disk(root,e.path),'utf8');assert.equal(hash(h),e.sha256,'Hash mismatch '+e.path);}for(const l of R.L){const g=fs.readFileSync(disk(root,R.guideRoute(l)),'utf8');assert.equal((g.match(/rel="alternate"/g)||[]).length,6);assert(g.includes('lang="'+R.LANG[l]+'"'));}return m;}
function run(root='out',checkOnly=false){const p=plan(root);if(checkOnly)return p.manifest;for(const [u,h] of p.writes){const f=disk(root,u);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,h);}const mf=disk(root,'/apps/sql-review-integration.json');fs.mkdirSync(path.dirname(mf),{recursive:true});fs.writeFileSync(mf,JSON.stringify(p.manifest,null,2)+'\n');verify(root);return p.manifest;}
module.exports={plan,run,verify,addOwned,promotion,RELEASE};if(require.main===module){const args=process.argv.slice(2),check=args.includes('--check');const m=run(args.find(a=>a!=='--check')||'out',check);console.log('PASS '+RELEASE+': '+m.entries.length+' scoped pages; '+m.created.length+' planned new paths; checkOnly='+check);}
