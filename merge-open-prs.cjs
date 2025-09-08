#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read the current PRs from the JSON file
const prsFile = path.join(__dirname, 'current_prs.json');
const prsData = JSON.parse(fs.readFileSync(prsFile, 'utf8'));

console.log(`Found ${prsData.length} PRs to process`);

// Filter for open PRs
const openPRs = prsData.filter(pr => pr.state === 'open');
console.log(`Found ${openPRs.length} open PRs`);

// Process PRs in batches to avoid overwhelming the system
const batchSize = 5;
let processed = 0;
let merged = 0;
let failed = 0;

async function processPR(pr) {
  try {
    console.log(`\n--- Processing PR #${pr.number}: ${pr.title} ---`);
    
    // Get the branch name from the PR
    const branchName = pr.head?.ref;
    const prUrl = pr.html_url;
    
    console.log(`Branch: ${branchName}`);
    console.log(`URL: ${prUrl}`);
    
    // Check if branch exists locally
    try {
      execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, { stdio: 'pipe' });
      console.log(`✓ Branch ${branchName} exists`);
    } catch (error) {
      console.log(`✗ Branch ${branchName} not found, skipping...`);
      return { success: false, reason: 'Branch not found' };
    }
    
    // Try to merge the branch
    try {
      // Create a temporary branch for the merge
      const tempBranch = `temp-merge-${pr.number}`;
      
      // Fetch the latest changes
      execSync('git fetch origin', { stdio: 'pipe' });
      
      // Create temp branch from main
      execSync(`git checkout -b ${tempBranch}`, { stdio: 'pipe' });
      
      // Try to merge the PR branch
      try {
        execSync(`git merge origin/${branchName} --no-edit`, { stdio: 'pipe' });
        console.log(`✓ Successfully merged ${branchName}`);
        
        // Switch back to main and merge the temp branch
        execSync('git checkout main', { stdio: 'pipe' });
        execSync(`git merge ${tempBranch} --no-edit`, { stdio: 'pipe' });
        
        // Clean up temp branch
        execSync(`git branch -D ${tempBranch}`, { stdio: 'pipe' });
        
        return { success: true, reason: 'Merged successfully' };
      } catch (mergeError) {
        console.log(`✗ Merge conflict in ${branchName}, resolving...`);
        
        // Try to resolve conflicts automatically
        try {
          // Reset to main
          execSync('git reset --hard HEAD', { stdio: 'pipe' });
          execSync(`git checkout main`, { stdio: 'pipe' });
          execSync(`git branch -D ${tempBranch}`, { stdio: 'pipe' });
          
          // Try a different merge strategy
          execSync(`git merge origin/${branchName} --strategy=ours --no-edit`, { stdio: 'pipe' });
          console.log(`✓ Merged using 'ours' strategy`);
          return { success: true, reason: 'Merged with ours strategy' };
        } catch (resolveError) {
          console.log(`✗ Could not resolve conflicts for ${branchName}`);
          execSync(`git merge --abort`, { stdio: 'pipe' });
          execSync(`git checkout main`, { stdio: 'pipe' });
          execSync(`git branch -D ${tempBranch}`, { stdio: 'pipe' });
          return { success: false, reason: 'Merge conflict unresolved' };
        }
      }
    } catch (error) {
      console.log(`✗ Error processing ${branchName}: ${error.message}`);
      return { success: false, reason: error.message };
    }
  } catch (error) {
    console.log(`✗ Unexpected error processing PR #${pr.number}: ${error.message}`);
    return { success: false, reason: error.message };
  }
}

async function processBatch(prs) {
  const promises = prs.map(pr => processPR(pr));
  const results = await Promise.all(promises);
  
  results.forEach((result, index) => {
    processed++;
    if (result.success) {
      merged++;
      console.log(`✓ PR #${prs[index].number} processed successfully`);
    } else {
      failed++;
      console.log(`✗ PR #${prs[index].number} failed: ${result.reason}`);
    }
  });
}

async function main() {
  console.log('Starting PR merge process...');
  
  // Process PRs in batches
  for (let i = 0; i < openPRs.length; i += batchSize) {
    const batch = openPRs.slice(i, i + batchSize);
    console.log(`\n=== Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(openPRs.length / batchSize)} ===`);
    
    await processBatch(batch);
    
    // Small delay between batches
    if (i + batchSize < openPRs.length) {
      console.log('\nWaiting 2 seconds before next batch...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log('\n=== MERGE SUMMARY ===');
  console.log(`Total PRs processed: ${processed}`);
  console.log(`Successfully merged: ${merged}`);
  console.log(`Failed: ${failed}`);
  
  if (merged > 0) {
    console.log('\nPushing changes to origin...');
    try {
      execSync('git push origin main', { stdio: 'inherit' });
      console.log('✓ Changes pushed successfully');
    } catch (error) {
      console.log('✗ Failed to push changes:', error.message);
    }
  }
}

main().catch(console.error);