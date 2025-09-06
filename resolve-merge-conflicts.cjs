#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Resolving merge conflicts automatically...');

// Function to resolve conflicts in a file by accepting incoming changes
function resolveConflictsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('') || !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Strategy: Accept incoming changes (from PR branch)
    // Remove conflict markers and keep only the incoming changes
    let resolvedContent = content
      .replace(/\n?/g, '') // Remove HEAD section and separator
      .replace(/      .replace(/\n{3,}/g, '\n\n'); // Clean up excessive newlines

    // Write the resolved content back
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

// Main execution
function main() {
  console.log('🔍 Finding files with merge conflicts...');
  const conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }

  console.log(`📁 Found ${conflictedFiles.length} files with conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));

  let resolvedCount = 0;
  let totalCount = conflictedFiles.length;

  // Resolve conflicts in each file
  for (const file of conflictedFiles) {
    if (resolveConflictsInFile(file)) {
      resolvedCount++;
    }
  }

  console.log(`\n📊 Resolution Summary:`);
  console.log(`  - Total files: ${totalCount}`);
  console.log(`  - Successfully resolved: ${resolvedCount}`);
  console.log(`  - Failed: ${totalCount - resolvedCount}`);

  if (resolvedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! You can now commit the changes.');
  } else {
    console.log('\n⚠️  No conflicts were resolved. Manual intervention may be required.');
  }
}

main();