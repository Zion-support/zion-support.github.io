#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix function declarations with commas
    const beforeFunction = content;
    content = content.replace(/export default function (\w+),\s*(\w+)\(\)/g, 'export default function $1()');
    if (content !== beforeFunction) modified = true;
    
    // Fix malformed JSX with missing parent elements
    const beforeJSX = content;
    // Fix cases where JSX elements are not properly wrapped
    content = content.replace(/(<div[^>]*>)\s*<div[^>]*>\s*<\/div><div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div><div[^>]*>\s*<\/div>\s*<h1/g, '$1\n      <div> </div><div> </div>\n      <div className="text-left"> </div><div className="text-left"> </div>\n      <h1');
    if (content !== beforeJSX) modified = true;
    
    // Fix missing commas in class names
    const beforeClass = content;
    content = content.replace(/max-w-3,\s*xl/g, 'max-w-3xl');
    if (content !== beforeClass) modified = true;
    
    // Fix malformed object properties
    const beforeObject = content;
    content = content.replace(/(\w+)(\w+)(\w+)(\w+)/g, '$1, $2, $3, $4');
    if (content !== beforeObject) modified = true;
    
    // Fix missing spaces in descriptions
    const beforeDesc = content;
    content = content.replace(/(\w+)(\w+)(\w+)(\w+)(\w+)/g, '$1 $2 $3 $4 $5');
    if (content !== beforeDesc) modified = true;
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all blog files
const blogDir = 'app/blog';
const files = [];

function getAllFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

getAllFiles(blogDir);

console.log(`Found ${files.length} blog files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);