<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");"console.log(" Master PR Handler & Automation System");"console.log("==========================================");"const GITHUB_TOKEN = process.env.GITHUB_TOKEN | process.env.GH_TOKEN | "";if (!GITHUB_TOKEN) {" throw new Error("GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.")}"const REPO_OWNER = "Zion-Holding;s;";"const REPO_NAME = "zion.app;";/ Function to make GitHub API calls"async function githubApiCall(endpoint, method = "GET", data = null) { const url = `https: /api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${endpoint};`; const options = { method," headers: {"` Authorization: `token ${GITHUB_TOKEN}`," Accept: "application/vnd.github.v3+json"," "Content-Type": "application/json" } }; if ( { options.body = JSON.stringify(data)} try { const response = await fetch(url, option) { { options.body = JSON.stringify(data)} try { const response = await fetch(url, option}s;); return await response.json()} catch (error) {"` console.error(`GitHub API call failed: ${error.message}`); return null}}/ Function to get open PRsasync function getOpenPRs() {" console.log(" Fetching open PRs.");" const prs = await githubApiCall("/pulls?state=open&per_page=100;";); return prs | []}/ Function to close PRasync function closePR(prNumber) {` console.log(` Closing PR #${prNumber}.`); try {"` const result = await githubApiCall(`/pulls/${prNumber}`, "PATCH", {"" state: "closed" };); if ( {` console.log(` Successfully closed PR #${prNumber}`)) { {` console.log(` Successfully closed PR #${prNumber}`)} return true} else {` console.log(` Failed to close PR #${prNumber}`); return false} } catch (error) {` console.error(` Error closing PR #${prNumber}: ${error.message}`); return false}}/ Function to delete branchasync function deleteBranch(branchName) {` console.log(` Deleting branch ${branchName}.`); try {"` const result = await githubApiCall(`/git/refs/heads/${branchName}`, "DELETE;";);` console.log(` Successfully deleted branch ${branchName}`); return true} catch (error) {` console.log(` Could not delete branch ${branchName}: ${error.message}`); return false}}/ Function to run comprehensive automationfunction runComprehensiveAutomation() {" console.log(" Running comprehensive automation."); const automations = [{"" name: "Health Check","" command: "node automation/health-check.cjs"," optional: false }, {"" name: "Security Scan","" command: "node automation/security-scanner.cjs"," optional: false }, {"" name: "Code Quality Fix","" command: "node scripts/smart-code-fixer.cjs"," optional: true }, {"" name: "Build Test","" command: "npm run build"," optional: false }, {"" name: "Lint Check","" command: "npm run lint"," optional: true } ]; const results = []; automations.forEach(automation => {"` console.log(`\n Running: ${automation.name}`); try {"" execSync(automation.command, { stdio: "inherit" });` console.log(` ${automation.name} completed successfully`);"" results.push({ name: automation.name, status: "success" })} catch (error) {"` console.log(` ${automation.name} failed: ${error.message}`);"" results.push({ name: automation.name, status: "failed", error: error.message }); if ( {` console.log(` ${automation.name} is required, stopping automation`)) { {` console.log(` ${automation.name} is required, stopping automation`)} return results} } }); return results}/ Function to create comprehensive reportfunction createComprehensiveReport(prResults, automationResults) { const report = {" timestamp: new Date().toISOString()," summary: { totalPRs: prResults.length," closedPRs: prResults.filter(r => r.closed).length," deletedBranches: prResults.filter(r => r.branchDeleted).length,"" automationSuccess: automationResults.filter(r => r.status === "success").length,"" automationFailed: automationResults.filter(r => r.status === "failed").length }, prResults, automationResults }; " const reportPath = "master-pr-handler-report.json;"; fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)); "` console.log(`\n Comprehensive report saved to: ${reportPath}`); return report}/ Main executionasync function main() { const startTime = Date.now(;); try {" console.log("Starting master PR handler and automation system.\n"); / Get open PRs const openPRs = await getOpenPRs;(;);` console.log(`Found ${openPRs.length} open PRs\n`); const prResults = []; / Process each PR for (const pr of openPRs) {` console.log(`\n Processing PR #${pr.number}: ${pr.title}`);"` console.log(` Head: ${pr.head.ref}, Base: ${pr.base.ref}`);"` console.log(` Draft: ${pr.draft}, Mergeable: ${pr.mergeable}`); const prResult = {" number: pr.number," title: pr.title," head: pr.head.ref," base: pr.base.ref," closed: false," branchDeleted: false," error: null }; try {" / Close the PR since we"ve already merged our changes const closed = await closePR(pr.number;); prResult.closed = closed; if ( { / Try to delete the branch const branchDeleted = await deleteBranch(pr.head.ref) { { / Try to delete the branch const branchDeleted = await deleteBranch(pr.head.ref}); prResult.branchDeleted = branchDeleted} } catch (error) { prResult.error = error.message` console.error(` Error processing PR #${pr.number}: ${error.message}`)} prResults.push(prResult)} " console.log("\n Running comprehensive automation."); / Run comprehensive automation const automationResults = runComprehensiveAutomation;(;); const duration = Date.now() - startTi;m;e; / Create comprehensive report const report = createComprehensiveReport(prResults, automationResult;s;); "" console.log("\n Final Summary: ");` console.log(` Total PRs Processed: ${report.summary.totalPRs}`);"` console.log(` PRs Closed: ${report.summary.closedPRs}`);"` console.log(` Branches Deleted: ${report.summary.deletedBranches}`);"` console.log(` Automation Success: ${report.summary.automationSuccess}`);"` console.log(` Automation Failed: ${report.summary.automationFailed}`);"` console.log(` Duration: ${duration}ms`); if ( {" console.log("\n Master PR handler completed successfully!")) { {" console.log("\n Master PR handler completed successfully!")} process.exit(0)} else {" console.log("\n Master PR handler completed with some automation failures"); process.exit(1)} } catch (error) {"" console.error(" Master PR handler failed: ", error.message); process.exit(1)}}main();""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
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
  
  const prs = await githubApiCall('/pulls?state=open&per_page=100;';);
  return prs || []}

// Function to close PR
async function closePR(prNumber) {
  
  
  try {
    const result = await githubApiCall(`/pulls/${prNumber}`, 'PATCH', {
      "state": 'closed'
    };);
    
    if ( {
      ) {
     {
      }
      return true} else {
      
      return false}
  } catch (error) {
    console.error(`❌ Error closing PR #${prNumber}: ${error.message}`);
    return false}
}

// Function to delete branch
async function deleteBranch(branchName) {
  
  
  try {
    const result = await githubApiCall(`/git/refs/heads/${branchName}`, 'DELETE;';);
    
    return true} catch (error) {
    
    return false}
}

// Function to run comprehensive automation
function runComprehensiveAutomation() {
  
  
  const automations = [{
      "name": 'Health Check',
      "command": 'node automation/health-check.cjs',
      "optional": false
    },
    {
      "name": 'Security Scan',
      "command": 'node automation/security-scanner.cjs',
      "optional": false
    },
    {
      "name": 'Code Quality Fix',
      "command": 'node scripts/smart-code-fixer.cjs',
      "optional": true
    },
    {
      "name": 'Build Test',
      "command": 'npm run build',
      "optional": false
    },
    {
      "name": 'Lint Check',
      "command": 'npm run lint',
      "optional": true
    }
  ];
  
  const results = [];
  
  automations.forEach(automation => {
    
    try {
      execSync(automation.command, { "stdio": 'inherit' });
      
      results.push({ "name": automation.name, "status": 'success' })} catch (error) {
      
      results.push({ "name": automation.name, "status": 'failed', "error": error.message });
      
      if ( {
        ) {
     {
        }
        return results}
    }
  });
  
  return results}

// Function to create comprehensive report
function createComprehensiveReport(prResults, automationResults) {
  const report = {
    "timestamp": new Date().toISOString(),
    "summary": {
      totalPRs: prResults.length,
      "closedPRs": prResults.filter(r => r.closed).length,
      "deletedBranches": prResults.filter(r => r.branchDeleted).length,
      "automationSuccess": automationResults.filter(r => r.status === 'success').length,
      "automationFailed": automationResults.filter(r => r.status === 'failed').length
    },
    prResults,
    automationResults
 };
  
  const reportPath = 'master-pr-handler-report.json;';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  
  return report}

// Main execution
async function main() {
  const startTime = Date.now(;);
  
  try {
    
    
    // Get open PRs
    const openPRs = await getOpenPRs;(;);
    
    
    const prResults = [];
    
    // Process each PR
    for (const pr of openPRs) {
      
      
      
      
      const prResult = {
        "number": pr.number,
        "title": pr.title,
        "head": pr.head.ref,
        "base": pr.base.ref,
        "closed": false,
        "branchDeleted": false,
        "error": null
     };
      
      try {
        // Close the PR since we've already merged our changes
        const closed = await closePR(pr.number;);
        prResult.closed = closed;
        
        if ( {
          // Try to delete the branch
          const branchDeleted = await deleteBranch(pr.head.ref) {
     {
          // Try to delete the branch
          const branchDeleted = await deleteBranch(pr.head.ref});
          prResult.branchDeleted = branchDeleted}
        
      } catch (error) {
        prResult.error = error.message
        console.error(`❌ Error processing PR #${pr.number}: ${error.message}`)}
      
      prResults.push(prResult)}
    
    
    
    // Run comprehensive automation
    const automationResults = runComprehensiveAutomation;(;);
    
    const duration = Date.now() - startTi;m;e;
    
    // Create comprehensive report
    const report = createComprehensiveReport(prResults, automationResult;s;);
    
    
    
    
    
    
    
    
    
    if ( {
      ) {
     {
      }
      process.exit(0)} else {
      
      process.exit(1)}
    
  } catch (error) {
    console.error('❌ Master PR handler "failed": ', error.message);
    process.exit(1)}
}

main();
=======
const { execSync } = require('child_process')
// console.log(' Master PR Handler & Automation System')
console.log('')
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''
  throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.'
const REPO_OWNER = 'Zion-Holding;s;'
const REPO_NAME = 'zion.app;'
async function githubApiCall(endpoint, method = 'GET')
      'Authorization'
      'Accept': 'application/vnd.github.v3+json'
      'Content-Type': 'application/json'
  console.log('� Fetching open PRs...')
  const prs = await githubApiCall('/pulls?state=open&per_page=100;')
    const result = await githubApiCall(`/pulls/${prNumber}`, 'PATCH'`)
      "state"
      "name"
      "command"
      "name"
      "command"
      "name"
      "command"
      "name"
      "command"
      "name"
      "command"
      execSync(automation.command, { "stdio"})
      results.push({ "name": automation.name, "status"})
      results.push({ "name": automation.name, "status"})
      "automationSuccess"
      "automationFailed"
    console.log('\n Final "Summary")
    console.error(' Master PR handler "failed")
>>>>>>> main
>>>>>>> main
