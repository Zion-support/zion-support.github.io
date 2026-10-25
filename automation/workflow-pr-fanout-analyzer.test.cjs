'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const {pullRequestTriggers,fanoutReport}=require('./workflow-pr-fanout-analyzer.cjs');

test('unfiltered pull_request trigger reports broad PR fan-out',()=>{
 const src="name: CI\n\"on\":\n  pull_request:\n    types: [opened, synchronize]\njobs:\n  ci:\n    steps:\n      - run: echo pass\n";
 assert.deepEqual(pullRequestTriggers(src),[{event:'pull_request',pathScope:'all-files'}]);
});
test('path-inclusion filtered PR is classified as targeted',()=>{
 const src="name: CI\n'on':\n  push:\n    branches: [main]\n  pull_request:\n    paths:\n      - 'automation/**'\n      - '.github/workflows/**'\n";
 assert.deepEqual(pullRequestTriggers(src),[{event:'pull_request',pathScope:'include-paths'}]);
});
test('paths-ignore is broad instead of a targeted include filter',()=>{
 const src="on:\n  pull_request:\n    paths-ignore:\n      - 'docs/**'\n";
 assert.deepEqual(pullRequestTriggers(src),[{event:'pull_request',pathScope:'exclude-only'}]);
});
test('explicit inline root lists and scalar PR events are recognized',()=>{
 assert.deepEqual(pullRequestTriggers('on: [push, pull_request, workflow_dispatch]\n'),
  [{event:'pull_request',pathScope:'all-files'}]);
 assert.deepEqual(pullRequestTriggers('on: pull_request\n'),[{event:'pull_request',pathScope:'all-files'}]);
});
test('pull_request_target is identified for human security review, not declared unsafe',()=>{
 const src="on:\n  pull_request_target:\n    types: [opened]\n";
 assert.deepEqual(pullRequestTriggers(src),[{event:'pull_request_target',pathScope:'all-files'}]);
});
test('inline mapping paths are recognized conservatively',()=>{
 const src="on:\n  pull_request: { paths: ['app/**'] }\n";
 assert.deepEqual(pullRequestTriggers(src),[{event:'pull_request',pathScope:'include-paths'}]);
});
test('irrelevant shell text, comments and schedule cannot create a false PR trigger',()=>{
 const src="name: Example\non:\n  schedule:\n    - cron: '*/15 * * * *'\njobs:\n  test:\n    steps:\n      - run: |\n          echo 'pull_request:'\n          echo 'paths:'\n# on: pull_request\n";
 assert.deepEqual(pullRequestTriggers(src),[]);
});
test('bounded report counts only declared PR event configurations, never billed minutes',()=>{
 const rows=[
  {file:'b.yml',events:[{event:'pull_request',pathScope:'include-paths'}]},
  {file:'a.yml',events:[{event:'pull_request',pathScope:'all-files'}]},
  {file:'c.yml',events:[{event:'pull_request',pathScope:'exclude-only'}]},
  {file:'d.yml',events:[{event:'pull_request_target',pathScope:'all-files'}]},
 ];
 const report=fanoutReport(rows,1);
 assert.deepEqual(report.triggers.pull_request,{allFiles:1,excludeOnly:1,includePaths:1});
 assert.equal(report.triggers.pull_request_target.allFiles,1);
 assert.equal(report.broadPullRequestExamples.length,1);
 assert.deepEqual(report.broadPullRequestExamples[0],{file:'a.yml',pathScope:'all-files'});
 assert.equal(report.broadPullRequestExamplesTruncated,1);
 assert.equal(report.pullRequestTargetReviewExamples.length,1);
 assert.match(report.methodology,/NOT actual PR runs/);
});
