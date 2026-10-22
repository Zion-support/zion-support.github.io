'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {schedules,scheduleDetails,field,estimate}=require('./gha-workflow-cost-estimator.cjs');
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
