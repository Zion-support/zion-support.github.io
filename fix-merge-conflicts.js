#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepHead = true; // Keep HEAD version by default
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        keepHead = true;
        continue;
      } else if (line.startsWith('=======')) {
        keepHead = false;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        continue;
      }
      
      if (!inConflict || keepHead) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
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
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript/JSX files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  walkDir(dir);
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

// Also fix any remaining syntax issues in JSX files
console.log('Fixing common JSX syntax issues...');

const jsxFiles = findFilesWithConflicts(workspaceDir).filter(f => f.endsWith('.tsx') || f.endsWith('.jsx'));

for (const file of jsxFiles) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax issues
    // Fix unclosed JSX tags
    content = content.replace(/<(\w+)([^>]*?)(?<!\s\/)>/g, (match, tagName, attributes) => {
      if (attributes.includes('=') && !attributes.includes('/>')) {
        return `<${tagName}${attributes} />`;
      }
      return match;
    });
    
    // Fix missing closing tags in some common patterns
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    content = content.replace(/<p([^>]*)>\s*$/gm, '<p$1></p>');
    content = content.replace(/<span([^>]*)>\s*$/gm, '<span$1></span>');
    
    if (content !== fs.readFileSync(file, 'utf8')) {
      fs.writeFileSync(file, content, 'utf8');
      modified = true;
    }
    
    if (modified) {
      console.log(`Fixed syntax issues in: ${file}`);
    }
  } catch (error) {
    console.error(`Error fixing syntax in ${file}:`, error.message);
  }
}

console.log('Merge conflict resolution completed!');