'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {schedules,scheduleDetails,field,estimate,minUtcScheduledGap,overlapCandidate}=require('./gha-workflow-cost-estimator.cjs');
const monday=new Date('2026-10-19T15:00:00Z');
test('only on.schedule crons, including timezone and inline comments',()=>{
 const yaml='name: Example\n"on":\n  schedule:\n    - cron: \'0 8 * * 1-5\' # weekdays\n      timezone: "America/Sao_Paulo"\n    - cron: "0 9 * * *"\n  workflow_dispatch:\njobs:\n  run:\n    steps:\n      - run: echo cron';
 assert.deepEqual(schedules(yaml),['0 8 * * 1-5','0 9 * * *']);
 assert.deepEqual(scheduleDetails(yaml),[{cron:'0 8 * * 1-5',timezone:'America/Sao_Paulo'},{cron:'0 9 * * *',timezone:'UTC'}]);
});
test('hourly and ten-minute schedules reflect 30-day pressure',()=>{
 assert.equal(estimate('0 * * * *',monday),720);
 assert.equal(estimate('*/10 * * * *',monday),4320);
 assert.equal(estimate('0 8 * * *',monday),30);
});
test('weekday, named fields, DOM/DOW OR and field bounds',()=>{
 assert.equal(estimate('0 8 1 * MON',monday),6);
 assert.equal(estimate('0 8 * * 7',monday),4); // Sunday may be 0 or 7.
 assert.deepEqual([...field('10-20/5',0,59)],[10,15,20]);
 assert.equal(estimate('30 9 * JAN MON',new Date('2026-01-01T00:00:00Z')),4);
 assert.throws(()=>estimate('61 * * * *',monday));
 assert.throws(()=>estimate('* * * *',monday));
});
test('timezone-aware schedule counts real local calendar opportunities',()=>{
 assert.equal(estimate('0 8 * * *',monday,'America/Sao_Paulo'),30);
 assert.equal(estimate('30 7 * * MON-FRI',monday,'America/Sao_Paulo'),22);
 assert.throws(()=>estimate('0 8 * * *',monday,'Fake/Nowhere'));
});

test('unserialized five-minute worker with 25-minute timeout is a review candidate',()=>{
 const yaml=[
  'name: outreach worker','"on":','  schedule:',"    - cron: '*/5 * * * *'",
  'jobs:','  outreach:','    timeout-minutes: 25',''
 ].join('\n');
 const risk=overlapCandidate(yaml,monday);
 assert.equal(risk.minScheduledGapMinutes,5);
 assert.equal(risk.maxDeclaredTimeoutMinutes,25);
 assert.equal(risk.risk,'possible-overlapping-runs-without-declared-concurrency');
});
test('declared concurrency and short jobs are not overlap candidates',()=>{
 const noGuard='name: probe\non:\n  schedule:\n    - cron: "*/15 * * * *"\njobs:\n  probe:\n    timeout-minutes: 8\n';
 assert.equal(overlapCandidate(noGuard,monday),null);
 const guarded=noGuard.replace('jobs:\n','concurrency:\n  group: watch\n  cancel-in-progress: false\njobs:\n').replace('timeout-minutes: 8','timeout-minutes: 25');
 assert.equal(overlapCandidate(guarded,monday),null);
});
test('multiple scheduled hours are considered without claiming observed overlap',()=>{
 const patterns=[{cron:'0 * * * *',timezone:'UTC'},{cron:'30 * * * *',timezone:'UTC'}];
 assert.equal(minUtcScheduledGap(patterns,monday),30);
 const weekly=[{cron:'0 8 * * MON',timezone:'UTC'}];
 assert.equal(minUtcScheduledGap(weekly,monday),10080);
});
test('unknown or timezone-specific schedules avoid unsupported overlap claims',()=>{
 const yaml='name: timezone\n"on":\n  schedule:\n    - cron: "*/5 * * * *"\n      timezone: "America/Sao_Paulo"\njobs:\n  job:\n    timeout-minutes: 25\n';
 assert.equal(overlapCandidate(yaml,monday),null);
});
