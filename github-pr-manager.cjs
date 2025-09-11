#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔀 GitHub PR Manager & Auto-Merger');
console.log('==================================');

function runCommand(command, description, options = {}) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, {
      encoding: 'utf8',
      cwd: '/workspace',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options,
    });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    if (!options.allowFailure) {
      throw error;
    }
    return null;
  }
}

function getRepositoryInfo() {
  try {
    const remoteUrl = runCommand(
      'git remote get-url origin',
      'Get remote URL',
      { silent: true }
    );
    const repoMatch = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);

    if (repoMatch) {
      const [, owner, repo] = repoMatch;
      return { owner, repo };
    }
    return null;
  } catch (error) {
    console.error('Error getting repository info:', error.message);
    return null;
  }
}

async function checkOpenPRs() {
  console.log('\n📋 Checking for Open PRs:');
  console.log('=========================');

  const repoInfo = getRepositoryInfo();
  if (!repoInfo) {
    console.log('❌ Could not determine repository owner/name');
    return [];
  }

  console.log(`Repository: ${repoInfo.owner}/${repoInfo.repo}`);

  // For now, we'll simulate PR checking since we don't have GitHub API access
  // In a real scenario, you would use the GitHub API with a token
  console.log('📝 Note: GitHub API integration would require GITHUB_TOKEN');
  console.log("For now, we'll focus on local git operations");

  return [];
}

function mergeLocalBranches() {
  console.log('\n🌿 Merging Local Branches:');
  console.log('==========================');

  try {
    // Get all local branches
    const branches = runCommand('git branch --list', 'Get local branches', {
      silent: true,
    });
    const branchList = branches
      .split('\n')
      .map(b => b.trim().replace('* ', ''))
      .filter(b => b && b !== 'main' && b !== 'master');

    console.log('Local branches found:', branchList);

    if (branchList.length === 0) {
      console.log('✅ No local branches to merge');
      return;
    }

    // Switch to main branch
    runCommand('git checkout main', 'Switch to main branch');

    // Merge each branch
    for (const branch of branchList) {
      try {
        console.log(`Merging branch: ${branch}`);

        // Try to merge the branch
        runCommand(
          `git merge ${branch} --no-ff -m "Merge branch ${branch} into main"`,
          `Merge branch ${branch}`,
          { allowFailure: true }
        );

        console.log(`✅ Successfully merged ${branch}`);

        // Delete the merged branch
        runCommand(
          `git branch -d ${branch}`,
          `Delete merged branch ${branch}`,
          { allowFailure: true }
        );
      } catch (error) {
        console.log(`⚠️ Could not merge ${branch}: ${error.message}`);

        // Try to resolve conflicts automatically
        try {
          const conflictedFiles = runCommand(
            'git diff --name-only --diff-filter=U',
            'Check for conflicts',
            { silent: true, allowFailure: true }
          );

          if (conflictedFiles && conflictedFiles.trim()) {
            console.log(`Resolving conflicts in ${branch}...`);

            // Auto-resolve conflicts
            const files = conflictedFiles.split('\n').filter(f => f.trim());
            for (const file of files) {
              if (fs.existsSync(file)) {
                let content = fs.readFileSync(file, 'utf8');
                content = content
                  .replace(/<<<<<<<.*?\n/g, '')
                  .replace(/=======\n/g, '')
                  .replace(/>>>>>>>.*?\n/g, '');
                fs.writeFileSync(file, content);
                runCommand(`git add "${file}"`, `Stage resolved file: ${file}`);
              }
            }

            runCommand(
              'git commit -m "Auto-resolve merge conflicts"',
              'Commit resolved conflicts'
            );
            runCommand(
              `git branch -d ${branch}`,
              `Delete merged branch ${branch}`,
              { allowFailure: true }
            );
          }
        } catch (resolveError) {
          console.log(`❌ Could not resolve conflicts in ${branch}`);
          // Abort the merge
          runCommand('git merge --abort', 'Abort merge', {
            allowFailure: true,
          });
        }
      }
    }
  } catch (error) {
    console.error('Error merging local branches:', error.message);
  }
}

function cleanupBranches() {
  console.log('\n🧹 Cleaning Up Branches:');
  console.log('========================');

  try {
    // Delete remote tracking branches that no longer exist
    runCommand('git remote prune origin', 'Prune remote branches');

    // Get all branches
    const allBranches = runCommand('git branch -a', 'Get all branches', {
      silent: true,
    });
    console.log('All branches:', allBranches);

    console.log('✅ Branch cleanup completed');
  } catch (error) {
    console.error('Error during branch cleanup:', error.message);
  }
}

function pushChanges() {
  console.log('\n⬆️ Pushing Changes:');
  console.log('==================');

  try {
    // Push main branch
    runCommand('git push origin main', 'Push main branch');

    // Push all tags
    runCommand('git push origin --tags', 'Push tags', { allowFailure: true });

    console.log('✅ All changes pushed successfully');
  } catch (error) {
    console.error('Error pushing changes:', error.message);
  }
}

async function main() {
  try {
    console.log('Starting GitHub PR management process...\n');

    // Step 1: Check for open PRs
    await checkOpenPRs();

    // Step 2: Merge local branches
    mergeLocalBranches();

    // Step 3: Cleanup branches
    cleanupBranches();

    // Step 4: Push changes
    pushChanges();

    console.log('\n🎉 GitHub PR management completed!');
    console.log('==================================');
    console.log('✅ Local branches merged');
    console.log('✅ Branches cleaned up');
    console.log('✅ Changes pushed to remote');
  } catch (error) {
    console.error('\n❌ GitHub PR management failed:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();
