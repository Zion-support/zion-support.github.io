'use strict';
const fs=require('node:fs');
const {execFileSync}=require('node:child_process');
const git=(...args)=>execFileSync('git',args,{encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:2*1024*1024}).trim();
async function main(){
  if(process.env.GITHUB_REF!=='refs/heads/main')throw new Error('Content publication requires main');
  const mode=process.argv[2];
  if(!['daily','ultra','services'].includes(mode))throw new Error('Unknown editorial mode');
  const reportFile=`automation/reports/editorial-${mode}-latest.json`;
  const report=JSON.parse(fs.readFileSync(reportFile,'utf8'));
  if(report.status!=='generated'||!report.files.length)throw new Error('No generated content to publish');
  const exact=new Set(['public/blog/index.html','public/blog/automation-publications.json','public/sitemap.xml','public/sitemap-editorial.xml']);
  for(const file of report.files)if(!exact.has(file)&&!/^public\/blog\/[a-z0-9-]+\/index\.html$/.test(file))throw new Error('Unexpected generated file path');
  if(git('diff','--cached','--name-only'))throw new Error('Refusing to mix unrelated staged changes');
  git('config','user.name','github-actions[bot]');
  git('config','user.email','41898282+github-actions[bot]@users.noreply.github.com');
  git('add','-f','--',...report.files);
  const staged=git('diff','--cached','--name-only').split('\n').filter(Boolean);
  if(!staged.length)throw new Error('Generated files did not produce a commit');
  if(staged.some(file=>!report.files.includes(file)))throw new Error('Unrelated staged file');
  git('commit','-m',`feat(content): publish ${report.generated.length} ${mode} practical guide(s)`);
  let pushed=false;
  for(let attempt=0;attempt<3;attempt++){
    try{git('push','origin','HEAD:refs/heads/main');pushed=true;break;}
    catch(error){
      // Verify the remote after a possibly ambiguous push before attempting another.
      git('fetch','origin','main');
      try{git('merge-base','--is-ancestor',git('rev-parse','HEAD'),'origin/main');pushed=true;break;}catch{}
      if(attempt===2)throw new Error('Content push failed after verified retries; local commit retained');
      git('rebase','origin/main');
    }
  }
  if(!pushed)throw new Error('Content was not pushed');
  report.publishedCommit=git('rev-parse','HEAD');
  const token=process.env.GH_TOKEN||process.env.GITHUB_TOKEN;
  if(process.env.TRIGGER_DEPLOY!=='0'){
    if(!token)throw new Error('Missing token for production dispatch');
    const response=await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/actions/workflows/static-deploy.yml/dispatches`,{
      method:'POST',headers:{'Authorization':`Bearer ${token}`,'Accept':'application/vnd.github+json','Content-Type':'application/json','User-Agent':'Zion-editorial'},
      signal:AbortSignal.timeout(30000),body:JSON.stringify({ref:'main',inputs:{note:`Validated editorial publication: ${mode}`}})});
    if(!response.ok)throw new Error(`Content committed but deployment dispatch failed: HTTP ${response.status}`);
    report.deployment='requested';
  }else report.deployment='not_requested';
  fs.writeFileSync(reportFile,JSON.stringify(report,null,2)+'\n');
  console.log(`Published commit ${report.publishedCommit}; deployment ${report.deployment}`);
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
