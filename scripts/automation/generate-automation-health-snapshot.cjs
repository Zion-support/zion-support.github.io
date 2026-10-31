'use strict';

// Scope: the latest production Pages publisher attempt and GitHub Pages configuration.
// A successful no-op CI job is not build or deployment evidence.
const fs = require('node:fs');
const path = require('node:path');

const API = 'https://api.github.com';
const INTERNAL_PATH = 'automation/reports/automation-health-latest.json';
const PUBLIC_PATH = 'public/api/automation-health.json';
const COMMON_GATES = [
  'Gate reviewed five-language productivity rendering',
  'Render field evidence release (adds data-field-evidence-release markers)',
  'Verify operational tools in the final Pages artifact',
  'Reject private operational files in final Pages artifact',
];
const PUBLISHERS = {
  'gh-pages.yml': {
    buildJob: 'deploy',
    buildSteps: ['Prepare pages from public/', ...COMMON_GATES, 'Upload Pages artifact'],
    deployJob: 'deploy',
    deployStep: 'Deploy to GitHub Pages',
  },
  'static-deploy.yml': {
    buildJob: 'deploy',
    buildSteps: ['Prepare pages', ...COMMON_GATES, /^Run actions\/upload-pages-artifact@/],
    deployJob: 'deploy',
    deployStep: /^Run actions\/deploy-pages@/,
  },
  'deploy-on-push.yml': {
    buildJob: 'build',
    // The optional Next.js diagnostic build is intentionally not a static Pages gate.
    buildSteps: ['Overlay docs pages onto out/', ...COMMON_GATES, 'Upload Pages artifact'],
    deployJob: 'deploy',
    deployStep: 'Deploy to GitHub Pages',
  },
};
const ACTIVE = new Set(['queued', 'requested', 'pending', 'waiting', 'in_progress']);
const FAILED = new Set(['failure', 'timed_out', 'action_required', 'startup_failure']);
const CONCLUSIONS = new Set([...FAILED, 'success', 'cancelled', 'neutral', 'skipped', 'stale']);
const KNOWN = new Set(['passed', 'failed', 'pending']);
const isId = (value) => Number.isSafeInteger(value) && value > 0;
const isSha = (value) => typeof value === 'string' && /^[a-f0-9]{40}$/i.test(value);
const validState = (status, conclusion) => (ACTIVE.has(status) && conclusion === null) ||
  (status === 'completed' && CONCLUSIONS.has(conclusion));

function point(state, reason, evidence = {}) {
  return { state, healthy: state === 'passed' ? true : state === 'failed' ? false : null, reason, ...evidence };
}

function validDate(value, nowMs) {
  const parsed = typeof value === 'string' ? Date.parse(value) : NaN;
  return Number.isFinite(parsed) && parsed <= nowMs + 300000;
}

function ageHours(value, nowMs) {
  return Math.max(0, (nowMs - Date.parse(value)) / 3600000);
}

async function requestJson(endpoint, { token, fetchImpl, timeoutMs, now }) {
  const source = { url: API + endpoint, checkedAt: null, httpStatus: null };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(source.url, {
      method: 'GET',
      redirect: 'error',
      signal: controller.signal,
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: 'Bearer ' + token,
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'zion-automation-health-collector',
      },
    });
    source.httpStatus = response.status;
    if (!response.ok) {
      // Never include a response body, token, request headers or exception message.
      source.errorCode = 'http_error';
      return { ok: false, source };
    }
    let data;
    try {
      data = await response.json();
    } catch {
      source.errorCode = controller.signal.aborted ? 'request_timed_out' : 'invalid_json';
      return { ok: false, source };
    }
    return { ok: true, data, source };
  } catch {
    source.errorCode = controller.signal.aborted ? 'request_timed_out' : 'request_failed';
    return { ok: false, source };
  } finally {
    clearTimeout(timer);
    source.checkedAt = new Date(now()).toISOString();
  }
}

