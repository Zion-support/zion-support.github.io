#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...\n');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts
    }
    
    console.log(`  Fixing merge conflicts in: ${filePath}`);
    
    // Strategy: Keep the HEAD version (our changes) and remove conflict markers
    let lines = content.split('\n');
    let result = [];
    let inConflict = false;
    let keepHead = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepHead = true;
        continue;
      } else if (line.startsWith('=======')) {
        keepHead = false;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (!inConflict || keepHead) {
        result.push(line);
      }
    }
    
    // Write the cleaned content
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`  Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', '.next', 'dist', 'build', 'coverage'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.json'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
try {
  console.log('📁 Scanning for files with merge conflicts...');
  const allFiles = findFilesWithConflicts('.');
  
  console.log(`📊 Found ${allFiles.length} files to check\n`);
  
  let fixedCount = 0;
  let conflictFiles = [];
  
  for (const file of allFiles) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
      conflictFiles.push(file);
    }
  }
  
  console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files:`);
  conflictFiles.forEach(file => console.log(`  - ${file}`));
  
  if (fixedCount > 0) {
    console.log('\n🔄 Adding fixed files to git...');
    try {
      execSync('git add .', { stdio: 'inherit' });
      console.log('✅ Files added to git');
    } catch (error) {
      console.error('❌ Error adding files to git:', error.message);
    }
  }
  
  console.log('\n🎉 Merge conflict resolution complete!');
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}