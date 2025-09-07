#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting automated conflict resolution...\n');

// Get all conflicted files
function getConflictedFiles() {
  try {
    const output = execSync('git status --porcelain', { encoding: 'utf8' });
    const lines = output.split('\n').filter(line => line.trim());
    
    return lines
      .filter(line => line.includes('both modified'))
      .map(line => line.split('both modified:')[1].trim());
  } catch (error) {
    console.error('❌ Error getting conflicted files:', error.message);
    return [];
  }
}

// Resolve conflicts in a file using git's merge strategy
function resolveFileConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File does not exist: ${filePath}`);
      return false;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Use git checkout --ours to prefer our version for most files
    // This is a safe strategy for most conflicts
    execSync(`git checkout --ours "${filePath}"`, { stdio: 'pipe' });
    
    // Add the resolved file
    execSync(`git add "${filePath}"`, { stdio: 'pipe' });
    
    console.log(`✅ Resolved: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Main resolution process
function resolveAllConflicts() {
  const conflictedFiles = getConflictedFiles();
  
  console.log(`📊 Found ${conflictedFiles.length} files with conflicts\n`);
  
  if (conflictedFiles.length === 0) {
    console.log('🎉 No conflicts found!');
    return;
  }

  let resolvedCount = 0;
  let failedCount = 0;

  // Process files in smaller batches
  const batchSize = 20;
  for (let i = 0; i < conflictedFiles.length; i += batchSize) {
    const batch = conflictedFiles.slice(i, i + batchSize);
    console.log(`\n📦 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(conflictedFiles.length/batchSize)} (${batch.length} files)`);
    
    for (const file of batch) {
      if (resolveFileConflicts(file)) {
        resolvedCount++;
      } else {
        failedCount++;
      }
    }
  }

  console.log(`\n📈 Resolution Summary:`);
  console.log(`✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`❌ Failed to resolve: ${failedCount} files`);
  console.log(`📊 Total processed: ${resolvedCount + failedCount} files`);

  return { resolvedCount, failedCount };
}

// Run the resolution
const result = resolveAllConflicts();

if (result.resolvedCount > 0) {
  console.log('\n🎯 Attempting to complete merge...');
  try {
    execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
    console.log('✅ Merge completed successfully!');
  } catch (error) {
    console.error('❌ Error completing merge:', error.message);
    console.log('💡 You may need to resolve remaining conflicts manually');
  }
}

console.log('\n🎯 Automated conflict resolution completed!');