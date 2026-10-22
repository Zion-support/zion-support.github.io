'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {inspectPage,changedFiles,inspectFiles}=require('./service-jsonld-jsx-pr-guard.cjs');
const raw='<main>\n  <script type="application/ld+json">{"@context":"https://schema.org","@type":"Service"}</script>\n</main>';
test('reports raw JSX JSON-LD object and its line without leaking source',()=>{
 const result=inspectPage(raw);
 assert.deepEqual(result,[{line:2,rule:'raw-json-ld-jsx-object'}]);
 assert.ok(!JSON.stringify(result).includes('schema.org'));
});
test('proper dangerouslySetInnerHTML and JSX JSON stringify expressions pass',()=>{
 const good=[
 '<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org"}) }} />',
 '<script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org"})}</script>',
 ].join('\n');
 assert.deepEqual(inspectPage(good),[]);
});
test('ordinary scripts and HTML prose do not count',()=>{
 assert.deepEqual(inspectPage('<script src="/app.js"></script>\n<p>Terms</p>'),[]);
});
test('detects multiple raw objects across different script quoting styles',()=>{
 const x='<script type=\'application/ld+json\'>{"@type":"Service"}</script>\n\n'+raw;
 assert.deepEqual(inspectPage(x),[{line:1,rule:'raw-json-ld-jsx-object'},{line:4,rule:'raw-json-ld-jsx-object'}]);
});
test('changed-file detection uses only exact SHAs and an argument-only git invocation',()=>{
 const base='a'.repeat(40),head='b'.repeat(40);
 let seen;
 const mock=(cmd,args,options)=>{
  seen={cmd,args,options};
  return 'app/services/example/page.tsx\0app/page.tsx\0app/services/other/readme.md\0';
 };
 assert.deepEqual(changedFiles(base,head,'/repo',mock),['app/services/example/page.tsx']);
 assert.equal(seen.cmd,'git');
 assert.ok(seen.args.includes('--no-ext-diff') && seen.args.includes('--diff-filter=ACMR'));
 assert.ok(seen.args.includes('-z'));
 assert.throws(()=>changedFiles('main',head,'/repo',mock));
 assert.throws(()=>changedFiles(base,'HEAD','/repo',mock));
});
test('reads only a service page beneath repository root; reports file and line only',()=>{
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-jsonld-'));
 try{
  const relative='app/services/example/page.tsx',full=path.join(tmp,relative);
  fs.mkdirSync(path.dirname(full),{recursive:true});
  fs.writeFileSync(full,raw);
  const r=inspectFiles([relative],tmp);
  assert.equal(r.status,'blocked');
  assert.equal(r.pagesScanned,1);
  assert.equal(r.issuesFound,1);
  assert.deepEqual(r.findings,[{path:relative,line:2,rule:'raw-json-ld-jsx-object'}]);
  assert.ok(!JSON.stringify(r).includes('schema.org'));
 }finally{fs.rmSync(tmp,{recursive:true,force:true});}
});
test('rejects unsafe input paths without reading external files',()=>{
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-jsonld-'));
 try{
  assert.throws(()=>inspectFiles(['../../private.env'],tmp));
  assert.throws(()=>inspectFiles(['app/services/../page.tsx'],tmp));
  assert.throws(()=>inspectFiles(['app/blog/example/page.tsx'],tmp));
 }finally{fs.rmSync(tmp,{recursive:true,force:true});}
});
test('safe service file and empty PR diff produce clean decisions',()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-jsonld-'));
 try{
  const f=path.join(temp,'app/services/safe/page.tsx');
  fs.mkdirSync(path.dirname(f),{recursive:true});
  fs.writeFileSync(f,'<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({}) }} />');
  assert.deepEqual(inspectFiles(['app/services/safe/page.tsx'],temp).status,'pass');
  assert.equal(inspectFiles([],temp).pagesScanned,0);
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});


