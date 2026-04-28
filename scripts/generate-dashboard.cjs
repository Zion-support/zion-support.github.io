const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const path = require('path');

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error('GITHUB_TOKEN is required');
  process.exit(1);
}
const octokit = new Octokit({ auth: token });
const owner = process.env.GITHUB_REPOSITORY_OWNER || 'ziontechgroup';
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'zion-app';

async function getWorkflowRuns() {
  const { data } = await octokit.actions.listWorkflowRuns({ owner, repo, per_page: 10 });
  return data.workflow_runs.map(run => ({
    name: run.name,
    status: run.status,
    conclusion: run.conclusion,
    created_at: run.created_at,
    duration: run.updated_at && run.created_at ? new Date(run.updated_at) - new Date(run.created_at) : null
  }));
}

async function main() {
  try {
    const runs = await getWorkflowRuns();
    const outputPath = path.join(process.cwd(), 'public', 'dashboard.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(runs, null, 2));
    console.log('Dashboard data written to', outputPath);
  } catch (err) {
    console.error('Error generating dashboard:', err.message);
    process.exit(1);
  }
}

main();
