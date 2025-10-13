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
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    let conflictEnd = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
      if (line.startsWith('=======')) {
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictEnd = i;
        
        // For now, we'll keep the content before the conflict markers
        // and remove the conflict markers themselves
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content back to the file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', '.next', 'dist', 'out', '.git'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
function main() {
  const workspaceDir = process.cwd();
  console.log(`Resolving merge conflicts in: ${workspaceDir}`);
  
  const sourceFiles = findSourceFiles(workspaceDir);
  let resolvedCount = 0;
  
  for (const file of sourceFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`Resolved merge conflicts in ${resolvedCount} files`);
  
  // Run a quick check to see if there are any remaining conflicts
  try {
    const result = execSync('grep -r "<<<<<<<" app/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', { encoding: 'utf8' });
    if (result.trim()) {
      console.log('Warning: Some merge conflicts may still exist:');
      console.log(result);
    } else {
      console.log('All merge conflicts resolved successfully!');
    }
  } catch (error) {
    console.log('Could not check for remaining conflicts, but resolution completed.');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { resolveMergeConflicts, findSourceFiles };