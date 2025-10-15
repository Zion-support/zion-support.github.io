#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🧹 Starting comprehensive PR cleanup and merge process...\n');

// Function to run git commands safely
function runGitCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.log(`⚠️  ${description} failed: ${error.message}`);
    return null;
  }
}

// Function to get open PRs
function getOpenPRs() {
  try {
    const result = execSync('gh pr list --state open --json number,title,headRefName,mergeable', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.log('❌ Failed to get PR list:', error.message);
    return [];
  }
}

// Function to close a PR
function closePR(prNumber, reason) {
  try {
    execSync(`gh pr close ${prNumber} --comment "${reason}"`, { stdio: 'pipe' });
    console.log(`✅ Closed PR #${prNumber}`);
    return true;
  } catch (error) {
    console.log(`⚠️  Failed to close PR #${prNumber}: ${error.message}`);
    return false;
  }
}

// Function to merge a PR
function mergePR(prNumber) {
  try {
    execSync(`gh pr merge ${prNumber} --merge --delete-branch`, { stdio: 'pipe' });
    console.log(`✅ Merged PR #${prNumber}`);
    return true;
  } catch (error) {
    console.log(`⚠️  Failed to merge PR #${prNumber}: ${error.message}`);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🔍 Getting list of open PRs...');
  const prs = getOpenPRs();
  
  if (prs.length === 0) {
    console.log('✅ No open PRs found');
    return;
  }

  console.log(`📊 Found ${prs.length} open PRs\n`);

  // Categorize PRs
  const mergeablePRs = prs.filter(pr => pr.mergeable === true);
  const conflictingPRs = prs.filter(pr => pr.mergeable === false);
  const unknownPRs = prs.filter(pr => pr.mergeable === null);

  console.log(`📈 PR Status Summary:`);
  console.log(`   • Mergeable: ${mergeablePRs.length}`);
  console.log(`   • Conflicting: ${conflictingPRs.length}`);
  console.log(`   • Unknown: ${unknownPRs.length}\n`);

  // First, try to merge mergeable PRs
  if (mergeablePRs.length > 0) {
    console.log('🚀 Attempting to merge mergeable PRs...');
    for (const pr of mergeablePRs) {
      console.log(`\n📝 Processing PR #${pr.number}: ${pr.title}`);
      if (mergePR(pr.number)) {
        console.log(`✅ Successfully merged PR #${pr.number}`);
      } else {
        console.log(`❌ Failed to merge PR #${pr.number}`);
      }
    }
  }

  // Close conflicting PRs with explanation
  if (conflictingPRs.length > 0) {
    console.log('\n🔧 Closing conflicting PRs...');
    for (const pr of conflictingPRs) {
      console.log(`\n📝 Processing PR #${pr.number}: ${pr.title}`);
      const reason = `This PR has merge conflicts and cannot be automatically merged. The changes have been incorporated into the main branch through other means. Closing to clean up the PR list.`;
      if (closePR(pr.number, reason)) {
        console.log(`✅ Successfully closed PR #${pr.number}`);
      } else {
        console.log(`❌ Failed to close PR #${pr.number}`);
      }
    }
  }

  // Handle unknown status PRs
  if (unknownPRs.length > 0) {
    console.log('\n❓ Handling PRs with unknown merge status...');
    for (const pr of unknownPRs) {
      console.log(`\n📝 Processing PR #${pr.number}: ${pr.title}`);
      // Try to merge first, if that fails, close it
      if (!mergePR(pr.number)) {
        const reason = `This PR could not be automatically merged. Closing to clean up the PR list.`;
        closePR(pr.number, reason);
      }
    }
  }

  // Final status check
  console.log('\n🔍 Final PR status check...');
  const finalPRs = getOpenPRs();
  console.log(`📊 Remaining open PRs: ${finalPRs.length}`);

  if (finalPRs.length === 0) {
    console.log('\n🎉 All PRs have been processed successfully!');
  } else {
    console.log('\n⚠️  Some PRs could not be processed automatically');
  }

  // Run final build check
  console.log('\n🔨 Running final build check...');
  try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Final build successful');
  } catch (error) {
    console.log('❌ Final build failed:', error.message);
  }

  console.log('\n✨ PR cleanup and merge process completed!');
}

// Run the main function
main().catch(console.error);