function validRun(run, workflow, repository, branch, nowMs) {
  return run && isId(run.id) && isId(run.run_attempt) && isId(run.workflow_id) &&
    run.path === '.github/workflows/' + workflow &&
    run.head_branch === branch && isSha(run.head_sha) &&
    run.repository?.full_name?.toLowerCase() === repository.toLowerCase() &&
    validDate(run.created_at, nowMs) && validDate(run.updated_at, nowMs) &&
    Date.parse(run.updated_at) >= Date.parse(run.created_at) &&
    validState(run.status, run.conclusion);
}

function stepEvidence(step, job) {
  return {
    jobId: job.id,
    jobName: job.name,
    stepNumber: step.number,
    stepName: step.name,
    status: step.status,
    conclusion: step.conclusion,
    startedAt: step.started_at || null,
    completedAt: step.completed_at || null,
  };
}

function evaluateSteps(jobs, jobName, required, run, nowMs, maxAgeHours) {
  const matches = jobs.filter((job) => job.name === jobName);
  if (matches.length !== 1) {
    return point(ACTIVE.has(run.status) && matches.length === 0 ? 'pending' : 'unknown',
      matches.length === 0 ? 'job_not_started_or_not_found' : 'ambiguous_job');
  }
  const job = matches[0];
  if (!Array.isArray(job.steps)) return point('unavailable', 'invalid_job_steps');
  const evidence = [];
  const outcomes = required.map((expected) => {
    const steps = job.steps.filter((step) => typeof step.name === 'string' &&
      (typeof expected === 'string' ? step.name === expected : expected.test(step.name)));
    if (steps.length !== 1) {
      return point(ACTIVE.has(run.status) && steps.length === 0 ? 'pending' : 'unknown',
        steps.length === 0 ? 'required_step_not_found' : 'ambiguous_step');
    }
    const step = steps[0];
    evidence.push(stepEvidence(step, job));
    if (ACTIVE.has(step.status) && ACTIVE.has(run.status)) return point('pending', 'step_in_progress');
    if (step.status !== 'completed' || !validDate(step.completed_at, nowMs) ||
        !validDate(step.started_at, nowMs) || Date.parse(step.started_at) > Date.parse(step.completed_at)) {
      return point('unknown', 'invalid_or_missing_step_timestamps');
    }
    if (ageHours(step.completed_at, nowMs) > maxAgeHours) return point('stale', 'step_evidence_stale');
    if (FAILED.has(step.conclusion)) return point('failed', 'required_step_failed');
    if (step.conclusion === 'success') return point('passed', 'required_step_succeeded');
    return point('unknown', 'step_skipped_cancelled_or_not_attempted');
  });
  const outcome = outcomes.find((item) => item.state === 'failed') ||
    outcomes.find((item) => ['unavailable', 'unknown', 'stale'].includes(item.state)) ||
    outcomes.find((item) => item.state === 'pending') ||
    point('passed', 'required_steps_succeeded');
  return { ...outcome, steps: evidence };
}

function evaluatePages(result, repository) {
  const evidence = { sourceUrl: API + '/repos/' + repository + '/pages' };
  if (!result.ok) return point('unavailable', result.source.errorCode, evidence);
  const data = result.data;
  if (!data || data.build_type !== 'workflow' || typeof data.html_url !== 'string' ||
      !/^https:\/\/[^/\s]+(?:\/|$)/.test(data.html_url)) {
    return point('unknown', 'unsupported_or_invalid_pages_configuration', evidence);
  }
  const details = { ...evidence, status: data.status, buildType: data.build_type, siteUrl: data.html_url };
  if (data.status === 'built') return point('passed', 'github_pages_reports_built', details);
  if (data.status === 'errored') return point('failed', 'github_pages_reports_error', details);
  if (data.status === 'building') return point('pending', 'github_pages_building', details);
  return point('unknown', 'unknown_pages_status', details);
}

