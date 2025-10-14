#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to clean merge conflict markers
function cleanMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Clean up any remaining conflict markers
  content = content.replace(/^<<<<<<< HEAD$/gm, '');
  content = content.replace(/^=======$/gm, '');
  content = content.replace(/^>>>>>>> [^\n]+$/gm, '');
  
  return content;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated string literals
  content = content.replace(/import\s+React\s+from\s+'react';'[^']*$/gm, "import React from 'react';");
  content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+'[^']*$/gm, "import { $1 } from 'lucide-react';");
  
  // Fix extra quotes and semicolons
  content = content.replace(/';'$/gm, "';");
  content = content.replace(/';$/gm, "';");
  content = content.replace(/';$/gm, "';");
  
  // Fix JSX syntax
  content = content.replace(/<div className="App">;$/gm, '<div className="App">');
  content = content.replace(/<h1>Test App<\/h1>;$/gm, '<h1>Test App</h1>');
  content = content.replace(/<\/div>;$/gm, '</div>');
  
  // Fix missing closing parentheses
  content = content.replace(/return\s*\(\s*<div[^>]*>;$/gm, (match) => {
    return match.replace(';', '');
  });
  
  // Fix unterminated strings in JSX
  content = content.replace(/className="([^"]*)$/gm, (match, p1) => {
    if (!p1.endsWith('"')) {
      return `className="${p1}"`;
    }
    return match;
  });
  
  return content;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    content = cleanMergeConflicts(content);
    content = fixSyntaxErrors(content);
    
    // Additional specific fixes
    if (filePath.includes('App.tsx')) {
      // Clean up App.tsx specifically
      content = content.replace(/import React, { Suspense, lazy } from 'react';\s*<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, 
        "import React, { Suspense } from 'react';");
      content = content.replace(/import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';\s*import { HelmetProvider } from 'react-helmet-async';\s*<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g,
        "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';\nimport { HelmetProvider } from 'react-helmet-async';");
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const patterns = [
    '**/*.tsx',
    '**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        'app-broken/**',
        'app-disabled/**',
        '**/*.test.*',
        '**/*.spec.*'
      ]
    });
    
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nFixed ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, cleanMergeConflicts, fixSyntaxErrors };