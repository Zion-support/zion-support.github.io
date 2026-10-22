'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {schedules,field,estimate}=require('./gha-workflow-cost-estimator.cjs');
const monday=new Date('2026-10-19T15:00:00Z');
test('only nested on.schedule crons are considered',()=>{
 const yaml='name: Sample\n"on":\n  schedule:\n    - cron: \'0 8 * * *\'\n  workflow_dispatch:\njobs:\n  run:\n    steps:\n      - run: echo cron';
 assert.deepEqual(schedules(yaml),['0 8 * * *']);
});
test('hourly and 10-minute schedules reflect 30-day pressure',()=>{
 assert.equal(estimate('0 * * * *',monday),720);
 assert.equal(estimate('*/10 * * * *',monday),4320);
 assert.equal(estimate('0 8 * * *',monday),30);
});
test('day-of-week and DOM cron OR rules and bounds',()=>{
 assert.equal(estimate('0 8 1 * 1',monday),6);
 assert.deepEqual([...field('10-20/5',0,59)],[10,15,20]);
 assert.throws(()=>estimate('61 * * * *',monday));
 assert.throws(()=>estimate('* * * *',monday));
});
