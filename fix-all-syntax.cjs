#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix object literal syntax errors
function fixObjectLiterals(content) {
  // Fix missing opening braces in array objects - more comprehensive pattern
  // This regex looks for patterns like:
  // icon: SomeIcon,
  //   title: 'Some Title',
  //   description: 'Some description'
  // and wraps them in braces
  
  // First, let's fix the most common pattern
  content = content.replace(/(\s+)(icon:\s*[^,}]+,\s*title:\s*[^,}]+,\s*description:\s*[^,}]+(?:,\s*benefits:\s*\[[^\]]+\])?)\s*}/g, (match, indent, objContent) => {
    return `${indent}{\n${indent}  ${objContent}\n${indent}}`;
  });

  // Fix patterns that start with title
  content = content.replace(/(\s+)(title:\s*[^,}]+,\s*description:\s*[^,}]+(?:,\s*benefits:\s*\[[^\]]+\])?)\s*}/g, (match, indent, objContent) => {
    return `${indent}{\n${indent}  ${objContent}\n${indent}}`;
  });

  // Fix single property objects
  content = content.replace(/(\s+)(icon:\s*[^,}]+)\s*}/g, (match, indent, objContent) => {
    return `${indent}{\n${indent}  ${objContent}\n${indent}}`;
  });

  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixObjectLiterals(fixedContent);
    
    // Only write if content changed
    if (fixedContent !== content) {
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

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { fixObjectLiterals, processFile };