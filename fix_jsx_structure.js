<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX structure issues
    // Fix unclosed div tags that should be self-closing or properly closed
    content = content.replace(/<div className="[^"]*"><\/div>\s*<div className="[^"]*"><\/div>/g, (match) => {
      return match.replace(/<\/div>\s*<div/g, '><div');
    });
    
    // Fix unclosed section tags
    content = content.replace(/<section className="[^"]*"><\/section>\s*<div className="[^"]*"><\/div>/g, (match) => {
      return match.replace(/<\/section>\s*<div/g, '><div');
    });
    
    // Fix unclosed div tags in general
    content = content.replace(/<div className="[^"]*"><\/div>\s*<div className="[^"]*"><\/div>/g, (match) => {
      return match.replace(/<\/div>\s*<div/g, '><div');
    });
    
    // Fix specific patterns like <div></div> followed by content
    content = content.replace(/<div className="[^"]*"><\/div>\s*{/g, '<div className="[^"]*">{');
    
    // Fix unclosed JSX elements that should be self-closing
    content = content.replace(/<div className="[^"]*"><\/div>\s*<button/g, '<div className="[^"]*"><button');
    content = content.replace(/<div className="[^"]*"><\/div>\s*<h/g, '<div className="[^"]*"><h');
    content = content.replace(/<div className="[^"]*"><\/div>\s*<p/g, '<div className="[^"]*"><p');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX structure in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all .tsx files in app/components
const componentsDir = path.join(__dirname, 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  fixJSXStructure(filePath);
});

console.log('JSX structure fixes completed');
=======
import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;

// Function to fix JSX structure issues;
function fixJSXStructure(content) {// Fix the specific pattern where div has className="$2" and is self-closing;
  content = content.replace(/<div className="\$2" \  />/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">');

  // Fix the pattern where Helmet is self-closing;
  content = content.replace(/<Helmet \  />/g, '<Helmet>');

  // Fix the pattern where div has className="$2" and is self-closing (for, inner, div)
  content = content.replace(/<div className="\$2" \  />/g, '<div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center">');

  // Fix malformed className attributes with spaces;
  content = content.replace(/className="t e xt-4xl/g, 'className="text-4xl');
  content = content.replace(/className="t e xt-lg/g, 'className="text-lg');
  content = content.replace(/className="b g-g radient-to-r/g, 'className="bg-gradient-to-r');
  content = content.replace(/className="\$2"/g, 'className="w-5 h-5 ml-2"');

  // Fix missing closing tags for Helmet;
  content = content.replace(/<\/Helmet>/g, '</Helmet>');

  // Fix missing closing tags for divs;
  content = content.replace(/<\/div>/g, '</div>');

  // Fix the specific structure issue where we have: // <div></div>
  // <Helmet></Helmet>
  // ...
  // </Helmet>
  // <div></div>
  // ...
  // </div>
  // </div>
  // This should be:
  // <div></div>
  // <Helmet></Helmet>
  // ...
  // </Helmet>
  // <div></div>
  // ...
  // </div>
  // </div>
  return content;

// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXStructure(content);

    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed JSX structure: ${filePath}`);
      return true;
    return false;
  } catch (error) {console.error(`Error processing ${filePath}:`, error.message);
    return false;

// Function to recursively find and process TSX files;
function processDirectory(dirPath) {let processedCount = 0;

  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item, of, items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath);} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {if (processFile(fullPath)) {
          processedCount++;

  walkDir(dirPath);
  return processedCount;

// Main execution;
console.log('Starting JSX structure fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files.`);
>>>>>>> origin/main
