#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const workflowsDir = path.join(root, '.github', 'workflows');
const reportPath = path.join(root, 'automation', 'reports', 'workflow-push-helper-adoption-latest.json');

const files = fs
  .readdirSync(workflowsDir)
  .filter((name) => name.endsWith('.yml') || name.endsWith('.yaml'))
  .sort();

const result = {
  generatedAt: new Date().toISOString(),
  totalWorkflowFiles: files.length,
  workflowsWithPushToMain: 0,
  workflowsUsingHelper: 0,
  workflowsMissingHelper: [],
};

for (const file of files) {
  const fullPath = path.join(workflowsDir, file);
  const content = fs.readFileSync(fullPath, 'utf8');

  const hasPushToMain = /git push origin HEAD:main/.test(content);
  if (!hasPushToMain) continue;

  result.workflowsWithPushToMain += 1;
  const usesHelper = /scripts\/automation\/commit-and-push-main\.sh/.test(content);
  if (usesHelper) {
    result.workflowsUsingHelper += 1;
  } else {
    result.workflowsMissingHelper.push(file);
  }
}

result.helperAdoptionRate = result.workflowsWithPushToMain
  ? Number((result.workflowsUsingHelper / result.workflowsWithPushToMain).toFixed(4))
  : 1;

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(result, null, 2) + '\n');

console.log(`Push-helper adoption report written: ${path.relative(root, reportPath)}`);
console.log(JSON.stringify(result));
