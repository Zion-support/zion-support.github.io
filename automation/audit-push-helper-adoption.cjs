'use strict';

// Read-only inventory of literal references, not proof that a workflow will push.
const fs = require('node:fs');
const path = require('node:path');
const yaml = require('js-yaml');
const { writeReport } = require('./report-size-budget-guard.cjs');

const HELPERS = [
  'scripts/automation/commit-and-push-main.sh',
  'scripts/automation/push-main-with-retry.sh',
];

function audit(root = process.cwd()) {
  const directory = path.join(root, '.github/workflows');
  const workflows = [];
  const errors = [];
  let entries;
  try {
    if (!fs.lstatSync(path.join(root, '.github')).isDirectory()) throw new Error('not_directory');
    if (!fs.lstatSync(directory).isDirectory()) throw new Error('not_directory');
    entries = fs.readdirSync(directory).filter(name => /\.ya?ml$/.test(name)).sort();
    if (entries.length === 0) throw new Error('no_workflows');
  } catch (error) {
    return { status: 'error', workflows, errors: [{ path: '.github/workflows', code: error.code || error.message }] };
  }

  for (const name of entries) {
    const relative = `.github/workflows/${name}`;
    try {
      const filename = path.join(directory, name);
      if (!fs.lstatSync(filename).isFile()) throw new Error('not_regular_file');
      const document = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
      if (!document || typeof document !== 'object' || !document.jobs || typeof document.jobs !== 'object' || Array.isArray(document.jobs) || !Object.keys(document.jobs).length) {
        throw new Error('invalid_workflow_jobs');
      }
      const references = { path: relative, runSteps: 0, helperReferenceSteps: 0, directPushReferenceSteps: 0, reusableJobs: 0, helpers: [] };
      for (const job of Object.values(document.jobs)) {
        if (!job || typeof job !== 'object') throw new Error('invalid_job');
        if (typeof job.uses === 'string') references.reusableJobs++;
        if (job.steps !== undefined && !Array.isArray(job.steps)) throw new Error('invalid_steps');
        for (const step of job.steps || []) {
          if (!step || typeof step !== 'object') throw new Error('invalid_step');
          if (step.run === undefined) continue;
          if (typeof step.run !== 'string') throw new Error('invalid_run');
          references.runSteps++;
          const found = HELPERS.filter(helper => step.run.includes(helper));
          if (found.length) references.helperReferenceSteps++;
          if (/\bgit\s+push\b/.test(step.run)) references.directPushReferenceSteps++;
          for (const helper of found) if (!references.helpers.includes(helper)) references.helpers.push(helper);
        }
      }
      workflows.push(references);
    } catch (error) {
      // Do not persist YAML snippets or commands: they may include private values.
      errors.push({ path: relative, code: error.name === 'YAMLException' ? 'invalid_yaml' : (error.code || error.message) });
    }
  }

  const helpers = HELPERS.map(relative => {
    try {
      const filename = path.join(root, relative);
      if (!fs.lstatSync(filename).isFile()) return { path: relative, regularFile: false, pauseMarker: null };
      return { path: relative, regularFile: true, pauseMarker: /stub:|no-op|automation paused/i.test(fs.readFileSync(filename, 'utf8')) };
    } catch (error) {
      return { path: relative, regularFile: false, pauseMarker: null, code: error.code || 'unreadable' };
    }
  });
  return {
    status: errors.length ? 'error' : 'completed',
    scope: 'Literal references in active .yml/.yaml run blocks; includes validation and printed text. Reusable workflows and action implementations are not traversed. No command is executed and no policy compliance is inferred.',
    scannedWorkflows: workflows.length,
    workflowsWithHelperReferences: workflows.filter(item => item.helperReferenceSteps > 0).length,
    workflowsWithDirectPushReferences: workflows.filter(item => item.directPushReferenceSteps > 0).length,
    workflowsWithBothReferences: workflows.filter(item => item.helperReferenceSteps > 0 && item.directPushReferenceSteps > 0).length,
    helpers,
    workflows,
    errors,
  };
}

function main(root = process.cwd()) {
  const report = { generatedAt: new Date().toISOString(), ...audit(root) };
  writeReport(root, 'workflow-push-helper-adoption-latest.json', JSON.stringify(report, null, 2) + '\n');
  console.log(`Push-helper reference audit: ${report.status}; ${report.scannedWorkflows || 0} workflows; ${report.errors.length} scan errors. No pushes performed.`);
  return report.status === 'error' ? 1 : 0;
}

if (require.main === module) {
  try { process.exitCode = main(); }
  catch (error) { console.error(`Push-helper audit could not write its report (${error.code || error.message}).`); process.exitCode = 1; }
}
module.exports = { audit, main };
