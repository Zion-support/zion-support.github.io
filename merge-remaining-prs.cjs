#!/usr/bin/env node
const { execSync } = require('child_process');

const remainingBranches = [
  '2enrzx-codex/implement-feature-flags-and-a/b-testing',
  '2qzh01-codex/fix-npm-eio-error-during-install',
  '2zlocq-codex/fix-login-form-submission',
  '306l03-codex/fix-blank-screen-issue',
  '3bk25l-codex/fix-test-expectation-for-fetch-rejection',
  '42l7l1-codex/check-logs-and-fix-errors',
  '42zrxf-codex/improve-discoverability-with-seo-features',
  '4cssl2-codex/fix-typescript-errors-in-components',
  '4d93zy-codex/fix-npm-eio-error-during-install',
];

async function runCommand(command, description) {
  try {
    console.log(`Running: ${description}`);
    const result = execSync(command, {
      encoding: 'utf8',
      stdio: 'pipe',
      cwd: process.cwd(),
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    throw error;
  }
}

async function processBranch(branchName) {
  try {
    console.log(`\n🔄 Processing branch: ${branchName}`);

    // Fetch latest changes
    await runCommand('git fetch origin', 'Fetching latest changes');

    // Checkout the branch
    await runCommand(
      `git checkout ${branchName}`,
      `Checking out ${branchName}`
    );

    // Merge main into the branch
    try {
      await runCommand(
        'git merge main --no-ff -m "Merge main into ' + branchName + '"',
        `Merging main into ${branchName}`
      );
    } catch (mergeError) {
      console.log(
        `⚠️  Merge conflicts in ${branchName}, attempting to resolve...`
      );
      // Try to resolve conflicts by keeping our changes
      try {
        await runCommand(
          'git checkout --ours .',
          'Resolving conflicts by keeping our changes'
        );
        await runCommand('git add .', 'Adding resolved files');
        await runCommand(
          `git commit -m "Resolve merge conflicts in ${branchName}"`,
          'Committing resolved conflicts'
        );
      } catch (resolveError) {
        console.log(`❌ Could not resolve conflicts in ${branchName}`);
        throw resolveError;
      }
    }

    // Push the updated branch
    await runCommand(
      `git push origin ${branchName}`,
      `Pushing updated ${branchName}`
    );

    // Switch back to main
    await runCommand('git checkout main', 'Switching back to main');

    // Merge the branch into main
    await runCommand(
      `git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`,
      `Merging ${branchName} into main`
    );

    // Push main
    await runCommand('git push origin main', 'Pushing updated main');

    console.log(`✅ Successfully merged ${branchName} into main`);

    // Delete the remote branch
    try {
      await runCommand(
        `git push origin --delete ${branchName}`,
        `Deleting remote branch ${branchName}`
      );
    } catch (deleteError) {
      console.log(`⚠️  Could not delete remote branch ${branchName}`);
    }
  } catch (error) {
    console.log(`❌ Failed to process ${branchName}: ${error.message}`);
    // Switch back to main on error
    try {
      await runCommand(
        'git checkout main',
        'Switching back to main after error'
      );
    } catch (checkoutError) {
      console.log(`❌ Error switching back to main: ${checkoutError.message}`);
    }
  }
}

async function main() {
  console.log('🚀 Remaining PR Merge Automation');
  console.log('=================================');

  for (const branch of remainingBranches) {
    try {
      await processBranch(branch);
      // Small delay between branches
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.log(`❌ Failed to process ${branch}: ${error.message}`);
    }
  }

  console.log('\n🎉 Remaining PR merge automation completed!');
}

main().catch(console.error);
