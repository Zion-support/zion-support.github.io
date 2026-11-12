'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {audit}=require('./github-workflow-integrity-auditor.cjs');
const {identifyNoopScript,workflowScriptDependencies}=require('./github-workflow-integrity-auditor.cjs');
test('static audit produces real bounded findings without network',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-'));
 try{
  fs.writeFileSync(path.join(dir,'unsafe.yml'),"name: unsafe\non:\n  schedule:\n    - cron: '*/10 * * * *'\njobs:\n  test:\n    steps:\n      - uses: actions/checkout@v4\n");
  const report=audit(dir);
  assert.equal(report.workflowCount,1);
  assert.equal(report.status,'needs_review');
  assert.ok(report.findings.some(x=>x.type==='action-not-sha-pinned'));
  assert.ok(report.findings.some(x=>x.type==='implicit-permissions'));
  assert.ok(report.findings.some(x=>x.type==='high-frequency'));
 } finally {fs.rmSync(dir,{recursive:true,force:true});}
});
test('weekly schedule containing a shell cron string is not high frequency',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-'));
 try {
  const yaml=[
   'name: smoke',
   'on:',
   '  schedule:',
   "    - cron: '15 12 * * 3'",
   'permissions:',
   '  contents: read',
   'jobs:',
   '  check:',
   '    steps:',
   "      - run: grep -Fq 'cron: */10 * * * *' workflow.yml",
   ''
  ].join('\n');
  fs.writeFileSync(path.join(dir,'weekly.yml'),yaml);
  const result=audit(dir);
  assert.equal(result.findings.filter(x=>x.type==='high-frequency').length,0);
 } finally {fs.rmSync(dir,{recursive:true,force:true});}
});
test('two actual triggers in the same hour are flagged',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-'));
 try {
  fs.writeFileSync(path.join(dir,'twice.yml'),"name: twice\n'on':\n  schedule:\n    - cron: '0,30 * * * *'\npermissions:\n  contents: read\n");
  assert.equal(audit(dir).findings.filter(x=>x.type==='high-frequency').length,1);
 } finally {fs.rmSync(dir,{recursive:true,force:true});}
});

