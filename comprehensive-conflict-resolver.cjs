#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting comprehensive conflict resolution...\n');

// Function to resolve conflicts in a single file
function resolveConflictsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    // Advanced conflict resolution strategy
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepIncoming = false;
    let conflictCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepIncoming = false;
        conflictCount++;
        continue;
      } else if (line.includes('=======')) {
        keepIncoming = true;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepIncoming = false;
        continue;
      }
      
      if (!inConflict || keepIncoming) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    // Only write if content changed
    if (resolvedContent !== content) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✅ Resolved ${conflictCount} conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find all files with conflicts
function findAllConflictFiles() {
  const conflictFiles = [];
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', 'out', 'coverage'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if file has conflicts
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
  
  scanDirectory('/workspace');
  return conflictFiles;
}

// Main execution
async function main() {
  try {
    console.log('📋 Step 1: Finding all files with merge conflicts...\n');
    const conflictFiles = findAllConflictFiles();
    console.log(`Found ${conflictFiles.length} files with conflicts\n`);
    
    if (conflictFiles.length === 0) {
      console.log('✅ No merge conflicts found!\n');
      return;
    }
    
    console.log('📋 Step 2: Resolving conflicts in each file...\n');
    let resolvedCount = 0;
    
    for (const file of conflictFiles) {
      if (resolveConflictsInFile(file)) {
        resolvedCount++;
      }
    }
    
    console.log(`\n✅ Resolved conflicts in ${resolvedCount} files\n`);
    
    if (resolvedCount > 0) {
      console.log('📋 Step 3: Adding resolved files to git...\n');
      try {
        execSync('git add .', { cwd: '/workspace' });
        console.log('✅ Files added to git\n');
      } catch (error) {
        console.log(`⚠️  Warning: Could not add files to git: ${error.message}\n`);
      }
      
      console.log('📋 Step 4: Committing resolved conflicts...\n');
      try {
        execSync('git commit -m "Resolve all merge conflicts automatically"', { cwd: '/workspace' });
        console.log('✅ Conflicts committed\n');
      } catch (error) {
        console.log(`⚠️  Warning: Could not commit: ${error.message}\n`);
      }
    }
    
    console.log('📋 Step 5: Checking git status...\n');
    try {
      const status = execSync('git status --porcelain', { cwd: '/workspace', encoding: 'utf8' });
      if (status.trim()) {
        console.log('Remaining changes:', status);
      } else {
        console.log('✅ Working directory is clean');
      }
    } catch (error) {
      console.log(`⚠️  Warning: Could not check git status: ${error.message}`);
    }
    
    console.log('\n🎉 Conflict resolution completed!\n');
    
  } catch (error) {
    console.log(`\n❌ Error during execution: ${error.message}`);
  }
}

main();