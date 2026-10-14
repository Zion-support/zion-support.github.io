'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const I=require('./render-sql-review-integration.cjs'),R=require('./render-sql-review-release.cjs'),B=require('./render-batch91-locales.cjs');
const source=path.join(__dirname,'..','public'),root=fs.mkdtempSync(path.join(os.tmpdir(),'sql-integration-'));
const homes={en:'/en/',pt:'/',es:'/es/',fr:'/fr/',de:'/de/'};
const disk=u=>path.join(root,u.slice(1),u.endsWith('/')?'index.html':'');
const put=(u,h)=>{const f=disk(u);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,h);};
const readSource=u=>fs.readFileSync(path.join(source,u.slice(1),u.endsWith('/')?'index.html':''));
const snapshot=()=>{const m=new Map();const visit=d=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name);if(e.isDirectory())visit(f);else m.set(f,fs.readFileSync(f));}};visit(root);return m;};
const originals=new Map();for(const l of R.L){const u=homes[l],h=readSource(u);put(u,h);originals.set(u,h);}
put('/assets/css/site.css',readSource('/assets/css/site.css'));
const protectedPaths=['/services/ai-automation/','/plans/','/discovery/','/managed-it-services/','/autonomous-ai-agents/'];
for(const u of protectedPaths){const f=path.join(source,u.slice(1),'index.html');if(fs.existsSync(f)){const h=fs.readFileSync(f);put(u,h);originals.set(u,h);}}
const before=snapshot(),checked=I.run(root,true);assert.equal(checked.entries.length,25);assert.deepEqual(snapshot(),before,'Check mode modified inputs');
const first=I.run(root);assert.equal(first.created.length,20);assert.equal(first.entries.length,25);I.verify(root);const once=snapshot();I.run(root);assert.deepEqual(snapshot(),once,'Not byte-idempotent');
const own=/<!--sql-integration:start-->[\s\S]*?<!--sql-integration:end-->/g;
for(const l of R.L){const u=homes[l],h=fs.readFileSync(disk(u),'utf8');assert.equal(h.replace(own,''),originals.get(u).toString(),'Original homepage bytes changed '+u);assert.equal((h.match(/data-sql-integration=/g)||[]).length,1);assert(h.includes('href="'+R.guideRoute(l)+'"'));}
for(const u of protectedPaths)if(originals.has(u))assert.deepEqual(fs.readFileSync(disk(u)),originals.get(u),'Protected commercial bytes changed '+u);
for(const l of R.L){const g=fs.readFileSync(disk(R.guideRoute(l)),'utf8');assert.equal((g.match(/rel="alternate"/g)||[]).length,6);assert(g.includes('href="'+R.guideRoute(l)+'#main"'),'Missing self-contained review fallback');for(let i=0;i<3;i++){const u=B.route(l,B.S[i]),h=fs.readFileSync(disk(u),'utf8');assert(h.includes('href="'+R.guideRoute(l)+'"'));assert(!h.includes('href="/zion-app-network/CATALOG-BATCH91-REVIEW.html'));}}
// Known existing pages are preserved outside owned edits; unknown pages must fail closed.
const peer='/zion-agent-observability/',p=fs.readFileSync(disk(peer),'utf8');put(peer,p.replace('</main>','<p id="manual-editor-note">Preserve me</p></main>'));I.run(root);assert(fs.readFileSync(disk(peer),'utf8').includes('manual-editor-note'));
put('/sql-query-explainer/','<html lang="en"><body><main><script>function ex(){return 1;}</script></main></body></html>');const badRuntime=snapshot();assert.throws(()=>I.run(root),/Unknown SQL runtime/);assert.deepEqual(snapshot(),badRuntime,'Partial writes for unknown runtime');
put('/sql-query-explainer/',B.page('en',0));
put('/de/',originals.get('/de/').toString().replace('lang="de"','lang="es"'));const badLocale=snapshot();assert.throws(()=>I.run(root),/Locale mismatch/);assert.deepEqual(snapshot(),badLocale);
put('/de/',originals.get('/de/'));
put('/es/',originals.get('/es/').toString().replace('</body>','<meta http-equiv="refresh" content="0"></body>'));const badRedirect=snapshot();assert.throws(()=>I.run(root),/Redirect/);assert.deepEqual(snapshot(),badRedirect);
put('/es/',originals.get('/es/'));
const css=fs.readFileSync(disk('/assets/css/site.css'));fs.unlinkSync(disk('/assets/css/site.css'));const missingStyle=snapshot();assert.throws(()=>I.run(root),/Missing shared stylesheet/);assert.deepEqual(snapshot(),missingStyle);put('/assets/css/site.css',css);
put('/apps/sql-pattern-review-guide.html','<html lang="en"><body>Unowned guide</body></html>');const guideCollision=snapshot();assert.throws(()=>I.run(root),/Unowned guide collision/);assert.deepEqual(snapshot(),guideCollision);
fs.rmSync(root,{recursive:true,force:true});
console.log('PASS SQL integration: five REAL homepage sources, 20 generated editions, 25 hashed pages; protected commercial bytes; read-only preflight; byte-idempotence; fail-closed preservation guards.');