test('property order cannot bypass raw JSON-LD detection',()=>{
 const html='<script type="application/ld+json">{"name":"Broken","@type":"Service","@context":"https://schema.org"}</script>';
 assert.deepEqual(inspectPage(html),[{line:1,rule:'raw-json-ld-jsx-object'}]);
});
test('a previously fixed self-closing script cannot hide a following invalid script',()=>{
 const html='<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"name":"Safe"}) }} />\n'+
   '<script type="application/ld+json">{"name":"Broken"}</script>';
 assert.deepEqual(inspectPage(html),[{line:2,rule:'raw-json-ld-jsx-object'}]);
});
test('a link to an outside-root file cannot make the guard inspect private data',()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-jsonld-link-'));
 const outside=fs.mkdtempSync(path.join(os.tmpdir(),'zion-jsonld-private-'));
 try{
  const dir=path.join(temp,'app/services/example');
  fs.mkdirSync(dir,{recursive:true});
  const secret=path.join(outside,'secret.tsx');
  fs.writeFileSync(secret,raw);
  fs.symlinkSync(secret,path.join(dir,'page.tsx'));
  assert.throws(()=>inspectFiles(['app/services/example/page.tsx'],temp));
 }finally{fs.rmSync(temp,{recursive:true,force:true});fs.rmSync(outside,{recursive:true,force:true});}
});
test('PR workflow only scans changed service pages and has no schedule or write permissions',()=>{
 const yaml=fs.readFileSync(path.join(__dirname,'../.github/workflows/service-jsonld-jsx-pr-guard.yml'),'utf8');
 assert.match(yaml,/pull_request:\s*\n\s*paths:/);
 assert.match(yaml,/app\/services\/\*\*\/page\.tsx/);
 assert.match(yaml,/permissions:\s*\n\s*contents:\s*read/);
 assert.match(yaml,/persist-credentials:\s*false/);
 assert.match(yaml,/PR_BASE_SHA:/);
 assert.match(yaml,/PR_HEAD_SHA:/);
 assert.doesNotMatch(yaml,/\n\s*schedule:/);
 assert.doesNotMatch(yaml,/\n\s*issues:\s*write/);
});


test('nested merge-conflict markers on service pages are rejected with line-only evidence',()=>{
 const page=[
  '<<<<<<< HEAD','<<<<<<< HEAD',
  'import type { Metadata } from "next";',
  '=======','>>>>>>> a37db',
  '=======','>>>>>>> 39bf07ce',
  ''
 ].join('\n');
 assert.deepEqual(inspectPage(page),[1,2,4,5,6,7].map(line=>({
  line,rule:'unresolved-merge-conflict-marker'
 })));
 assert.ok(!JSON.stringify(inspectPage(page)).includes('39bf07ce'));
});
test('merge-looking strings and comments cannot trigger a false conflict finding',()=>{
 const page=[
  "const text = '<<<<<<< HEAD';",
  '// >>>>>>> explanatory example',
  "const separator = '=======';",
  '  // =======',
  ''
 ].join('\n');
 assert.deepEqual(inspectPage(page),[]);
});
test('raw JSON-LD and conflict marker errors have stable line order',()=>{
 const page='<<<<<<< HEAD\n'+raw+'\n=======\n>>>>>>> abcdef';
 const found=inspectPage(page);
 assert.deepEqual(found.map(x=>x.line),[1,3,5,6]);
 assert.deepEqual(found.map(x=>x.rule),[
  'unresolved-merge-conflict-marker','raw-json-ld-jsx-object',
  'unresolved-merge-conflict-marker','unresolved-merge-conflict-marker'
 ]);
});
test('changed service page with only conflict markers blocks the guard',()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-conflict-'));
 try {
  const page=path.join(temp,'app/services/example/page.tsx');
  fs.mkdirSync(path.dirname(page),{recursive:true});
  fs.writeFileSync(page,'<<<<<<< HEAD\nexport default function Page() {}\n=======\n>>>>>>> other\n');
  const result=inspectFiles(['app/services/example/page.tsx'],temp);
  assert.equal(result.status,'blocked');
  assert.equal(result.issuesFound,3);
  assert.ok(result.findings.every(x=>x.rule==='unresolved-merge-conflict-marker'));
 } finally {fs.rmSync(temp,{recursive:true,force:true});}
});
