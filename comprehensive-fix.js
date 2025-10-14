import fs from 'fs';
import path from 'path';

// Function to fix all common syntax errors in TSX/JSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix unterminated string literals and malformed quotes
    content = content.replace(/from "([^"]*);/g, 'from "$1";');
    content = content.replace(/from '([^']*);/g, "from '$1';");
    content = content.replace(/import { ([^}]*);/g, 'import { $1 };');
    content = content.replace(/import ([^;]*);/g, 'import $1;');
    
    // Fix malformed JSX attributes
    content = content.replace(/className=([^"'>\s]+)/g, 'className="$1"');
    content = content.replace(/name=([^"'>\s]+)/g, 'name="$1"');
    content = content.replace(/content=([^"'>\s]+)/g, 'content="$1"');
    content = content.replace(/path=([^"'>\s]+)/g, 'path="$1"');
    content = content.replace(/element=([^"'>\s]+)/g, 'element="$1"');
    
    // Fix malformed function parameters
    content = content.replace(/\(([^)]*)\?\s*:\s*([^)]*)\)/g, '($1?: $2)');
    content = content.replace(/properties\s*\?\s*:\s*/g, 'properties?: ');
    
    // Fix malformed template literals and strings
    content = content.replace(/`([^`]*);/g, '`$1`;');
    content = content.replace(/"([^"]*);/g, '"$1";');
    content = content.replace(/'([^']*);/g, "'$1';");
    
    // Fix malformed JSX closing tags
    content = content.replace(/<([^>]*)\s*>/g, (match, tag) => {
      if (tag.includes('=') && !tag.includes('"') && !tag.includes("'")) {
        return match; // Skip if it's a malformed tag
      }
      return match;
    });
    
    // Fix malformed export statements
    content = content.replace(/export default ([^;]*);/g, 'export default $1;');
    content = content.replace(/export\s+{([^}]*)}/g, 'export { $1 }');
    
    // Fix malformed React imports
    content = content.replace(/import React from "react;"/g, 'import React from "react";');
    content = content.replace(/import React from 'react;'/g, "import React from 'react';");
    
    // Fix malformed component declarations
    content = content.replace(/const\s+([A-Z][a-zA-Z]*)\s*=\s*\(\)\s*=>\s*\{/g, 'const $1 = () => {');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(/g, 'return (');
    
    // Fix malformed closing braces and parentheses
    content = content.replace(/\}\s*\)\s*;/g, '});');
    content = content.replace(/\}\s*;$/g, '}');
    
    // Clean up extra characters and malformed syntax
    content = content.replace(/\s+"/g, ' "');
    content = content.replace(/"\s+/g, '" ');
    content = content.replace(/\s+'/g, " '");
    content = content.replace(/'\s+/g, "' ");
    
    // Fix malformed JSX content
    content = content.replace(/>([^<]*)\s*</g, (match, text) => {
      if (text.trim() && !text.includes('=') && !text.includes('{')) {
        return `>${text.trim()}<`;
      }
      return match;
    });
    
    // Ensure proper line breaks
    content = content.replace(/\}\s*export/g, '}\n\nexport');
    content = content.replace(/\}\s*<\/div>/g, '}\n');
    
    // Fix specific patterns that are common in corrupted files
    content = content.replace(/PagePage/g, 'Page');
    content = content.replace(/const Page = \(\) => \{/g, 'const Page = () => {');
    
    // Write the fixed content back only if it changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TSX/JSX files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting comprehensive syntax fix...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files in app directory.`);

// Also fix any root level TSX files
const rootFiles = fs.readdirSync('.');
for (const file of rootFiles) {
  if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
    if (fixSyntaxErrors(file)) {
      console.log(`Fixed root file: ${file}`);
    }
  }
}

console.log('Comprehensive syntax fix completed!');