#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Common merge conflict patterns to fix
    const patterns = [
      // Remove empty merge conflict blocks
      {
        pattern: /<<<<<<< HEAD\s*\n=======\s*\n\s*>>>>>>> cursor[^\n]*\n/g,
        replacement: ''
      },
      // Fix simple line ending conflicts
      {
        pattern: /<<<<<<< HEAD\s*\n([^=]+?)\s*\n=======\s*\n\1\s*\n>>>>>>> cursor[^\n]*\n/g,
        replacement: '$1\n'
      },
      // Fix whitespace-only conflicts
      {
        pattern: /<<<<<<< HEAD\s*\n\s*\n=======\s*\n\s*\n>>>>>>> cursor[^\n]*\n/g,
        replacement: '\n'
      },
      // Fix simple content conflicts (take the second version)
      {
        pattern: /<<<<<<< HEAD\s*\n([^=]+?)\s*\n=======\s*\n([^>]+?)\s*\n>>>>>>> cursor[^\n]*\n/g,
        replacement: '$2\n'
      }
    ];
    
    // Apply patterns
    patterns.forEach(({ pattern, replacement }) => {
      content = content.replace(pattern, replacement);
    });
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> cursor')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Finding files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts('./app');

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Run linting to check for remaining issues
console.log('\nRunning linting to check for remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting found remaining issues that need manual fixing');
}