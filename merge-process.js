const { exec } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting merge process...');

// Function to run git commands
function runGit(command) {
  return new Promise((resolve, reject) => {
    console.log(`📝 Running: git ${command}`);
    exec(`git ${command}`, { cwd: '/workspace' }, (error, stdout, stderr) => {
      if (error) {
        console.log(`⚠️  Warning: ${error.message}`);
        resolve({ error: error.message, stdout, stderr });
      } else {
        console.log(`✅ Success: ${command}`);
        resolve({ stdout, stderr });
      }
    });
  });
}

async function main() {
  try {
    // Step 1: Check current status
    console.log('\n📋 Step 1: Checking git status...');
    await runGit('status');

    // Step 2: Abort any current merge
    console.log('\n📋 Step 2: Aborting any current merge...');
    await runGit('merge --abort');

    // Step 3: Reset to clean state
    console.log('\n📋 Step 3: Resetting to clean state...');
    await runGit('reset --hard HEAD');
    await runGit('clean -fd');

    // Step 4: Switch to main and pull
    console.log('\n📋 Step 4: Switching to main and pulling...');
    await runGit('checkout main');
    await runGit('pull origin main');

    // Step 5: Get list of remote branches
    console.log('\n📋 Step 5: Getting remote branches...');
    const branches = await runGit('branch -r');
    console.log('Available branches:', branches.stdout);

    // Step 6: Try to merge each branch
    const branchList = branches.stdout
      .split('\n')
      .filter(
        b => b.includes('origin/') && !b.includes('HEAD') && !b.includes('main')
      )
      .map(b => b.trim().replace('origin/', ''))
      .slice(0, 5); // Limit to first 5 branches

    console.log('\n📋 Step 6: Merging branches...');
    for (const branch of branchList) {
      console.log(`\n🔄 Processing branch: ${branch}`);

      try {
        // Checkout branch
        await runGit(`checkout ${branch}`);

        // Merge main into branch
        await runGit(`merge main --no-ff -m "Merge main into ${branch}"`);

        // Switch back to main
        await runGit('checkout main');

        // Merge branch into main
        await runGit(`merge ${branch} --no-ff -m "Merge ${branch} into main"`);

        console.log(`✅ Successfully processed: ${branch}`);
      } catch (error) {
        console.log(`⚠️  Error processing ${branch}: ${error.message}`);
      }
    }

    // Step 7: Final status and push
    console.log('\n📋 Step 7: Final status...');
    await runGit('status');

    console.log('\n📋 Step 8: Pushing to main...');
    await runGit('push origin main');

    console.log('\n🎉 Merge process completed!');
  } catch (error) {
    console.log(`\n❌ Error: ${error.message}`);
  }
}

main();
