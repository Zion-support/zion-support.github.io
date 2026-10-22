'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const {repairSource,validateRelativePath,validateLocalSourceFile,main}=require('./repair-jsonld-jsx.cjs');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const data='{"@context":"https://schema.org","@type":"Service","serviceType":"AI/IT","name":"Zion Service"}';
const line='<script type="application/ld+json">'+data+'</script>';
test('only raw valid Service JSON-LD JSX is transformed',()=>{
 const result=repairSource('  '+line+'\n');
 assert.equal(result.changed,1);
 assert.match(result.content,/dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(/);
 assert.ok(result.content.includes(data));
 assert.equal(result.skipped,0);
});
test('repair is idempotent',()=>{
 const once=repairSource(line),twice=repairSource(once.content);
 assert.equal(twice.changed,0);
 assert.equal(twice.content,once.content);
});
test('malformed JSON is not guessed or rewritten',()=>{
 const bad='<script type="application/ld+json">{"@type":"Service",}</script>';
 assert.equal(repairSource(bad).changed,0);
 assert.equal(repairSource(bad).content,bad);
});
test('unrelated scripts, proper React JSON-LD and non-Service JSON-LD untouched',()=>{
 const valid='<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({\"@type\":\"Service\"}) }} />';
 const nonService='<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person"}</script>';
 const ordinary='<script src="/scripts/product.js"></script>';
 assert.equal(repairSource([valid,nonService,ordinary].join('\n')).changed,0);
});
test('multiline prose, import statements and page title remain unchanged',()=>{
 const text='import Link from "next/link";\n\nexport default function Page(){\n  return (<main><h1>Zion Service</h1>\n    '+line+'\n  </main>);\n}\n';
 const result=repairSource(text);
 assert.equal(result.changed,1);
 assert.ok(result.content.startsWith('import Link from'));
 assert.ok(result.content.includes('<h1>Zion Service</h1>'));
});
test('multiple valid JSON-LD Service snippets are each repaired once',()=>{
 const r=repairSource(line+'\n'+line+'\n');
 assert.equal(r.changed,2);
 assert.equal((r.content.match(/dangerouslySetInnerHTML/g)||[]).length,2);
});
test('path validation is strictly constrained to generated public services pages',()=>{
 assert.ok(validateRelativePath('app/services/example-123/page.tsx').endsWith('/app/services/example-123/page.tsx'));
 for(const unsafe of ['../.github/workflows/watch.yml','app/page.tsx','app/services/../page.tsx',
  'app/services/example/secret.json','app\\services\\example\\page.tsx','app/services/example/page.tsx/other']){
  assert.throws(()=>validateRelativePath(unsafe));
 }
});
test('JSON-LD with a different context or top-level array cannot be repaired',()=>{
 const invalid=['{"@context":"https://evil.example","@type":"Service"}',
  '[{"@context":"https://schema.org","@type":"Service"}]'];
 for(const data of invalid){
  const content='<script type="application/ld+json">'+data+'</script>';
  assert.equal(repairSource(content).changed,0);
 }
});


test('unsafe raw HTML closers in JSON values are refused',()=>{
 for(const sample of ['</script><img src=x onerror=alert(1)>','<script>alert(1)</script>']){
  const json=JSON.stringify({'@context':'https://schema.org','@type':'Service',description:sample});
  const input='<script type="application/ld+json">'+json+'</script>';
  const result=repairSource(input);
  assert.equal(result.changed,0);
  assert.equal(result.content,input);
 }
 const encoded=JSON.stringify({'@context':'https://schema.org','@type':'Service',description:'<script'})
   .replace(/</g,'\\u003c');
 const input='<script type="application/ld+json">'+encoded+'</script>';
 assert.equal(repairSource(input).changed,0);
});
test('optional write mode refuses symlinks escaping generated service directory',()=>{
 const serviceBase=path.resolve(__dirname,'../app/services');
 const dir=fs.mkdtempSync(path.join(serviceBase,'jsonld-safe-fixture-'));
 const outsideDir=fs.mkdtempSync(path.join(os.tmpdir(),'jsonld-outside-'));
 const name=path.basename(dir);
 const rel='app/services/'+name+'/page.tsx';
 try {
  const target=path.join(dir,'page.tsx');
  fs.writeFileSync(target,'fixture text');
  assert.equal(validateLocalSourceFile(rel),target);
  fs.unlinkSync(target);
  const secret=path.join(outsideDir,'outside.txt');
  fs.writeFileSync(secret,'private fixture data');
  fs.symlinkSync(secret,target);
  assert.throws(()=>validateLocalSourceFile(rel));
 } finally {
  fs.rmSync(dir,{recursive:true,force:true});
  fs.rmSync(outsideDir,{recursive:true,force:true});
 }
});

test('write mode preflights all requested files before any first write',()=>{
 const serviceRoot=path.resolve(__dirname,'../app/services');
 const dir=fs.mkdtempSync(path.join(serviceRoot,'jsonld-preflight-'));
 const original='  <script type="application/ld+json">{"@context":"https://schema.org","@type":"Service"}</script>\n';
 const relative='app/services/'+path.basename(dir)+'/page.tsx';
 const file=path.join(dir,'page.tsx');
 const formerExit=process.exitCode,formerError=console.error;
 try{
  fs.writeFileSync(file,original);
  console.error=()=>{};
  main(['--write',relative,'app/services/../private.txt']);
  assert.equal(process.exitCode,2);
  assert.equal(fs.readFileSync(file,'utf8'),original);
  process.exitCode=formerExit;
  main(['--write',relative,relative]);
  assert.equal(process.exitCode,2);
  assert.equal(fs.readFileSync(file,'utf8'),original);
 }finally{
  process.exitCode=formerExit;
  console.error=formerError;
  fs.rmSync(dir,{recursive:true,force:true});
 }
});
