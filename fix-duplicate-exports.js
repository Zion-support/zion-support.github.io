#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to find all files with duplicate default exports
function findFilesWithDuplicateExports(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const exportMatches = content.match(/export default/g);
          if (exportMatches && exportMatches.length > 1) {
            files.push(fullPath);
          }
        } catch (error) {
          console.log(`Error reading file ${fullPath}:`, error.message);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Function to fix duplicate default exports
function fixDuplicateExports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Split by lines
    const lines = content.split('\n');
    const fixedLines = [];
    let foundFirstExport = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('export default')) {
        if (!foundFirstExport) {
          // Keep the first export default
          fixedLines.push(line);
          foundFirstExport = true;
        } else {
          // Skip subsequent export default lines
          console.log(`  Removing duplicate export: ${line.trim()}`);
          continue;
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Only write if content changed
    if (fixedContent !== originalContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed duplicate exports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing exports in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Searching for files with duplicate default exports...');
const filesWithDuplicates = findFilesWithDuplicateExports(process.cwd());

if (filesWithDuplicates.length === 0) {
  console.log('✅ No files with duplicate default exports found!');
  process.exit(0);
}

console.log(`📁 Found ${filesWithDuplicates.length} files with duplicate default exports:`);
filesWithDuplicates.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing duplicate default exports...');
let fixedCount = 0;

for (const file of filesWithDuplicates) {
  if (fixDuplicateExports(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed duplicate exports in ${fixedCount} files`);

// Verify no more duplicates
console.log('\n🔍 Verifying no remaining duplicate exports...');
const remainingDuplicates = findFilesWithDuplicateExports(process.cwd());

if (remainingDuplicates.length === 0) {
  console.log('✅ All duplicate default exports fixed successfully!');
} else {
  console.log(`❌ ${remainingDuplicates.length} files still have duplicate exports:`);
  remainingDuplicates.forEach(file => console.log(`  - ${file}`));
}

console.log('\n🎉 Duplicate export fix complete!');