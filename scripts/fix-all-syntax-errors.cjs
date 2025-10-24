#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all syntax errors and import issues...\n');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate import statements
    content = content.replace(/import React, {[^}]+} from 'react'; from 'react';/g, "import React, { useState, useEffect } from 'react';");
    content = content.replace(/import React from 'react'; from 'react';/g, "import React from 'react';");
    
    // Fix broken import statements
    content = content.replace(/^ from 'react';$/gm, "import React from 'react';");
    content = content.replace(/^ from 'lucide-react';$/gm, "import { } from 'lucide-react';");
    
    // Fix malformed import statements
    content = content.replace(/import React, {[^}]+} from 'react'; from 'react';/g, "import React, { useState, useEffect } from 'react';");
    
    // Remove empty lines at the beginning
    content = content.replace(/^\s*\n/, '');
    
    // Fix duplicate from statements
    content = content.replace(/from 'react'; from 'react';/g, "from 'react';");
    content = content.replace(/from 'lucide-react'; from 'lucide-react';/g, "from 'lucide-react';");
    
    // Fix malformed object literals
    content = content.replace(/ttfb: nullryUsage: null/g, 'ttfb: null,\n    memoryUsage: null');
    content = content.replace(/...prevryUsage:/g, '...prev,\n          memoryUsage:');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+): null(\w+): null/g, '$1: null,\n    $2: null');
    
    // Remove duplicate semicolons
    content = content.replace(/;;/g, ';');
    
    // Fix missing React import for JSX
    if (content.includes('<') && content.includes('>') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
try {
  const appDir = path.join(__dirname, '..', 'app');
  const files = findTsxFiles(appDir);
  
  console.log(`📁 Found ${files.length} TypeScript files to process...\n`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixedCount} files successfully!`);
  console.log('\n✨ Syntax fixes completed!');
  
} catch (error) {
  console.error('❌ Error during syntax fixes:', error.message);
  process.exit(1);
}