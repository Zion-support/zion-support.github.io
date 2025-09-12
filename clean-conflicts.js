#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to clean merge conflicts
function cleanMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Check if file has merge conflicts
    if (content.includes('      console.log(`🔧 Cleaning conflicts in: ${filePath}`);

      // Remove merge conflict markers and keep HEAD version (first part)
      content = content.replace(/      
      // Remove any remaining conflict markers
      content = content.replace(/      content = content.replace(/\n?/g, '');
      content = content.replace(/      
      // Clean up extra whitespace and malformed syntax
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      content = content.replace(/^\s+$/gm, '');
      content = content.replace(/;+;+/g, ';');
      content = content.replace(/''+/g, "'");
      content = content.replace(/""+/g, '"');

      fixed = true;
    }

    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Cleaned conflicts in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error cleaning conflicts in ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  const conflictedFiles = [];

  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.json') || item.endsWith('.md'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('              conflictedFiles.push(fullPath);
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

  scanDirectory('.');
  return conflictedFiles;
}

// Main execution
console.log('🚀 Starting merge conflict cleanup...');

const conflictedFiles = findConflictedFiles();
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let cleanedCount = 0;
for (const file of conflictedFiles) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(`🎉 Cleaned conflicts in ${cleanedCount}/${conflictedFiles.length} files`);