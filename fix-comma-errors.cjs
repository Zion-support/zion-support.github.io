#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix comma errors in TSX files
function fixCommaErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing comma after array elements before closing bracket
    const arrayCommaFixRegex = /(\]\s*)\s*(\n\s*\];)/g;
    if (arrayCommaFixRegex.test(content)) {
      content = content.replace(arrayCommaFixRegex, '$1$2');
      modified = true;
    }

    // Fix missing comma after object properties before closing bracket
    const objectCommaFixRegex = /(\}\s*)\s*(\n\s*\];)/g;
    if (objectCommaFixRegex.test(content)) {
      content = content.replace(objectCommaFixRegex, '$1,$2');
      modified = true;
    }

    // Fix missing comma after array elements before closing object
    const arrayObjectCommaFixRegex = /(\]\s*)\s*(\n\s*\})/g;
    if (arrayObjectCommaFixRegex.test(content)) {
      content = content.replace(arrayObjectCommaFixRegex, '$1,$2');
      modified = true;
    }

    // Fix missing comma after object properties before closing object
    const objectObjectCommaFixRegex = /(\}\s*)\s*(\n\s*\})/g;
    if (objectObjectCommaFixRegex.test(content)) {
      content = content.replace(objectObjectCommaFixRegex, '$1,$2');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed comma errors in: ${filePath}`);
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
console.log('Fixing comma errors in TSX files...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixCommaErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed comma errors in ${fixedCount} files.`);