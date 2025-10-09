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
    let modified = false;
    
    // Pattern to match merge conflict markers
    const conflictPattern = /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n?/gs;
    
    // Replace conflicts by choosing the HEAD version (first part)
    content = content.replace(conflictPattern, (match, headContent, otherContent) => {
      modified = true;
      console.log(`Resolving conflict in ${filePath}`);
      return headContent;
    });
    
    // Handle cases where there might be syntax errors from incomplete merges
    // Fix common syntax issues that result from merge conflicts
    
    // Fix duplicate imports
    content = content.replace(/(import\s+[^;]+;)\s*\1/g, '$1');
    
    // Fix malformed object properties (e.g., "{, name: 'value'")
    content = content.replace(/{\s*,\s*/g, '{');
    
    // Fix malformed array elements
    content = content.replace(/\[\s*,\s*/g, '[');
    
    // Fix duplicate commas
    content = content.replace(/,\s*,/g, ',');
    
    // Fix trailing commas before closing braces/brackets
    content = content.replace(/,\s*([}\]])/g, '$1');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+)\s+(\w+):/g, '$1,\n  $2:');
    
    // Fix malformed JSX attributes
    content = content.replace(/<\s*(\w+)\s+([^>]*?)\s*,\s*([^>]*?)>/g, '<$1 $2 $3>');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in ${filePath}`);
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
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main function
function main() {
  console.log('Starting merge conflict resolution...');
  
  const srcDir = path.join(__dirname, 'src');
  const files = findSourceFiles(srcDir);
  
  let fixedCount = 0;
  let totalFiles = files.length;
  
  console.log(`Found ${totalFiles} source files to check`);
  
  for (const file of files) {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nMerge conflict resolution complete!`);
  console.log(`Fixed conflicts in ${fixedCount} out of ${totalFiles} files`);
  
  // Also check for any remaining conflict markers
  console.log('\nChecking for remaining conflict markers...');
  try {
    const result = execSync('grep -r "<<<<<<< HEAD" src/ || true', { encoding: 'utf8' });
    if (result.trim()) {
      console.log('Warning: Some conflict markers may still remain:');
      console.log(result);
    } else {
      console.log('No remaining conflict markers found!');
    }
  } catch (error) {
    console.log('No remaining conflict markers found!');
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { resolveMergeConflicts, findSourceFiles };