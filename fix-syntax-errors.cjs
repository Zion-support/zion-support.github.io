#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/import\s+[^;]+(?!;)\n/g, (match) => {
    if (!match.trim().endsWith(';')) {
      return match.trim() + ';\n';
    }
    return match;
  });
  
  // Fix object syntax issues - add missing commas
  fixed = fixed.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix missing commas in array elements
  fixed = fixed.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>\s*<Helmet>/g, '<>\n      <Helmet>');
  fixed = fixed.replace(/<\/Helmet>\s*<\/>/g, '</Helmet>\n    </>');
  
  // Fix missing closing tags for common elements
  const openTags = ['div', 'section', 'main', 'ul', 'li', 'button'];
  openTags.forEach(tag => {
    // This is a basic fix - more sophisticated parsing would be needed for complex cases
    const openTagRegex = new RegExp(`<${tag}[^>]*>(?!.*</${tag}>)`, 'g');
    // This is a placeholder - actual implementation would need proper parsing
  });
  
  // Remove duplicate code blocks (basic pattern matching)
  const duplicatePattern = /const\s+features\s*=\s*\[[\s\S]*?\];\s*const\s+features\s*=\s*\[[\s\S]*?\];/g;
  fixed = fixed.replace(duplicatePattern, (match) => {
    const parts = match.split('const features =');
    return 'const features =' + parts[1];
  });
  
  // Fix malformed object syntax in arrays
  fixed = fixed.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3: $4,\n      $5:');
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix specific patterns that appear in the errors
  fixed = fixed.replace(/(\w+)\s*\n\s*(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2: $3,\n    $4:');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
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
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };