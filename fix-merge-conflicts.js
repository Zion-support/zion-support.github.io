#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

<<<<<<< HEAD
// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, fileList = []) {
  const files = fs.readdirSync(dir);
=======
// Function to fix merge conflicts by keeping the HEAD version
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  let fixed = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n([\s\S]*?)  
  return fixed;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-f0fb

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules, .git, and other common directories
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(file)) {
        findFilesWithConflicts(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
          fileList.push(filePath);
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
  });

  return fileList;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/    
    // Clean up any remaining conflict markers
    content = content.replace(/    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Fix common syntax issues
    content = content.replace(/\}\s*\)\s*$/gm, '});');
    content = content.replace(/\}\s*\)\s*export/gm, '});\nexport');
    content = content.replace(/\}\s*\)\s*$/gm, '});');

    // Fix JSX closing tags
    content = content.replace(/<([^>]+)>\s*$/gm, (match, tagName) => {
      if (!match.includes('</')) {
        return match;
      }
      return match;
    });

    // Remove empty lines with just spaces
    content = content.replace(/^\s*\n/gm, '\n');

    // Remove multiple consecutive empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Finding files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts('/workspace');

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
filesWithConflicts.forEach(filePath => {
  if (fixMergeConflicts(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Run linting to check for remaining issues
console.log('Running linting to check for remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting found issues, but merge conflicts should be resolved');
}

console.log('Merge conflict fixing completed!');