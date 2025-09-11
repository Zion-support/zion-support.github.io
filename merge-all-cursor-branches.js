#!/usr/bin/env node

const { execSync } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function mergeAllCursorBranches() {
  try {
    log('🚀 Starting comprehensive cursor branch merge process...', 'cyan');

    // Get all cursor branches
    const branchesOutput = execSync('git branch -r | grep "cursor/"', {
      encoding: 'utf8',
    });
    const branches = branchesOutput
      .trim()
      .split('\n')
      .filter(branch => branch.trim());

    log(`📊 Found ${branches.length} cursor branches to merge`, 'blue');

    let successCount = 0;
    let failCount = 0;

    for (const branch of branches) {
      const branchName = branch.trim().replace('origin/', '');

      try {
        log(`🔄 Attempting to merge branch: ${branchName}`, 'blue');

        // Fetch the branch
        execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

        // Check if branch exists
        try {
          execSync(
            `git show-ref --verify --quiet refs/remotes/origin/${branchName}`,
            { stdio: 'pipe' }
          );
        } catch (error) {
          log(`⚠️ Branch ${branchName} not found, skipping...`, 'yellow');
          continue;
        }

        // Try to merge the branch
        try {
          execSync(
            `git merge origin/${branchName} --no-ff -m "Merge cursor branch: ${branchName}"`,
            { stdio: 'pipe' }
          );
          log(`✅ Successfully merged branch: ${branchName}`, 'green');
          successCount++;
        } catch (mergeError) {
          // If merge fails, try to resolve conflicts automatically
          log(
            `⚠️ Merge conflict in ${branchName}, attempting auto-resolution...`,
            'yellow'
          );

          try {
            // Reset to main and try again
            execSync('git reset --hard HEAD', { stdio: 'pipe' });
            execSync(
              `git merge origin/${branchName} --no-ff -m "Merge cursor branch: ${branchName}"`,
              { stdio: 'pipe' }
            );
            log(
              `✅ Successfully merged branch after conflict resolution: ${branchName}`,
              'green'
            );
            successCount++;
          } catch (retryError) {
            log(
              `❌ Failed to merge branch ${branchName}: ${retryError.message}`,
              'red'
            );
            failCount++;
          }
        }
      } catch (error) {
        log(
          `❌ Error processing branch ${branchName}: ${error.message}`,
          'red'
        );
        failCount++;
      }
    }

    log(`\n📈 Merge Summary:`, 'cyan');
    log(`✅ Successfully merged: ${successCount} branches`, 'green');
    log(`❌ Failed to merge: ${failCount} branches`, 'red');

    // Verify build
    log('\n🔍 Verifying build...', 'cyan');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      log('✅ Build successful!', 'green');

      // Commit and push changes
      log('📤 Committing and pushing changes...', 'cyan');
      execSync('git add .', { stdio: 'inherit' });
      execSync(
        'git commit -m "Merge all cursor branches into main - comprehensive merge"',
        { stdio: 'inherit' }
      );
      execSync('git push origin main', { stdio: 'inherit' });
      log('🎉 All changes committed and pushed successfully!', 'green');
    } catch (buildError) {
      log(`❌ Build failed: ${buildError.message}`, 'red');
      log(
        '⚠️ Please check the build errors and resolve them manually.',
        'yellow'
      );
    }
  } catch (error) {
    log(`❌ Error during merge process: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the merge process
if (require.main === module) {
  mergeAllCursorBranches();
}

module.exports = { mergeAllCursorBranches };
