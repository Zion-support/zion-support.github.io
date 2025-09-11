#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Resolving All Merge Conflicts');
console.log('=================================');

// Function to resolve conflicts in a file
function resolveConflictsInFile(filePath) {
  try {
    console.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return true; // No conflicts
    }
    
    let resolvedContent = content;
    
    // Strategy: Keep our changes (HEAD) for most conflicts
    resolvedContent = resolvedContent.replace(
      /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g,
      '$1'
    );
    
    // Handle any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    resolvedContent = resolvedContent.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
    
  } catch (error) {
    console.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictFiles(dir) {
  const conflictFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if file has merge conflicts
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              conflictFiles.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return conflictFiles;
}

// Function to run git commands
function runGitCommand(command) {
  try {
    execSync(command, { 
      cwd: '/workspace',
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return true;
  } catch (error) {
    console.log(`⚠️  Git command failed: ${command}`);
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('📍 Starting conflict resolution process...');
    
    // Find all files with merge conflicts
    console.log('🔍 Scanning for files with merge conflicts...');
    const conflictFiles = findConflictFiles('/workspace');
    
    console.log(`Found ${conflictFiles.length} files with merge conflicts`);
    
    if (conflictFiles.length === 0) {
      console.log('✅ No merge conflicts found!');
      return;
    }
    
    // Resolve conflicts in each file
    let resolvedCount = 0;
    let failedCount = 0;
    
    for (const file of conflictFiles) {
      if (resolveConflictsInFile(file)) {
        resolvedCount++;
      } else {
        failedCount++;
      }
    }
    
    console.log(`\n📊 Conflict Resolution Summary:`);
    console.log(`✅ Successfully resolved: ${resolvedCount} files`);
    console.log(`❌ Failed to resolve: ${failedCount} files`);
    
    if (resolvedCount > 0) {
      console.log('\n🔄 Adding resolved files to git...');
      
      // Add all resolved files
      for (const file of conflictFiles) {
        runGitCommand(`git add "${file}"`);
      }
      
      console.log('✅ All resolved files added to git');
      
      // Check if we can commit
      const status = runGitCommand('git status --porcelain');
      if (status && status.trim() !== '') {
        console.log('🔄 Committing resolved conflicts...');
        if (runGitCommand('git commit -m "Resolve all merge conflicts automatically"')) {
          console.log('✅ Successfully committed resolved conflicts');
        } else {
          console.log('⚠️  Could not commit resolved conflicts');
        }
      }
    }
    
    // Final check for remaining conflicts
    console.log('\n🔍 Final check for remaining conflicts...');
    const remainingConflicts = findConflictFiles('/workspace');
    
    if (remainingConflicts.length === 0) {
      console.log('🎉 All merge conflicts have been resolved!');
    } else {
      console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
      remainingConflicts.forEach(file => console.log(`  - ${file}`));
    }
    
  } catch (error) {
    console.error('❌ Error during conflict resolution:', error.message);
  }
}

// Run the main function
main();