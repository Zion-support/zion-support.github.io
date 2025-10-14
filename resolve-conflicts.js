#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting automated conflict resolution...');

// Function to resolve conflicts in a file
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no conflict markers
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return true;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Split by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'ours';
        continue;
      }

      if (line.includes('=======')) {
        conflictType = 'theirs';
        continue;
      }

      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }

      if (inConflict) {
        // For most conflicts, prefer the incoming changes (theirs)
        if (conflictType === 'theirs') {
          resolvedLines.push(line);
        }
        // Skip our changes (HEAD) in most cases
      } else {
        resolvedLines.push(line);
      }
    }

    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with conflicts
function findConflictFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding conflict files:', error.message);
    return [];
  }
}

// Main resolution process
function main() {
  console.log('🔍 Finding files with conflicts...');
  const conflictFiles = findConflictFiles();
  
  if (conflictFiles.length === 0) {
    console.log('✅ No conflict files found!');
    return;
  }

  console.log(`📁 Found ${conflictFiles.length} files with conflicts:`);
  conflictFiles.forEach(file => console.log(`  - ${file}`));

  let resolvedCount = 0;
  let failedCount = 0;

  conflictFiles.forEach(file => {
    if (resolveConflicts(file)) {
      resolvedCount++;
    } else {
      failedCount++;
    }
  });

  console.log(`\n📊 Resolution Summary:`);
  console.log(`  ✅ Successfully resolved: ${resolvedCount}`);
  console.log(`  ❌ Failed to resolve: ${failedCount}`);

  if (failedCount === 0) {
    console.log('\n🎉 All conflicts resolved! Attempting to commit...');
    try {
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "🤖 Auto-resolve merge conflicts"', { stdio: 'inherit' });
      console.log('✅ Conflicts resolved and committed successfully!');
    } catch (error) {
      console.error('❌ Error committing resolved conflicts:', error.message);
    }
  } else {
    console.log('\n⚠️  Some conflicts could not be automatically resolved. Manual intervention required.');
  }
}

main();