async function collectHealth({ env = process.env, fetchImpl = globalThis.fetch, now = Date.now, timeoutMs = 8000 } = {}) {
  const nowMs = now();
  const repository = env.GITHUB_REPOSITORY || '';
  const branch = env.AUTOMATION_HEALTH_BRANCH || 'main';
  const token = env.GITHUB_TOKEN || env.GH_TOKEN;
  const maxAgeHours = env.AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS === undefined ||
    env.AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS === '' ? 24 : Number(env.AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS);
  const report = {
    schemaVersion: 2,
    scope: 'latest_production_pages_publisher_and_github_pages_configuration',
    status: 'unknown',
    severity: 'unknown',
    timestamp: null,
    generatedAt: new Date(nowMs).toISOString(),
    repository,
    branch,
    checks: { build: null, deploy: null, pages: null },
    details: {
      build: point('unknown', 'not_collected'),
      deploy: point('unknown', 'not_collected'),
      pages: point('unknown', 'not_collected'),
    },
    collection: { complete: false, maxRunAgeHours: maxAgeHours, sources: [], errors: [] },
    publisher: null,
    publicSnapshotUpdated: false,
  };
  const finish = () => {
    const details = Object.values(report.details);
    const observedFailure = details.some((item) => item.state === 'failed') ||
      (report.publisher?.status === 'completed' && FAILED.has(report.publisher.conclusion));
    const unresolvedPublisher = report.publisher?.status === 'completed' &&
      report.publisher.conclusion !== 'success' && !FAILED.has(report.publisher.conclusion);
    report.collection.complete = report.collection.errors.length === 0 && !unresolvedPublisher &&
      details.every((item) => KNOWN.has(item.state));
    report.status = observedFailure ? 'degraded' :
      details.some((item) => item.state === 'unavailable') ? 'unavailable' :
      details.some((item) => item.state === 'stale') ? 'stale' :
      !report.collection.complete ? 'unknown' :
      (ACTIVE.has(report.publisher?.status) || details.some((item) => item.state === 'pending')) ? 'pending' : 'ok';
    report.severity = report.status === 'ok' ? 'nominal' : report.status;
    report.checks = Object.fromEntries(Object.entries(report.details).map(([name, item]) => [name, item.healthy]));
    if (report.collection.complete) report.timestamp = new Date(now()).toISOString();
    return report;
  };
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository) || !branch.trim() ||
      !Number.isFinite(maxAgeHours) || maxAgeHours <= 0 ||
      !Number.isFinite(timeoutMs) || timeoutMs <= 0 || timeoutMs > 15000) {
    report.collection.errors.push('invalid_configuration');
    return finish();
  }
  if (!token) {
    report.details = Object.fromEntries(['build', 'deploy', 'pages'].map((name) =>
      [name, point('unavailable', 'missing_github_token')]));
    report.collection.errors.push('missing_github_token');
    return finish();
  }

  const options = { token, fetchImpl, timeoutMs, now };
  const repoPath = '/repos/' + repository;
  const workflows = Object.keys(PUBLISHERS);
  const results = await Promise.all([
    ...workflows.map((workflow) => requestJson(repoPath + '/actions/workflows/' + workflow +
      '/runs?branch=' + encodeURIComponent(branch) + '&exclude_pull_requests=true&per_page=1', options)),
    requestJson(repoPath + '/pages', options),
  ]);
  // A source records only metadata; raw API bodies never enter either snapshot.
  report.collection.sources = results.map((result) => result.source);
  report.details.pages = evaluatePages(results[3], repository);
  const candidates = [];
  let canChooseLatest = true;
  for (let index = 0; index < workflows.length; index += 1) {
    const result = results[index];
    const data = result.data;
    if (!result.ok) {
      canChooseLatest = false;
      report.collection.errors.push(workflows[index] + ':' + result.source.errorCode);
      continue;
    }
    if (!data || !Number.isSafeInteger(data.total_count) || data.total_count < 0 ||
        !Array.isArray(data.workflow_runs) || data.total_count < data.workflow_runs.length || (data.total_count > 0 && data.workflow_runs.length === 0) ||
        !data.workflow_runs.every((run) => validRun(run, workflows[index], repository, branch, nowMs))) {
      canChooseLatest = false;
      report.collection.errors.push(workflows[index] + ':invalid_run_list');
      continue;
    }
    candidates.push(...data.workflow_runs.map((run) => ({ run, workflow: workflows[index] })));
  }
  if (!canChooseLatest || candidates.length === 0) {
    const state = canChooseLatest ? 'unknown' : 'unavailable';
    const reason = canChooseLatest ? 'no_publisher_history' : 'latest_publisher_could_not_be_verified';
    report.details.build = point(state, reason);
    report.details.deploy = point(state, reason);
    return finish();
  }
  candidates.sort((a, b) => Date.parse(b.run.created_at) - Date.parse(a.run.created_at) || b.run.id - a.run.id);
  const { run, workflow } = candidates[0];
  report.publisher = {
    workflow, workflowId: run.workflow_id, runId: run.id, runAttempt: run.run_attempt,
    headSha: run.head_sha, branch: run.head_branch, status: run.status, conclusion: run.conclusion,
    createdAt: run.created_at, updatedAt: run.updated_at,
    runUrl: 'https://github.com/' + repository + '/actions/runs/' + run.id,
  };
  if (ageHours(run.updated_at, nowMs) > maxAgeHours) {
    report.details.build = point('stale', 'workflow_run_stale');
    report.details.deploy = point('stale', 'workflow_run_stale');
    return finish();
  }
  const jobsResult = await requestJson(repoPath + '/actions/runs/' + run.id + '/jobs?filter=latest&per_page=100', options);
  report.collection.sources.push(jobsResult.source);
  if (!jobsResult.ok) {
    report.details.build = point('unavailable', jobsResult.source.errorCode);
    report.details.deploy = point('unavailable', jobsResult.source.errorCode);
    return finish();
  }
  const jobs = jobsResult.data;
  // These reviewed publishers have at most a few jobs. Refuse partial/matrix results
  // instead of silently accepting the first page or a previous rerun's green jobs.
  if (!jobs || !Number.isSafeInteger(jobs.total_count) || !Array.isArray(jobs.jobs) ||
      jobs.total_count !== jobs.jobs.length || jobs.jobs.length > 100 ||
      !jobs.jobs.every((job) => isId(job.id) && job.run_id === run.id &&
        job.run_attempt === run.run_attempt && job.head_sha === run.head_sha && job.head_branch === branch &&
        validState(job.status, job.conclusion))) {
    report.details.build = point('unavailable', 'incomplete_or_mismatched_job_evidence');
    report.details.deploy = point('unavailable', 'incomplete_or_mismatched_job_evidence');
    return finish();
  }
  const contract = PUBLISHERS[workflow];
  report.details.build = evaluateSteps(jobs.jobs, contract.buildJob, contract.buildSteps, run, nowMs, maxAgeHours);
  report.details.deploy = evaluateSteps(jobs.jobs, contract.deployJob, [contract.deployStep], run, nowMs, maxAgeHours);
  return finish();
}

