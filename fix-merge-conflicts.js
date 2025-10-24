#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFilesWithConflicts(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
          fileList.push(filePath);
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
  });
  
  return fileList;
}

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let inHead = false;
  let inSeparator = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
      inConflict = true;
      inHead = true;
      inSeparator = false;
      continue;
    }
    
      inConflict = false;
      inHead = false;
      inSeparator = false;
      continue;
    }
    
    if (inConflict) {
      if (inHead) {
        resolvedLines.push(line);
      }
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const filesWithConflicts = findFilesWithConflicts('/workspace');
  
  if (filesWithConflicts.length === 0) {
    console.log('✅ No files with merge conflicts found.');
    return;
  }
  
  console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts:`);
  filesWithConflicts.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Resolving merge conflicts...');
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  filesWithConflicts.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const resolvedContent = resolveMergeConflicts(content);
      
      // Only write if content actually changed
      if (resolvedContent !== content) {
        fs.writeFileSync(filePath, resolvedContent, 'utf8');
        console.log(`✅ Resolved: ${filePath}`);
        resolvedCount++;
      } else {
        console.log(`⚠️  No changes needed: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  - Files processed: ${filesWithConflicts.length}`);
  console.log(`  - Successfully resolved: ${resolvedCount}`);
  console.log(`  - Errors: ${errorCount}`);
  
  if (resolvedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! You can now run the build process.');
  }
}

// Run the script
main();