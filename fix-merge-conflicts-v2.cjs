#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines for easier processing
    let lines = content.split('\n');
    let result = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Check for merge conflict start
      if (line.startsWith('<<<<<<<')) {
        modified = true;
        i++; // Skip the <<<<<<< line
        
        // Collect HEAD content until we hit =======
        let headContent = [];
        while (i < lines.length && !lines[i].startsWith('=======')) {
          headContent.push(lines[i]);
          i++;
        }
        
        // Skip the ======= line
        if (i < lines.length && lines[i].startsWith('=======')) {
          i++;
        }
        
        // Skip cursor content until we hit >>>>>>>
        while (i < lines.length && !lines[i].startsWith('>>>>>>>')) {
          i++;
        }
        
        // Skip the >>>>>>> line
        if (i < lines.length && lines[i].startsWith('>>>>>>>')) {
          i++;
        }
        
        // Add the HEAD content to result
        result.push(...headContent);
      } else {
        result.push(line);
        i++;
      }
    }
    
    if (modified) {
      const finalContent = result.join('\n');
      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`✅ Resolved merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('grep -r "^<<<<<<<" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -l', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No files with merge conflicts found or grep failed');
    return [];
  }
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const filesWithConflicts = findFilesWithConflicts();
  
  if (filesWithConflicts.length === 0) {
    console.log('✅ No files with merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts:`);
  filesWithConflicts.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Resolving merge conflicts...');
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  filesWithConflicts.forEach(file => {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`  ❌ Errors: ${errorCount} files`);
  
  if (resolvedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! Running lint check...');
    try {
      execSync('pnpm run lint', { stdio: 'inherit' });
      console.log('✅ Lint check passed!');
    } catch (error) {
      console.log('⚠️  Lint check failed, but merge conflicts are resolved');
    }
  }
}

// Run the script
main();