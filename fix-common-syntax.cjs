#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix common syntax errors
function fixCommonSyntax(content) {
  let fixed = content;
  
  // Fix missing semicolons after function declarations
  fixed = fixed.replace(/(\s+\)\s*$)/gm, '$1;');
  
  // Fix missing semicolons after export statements
  fixed = fixed.replace(/(export default \w+)(\s*$)/gm, '$1;');
  
  // Fix missing semicolons after const declarations
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*\]\s*$)/gm, '$1$2;');
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/(\s+description:\s*'[^']+',\s*benefits:\s*\[[^\]]+\])\s*(\n\s*})/g, '$1,$2');
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})/g, '$1,$2');
  
  // Fix missing commas in array elements
  fixed = fixed.replace(/(\s+description:\s*'[^']+',\s*benefits:\s*\[[^\]]+\])\s*(\n\s*}\s*\]\s*;)/g, '$1,$2');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\s+title:\s*'[^']+',\s*description:\s*'[^']+',\s*benefits:\s*\[[^\]]+\])\s*(\n\s*})/g, '$1,$2');
  
  // Fix missing commas in array declarations
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*\]\s*$)/gm, '$1$2;');
  
  // Fix missing commas in object literals within arrays
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*}\s*\]\s*;)/g, '$1,$2');
  
  // Fix missing semicolons after const declarations
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*\]\s*$)/gm, '$1$2;');
  
  // Fix specific patterns that are causing parsing errors
  fixed = fixed.replace(/(\s+description:\s*'[^']+',\s*benefits:\s*\[[^\]]+\])\s*(\n\s*}\s*\]\s*;)/g, '$1,$2');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\s+title:\s*'[^']+',\s*description:\s*'[^']+',\s*benefits:\s*\[[^\]]+\])\s*(\n\s*})/g, '$1,$2');
  
  // Fix missing commas in array declarations
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*\]\s*$)/gm, '$1$2;');
  
  // Fix missing commas in object literals within arrays
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*}\s*\]\s*;)/g, '$1,$2');
  
  // Fix missing semicolons after const declarations
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*\]\s*$)/gm, '$1$2;');
  
  return fixed;
}

// Fix specific file patterns
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Apply syntax fixes
  content = fixCommonSyntax(content);
  
  // File-specific fixes
  if (filePath.includes('ai-agricultural-intelligence-pro')) {
    // Fix the specific structure issues in this file
    content = content.replace(
      /description:\s*'Optimize your business growth with data-driven strategies\.',\s*benefits:\s*\[[^\]]+\]/g,
      "description: 'Optimize your business growth with data-driven strategies.',\n      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']"
    );
  }
  
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

module.exports = { fixCommonSyntax, fixSpecificFile };