#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting comprehensive merge conflict resolution...');

// List of branches to merge
const branchesToMerge = [
  'origin/cursor/expand-services-advertise-and-build-project-4b36',
  'origin/cursor/expand-services-advertise-and-build-project-69aa',
  'origin/cursor/expand-services-advertise-and-build-project-71ba',
  'origin/cursor/expand-services-advertise-and-build-project-b35a',
  'origin/cursor/fix-netlify-build-and-merge-to-main-1433',
  'origin/cursor/fix-netlify-build-and-merge-to-main-2ba6',
  'origin/cursor/fix-website-loading-errors-and-merge-2fdf',
  'origin/cursor/fix-website-loading-errors-and-merge-56cb',
  'origin/cursor/fix-website-loading-errors-and-merge-756f',
  'origin/cursor/fix-website-loading-errors-and-merge-d7a9',
  'origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4',
  'origin/feature/merge-conflicts-and-improvements',
  'origin/final-merged-improvements',
  'origin/fix-website-loading-errors-final',
  'origin/main-clean-1757174491',
  'origin/resolved-all-conflicts-final-1757174062',
  'origin/working-site-main-final'
];

// Files that should always use main branch version (conflict resolution strategy)
const useMainBranch = [
  'package-lock.json',
  'yarn.lock',
  'dist/',
  'node_modules/',
  '.next/',
  'build/',
  'coverage/',
  '*.log',
  '*.tmp',
  '*.temp'
];

// Files that should always use incoming branch version
const useIncomingBranch = [
  'src/App.tsx', // Keep our build fix
  'src/components/Header.tsx',
  'src/main.tsx'
];

// Function to check if a file matches any pattern
function matchesPattern(filePath, patterns) {
  return patterns.some(pattern => {
    if (pattern.includes('*')) {
      const regex = new RegExp(pattern.replace(/\*/g, '.*'));
      return regex.test(filePath);
    }
    return filePath.includes(pattern);
  });
}

// Function to resolve conflicts in a file
function resolveConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('<<<<<<< HEAD')) {
      return; // No conflicts in this file
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    let resolvedContent = content;
    
    // Strategy: Use main branch for most files, incoming for specific files
    if (matchesPattern(filePath, useIncomingBranch)) {
      // Use incoming branch version (after =======)
      resolvedContent = content.replace(
        /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g,
        '$1'
      );
    } else if (matchesPattern(filePath, useMainBranch)) {
      // Use main branch version (before =======)
      resolvedContent = content.replace(
        /<<<<<<< HEAD([\s\S]*?)=======[\s\S]*?>>>>>>> [^\n]+/g,
        '$1'
      );
    } else {
      // Default: try to merge intelligently
      resolvedContent = content.replace(
        /<<<<<<< HEAD([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+/g,
        (match, mainContent, incomingContent) => {
          // For most files, prefer main branch but keep important incoming changes
          const mainLines = mainContent.trim().split('\n');
          const incomingLines = incomingContent.trim().split('\n');
          
          // If incoming has significantly more content, use it
          if (incomingLines.length > mainLines.length * 1.5) {
            return incomingContent;
          }
          
          // Otherwise use main branch
          return mainContent;
        }
      );
    }

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    resolvedContent = resolvedContent.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');

    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
  }
}

// Function to merge a branch
async function mergeBranch(branchName) {
  console.log(`\n🔄 Attempting to merge: ${branchName}`);
  
  try {
    // Create a temporary branch for this merge
    const tempBranch = `temp-merge-${Date.now()}`;
    
    execSync(`git checkout -b ${tempBranch}`, { stdio: 'inherit' });
    
    try {
      // Attempt merge
      execSync(`git merge ${branchName} --no-commit`, { stdio: 'pipe' });
      console.log(`✅ ${branchName} merged successfully without conflicts`);
    } catch (mergeError) {
      console.log(`⚠️  ${branchName} has conflicts, resolving...`);
      
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .trim()
        .split('\n')
        .filter(file => file.length > 0);
      
      console.log(`Found ${conflictedFiles.length} conflicted files`);
      
      // Resolve conflicts in each file
      conflictedFiles.forEach(resolveConflicts);
      
      // Add resolved files
      execSync('git add .', { stdio: 'inherit' });
      
      // Commit the merge
      execSync(`git commit -m "Merge ${branchName} - resolved conflicts"`, { stdio: 'inherit' });
      
      console.log(`✅ ${branchName} merged successfully after conflict resolution`);
    }
    
    // Switch back to main and merge the temp branch
    execSync('git checkout main', { stdio: 'inherit' });
    execSync(`git merge ${tempBranch} --no-ff -m "Merge ${branchName} into main"`, { stdio: 'inherit' });
    
    // Clean up temp branch
    execSync(`git branch -D ${tempBranch}`, { stdio: 'inherit' });
    
    console.log(`🎉 Successfully merged ${branchName} into main`);
    
  } catch (error) {
    console.error(`❌ Failed to merge ${branchName}:`, error.message);
    
    // Clean up on error
    try {
      execSync('git checkout main', { stdio: 'pipe' });
      execSync(`git branch -D temp-merge-${Date.now()}`, { stdio: 'pipe' });
    } catch (cleanupError) {
      // Ignore cleanup errors
    }
  }
}

// Main execution
async function main() {
  try {
    console.log('📋 Branches to merge:', branchesToMerge.length);
    
    for (const branch of branchesToMerge) {
      await mergeBranch(branch);
    }
    
    console.log('\n🎉 All branches processed!');
    console.log('📊 Final status:');
    execSync('git status', { stdio: 'inherit' });
    
  } catch (error) {
    console.error('💥 Script failed:', error.message);
    process.exit(1);
  }
}

main();