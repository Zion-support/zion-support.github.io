#!/usr/bin/env node

/**
 * Direct PR Merge and Resolution Script
 * Directly resolves merge conflicts and merges all open PRs into main
 */

const fs = require('fs');
const { execSync, spawn } = require('child_process');

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
    const result = execSync(command, { 
      stdio: 'pipe', 
      encoding: 'utf8',
      timeout: 30000,
      ...options 
    });
    log(`✅ Success: ${command}`, 'green');
    return result;
  } catch (error) {
    log(`⚠️  Failed: ${command}`, 'yellow');
    log(`Error: ${error.message}`, 'red');
    return null;
  }
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

function checkGitStatus() {
  log('🔍 Checking git status...', 'blue');
  
  const status = execCommand('git status --porcelain');
  const branch = execCommand('git branch --show-current');
  
  if (status) {
    log(`Git status: ${status.trim()}`, 'yellow');
  }
  
  if (branch) {
    log(`Current branch: ${branch.trim()}`, 'yellow');
  }
  
  return { status, branch };
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

function resolveMergeConflicts() {
  log('🔧 Resolving merge conflicts...', 'blue');
  
  // Check for conflict markers
  const conflictFiles = execCommand('git diff --name-only --diff-filter=U');
  
  if (!conflictFiles || !conflictFiles.trim()) {
    log('✅ No merge conflicts found', 'green');
    return true;
  }
  
  const files = conflictFiles.trim().split('\n').filter(f => f.trim());
  log(`Found conflicts in ${files.length} files:`, 'yellow');
  files.forEach(file => log(`  - ${file}`, 'red'));
  
  // Auto-resolve conflicts using appropriate strategies
  for (const file of files) {
    if (file.trim()) {
      log(`Auto-resolving conflicts in ${file}...`, 'cyan');
      
      // For TypeScript/JavaScript files, prefer our changes
      if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        execCommand(`git checkout --ours "${file}"`);
        execCommand(`git add "${file}"`);
        log(`  → Used main branch version for ${file}`, 'green');
      } 
      // For JSON files, prefer their changes
      else if (file.match(/\.json$/)) {
        execCommand(`git checkout --theirs "${file}"`);
        execCommand(`git add "${file}"`);
        log(`  → Used PR branch version for ${file}`, 'green');
      }
      // For other files, use their changes
      else {
        execCommand(`git checkout --theirs "${file}"`);
        execCommand(`git add "${file}"`);
        log(`  → Used PR branch version for ${file}`, 'green');
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
    // Check if branch exists remotely
    const branchCheck = execCommand(`git show-ref --verify --quiet "refs/remotes/origin/${branchName}"`);
    if (!branchCheck) {
      log(`❌ Branch ${branchName} does not exist remotely`, 'red');
      return false;
    }
    
    // Attempt merge
    const mergeResult = execCommand(`git merge "origin/${branchName}" --no-ff -m "Merge ${branchName} into main"`);
    
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

function runImprovements() {
  log('⚡ Running code improvements...', 'blue');
  
  const improvements = {
    linting: false,
    typeChecking: false,
    build: false
  };
  
  // Run linting
  log('🔍 Running linting...', 'cyan');
  const lintResult = execCommand('npm run lint');
  if (lintResult) {
    log('✅ Linting passed', 'green');
    improvements.linting = true;
  } else {
    log('⚠️  Linting failed, attempting to fix...', 'yellow');
    const lintFixResult = execCommand('npm run lint:fix');
    if (lintFixResult) {
      log('✅ Linting issues fixed', 'green');
      improvements.linting = true;
    }
  }
  
  // Run type checking
  log('🔍 Running type checking...', 'cyan');
  const typeResult = execCommand('npm run type-check');
  if (typeResult) {
    log('✅ Type checking passed', 'green');
    improvements.typeChecking = true;
  } else {
    log('❌ Type checking failed', 'red');
  }
  
  // Run build
  log('🔨 Running build...', 'cyan');
  const buildResult = execCommand('npm run build:fast');
  if (buildResult) {
    log('✅ Build succeeded', 'green');
    improvements.build = true;
  } else {
    log('❌ Build failed', 'red');
  }
  
  return improvements;
}

function main() {
  log('🚀 Starting Direct PR Merge and Resolution', 'magenta');
  log('=' * 60, 'magenta');
  
  try {
    // Step 1: Check git status
    checkGitStatus();
    
    // Step 2: Get open PRs
    const openPRs = getOpenPRs();
    
    // Step 3: Switch to main and pull latest
    switchToMain();
    pullLatest();
    
    // Step 4: Process each open PR
    let mergedCount = 0;
    let failedCount = 0;
    
    log('🔄 Processing open PRs...', 'blue');
    for (const pr of openPRs) {
      const branchName = pr.head?.ref;
      if (branchName) {
        log(`Processing PR #${pr.number}: ${pr.title}`, 'cyan');
        if (mergeBranch(branchName)) {
          mergedCount++;
        } else {
          failedCount++;
        }
      }
    }
    
    // Step 5: Push to main
    if (mergedCount > 0) {
      pushToMain();
    }
    
    // Step 6: Run improvements
    const improvementResults = runImprovements();
    
    // Step 7: Final status
    log('=' * 60, 'magenta');
    log('📊 Final Summary:', 'magenta');
    log(`✅ Successfully merged: ${mergedCount} branches`, 'green');
    log(`❌ Failed to merge: ${failedCount} branches`, failedCount > 0 ? 'red' : 'green');
    log(`🔍 Linting: ${improvementResults.linting ? '✅' : '❌'}`, improvementResults.linting ? 'green' : 'red');
    log(`🔍 Type Checking: ${improvementResults.typeChecking ? '✅' : '❌'}`, improvementResults.typeChecking ? 'green' : 'red');
    log(`🔨 Build: ${improvementResults.build ? '✅' : '❌'}`, improvementResults.build ? 'green' : 'red');
    
    // Show recent commits
    log('\n📝 Recent commits:', 'blue');
    const recentCommits = execCommand('git log --oneline -5');
    if (recentCommits) {
      log(recentCommits, 'cyan');
    }
    
    log('\n🎉 Direct PR Merge and Resolution Completed!', 'green');
    
    return {
      mergedCount,
      failedCount,
      improvements: improvementResults
    };
    
  } catch (error) {
    log(`❌ Fatal error: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  main();
}

module.exports = { main, resolveMergeConflicts, mergeBranch, runImprovements };