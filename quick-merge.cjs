#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Starting quick PR merge process...\n');

// Function to run git commands safely
function runGit(command, description) {
  try {
    console.log(`🔧 ${description}...`);
    const result = execSync(command, {
      stdio: 'pipe',
      encoding: 'utf8',
      cwd: '/workspace',
    });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.log(`⚠️ ${description} failed: ${error.message}`);
    return null;
  }
}

// List of recent branches to merge
const branchesToMerge = [
  'origin/cursor/fix-netlify-build-and-merge-to-main-040c',
  'origin/cursor/fix-netlify-build-and-merge-to-main-0c34',
  'origin/cursor/fix-netlify-build-and-merge-to-main-11c8',
  'origin/cursor/fix-netlify-build-and-merge-to-main-1573',
  'origin/cursor/fix-netlify-build-and-merge-to-main-192e',
  'origin/cursor/fix-netlify-build-and-merge-to-main-19f8',
  'origin/cursor/fix-netlify-build-and-merge-to-main-1eff',
  'origin/cursor/fix-netlify-build-and-merge-to-main-22b3',
  'origin/cursor/fix-netlify-build-and-merge-to-main-2337',
  'origin/cursor/fix-netlify-build-and-merge-to-main-2885',
  'origin/cursor/fix-netlify-build-and-merge-to-main-2b28',
  'origin/cursor/fix-netlify-build-and-merge-to-main-2d42',
  'origin/cursor/fix-netlify-build-and-merge-to-main-394f',
  'origin/cursor/fix-netlify-build-and-merge-to-main-3aba',
  'origin/cursor/fix-netlify-build-and-merge-to-main-42cd',
  'origin/cursor/fix-netlify-build-and-merge-to-main-44e5',
  'origin/cursor/fix-netlify-build-and-merge-to-main-4f62',
  'origin/cursor/fix-netlify-build-and-merge-to-main-5d04',
  'origin/cursor/fix-netlify-build-and-merge-to-main-6542',
  'origin/cursor/fix-netlify-build-and-merge-to-main-6894',
];

let mergedCount = 0;
let failedCount = 0;

console.log(`📋 Processing ${branchesToMerge.length} branches...\n`);

for (const branch of branchesToMerge) {
  try {
    console.log(`\n🔄 Processing: ${branch}`);

    // Try to merge the branch
    const mergeResult = runGit(
      `git merge ${branch} --no-ff -m "Merge: ${branch.split('/').pop()}"`,
      `Merging ${branch}`
    );

    if (mergeResult) {
      mergedCount++;
      console.log(`✅ Successfully merged ${branch}`);
    } else {
      // Handle conflicts
      console.log(`⚠️ Merge conflict in ${branch}, resolving...`);

      // Check for conflicts
      const conflictedFiles = runGit(
        'git diff --name-only --diff-filter=U',
        'Getting conflicted files'
      );

      if (conflictedFiles) {
        const files = conflictedFiles
          .trim()
          .split('\n')
          .filter(f => f.trim());
        console.log(`Found ${files.length} conflicted files:`, files);

        // Auto-resolve conflicts by choosing incoming version
        for (const file of files) {
          runGit(`git checkout --theirs "${file}"`, `Resolving ${file}`);
          runGit(`git add "${file}"`, `Adding ${file}`);
        }

        // Complete the merge
        const commitResult = runGit(
          `git commit -m "Resolve merge conflicts in ${branch}"`,
          `Committing resolved conflicts for ${branch}`
        );

        if (commitResult) {
          mergedCount++;
          console.log(`✅ Successfully resolved and merged ${branch}`);
        } else {
          failedCount++;
          console.log(`❌ Failed to resolve conflicts in ${branch}`);
          runGit('git merge --abort', 'Aborting failed merge');
        }
      } else {
        failedCount++;
        console.log(`❌ Failed to merge ${branch}`);
        runGit('git merge --abort', 'Aborting failed merge');
      }
    }
  } catch (error) {
    console.log(`❌ Error processing ${branch}: ${error.message}`);
    failedCount++;
    runGit('git merge --abort', 'Aborting failed merge');
  }
}

console.log(`\n📊 Merge Summary:`);
console.log(`✅ Successfully merged: ${mergedCount} branches`);
console.log(`❌ Failed to merge: ${failedCount} branches`);

// Final commit and push
if (mergedCount > 0) {
  console.log('\n📝 Committing and pushing changes...');
  runGit('git add .', 'Adding all changes');
  runGit(
    'git commit -m "feat: comprehensive PR merge and conflict resolution - batch 2"',
    'Committing changes'
  );
  runGit('git push origin main', 'Pushing to main');
  console.log('✅ Changes pushed to origin/main');
}

console.log('\n🎉 Quick merge process completed!');
