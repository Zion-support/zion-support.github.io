#!/usr/bin/env node
const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');

console.log(🔧 Starting comprehensive merge conflict resolution...');

// Function to find files with merge conflicts
function findMergeConflictFiles() {
  const files = [];
  const extensions = ['.ts, .tsx', '.js, .jsx'];
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.) && item !== node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes(              files.push(fullPath);
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
  
  scanDirectory(/workspace);
  return files;
}

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/    // Clean up any remaining conflict markers
    content = content.replace(/    content = content.replace(/=======\n?/g, );
    content = content.replace(/    
    // Clean up extra newlines
    content = content.replace(/\n{3}/g, '\n\n');
    
    // Clean up trailing whitespace
    content = content.replace(/[ \t]+$/gm, );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Main execution
const conflictFiles = findMergeConflictFiles();
console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictFiles) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed merge conflicts in ${fixedCount} files`);

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  totalFiles: conflictFiles.length,
  fixedFiles: fixedCount,
  files: conflictFiles
}

fs.writeFileSync('comprehensive-merge-fix-report.json', JSON.stringify(report, null, 2));
console.log('📊 Comprehensive merge conflict fix report saved to: comprehensive-merge-fix-report.json');