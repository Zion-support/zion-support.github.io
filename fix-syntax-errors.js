#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix malformed import statements with concatenated strings
  fixed = fixed.replace(/import\s+React\s+from\s+"react";"import\s+{([^}]+)}\s+from\s+"([^"]+)";"/g, 
    'import React from "react";
import { $1 } from "$2";');
  
  // Fix missing quotes in import statements
  fixed = fixed.replace(/from\s+'([^']*);'/g, "from '$1';");
  fixed = fixed.replace(/from\s+"([^"]*);"/g, 'from "$1";');
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/from\s+['"]([^'"]+)['"]\s*([^;])/g, 'from "$1";
$2');
  
  // Fix malformed React imports
  fixed = fixed.replace(/import\s+React\s+from\s+'react;'const/g, "import React from 'react';

const");
  fixed = fixed.replace(/import\s+React\s+from\s+"react;"const/g, 'import React from "react";

const');
  
  // Fix missing quotes in JSX attributes
  fixed = fixed.replace(/className=\s*{([^}]+)}/g, 'className="$1"');
  
  // Fix missing semicolons in variable declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{/g, 'const $1 = () => {
');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\(\)\s*{\s*return\s+null;\s*}/g, 
    'export default function $1() {
  return null;
}');
  
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  let filesProcessed = 0;
  let filesFixed = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        filesProcessed++;
        if (processFile(fullPath)) {
          filesFixed++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return { filesProcessed, filesFixed };
}

// Main execution
console.log('Starting syntax error fixes...');
const { filesProcessed, filesFixed } = processDirectory('./app');
console.log(`
Completed! Processed ${filesProcessed} files, fixed ${filesFixed} files.`);
