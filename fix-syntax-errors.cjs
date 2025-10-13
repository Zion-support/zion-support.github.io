#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Fix import statements
  content = content.replace(/import[^;]+from[^;]+}\s*$/gm, (match) => {
    return match.replace(/\}\s*$/, ';');
  });
  
  // Fix export statements
  content = content.replace(/export[^;]+}\s*$/gm, (match) => {
    return match.replace(/\}\s*$/, ';');
  });
  
  // Fix function declarations
  content = content.replace(/function\s+[^{]+{\s*}\s*$/gm, (match) => {
    return match.replace(/\s*}\s*$/, ' {}');
  });
  
  // Fix arrow functions
  content = content.replace(/=>\s*{\s*}\s*$/gm, ' => {}');
  
  // Fix JSX closing tags
  content = content.replace(/>\s*}/g, '>}');
  content = content.replace(/>\s*\)/g, '>)');
  
  // Fix object properties
  content = content.replace(/:\s*[^,}]+}\s*$/gm, (match) => {
    return match.replace(/\}\s*$/, ';');
  });
  
  // Fix array declarations
  content = content.replace(/\[\s*\]\s*$/gm, '[];');
  
  // Fix variable declarations
  content = content.replace(/(const|let|var)\s+[^=]+=\s*[^;]+}\s*$/gm, (match) => {
    return match.replace(/\}\s*$/, ';');
  });
  
  // Remove extra whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
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

// Function to recursively find TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Fixing syntax errors...');

const sourceFiles = findSourceFiles('.');
console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
for (const file of sourceFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Syntax error fixing complete!');