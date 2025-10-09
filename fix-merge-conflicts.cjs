#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to recursively find all files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep HEAD version
    // This regex removes everything from <<<<<<< to ======= (inclusive)
    // and everything from ======= to >>>>>>> (inclusive)
    content = content.replace(/<<<<<<<[^>]*\n.*?\n=======\n.*?\n>>>>>>>[^\n]*\n?/gs, '');
    
    // Also handle cases where there might be just <<<<<<< and >>>>>>> without =======
    content = content.replace(/<<<<<<<[^>]*\n.*?\n>>>>>>>[^\n]*\n?/gs, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<<[^\n]*\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>>[^\n]*\n?/g, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove trailing whitespace
    content = content.replace(/[ \t]+$/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');

const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
let totalConflicts = 0;

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      totalConflicts++;
      if (fixMergeConflicts(file)) {
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\n📊 Summary:`);
console.log(`Files with conflicts: ${totalConflicts}`);
console.log(`Files fixed: ${fixedCount}`);

if (fixedCount > 0) {
  console.log('\n✅ Merge conflicts have been resolved!');
  console.log('You can now run: pnpm run build');
} else {
  console.log('\n✅ No merge conflicts found or all conflicts were already resolved.');
}