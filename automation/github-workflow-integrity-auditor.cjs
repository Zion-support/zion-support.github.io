'use strict';
// Local workflow integrity evidence, no Github API or private records.
const fs=require('node:fs'),path=require('node:path');
const ROOT=path.resolve(__dirname,'..');
const MAX_WORKFLOW_BYTES=256*1024, MAX_SCRIPT_BYTES=3000, MAX_WORKFLOWS=1000;
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
// Remove comments without changing strings; never evaluate inspected source.
function withoutJsComments(source) {
  let result='', i=source.startsWith('#!') ? source.indexOf('\n') : 0;
  if(i<0)return '';
  while(i<source.length) {
    const c=source[i];
    if(c==='"'||c==="'") {
      const start=i++, quote=c;
      let closed=false;
      while(i<source.length) {
        if(source[i]==='\\') {i+=2;continue;}
        if(source[i]===quote) {i++;closed=true;break;}
        if(source[i]==='\n'||source[i]==='\r')return null;
        i++;
      }
      if(!closed)return null;
      result+=source.slice(start,i);continue;
    }
    if(source.slice(i,i+2)==='//') {
      const end=source.indexOf('\n',i+2);i=end<0?source.length:end;continue;
    }
    if(source.slice(i,i+2)==='/*') {
      const end=source.indexOf('*/',i+2);if(end<0)return null;
      result+=source.slice(i,end+2).includes('\n')?'\n':' ';i=end+2;continue;
    }
    result+=c;i++;
  }
  return result;
}
function identifyNoopScript(scriptText) {
  if(Buffer.byteLength(scriptText,'utf8')>MAX_SCRIPT_BYTES)return false;
  let rest=withoutJsComments(scriptText), printedStub=false, statements=0;
  if(rest===null)return false;
  while((rest=rest.trimStart())) {
    const print=rest.match(/^(?:console\.(?:log|info|warn|error)|process\.(?:stdout|stderr)\.write)\s*\(\s*((?:"(?:[^"\\\r\n]|\\[^\r\n])*"|'(?:[^'\\\r\n]|\\[^\r\n])*'))\s*\)/);
    const directive=statements===0?rest.match(/^(?:"use strict"|'use strict')/):null;
    const exit=rest.match(/^process\.(?:exitCode\s*=\s*0\b|exit\s*\(\s*0\s*\))/);
    const match=print||directive||exit;
    if(!match)return false;
    if(print&&/\b(?:stub|not implemented|no-op)\b/i.test(print[1]))printedStub=true;
    rest=rest.slice(match[0].length);
    const end=rest.match(/^(?:[ \t]*;|[ \t]*\r?\n|[ \t]*$)/);
    if(!end)return false;
    rest=rest.slice(end[0].length);statements++;
  }
  return printedStub;
}
function workflowScriptDependencies(yaml) {
  const scripts=new Set();
  let blockIndent=-1, heredoc=null;
  function command(text) {
    const match=text.match(/^node\s+(?:'([^']+)'|"([^"]+)"|([^\s;&|<>]+))(?:\s|$)/);
    const script=match&&(match[1]||match[2]||match[3]);
    if(script&&/^(?:\.\/)?(?:automation\/|scripts\/automation\/)[A-Za-z0-9_./-]+\.(?:cjs|mjs|js)$/.test(script))scripts.add(script.replace(/^\.\//,''));
  }
  for(const line of yaml.split(/\r?\n/)) {
    const text=line.trim(), indent=line.length-line.trimStart().length;
    if(!text||text.startsWith('#'))continue;
    if(blockIndent>=0&&indent>blockIndent) {
      if(heredoc) {if(text===heredoc)heredoc=null;continue;}
      command(text);
      const here=text.match(/<<-?\s*['"]?([A-Za-z_][A-Za-z0-9_]*)['"]?/);
      if(here)heredoc=here[1];
      continue;
    }
    blockIndent=-1;heredoc=null;
    const run=line.match(/^(\s*)(?:-\s*)?run:\s*(.*)$/);
    if(!run)continue;
    if(/^[|>][+-]?(?:\s*#.*)?$/.test(run[2]))blockIndent=run[1].length;
    else command(run[2].trim());
  }
  return [...scripts];
}
function readBoundedSource(root,relative,maxBytes) {
  const parts=relative.split('/');
  if(path.isAbsolute(relative)||parts.some(p=>!p||p==='.'||p==='..'))return {reason:'unsafe-path'};
  // The Linux runner provides /proc/self/fd. Pin each directory before resolving
  // its child: O_NOFOLLOW on only the final path cannot stop ancestor swaps.
  const {O_RDONLY,O_NOFOLLOW,O_DIRECTORY,O_NONBLOCK}=fs.constants;
  if(process.platform!=='linux'||[O_NOFOLLOW,O_DIRECTORY,O_NONBLOCK].some(v=>v===undefined))
    return {reason:'safe-open-unavailable'};
  const directories=[];
  let fd;
  try {
    let directory=fs.openSync('/',O_RDONLY|O_DIRECTORY|O_NOFOLLOW);
    directories.push(directory);
    for(const part of [...path.resolve(root).split('/').filter(Boolean),...parts.slice(0,-1)]) {
      directory=fs.openSync(`/proc/self/fd/${directory}/${part}`,O_RDONLY|O_DIRECTORY|O_NOFOLLOW);
      directories.push(directory);
    }
    fd=fs.openSync(`/proc/self/fd/${directory}/${parts.at(-1)}`,O_RDONLY|O_NOFOLLOW|O_NONBLOCK);
    const opened=fs.fstatSync(fd);
    if(!opened.isFile())return {reason:'not-regular-file'};
    if(opened.size>maxBytes)return {reason:'source-size-limit'};
    const bytes=Buffer.alloc(maxBytes+1);
    let size=0, read;
    while(size<bytes.length&&(read=fs.readSync(fd,bytes,size,bytes.length-size,null))>0)size+=read;
    if(size>maxBytes)return {reason:'source-size-limit'};
    return {content:bytes.subarray(0,size).toString('utf8')};
  }catch(error){return {reason:({ENOENT:'missing',ELOOP:'symlink',ENOTDIR:'symlink-or-non-directory'})[error.code]||'unreadable'};}
  finally{
    if(fd!==undefined)fs.closeSync(fd);
    for(const directory of directories.reverse())fs.closeSync(directory);
  }
}
function audit(dir=path.join(ROOT,'.github/workflows')){
  const root=path.resolve(dir,'..','..');
  let directory=root;
  for(const part of path.relative(root,path.resolve(dir)).split(path.sep)) {
    directory=path.join(directory,part);
    const stat=fs.lstatSync(directory);
    if(stat.isSymbolicLink()||!stat.isDirectory())throw new Error('Workflow directory must use regular directories inside the audit root');
  }
  const files=fs.readdirSync(dir).filter(f=>/\.ya?ml$/i.test(f)).sort();
  const findings=[];
  if(files.length>MAX_WORKFLOWS)findings.push({severity:'warning',type:'workflow-count-limit',detail:'Workflow inventory exceeded bounded inspection limit'});
  for(const file of files.slice(0,MAX_WORKFLOWS)){
    const source=readBoundedSource(root,path.relative(root,path.join(dir,file)).split(path.sep).join('/'),MAX_WORKFLOW_BYTES);
    if(source.reason){findings.push({severity:'warning',type:'workflow-source-uninspected',file,reason:source.reason,detail:'Workflow source was not inspected'});continue;}
    const content=source.content;
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
    for (const script of workflowScriptDependencies(content)) {
      const source=readBoundedSource(root,script,MAX_SCRIPT_BYTES);
      if(source.reason){
        findings.push({severity:'warning',type:source.reason==='missing'?'missing-local-script':'local-script-uninspected',file,script,reason:source.reason,
          detail:source.reason==='missing'?'Literal script path is absent at repository root; review working-directory and generated-file context':'Literal script source was not inspected'});
        continue;
      }
      if (identifyNoopScript(source.content))
        findings.push({severity:'warning',type:'workflow-calls-successful-noop',file,
          script,detail:'Literal script contains only stub logging and optional success exits; expected operational effect is not evidenced'});
    }
  }
  const byType={};for(const finding of findings)byType[finding.type]=(byType[finding.type]||0)+1;
  return {generatedAt:new Date().toISOString(),status:findings.length?'needs_review':'healthy',workflowCount:files.length,counts:{totalFindings:findings.length,byType},findings:findings.slice(0,100),truncatedFindings:Math.max(0,findings.length-100),methodology:'Bounded static text checks only; literal node commands in run fields, interpreted at repository root; dynamic commands and npm indirection not modeled; no YAML semantic proof or runtime assurance; no source bodies in report'};
}
function main(){
 const report=audit(),dest=process.env.ZION_INTEGRITY_REPORT_PATH||path.join(ROOT,'automation/reports/github-workflow-integrity-audit-latest.json');
 fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({status:report.status,workflows:report.workflowCount,findings:report.counts.totalFindings}));
}
module.exports={audit,main,scheduledCrons,scheduledMinutesPerHour,identifyNoopScript,workflowScriptDependencies};
if(require.main===module)main();
