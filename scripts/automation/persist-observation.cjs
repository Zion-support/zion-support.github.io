'use strict';
const fs=require('node:fs');
const allowed=new Set(['automation/reports/incident-suppression-registry-latest.json','automation/reports/autonomous-opportunity-radar-latest.json','automation/reports/autonomous-idea-guarded-cycle-latest.json']);
async function main(){
  const file=process.argv[2];
  if(!allowed.has(file))throw new Error('Report path is not allowed');
  if(process.env.GITHUB_REF!=='refs/heads/main')throw new Error('Report persistence requires main');
  const token=process.env.GH_TOKEN||process.env.GITHUB_TOKEN;
  if(!token)throw new Error('Missing GitHub token');
  const content=fs.readFileSync(file), report=JSON.parse(content);
  const age=Date.now()-Date.parse(report.generatedAt||report.executedAt);
  if(!Number.isFinite(age)||age<0||age>600000)throw new Error('Refusing to persist a stale report');
  const endpoint=`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/contents/${file}`;
  const headers={'Accept':'application/vnd.github+json','Authorization':`Bearer ${token}`,'Content-Type':'application/json','User-Agent':'Zion-observations'};
  for(let attempt=0;attempt<3;attempt++){
    const current=await fetch(endpoint+'?ref=main',{headers,signal:AbortSignal.timeout(30000)});
    if(!current.ok&&current.status!==404)throw new Error(`Read report: HTTP ${current.status}`);
    const existing=current.ok?await current.json():{};
    const result=await fetch(endpoint,{method:'PUT',headers,signal:AbortSignal.timeout(30000),body:JSON.stringify({message:`chore(reports): refresh ${file.split('/').at(-1)}`,branch:'main',sha:existing.sha,content:content.toString('base64')})});
    if(result.status===409&&attempt<2)continue; // An explicit conflict did not apply the write.
    if(!result.ok)throw new Error(`Persist report: HTTP ${result.status}`);
    console.log(`Persisted ${file}: ${(await result.json()).commit.sha}`);return;
  }
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
