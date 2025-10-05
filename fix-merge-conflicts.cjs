#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing merge conflicts in files...');

// Files with merge conflicts
const conflictedFiles = [
  'src/OptimizedApp.tsx',
  'src/__tests__/components/Header.test.tsx',
  'src/performance-monitor.ts',
  'src/router.tsx',
  'src/security-enhancer.ts',
  'src/setupTests.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    console.log(`🔧 Fixing conflicts in ${filePath}...`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ File ${filePath} does not exist, skipping...`);
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the most recent version
    // This is a simple approach - keep everything after the last =======
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
    
    // If we have cleaned content, write it back
    if (cleanedLines.length > 0) {
      const cleanedContent = cleanedLines.join('\n');
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