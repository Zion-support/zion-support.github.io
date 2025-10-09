#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors in TSX files
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix extra closing braces after array elements (more comprehensive)
    const arrayFixRegex = /(\]\s*)\}\s*(\n\s*[}\]])/g;
    if (arrayFixRegex.test(content)) {
      content = content.replace(arrayFixRegex, '$1$2');
      modified = true;
    }

    // Fix extra closing braces before closing array brackets
    const arrayBracketFixRegex = /(\]\s*)\}\s*(\n\s*\])/g;
    if (arrayBracketFixRegex.test(content)) {
      content = content.replace(arrayBracketFixRegex, '$1$2');
      modified = true;
    }

    // Fix extra closing braces before closing object brackets
    const objectBracketFixRegex = /(\]\s*)\}\s*(\n\s*\})/g;
    if (objectBracketFixRegex.test(content)) {
      content = content.replace(objectBracketFixRegex, '$1$2');
      modified = true;
    }

    // Fix missing semicolons after closing braces
    const semicolonFixRegex = /(\})\s*(\n\s*export)/g;
    if (semicolonFixRegex.test(content)) {
      content = content.replace(semicolonFixRegex, '$1;\n$2');
      modified = true;
    }

    // Fix missing semicolons after function declarations
    const functionSemicolonRegex = /(\})\s*(\n\s*const)/g;
    if (functionSemicolonRegex.test(content)) {
      content = content.replace(functionSemicolonRegex, '$1;\n$2');
      modified = true;
    }

    // Fix missing semicolons after variable declarations
    const variableSemicolonRegex = /(\]\s*)\s*(\n\s*const)/g;
    if (variableSemicolonRegex.test(content)) {
      content = content.replace(variableSemicolonRegex, '$1;\n$2');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TSX files in the app directory
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Fixing remaining syntax errors in TSX files...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixRemainingErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed remaining errors in ${fixedCount} files.`);