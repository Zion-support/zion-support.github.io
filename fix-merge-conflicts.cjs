#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep the HEAD version (first part)
    const parts = content.split(/<<<<<<< HEAD\n?/);
    let resolved = parts[0];
    
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      const headEnd = part.indexOf('=======');
      if (headEnd !== -1) {
        const headContent = part.substring(0, headEnd);
        const afterConflict = part.substring(part.indexOf('>>>>>>>') + 7);
        const nextConflict = afterConflict.indexOf('<<<<<<< HEAD');
        
        if (nextConflict !== -1) {
          resolved += headContent + afterConflict.substring(0, nextConflict);
        } else {
          resolved += headContent + afterConflict;
        }
      }
    }
    
    // Clean up any remaining conflict markers
    resolved = resolved.replace(/=======.*?>>>>>>> [^\n]+/gs, '');
    resolved = resolved.replace(/<<<<<<< HEAD\n?/g, '');
    resolved = resolved.replace(/=======\n?/g, '');
    resolved = resolved.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && /\.(tsx?|jsx?|js|ts)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const workspaceDir = process.cwd();
const conflictedFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Also clean up any stray conflict markers in other files
console.log('Cleaning up any remaining conflict markers...');
try {
  execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" | xargs -I {} sh -c \'sed -i "/<<<<<<< HEAD/,/>>>>>>>/d" "{}"\'', { stdio: 'inherit' });
} catch (error) {
  // Ignore errors from grep when no files are found
}

console.log('Merge conflict resolution complete!');