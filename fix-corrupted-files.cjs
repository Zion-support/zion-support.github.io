#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to check if a file is corrupted with HTML entities
function isCorruptedWithHtmlEntities(content) {
  return content.includes('&amp;apos;') || 
         content.includes('&amp;quot;') || 
         content.includes('&amp;lt;') || 
         content.includes('&amp;gt;') ||
         content.includes('&amp;amp;');
}

// Function to fix HTML entities in content
function fixHtmlEntities(content) {
  return content
    .replace(/&amp;apos;/g, "'")
    .replace(/&amp;quot;/g, '"')
    .replace(/&amp;lt;/g, '<')
    .replace(/&amp;gt;/g, '>')
    .replace(/&amp;amp;/g, '&');
}

// Function to find all corrupted files
function findCorruptedFiles(dir) {
  const corruptedFiles = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (isCorruptedWithHtmlEntities(content)) {
            corruptedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return corruptedFiles;
}

// Function to fix a corrupted file
function fixCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (isCorruptedWithHtmlEntities(content)) {
      content = fixHtmlEntities(content);
      fs.writeFileSync(filePath, content);
      console.log(`Fixed HTML entities in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting corrupted file detection and fixing...');

const corruptedFiles = findCorruptedFiles('.');
console.log(`Found ${corruptedFiles.length} files with HTML entity corruption`);

let fixedCount = 0;
for (const file of corruptedFiles) {
  if (fixCorruptedFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed HTML entities in ${fixedCount} files`);
console.log('Corrupted file fixing complete!');