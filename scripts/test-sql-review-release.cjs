'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),vm=require('node:vm'),assert=require('node:assert/strict');
const R=require('./render-sql-review-release.cjs'),B=require('./render-batch91-locales.cjs');
let tests=0;
for(const l of R.L){
 const nodes={q:{value:''},out:{textContent:''}},ctx={document:{getElementById:id=>nodes[id]}};
 vm.createContext(ctx);const js=R.runtime(l);assert(!/fetch\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon|eval\(/.test(js));vm.runInContext(js,ctx);
 const check=(q,yes=[],no=[])=>{nodes.q.value=q;vm.runInContext('ex()',ctx);assert.equal(nodes.q.value,q);for(const a of yes)assert(nodes.out.textContent.includes(a+' — '),l+': missing '+a+' in '+q);for(const a of no)assert(!nodes.out.textContent.includes(a+' — '),l+': false '+a+' in '+q);tests++;return nodes.out.textContent;};
 assert.equal(check(''),B.C[l].ui[2]);
 assert.equal(check('somewhere unlimited selection reunion'),B.C[l].ui[3]);
 check("SELECT 'JOIN WHERE GROUP BY' AS note; -- LIMIT 10",['SELECT'],['JOIN','WHERE','GROUP BY','LIMIT']);
 check('SELECT "where", `join`, [limit] FROM demo',['SELECT'],['WHERE','JOIN','LIMIT']);
 check('SELECT 1 /* WHERE /* JOIN */ LIMIT */',['SELECT'],['WHERE','JOIN','LIMIT']);
 check('SELECT $$ WHERE JOIN $$, $tag$ LIMIT $tag$',['SELECT'],['WHERE','JOIN','LIMIT']);
 check("SELECT 'it''s WHERE JOIN', E'can\\'t LIMIT'",['SELECT'],['WHERE','JOIN','LIMIT']);
 check('SELECT * FROM a LEFT\nJOIN b ON a.id=b.id WHERE a.id NOT\nIN (1,2) GROUP\nBY a.id HAVING COUNT(*)>1 ORDER\nBY a.id LIMIT 5',['SELECT *','SELECT','LEFT JOIN','JOIN','WHERE','NOT IN','GROUP BY','HAVING','ORDER BY','LIMIT']);
 check("SELECT name FROM a WHERE name LIKE /* comment */ '%demo'",['SELECT','WHERE','LIKE']);
 check("SELECT name FROM a WHERE name LIKE N'%demo'",['LIKE']);
 check("SELECT name FROM a WHERE name LIKE 'demo%'",['SELECT','WHERE'],['LIKE']);
 check("SELECT 'LIKE ''%demo''' AS note",['SELECT'],['LIKE']);
 check('SELECT 1 UNION ALL SELECT 2',['SELECT'],['UNION']);
 check('SELECT 1 UNION SELECT 2',['UNION']);
 check("SELECT '-- WHERE', '/* JOIN */'",['SELECT'],['WHERE','JOIN']);
 assert.equal(check('-- JOIN WHERE\n/* LIMIT */'),B.C[l].ui[3]);
 for(const q of ["SELECT 'unfinished",'SELECT /* unfinished','SELECT $tag$unfinished','SELECT [unfinished','SELECT "unfinished'])assert.equal(check(q),R.C[l].empty);
 const dangerous="SELECT '</script><img src=x onerror=alert(1)>'";check(dangerous,['SELECT']);assert(!nodes.out.textContent.includes('<img'));
 const guide=R.guide(l);assert(guide.includes('lang="'+R.LANG[l]+'"'));assert.equal((guide.match(/rel="alternate"/g)||[]).length,6);assert.equal((guide.match(/aria-current="page"/g)||[]).length,1);assert.equal((guide.match(/<section>/g)||[]).length,4);assert(!guide.includes('<script>'));
 for(const k of R.L)assert(guide.includes(R.guideRoute(k)));
}
const root=fs.mkdtempSync(path.join(os.tmpdir(),'sql-review-'));
const disk=u=>path.join(root,u.slice(1),u.endsWith('/')?'index.html':'');
function write(u,h){const f=disk(u);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,h);}
const homes={en:'/en/',pt:'/',es:'/es/',fr:'/fr/',de:'/de/'};
for(const l of R.L){for(let i=0;i<3;i++)write(B.route(l,B.S[i]),B.page(l,i));write(homes[l],'<html lang="'+R.LANG[l]+'"><body><form id="keep"><input name="x"></form><script>const untouched=true;</script><!--batch91-home:start--><div><p>Existing promotion</p></div><!--batch91-home:end--></body></html>');}
const original=new Map();function snapshot(dir){const m=new Map();function visit(d){for(const x of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,x.name);if(x.isDirectory())visit(f);else m.set(f,fs.readFileSync(f,'utf8'));}}visit(dir);return m;}
for(const [f,h] of snapshot(root))original.set(f,h);
const m=R.run(root);assert.equal(m.pagesChanged,25);const once=snapshot(root);R.run(root);assert.deepEqual(snapshot(root),once,'Not byte-idempotent');
for(const [f,h] of original){const after=fs.readFileSync(f,'utf8');assert.deepEqual(after.match(/<form\b[\s\S]*?<\/form>/g)||[],h.match(/<form\b[\s\S]*?<\/form>/g)||[]);for(const href of h.matchAll(/href="([^"]+)"/g))assert(after.includes(href[0]),'Lost href '+href[1]);assert.equal((after.match(/data-sql-review-link=/g)||[]).length,1);}
const failfile=disk('/de/technician-scheduler-ai/');fs.unlinkSync(failfile);const beforeFail=snapshot(root);assert.throws(()=>R.run(root),/Missing/);assert.deepEqual(snapshot(root),beforeFail,'Partial writes after failed preflight');
// Validate locale and redirect guards before publication.
write('/de/technician-scheduler-ai/',B.page('de',1));write('/de/sql-query-explainer/',B.page('en',0));const beforeLocale=snapshot(root);assert.throws(()=>R.run(root),/locale mismatch/);assert.deepEqual(snapshot(root),beforeLocale);
write('/de/sql-query-explainer/','<html lang="de"><meta http-equiv="refresh" content="0"></html>');assert.throws(()=>R.run(root),/Redirect/);
fs.rmSync(root,{recursive:true,force:true});
console.log('PASS SQL review: '+tests+' localized runtime cases; 5 guides; 25 scoped pages; form/href preservation; byte-idempotence; no-write preflight guards.');
