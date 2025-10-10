#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolved = [];
  let inConflict = false;
  let keepLines = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      keepLines = true;
      continue;
    }
    
    if (line.includes('=======')) {
      keepLines = false;
      continue;
    }
    
    if (line.includes('>>>>>>>')) {
      inConflict = false;
      keepLines = false;
      continue;
    }
    
    if (inConflict) {
      if (keepLines) {
        resolved.push(line);
      }
      // Skip lines from the other branch
    } else {
      resolved.push(line);
    }
  }
  
  return resolved.join('\n');
}

// Function to fix common JSX issues
function fixJSXIssues(content) {
  // Fix missing parent elements by wrapping in React.Fragment
  if (content.includes('return (') && !content.includes('return <')) {
    // This is a basic fix - more complex cases need manual review
    content = content.replace(/return \(\s*([^)]+)\s*\);/g, 'return <>{$1}</>;');
  }
  
  return content;
}

// Find all TypeScript/JavaScript files with merge conflicts
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'app/**/*.js',
  'app/**/*.jsx',
  '__tests__/**/*.tsx',
  '__tests__/**/*.ts',
  '__tests__/**/*.js',
  '__tests__/**/*.jsx'
];

let totalFiles = 0;
let fixedFiles = 0;

patterns.forEach(async pattern => {
  const files = await glob(pattern, { cwd: process.cwd() });
  
  files.forEach(file => {
    totalFiles++;
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`Fixing merge conflicts in: ${file}`);
        const resolved = resolveMergeConflicts(content);
        const fixed = fixJSXIssues(resolved);
        fs.writeFileSync(file, fixed, 'utf8');
        fixedFiles++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
});

console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files with merge conflicts.`);