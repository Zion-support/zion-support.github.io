'use strict';

const fs = require('node:fs');
const path = require('node:path');

const components = Object.freeze({
  'issue-index': {
    generator: 'automation/generate-automation-issue-index.cjs',
    expectedArtifacts: [
      'automation/reports/automation-open-issues-index-latest.json',
      'automation/reports/automation-issue-mttr-history.json',
    ],
  },
  'fingerprint-regression': {
    generator: 'automation/ai-mttr-fingerprint-regression-guard.cjs',
    expectedArtifacts: [
      'automation/reports/mttr-fingerprint-regression-latest.json',
      'automation/reports/mttr-fingerprint-regression-state.json',
      'automation/reports/mttr-fingerprint-suppression-explainability-latest.json',
      'automation/reports/automation-incident-cooldown-mesh.json',
    ],
  },
  'slo-guard': {
    generator: 'automation/ai-mttr-slo-guard.cjs',
    expectedArtifacts: [
      'automation/reports/mttr-slo-guard-latest.json',
      'automation/reports/mttr-slo-guard-state.json',
      'automation/reports/automation-mttr-slo-metrics.prom',
      'automation/reports/automation-incident-cooldown-mesh.json',
    ],
  },
  'arbitration-digest': {
    generator: 'automation/mttr-fingerprint-arbitration-digest.cjs',
    expectedArtifacts: [
      'automation/reports/mttr-fingerprint-arbitration-digest-latest.json',
      'automation/reports/mttr-fingerprint-arbitration-digest-latest.md',
    ],
  },
});

function allowlisted(value, pattern) {
  return typeof value === 'string' && pattern.test(value) ? value : null;
}

function errorCode(error) {
  return allowlisted(error && error.code, /^[A-Z0-9_]{1,32}$/) || 'UNKNOWN';
}

// This is an availability report, never a replacement for an MTTR metric or state file.
function reportUnavailable(component) {
  process.exitCode = 1;
  if (!Object.hasOwn(components, component)) {
    console.error('[MTTR_UNAVAILABLE] Unknown component; no report was written.');
    return;
  }

  const spec = components[component];
  const relativePath = 'automation/reports/mttr-availability/' + component + '.json';
  const destination = path.join(process.cwd(), relativePath);
  const temporary = destination + '.tmp-' + process.pid;
  const report = {
    schema: 'zion.mttr.availability.v1',
    generatedAt: new Date().toISOString(),
    component,
    generator: spec.generator,
    status: 'unavailable',
    success: false,
    reasonCode: 'IMPLEMENTATION_MISSING',
    implemented: false,
    collectionComplete: false,
    metrics: null,
    expectedArtifacts: spec.expectedArtifacts,
    explanation: 'The checked-in generator is not implemented. No MTTR measurement, guard evaluation, state transition, or incident action was performed.',
    provenance: {
      repository: allowlisted(process.env.GITHUB_REPOSITORY, /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/),
      commit: allowlisted(process.env.GITHUB_SHA, /^[a-fA-F0-9]{40}$/),
      runId: allowlisted(process.env.GITHUB_RUN_ID, /^[0-9]{1,32}$/),
      runAttempt: allowlisted(process.env.GITHUB_RUN_ATTEMPT, /^[0-9]{1,10}$/),
    },
  };

  try {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(temporary, JSON.stringify(report, null, 2) + '\n', { flag: 'wx' });
    fs.renameSync(temporary, destination);
  } catch (error) {
    // Do not print raw exceptions or environment values into public logs.
    console.error('[MTTR_UNAVAILABLE] Diagnostic write failed (' + errorCode(error) + '); component=' + component + '.');
    return;
  } finally {
    try {
      fs.rmSync(temporary, { force: true });
    } catch {
      // Failure to remove our temporary file cannot turn the failed generator green.
    }
  }

  console.error('[MTTR_UNAVAILABLE] ' + component + ': implementation missing. Diagnostic: ' + relativePath);
  if (process.env.GITHUB_STEP_SUMMARY) {
    const summary = [
      '## MTTR component unavailable',
      '',
      '- Component: `' + component + '`',
      '- Result: **failed — implementation missing**.',
      '- No MTTR metrics, guard result, or incident actions were produced.',
      '- Diagnostic artifact: `' + relativePath + '`.',
      '- Existing metric and state files are not evidence from this invocation.',
      '',
    ].join('\n');
    try {
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
    } catch (error) {
      console.error('[MTTR_UNAVAILABLE] Summary write failed (' + errorCode(error) + '); diagnostic artifact was written.');
    }
  }
}

module.exports = { reportUnavailable };
