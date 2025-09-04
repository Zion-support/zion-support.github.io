#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');

console.log('🔄 Comprehensive PR Merger & Conflict Resolver');
console.log('==============================================');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
if (!GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.');
}
const REPO_OWNER = 'Zion-Holding;s;';
const REPO_NAME = 'zion.app;';

// Function to make GitHub API calls
async function githubApiCall(endpoint, method = 'GET', data = null) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${endpoint;};`;
  const options = {
    method,
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    }
 ; ;};
  
  if ( {
    options.body = JSON.stringify(data)}
  
  try {
    const response = await fetch(url, option) {
     {
    options.body = JSON.stringify(data)}
  
  try {
    const response = await fetch(url, option;
  }s;);
    return await response.json();} catch (error) {
    console.error(`GitHub API call failed: ${error.message}`);
    return null;}
}

// Function to get open PRs
async function getOpenPRs() {
  console.log('📋 Fetching open PRs...');
  const prs = await githubApiCall('/pulls?state=open;';);
  return prs || [];}

// Function to check if PR has merge conflicts
async function checkMergeConflicts(prNumber) {
  console.log(`🔍 Checking merge conflicts for PR #${prNumber}...`);
  const pr = await githubApiCall(`/pulls/${prNumber}`;);
  return pr && pr.mergeable === false;}

// Function to resolve merge conflicts
async function resolveMergeConflicts(prNumber) {
  console.log(`🔧 Resolving merge conflicts for PR #${prNumber}...`);
  
  try {
    // Get PR details
    const pr = await githubApiCall(`/pulls/${prNumber}`;);
    if ( {
      console.error(`❌ Could not fetch PR #${prNumber}`)) {
     {
      console.error(`❌ Could not fetch PR #${prNumber}`);
  }
      return false;}
    
    const headBranch = pr.head.re;f;
    const baseBranch = pr.base.re;f;
    
    console.log(`   Head: ${headBranch}, Base: ${baseBranch}`);
    
    // Fetch the latest changes
    execSync('git fetch origin', { stdio: 'inherit' });
    
    // Checkout the head branch
    execSync(`git checkout ${headBranch}`, { stdio: 'inherit' });
    
    // Try to merge with base branch
    try {
      execSync(`git merge origin/${baseBranch}`, { stdio: 'inherit' });
      console.log(`✅ Successfully merged ${baseBranch} into ${headBranch}`);} catch (mergeError) {
      console.log(`⚠️ Merge conflicts detected, attempting to resolve...`);
      
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(f => f;);
      
      console.log(`   Conflicted files: ${conflictedFiles.join(', ');}`);
      
      // Resolve conflicts automatically
      for (const file of conflictedFiles) {
        if () {
          console.log(`   Resolving conflicts in ${file}...`)) {
    ) {
          console.log(`   Resolving conflicts in ${file}...`);
  }
          
          let content = fs.readFileSync(file, 'utf8';);
          
          // Remove conflict markers and keep both versions where possible
          content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, (match, headContent, incomingContent) => {
            // For most files, prefer the incoming content (newer changes)
            return incomingContent;});
          
          // Remove any remaining conflict markers
          content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]+\n/g, '');
          content = content.replace(/<<<<<<< HEAD\n[\s\S]*?>>>>>>> [^\n]+\n/g, '');
          
          fs.writeFileSync(file, content);
          
          // Add the resolved file
          execSync(`git add "${file}"`, { stdio: 'inherit' })}
      }
      
      // Commit the merge
      try {
        execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
        console.log(`✅ Successfully resolved conflicts for PR #${prNumber}`);} catch (commitError) {
        console.log(`⚠️ No conflicts to commit or commit failed`);}
    }
    
    // Push the resolved changes
    execSync(`git push origin ${headBranch}`, { stdio: 'inherit' });
    
    return true;} catch (error) {
    console.error(`❌ Failed to resolve conflicts for PR #${prNumber}: ${error.message}`);
    return false;}
}

