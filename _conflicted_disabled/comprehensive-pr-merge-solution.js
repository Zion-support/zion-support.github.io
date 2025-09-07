#!/usr/bin/env node,
  const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🚀 Starting Comprehensive PR Merge and Conflict Resolution...');
// Function to execute git commands safely,
  function execGitCommand(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options 
    });
    return result.trim();
  } catch (error) {
    console.error(`❌ Git command failed: ${command}`);
    console.error(`Error: ${error.message}`);
    return null;
  }
}
// Function to get current branch,
  function getCurrentBranch() {
  return execGitCommand('git branch --show-current');
}
// Function to get repository info,
  function getRepoInfo() {
  try {
    const remoteUrl = execGitCommand('git remote get-url origin', { silent: true });
    if (remoteUrl) {
      const match = remoteUrl.match(/github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/);
      if (match) {
        return { owner: match[1], repo: match[2] };
      }
    }
  } catch (error) {
    console.log('❌ Could not determine repository information');
  }
  return null;
}
// Function to list open PRs using GitHub CLI,
  function listOpenPRs() {
  try {
    console.log('📋 Fetching open PRs...');
    const result = execGitCommand('gh pr list --state open --json number,title,headRefName,baseRefName,mergeable', { silent: true });
    if (result) {
      const prs = JSON.parse(result);
      console.log(`Found ${prs.length} open PRs`);
      return prs;
    }
  } catch (error) {
    console.log('⚠️  GitHub CLI not available or no PRs found');
  }
  return [];
}
// Function to resolve merge conflicts in a file,
  function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Remove all merge conflict markers and keep the main branch version (after,
  content = content.replace(/<<<<<<< [^\n]+\n([\s\S]*?)
    // Clean up multiple consecutive newlines,
  content = content.replace(/\n{3,}/g, '\n\n');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Resolved conflicts in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}
// Function to find and resolve all merge conflicts,
  function resolveAllConflicts() {
  console.log('🔍 Searching for files with merge conflicts...');
  const conflictFiles = [];
  // Search for files with conflict markers,
  try {
    const result = execGitCommand('git diff --name-only --diff-filter=U', { silent: true });
    if (result) {
      conflictFiles.push(...result.split('\n').filter(f => f.trim()));
    }
  } catch (error) {
    // No conflicts found or git diff failed
  }
  // Also search for conflict markers in all files,
  const searchDirs = ['app', 'components', 'pages', 'src', 'lib', 'utils'];
  for (const dir of searchDirs) {
    if (fs.existsSync(dir)) {
      const files = getAllFiles(dir);
      for (const file of files) {
        if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
              conflictFiles.push(file);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  const uniqueFiles = [...new Set(conflictFiles)];
  console.log(`Found ${uniqueFiles.length} files with potential conflicts`);
  let resolvedCount = 0;
  for (const file of uniqueFiles) {
    if (fs.existsSync(file)) {
      if (resolveMergeConflicts(file)) {
        resolvedCount++;
      }
    }
  }
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  return resolvedCount > 0;
}
// Function to get all files in a directory recursively,
  function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}
// Function to merge a PR,
  function mergePR(prNumber) {
  try {
    console.log(`🔄 Merging PR #${prNumber}...`);
    execGitCommand(`gh pr merge ${prNumber} --merge --delete-branch`);
    console.log(`✅ Successfully merged PR #${prNumber}`);
    return true;
  } catch (error) {
    console.log(`❌ Failed to merge PR #${prNumber}: ${error.message}`);
    return false;
  }
}
// Function to check if a PR has conflicts,
  function checkPRConflicts(prNumber) {
  try {
    const result = execGitCommand(`gh pr view ${prNumber} --json mergeable`, { silent: true });
    if (result) {
      const pr = JSON.parse(result);
      return pr.mergeable;
    }
  } catch (error) {
    console.log(`⚠️  Could not check conflicts for PR #${prNumber}`);
  }
  return false;
}
// Function to switch to main branch and pull latest changes,
  function switchToMainAndPull() {
  try {
    console.log('🔄 Switching to main branch...');
    execGitCommand('git checkout main');
    console.log('📥 Pulling latest changes from main...');
    execGitCommand('git pull origin main');
    return true;
  } catch (error) {
    console.error('❌ Failed to switch to main or pull latest changes:', error.message);
    return false;
  }
}
// Function to create a new branch for improvements,
  function createImprovementBranch() {
  const branchName = `improvements-${Date.now()}`;
  try {
    console.log(`🔄 Creating improvement branch: ${branchName}`);
    execGitCommand(`git checkout -b ${branchName}`);
    return branchName;
  } catch (error) {
    console.error('❌ Failed to create improvement branch:', error.message);
    return null;
  }
}
// Main execution function,
  async function main() {
  try {
    console.log('📁 Current repository information:');
    const repoInfo = getRepoInfo();
    if (repoInfo) {
      console.log(`Repository: ${repoInfo.owner}/${repoInfo.repo}`);
    }
    console.log(`Current branch: ${getCurrentBranch()}`);
    // Step 1: Switch to main and pull latest changes,
  console.log('\n🔄 Step 1: Updating main branch...');
    if (!switchToMainAndPull()) {
      console.log('❌ Failed to update main branch. Exiting.');
      return;
    }
    // Step 2: Resolve any existing conflicts,
  console.log('\n🔧 Step 2: Resolving merge conflicts...');
    resolveAllConflicts();
    // Step 3: List and process open PRs,
  console.log('\n📋 Step 3: Processing open PRs...');
    const openPRs = listOpenPRs();
    if (openPRs.length === 0) {
      console.log('✅ No open PRs found');
    } else {
      console.log('\n📋 Open PRs:');
      openPRs.forEach(pr => {
        console.log(`  #${pr.number}: ${pr.title} (${pr.headRefName} → ${pr.baseRefName})`);
      });
      // Process each PR,
  let mergedCount = 0;
      for (const pr of openPRs) {
        console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
        // Check for conflicts,
  const isMergeable = checkPRConflicts(pr.number);
        if (!isMergeable) {
          console.log(`⚠️  PR #${pr.number} has conflicts. Attempting to resolve...`);
          // Try to checkout the PR branch and resolve conflicts,
  try {
            execGitCommand(`git fetch origin ${pr.headRefName}`);
            execGitCommand(`git checkout ${pr.headRefName}`);
            resolveAllConflicts();
            execGitCommand('git add .');
            execGitCommand('git commit -m "Resolve merge conflicts"');
            execGitCommand(`git push origin ${pr.headRefName}`);
          } catch (error) {
            console.log(`❌ Could not resolve conflicts for PR #${pr.number}`);
            continue;
          }
        }
        // Try to merge,
  if (mergePR(pr.number)) {
          mergedCount++;
        }
      }
      console.log(`\n📈 Summary:`);
      console.log(`✅ Successfully merged: ${mergedCount}/${openPRs.length} PRs`);
      if (mergedCount === openPRs.length) {
        console.log('🎉 All PRs have been successfully merged!');
      } else {
        console.log('⚠️  Some PRs could not be merged due to conflicts or other issues');
      }
    }
    // Step 4: Create improvement branch,
  console.log('\n🔄 Step 4: Creating improvement branch...');
    const improvementBranch = createImprovementBranch();
    if (improvementBranch) {
      console.log(`✅ Created improvement branch: ${improvementBranch}`);
      console.log('You can now make your improvements and commit them.');
    }
    console.log('\n🎉 Process completed successfully!');
  } catch (error) {
    console.error('❌ Error during execution:', error.message);
    process.exit(1);
  }
}
// Run the main function,
  main();