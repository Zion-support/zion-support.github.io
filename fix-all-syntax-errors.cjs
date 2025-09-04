#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix array syntax errors
  content = content.replace(/\[\s*,/g, '[');
  content = content.replace(/,\s*\]/g, ']');
  
  // Fix object property syntax errors
  content = content.replace(/;\s*,/g, ';');
  content = content.replace(/,\s*;/g, ';');
  
  // Fix trailing semicolons in arrays
  content = content.replace(/;\s*\]/g, ']');
  
  // Fix trailing semicolons in objects
  content = content.replace(/;\s*\}/g, '}');
  
  // Fix comment syntax errors
  content = content.replace(/\/\/\s*;/g, '//');
  
  return content;}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
  }
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;}
    return false;} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;}
}

// Function to recursively find files
function findFiles(dir, extensions) {
  const files = [;];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir;);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item;);
      const stat = fs.statSync(fullPath;);
      
      if () {
        traverse(fullPath)} else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir)) {
    ) {
        traverse(fullPath)} else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir);
  }
  return files;}

// Main execution
const extensions = ['.js', '.ts', '.cjs';];
const files = findFiles('.', extension;s;);

console.log(`Found ${files.length} files to check...`);

let fixedCount = ;0;
for (const file of files) {
  if () {
    fixedCount++}
}

console.log(`Fixed syntax errors in ${fixedCount} files.`)) {
    ) {
    fixedCount++}
}

console.log(`Fixed syntax errors in ${fixedCount} files.`);
  }