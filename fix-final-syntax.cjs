#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix final syntax issues
function fixFinalSyntax(content) {
  let fixed = content;
  
  // Fix stray semicolons and braces
  fixed = fixed.replace(/;\n\s*}\n/g, '\n');
  fixed = fixed.replace(/;\n\s*;\n/g, ';\n');
  fixed = fixed.replace(/;\n\s*;\n/g, ';\n');
  
  // Fix stray closing braces
  fixed = fixed.replace(/;\n\s*}\n/g, '\n');
  fixed = fixed.replace(/;\n\s*}\n/g, '\n');
  
  // Fix extra semicolons before function declarations
  fixed = fixed.replace(/;\n\s*export\s+default\s+function/g, '\nexport default function');
  fixed = fixed.replace(/;\n\s*export\s+function/g, '\nexport function');
  fixed = fixed.replace(/;\n\s*function\s+/g, '\nfunction ');
  
  // Fix extra semicolons before const/let/var
  fixed = fixed.replace(/;\n\s*const\s+/g, '\nconst ');
  fixed = fixed.replace(/;\n\s*let\s+/g, '\nlet ');
  fixed = fixed.replace(/;\n\s*var\s+/g, '\nvar ');
  
  // Fix extra semicolons before return
  fixed = fixed.replace(/;\n\s*return\s+/g, '\nreturn ');
  
  // Fix extra semicolons before JSX
  fixed = fixed.replace(/;\n\s*<\w+/g, '\n<');
  
  // Fix extra commas in function parameters
  fixed = fixed.replace(/,\n\s*\)/g, '\n)');
  
  // Fix extra commas in object literals
  fixed = fixed.replace(/,\n\s*}/g, '\n}');
  
  // Fix extra commas in arrays
  fixed = fixed.replace(/,\n\s*]/g, '\n]');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+[^=]+=\s*[^;]+$/gm, '$&;');
  
  // Fix missing semicolons after return statements
  fixed = fixed.replace(/return\s+[^;]+$/gm, '$&;');
  
  // Fix missing semicolons after function calls
  fixed = fixed.replace(/[^;]\n\s*export/g, '$&;\nexport');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixFinalSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final syntax: ${filePath}`);
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
console.log('Starting final syntax fixing...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with final syntax fixes.`);
console.log('Final syntax fixing completed!');