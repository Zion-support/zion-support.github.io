'use strict';
// Static schedule-pressure inventory. No network, secrets, prices, or write APIs.
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');
const {pullRequestTriggers,fanoutReport} = require('./workflow-pr-fanout-analyzer.cjs');
const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const WEEKDAYS = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const BOUNDS = [[0,59],[0,23],[1,31],[1,12],[0,7]];

function scalar(raw) {
  const s = raw.trim();
  if (s[0] === "'" || s[0] === '"') {
    const end = s.indexOf(s[0], 1);
    if (end <= 0) throw Error('unterminated quoted scalar');
    return s.slice(1,end).trim();
  }
  return s.split(/\s+#/)[0].trim();
}
function scheduleDetails(text) {
  let inOn = false, onIndent = -1, scheduleIndent = -1, last = null;
  const out = [];
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim(), indent = (line.match(/^ */) || [''])[0].length;
    if (!t || t.startsWith('#')) continue;
    if (indent === 0) {
      inOn = /^(?:on|"on"|'on')\s*:\s*(?:#.*)?$/.test(t);
      onIndent = inOn ? indent : -1;
      scheduleIndent = -1;
      last = null;
      continue;
    }
    if (!inOn || indent <= onIndent) continue;
    if (scheduleIndent >= 0 && indent <= scheduleIndent) { scheduleIndent = -1; last = null; }
    if (scheduleIndent < 0) {
      if (/^schedule\s*:\s*(?:#.*)?$/.test(t)) scheduleIndent = indent;
      continue;
    }
    const cron = t.match(/^-\s*cron\s*:\s*(.+)$/);
    if (cron) {last = {cron: scalar(cron[1]), timezone: 'UTC'}; out.push(last); continue;}
    const timezone = t.match(/^timezone\s*:\s*(.+)$/);
    if (timezone && last) last.timezone = scalar(timezone[1]);
  }
  return out;
}
function schedules(text) { return scheduleDetails(text).map(x => x.cron); }
function field(expr, min, max, names = []) {
  const values = new Set();
  for (const part of expr.toUpperCase().split(',')) {
    const named = part.replace(/[A-Z]{3}/g, name => {
      const pos = names.indexOf(name);
      if (pos < 0) throw Error('unknown named cron field: ' + name);
      return String(min + pos);
    });
    const m = named.match(/^(\*|\d+(?:-\d+)?)(?:\/(\d+))?$/);
    if (!m) throw Error('unsupported cron field: ' + part);
    const step = Number(m[2] || 1);
    if (!Number.isInteger(step) || step < 1) throw Error('invalid cron step');
    let from, to;
    if (m[1] === '*') [from, to] = [min, max];
    else if (m[1].includes('-')) [from, to] = m[1].split('-').map(Number);
    else {from = Number(m[1]); to = m[2] ? max : from;}
    if (from < min || to > max || from > to) throw Error('cron field out of bounds: ' + part);
    for (let n = from; n <= to; n += step) values.add(n);
  }
  return values;
}
function parseCron(expression) {
  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 5) throw Error('expected five cron fields');
  const values = parts.map((part,i) => field(part, ...BOUNDS[i], i === 3 ? MONTHS : i === 4 ? WEEKDAYS : []));
  if (values[4].delete(7)) values[4].add(0); // GitHub cron: both 0 and 7 represent Sunday.
  return {values, domRestricted: parts[2] !== '*', dowRestricted: parts[4] !== '*'};
}
function matchesDay(parsed, dom, dow) {
  const m = parsed.values[2].has(dom), w = parsed.values[4].has(dow);
  return parsed.domRestricted && parsed.dowRestricted ? m || w : m && w;
}
function estimate(expression, now = new Date(), timezone = 'UTC') {
  const parsed = parseCron(expression);
  const start = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  let count = 0;
  if (timezone === 'UTC' || timezone === 'Etc/UTC') {
    for (let i = 0; i < 30; i++) {
      const d = new Date(start + i * 86400000);
      if (parsed.values[3].has(d.getUTCMonth()+1) && matchesDay(parsed,d.getUTCDate(),d.getUTCDay()))
        count += parsed.values[0].size * parsed.values[1].size;
    }
    return count;
  }
  // Accurate for half-hour offsets and DST, over the same 30 UTC-day horizon.
  const fmt = new Intl.DateTimeFormat('en-US', {timeZone:timezone,year:'numeric',month:'numeric',day:'numeric',weekday:'short',hour:'numeric',minute:'numeric',hourCycle:'h23'});
  for (let t = start; t < start + 30*86400000; t += 60000) {
    const p = Object.fromEntries(fmt.formatToParts(new Date(t)).map(x => [x.type,x.value]));
    const dow = WEEKDAYS.indexOf(p.weekday.toUpperCase());
    if (parsed.values[0].has(Number(p.minute)) && parsed.values[1].has(Number(p.hour)) && parsed.values[3].has(Number(p.month)) && matchesDay(parsed,Number(p.day),dow)) count++;
  }
  return count;
}
// Find the smallest theoretical interval between UTC cron triggers over 30 days.
// Does not infer billed minutes or assume a job actually occupied its full timeout.
function minUtcScheduledGap(crons, start = new Date()) {
  const timestamps = new Set();
  const beginning=Date.UTC(start.getUTCFullYear(),start.getUTCMonth(),start.getUTCDate());
  for (const item of crons) {
    if (!['UTC','Etc/UTC'].includes(item.timezone)) continue;
    const parsed=parseCron(item.cron);
    const hours=[...parsed.values[1]].sort((a,b)=>a-b);
    const minutes=[...parsed.values[0]].sort((a,b)=>a-b);
    for (let day=0;day<30;day++) {
      const date=new Date(beginning+day*86400000);
      if (!parsed.values[3].has(date.getUTCMonth()+1) ||
          !matchesDay(parsed,date.getUTCDate(),date.getUTCDay())) continue;
      for (const hour of hours) for (const minute of minutes)
        timestamps.add(beginning+day*86400000+hour*3600000+minute*60000);
    }
  }
  const schedule=[...timestamps].sort((a,b)=>a-b);
  if (schedule.length < 2) return null;
  let min=Number.POSITIVE_INFINITY;
  for (let i=1;i<schedule.length;i++)
    min=Math.min(min,(schedule[i]-schedule[i-1])/60000);
  return Number.isFinite(min) ? min : null;
}
function overlapCandidate(yaml, now = new Date()) {
  const crons=scheduleDetails(yaml);
  if (!crons.length || crons.some(c=>!['UTC','Etc/UTC'].includes(c.timezone))) return null;
  // Conservative static heuristic: top-level or job-level concurrency declaration
  // counts as protected. This can miss per-job exposure; report is never an attestation.
  if (/^\s*concurrency\s*:/m.test(yaml)) return null;
  const declared=[...yaml.matchAll(/^\s*timeout-minutes:\s*(\d+)\b/gm)].map(m=>Number(m[1]));
  const maxTimeout=Math.max(0,...declared);
  if (maxTimeout < 1) return null;
  const gap=minUtcScheduledGap(crons,now);
  if (gap === null || maxTimeout <= gap) return null;
  return {minScheduledGapMinutes:gap,maxDeclaredTimeoutMinutes:maxTimeout,
    risk:'possible-overlapping-runs-without-declared-concurrency',
    limits:'Static schedule+timeout upper-bound; no observed job durations or actual concurrent work'};
}
function inventory(directory = path.join(ROOT,'.github/workflows'), now = new Date()) {
  const files = fs.readdirSync(directory).filter(x => /\.ya?ml$/i.test(x)).sort();
  const items = [], invalid = [], concurrencyCandidates = [], pullRequestRecords = [];
  for (const file of files) {
    const yaml=fs.readFileSync(path.join(directory,file),'utf8');
    const prEvents=pullRequestTriggers(yaml);
    if (prEvents.length) pullRequestRecords.push({file,events:prEvents});
    const details=scheduleDetails(yaml);
    if (!details.length) continue;
    try {
      const candidate=overlapCandidate(yaml,now);
      if (candidate) concurrencyCandidates.push({file,...candidate});
    } catch (error) {
      invalid.push({file,reason:'concurrency-heuristic-failed',message:error.message});
    }
    const crons = [];
    for (const detail of details) {
      try {crons.push({...detail, opportunities30d:estimate(detail.cron,now,detail.timezone)});}
      catch (error) {invalid.push({file, ...detail, error:error.message});}
    }
    items.push({file,opportunities30d:crons.reduce((n,x)=>n+x.opportunities30d,0),crons});
  }
  items.sort((a,b) => b.opportunities30d-a.opportunities30d || a.file.localeCompare(b.file));
  return {
    generatedAt:now.toISOString(),
    model:'Static cron trigger opportunities over next 30 UTC calendar days. NOT observed job runs, billed runner minutes, or actual money. Multiple crons may overlap; schedules may be delayed/dropped.',
    workflowsScanned:files.length,scheduledWorkflows:items.length,
    scheduledOpportunities30d:items.reduce((n,x)=>n+x.opportunities30d,0),
    highFrequency:items.filter(x=>x.opportunities30d>720),invalid,top25:items.slice(0,25),
    scheduleOverlapCandidates:concurrencyCandidates.sort((a,b)=>a.minScheduledGapMinutes-b.minScheduledGapMinutes).slice(0,50),
    totalScheduleOverlapCandidates:concurrencyCandidates.length,
    pullRequestFanout:fanoutReport(pullRequestRecords),
  };
}
function main() {
  const output = inventory();
  const dest = process.env.ZION_GHA_REPORT_PATH || path.join(ROOT,'automation/reports/gha-workflow-cost-estimate-latest.json');
  fs.mkdirSync(path.dirname(dest),{recursive:true});
  fs.writeFileSync(dest,JSON.stringify(output,null,2)+'\n');
  console.log(JSON.stringify({workflowsScanned:output.workflowsScanned,scheduledWorkflows:output.scheduledWorkflows,scheduledOpportunities30d:output.scheduledOpportunities30d,highFrequency:output.highFrequency.length,overlapCandidates:output.totalScheduleOverlapCandidates,unfilteredPullRequests:output.pullRequestFanout.triggers.pull_request.allFiles,excludeOnlyPullRequests:output.pullRequestFanout.triggers.pull_request.excludeOnly,invalid:output.invalid.length}));
  if (output.invalid.length) process.exitCode=1;
}
module.exports = {scalar,scheduleDetails,schedules,field,parseCron,estimate,minUtcScheduledGap,overlapCandidate,inventory,main};
if(require.main === module) main();
