#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting improved merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
<<<<<<< HEAD
    
    // Clean up any remaining conflict markers
=======
    if (!content.includes('
    
    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/
    resolvedContent = resolvedContent.replace(//g, '');

    // Write the resolved content
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

// Main resolution process
function main() {
  console.log('🔍 Finding files with merge conflicts...');
  const conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }

  console.log(`📋 Found ${conflictedFiles.length} files with conflicts:`);
  conflictedFiles.forEach(file => console.log(`   - ${file}`));

  console.log('\n🔧 Resolving conflicts...');
  let resolvedCount = 0;
  let failedCount = 0;

  conflictedFiles.forEach(file => {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      failedCount++;
    }
  });

  console.log(`\n📊 Resolution Summary:`);
  console.log(`   ✅ Successfully resolved: ${resolvedCount}`);
  console.log(`   ❌ Failed to resolve: ${failedCount}`);

  if (failedCount === 0) {
    console.log('\n🎉 All merge conflicts resolved!');
    console.log('📝 Next steps:');
    console.log('   1. Review the resolved files');
    console.log('   2. Run: git add .');
    console.log('   3. Run: git commit -m "Resolve merge conflicts"');
    console.log('   4. Run: git push origin main');
  } else {
    console.log('\n⚠️  Some conflicts could not be automatically resolved.');
    console.log('Please manually review and resolve the remaining conflicts.');
  }
}

// Run the resolution
main();
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
