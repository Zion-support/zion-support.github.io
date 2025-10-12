#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  // Fix missing Helmet import
  if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
    content = content.replace(
      /import React from 'react';/,
      "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
    );
  }
  
  // Fix duplicate Link imports
  content = content.replace(
    /import { Link } from 'react-router-dom';\nimport Link from 'react-router-dom';/g,
    "import { Link } from 'react-router-dom';"
  );
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>/g, 'const $1: React.FC = () =>');
  
  // Fix missing spaces in variable declarations
  content = content.replace(/const\s+(\w+)=/g, 'const $1 = ');
  content = content.replace(/const\s+(\w+)\[=/g, 'const $1 = [');
  
  // Fix malformed JSX - convert self-closing tags to proper opening/closing tags
  const jsxFixes = [
    // Fix footer structure
    {
      pattern: /<footer className="([^"]*)" \/>\s*<div className="([^"]*)" \/>/g,
      replacement: '<footer className="$1">\n      <div className="$2">'
    },
    {
      pattern: /<div className="([^"]*)" \/>\s*<div className="([^"]*)" \/>/g,
      replacement: '<div className="$1">\n        <div className="$2">'
    },
    {
      pattern: /<div className="([^"]*)" \/>\s*<div className="([^"]*)" \/>\s*<div className="([^"]*)" \/>/g,
      replacement: '<div className="$1">\n          <div className="$2">\n            <div className="$3">'
    },
    // Fix Helmet structure
    {
      pattern: /<Helmet \/>\s*<title>([^<]*)<\/title>\s*<meta name="([^"]*)" content="([^"]*)" \/>\s*<\/Helmet>/g,
      replacement: '<Helmet>\n        <title>$1</title>\n        <meta name="$2" content="$3" />\n      </Helmet>'
    },
    // Fix main div structure
    {
      pattern: /<div className="([^"]*)" \/>\s*<Helmet>/g,
      replacement: '<div className="$1">\n      <Helmet>'
    },
    // Fix Link structure
    {
      pattern: /<Link\s+([^>]*)\s*\/>\s*([^<]+)\s*<ArrowRight/g,
      replacement: '<Link\n          $1\n        >\n          $2\n          <ArrowRight'
    },
    // Fix closing tags
    {
      pattern: /<\/Helmet>\s*<div className="([^"]*)" \/>/g,
      replacement: '</Helmet>\n      <div className="$1">'
    }
  ];
  
  jsxFixes.forEach(fix => {
    content = content.replace(fix.pattern, fix.replacement);
  });
  
  // Fix CSS class spacing issues
  const cssFixes = [
    { pattern: /px-4py-12/g, replacement: 'px-4 py-12' },
    { pattern: /grid-cols-1md:grid-cols-2lg:grid-cols-5gap-8/g, replacement: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8' },
    { pattern: /lg:col-span-2/g, replacement: 'lg:col-span-2' },
    { pattern: /flex items-center space-x-2 mb-4/g, replacement: 'flex items-center space-x-2 mb-4' },
    { pattern: /w-10h-10bg-gradient-to-rfrom-blue-600 to-purple-600/g, replacement: 'w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600' },
    { pattern: /text-whitefont-bold text-xl/g, replacement: 'text-white font-bold text-xl' },
    { pattern: /text-xlfont-bold/g, replacement: 'text-xl font-bold' },
    { pattern: /flex space-x-4/g, replacement: 'flex space-x-4' },
    { pattern: /bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900/g, replacement: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' },
    { pattern: /max-w-7xl mx-auto px-4sm:px-6lg:px-8py-16text-center/g, replacement: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center' },
    { pattern: /text-4xlfont-bold text-whitemb-6/g, replacement: 'text-4xl font-bold text-white mb-6' },
    { pattern: /text-lgtext-gray-300/g, replacement: 'text-lg text-gray-300' },
    { pattern: /bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8py-4rounded-lg/g, replacement: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg' },
    { pattern: /w-5h-5ml-2/g, replacement: 'w-5 h-5 ml-2' }
  ];
  
  cssFixes.forEach(fix => {
    content = content.replace(fix.pattern, fix.replacement);
  });
  
  // Ensure proper closing tags
  if (content.includes('<footer className=') && !content.includes('</footer>')) {
    content = content.replace(/(<footer[^>]*>[\s\S]*?)(<\/div>\s*)$/m, '$1\n    </div>\n  </footer>');
  }
  
  if (content.includes('<div className="min-h-screen') && !content.includes('</div>')) {
    content = content.replace(/(<div className="min-h-screen[^>]*>[\s\S]*?)(<\/div>\s*)$/m, '$1\n    </div>');
  }
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix JSX structure
    content = fixJSXStructure(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed structure: ${filePath}`);
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

console.log(`\nProcessed ${totalFiles} files, fixed structure in ${fixedFiles} files.`);