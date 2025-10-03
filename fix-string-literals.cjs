#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixStringLiterals(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix unterminated string literals by removing trailing quotes
    content = content.replace(/([^\\])"([^"]*)"\s*$/gm, '$1"$2"');
    content = content.replace(/([^\\])"([^"]*)"\s*$/gm, '$1"$2"');
    
    // Fix specific patterns like "string", -> "string",
    content = content.replace(/"([^"]*)",\s*$/gm, '"$1",');
    
    // Fix specific patterns like "string"\s*$ -> "string"
    content = content.replace(/"([^"]*)"\s*$/gm, '"$1"');
    
    // Fix JSX attribute issues
    content = content.replace(/className="([^"]*)"\s*$/gm, 'className="$1"');
    content = content.replace(/href="([^"]*)"\s*$/gm, 'href="$1"');
    content = content.replace(/src="([^"]*)"\s*$/gm, 'src="$1"');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            traverse(fullPath);
          } else if (stat.isFile() && item.endsWith('.tsx')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be accessed
          console.warn(`Skipping ${fullPath}: ${error.message}`);
        }
      }
    } catch (error) {
      console.warn(`Cannot read directory ${currentDir}: ${error.message}`);
    }
  }
  
  traverse(dir);
  return files;
}

// Get all .tsx files
const tsxFiles = findTsxFiles(process.cwd());
let fixedCount = 0;

console.log(`Found ${tsxFiles.length} .tsx files to process...`);

for (const file of tsxFiles) {
  if (fixStringLiterals(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);