test('a workflow depending on a success-returning no-op helper is flagged',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-noop-'));
 try{
  const wfDir=path.join(root,'.github','workflows');
  const scriptDir=path.join(root,'scripts','automation');
  fs.mkdirSync(wfDir,{recursive:true});
  fs.mkdirSync(scriptDir,{recursive:true});
  fs.writeFileSync(path.join(scriptDir,'gh-issue-dedupe-or-create.cjs'),
    "process.stderr.write('stub: not implemented\\n');\nprocess.exitCode = 0;\n");
  fs.writeFileSync(path.join(wfDir,'guard.yml'), [
    'name: guard','"on":','  workflow_dispatch:','permissions:','  contents: read',
    'jobs:','  test:','    steps:','      - run: |',
    '          node scripts/automation/gh-issue-dedupe-or-create.cjs || true',''
  ].join('\n'));
  const r=audit(wfDir);
  const found=r.findings.filter(f=>f.type==='workflow-calls-successful-noop');
  assert.equal(found.length,1,JSON.stringify(r.findings));
  assert.equal(found[0].script,'scripts/automation/gh-issue-dedupe-or-create.cjs');
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('real helper and commented references never produce a no-op warning',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-noop-'));
 try{
  const wfDir=path.join(root,'.github','workflows');
  const scriptDir=path.join(root,'scripts','automation');
  fs.mkdirSync(wfDir,{recursive:true}); fs.mkdirSync(scriptDir,{recursive:true});
  fs.writeFileSync(path.join(scriptDir,'real.cjs'),"console.log('checked');\n");
  fs.writeFileSync(path.join(wfDir,'guard.yml'), [
    'name: guard','on:','  workflow_dispatch:','permissions:','  contents: read','jobs:',
    '  check:','    steps:','      - run: |',
    '          node scripts/automation/real.cjs',
    '          # node scripts/automation/gh-issue-dedupe-or-create.cjs',''
  ].join('\n'));
  assert.equal(audit(wfDir).findings.filter(f=>f.type==='workflow-calls-successful-noop').length,0);
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});

test('SHA-pinned workflow with explicit permissions is accepted',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-'));
 try{
  fs.writeFileSync(path.join(dir,'safe.yml'),"name: safe\n\"on\":\n  workflow_dispatch:\npermissions:\n  contents: read\njobs:\n  test:\n    steps:\n      - uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd\n");
  const report=audit(dir);
  assert.equal(report.status,'healthy');
  assert.equal(report.counts.totalFindings,0);
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});

test('PR auditor tests cannot supersede the scheduled integrity report',()=>{
 const yaml=fs.readFileSync(path.resolve(__dirname,'../.github/workflows/ai-github-workflow-integrity-audit-daily.yml'),'utf8');
 assert.ok(yaml.includes("format('pr-{0}', github.event.pull_request.number)"));
 assert.ok(yaml.includes("|| 'production'"));
 assert.match(yaml,/cancel-in-progress:\s*false/);
 assert.match(yaml,/persist-credentials:\s*false/);
 assert.match(yaml,/cron:\s*'17 13 \* \* \*'/);
});

function withFixture(run,files={}) {
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-fixture-'));
 const wfDir=path.join(root,'.github','workflows');
 try {
  fs.mkdirSync(wfDir,{recursive:true});
  fs.mkdirSync(path.join(root,'automation'),{recursive:true});
  for(const [file,content] of Object.entries(files)) {
   const target=path.join(root,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content);
  }
  return run(root,wfDir);
 }finally{fs.rmSync(root,{recursive:true,force:true});}
}
function workflow(commands) {
 return ['name: fixture','on:','  workflow_dispatch:','permissions:','  contents: read',
  'jobs:','  audit:','    steps:','      - run: |',...commands.map(c=>'          '+c),''].join('\n');
}
test('implicit-success logging-only placeholders are recognized without executing them',()=>{
 for(const source of [
  'console.log("stub: automation/check.cjs no-op - automation paused post-P0");\n',
  "#!/usr/bin/env node\n'use strict';\n/* note */ console.warn('not implemented'); // paused\n",
  "console.log('stub')\nprocess.exit(0)\n",
  "process.stderr.write('stub: not implemented\\n');process.exitCode = 0;"
 ])assert.equal(identifyNoopScript(source),true,source);
});
test('real work, throwing placeholders and text-only mentions are not successful no-ops',()=>{
 for(const source of [
  "// stub\nconsole.log('completed');process.exit(0);",
  "console.log('stub');require('node:fs').writeFileSync('output','done');process.exit(0);",
  "console.log('stub');process.exit(1);",
  "console.log('stub');throw new Error('not implemented');",
  "console.log(`stub ${doWork()}`);",
  "console.log('stub') + doWork();",
  "console.log('stub')console.log('stub');",
  "console.log('stub');/* unfinished",
  "console.log('stub');"+' '.repeat(3000)
 ])assert.equal(identifyNoopScript(source),false,source.slice(0,120));
});
test('literal node commands are collected only from run fields with bounded syntax',()=>{
 const yaml=[
  'name: node automation/not-a-command.cjs',
  'description: |','  node automation/not-a-command.cjs',
  ...workflow([
   'node automation/implicit.cjs',
   'node "./scripts/automation/explicit.js" --no-fail',
   "node 'automation/module.mjs'",
   '# node automation/comment.cjs',
   'echo node automation/quoted.cjs',
   'node "$SCRIPT"',
   'node automation/$(command).cjs',
   "cat <<'TEXT'",'node automation/heredoc.cjs','TEXT'
  ]).split('\n'),
  '      - run: node automation/inline.cjs'
 ].join('\n');
 assert.deepEqual(workflowScriptDependencies(yaml),[
  'automation/implicit.cjs','scripts/automation/explicit.js','automation/module.mjs','automation/inline.cjs'
 ]);
});
test('audit reports missing literal scripts and both implicit and explicit placeholder sources',()=>{
 withFixture((root,wfDir)=>{
  fs.writeFileSync(path.join(wfDir,'audit.yml'),workflow([
   'node automation/implicit.cjs', 'node scripts/automation/explicit.cjs',
   'node automation/absent.cjs','node automation/implicit.cjs'
  ]));
  const result=audit(wfDir);
  assert.equal(result.status,'needs_review');
  assert.equal(result.counts.byType['workflow-calls-successful-noop'],2);
  assert.equal(result.counts.byType['missing-local-script'],1);
  assert.equal(result.counts.totalFindings,3);
  assert.ok(!JSON.stringify(result).includes('do not copy this text'));
 },{
  'automation/implicit.cjs':"console.log('stub: do not copy this text');",
  'scripts/automation/explicit.cjs':"process.stderr.write('not implemented');process.exitCode=0;"
 });
});
test('traversal, script symlinks, ancestor symlinks and non-files are reported without reading',()=>{
 withFixture((root,wfDir)=>{
  const outside=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-outside-'));
  try {
   fs.writeFileSync(path.join(outside,'secret.cjs'),"console.log('stub: OUTSIDE_SECRET');");
   fs.symlinkSync(path.join(outside,'secret.cjs'),path.join(root,'automation','link.cjs'));
   fs.symlinkSync(outside,path.join(root,'automation','linked-dir'));
   fs.mkdirSync(path.join(root,'automation','directory.cjs'));
   fs.writeFileSync(path.join(wfDir,'paths.yml'),workflow([
    'node automation/../../secret.cjs','node automation/link.cjs',
    'node automation/linked-dir/secret.cjs','node automation/directory.cjs'
   ]));
   const result=audit(wfDir);
   assert.deepEqual(result.findings.map(f=>f.reason).sort(),['not-regular-file','symlink','symlink','unsafe-path']);
   assert.equal(result.counts.byType['workflow-calls-successful-noop'],undefined);
   assert.ok(!JSON.stringify(result).includes('OUTSIDE_SECRET'));
  }finally{fs.rmSync(outside,{recursive:true,force:true});}
 });
});
test('oversized sources and workflow symlinks remain explicitly uninspected',()=>{
 withFixture((root,wfDir)=>{
  fs.writeFileSync(path.join(root,'automation','large.cjs'),"console.log('stub');"+' '.repeat(3001));
  fs.writeFileSync(path.join(wfDir,'script.yml'),workflow(['node automation/large.cjs']));
  fs.writeFileSync(path.join(wfDir,'large.yml'),'#'.repeat(256*1024+1));
  fs.symlinkSync(path.join(wfDir,'script.yml'),path.join(wfDir,'link.yml'));
  const result=audit(wfDir);
  assert.equal(result.counts.byType['workflow-source-uninspected'],2);
  assert.equal(result.counts.byType['local-script-uninspected'],1);
  assert.equal(result.findings.find(f=>f.file==='link.yml').reason,'symlink');
 });
});
test('symlinked workflow directories cannot cause external directory scanning',()=>{
 withFixture((root,wfDir)=>{
  fs.renameSync(wfDir,wfDir+'-real');fs.symlinkSync(wfDir+'-real',wfDir);
  assert.throws(()=>audit(wfDir),/regular directories/);
 });
});
test('bounded report retains aggregate findings when evidence list is truncated',()=>{
 withFixture((root,wfDir)=>{
  fs.writeFileSync(path.join(wfDir,'missing.yml'),workflow(Array.from({length:105},(_,i)=>`node automation/missing-${i}.cjs`)));
  const result=audit(wfDir);
  assert.equal(result.counts.totalFindings,105);
  assert.equal(result.counts.byType['missing-local-script'],105);
  assert.equal(result.findings.length,100);
  assert.equal(result.truncatedFindings,5);
 });
});
