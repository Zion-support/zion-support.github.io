#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// Read the PRs JSON file
const prsData = JSON.parse(
  fs.readFileSync('/workspace/current_prs.json', 'utf8')
);

// Filter open PRs
const openPRs = prsData.filter(pr => pr.state === 'open');

console.log(`Found ${openPRs.length} open PRs to process`);

// Function to execute git commands safely
function execGitCommand(command, description) {
  try {
    console.log(`\n🔄 ${description}`);
    const result = execSync(command, {
      cwd: '/workspace',
      encoding: 'utf8',
      stdio: 'pipe',
    });
    console.log(`✅ ${description} - Success`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} - Failed: ${error.message}`);
    return null;
  }
}

// Function to merge a PR
async function mergePR(pr) {
  const prNumber = pr.number;
  const prTitle = pr.title;
  const branchName = pr.head?.ref || `pr-${prNumber}`;

  console.log(`\n📋 Processing PR #${prNumber}: ${prTitle}`);

  // Fetch the latest changes
  execGitCommand(
    'git fetch origin',
    `Fetching latest changes for PR #${prNumber}`
  );

  // Try to checkout the branch
  const checkoutResult = execGitCommand(
    `git checkout -b temp-merge-${prNumber} origin/${branchName}`,
    `Creating temporary branch for PR #${prNumber}`
  );

  if (!checkoutResult) {
    console.log(
      `⚠️  Could not checkout branch for PR #${prNumber}, trying alternative approach`
    );
    // Try to merge directly
    const mergeResult = execGitCommand(
      `git merge origin/${branchName} --no-ff -m "Merge PR #${prNumber}: ${prTitle}"`,
      `Merging PR #${prNumber} directly`
    );

    if (mergeResult) {
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed to merge PR #${prNumber}`);
      return false;
    }
  }

  // Try to merge into main
  execGitCommand('git checkout main', 'Switching to main branch');

  const mergeResult = execGitCommand(
    `git merge temp-merge-${prNumber} --no-ff -m "Merge PR #${prNumber}: ${prTitle}"`,
    `Merging PR #${prNumber} into main`
  );

  if (mergeResult) {
    // Clean up temporary branch
    execGitCommand(
      `git branch -D temp-merge-${prNumber}`,
      `Cleaning up temporary branch for PR #${prNumber}`
    );
    console.log(`✅ Successfully merged PR #${prNumber}`);
    return true;
  } else {
    // Clean up on failure
    execGitCommand(
      `git branch -D temp-merge-${prNumber}`,
      `Cleaning up failed merge for PR #${prNumber}`
    );
    console.log(`❌ Failed to merge PR #${prNumber}`);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting PR merge process...');

  // Ensure we're on main and up to date
  execGitCommand('git checkout main', 'Switching to main branch');
  execGitCommand('git pull origin main', 'Pulling latest main');

  let successCount = 0;
  let failCount = 0;

  // Process PRs in batches to avoid overwhelming the system
  const batchSize = 5;
  for (let i = 0; i < openPRs.length; i += batchSize) {
    const batch = openPRs.slice(i, i + batchSize);
    console.log(
      `\n📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(openPRs.length / batchSize)}`
    );

    for (const pr of batch) {
      const success = await mergePR(pr);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }

      // Small delay between PRs
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Rebase with remote and push after each batch to avoid divergence
    execGitCommand(
      'git pull --rebase origin main',
      'Rebasing main with remote before push'
    );
    let pushed = execGitCommand(
      'git push origin main',
      'Pushing merged changes to origin'
    );
    if (!pushed) {
      // Fallback in case remote moved between rebase and push
      execGitCommand(
        'git pull --rebase origin main',
        'Retry rebase before fallback push'
      );
      execGitCommand(
        'git push --force-with-lease origin main',
        'Force-with-lease push to origin'
      );
    }
  }

  console.log(`\n🎉 Merge process completed!`);
  console.log(`✅ Successfully merged: ${successCount} PRs`);
  console.log(`❌ Failed to merge: ${failCount} PRs`);

  // Final sync and push
  execGitCommand('git pull --rebase origin main', 'Final rebase with remote');
  let finalPush = execGitCommand(
    'git push origin main',
    'Final push to origin'
  );
  if (!finalPush) {
    execGitCommand(
      'git push --force-with-lease origin main',
      'Final force-with-lease push to origin'
    );
  }
}

// Run the script
main().catch(console.error);
