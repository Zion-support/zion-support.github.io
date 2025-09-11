#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 MERGING ALL OPEN PRs AND BRANCHES');
console.log('='.repeat(50));

function runCommand(command, description) {
  try {
    console.log(`\n🔧 ${description}...`);
    const result = execSync(command, {
      stdio: 'pipe',
      encoding: 'utf8',
      cwd: '/workspace',
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`⚠️ ${description} had issues: ${error.message}`);
    return null;
  }
}

// Get recent feature branches
function getRecentBranches() {
  const branches = runCommand(
    'git branch -r --sort=-committerdate | head -20',
    'Getting recent branches'
  );
  if (!branches) return [];

  return branches
    .split('\n')
    .filter(
      branch =>
        branch.trim() && !branch.includes('HEAD') && !branch.includes('main')
    )
    .map(branch => branch.trim().replace('origin/', ''))
    .slice(0, 10); // Process top 10 recent branches
}

// Merge a branch with conflict resolution
function mergeBranch(branch) {
  try {
    console.log(`\n🔄 Processing branch: ${branch}`);
    runCommand(`git fetch origin ${branch}`, `Fetching ${branch}`);

    // Try to merge
    const mergeResult = runCommand(
      `git merge origin/${branch} --no-ff -m "Merge branch ${branch} into main"`,
      `Merging ${branch}`
    );

    if (mergeResult) {
      console.log(`✅ Successfully merged ${branch}`);
      return true;
    } else {
      console.log(`⚠️ Merge conflict in ${branch}, resolving...`);

      // Get conflicted files
      const conflictedFiles = runCommand(
        'git diff --name-only --diff-filter=U',
        'Getting conflicted files'
      );

      if (conflictedFiles) {
        const files = conflictedFiles
          .trim()
          .split('\n')
          .filter(f => f.trim());
        console.log(`Found ${files.length} conflicted files:`, files);

        // Resolve conflicts by taking the incoming version
        for (const file of files) {
          console.log(`🔧 Resolving conflicts in ${file}...`);
          runCommand(`git checkout --theirs "${file}"`, `Resolving ${file}`);
          runCommand(`git add "${file}"`, `Adding ${file}`);
        }

        // Commit the resolved conflicts
        const commitResult = runCommand(
          'git commit -m "Resolve merge conflicts in ' + branch + '"',
          `Committing resolved conflicts for ${branch}`
        );

        if (commitResult) {
          console.log(`✅ Successfully resolved and merged ${branch}`);
          return true;
        } else {
          console.log(`❌ Failed to resolve conflicts in ${branch}`);
          runCommand('git merge --abort', 'Aborting failed merge');
          return false;
        }
      } else {
        console.log(`❌ Failed to merge ${branch}`);
        runCommand('git merge --abort', 'Aborting failed merge');
        return false;
      }
    }
  } catch (error) {
    console.log(`❌ Error processing ${branch}: ${error.message}`);
    runCommand('git merge --abort', 'Aborting failed merge');
    return false;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting comprehensive PR merge process...');

  // Get recent branches
  const branches = getRecentBranches();
  console.log(`Found ${branches.length} recent branches to process:`, branches);

  let mergedCount = 0;
  let failedCount = 0;

  for (const branch of branches) {
    if (mergeBranch(branch)) {
      mergedCount++;
    } else {
      failedCount++;
    }
  }

  console.log(`\n📊 Merge Summary:`);
  console.log(`✅ Successfully merged: ${mergedCount} branches`);
  console.log(`❌ Failed to merge: ${failedCount} branches`);

  // Push changes
  console.log('\n📤 Pushing changes to main...');
  runCommand('git push origin main', 'Pushing to main branch');

  console.log('\n🎉 MERGE PROCESS COMPLETED!');
  console.log('='.repeat(50));
}

main().catch(console.error);
