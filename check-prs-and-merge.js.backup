#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🔍 Checking for open PRs and merge conflicts...\n');

// Function to run git commands safely
function runGitCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: 'pipe' });
  } catch (error) {
    console.error(`❌ Error running command: ${command}`);
    console.error(error.message);
    return null;
  }
}

// 1. Check current git status
console.log('📊 Current Git Status:');
const status = runGitCommand('git status --porcelain');
if (status) {
  console.log(status || 'Working directory clean');
}

// 2. Check branch information
console.log('\n🌿 Branch Information:');
const currentBranch = runGitCommand('git branch --show-current');
console.log(`Current branch: ${currentBranch?.trim() || 'unknown'}`);

const diverged = runGitCommand('git rev-list --count --left-right HEAD...origin/main');
if (diverged) {
  const [local, remote] = diverged.trim().split('\t');
  console.log(`Divergence: ${local} local commits, ${remote} remote commits`);
}

// 3. Check for merge conflicts
console.log('\n🔍 Checking for merge conflicts:');
const conflictFiles = runGitCommand('git diff --name-only --diff-filter=U');
if (conflictFiles && conflictFiles.trim()) {
  console.log('⚠️  Files with merge conflicts:');
  console.log(conflictFiles);
} else {
  console.log('✅ No merge conflicts detected');
}

// 4. Check recent commits
console.log('\n📝 Recent Commits:');
const recentCommits = runGitCommand('git log --oneline -5');
if (recentCommits) {
  console.log(recentCommits);
}

// 5. Check remote branches
console.log('\n🌐 Recent Remote Branches:');
const recentBranches = runGitCommand('git branch -r --sort=-committerdate | head -10');
if (recentBranches) {
  console.log(recentBranches);
}

// 6. Check for files with merge conflict markers
console.log('\n🔍 Checking for merge conflict markers in files:');
const conflictMarkers = runGitCommand('grep -r "<<<<<<< HEAD" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" | head -10');
if (conflictMarkers && conflictMarkers.trim()) {
  console.log('⚠️  Files with merge conflict markers:');
  console.log(conflictMarkers);
} else {
  console.log('✅ No merge conflict markers found');
}

// 7. Create a summary report
const report = {
  timestamp: new Date().toISOString(),
  currentBranch: currentBranch?.trim(),
  divergence: diverged?.trim(),
  hasConflicts: conflictFiles && conflictFiles.trim() ? true : false,
  conflictFiles: conflictFiles?.trim().split('\n').filter(f => f) || [],
  recentCommits: recentCommits?.trim().split('\n') || [],
  recentBranches: recentBranches?.trim().split('\n') || []
};

fs.writeFileSync('merge-analysis-report.json', JSON.stringify(report, null, 2));

console.log('\n📋 Summary Report:');
console.log(`- Current branch: ${report.currentBranch}`);
console.log(`- Divergence: ${report.divergence}`);
console.log(`- Has conflicts: ${report.hasConflicts}`);
console.log(`- Conflict files: ${report.conflictFiles.length}`);
console.log(`- Recent commits: ${report.recentCommits.length}`);
console.log(`- Recent branches: ${report.recentBranches.length}`);

console.log('\n📄 Detailed report saved to: merge-analysis-report.json');

// 8. Provide next steps
console.log('\n🚀 Next Steps:');
console.log('1. Review the merge-analysis-report.json for detailed information');
console.log('2. If there are conflicts, resolve them manually or run the resolve-merge-conflicts.sh script');
console.log('3. Check GitHub for open PRs: https://github.com/Zion-Holdings/zion.app/pulls');
console.log('4. Merge any open PRs that are ready');
console.log('5. Push the final merged changes to main');

console.log('\n✅ Analysis complete!');