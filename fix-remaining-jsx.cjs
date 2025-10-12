#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining JSX issues
function fixRemainingJSX(content) {
  // Fix missing Helmet import
  if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
    content = content.replace(
      /import React from 'react';/,
      "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
    );
  }
  
  // Fix self-closing div tags that should be opening/closing
  content = content.replace(
    /<div className="([^"]*)" \/>\s*<Helmet>/g,
    '<div className="$1">\n      <Helmet>'
  );
  
  // Fix Helmet self-closing tags
  content = content.replace(
    /<Helmet \/>\s*<title>([^<]*)<\/title>\s*<meta name="([^"]*)" content="([^"]*)" \/>\s*<\/Helmet>/g,
    '<Helmet>\n        <title>$1</title>\n        <meta name="$2" content="$3" />\n      </Helmet>'
  );
  
  // Fix Link self-closing tags
  content = content.replace(
    /<Link\s+([^>]*)\s*\/>\s*([^<]+)\s*<ArrowRight/g,
    '<Link\n          $1\n        >\n          $2\n          <ArrowRight'
  );
  
  // Fix missing closing tags for main div
  if (content.includes('<div className="min-h-screen') && !content.includes('</div>')) {
    content = content.replace(/(<div className="min-h-screen[^>]*>[\s\S]*?)(<\/div>\s*)$/m, '$1\n    </div>');
  }
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*<div/g, '<>\n      <div');
  content = content.replace(/<\/div>\s*<\/>/g, '</div>\n    </>');
  
  // Fix CSS class spacing issues
  const cssFixes = [
    { pattern: /hover:text-whitetransition-colors/g, replacement: 'hover:text-white transition-colors' },
    { pattern: /w-5h-5/g, replacement: 'w-5 h-5' },
    { pattern: /text-lgfont-semibold/g, replacement: 'text-lg font-semibold' },
    { pattern: /space-y-2/g, replacement: 'space-y-2' },
    { pattern: /text-gray-300 hover:text-whitetransition-colors/g, replacement: 'text-gray-300 hover:text-white transition-colors' }
  ];
  
  cssFixes.forEach(fix => {
    content = content.replace(fix.pattern, fix.replacement);
  });
  
  // Fix malformed key attributes
  content = content.replace(/key="\{([^}]+)\}"/g, 'key={$1}');
  content = content.replace(/to="\{([^}]+)\}"/g, 'to={$1}');
  
  // Fix malformed JSX expressions
  content = content.replace(/\{([^}]+)\}\s*<\/span>/g, '{$1}</span>');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix remaining JSX issues
    content = fixRemainingJSX(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining JSX: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'components/**/*.tsx',
  'components/**/*.ts',
  '*.tsx',
  '*.ts'
];

let totalFiles = 0;
let fixedFiles = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  
  files.forEach(file => {
    totalFiles++;
    if (processFile(file)) {
      fixedFiles++;
    }
  });
});

console.log(`\nProcessed ${totalFiles} files, fixed remaining JSX in ${fixedFiles} files.`);