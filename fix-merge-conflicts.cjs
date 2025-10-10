#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (err) {
            // Skip files that can't be read
          }
        }
      }
=======

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep HEAD version
    // This regex removes everything between <<<<<<< HEAD and =======, 
    // and everything between ======= and >>>>>>> branch-name
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD"', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.log('No files with merge conflicts found or error occurred');
    return [];
  }
}

// Main function
function main() {
  console.log('Starting merge conflict resolution...');
  
  const filesWithConflicts = findFilesWithConflicts();
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  filesWithConflicts.forEach(filePath => {
    if (fixMergeConflicts(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
>>>>>>> origin/main
    }
  }
  
<<<<<<< HEAD
  searchDirectory(dir);
  return files;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any remaining conflict artifacts
    content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Fix common syntax issues
    content = content.replace(/;\s*$/gm, ';'); // Fix trailing semicolons
    content = content.replace(/\{\s*;\s*\}/g, '{}'); // Fix empty objects with semicolons
    content = content.replace(/,\s*}/g, '}'); // Remove trailing commas in objects
    content = content.replace(/,\s*]/g, ']'); // Remove trailing commas in arrays
    
    // Fix unterminated string literals by adding quotes
    content = content.replace(/(\w+)\s*=\s*"([^"]*?)\s*$/gm, '$1 = "$2"');
    content = content.replace(/(\w+)\s*=\s*'([^']*?)\s*$/gm, "$1 = '$2'");
    
    // Fix JSX syntax issues
    content = content.replace(/<(\w+)\s*([^>]*?)\s*$/gm, '<$1 $2>');
    content = content.replace(/\s*>\s*$/gm, '>');
    
    // Remove empty lines that might cause issues
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (err) {
    console.error(`Error fixing ${filePath}:`, err.message);
    return false;
  }
}

// Main execution
console.log('Starting merge conflict cleanup...');

const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Run a final check
console.log('Running final conflict check...');
try {
  const remainingConflicts = execSync('grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | wc -l', { encoding: 'utf8' });
  console.log(`Remaining conflicts: ${remainingConflicts.trim()}`);
} catch (err) {
  console.log('No remaining conflicts found');
}

console.log('Merge conflict cleanup completed!');
=======
  console.log(`\nMerge conflict resolution complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
  console.log(`- Total files processed: ${filesWithConflicts.length}`);
}

// Run the script
main();
>>>>>>> origin/main