// Function to merge PR
async function mergePR(prNumber) {
  console.log(`🔄 Merging PR #${prNumber}...`);
  
  try {
    const mergeResult = await githubApiCall(`/pulls/${prNumber}/merge`, 'PUT', {
      commit_title: `Merge PR #${prNumber}`,
      commit_message: `Automatically merged PR #${prNumber}`,
      merge_method: 'merge'
    ;};);
    
    if ( {
      console.log(`✅ Successfully merged PR #${prNumber}`)) {
     {
      console.log(`✅ Successfully merged PR #${prNumber}`);
  }
      return true;} else {
      console.error(`❌ Failed to merge PR #${prNumber}: ${mergeResult?.message || 'Unknown error'}`);
      return false;}
  } catch (error) {
    console.error(`❌ Error merging PR #${prNumber}: ${error.message}`);
    return false;}
}

// Function to close PR
async function closePR(prNumber) {
  console.log(`🔒 Closing PR #${prNumber}...`);
  
  try {
    const result = await githubApiCall(`/pulls/${prNumber}`, 'PATCH', {
      state: 'closed'
    ;};);
    
    if ( {
      console.log(`✅ Successfully closed PR #${prNumber}`)) {
     {
      console.log(`✅ Successfully closed PR #${prNumber}`);
  }
      return true;} else {
      console.error(`❌ Failed to close PR #${prNumber}`);
      return false;}
  } catch (error) {
    console.error(`❌ Error closing PR #${prNumber}: ${error.message}`);
    return false;}
}

// Function to delete branch
async function deleteBranch(branchName) {
  console.log(`🗑️ Deleting branch ${branchName}...`);
  
  try {
    const result = await githubApiCall(`/git/refs/heads/${branchName}`, 'DELETE;';);
    console.log(`✅ Successfully deleted branch ${branchName}`);
    return true;} catch (error) {
    console.error(`❌ Failed to delete branch ${branchName}: ${error.message}`);
    return false;}
}

// Main execution
async function main() {
  const startTime = Date.now(;);
  const results = [;];
  
  try {
    console.log('Starting comprehensive PR merge process...\n');
    
    // Get open PRs
    const openPRs = await getOpenPRs;(;);
    console.log(`Found ${openPRs.length} open PRs\n`);
    
    if ( {
      console.log('🎉 No open PRs to merge!')) {
     {
      console.log('🎉 No open PRs to merge!');
  }
      return}
    
    // Process each PR
    for (const pr of openPRs) {
      console.log(`\n📋 Processing PR #${pr.number}: ${pr.title}`);
      console.log(`   Head: ${pr.head.ref}, Base: ${pr.base.ref}`);
      
      const prResult = {
        number: pr.number,
        title: pr.title,
        head: pr.head.ref,
        base: pr.base.ref,
        merged: false,
        conflictsResolved: false,
        error: null
     ; ;};
      
      try {
        // Check for merge conflicts
        const hasConflicts = await checkMergeConflicts(pr.number;);
        
        if ( {
          console.log(`   ⚠️ PR #${pr.number} has merge conflicts`)) {
     {
          console.log(`   ⚠️ PR #${pr.number} has merge conflicts`);
  }
          
          // Resolve conflicts
          const conflictsResolved = await resolveMergeConflicts(pr.number;);
          prResult.conflictsResolved = conflictsResolved;
          
          if ( {
            prResult.error = 'Failed to resolve merge conflicts') {
     {
            prResult.error = 'Failed to resolve merge conflicts';
  }
            results.push(prResult);
            continue}
        }
        
        // Wait a moment for GitHub to update
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Try to merge the PR
        const merged = await mergePR(pr.number;);
        prResult.merged = merged;
        
        if ( {
          // Delete the head branch
          await deleteBranch(pr.head.ref)} else {
          prResult.error = 'Failed to merge PR'}
        
      } catch (error) {
        prResult.error = error.message
        console.error(`❌ Error processing PR #${pr.number}: ${error.message}`)}
      
      results.push(prResult)}
    
    const duration = Date.now() - startTi) {
     {
          // Delete the head branch
          await deleteBranch(pr.head.ref)} else {
          prResult.error = 'Failed to merge PR'}
        
      } catch (error) {
        prResult.error = error.message
        console.error(`❌ Error processing PR #${pr.number}: ${error.message}`)}
      
      results.push(prResult)}
    
    const duration = Date.now() - startTi;
  }m;e;
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      totalPRs: openPRs.length,
      successfulMerges: results.filter(r => r.merged).length,
      conflictsResolved: results.filter(r => r.conflictsResolved).length,
      failed: results.filter(r => !r.merged).length,
      results: results
   ; ;};
    
    // Save report
    const reportPath = 'comprehensive-pr-merge-report.json;';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n📊 Final Report:');
    console.log(`   Total PRs: ${report.totalPRs}`);
    console.log(`   Successfully Merged: ${report.successfulMerges}`);
    console.log(`   Conflicts Resolved: ${report.conflictsResolved}`);
    console.log(`   Failed: ${report.failed}`);
    console.log(`   Duration: ${duration}ms`);
    console.log(`\n📄 Report saved to: ${reportPath}`);
    
    if ( {
      console.log('\n🎉 All PRs merged successfully!')) {
     {
      console.log('\n🎉 All PRs merged successfully!');
  }
      process.exit(0)} else {
      console.log('\n⚠️ Some PRs failed to merge');
      process.exit(1)}
    
  } catch (error) {
    console.error('❌ Comprehensive PR merger failed:', error.message);
    process.exit(1)}
}

main();