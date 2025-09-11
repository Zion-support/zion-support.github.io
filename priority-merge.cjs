#!/usr/bin/env node
const { execSync } = require('child_process');

// High priority branches that should be processed first
const priorityBranches = [
  '0parff-codex/centralize-api-error-handling-and-add-errorboundary',
  '0t8m4m-codex/update-project-color-palette',
  '14gqd5-codex/implement-checkout-flow-with-auth-redirect',
  '1dcwqi-codex/implement-global-pricing-with-currency-selection',
  '1fjs4s-codex/implement-instant-messaging-for-negotiations',
  '1nq1ky-codex/render-talent-profiles-with-error-states',
  '1sqc9r-codex/implement-light/dark-theme-with-persistence',
  '1tg4fy-codex/support-metric--imperial-units',
  '22xuo1-codex/implement-wishlist-functionality',
  '24727i-codex/implement-stripe-checkout-flow',
  '2k1ucv-codex/integrate-stripe-test-mode-checkout',
  '2xbrce-codex/introduce-automated-testing-with-jest-and-cypress',
  '306ipd-codex/add-new-products-page-with-10-items',
  '3bssgk-codex/disable-theme-toggle-and-set-default-dark-theme',
];

async function runCommand(command, description) {
  try {
    console.log(`Running: ${description}`);
    const result = execSync(command, {
      encoding: 'utf8',
      stdio: 'pipe',
      cwd: process.cwd(),
      maxBuffer: 1024 * 1024 * 50, // 50MB buffer
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
    console.log(`\n🔄 Processing priority branch: ${branchName}`);

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
      console.log(`⚠️  Merge conflicts in ${branchName}, resolving...`);
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
  console.log('🎯 Priority PR Merge Automation');
  console.log('================================');

  for (const branch of priorityBranches) {
    try {
      await processBranch(branch);
      // Small delay between branches
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.log(`❌ Failed to process ${branch}: ${error.message}`);
    }
  }

  console.log('\n🎉 Priority PR merge automation completed!');
}

main().catch(console.error);