function atomicWrite(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const temporaryPath = filePath + '.' + process.pid + '.tmp';
  try {
    fs.writeFileSync(temporaryPath, JSON.stringify(data, null, 2) + '\n', { flag: 'wx' });
    fs.renameSync(temporaryPath, filePath);
  } finally {
    if (fs.existsSync(temporaryPath)) fs.unlinkSync(temporaryPath);
  }
}

async function runCollector({ cwd = process.cwd(), ...options } = {}) {
  const report = await collectHealth(options);
  // Keep the failed attempt observable without refreshing public freshness.
  atomicWrite(path.join(cwd, INTERNAL_PATH), report);
  if (report.collection.complete) {
    report.publicSnapshotUpdated = true;
    atomicWrite(path.join(cwd, PUBLIC_PATH), report);
    atomicWrite(path.join(cwd, INTERNAL_PATH), report);
  }
  return { report, exitCode: report.status === 'ok' ? 0 : 1 };
}

if (require.main === module) {
  runCollector().then(({ report, exitCode }) => {
    console.log(JSON.stringify({
      status: report.status,
      publicSnapshotUpdated: report.publicSnapshotUpdated,
      report: INTERNAL_PATH,
      publisherRunId: report.publisher?.runId || null,
    }));
    process.exitCode = exitCode;
  }).catch(() => {
    console.error('Automation health collection or snapshot write failed; no success is asserted.');
    process.exitCode = 1;
  });
}

module.exports = { collectHealth, runCollector, INTERNAL_PATH, PUBLIC_PATH };
