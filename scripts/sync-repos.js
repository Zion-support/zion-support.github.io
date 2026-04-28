// sync-repos.js
// Cross‑repo issue/PR synchronizer
// Reads environment variables to know source & target repositories.
//   GITHUB_TOKEN   – token with repo scope
//   SOURCE_OWNER   – owner of source repo
//   SOURCE_REPO    – name of source repo
//   TARGET_OWNER   – owner of target repo
//   TARGET_REPO    – name of target repo
//   SYNC_LABEL     – optional label to add on synced items (default: "cross‑repo-sync")

const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const SOURCE = { owner: process.env.SOURCE_OWNER, repo: process.env.SOURCE_REPO };
const TARGET = { owner: process.env.T