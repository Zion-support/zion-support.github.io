#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix array syntax issues
function fixArraySyntax(content) {
  // Fix patterns like: }] { value: ... }]
  content = content.replace(/}]\s*{\s*value:/g, '},\n        { value:');
  
  // Fix patterns like: }] 'text']
  content = content.replace(/}]\s*'([^']+)'\]/g, "},\n        '$1'");
  
  // Fix patterns like: }] "text"]
  content = content.replace(/}]\s*"([^"]+)"\]/g, '},\n        "$1"');
  
  // Fix patterns like: }] 'text' }]
  content = content.replace(/}]\s*'([^']+)'\s*}\]/g, "},\n        '$1'\n      }");
  
  // Fix patterns like: }] "text" }]
  content = content.replace(/}]\s*"([^"]+)"\s*}\]/g, '},\n        "$1"\n      }');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixArraySyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Fixing array syntax issues...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files.`);