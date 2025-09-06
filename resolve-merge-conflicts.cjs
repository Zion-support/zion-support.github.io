#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
<<<<<<< HEAD

console.log('🔄 Resolving merge conflicts automatically...');

try {
  // Get list of conflicted files
  const conflictedFiles = execSync('git status --porcelain | grep "^UU"', { encoding: 'utf8' })
    .split('\n')
    .filter(line => line.trim())
    .map(line => line.substring(3).trim());
=======
const path = require('path');

console.log('🔧 Starting automatic merge conflict resolution...');

// Get list of files with merge conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus.split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.split(' ').pop())
  .filter(file => file && file !== '');
>>>>>>> 28601aac623bcec3237bca0d0f98b72b3a29337a

  console.log(`Found ${conflictedFiles.length} conflicted files`);

<<<<<<< HEAD
  let resolved = 0;
  let failed = 0;

  conflictedFiles.forEach(file => {
    try {
      console.log(`Resolving ${file}...`);
      
      // Accept our version (the changes from our branch)
      execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
      execSync(`git add "${file}"`, { stdio: 'pipe' });
      
      resolved++;
      console.log(`✅ Resolved ${file}`);
    } catch (error) {
      console.log(`❌ Failed to resolve ${file}: ${error.message}`);
      failed++;
    }
  });

  console.log(`\n📊 Resolution Summary:`);
  console.log(`✅ Resolved: ${resolved}`);
  console.log(`❌ Failed: ${failed}`);

  if (failed === 0) {
    console.log('\n🎉 All conflicts resolved! Committing merge...');
    execSync('git commit -m "Merge branch with comprehensive automation improvements"', { stdio: 'inherit' });
    console.log('✅ Merge completed successfully!');
  } else {
    console.log('\n⚠️ Some conflicts could not be resolved automatically.');
  }

} catch (error) {
  console.error('❌ Error resolving conflicts:', error.message);
  process.exit(1);
=======
// Function to resolve conflicts by choosing incoming changes
function resolveConflicts(filePath) {
  try {
    console.log(`Resolving conflicts in ${filePath}...`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace merge conflict markers with incoming changes
    // Remove and
    content = content.replace(/[\s\S]*?
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    // Add the file to git
    execSync(`git add "${filePath}"`, { stdio: 'inherit' });
    
    console.log(`✅ Resolved conflicts in ${filePath}`);
  } catch (error) {
    console.error(`❌ Failed to resolve conflicts in ${filePath}:`, error.message);
  }
}

// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);

console.log('🎉 Merge conflict resolution completed!');
console.log('Files resolved:', conflictFiles.length);

// Check if there are any remaining conflicts
const remainingConflicts = execSync('git status --porcelain', { encoding: 'utf8' })
  .split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));

if (remainingConflicts.length === 0) {
  console.log('✅ All conflicts resolved successfully!');
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts`);
>>>>>>> 28601aac623bcec3237bca0d0f98b72b3a29337a
}