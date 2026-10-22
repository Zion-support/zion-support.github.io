'use strict';
// Local workflow integrity evidence, no Github API or private records.
const fs=require('node:fs'),path=require('node:path');
const ROOT=path.resolve(__dirname,'..');
// Inspect the on.schedule YAML block; shell text mentioning "cron:" is not a trigger.
function scheduledCrons(content) {
  let on=false, scheduleIndent=-1;
  const crons=[];
  for (const line of content.split(/\r?\n/)) {
    const text=line.trim(), indent=(line.match(/^ */)||[''])[0].length;
    if (!text || text.startsWith('#')) continue;
    if (indent === 0) {
      on=/^(?:on|"on"|'on')\s*:\s*(?:#.*)?$/.test(text);
      scheduleIndent=-1;
      continue;
    }
    if (!on) continue;
    if (scheduleIndent>=0 && indent<=scheduleIndent) scheduleIndent=-1;
    if (scheduleIndent<0) {
      if (/^schedule\s*:\s*(?:#.*)?$/.test(text)) scheduleIndent=indent;
      continue;
    }
    const found=text.match(/^-\s*cron\s*:\s*(.+)$/);
    if (found) crons.push(found[1].split(/\s+#/)[0].trim().replace(/^['"]|['"]$/g,''));
  }
  return crons;
}
function scheduledMinutesPerHour(expression) {
  const fields=expression.trim().split(/\s+/);
  if (fields.length!==5) return 0;
  const minutes=new Set();
  for (const part of fields[0].split(',')) {
    const m=part.match(/^(\*|\d+(?:-\d+)?)(?:\/(\d+))?$/);
    if (!m) return 0;
    const step=Number(m[2]||1);
    if (!Number.isInteger(step)||step<1) return 0;
    let from,to;
    if (m[1]==='*') {from=0;to=59;}
    else if (m[1].includes('-')) [from,to]=m[1].split('-').map(Number);
    else {from=Number(m[1]);to=m[2]?59:from;}
    if (from<0||to>59||from>to) return 0;
    for (let minute=from;minute<=to;minute+=step) minutes.add(minute);
  }
  return minutes.size;
}
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
    if(!/^(?:"on"|'on'|on)\s*:/m.test(content))findings.push({severity:'warning',type:'missing-trigger',file,detail:'No top-level event trigger found'});
    if(!/^permissions\s*:/m.test(content))findings.push({severity:'warning',type:'implicit-permissions',file,detail:'Explicit permissions not found'});
    if(scheduledCrons(content).some(cron=>scheduledMinutesPerHour(cron)>1))
      findings.push({severity:'warning',type:'high-frequency',file,detail:'on.schedule has multiple triggers per eligible hour'});
  }
  return {generatedAt:new Date().toISOString(),status:findings.length?'needs_review':'healthy',workflowCount:files.length,counts:{totalFindings:findings.length},findings:findings.slice(0,100),truncatedFindings:Math.max(0,findings.length-100),methodology:'Bounded static text checks only; no YAML semantic proof, no runtime assurance, no personal data'};
}
function main(){
 const report=audit(),dest=process.env.ZION_INTEGRITY_REPORT_PATH||path.join(ROOT,'automation/reports/github-workflow-integrity-audit-latest.json');
 fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({status:report.status,workflows:report.workflowCount,findings:report.counts.totalFindings}));
}
module.exports={audit,main,scheduledCrons,scheduledMinutesPerHour};
if(require.main===module)main();
