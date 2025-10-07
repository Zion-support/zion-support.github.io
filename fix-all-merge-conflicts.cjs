#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Finding and fixing all remaining merge conflicts...');

function findFilesWithConflicts(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFilesWithConflicts(filePath, fileList);
    } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx'))) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          fileList.push(filePath);
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
  }
  
  return fileList;
}

function fixMergeConflicts(filePath) {
  try {
    console.log(`🔧 Fixing conflicts in ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the most recent version
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = false;
        continue;
      }
      
      if (line.includes('=======')) {
        keepLines = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (!inConflict || keepLines) {
        cleanedLines.push(line);
      }
    }
    
    // Clean up any remaining empty lines and duplicates
    const finalLines = [];
    let lastLine = '';
    
    for (const line of cleanedLines) {
      if (line.trim() !== '' || lastLine.trim() !== '') {
        finalLines.push(line);
        lastLine = line;
      }
    }
    
    if (finalLines.length > 0) {
      const cleanedContent = finalLines.join('\n');
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`✅ Fixed conflicts in ${filePath}`);
      return true;
    } else {
      console.log(`⚠️ No content to keep in ${filePath}`);
      return false;
    }
    
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function main() {
  const conflictedFiles = findFilesWithConflicts('src');
  
  console.log(`📋 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  let fixedCount = 0;
  
  for (const file of conflictedFiles) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary: Fixed conflicts in ${fixedCount}/${conflictedFiles.length} files`);
  
  if (fixedCount === conflictedFiles.length) {
    console.log('🎉 All merge conflicts resolved!');
  } else {
    console.log('⚠️ Some files could not be fixed automatically');
  }
}

main();