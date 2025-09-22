#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting aggressive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // More aggressive conflict resolution
    // Remove all merge conflict markers and keep the first version (HEAD)
    content = content.replace(/
    content = content.replace(/

    // Remove any remaining conflict markers
    content = content.replace(/

    // Clean up multiple newlines
    content = content.replace(/\n\n\n+/g, '\n\n');

    // Clean up trailing whitespace
    content = content.replace(/[ \t]+$/gm, '');

    // Remove empty lines at the end
    content = content.replace(/\n+$/, '\n');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictFiles(dir) {
  const conflictFiles = [];

  function scanDirectory(currentDir) {
    try {
      const files = fs.readdirSync(currentDir);

      for (const file of files) {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'temp_exclude', 'temp_backup', 'src_backup', 'src.pages.disabled'].includes(file)) {
            scanDirectory(filePath);
          }
        } else if (stat.isFile()) {
          // Check if file has merge conflicts
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('
              conflictFiles.push(filePath);
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

// Main execution
const conflictFiles = findConflictFiles('.');
console.log(`📊 Found ${conflictFiles.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

// Process files in batches to avoid memory issues
const batchSize = 100;
for (let i = 0; i < conflictFiles.length; i += batchSize) {
  const batch = conflictFiles.slice(i, i + batchSize);
  console.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(conflictFiles.length/batchSize)}...`);

  for (const file of batch) {
    if (resolveConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
}

console.log(`\n🎉 Conflict resolution complete!`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Check if there are still conflicts
const remainingConflicts = findConflictFiles('.');
if (remainingConflicts.length > 0) {
  console.log(`\n⚠️  ${remainingConflicts.length} files still have conflicts that need manual resolution:`);
  remainingConflicts.slice(0, 10).forEach(file => console.log(`   - ${file}`));
  if (remainingConflicts.length > 10) {
    console.log(`   ... and ${remainingConflicts.length - 10} more files`);
  }
} else {
  console.log(`\n🎊 All merge conflicts have been resolved!`);
}