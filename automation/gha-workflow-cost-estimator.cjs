'use strict';
// Free, dependency-free static GitHub Actions schedule pressure report.
// This estimates cron opportunities, not actual runs, charges or runner minutes.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
function schedules(s){
  const lines=s.split(/\r?\n/);let inOn=false,inSchedule=false,indent=0,out=[];
  for(const line of lines){
    const t=line.trim(),n=(line.match(/^ */)||[''])[0].length;
    if(!t||t.startsWith('#'))continue;
    if(n===0){inOn=/^(?:on|"on"|'on')\s*:\s*$/.test(t);inSchedule=false;continue;}
    if(!inOn)continue;
    if(inSchedule&&n<=indent)inSchedule=false;
    if(!inSchedule&&/^schedule\s*:\s*$/.test(t)){inSchedule=true;indent=n;continue;}
    if(inSchedule){const m=t.match(/^-\s*cron\s*:\s*['"]?([^'"]+)['"]?\s*$/);if(m)out.push(m[1].trim());}
  }return out;
}
function field(s,min,max){
  let set=new Set();
  for(const part of s.split(',')){
    const m=part.match(/^(\*|\d+(?:-\d+)?)(?:\/(\d+))?$/);
    if(!m)throw Error('unsupported cron field');
    const step=Number(m[2]||1);if(step<1)throw Error('invalid step');
    let a,b;
    if(m[1]==='*'){a=min;b=max;}else if(m[1].includes('-')){[a,b]=m[1].split('-').map(Number);}
    else{a=Number(m[1]);b=m[2]?max:a;}
    if(a<min||b>max||a>b)throw Error('invalid range');
    for(let i=a;i<=b;i+=step)set.add(i);
  }return set;
}
function estimate(cron,now=new Date()){
  const f=cron.split(/\s+/);
  if(f.length!==5)throw Error('expected 5 UTC cron fields');
  const [mi,ho,day,mo,dow]=f.map((v,i)=>field(v,...[[0,59],[0,23],[1,31],[1,12],[0,7]][i]));
  if(dow.delete(7))dow.add(0);
  const start=Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate());
  let n=0;
  for(let i=0;i<30;i++){
    const d=new Date(start+i*86400000);
    if(!mo.has(d.getUTCMonth()+1))continue;
    const dom=day.has(d.getUTCDate()),week=dow.has(d.getUTCDay());
    if(!(f[2]!=='*'&&f[4]!=='*'?(dom||week):(dom&&week)))continue;
    n+=mi.size*ho.size;
  }return n;
}
function main(){
  const dir=path.join(root,'.github/workflows');
  const files=fs.readdirSync(dir).filter(x=>/\.ya?ml$/i.test(x));
  const items=[],invalid=[];
  for(const file of files){
    const crons=schedules(fs.readFileSync(path.join(dir,file),'utf8'));
    if(!crons.length)continue;
    const entries=[];
    for(const cron of crons){try{entries.push({cron,opportunities30d:estimate(cron)});}catch(e){invalid.push({file,cron,error:e.message});}}
    items.push({file,opportunities30d:entries.reduce((n,e)=>n+e.opportunities30d,0),crons:entries});
  }
  items.sort((a,b)=>b.opportunities30d-a.opportunities30d);
  const output={generatedAt:new Date().toISOString(),model:'static UTC cron opportunities over 30 calendar days; NOT observed jobs, billed minutes or USD cost',workflowsScanned:files.length,scheduledWorkflows:items.length,scheduledOpportunities30d:items.reduce((n,e)=>n+e.opportunities30d,0),highFrequency:items.filter(x=>x.opportunities30d>720),invalid,top25:items.slice(0,25)};
  const dest=process.env.ZION_GHA_REPORT_PATH||path.join(root,'automation/reports/gha-workflow-cost-estimate-latest.json');
  fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,JSON.stringify(output,null,2)+'\n');
  console.log(JSON.stringify({workflowsScanned:output.workflowsScanned,scheduledWorkflows:output.scheduledWorkflows,scheduledOpportunities30d:output.scheduledOpportunities30d,highFrequency:output.highFrequency.length,invalid:invalid.length}));
  if(invalid.length)process.exitCode=1;
}
module.exports={schedules,field,estimate,main};
if(require.main===module)main();
