'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const workflow=fs.readFileSync(path.join(__dirname,'../.github/workflows/ai-pm2-static-checks.yml'),'utf8');

test('PR runs have per-number queues separate from production',()=>{
 const group=workflow.match(/^\s*group:\s*(ai-pm2-static-checks-.+)$/m);
 assert.ok(group,'a unique PM2 concurrency expression must exist');
 assert.match(group[1],/github\.event_name == 'pull_request'/);
 assert.match(group[1],/format\('pr-\{0\}', github\.event\.pull_request\.number\)/);
 assert.match(group[1],/\|\| 'production'/);
 assert.doesNotMatch(group[1],/github\.sha/);
});
test('only superseded PR checks may be cancelled; mainline is protected',()=>{
 assert.match(workflow,/^\s*cancel-in-progress:\s*\$\{\{ github\.event_name == 'pull_request' \}\}\s*$/m);
 assert.ok(!workflow.includes('cancel-in-progress: true'));
});
test('the existing event scope is unchanged; no new scheduled jobs',()=>{
 assert.match(workflow,/\n"on":\n\s*pull_request:/);
 assert.match(workflow,/\n\s*push:\n\s*branches: \[main\]/);
 assert.match(workflow,/\n\s*workflow_dispatch:/);
 assert.doesNotMatch(workflow,/\n\s*schedule:/);
 assert.doesNotMatch(workflow,/\bcron:/);
});
test('PM2 drift, ecosystem, AI lab, app lint and TypeScript gates remain',()=>{
 for(const required of [
   'npm run pm2:drift-guard:once',
   'npm run ecosystem:validate-scripts',
   'npm run validate:pm2-singleton-ecosystem',
   'npm run validate:ai-lab-route-contract',
   'npm run pm2:report-budget:once',
   'npx eslint app components',
   'npm run type-check',
 ]) assert.ok(workflow.includes(required),'missing existing validation: '+required);
});
test('new contract test runs after setup-node but before PM2 drift',()=>{
 const setup=workflow.indexOf('- name: Setup Node.js');
 const own=workflow.indexOf('- name: Verify CI concurrency');
 const pm2=workflow.indexOf('- name: PM2 config drift guard');
 assert.ok(setup>=0 && setup<own && own<pm2);
 assert.match(workflow,/node --test automation\/pm2-ci-concurrency\.test\.cjs/);
});
test('existing report budget distinctions and permissions remain',()=>{
 assert.match(workflow,/\npermissions:\n\s*contents: read\n\s*pull-requests: write\n\s*issues: write\n/);
 assert.match(workflow,/\n\s*if: github\.event_name == 'pull_request'\n\s*env:\n\s*PM2_REPORT_BUDGET_FAIL_ON_EXCEED: '0'/);
 assert.match(workflow,/\n\s*if: github\.event_name != 'pull_request'\n\s*run: npm run pm2:report-budget:once/);
});
