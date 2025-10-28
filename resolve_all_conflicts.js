#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by choosing the origin branch version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match merge conflict markers
    const conflictPattern = /([\s\S]*?)>>>>>>> origin\/[^\n]+/g;
    
    // Replace conflicts with the origin branch content (after =======)
    content = content.replace(conflictPattern, (match, originContent) => {
      return originContent.trim();
    });
    
    // Clean up any remaining conflict markers
    content = content.replace(/[\s\S]*?>>>>>>> origin\/[^\n]+/g, '');
    content = content.replace(//g, '');
    content = content.replace(/>>>>>>> origin\/[^\n]+/g, '');
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('') || content.includes('>>>>>>> origin')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace';
const conflictedFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Successfully resolved conflicts in ${resolvedCount} files`);