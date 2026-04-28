#!/usr/bin/env node
/**
 * self-heal.cjs – Self‑healing helper for GitHub Actions.
 *
 * It scans recent workflow runs for failures and, for each failure:
 *   1️⃣ Checks if an issue already exists (label "self‑heal").
 *   2️⃣ If not, creates a new issue with details and a "self‑heal" label.
 *   3️⃣ Optionally triggers a re‑run of the failed workflow via the GitHub API.
 *
 * Environment variables (via .env or CI secrets):
 *   GITHUB_TOKEN   – Personal access token with repo scope.
 *   REPO_OWNER     – Owner of the repository (e.g., "Zion-support").
 *   REPO_NAME      – Repository name (e.g., "zion.app").
 *   DRY_RUN        – If "true", only logs actions, does not create issues or re‑run.
 */

require('dotenv').config();
const { Octokit } = require('@octokit/rest');

const {
  GITHUB_TOKEN,
  REPO_OWNER,
  REPO_NAME,
  DRY_RUN = 'false',
} = process.env;

if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
  console.error('❌ Missing required env vars: GITHUB_TOKEN, REPO_OWNER, REPO_NAME');
  process.exit(1);
}

const octokit = new Octokit({ auth: GITHUB_TOKEN });

// Helper logging respecting DRY_RUN
const log = (...msg) => {
  const prefix = DRY_RUN === 'true' ? '[DRY RUN] ' : '';
  console.log(prefix + msg.join(' '));
};

/**
 * Determine if an issue with the same title already exists.
 */
async function issueExists(title) {
  const { data: issues } = await octokit.search.issues({
    q: `repo:${REPO_OWNER}/${REPO_NAME} in:title ${title.replace(/[^-a-zA-Z0-9*]/g, '\\$&')}`,
    per_page: 1,
  });
  return issues.data.total_count > 0;
}

/**
 * Create a new issue with a self‑heal label.
 */
async function createSelfHealIssue(failedRun) {
  const issueTitle = `Self‑heal: ${failedRun.name} #${failedRun.id}`;
  const issueBody = `
*Workflow*: ${failedRun.name}
*Run ID*: ${failedRun.id}
*Conclusion*: ${failedRun.conclusion}
*Duration*: ${failedRun.duration ? (failedRun.duration / 60000).toFixed(2) + ' min' : 'N/A'}

This issue was automatically opened because the workflow failed. 
A remediation action will be triggered shortly (if configured).
`;

  const labels = ['self-heal'];
  const response = await octokit.issues.create({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    title: issueTitle,
    body: issueBody,
    labels,
  });
  return response.data.html_url;
}

/**
 * Trigger a re‑run of a failed workflow.
 */
async function reRunWorkflow(run) {
  try {
    const response = await octokit.workflows.createWorkflowRun({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      workflow_id: run.workflow_id,
    });
    log(`🔁 Triggered re‑run for workflow ${run.name} (#${run.id})`);
    return response.data.html_url;
  } catch (err) {
    console.error(`❌ Failed to trigger re‑run: ${err.message}`);
  }
}

/**
 * Main logic – process recent failed runs.
 */
async function runSelfHeal() {
  // Get the most recent 10 workflow runs
  const { data: runs } = await octokit.actions.listWorkflowRuns({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    per_page: 10,
  });

  // Filter for failed runs (conclusion === 'failure')
  const failedRuns = runs.workflow_runs.filter(r => r.conclusion === 'failure');

  if (failedRuns.length === 0) {
    log('✅ No failed workflow runs found – nothing to heal.');
    return;
  }

  for (const run of failedRuns) {
    log(`🔎 Examining failed run #${run.id} – ${run.name}`);

    // Check if we already have a self‑heal issue for this run
    const title = `Self‑heal: ${run.name} #${run.id}`;
    const existing = await issueExists(title);
    if (existing) {
      log(`📄 Issue already exists for this run: ${title}`);
      continue;
    }

    // Create the self‑heal issue
    const issueUrl = await createSelfHealIssue(run);
    log(`🆕 Created self‑heal issue: ${issueUrl}`);

    // Optionally trigger a re‑run (controlled by a separate env var if desired)
    // await reRunWorkflow(run);
  }

  log('✅ Self‑heal processing completed.');
}

runSelfHeal().catch(err => {
  console.error('❌ Self‑heal failed:', err.message);
  process.exit(1);
});