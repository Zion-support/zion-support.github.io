#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...\n');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }

    console.log(`  📝 Resolving conflicts in: ${filePath}`);

    // Strategy: Keep the current branch changes (HEAD) and remove conflict markers
    let resolvedContent = content
      // Remove conflict markers and keep HEAD version
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1')
      // Handle cases where there might be multiple conflict sections
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
      // Clean up any remaining conflict markers
      .replace(/<<<<<<< [^\n]+\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]+\n?/g, '')
      // Remove extra empty lines
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim();

    // Write the resolved content back
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`  ❌ Error resolving ${filePath}:`, error.message);
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
async function main() {
  console.log('🔍 Finding files with merge conflicts...');
  const conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }

  console.log(`📋 Found ${conflictedFiles.length} files with conflicts:\n`);

  let resolvedCount = 0;
  let errorCount = 0;

  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }

  console.log(`\n📊 Resolution Summary:`);
  console.log(`  ✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`  ❌ Errors: ${errorCount} files`);

  if (resolvedCount > 0) {
    console.log('\n🔄 Adding resolved files to git...');
    try {
      execSync('git add .', { stdio: 'inherit' });
      console.log('✅ All resolved files added to git');
    } catch (error) {
      console.error('❌ Error adding files to git:', error.message);
    }
  }

  console.log('\n🎉 Merge conflict resolution completed!');
}

main().catch(console.error);