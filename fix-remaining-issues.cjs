#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common issues in files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing imports
    if (content.includes('ErrorBoundary') && !content.includes("import ErrorBoundary")) {
      content = "import ErrorBoundary from '../components/ErrorBoundary';\n" + content;
      modified = true;
    }

    if (content.includes('Navigation') && !content.includes("import Navigation")) {
      content = "import Navigation from '../components/Navigation';\n" + content;
      modified = true;
    }

    if (content.includes('ReactNode') && !content.includes("import { ReactNode }")) {
      content = content.replace(
        "import React from 'react';",
        "import React, { ReactNode } from 'react';"
      );
      modified = true;
    }

    if (content.includes('ErrorInfo') && !content.includes("import { ErrorInfo }")) {
      content = content.replace(
        "import React from 'react';",
        "import React, { ErrorInfo } from 'react';"
      );
      modified = true;
    }

    // Fix missing React imports
    if (content.includes('React.FC') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix console.log warnings by removing them
    content = content.replace(/console\.log\([^)]*\);?\s*/g, '');
    content = content.replace(/console\.error\([^)]*\);?\s*/g, '');
    content = content.replace(/console\.warn\([^)]*\);?\s*/g, '');

    // Fix duplicate interface declarations
    content = content.replace(/interface\s+(\w+)\s*\{[^}]*\}\s*interface\s+\1\s*\{/g, 'interface $1 {');

    // Fix missing closing tags
    content = content.replace(/<div[^>]*>(?!.*<\/div>)/g, (match) => {
      if (!content.includes('</div>')) {
        return match + '</div>';
      }
      return match;
    });

    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*/g, '');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      fixFile(fullPath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting to fix remaining issues...');
fixDirectory('./app');
console.log('Finished fixing issues.');