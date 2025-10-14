#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Starting automatic PR merging process...');

// Function to get all open PRs
function getOpenPRs() {
  try {
    const output = execSync('gh pr list --state open --json number,headRefName,title', { encoding: 'utf8' });
    const prs = JSON.parse(output);
    return prs;
  } catch (error) {
    console.error('❌ Error getting open PRs:', error.message);
    return [];
  }
}

// Function to merge a PR
function mergePR(prNumber, branchName) {
  try {
    console.log(`🔄 Merging PR #${prNumber} (${branchName})...`);
    
    // Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });
    
    // Try to merge
    try {
      execSync(`git merge origin/${branchName} --no-commit`, { stdio: 'inherit' });
      console.log(`✅ Successfully merged PR #${prNumber}`);
      
      // Commit the merge
      execSync(`git commit -m "Merge PR #${prNumber}: ${branchName}"`, { stdio: 'inherit' });
      
      // Close the PR
      execSync(`gh pr close ${prNumber} --comment "Automatically merged via script"`, { stdio: 'inherit' });
      
      return true;
    } catch (mergeError) {
      console.log(`⚠️  Merge conflict in PR #${prNumber}, resolving automatically...`);
      
      // Run our conflict resolution script
      try {
        execSync('node resolve_conflicts.js', { stdio: 'inherit' });
        
        // Commit the resolved conflicts
        execSync(`git commit -m "Merge PR #${prNumber}: ${branchName} - conflicts resolved"`, { stdio: 'inherit' });
        
        // Close the PR
        execSync(`gh pr close ${prNumber} --comment "Automatically merged via script with conflict resolution"`, { stdio: 'inherit' });
        
        console.log(`✅ Successfully merged PR #${prNumber} with conflict resolution`);
        return true;
      } catch (resolveError) {
        console.error(`❌ Failed to resolve conflicts for PR #${prNumber}:`, resolveError.message);
        return false;
      }
    }
  } catch (error) {
    console.error(`❌ Error merging PR #${prNumber}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('📋 Getting list of open PRs...');
  const openPRs = getOpenPRs();
  
  if (openPRs.length === 0) {
    console.log('✅ No open PRs found.');
    return;
  }

  console.log(`📝 Found ${openPRs.length} open PRs:`);
  openPRs.forEach(pr => console.log(`   - PR #${pr.number}: ${pr.title} (${pr.headRefName})`));

  let mergedCount = 0;
  let totalCount = openPRs.length;

  // Process PRs in reverse order (newest first) to avoid conflicts
  const sortedPRs = openPRs.sort((a, b) => b.number - a.number);

  for (const pr of sortedPRs) {
    if (mergePR(pr.number, pr.headRefName)) {
      mergedCount++;
    }
    
    // Push changes after each merge
    try {
      execSync('git push origin main', { stdio: 'inherit' });
      console.log('✅ Pushed changes to remote main');
    } catch (pushError) {
      console.error('❌ Error pushing to remote:', pushError.message);
    }
  }

  console.log(`\n📊 Merge Summary:`);
  console.log(`   ✅ Successfully merged: ${mergedCount}/${totalCount} PRs`);
  
  if (mergedCount < totalCount) {
    console.log(`   ⚠️  ${totalCount - mergedCount} PRs failed to merge`);
  }

  // Final push
  try {
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Final push completed');
  } catch (pushError) {
    console.error('❌ Error in final push:', pushError.message);
  }
}

main();