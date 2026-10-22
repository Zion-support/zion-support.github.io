'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { INCIDENT_TITLE, decideIncident, buildIssueBody, isVerifiedRegression } = require('./pages-watchdog-incident.cjs');
const bad = { routes_checked: 12, routes_broken: 3, checked_at: '2026-10-22T18:00:00Z', routes: [{url:'https://example.com/private?key=secret'}] };
const actionUrl = 'https://github.com/Zion-support/zion-support.github.io/actions/runs/12345';
test('valid verified regression creates exactly one incident', () => {
  assert.equal(decideIncident(bad, []).action, 'create');
});
test('one broken route is not a threshold regression', () => {
  assert.equal(decideIncident({...bad, routes_broken: 1}, []).action, 'skip');
  assert.equal(decideIncident(undefined, []).action, 'skip');
  assert.equal(decideIncident({...bad, checked_at: 'garbage'}, []).action, 'skip');
});
test('matches previously created legacy date-based open issue', () => {
  const existing={state:'open',number:71386,title:INCIDENT_TITLE+' - 2026-09-20'};
  assert.deepEqual(decideIncident(bad,[existing]),{action:'existing',issueNumber:71386});
});
test('matches canonical open incident', () => {
  assert.equal(decideIncident(bad,[{state:'open',number:1,title:INCIDENT_TITLE}]).action,'existing');
});
test('ignores closed issues and PRs with incident title', () => {
  const list=[{state:'closed',number:1,title:INCIDENT_TITLE},{state:'open',number:2,title:INCIDENT_TITLE,pull_request:{url:'https://github.com'}}];
  assert.equal(decideIncident(bad,list).action,'create');
});
test('other open incidents cannot suppress true Pages incidents', () => {
  assert.equal(decideIncident(bad,[{state:'open',number:2,title:'Another incident'}]).action,'create');
});
test('body does not emit individual URLs, errors or secret-like strings', () => {
  const body=buildIssueBody(bad,actionUrl);
  assert.match(body,/Routes checked: 12/);
  assert.match(body,/Routes not returning HTTP 200: 3/);
  assert.ok(!body.includes('private'));
  assert.ok(!body.includes('key=secret'));
  assert.ok(!body.includes('example.com'));
});
test('malformed reports and URLs fail closed', () => {
  assert.equal(isVerifiedRegression({...bad, routes_checked:0}),false);
  assert.equal(isVerifiedRegression({...bad, routes_broken:40}),false);
  assert.throws(()=>buildIssueBody(bad,'https://example.com/other'));
  assert.throws(()=>decideIncident(bad,null));
});
