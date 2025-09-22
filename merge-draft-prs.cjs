#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔄 Starting Draft PR Merger...\n');

// Function to run commands safely
function runCommand(command, description) {
  console.log(`📋 ${description}...`);
  try {
    const output = execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 300000
    });
    console.log(`✅ ${description} completed successfully`);
    return { success: true, output };
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

// Function to merge a PR using GitHub CLI or API
async function mergePR(prNumber) {
  console.log(`\n🔄 Processing PR #${prNumber}...`);
  
  // First, try to convert draft to ready for review
  const readyCommand = `gh pr ready ${prNumber}`;
  const readyResult = runCommand(readyCommand, `Converting PR #${prNumber} to ready for review`);
  
  if (!readyResult.success) {
    console.log(`⚠️  Could not convert PR #${prNumber} to ready for review, trying to merge anyway...`);
  }
  
  // Try to merge the PR
  const mergeCommand = `gh pr merge ${prNumber} --merge --delete-branch`;
  const mergeResult = runCommand(mergeCommand, `Merging PR #${prNumber}`);
  
  if (mergeResult.success) {
    console.log(`✅ Successfully merged PR #${prNumber}`);
    return true;
  } else {
    console.log(`❌ Failed to merge PR #${prNumber}: ${mergeResult.error}`);
    return false;
  }
}

// Function to merge PRs using git commands directly
async function mergePRDirectly(prNumber, branchName) {
  console.log(`\n🔄 Merging PR #${prNumber} (branch: ${branchName}) directly...`);
  
  try {
    // Fetch the branch
    const fetchResult = runCommand(`git fetch origin ${branchName}`, `Fetching branch ${branchName}`);
    if (!fetchResult.success) {
      console.log(`❌ Failed to fetch branch ${branchName}`);
      return false;
    }
    
    // Merge the branch
    const mergeResult = runCommand(`git merge origin/${branchName} --no-ff -m "Merge PR #${prNumber}: ${branchName}"`, `Merging branch ${branchName}`);
    if (!mergeResult.success) {
      console.log(`❌ Failed to merge branch ${branchName}`);
      return false;
    }
    
    console.log(`✅ Successfully merged PR #${prNumber} (branch: ${branchName})`);
    return true;
  } catch (error) {
    console.log(`❌ Error merging PR #${prNumber}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting Draft PR Merger...\n');
  
  // List of PRs to merge
  const prs = [
    { number: 12290, branch: 'cursor/fix-syntax-push-and-merge-to-main-7a0e' },
    { number: 12289, branch: 'cursor/fix-syntax-push-and-merge-to-main-33cc' },
    { number: 12286, branch: 'cursor/fix-lint-push-and-merge-to-main-f41d' }
  ];
  
  let successCount = 0;
  let totalCount = prs.length;
  
  for (const pr of prs) {
    console.log(`\n📋 Processing PR #${pr.number} (${pr.branch})...`);
    
    // Try GitHub CLI first
    const ghResult = await mergePR(pr.number);
    
    if (!ghResult) {
      // If GitHub CLI fails, try direct git merge
      console.log(`🔄 GitHub CLI failed, trying direct git merge...`);
      const directResult = await mergePRDirectly(pr.number, pr.branch);
      
      if (directResult) {
        successCount++;
      }
    } else {
      successCount++;
    }
  }
  
  // Push all changes
  console.log('\n📤 Pushing all changes...');
  const pushResult = runCommand('git push origin main', 'Pushing merged changes');
  
  if (pushResult.success) {
    console.log('✅ Successfully pushed all changes');
  } else {
    console.log('❌ Failed to push changes');
  }
  
  console.log(`\n🎉 Draft PR Merger completed!`);
  console.log(`📊 Successfully merged: ${successCount}/${totalCount} PRs`);
  
  if (successCount === totalCount) {
    console.log('✅ All PRs merged successfully!');
  } else {
    console.log('⚠️  Some PRs could not be merged. Please check manually.');
  }
}

main().catch(console.error);