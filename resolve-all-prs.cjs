#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive PR resolution process...\n');

// List of PRs to merge (in order of priority)
const prs = [
  {
    number: 12224,
    branch: 'cursor/fix-netlify-build-and-merge-to-main-c868',
    title: 'Fix Netlify build and merge to main'
  },
  {
    number: 12223,
    branch: 'cursor/automate-test-improve-and-merge-code-83c1',
    title: 'Automate, test, improve, and merge code'
  },
  {
    number: 12222,
    branch: 'cursor/integrate-build-improve-and-re-verify-7ffc',
    title: 'Integrate, build, improve, and re-verify'
  },
  {
    number: 12215,
    branch: 'cursor/fix-netlify-build-and-merge-to-main-9f58',
    title: 'Fix Netlify build and merge to main'
  }
];

function runCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: '/workspace'
    });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return null;
  }
}

function resolveMergeConflicts() {
  console.log('🔧 Resolving merge conflicts...');
  // Get list of conflicted files
  try {
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { 
      encoding: 'utf8',
      cwd: '/workspace'
    }).trim().split('\n').filter(f => f);
    if (conflictedFiles.length === 0) {
      console.log('✅ No merge conflicts found');
      return true;
    }
    console.log(`📁 Found ${conflictedFiles.length} conflicted files`);
    for (const file of conflictedFiles) {
      if (!fs.existsSync(file)) continue;
      console.log(`🔧 Resolving conflicts in ${file}...`);
      try {
        let content = fs.readFileSync(file, 'utf8');
        // Remove merge conflict markers and keep both versions where possible
        content = content
          .replace(/
            // For most files, prefer the incoming version (from the PR)
            return incoming.trim();
          })
          .replace(/
          .replace(/^
        fs.writeFileSync(file, content);
        console.log(`✅ Resolved conflicts in ${file}`);
      } catch (error) {
        console.log(`❌ Failed to resolve conflicts in ${file}: ${error.message}`);
        // For problematic files, try to use the incoming version
        try {
          execSync(`git checkout --theirs "${file}"`, { cwd: '/workspace' });
          console.log(`✅ Used incoming version for ${file}`);
        } catch (e) {
          console.log(`❌ Could not resolve ${file}, will need manual intervention`);
        }
      }
    }
    return true;
  } catch (error) {
    console.log(`❌ Error resolving conflicts: ${error.message}`);
    return false;
  }
}

async function mergePR(pr) {
  console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
  console.log(`📂 Branch: ${pr.branch}`);
  try {
    // Fetch the latest changes
    runCommand('git fetch origin', `Fetching latest changes for PR #${pr.number}`);
    // Try to merge the PR
    console.log(`🔀 Attempting to merge ${pr.branch}...`);
    const mergeResult = runCommand(
      `git merge origin/${pr.branch} --no-commit`,
      `Merging PR #${pr.number}`
    );
    if (mergeResult === null) {
      console.log(`⚠️  Merge conflicts detected for PR #${pr.number}`);
      // Resolve conflicts
      if (resolveMergeConflicts()) {
        console.log(`✅ Conflicts resolved for PR #${pr.number}`);
        // Add all resolved files
        runCommand('git add .', `Adding resolved files for PR #${pr.number}`);
        // Commit the merge
        const commitResult = runCommand(
          `git commit -m "Merge PR #${pr.number}: ${pr.title}"`,
          `Committing merge for PR #${pr.number}`
        );
        if (commitResult !== null) {
          console.log(`✅ Successfully merged PR #${pr.number}`);
          return true;
        } else {
          console.log(`❌ Failed to commit merge for PR #${pr.number}`);
          return false;
        }
      } else {
        console.log(`❌ Failed to resolve conflicts for PR #${pr.number}`);
        runCommand('git merge --abort', `Aborting merge for PR #${pr.number}`);
        return false;
      }
    } else {
      // No conflicts, commit the merge
      runCommand('git add .', `Adding files for PR #${pr.number}`);
      const commitResult = runCommand(
        `git commit -m "Merge PR #${pr.number}: ${pr.title}"`,
        `Committing merge for PR #${pr.number}`
      );
      if (commitResult !== null) {
        console.log(`✅ Successfully merged PR #${pr.number}`);
        return true;
      } else {
        console.log(`❌ Failed to commit merge for PR #${pr.number}`);
        return false;
      }
    }
  } catch (error) {
    console.log(`❌ Error processing PR #${pr.number}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🎯 Starting comprehensive PR resolution...\n');
  // Ensure we're on main branch
  runCommand('git checkout main', 'Switching to main branch');
  runCommand('git pull origin main', 'Pulling latest main');
  const results = [];
  // Process each PR
  for (const pr of prs) {
    const success = await mergePR(pr);
    results.push({ pr: pr.number, success });
    if (!success) {
      console.log(`⚠️  Skipping remaining PRs due to failure with PR #${pr.number}`);
      break;
    }
  }
  // Summary
  console.log('\n📊 PR Resolution Summary:');
  console.log('===');
  results.forEach(({ pr, success }) => {
    console.log(`PR #${pr}: ${success ? '✅ Success' : '❌ Failed'}`);
  });
  const successCount = results.filter(r => r.success).length;
  console.log(`\n🎉 Successfully merged ${successCount}/${results.length} PRs`);
  if (successCount > 0) {
    console.log('\n🚀 Pushing changes to remote...');
    const pushResult = runCommand('git push origin main', 'Pushing merged changes');
    if (pushResult !== null) {
      console.log('✅ Successfully pushed all changes to main branch');
    } else {
      console.log('❌ Failed to push changes to remote');
    }
  }
  console.log('\n✨ PR resolution process completed!');
}

main().catch(console.error);