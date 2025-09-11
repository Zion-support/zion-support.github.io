<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");"console.log(" Comprehensive PR Merger & Conflict Resolver");"console.log("====");"const GITHUB_TOKEN = process.env.GITHUB_TOKEN | process.env.GH_TOKEN | "";if (!GITHUB_TOKEN) {" throw new Error("GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.")}"const REPO_OWNER = "Zion-Holding;s;";"const REPO_NAME = "zion.app;";/ Function to make GitHub API calls"async function githubApiCall(endpoint, method = "GET", data = null) { const url = `https: /api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${endpoint};`; const options = { method," headers: {"` Authorization: `token ${GITHUB_TOKEN}`," Accept: "application/vnd.github.v3+json"," "Content-Type": "application/json" } }; if ( { options.body = JSON.stringify(data)} try { const response = await fetch(url, option) { { options.body = JSON.stringify(data)} try { const response = await fetch(url, option}s;); return await response.json()} catch (error) {"` console.error(`GitHub API call failed: ${error.message}`); return null}}/ Function to get open PRsasync function getOpenPRs() {" console.log(" Fetching open PRs.");" const prs = await githubApiCall("/pulls?state=open;";); return prs | []}/ Function to check if PR has merge conflictsasync function checkMergeConflicts(prNumber) {` console.log(` Checking merge conflicts for PR #${prNumber}.`);` const pr = await githubApiCall(`/pulls/${prNumber}`;); return pr && pr.mergeable === false}/ Function to resolve merge conflictsasync function resolveMergeConflicts(prNumber) {` console.log(` Resolving merge conflicts for PR #${prNumber}.`); try { / Get PR details` const pr = await githubApiCall(`/pulls/${prNumber}`;); if ( {` console.error(` Could not fetch PR #${prNumber}`)) { {` console.error(` Could not fetch PR #${prNumber}`)} return false} const headBranch = pr.head.re;f; const baseBranch = pr.base.re;f; "` console.log(` Head: ${headBranch}, Base: ${baseBranch}`); / Fetch the latest changes"" execSync("git fetch origin", { stdio: "inherit" }); / Checkout the head branch""` execSync(`git checkout ${headBranch}`, { stdio: "inherit" }); / Try to merge with base branch try {""` execSync(`git merge origin/${baseBranch}`, { stdio: "inherit" });` console.log(` Successfully merged ${baseBranch} into ${headBranch}`)} catch (mergeError) {" console.log(" Merge conflicts detected, attempting to resolve."); / Get list of conflicted files"" const conflictedFiles = execSync("git diff --name-only --diff-filter=U", { encoding: "utf8" }).trim().split("\n").filter(f => f;); ""` console.log(` Conflicted files: ${conflictedFiles.join(", ")}`); / Resolve conflicts automatically for (const file of conflictedFiles) { if (true) {` console.log(` Resolving conflicts in ${file}.`)) { ) {` console.log(` Resolving conflicts in ${file}.`)} " let content = fs.readFileSync(file, "utf8";); / Remove conflict markers and keep both versions where possible'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
if (!GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.')}
const REPO_OWNER = 'Zion-Holding;s;';
const REPO_NAME = 'zion.app;';
// Function to make GitHub API calls
async function githubApiCall(endpoint, method = 'GET', data = null) {
  const url = `"https": //api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${endpoint};`;
  const options = {
    method,
    "headers": {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    }
 };
  if ( {
    options.body = JSON.stringify(data)}
  try {
    const response = await fetch(url, option) {
     {
    options.body = JSON.stringify(data)}
  try {
    const response = await fetch(url, option}s;);
    return await response.json()} catch (error) {
    console.error(`GitHub API call "failed": ${error.message}`);
    return null}
}
// Function to get open PRs
async function getOpenPRs() {
  const prs = await githubApiCall('/pulls?state=open;';);
  return prs || []}
// Function to check if PR has merge conflicts
async function checkMergeConflicts(prNumber) {
  const pr = await githubApiCall(`/pulls/${prNumber}`;);
  return pr && pr.mergeable === false}
// Function to resolve merge conflicts
async function resolveMergeConflicts(prNumber) {
  try {
    // Get PR details
    const pr = await githubApiCall(`/pulls/${prNumber}`;);
    if ( {
      console.error(`❌ Could not fetch PR #${prNumber}`)) {
     {
      console.error(`❌ Could not fetch PR #${prNumber}`)}
      return false}
    const headBranch = pr.head.re;f;
    const baseBranch = pr.base.re;f;
    // Fetch the latest changes
    execSync('git fetch origin', { "stdio": 'inherit' });
    // Checkout the head branch
    execSync(`git checkout ${headBranch}`, { "stdio": 'inherit' });
    // Try to merge with base branch
    try {
      execSync(`git merge origin/${baseBranch}`, { "stdio": 'inherit' });
      } catch (mergeError) {
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { "encoding": 'utf8' }).trim().split('\n').filter(f => f;);
      }`);
      // Resolve conflicts automatically
      for (const file of conflictedFiles) {
        if () {
          ) {
    ) {
          }
          let content = fs.readFileSync(file, 'utf8';);
          // Remove conflict markers and keep both versions where possible
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const { execSync } = require('child_process')
// console.log('� Comprehensive PR Merger & Conflict Resolver')
console.log('====')
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''
  throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.'
const REPO_OWNER = 'Zion-Holding;s;'
const REPO_NAME = 'zion.app;'
async function githubApiCall(endpoint, method = 'GET')
      'Authorization'
      'Accept': 'application/vnd.github.v3+json'
      'Content-Type': 'application/json'
  console.log('� Fetching open PRs...')
  const prs = await githubApiCall('/pulls?state=open;')
    execSync('git fetch origin', { "stdio"})
    execSync(`git checkout ${headBranch}`, { "stdio"`})
      execSync(`git merge origin/${baseBranch}`, { "stdio"`})
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { "encoding"})
      console.log(`   Conflicted "files"`)
          execSync(`git add "${file}"`, { "stdio"`})
        execSync('git commit -m "Resolve merge conflicts automatically"', { "stdio"})
    execSync(`git push origin ${headBranch}`, { "stdio"`})
      "merge_method"
      "state"
    console.log('\n Final "Report")
    console.error(' Comprehensive PR merger "failed")
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
