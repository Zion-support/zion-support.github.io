#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all files with JSX parsing errors
const findJSXErrorFiles = () => {
  try {
    const result = execSync('npm run lint 2>&1 | grep "Parsing error" | grep -o "/workspace/[^:]*" | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(f => f && f.length > 0);
  } catch (error) {
    return [];
  }
};

// Fix common JSX syntax errors
const fixJSXErrors = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    
    // Fix JSX fragments that need proper closing
    if (content.includes('return (') && !content.includes('return (')) {
      content = content.replace(/return \(\s*<div/g, 'return (\n    <>\n      <div');
      if (!content.includes('</>')) {
        content = content.replace(/(\s*\);\s*$)/m, '\n    </>\n  );');
      }
    }
    
    // Fix missing imports
    if (content.includes('React.FC') && !content.includes("import React")) {
      content = content.replace(/^/, "import React from 'react';\n");
      modified = true;
    }
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
    // Fix property assignment errors
    content = content.replace(/const\s+(\w+)\s*=\s*\{([^}]*)\}\s*$/gm, 'const $1 = {\n  $2\n};');
    
    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^,\n}]+)\s*\n(\s*[a-zA-Z])/g, '$1: $2,\n$3');
    
    // Fix JSX expressions that need one parent element
    content = content.replace(/return\s*\(\s*<([^>]+)>\s*<([^>]+)>/g, 'return (\n    <>\n      <$1>\n        <$2>');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX in ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  const errorFiles = findJSXErrorFiles();
  console.log(`Found ${errorFiles.length} files with JSX errors`);
  
  let fixedCount = 0;
  for (const filePath of errorFiles) {
    if (fixJSXErrors(filePath)) {
      fixedCount++;
      console.log(`Fixed JSX errors in: ${filePath}`);
    }
  }
  
  console.log(`Fixed JSX errors in ${fixedCount} files`);
};

main();