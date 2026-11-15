'use strict';
// Persist only the freshly measured public snapshot, with optimistic concurrency.
const fs = require('node:fs');
const relative = 'public/api/automation-health.json';
async function main(){
  const token=process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if(!token)throw new Error('Missing GitHub token');
  if(process.env.GITHUB_REF!=='refs/heads/main')throw new Error('Snapshot publication requires main');
  const repo=process.env.GITHUB_REPOSITORY;
  const headers={'Accept':'application/vnd.github+json','Authorization':`Bearer ${token}`,'Content-Type':'application/json','User-Agent':'Zion-health-snapshot'};
  const endpoint=`https://api.github.com/repos/${repo}/contents/${relative}`;
  const current=await fetch(endpoint+'?ref=main',{headers,signal:AbortSignal.timeout(30000)});
  if(!current.ok)throw new Error(`Read snapshot: HTTP ${current.status}`);
  const existing=await current.json();
  const content=fs.readFileSync(relative);
  const snapshot=JSON.parse(content);
  const age=Date.now()-Date.parse(snapshot.timestamp);
  if(!Array.isArray(snapshot.routes)||snapshot.routes.length===0||!Number.isFinite(age)||age<0||age>600000)throw new Error('Refusing to publish an unmeasured or stale snapshot');
  const update=await fetch(endpoint,{method:'PUT',headers,signal:AbortSignal.timeout(30000),body:JSON.stringify({message:'chore(health): refresh measured production snapshot',branch:'main',sha:existing.sha,content:content.toString('base64')})});
  if(!update.ok)throw new Error(`Update snapshot: HTTP ${update.status}; no retry after uncertain write`);
  const result=await update.json();
  console.log(`Persisted snapshot: ${result.commit.sha}`);
  const dispatch=await fetch(`https://api.github.com/repos/${repo}/actions/workflows/static-deploy.yml/dispatches`,{method:'POST',headers,signal:AbortSignal.timeout(30000),body:JSON.stringify({ref:'main',inputs:{note:'Measured health snapshot refresh'}})});
  if(!dispatch.ok)throw new Error(`Publish dispatch: HTTP ${dispatch.status}; saved snapshot requires deployment`);
  console.log('Production deployment requested; deployed freshness is verified separately.');
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
