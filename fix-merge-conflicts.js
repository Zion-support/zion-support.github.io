#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false; // No merge conflicts
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        // Skip the HEAD marker
        i++;
        
        // Collect HEAD content until we hit =======
        const headContent = [];
        while (i < lines.length && lines[i].trim() !== '=======') {
          headContent.push(lines[i]);
          i++;
        }
        
        // Skip the ======= marker
        i++;
        
        // Collect the other branch content until we hit >>>>>>>
        const otherContent = [];
        while (i < lines.length && !lines[i].trim().startsWith('>>>>>>>')) {
          otherContent.push(lines[i]);
          i++;
        }
        
        // Skip the >>>>>>> marker
        i++;
        
        // Choose the content to keep (prefer the more complete version)
        const headText = headContent.join('\n').trim();
        const otherText = otherContent.join('\n').trim();
        
        // Decision logic: prefer the version with more content or better structure
        if (headText.length > otherText.length || 
            (headText.includes('import') && !otherText.includes('import')) ||
            (headText.includes('export') && !otherText.includes('export'))) {
          resolvedLines.push(...headContent);
        } else {
          resolvedLines.push(...otherContent);
        }
      } else {
        resolvedLines.push(line);
        i++;
      }
    }
    
    // Write the resolved content back
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') && content.includes('=======') && content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  traverse(dir);
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

// Run linting to check if there are any remaining issues
console.log('Running linting to check for remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('Linting completed successfully');
} catch (error) {
  console.log('Linting found some issues, but continuing...');
}

// Run type checking
console.log('Running type checking...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('Type checking completed successfully');
} catch (error) {
  console.log('Type checking found some issues, but continuing...');
}

console.log('Merge conflict resolution completed');