#!/usr/bin/env node

import { execSync } from 'child_process';

// List of branches to check
const branchesToCheck = [
  'cursor/fix-errors-and-merge-to-main-014b',
  'cursor/fix-errors-and-merge-to-main-03b4', 
  'cursor/fix-errors-and-merge-to-main-03b8',
  'cursor/fix-errors-and-merge-to-main-0dee',
  'cursor/fix-errors-and-merge-to-main-0e4c',
  'cursor/fix-errors-and-merge-to-main-26b7',
  'cursor/fix-errors-and-merge-to-main-28f0',
  'cursor/fix-errors-and-merge-to-main-2d9f',
  'cursor/fix-errors-and-merge-to-main-3a03',
  'cursor/fix-errors-and-merge-to-main-3a27',
  'cursor/fix-errors-and-merge-to-main-3fdc',
  'cursor/fix-errors-and-merge-to-main-408e',
  'cursor/fix-errors-and-merge-to-main-4437',
  'cursor/fix-errors-and-merge-to-main-451f',
  'cursor/fix-errors-and-merge-to-main-4b65',
  'cursor/fix-errors-and-merge-to-main-5711',
  'cursor/fix-errors-and-merge-to-main-5855',
  'cursor/fix-errors-and-merge-to-main-5aaf',
  'cursor/fix-errors-and-merge-to-main-5d87',
  'cursor/fix-errors-and-merge-to-main-6ace',
  'cursor/fix-errors-and-merge-to-main-6e0b',
  'cursor/fix-errors-and-merge-to-main-7b1c',
  'cursor/fix-errors-and-merge-to-main-8206',
  'cursor/fix-errors-and-merge-to-main-937a',
  'cursor/fix-errors-and-merge-to-main-9b99',
  'cursor/fix-errors-and-merge-to-main-a4c9',
  'cursor/fix-errors-and-merge-to-main-af16',
  'cursor/fix-errors-and-merge-to-main-b891',
  'cursor/fix-errors-and-merge-to-main-bda1',
  'cursor/fix-errors-and-merge-to-main-c40e',
  'cursor/fix-errors-and-merge-to-main-c838',
  'cursor/fix-errors-and-merge-to-main-c91b',
  'cursor/fix-errors-and-merge-to-main-cd1b',
  'cursor/fix-errors-and-merge-to-main-db59',
  'cursor/fix-errors-and-merge-to-main-dd42',
  'cursor/fix-errors-and-merge-to-main-dee5',
  'cursor/fix-errors-and-merge-to-main-e0e0',
  'cursor/fix-errors-and-merge-to-main-e238',
  'cursor/fix-errors-and-merge-to-main-f123',
  'cursor/fix-errors-and-merge-to-main-f787',
  'cursor/fix-errors-and-merge-to-main-f948',
  'cursor/fix-errors-and-merge-to-main-f957'
];

let uniqueBranches = [];
let alreadyMergedBranches = [];

console.log(`Checking ${branchesToCheck.length} branches for unique commits...`);

for (const branch of branchesToCheck) {
  try {
    // Check if branch exists
    try {
      execSync(`git show-ref --verify --quiet refs/remotes/origin/${branch}`, { stdio: 'pipe' });
    } catch (e) {
      console.log(`⚠️  Branch ${branch} does not exist, skipping...`);
      continue;
    }
    
    // Check if branch has unique commits not in main
    const result = execSync(`git log main..origin/${branch} --oneline`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    
    if (result.trim()) {
      console.log(`✅ ${branch} has unique commits:`);
      console.log(result.trim());
      uniqueBranches.push(branch);
    } else {
      console.log(`ℹ️  ${branch} is already merged into main`);
      alreadyMergedBranches.push(branch);
    }
    
  } catch (error) {
    console.log(`❌ Error checking ${branch}: ${error.message}`);
  }
}

console.log(`\n📊 Branch Analysis Summary:`);
console.log(`✅ Branches with unique commits: ${uniqueBranches.length}`);
console.log(`ℹ️  Branches already merged: ${alreadyMergedBranches.length}`);
console.log(`📝 Total checked: ${branchesToCheck.length}`);

if (uniqueBranches.length > 0) {
  console.log(`\n🔍 Branches that need to be merged:`);
  uniqueBranches.forEach(branch => console.log(`  - ${branch}`));
} else {
  console.log(`\n🎉 All branches are already merged into main!`);
}