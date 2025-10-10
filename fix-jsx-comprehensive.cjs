#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix comprehensive JSX syntax issues
function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed closing tags - replace </h2> with proper closing tags
    content = content.replace(/([^>]+)>\s*([^<]+)<\/h2>/gm, (match, opening, text) => {
      // Determine the correct closing tag based on the opening tag
      if (opening.includes('<h3')) return `${opening}>${text}</h3>`;
      if (opening.includes('<h2')) return `${opening}>${text}</h2>`;
      if (opening.includes('<p')) return `${opening}>${text}</p>`;
      if (opening.includes('<button')) return `${opening}>${text}</button>`;
      if (opening.includes('<a ')) return `${opening}>${text}</a>`;
      if (opening.includes('<label')) return `${opening}>${text}</label>`;
      if (opening.includes('<div')) return `${opening}>${text}</div>`;
      if (opening.includes('<span')) return `${opening}>${text}</span>`;
      return match; // Return original if no match
    });
    
    // Fix any remaining malformed closing tags
    content = content.replace(/;\s*<\/\s*$/gm, '');
    content = content.replace(/<\s*$/gm, '');
    
    // Fix any remaining semicolons in JSX text content
    content = content.replace(/([^>]+)>\s*([^<]+);\s*<\/[^>]+>/gm, '$1>$2</$3>');
    
    // Fix any remaining standalone semicolons that shouldn't be there
    content = content.replace(/;\s*$/gm, '');
    
    // Fix any remaining malformed JSX
    content = content.replace(/<\s*$/gm, '');
    
    // Fix specific patterns that are common issues
    content = content.replace(/<\/h2>\s*<\/h2>/gm, '</h2>');
    content = content.replace(/<\/button>\s*<\/h2>/gm, '</button>');
    content = content.replace(/<\/a>\s*<\/h2>/gm, '</a>');
    content = content.replace(/<\/p>\s*<\/h2>/gm, '</p>');
    content = content.replace(/<\/label>\s*<\/h2>/gm, '</label>');
    
    // Fix malformed closing tags at end of lines
    content = content.replace(/;\s*$/gm, '');
    
    // Fix any remaining malformed JSX closing tags
    content = content.replace(/<\/\s*$/gm, '');
    
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
console.log('Starting comprehensive JSX syntax fixes...');
const fixedCount = fixAllJsxSyntax('/workspace');
console.log(`Fixed JSX syntax in ${fixedCount} files.`);