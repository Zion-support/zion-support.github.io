#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Split by conflict markers and keep HEAD version
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let keepCurrent = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith('<<<<<<< HEAD')) {
          inConflict = true;
          keepCurrent = true;
          continue;
        } else if (line.startsWith('=======')) {
          keepCurrent = false;
          continue;
        } else if (line.startsWith('>>>>>>>')) {
          inConflict = false;
          keepCurrent = false;
          continue;
        }
        
        if (!inConflict || keepCurrent) {
          resolvedLines.push(line);
        }
      }
      
      const resolvedContent = resolvedLines.join('\n');
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
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
        if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
    totalConflicts++;
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files processed: ${files.length}`);
console.log(`Files with conflicts fixed: ${fixedCount}`);

// Also check for any remaining conflict markers
console.log('\nChecking for remaining conflict markers...');
try {
  const result = execSync('grep -r "<<<<<<< HEAD\\|=======\\|>>>>>>>" src/ || true', { encoding: 'utf8' });
  if (result.trim()) {
    console.log('Warning: Some conflict markers may still remain:');
    console.log(result);
  } else {
    console.log('No remaining conflict markers found.');
  }
} catch (error) {
  console.log('No remaining conflict markers found.');
}

console.log('\nDone!');