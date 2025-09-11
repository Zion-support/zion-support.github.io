#!/usr/bin/env node
const { execSync } = require('child_process');

const branches = [
  '1m9jcs-codex/fix-client-side-rendering-and-javascript-errors',
  '1nc0kn-codex/fix-blank-screen-on-app-load',
  '1ry69n-codex/fix-npm-eio-error-during-install',
  '2503nr-codex/fix-ts2614-error-with-suspense-import',
  '26ywwb-codex/fix-client-side-rendering-and-javascript-errors',
  '0smfo8-codex/fix-404-error-for-non-existent-route',
  '0une71-codex/fix-unsupported-shell-syntax-in-setup.sh',
  '0nylrk-codex/fix-footer-contact-link',
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
  console.log('🚀 Simple PR Merge Automation');
  console.log('==============================');

  for (const branch of branches) {
    try {
      await processBranch(branch);
      // Small delay between branches
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.log(`❌ Failed to process ${branch}: ${error.message}`);
    }
  }

  console.log('\n🎉 PR merge automation completed!');
}

main().catch(console.error);
