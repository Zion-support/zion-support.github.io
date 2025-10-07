#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// List of branches to merge
const branchesToMerge = [
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

let mergedCount = 0;
let conflictCount = 0;
let alreadyUpToDateCount = 0;

console.log(`Starting to merge ${branchesToMerge.length} branches...`);

for (const branch of branchesToMerge) {
  try {
    console.log(`\nAttempting to merge origin/${branch}...`);
    
    // Try to merge the branch
    const result = execSync(`git merge origin/${branch} --no-commit`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    
    // If we get here, the merge was successful
    console.log(`✅ Successfully merged ${branch}`);
    
    // Commit the merge
    execSync(`git commit -m "Merge ${branch} into main - resolved conflicts by keeping main branch versions"`, {
      stdio: 'pipe'
    });
    
    mergedCount++;
    
  } catch (error) {
    if (error.message.includes('Already up to date')) {
      console.log(`ℹ️  ${branch} is already up to date`);
      alreadyUpToDateCount++;
    } else if (error.message.includes('CONFLICT')) {
      console.log(`⚠️  ${branch} has conflicts, resolving by keeping main branch versions...`);
      
      try {
        // Get list of conflicted files
        const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
        const conflictedFiles = statusOutput
          .split('\n')
          .filter(line => line.startsWith('UU') || line.startsWith('AA') || line.startsWith('DD'))
          .map(line => line.substring(3).trim());
        
        if (conflictedFiles.length > 0) {
          // Resolve conflicts by keeping our version (main branch)
          execSync(`git checkout --ours ${conflictedFiles.join(' ')}`, { stdio: 'pipe' });
          execSync(`git add ${conflictedFiles.join(' ')}`, { stdio: 'pipe' });
          execSync(`git commit -m "Merge ${branch} into main - resolved conflicts by keeping main branch versions"`, { stdio: 'pipe' });
          
          console.log(`✅ Resolved conflicts and merged ${branch}`);
          mergedCount++;
        } else {
          console.log(`❌ Could not resolve conflicts for ${branch}`);
          execSync('git merge --abort', { stdio: 'pipe' });
          conflictCount++;
        }
      } catch (resolveError) {
        console.log(`❌ Failed to resolve conflicts for ${branch}: ${resolveError.message}`);
        try {
          execSync('git merge --abort', { stdio: 'pipe' });
        } catch (abortError) {
          // Ignore abort errors
        }
        conflictCount++;
      }
    } else {
      console.log(`❌ Error merging ${branch}: ${error.message}`);
      conflictCount++;
    }
  }
}

console.log(`\n📊 Merge Summary:`);
console.log(`✅ Successfully merged: ${mergedCount}`);
console.log(`ℹ️  Already up to date: ${alreadyUpToDateCount}`);
console.log(`❌ Failed due to conflicts: ${conflictCount}`);
console.log(`📝 Total processed: ${branchesToMerge.length}`);

if (mergedCount > 0) {
  console.log(`\n🚀 Pushing merged changes to origin/main...`);
  try {
    execSync('git push origin main', { stdio: 'inherit' });
    console.log(`✅ Successfully pushed to origin/main`);
  } catch (pushError) {
    console.log(`❌ Failed to push: ${pushError.message}`);
  }
}