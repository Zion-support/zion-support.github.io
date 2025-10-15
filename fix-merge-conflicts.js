const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and take the first valid section
    const sections = content.split(/<<<<<<< HEAD\n?/);
    let resolvedContent = sections[0];
    
    for (let i = 1; i < sections.length; i++) {
      const section = sections[i];
      const parts = section.split(/=======\n?/);
      if (parts.length >= 2) {
        const middlePart = parts[1].split(/>>>>>>> [^\n]+\n?/);
        if (middlePart.length >= 1) {
          resolvedContent += middlePart[0];
        }
      }
    }
    
    // Clean up any remaining merge conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n?/g, '');
    resolvedContent = resolvedContent.replace(/=======\n?/g, '');
    resolvedContent = resolvedContent.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
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
          if (content.includes('<<<<<<< HEAD')) {
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
console.log('Starting merge conflict resolution...');

const appDir = './app';
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also check and fix any remaining files in the root
const rootFiles = ['./App.tsx', './api/create-checkout-session.js', './api/create-payment-intent.js'];
for (const file of rootFiles) {
  if (fs.existsSync(file)) {
    resolveMergeConflicts(file);
  }
}

console.log('Merge conflict resolution completed!');