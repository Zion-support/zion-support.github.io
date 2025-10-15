#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Starting comprehensive error fixing...');

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules') && !item.includes('dist')) {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix specific parsing errors
function fixParsingErrors(content) {
  // Fix unterminated string literals
  content = content.replace(/'([^']*?)\n/g, "'$1'\n");
  content = content.replace(/"([^"]*?)\n/g, "\"$1\"\n");
  
  // Fix missing closing parentheses
  content = content.replace(/\(([^)]*?)\n/g, "($1)\n");
  
  // Fix missing semicolons after imports
  content = content.replace(/(import[^;]+)(\n)/g, '$1;$2');
  
  // Fix JSX closing tags
  content = content.replace(/<HelmetProvider([^>]*)>/g, '<HelmetProvider$1></HelmetProvider>');
  content = content.replace(/<Helmet([^>]*)>/g, '<Helmet$1></Helmet>');
  
  // Fix missing closing braces
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;
  if (openBraces > closeBraces) {
    content += '\n' + '}'.repeat(openBraces - closeBraces);
  }
  
  // Fix missing closing parentheses
  const openParens = (content.match(/\(/g) || []).length;
  const closeParens = (content.match(/\)/g) || []).length;
  if (openParens > closeParens) {
    content += ')'.repeat(openParens - closeParens);
  }
  
  // Fix common syntax issues
  content = content.replace(/^import\s+{([^}]*?)}\s+from\s+['"]([^'"]*?)['"];?\s*$/gm, "import { $1 } from '$2';");
  
  // Fix missing React import
  if (content.includes('React') && !content.includes("import React")) {
    content = "import React from 'react';\n" + content;
  }
  
  // Fix missing closing tags in JSX
  content = content.replace(/<([A-Z][a-zA-Z0-9]*)([^>]*?)(?<!\/)>/g, (match, tagName, attributes) => {
    if (attributes.includes('/')) return match; // Self-closing tag
    return match.replace('>', `></${tagName}>`);
  });
  
  return content;
}

// Function to fix specific file issues
function fixFileIssues(filePath, content) {
  const fileName = path.basename(filePath);
  
  // Skip certain problematic files
  if (fileName.includes('backup') || fileName.includes('broken') || fileName.includes('disabled')) {
    return content;
  }
  
  // Fix parsing errors
  content = fixParsingErrors(content);
  
  // Ensure proper React component structure
  if (content.includes('export default') && !content.includes('React')) {
    content = "import React from 'react';\n" + content;
  }
  
  // Fix common import issues
  if (content.includes('import {') && !content.includes('from')) {
    content = content.replace(/import\s+{([^}]*?)}\s*$/gm, "import { $1 } from 'react';");
  }
  
  return content;
}

// Main execution
try {
  const files = findFiles('./app');
  console.log(`Found ${files.length} files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      content = fixFileIssues(filePath, content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        fixedCount++;
        console.log(`✅ Fixed: ${filePath}`);
      }
    } catch (error) {
      errorCount++;
      console.log(`❌ Error processing ${filePath}: ${error.message}`);
    }
  }
  
  console.log(`\n🎉 Fixing completed!`);
  console.log(`✅ Files fixed: ${fixedCount}`);
  console.log(`❌ Files with errors: ${errorCount}`);
  
} catch (error) {
  console.error('❌ Error during fixing process:', error.message);
  process.exit(1);
}