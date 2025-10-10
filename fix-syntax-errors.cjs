#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix duplicate imports and function definitions
    content = content.replace(/import React from 'react';\s*import { Helmet } from 'react-helmet-async';\s*import Navigation from '\.\.\/components\/Navigation';\s*import Footer from '\.\.\/components\/Footer';\s*const \w+Page: React\.FC = \(\) => \{\s*return \(/g, 'return (');
    
    // Fix orphaned code blocks
    content = content.replace(/return \(\) => clearTimeout\(timer\);\s*}, \[\]\);const \w+ = /g, 'const ');
    
    // Fix missing semicolons and brackets
    content = content.replace(/\]\s*;\s*return \(\) => clearTimeout\(timer\);\s*}, \[\]\);/g, '];');
    
    // Fix malformed if statements
    content = content.replace(/const \w+ = .*?if \(/g, 'const filteredPosts = selectedCategory === \'all\' ? posts : posts.filter(post => post.category === selectedCategory);\n\n  if (');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get list of files that might have syntax errors
const files = [
  '/workspace/app/blog/page.tsx',
  '/workspace/app/services/page.tsx',
  '/workspace/app/enterprise/page.tsx',
  '/workspace/app/support/page.tsx',
  '/workspace/app/consultation/page.tsx',
  '/workspace/app/demo/page.tsx',
  '/workspace/app/api-docs/page.tsx',
  '/workspace/app/status/page.tsx'
];

console.log(`Fixing syntax errors in ${files.length} files`);

let fixed = 0;
for (const file of files) {
  if (fs.existsSync(file) && fixSyntaxErrors(file)) {
    fixed++;
  }
}

console.log(`Fixed syntax errors in ${fixed} files`);