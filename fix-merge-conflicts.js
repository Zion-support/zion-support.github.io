#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflict markers in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after the last marker
    const lines = content.split('\n');
    let fixedLines = [];
    let inConflict = false;
    let conflictEnded = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD') || line.includes('=======')) {
        inConflict = true;
        continue;
      }
      
      if (line.includes('>>>>>>> origin/')) {
        inConflict = false;
        conflictEnded = true;
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      }
    }
    
    // If we found conflict markers, write the fixed content
    if (conflictEnded) {
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflict markers
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('>>>>>>> origin/')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return conflictedFiles;
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const conflictedFiles = findConflictedFiles('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);

// Now let's try to commit the changes
try {
  console.log('📝 Adding fixed files to git...');
  execSync('git add .', { cwd: '/workspace', stdio: 'inherit' });
  
  console.log('💾 Committing resolved conflicts...');
  execSync('git commit -m "Resolve merge conflicts and clean up corrupted files"', { 
    cwd: '/workspace', 
    stdio: 'inherit' 
  });
  
  console.log('✅ Successfully committed resolved conflicts');
} catch (error) {
  console.error('❌ Error during git operations:', error.message);
}

console.log('🎉 Merge conflict resolution complete!');