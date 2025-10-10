#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix React.Fragment issues
function fixReactFragments(content) {
  let fixed = content;
  
  // Fix React.Fragment opening tags
  fixed = fixed.replace(/<React\.Fragment>/g, '<>');
  fixed = fixed.replace(/<\/React\.Fragment>/g, '</>');
  
  return fixed;
}

// Fix specific file patterns
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Apply React.Fragment fixes
  content = fixReactFragments(content);
  
  return content;
}

// Main function to process all TSX files
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern, { cwd: process.cwd() });
  
  console.log(`Found ${files.length} TSX files to process`);
  
  let fixedCount = 0;
  
  files.forEach(file => {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      const fixedContent = fixSpecificFile(file);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixReactFragments, fixSpecificFile };