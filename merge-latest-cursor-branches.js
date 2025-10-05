#!/usr/bin/env node

/**
 * Merge Latest Cursor Branches - Process the newest cursor branches
 */

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting Latest Cursor Branches Merge Process...\n');

// Latest cursor branches to merge
const latestCursorBranches = [
  'cursor/fix-errors-and-merge-to-main-19db',
  'cursor/fix-errors-and-merge-to-main-40d9',
  'cursor/fix-errors-and-merge-to-main-5fb2',
  'cursor/fix-errors-and-merge-to-main-8510',
  'cursor/fix-errors-and-merge-to-main-9658',
  'cursor/fix-errors-and-merge-to-main-afb8',
  'cursor/fix-errors-and-merge-to-main-afbc',
  'cursor/fix-errors-and-merge-to-main-b319',
  'cursor/fix-errors-and-merge-to-main-bb50',
  'cursor/fix-errors-and-merge-to-main-cf0f',
  'cursor/fix-errors-and-merge-to-main-e15f'
];

console.log(`📊 Found ${latestCursorBranches.length} latest cursor branches to process\n`);

// Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
    console.log(`📋 Executing: ${description}`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} - Success`);
    return { success: true, result };
  } catch (error) {
    console.log(`⚠️  ${description} - Warning: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Function to check if branch exists
function branchExists(branchName) {
  try {
    execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

// Ensure we're on main branch
console.log('📍 Setting up environment...');
safeGitCommand('git checkout main', 'Switch to main branch');
safeGitCommand('git pull origin main', 'Pull latest changes from main');

console.log('\n🔍 Processing latest cursor branches...');

let mergedCount = 0;
let notFoundCount = 0;
const results = [];

// Process each branch
for (const branch of latestCursorBranches) {
  console.log(`\n--- Processing ${branch} ---`);
  
  // Check if branch exists
  if (!branchExists(branch)) {
    console.log(`❌ Branch ${branch} not found, skipping...`);
    notFoundCount++;
    results.push({
      branch,
      status: 'not_found'
    });
    continue;
  }
  
  console.log(`✅ Branch ${branch} found`);
  
  // Try to merge the branch
  const mergeResult = safeGitCommand(
    `git merge origin/${branch} --no-ff -m "Merge ${branch} into main"`,
    `Merge ${branch}`
  );
  
  if (mergeResult.success) {
    mergedCount++;
    console.log(`🎉 Successfully merged ${branch}`);
    results.push({
      branch,
      status: 'merged'
    });
  } else {
    console.log(`⚠️  Merge conflict or error for ${branch}`);
    
    // Try to abort the merge if there was a conflict
    safeGitCommand('git merge --abort', `Abort merge for ${branch}`);
    
    results.push({
      branch,
      status: 'conflict',
      error: mergeResult.error
    });
  }
}

// Run system checks
console.log('\n🔧 Running system checks...');
const typeCheck = safeGitCommand('pnpm run type-check', 'TypeScript type checking');
const lintCheck = safeGitCommand('pnpm run lint', 'ESLint linting');
const testCheck = safeGitCommand('pnpm run test', 'Jest testing');
const buildCheck = safeGitCommand('pnpm run build:no-check', 'Production build');

// Push changes if any were merged
if (mergedCount > 0) {
  console.log('\n📤 Pushing changes to main...');
  const pushResult = safeGitCommand('git push origin main', 'Push changes to main');
  if (pushResult.success) {
    console.log('✅ All changes pushed to main successfully');
  } else {
    console.log('❌ Error pushing changes to main');
  }
}

// Generate comprehensive report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    totalBranches: latestCursorBranches.length,
    merged: mergedCount,
    notFound: notFoundCount,
    successRate: `${Math.round((mergedCount / latestCursorBranches.length) * 100)}%`
  },
  systemChecks: {
    typeCheck: typeCheck.success,
    lintCheck: lintCheck.success,
    testCheck: testCheck.success,
    buildCheck: buildCheck.success,
    allPassed: typeCheck.success && lintCheck.success && testCheck.success && buildCheck.success
  },
  results: results,
  status: mergedCount > 0 ? 'success' : 'no-changes'
};

// Save detailed report
fs.writeFileSync('latest-cursor-branches-merge-report.json', JSON.stringify(report, null, 2));

console.log('\n📊 === MERGE SUMMARY ===');
console.log(`✅ Successfully merged: ${mergedCount} branches`);
console.log(`❌ Not found: ${notFoundCount} branches`);
console.log(`📈 Success rate: ${report.summary.successRate}`);

console.log('\n🔧 === SYSTEM CHECKS ===');
console.log(`TypeScript: ${typeCheck.success ? '✅' : '❌'}`);
console.log(`ESLint: ${lintCheck.success ? '✅' : '❌'}`);
console.log(`Tests: ${testCheck.success ? '✅' : '❌'}`);
console.log(`Build: ${buildCheck.success ? '✅' : '❌'}`);

if (report.systemChecks.allPassed) {
  console.log('\n🎉 All system checks passed! Repository is in excellent condition.');
} else {
  console.log('\n⚠️  Some system checks failed. Please review the issues.');
}

console.log('\n📄 Detailed report saved to: latest-cursor-branches-merge-report.json');
console.log('\n🏁 Latest Cursor Branches Merge completed!');