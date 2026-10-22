'use strict';
// Local workflow integrity evidence, no Github API or private records.
const fs=require('node:fs'),path=require('node:path');
const ROOT=path.resolve(__dirname,'..');
function audit(dir=path.join(ROOT,'.github/workflows')){
  const files=fs.readdirSync(dir).filter(f=>/\.ya?ml$/i.test(f)).sort();
  const findings=[];
  for(const file of files){
    const content=fs.readFileSync(path.join(dir,file),'utf8');
    const lines=content.split(/\r?\n/);
    const actions=lines.map((line,i)=>({line,i:i+1})).filter(x=>/^\s*-\s*uses:\s*/.test(x.line));
    for(const {line,i} of actions){
      const match=line.match(/^\s*-\s*uses:\s*([^\s#]+)/);
      if(!match)continue;
      const ref=match[1];
      if(ref.startsWith('./')||ref.startsWith('docker://'))continue;
      if(!/@[a-fA-F0-9]{40}$/.test(ref))findings.push({severity:'warning',type:'action-not-sha-pinned',file,line:i,detail:'Action reference is not pinned to a 40-character commit SHA'});
    }
    // Precise anchors; a partial output is not proof of any runtime behavior.
    if(!/^\s*(?:"on"|'on'|on)\s*:/m.test(content))findings.push({severity:'warning',type:'missing-trigger',file,detail:'No top-level event trigger found'});
    if(!/^\s*permissions\s*:/m.test(content))findings.push({severity:'warning',type:'implicit-permissions',file,detail:'Explicit permissions not found'});
    const schedule=content.match(/cron:\s*['"]?(\*\/(?:5|10|15)\s+\*\s+\*\s+\*\s+\*)/);
    if(schedule)findings.push({severity:'warning',type:'high-frequency',file,detail:'Cron runs more frequently than hourly'});
  }
  return {generatedAt:new Date().toISOString(),status:findings.length?'needs_review':'healthy',workflowCount:files.length,counts:{totalFindings:findings.length},findings:findings.slice(0,100),truncatedFindings:Math.max(0,findings.length-100),methodology:'Bounded static text checks only; no YAML semantic proof, no runtime assurance, no personal data'};
}
function main(){
 const report=audit(),dest=process.env.ZION_INTEGRITY_REPORT_PATH||path.join(ROOT,'automation/reports/github-workflow-integrity-audit-latest.json');
 fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({status:report.status,workflows:report.workflowCount,findings:report.counts.totalFindings}));
}
module.exports={audit,main};
if(require.main===module)main();
