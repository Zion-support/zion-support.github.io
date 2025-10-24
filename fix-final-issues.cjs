#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix final issues
function fixFinalIssues(content) {
  let fixed = content;
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix stray export statements
  fixed = fixed.replace(/;\n\s*export;\n/g, '\n');
  fixed = fixed.replace(/;\n\s*export\s*$/gm, '\n');
  
  // Fix missing semicolons before export
  fixed = fixed.replace(/([^;])\n\s*export\s+const/g, '$1;\n\nexport const');
  fixed = fixed.replace(/([^;])\n\s*export\s+default/g, '$1;\n\nexport default');
  fixed = fixed.replace(/([^;])\n\s*export\s+function/g, '$1;\n\nexport function');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+[^=]+=\s*[^;]+$/gm, '$&;');
  
  // Fix missing semicolons after return statements
  fixed = fixed.replace(/return\s+[^;]+$/gm, '$&;');
  
  // Fix missing semicolons after function calls
  fixed = fixed.replace(/[^;]\n\s*export/g, '$&;\nexport');
  
  // Fix extra commas in function parameters
  fixed = fixed.replace(/,\n\s*\)/g, '\n)');
  
  // Fix extra commas in object literals
  fixed = fixed.replace(/,\n\s*}/g, '\n}');
  
  // Fix extra commas in arrays
  fixed = fixed.replace(/,\n\s*]/g, '\n]');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixFinalIssues(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final issues: ${filePath}`);
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
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (item === 'node_modules' || item === '.git') {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting final issues fixing...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with final fixes.`);
console.log('Final issues fixing completed!');