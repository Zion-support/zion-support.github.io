#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict patterns
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Clean up duplicate lines and empty lines
    const lines = content.split('\n');
    const cleanedLines = [];
    const seenLines = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Skip empty lines after conflict resolution
      if (trimmedLine === '') {
        if (cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1].trim() !== '') {
          cleanedLines.push('');
        }
        continue;
      }
      
      // Skip duplicate lines
      if (seenLines.has(trimmedLine)) {
        continue;
      }
      
      seenLines.add(trimmedLine);
      cleanedLines.push(line);
    }
    
    content = cleanedLines.join('\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findAndCleanFiles(dir) {
  let cleanedCount = 0;
  
  function processDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, dist, .git directories
          if (['node_modules', 'dist', '.git'].includes(item)) {
            continue;
          }
          processDirectory(fullPath);
        } else if (stat.isFile()) {
          // Process TypeScript, JavaScript, and JSX files
          if (item.match(/\.(tsx?|jsx?)$/)) {
            if (cleanFile(fullPath)) {
              cleanedCount++;
              console.log(`Cleaned: ${fullPath}`);
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error processing directory ${currentDir}:`, error.message);
    }
  }
  
  processDirectory(dir);
  return cleanedCount;
}

console.log('Starting comprehensive conflict cleanup...');
const cleanedCount = findAndCleanFiles('.');
console.log(`\nCleanup complete! Cleaned ${cleanedCount} files.`);