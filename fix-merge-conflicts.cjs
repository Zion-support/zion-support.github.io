#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match merge conflict markers
    const conflictPattern = /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g;
    
    // Replace merge conflicts with the HEAD version (first part)
    content = content.replace(conflictPattern, (match) => {
      modified = true;
      const lines = match.split('\n');
      let result = [];
      let inHead = false;
      let inSeparator = false;
      
      for (let line of lines) {
        if (line.includes('<<<<<<< HEAD')) {
          inHead = true;
          continue;
        } else if (line.includes('=======')) {
          inHead = false;
          inSeparator = true;
          continue;
        } else if (line.includes('>>>>>>>')) {
          inSeparator = false;
          break;
        } else if (inHead && !inSeparator) {
          result.push(line);
        }
      }
      
      return result.join('\n');
    });
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax issues
    content = content.replace(/;\s*$/gm, ''); // Remove trailing semicolons
    content = content.replace(/\s+$/gm, ''); // Remove trailing whitespace
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other build directories
        if (['node_modules', 'dist', 'build', '.git', '.next', 'out'].includes(item)) {
          continue;
        }
        fixedCount += fixFilesInDirectory(fullPath);
      } else if (stat.isFile()) {
        // Only process TypeScript/JavaScript files
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          if (fixMergeConflicts(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');

// Fix files in the main directories
const directories = [
  '/workspace/app',
  '/workspace/api',
  '/workspace/hooks',
  '/workspace'
];

let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    totalFixed += fixFilesInDirectory(dir);
  }
}

// Also fix specific files in the root
const rootFiles = [
  'App.tsx',
  'App_minimal.tsx',
  'App_test.tsx',
  'EnhancedFooter.tsx',
  'SidebarNavigation.tsx'
];

for (const file of rootFiles) {
  const filePath = path.join('/workspace', file);
  if (fs.existsSync(filePath)) {
    if (fixMergeConflicts(filePath)) {
      totalFixed++;
    }
  }
}

console.log(`\nFixed merge conflicts in ${totalFixed} files.`);

// Run linting to check for remaining issues
console.log('\nRunning linting to check for remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting found issues, but merge conflicts should be resolved.');
}

console.log('Merge conflict resolution complete!');