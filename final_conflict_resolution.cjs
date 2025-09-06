#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function resolveAllConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all possible merge conflict patterns
    // Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Pattern 2: <<<<<<< HEAD ... >>>>>>> branch (no =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Pattern 3: ======= ... >>>>>>> branch (no <<<<<<< HEAD)
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Pattern 4: <<<<<<< HEAD ... ======= (no >>>>>>>)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Clean up the file content
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Skip lines that are part of conflict markers
      if (trimmedLine.startsWith('<<<<<<<') || trimmedLine.startsWith('=======') || trimmedLine.startsWith('>>>>>>>')) {
        inConflict = true;
        continue;
      }
      
      // If we were in a conflict and hit an empty line, skip it
      if (inConflict && trimmedLine === '') {
        continue;
      }
      
      // Reset conflict state when we hit non-empty content
      if (trimmedLine !== '') {
        inConflict = false;
      }
      
      // Skip excessive empty lines
      if (trimmedLine === '') {
        if (cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1].trim() !== '') {
          cleanedLines.push(line);
        }
        continue;
      }
      
      cleanedLines.push(line);
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
  if (resolveAllConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);