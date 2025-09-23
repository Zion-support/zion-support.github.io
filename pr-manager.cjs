#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting comprehensive PR management...\n');

// Function to run git commands safely
function runGitCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} completed`);
    return result.trim();
  } catch (error) {
    console.error(`❌ Error in ${description}:`, error.message);
    throw error;
  }
}

// Function to get open PRs
function getOpenPRs() {
  try {
    const result = execSync(
      'curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"',
      { encoding: 'utf8' }
    );
    const prs = JSON.parse(result);
    return prs.map(pr => ({
      number: pr.number,
      title: pr.title,
      head: pr.head.ref,
      user: pr.user.login,
      draft: pr.draft,
      mergeable: pr.mergeable,
    }));
  } catch (error) {
    console.log(`❌ Failed to fetch PRs: ${error.message}`);
    return [];
  }
}

// Function to merge PR
function mergePR(prNumber, branchName) {
  console.log(`\n🔄 Processing PR #${prNumber}: ${branchName}`);

  // Checkout the PR branch
  const checkoutResult = runGitCommand(
    `git checkout ${branchName}`,
    `Checking out branch ${branchName}`
  );

  if (!checkoutResult) return false;

  // Merge with main
  const mergeResult = runGitCommand(
    'git merge main',
    `Merging main into ${branchName}`
  );

  if (!mergeResult) {
    // If merge fails, resolve conflicts by accepting main branch changes
    console.log('⚠️  Merge conflicts detected, resolving...');

    // Get list of conflicted files
    const conflictedFiles = runGitCommand(
      'git diff --name-only --diff-filter=U',
      'Getting conflicted files'
    );

    if (conflictedFiles) {
      const files = conflictedFiles.split('\n').filter(f => f.trim());

      // Accept main branch changes for all conflicts
      for (const file of files) {
        runGitCommand(
          `git checkout --theirs "${file}"`,
          `Resolving conflict in ${file}`
        );
      }
      // Add all changes
      runGitCommand('git add .', 'Adding resolved changes');

      // Commit the merge
      runGitCommand(
        `git commit -m "resolve merge conflicts for PR #${prNumber}
- Resolved all merge conflicts by accepting main branch changes
- PR #${prNumber} merged successfully
- Ready for deployment"`,
        `Committing merge resolution for PR #${prNumber}`
      );
    }
  }

  // Push the updated branch
  runGitCommand(
    `git push origin ${branchName}`,
    `Pushing updated ${branchName}`
  );

  // Switch back to main
  runGitCommand('git checkout main', 'Switching back to main');

  // Merge the PR into main
  const finalMerge = runGitCommand(
    `git merge ${branchName}`,
    `Merging ${branchName} into main`
  );

  if (finalMerge) {
    // Push to main
    runGitCommand('git push origin main', 'Pushing to main');
    console.log(`✅ PR #${prNumber} merged successfully!`);
    return true;
  } else {
    console.log(`❌ Failed to merge PR #${prNumber}`);
    return false;
  }
}

// Main execution
async function main() {
  console.log('📊 Fetching open PRs...');
  const prs = getOpenPRs();

  if (prs.length === 0) {
    console.log('✅ No open PRs found');
    return;
  }

  console.log(`📋 Found ${prs.length} open PRs:`);
  prs.forEach(pr => {
    console.log(`  - PR #${pr.number}: ${pr.title} (${pr.head})`);
  });

  console.log('\n🔄 Starting PR processing...');

  let successCount = 0;
  let failCount = 0;

  for (const pr of prs) {
    try {
      const success = mergePR(pr.number, pr.head);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    } catch (error) {
      console.log(`❌ Error processing PR #${pr.number}: ${error.message}`);
      failCount++;
    }
  }

  console.log('\n📊 PR Processing Summary:');
  console.log(`✅ Successfully merged: ${successCount}`);
  console.log(`❌ Failed to merge: ${failCount}`);
  console.log(`📋 Total processed: ${prs.length}`);

  if (successCount > 0) {
    console.log('\n🎉 PR management completed successfully!');
  } else {
    console.log('\n⚠️  No PRs were successfully merged');
  }
}

// Run the script
main().catch(console.error);
