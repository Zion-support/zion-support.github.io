/* eslint-env node */
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Resolving merge conflicts by accepting incoming changes...');

// Function to resolve merge conflicts by accepting incoming changes
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`🔀 Resolving conflicts in ${filePath}`);
      
      // Remove merge conflict markers and keep the incoming changes (after =======)
      content = content
        .replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '')
        .replace(/>>>>>>> .*?\n?/g, '')
        .replace(/<<<<<<< .*?[\s\S]*?=======\n?/g, '')
        .replace(/>>>>>>> .*?\n?/g, '');
      
      // Clean up any remaining conflict markers
      content = content
        .replace(/<<<<<<< .*?\n?/g, '')
        .replace(/=======\n?/g, '')
        .replace(/>>>>>>> .*?\n?/g, '');
      
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const result = execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD"', { encoding: 'utf8' });
    return result.trim().split('\n').map(line => line.split(' ').pop()).filter(Boolean);
  } catch (error) {
    console.log('No conflicted files found or error:', error.message);
    return [];
  }
}

// Main function
async function main() {
  console.log('🔍 Finding files with merge conflicts...');
  const conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found');
    return;
  }
  
  console.log(`📁 Found ${conflictedFiles.length} files with conflicts`);
  
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  // Add resolved files to git
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('📝 Added resolved files to git');
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
  }
}

main().catch(console.error);