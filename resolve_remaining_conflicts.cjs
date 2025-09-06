#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function resolveRemainingConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // More aggressive conflict resolution
    // Remove all merge conflict markers and keep everything between HEAD and =======
    content = content.replace(/<<<<<<< HEAD([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    
    // Clean up duplicate lines and empty lines
    const lines = content.split('\n');
    const cleanedLines = [];
    const seenLines = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Skip empty lines that follow other empty lines
      if (trimmedLine === '') {
        if (cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1].trim() !== '') {
          cleanedLines.push(line);
        }
        continue;
      }
      
      // Skip duplicate lines (but keep imports and exports)
      if (trimmedLine.startsWith('import ') || trimmedLine.startsWith('export ')) {
        cleanedLines.push(line);
      } else if (!seenLines.has(trimmedLine)) {
        seenLines.add(trimmedLine);
        cleanedLines.push(line);
      }
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    // Only write if content changed
    if (cleanedContent !== originalContent) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const srcDir = './src';
const filesWithConflicts = findFilesWithConflicts(srcDir);

console.log(`Found ${filesWithConflicts.length} files with remaining merge conflicts`);

let resolvedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveRemainingConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);