'use strict';
// Conservative static PR-event classifier. No GitHub API, tokens, network or shell.
const SUPPORTED = new Set(['pull_request','pull_request_target']);

function normalizeEvent(raw) {
  return raw.trim().replace(/^['"]|['"]$/g,'');
}
function inlineEvents(value) {
  const text=value.replace(/\s+#.*$/,'').trim();
  if (!text) return [];
  if (text.startsWith('[') && text.endsWith(']'))
    return text.slice(1,-1).split(',').map(normalizeEvent).filter(v=>SUPPORTED.has(v));
  const name=normalizeEvent(text);
  return SUPPORTED.has(name)?[name]:[];
}
function pullRequestTriggers(yaml) {
  const found=[];
  const emit=(name,scope='all-files')=>{
    if (!SUPPORTED.has(name)) return null;
    const data={event:name,pathScope:scope};
    found.push(data);
    return data;
  };
  let on=false, level=null, active=null;
  for (const line of yaml.split(/\r?\n/)) {
    const t=line.trim();
    if (!t || t.startsWith('#')) continue;
    const indent=(line.match(/^ */)||[''])[0].length;
    if (indent===0) {
      const m=t.match(/^(?:on|"on"|'on')\s*:\s*(.*)$/);
      on=Boolean(m);
      level=null;
      active=null;
      if (m) {
        for (const event of inlineEvents(m[1])) emit(event);
      }
      continue;
    }
    if (!on) continue;
    const key=t.match(/^([a-z_][a-z0-9_-]*)\s*:\s*(.*)$/i);
    if (level===null && key) level=indent;
    if (indent===level) {
      active=null;
      if (!key) continue;
      const event=key[1];
      if (!SUPPORTED.has(event)) continue;
      const inline=key[2]||'';
      const scope=/\bpaths\s*:/.test(inline)?'include-paths':
        /\bpaths-ignore\s*:/.test(inline)?'exclude-only':'all-files';
      active=emit(event,scope);
    } else if (active && level!==null && indent>level && key) {
      if (key[1]==='paths') active.pathScope='include-paths';
      else if (key[1]==='paths-ignore' && active.pathScope!=='include-paths')
        active.pathScope='exclude-only';
    }
  }
  return found;
}
function fanoutReport(records, maxExamples=30) {
  const byEvent={pull_request:{allFiles:0,excludeOnly:0,includePaths:0},
    pull_request_target:{allFiles:0,excludeOnly:0,includePaths:0}};
  const example=[],target=[];
  for(const {file,events} of records) {
    for(const e of events) {
      const section=byEvent[e.event];
      if(!section) continue;
      if(e.pathScope==='include-paths') section.includePaths++;
      else if(e.pathScope==='exclude-only') section.excludeOnly++;
      else section.allFiles++;
      if(e.event==='pull_request_target') target.push({file,pathScope:e.pathScope});
      else if(e.pathScope!=='include-paths') example.push({file,pathScope:e.pathScope});
    }
  }
  example.sort((a,b)=>a.file.localeCompare(b.file));
  target.sort((a,b)=>a.file.localeCompare(b.file));
  return {
    methodology:'Heuristic inspection of top-level on: pull_request/pull_request_target YAML. Counts defined trigger configurations, NOT actual PR runs, costs or vulnerability; inline object and YAML alias handling is incomplete.',
    triggers:byEvent,
    broadPullRequestExamples:example.slice(0,maxExamples),
    broadPullRequestExamplesTruncated:Math.max(0,example.length-maxExamples),
    pullRequestTargetReviewExamples:target.slice(0,maxExamples),
    pullRequestTargetExamplesTruncated:Math.max(0,target.length-maxExamples),
  };
}
module.exports={pullRequestTriggers,fanoutReport};
