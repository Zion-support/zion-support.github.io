#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Split by merge conflict markers
      const parts = content.split(/<<<<<<< HEAD|=======|>>>>>>> [^\n]+/);
      
      // Keep the first part (HEAD) and remove conflict markers
      let fixedContent = parts[0];
      
      // If there are multiple parts, we need to handle them
      if (parts.length > 1) {
        // Find the last part that's not empty
        for (let i = parts.length - 1; i >= 1; i--) {
          if (parts[i].trim()) {
            fixedContent = parts[i];
            break;
          }
        }
      }
      
      // Clean up any remaining conflict markers
      fixedContent = fixedContent
        .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
        .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '')
        .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      
      // Fix common syntax issues
      fixedContent = fixedContent
        // Fix JSX closing tags
        .replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '<$1$2></$1>')
        // Remove orphaned opening tags without closing
        .replace(/<(\w+)([^>]*)>\s*$/gm, '')
        // Fix missing semicolons in object properties
        .replace(/(\w+):\s*([^,}\n]+)(?=\s*[,}])/g, '$1: $2')
        // Fix missing commas in arrays/objects
        .replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:')
        // Fix JSX expressions
        .replace(/\{\s*([^}]+)\s*\}/g, '{$1}')
        // Remove extra whitespace
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .trim();
      
      fs.writeFileSync(filePath, fixedContent);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TSX/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
let totalFiles = tsxFiles.length;

console.log(`Found ${totalFiles} TSX/JSX files to check`);

for (const file of tsxFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also check root level files
const rootFiles = [
  'app/blog/page.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/Footer.tsx'
];

for (const file of rootFiles) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixMergeConflicts(fullPath)) {
      fixedCount++;
    }
  }
}

console.log(`Total files fixed: ${fixedCount}`);
console.log('Merge conflict resolution completed!');