#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax issues
function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed JSX closing tags like "Our Services;</" -> "Our Services</h2>"
    content = content.replace(/(\w+);\s*<\/\s*$/gm, '$1</h2>');
    
    // Fix malformed JSX closing tags like "text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">\n            Comprehensive AI and IT solutions designed to transform your business operations;\n  </" -> proper closing
    content = content.replace(/([^>]+)>\s*([^<]+);\s*<\/\s*$/gm, '$1>$2</p>');
    
    // Fix any remaining malformed closing tags
    content = content.replace(/;\s*<\/\s*$/gm, '</p>');
    
    // Fix any remaining semicolons in JSX text content
    content = content.replace(/([^>]+)>\s*([^<]+);\s*<\/[^>]+>/gm, '$1>$2</$3>');
    
    // Fix any remaining standalone semicolons that shouldn't be there
    content = content.replace(/;\s*$/gm, '');
    
    // Fix any remaining malformed JSX
    content = content.replace(/<\s*$/gm, '');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix JSX syntax issues
function fixAllJsxSyntax(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.next') {
        continue;
      }
      fixedCount += fixAllJsxSyntax(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixJsxSyntax(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting JSX syntax fixes...');
const fixedCount = fixAllJsxSyntax('/workspace');
console.log(`Fixed JSX syntax in ${fixedCount} files.`);