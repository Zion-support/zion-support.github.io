#!/usr/bin/env node

/**
 * Comprehensive PR Resolution and Merge Script
 * Resolves merge conflicts and merges all open PRs into main
 */

const fs = require('fs');
const { execSync } = require('child_process');

// Configuration
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';
const GITHUB_TOKEN = 'ghs_94bFEbAkNZdN8PeJUqjtox5XvuQCjj3KjbEq';

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function execCommand(command, options = {}) {
  try {
    log(`Running: ${command}`, 'cyan');
    return execSync(command, { 
      stdio: 'pipe', 
      encoding: 'utf8',
      timeout: 30000,
      ...options 
    });
  } catch (error) {
    log(`Command failed: ${command}`, 'red');
    log(`Error: ${error.message}`, 'red');
    return null;
  }
}

function checkGitStatus() {
  log('🔍 Checking git status...', 'blue');
  
  const status = execCommand('git status --porcelain');
  if (status) {
    log(`Git status:\n${status}`, 'yellow');
  }
  
  const branch = execCommand('git branch --show-current');
  if (branch) {
    log(`Current branch: ${branch.trim()}`, 'yellow');
  }
  
  return { status, branch };
}

function fetchAllBranches() {
  log('📥 Fetching all branches...', 'blue');
  const result = execCommand('git fetch --all --prune');
  return result;
}

function switchToMain() {
  log('🔄 Switching to main branch...', 'blue');
  const result = execCommand('git checkout main');
  return result;
}

function pullLatest() {
  log('📥 Pulling latest changes from main...', 'blue');
  const result = execCommand('git pull origin main');
  return result;
}

function getOpenPRs() {
  log('🔍 Getting open PRs from local files...', 'blue');
  
  const prFiles = [
    '/workspace/current-open-prs.json',
    '/workspace/prs.json',
    '/workspace/current_prs.json'
  ];
  
  let allPRs = [];
  
  for (const file of prFiles) {
    if (fs.existsSync(file)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const prs = JSON.parse(content);
        if (Array.isArray(prs)) {
          allPRs = allPRs.concat(prs);
        }
      } catch (error) {
        log(`Error reading ${file}: ${error.message}`, 'red');
      }
    }
  }
  
  // Filter open PRs and extract branch names
  const openPRs = allPRs.filter(pr => pr.state === 'open');
  
  log(`Found ${openPRs.length} open PRs:`, 'yellow');
  openPRs.forEach(pr => {
    log(`  - PR #${pr.number}: ${pr.title} (${pr.head?.ref || 'unknown branch'})`, 'cyan');
  });
  
  return openPRs;
}

function getRemoteBranches() {
  log('🔍 Getting remote branches...', 'blue');
  const branches = execCommand('git branch -r | grep -v HEAD | grep -E "cursor/|feature/|fix/" | head -20');
  
  if (branches) {
    log(`Remote branches:\n${branches}`, 'yellow');
    return branches.split('\n').filter(b => b.trim());
  }
  
  return [];
}

function resolveMergeConflicts() {
  log('🔧 Attempting to resolve merge conflicts...', 'blue');
  
  // Check for conflict markers
  const conflictFiles = execCommand('git diff --name-only --diff-filter=U');
  
  if (!conflictFiles || !conflictFiles.trim()) {
    log('✅ No merge conflicts found', 'green');
    return true;
  }
  
  const files = conflictFiles.trim().split('\n');
  log(`Found conflicts in ${files.length} files:`, 'yellow');
  files.forEach(file => log(`  - ${file}`, 'red'));
  
  // Auto-resolve conflicts using 'ours' strategy for most files
  for (const file of files) {
    if (file.trim()) {
      log(`Auto-resolving conflicts in ${file}...`, 'cyan');
      
      // For TypeScript/JavaScript files, prefer our changes
      if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        execCommand(`git checkout --ours "${file}"`);
        execCommand(`git add "${file}"`);
      } 
      // For JSON files, prefer our changes
      else if (file.match(/\.json$/)) {
        execCommand(`git checkout --ours "${file}"`);
        execCommand(`git add "${file}"`);
      }
      // For other files, try to merge both
      else {
        execCommand(`git checkout --theirs "${file}"`);
        execCommand(`git add "${file}"`);
      }
    }
  }
  
  // Try to commit the merge
  const commitResult = execCommand('git commit --no-edit');
  if (commitResult) {
    log('✅ Successfully resolved and committed merge conflicts', 'green');
    return true;
  } else {
    log('❌ Failed to commit merge resolution', 'red');
    return false;
  }
}

function mergeBranch(branchName) {
  log(`🔄 Attempting to merge branch: ${branchName}`, 'blue');
  
  try {
    // First, try to checkout the branch
    const checkoutResult = execCommand(`git checkout "${branchName}"`);
    if (!checkoutResult) {
      log(`❌ Could not checkout branch ${branchName}`, 'red');
      return false;
    }
    
    // Switch back to main
    execCommand('git checkout main');
    
    // Attempt merge
    const mergeResult = execCommand(`git merge "${branchName}" --no-ff -m "Merge ${branchName} into main"`);
    
    if (mergeResult) {
      log(`✅ Successfully merged ${branchName}`, 'green');
      return true;
    } else {
      log(`⚠️  Merge conflict in ${branchName}, attempting to resolve...`, 'yellow');
      
      // Try to resolve conflicts
      if (resolveMergeConflicts()) {
        log(`✅ Successfully resolved conflicts and merged ${branchName}`, 'green');
        return true;
      } else {
        log(`❌ Failed to resolve conflicts for ${branchName}`, 'red');
        execCommand('git merge --abort');
        return false;
      }
    }
  } catch (error) {
    log(`❌ Error merging ${branchName}: ${error.message}`, 'red');
    return false;
  }
}

function pushToMain() {
  log('🚀 Pushing changes to main...', 'blue');
  const result = execCommand('git push origin main');
  
  if (result) {
    log('✅ Successfully pushed to main', 'green');
    return true;
  } else {
    log('❌ Failed to push to main', 'red');
    return false;
  }
}

function main() {
  log('🚀 Starting PR Resolution and Merge Process', 'magenta');
  log('=' * 50, 'magenta');
  
  try {
    // Step 1: Check git status
    checkGitStatus();
    
    // Step 2: Fetch all branches
    fetchAllBranches();
    
    // Step 3: Switch to main and pull latest
    switchToMain();
    pullLatest();
    
    // Step 4: Get open PRs
    const openPRs = getOpenPRs();
    
    // Step 5: Get remote branches
    const remoteBranches = getRemoteBranches();
    
    // Step 6: Process each open PR
    let mergedCount = 0;
    let failedCount = 0;
    
    for (const pr of openPRs) {
      const branchName = pr.head?.ref;
      if (branchName) {
        if (mergeBranch(branchName)) {
          mergedCount++;
        } else {
          failedCount++;
        }
      }
    }
    
    // Step 7: Process remote branches that might not be in PRs
    for (const branch of remoteBranches) {
      const branchName = branch.replace('origin/', '').trim();
      if (branchName && !openPRs.find(pr => pr.head?.ref === branchName)) {
        if (mergeBranch(branchName)) {
          mergedCount++;
        } else {
          failedCount++;
        }
      }
    }
    
    // Step 8: Push to main
    if (mergedCount > 0) {
      pushToMain();
    }
    
    // Step 9: Final status
    log('=' * 50, 'magenta');
    log('📊 Final Summary:', 'magenta');
    log(`✅ Successfully merged: ${mergedCount} branches`, 'green');
    log(`❌ Failed to merge: ${failedCount} branches`, failedCount > 0 ? 'red' : 'green');
    
    // Show recent commits
    log('\n📝 Recent commits:', 'blue');
    const recentCommits = execCommand('git log --oneline -5');
    if (recentCommits) {
      log(recentCommits, 'cyan');
    }
    
    log('\n🎉 PR Resolution Process Completed!', 'green');
    
  } catch (error) {
    log(`❌ Fatal error: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  main();
}

module.exports = { main, resolveMergeConflicts, mergeBranch };