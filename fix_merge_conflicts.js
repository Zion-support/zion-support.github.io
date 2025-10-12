#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other build directories
      if (!['node_modules', 'dist', '.next', 'out', '.git'].includes(file)) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Function to resolve merge conflicts by accepting HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasConflicts = false;
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      hasConflicts = true;
      console.log(`Resolving conflicts in: ${filePath}`);
      
      // Split content into lines
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let acceptHead = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.trim() === '<<<<<<< HEAD') {
          inConflict = true;
          acceptHead = true;
          continue;
        } else if (line.trim() === '=======') {
          acceptHead = false;
          continue;
        } else if (line.trim().startsWith('>>>>>>>')) {
          inConflict = false;
          acceptHead = false;
          continue;
        }
        
        if (!inConflict || acceptHead) {
          resolvedLines.push(line);
        }
      }
      
      content = resolvedLines.join('\n');
      
      // Write the resolved content back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Resolved conflicts in: ${filePath}`);
    }
    
    return hasConflicts;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting merge conflict resolution...');

const files = findFiles('/workspace');
let conflictCount = 0;

files.forEach(file => {
  if (resolveMergeConflicts(file)) {
    conflictCount++;
  }
});

console.log(`\nMerge conflict resolution complete!`);
console.log(`Processed ${files.length} files`);
console.log(`Resolved conflicts in ${conflictCount} files`);

// Also fix some common syntax issues
console.log('\nFixing common syntax issues...');

// Fix the API file
const apiFile = '/workspace/api/onsite-request.js';
if (fs.existsSync(apiFile)) {
  try {
    let content = fs.readFileSync(apiFile, 'utf8');
    // Fix the try-catch syntax issue
    content = content.replace(/catch\s*\(\s*error\s*\)\s*{/, '} catch (error) {');
    fs.writeFileSync(apiFile, content, 'utf8');
    console.log('✓ Fixed API file syntax');
  } catch (error) {
    console.error('Error fixing API file:', error.message);
  }
}

console.log('All fixes applied!');