'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const {examine,reportMarkdown}=require('./ci-resolution-evidence.cjs');
const repo='Zion-support/zion-support.github.io';
const mk=(id,conclusion,created)=>({id,status:'completed',conclusion,created_at:created,updated_at:created,
  repository:{full_name:repo},workflow_id:3456,name:'Field Evidence Release Read-only QA',path:'.github/workflows/field-evidence.yml',
  head_branch:'main',head_sha:(id===101?'a':'b').repeat(40),html_url:'https://github.com/'+repo+'/actions/runs/'+id});
const fail=mk(101,'failure','2026-10-20T01:00:00Z');
const ok=mk(102,'success','2026-10-29T01:00:00Z');
const has=(o,code)=>assert.ok(examine(fail,o,repo).reasonCodes.includes(code));
test('same-workflow main successful later run is manual-review candidate only',()=>{
 const r=examine(fail,ok,repo);assert.equal(r.candidate,true);assert.equal(r.classification,'REVIEW_CANDIDATE');
 assert.match(reportMarkdown(r),/Manual owner must read/);assert.match(reportMarkdown(r),/Do not delete Gmail/);
});
test('wrong repository is not eligible',()=>has({...ok,repository:{full_name:'different/repo'}},'REPOSITORY_MISMATCH'));
test('different workflow is not eligible',()=>has({...ok,workflow_id:998},'WORKFLOW_ID_MISMATCH'));
test('renamed workflow file requires manual review',()=>has({...ok,path:'something-else.yml'},'WORKFLOW_DEFINITION_MISMATCH'));
test('PR branch cannot certify main publication',()=>has({...ok,head_branch:'feature'},'NON_MAIN_BRANCH'));
test('canceled check does not certify recovery',()=>has({...ok,conclusion:'cancelled'},'RECOVERY_NOT_SUCCESSFUL'));
test('in-progress job does not certify recovery',()=>has({...ok,status:'in_progress'},'RECOVERY_NOT_SUCCESSFUL'));
test('original green job is not a failure',()=>assert.ok(examine({...fail,conclusion:'success'},ok,repo).reasonCodes.includes('ORIGINAL_NOT_FAILED')));
test('older job cannot be recovery',()=>has({...ok,created_at:'2026-10-19T00:00:00Z'},'NOT_LATER_RUN'));
test('same run id is invalid',()=>has({...ok,id:101},'SAME_RUN_ID'));
test('invalid SHA fails closed',()=>has({...ok,head_sha:'untrusted'},'INVALID_HEAD_SHA'));
test('garbled response fails closed',()=>assert.equal(examine(null,ok,repo).candidate,false));
test('workflow name is sanitized before report',()=>{
 const r=examine({...fail,name:'X\n|<secret>'},{...ok,name:'X\n|<secret>'},repo);
 assert.equal(r.candidate,true);assert.doesNotMatch(reportMarkdown(r),/<secret>/);
});
