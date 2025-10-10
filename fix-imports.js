#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix import statements and JSX syntax
function fixImportsAndJSX(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed import statements
    const importFixes = [
      // Fix imports with commas in wrong places
      
      // Fix imports with extra commas
        const cleanImports = imports.replace(/,/g, '').trim();
        return `import { ${cleanImports} } from "${module}"`;
      
      // Fix JSX attributes with commas
      
      // Fix JSX elements with commas
      
      // Fix return statements with commas
      
      // Fix React.Fragment with commas
      
      // Fix JSX attributes with commas
      
      // Fix closing tags with commas
      
      // Fix self-closing tags with commas
    ];
    
    // Apply import fixes
    for (const fix of importFixes) {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
    
    // Fix specific patterns
    const specificFixes = [
      // Fix import statements
      
      // Fix JSX elements
      
      // Fix return statements
      
      // Fix React.Fragment
      
      // Fix JSX attributes
      
      // Fix closing tags
      
      // Fix self-closing tags
    ];
    
    // Apply specific fixes
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    
    return false;
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;


// Function to find React files
function findReactFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
        files.push(fullPath);
  
  traverse(dir);
  return files;


// Main execution
console.log('Starting import and JSX fix...');

const files = findReactFiles('/workspace');
console.log(`Found ${files.length} React files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixImportsAndJSX(file)) {
      fixedCount++;
      console.log(`Fixed: ${file}`);
    console.error(`Failed to fix ${file}:`, error.message);
    errorCount++;


console.log(`\nImport and JSX fix complete:`);
console.log(`- Files processed: ${files.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);