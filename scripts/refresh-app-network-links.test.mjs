import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {catalogRoutes,injectBlock,ringNavigation,improveHomepage,refresh} from './refresh-app-network-links.mjs';
const document = body => '<!doctype html><html><body>'+body+'</body></html>';
const card = (route,label=route) => `<div class="card"><h3><a href="${route}">${label}</a></h3></div>`;
function fixture(t, n=70) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(),'zion-network-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const put = (route,s) => {const file=path.join(root,route,'index.html');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,s);return file;};
  const routes=Array.from({length:n},(_,i)=>`/app-${i}/`);
  put('/apps-network/',document(routes.map(r=>card(r)).join('')));
  for (const r of routes) put(r,document('<main>Existing content</main><script>const untouched = true;</script>'));
  for (const r of ['/free-discovery-guide/','/cloud-reliability-guide/','/first-ai-pilot/']) put(r,document('<h1>Real guide</h1>'));
  put('/',document('57 apps. Your data stays in your browser.'));
  return {root,put,routes,read:r=>fs.readFileSync(path.join(root,r,'index.html'),'utf8')};
}
test('extract real headings, deduplicate and reject traversal/external inputs',()=>{
  assert.equal(catalogRoutes(card('/a/')+card('/b/')+card('/a/')).length,2);
  assert.throws(()=>catalogRoutes(card('/../secret/')+card('/b/')),/Unsafe/);
  assert.throws(()=>catalogRoutes(card('//evil.test/x/')+card('/b/')),/Unsafe/);
  assert.throws(()=>catalogRoutes(card('/a/')),/at least two/);
});
test('injected block is idempotent and preserves surrounding bytes',()=>{
  const source=document('<script>const x = "keep";</script>');
  const result=injectBlock(source,'network-navigation','<nav>Links</nav>');
  assert.equal(injectBlock(result,'network-navigation','<nav>Links</nav>'),result);
  assert.ok(result.includes('<script>const x = "keep";</script>'));
  assert.throws(()=>injectBlock('no body','network-navigation','x'),/closing body/);
  assert.throws(()=>injectBlock(document('<!-- zion-x:start -->'),'x','x'),/Malformed/);
  assert.throws(()=>injectBlock(document('<!-- zion-x:end --><!-- zion-x:start -->'),'x','x'),/Reversed/);
});
test('ring navigation escapes labels and links to real fallback destinations',()=>{
  const entries=[{route:'/a/',label:'<b>&'},{route:'/b/',label:'B'}];
  const markup=ringNavigation(entries,1,'es','/apps-network/');
  assert.ok(markup.includes('&lt;b&gt;&amp;'));
  assert.ok(markup.includes('href="/es/a/"'));
  assert.ok(markup.includes('cuestionario en portugués'));
  assert.ok(markup.includes('href="/free-discovery-guide/"'));
});
test('70 synthetic app pages form a connected cycle; repeat changes nothing',t=>{
  const f=fixture(t);const result=refresh(f.root);
  assert.equal(result.catalogEntries,70);
  for(let i=0;i<f.routes.length;i++) {
    const output=f.read(f.routes[i]);
    assert.ok(output.includes('href="'+f.routes[(i+1)%70]+'" rel="next"'));
    assert.ok(output.includes('<main>Existing content</main><script>const untouched = true;</script>'));
    assert.equal(output.split('data-zion-network-nav').length-1,1);
  }
  const visited=new Set();let i=0;
  while(!visited.has(i)){visited.add(i);i=(i+1)%70;}
  assert.equal(visited.size,70);assert.equal(i,0);
  assert.equal(refresh(f.root).changedFiles,0);
});
test('missing listed source fails before writes and never creates placeholder',t=>{
  const f=fixture(t,3);const home=f.read('/');
  fs.rmSync(path.join(f.root,'app-1'),{recursive:true});
  assert.throws(()=>refresh(f.root),/Missing listed/);
  assert.equal(f.read('/'),home);assert.ok(!fs.existsSync(path.join(f.root,'app-1')));
  assert.ok(!f.read('/app-0/').includes('data-zion-network-nav'));
});
test('existing localized pages get a ring; missing translations are not invented',t=>{
  const f=fixture(t,3);f.put('/pt/app-0/',document('PT zero'));f.put('/pt/app-1/',document('PT one'));
  const result=refresh(f.root);assert.equal(result.localizedPages,2);
  assert.ok(f.read('/pt/app-0/').includes('href="/pt/app-1/"'));
  assert.ok(f.read('/pt/app-0/').includes('href="/apps-network/"'));
  assert.ok(!fs.existsSync(path.join(f.root,'pt/app-2')));
});
test('symlink escape and malformed source body fail without rewriting files',t=>{
  const f=fixture(t,3);const outside=fs.mkdtempSync(path.join(os.tmpdir(),'zion-outside-'));
  t.after(()=>fs.rmSync(outside,{recursive:true,force:true}));
  fs.writeFileSync(path.join(outside,'index.html'),document('private'));
  fs.rmSync(path.join(f.root,'app-1'),{recursive:true});fs.symlinkSync(outside,path.join(f.root,'app-1'));
  assert.throws(()=>refresh(f.root),/Symlink/);
  assert.equal(fs.readFileSync(path.join(outside,'index.html'),'utf8'),document('private'));
});
test('homepage repair keeps embedded growth content and does not alter paid links',()=>{
  const growth='<section><h2>Existing growth content</h2><a href="/existing/">Read</a></section>';
  const source=document('<a class="btn" href="/discovery/">🚀 Start Free Discovery\n'+growth+'\n Now →</a><a href="https://buy.stripe.com/keep">Paid</a>57 apps Your data stays in your browser.');
  const output=improveHomepage(source,70);
  assert.ok(output.includes('🚀 Start Free Discovery Now →</a>\n'+growth));
  assert.ok(output.includes('https://buy.stripe.com/keep'));
  assert.ok(!output.includes('57 apps'));assert.ok(!output.includes('Your data stays in your browser.'));
  assert.equal(improveHomepage(output,70),output);
});
