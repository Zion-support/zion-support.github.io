#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the main branch version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> main/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> main/g, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> main/g, '');
    
    // Clean up duplicate imports and syntax issues
    const lines = content.split('\n');
    const cleanedLines = [];
    const seenImports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines and duplicate imports
      if (line === '' || line.startsWith('import') && seenImports.has(line)) {
        continue;
      }
      
      if (line.startsWith('import')) {
        seenImports.add(line);
      }
      
      // Fix common syntax issues
      let cleanedLine = line
        .replace(/,,+/g, ',')
        .replace(/;;+/g, ';')
        .replace(/\{\s*,/g, '{')
        .replace(/,\s*\}/g, '}')
        .replace(/\(\s*,/g, '(')
        .replace(/,\s*\)/g, ')')
        .replace(/\s+/g, ' ')
        .trim();
      
      if (cleanedLine) {
        cleanedLines.push(cleanedLine);
      }
    }
    
    const finalContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('>>>>>>> main')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find and fix files with merge conflicts
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

for (const file of conflictedFiles) {
  fixMergeConflicts(file);
}

console.log('Merge conflict resolution complete!');