#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals in import statements
    content = content.replace(/import\s+([^'"]*)\s+from\s+'([^']*);/g, "import $1 from '$2';");
    content = content.replace(/import\s+([^'"]*)\s+from\s+"([^"]*);/g, 'import $1 from "$2";');
    
    // Fix unterminated string literals in general
    content = content.replace(/'([^']*);/g, "'$1';");
    content = content.replace(/"([^"]*);/g, '"$1";');
    
    // Fix double quotes
    content = content.replace(/''/g, "'");
    content = content.replace(/""/g, '"');
    
    // Fix specific patterns
    content = content.replace(/react-router-dom;/g, "react-router-dom';");
    content = content.replace(/lucide-react;/g, "lucide-react';");
    content = content.replace(/react-helmet-async;/g, "react-helmet-async';");
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript and JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
});

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);