#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting automatic conflict resolution...');

// Function to resolve conflicts by keeping both versions
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has conflict markers
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Split by conflict markers
    const parts = content.split(/<<<<<<< HEAD\n|=======\n|>>>>>>> [^\n]+\n/);
    
    if (parts.length < 3) {
      console.log(`⚠️  Invalid conflict format in: ${filePath}`);
      return false;
    }

    // Strategy: Keep the incoming changes (the last part before the final marker)
    // This prioritizes the remote changes over local changes
    let resolvedContent = '';
    
    for (let i = 0; i < parts.length; i++) {
      if (i % 3 === 0) {
        // Before first conflict or after resolution
        resolvedContent += parts[i];
      } else if (i % 3 === 2) {
        // This is the incoming change (after =======)
        resolvedContent += parts[i];
      }
      // Skip the local changes (between <<<<<<< and =======)
    }

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n/gs, '');
    
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to get all conflicted files
function getConflictedFiles() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = status
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file.length > 0);
    
    return conflictedFiles;
  } catch (error) {
    console.error('❌ Error getting conflicted files:', error.message);
    return [];
  }
}

// Main execution
function main() {
  console.log('📋 Getting list of conflicted files...');
  const conflictedFiles = getConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No conflicted files found.');
    return;
  }

  console.log(`📝 Found ${conflictedFiles.length} conflicted files:`);
  conflictedFiles.forEach(file => console.log(`   - ${file}`));

  let resolvedCount = 0;
  let totalCount = conflictedFiles.length;

  conflictedFiles.forEach(file => {
    if (resolveConflicts(file)) {
      resolvedCount++;
    }
  });

  console.log(`\n📊 Resolution Summary:`);
  console.log(`   ✅ Successfully resolved: ${resolvedCount}/${totalCount} files`);
  
  if (resolvedCount < totalCount) {
    console.log(`   ⚠️  ${totalCount - resolvedCount} files need manual resolution`);
  }

  // Add resolved files to git
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ Added resolved files to git staging area');
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
  }
}

main();