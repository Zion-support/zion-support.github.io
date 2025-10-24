#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix missing semicolons in import statements;
function fixMissingSemicolons(content) {
  let fixed = content;

  // Fix import statements missing semicolons;
  fixed = fixed.replace(/import\s+([^;]+)\s+export\s+default/g, 'import $1;\nexport default');
  fixed = fixed.replace(/import\s+([^;]+)\s+const\s+/g, 'import $1;\nconst ');
  fixed = fixed.replace(/import\s+([^;]+)\s+function\s+/g, 'import $1;\nfunction ');
  fixed = fixed.replace(/import\s+([^;]+)\s+export\s+/g, 'import $1;\nexport ');
  
  // Fix specific pattern: import Head from 'next/head';
export default
  fixed = fixed.replace(/import\s+Head\s+from\s+'next\/head'\s+export\s+default/g, "import Head from 'next/head';\nexport default");
  
  // Fix other import patterns;
  fixed = fixed.replace(/import\s+React\s+from\s+'react'\s+export\s+default/g, "import React from 'react';\nexport default");
  fixed = fixed.replace(/import\s+React\s+from\s+'react'\s+const\s+/g, "import React from 'react';\nconst ");
  fixed = fixed.replace(/import\s+React\s+from\s+'react'\s+function\s+/g, "import React from 'react';\nfunction ");
  
  // Fix import statements with missing semicolons at end of line;
  fixed = fixed.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
  
  // Fix import statements with missing semicolons before other statements;
  fixed = fixed.replace(/import\s+([^;]+)\s*\n\s*export/g, 'import $1;\nexport');
  fixed = fixed.replace(/import\s+([^;]+)\s*\n\s*const/g, 'import $1;\nconst');
  fixed = fixed.replace(/import\s+([^;]+)\s*\n\s*function/g, 'import $1;\nfunction');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixMissingSemicolons(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
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
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories
        if (item !== 'node_modules' && item !== '.git' && item !== '.next') {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting missing semicolon fixes...');
const totalFixed = processDirectory('/workspace');
console.log(`Fixed ${totalFixed} files`);