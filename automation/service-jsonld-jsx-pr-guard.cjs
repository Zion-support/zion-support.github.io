'use strict';
/**
 * Zero-dependency, read-only pull-request guard for malformed JSON-LD JSX.
 * Reads ONLY changed service pages. No raw page contents or secrets in logs.
 */
const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const ROOT=path.resolve(__dirname,'..');
const SHA=/^[a-fA-F0-9]{40}$/;
const PAGE=/^app\/services\/(?:[a-zA-Z0-9_.-]+\/)+page\.tsx$/;
// React JSX cannot embed a bare JSON object in a <script> child. Proper
// dangerouslySetInnerHTML tags and valid {JSON.stringify(...)} are untouched.
const JSON_LD=/<script\b(?=[^>]*\btype\s*=\s*["']application\/ld\+json["'])[^>]*[^\/]>([\s\S]*?)<\/script\s*>/gi;
const RAW_OBJECT=/^\s*\{\s*"[^"\r\n]+"\s*:/;

function inspectPage(source){
  const findings=[];
  JSON_LD.lastIndex=0;
  let match;
  while((match=JSON_LD.exec(source))!==null) {
    if(!RAW_OBJECT.test(match[1]))continue;
    const line=source.slice(0,match.index).split('\n').length;
    findings.push({line,rule:'raw-json-ld-jsx-object'});
  }
  return findings;
}
function changedFiles(base,head,repo=ROOT,exec=execFileSync){
  if(!SHA.test(base||'')||!SHA.test(head||''))throw Error('exact-commit-shas-required');
  const stdout=exec('git',['-C',repo,'diff','--no-ext-diff','--name-only','--diff-filter=ACMR',
    '-z',base,head,'--','app/services'],{encoding:'utf8',maxBuffer:4*1024*1024});
  return stdout.split('\0').filter(Boolean).filter(f=>PAGE.test(f));
}
function inspectFiles(files,root=ROOT){
  const findings=[];
  for(const filename of files){
    if(!PAGE.test(filename))throw Error('unsafe-path');
    const absolute=path.resolve(root,filename);
    const real=fs.realpathSync(absolute);
    if(!real.startsWith(path.resolve(root,'app/services')+path.sep))throw Error('symlink-outside-root');
    if(fs.statSync(real).size>2*1024*1024)throw Error('oversized-source');
    for(const issue of inspectPage(fs.readFileSync(real,'utf8')))
      findings.push({path:filename,...issue});
  }
  return {status:findings.length?'blocked':'pass',
    pagesScanned:files.length,issuesFound:findings.length,findings};
}
function main(){
  let report;
  try{
    const base=process.env.PR_BASE_SHA,head=process.env.PR_HEAD_SHA;
    report=inspectFiles(changedFiles(base,head));
  }catch(error){
    // Do not echo arbitrary git stderr, source, or environment variable values.
    console.error('JSON-LD JSX guard could not verify PR diff ('+error.name+').');
    process.exitCode=2;return;
  }
  console.log('JSON-LD JSX PR guard: '+report.status+
    ', changed service pages='+report.pagesScanned+', findings='+report.issuesFound);
  for(const item of report.findings.slice(0,30))
    console.log('::error file='+item.path+',line='+item.line+'::'+item.rule);
  if(report.issuesFound>30)console.log((report.issuesFound-30)+' further file/line findings omitted');
  if(report.issuesFound)process.exitCode=1;
}
module.exports={inspectPage,changedFiles,inspectFiles,main};
if(require.main===module)main();
