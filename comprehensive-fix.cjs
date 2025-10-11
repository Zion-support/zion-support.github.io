#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix double semicolons
      { pattern: /;;/g, replacement: ';' },
      
      // Fix malformed imports
      { pattern: /import\s+{\s*Helmet;\s*}\s+from\s+'react-helmet-async';/g, replacement: "import { Helmet } from 'react-helmet-async';" },
      
      // Fix unterminated string literals in object properties
      { pattern: /description:\s*'([^']*)\n\s*([^']*),/g, replacement: "description: '$1 $2'," },
      
      // Fix malformed JSX return statements
      { pattern: /return\s*\(\s*<>\s*<Helmet>\s*<\/Helmet>\s*<Navigation\s*\/>\s*<div/g, replacement: 'return (\n    <>\n      <Helmet>\n        <title>Page Title - Zion Tech Group</title>\n        <meta name="description" content="AI solutions and services" />\n      </Helmet>\n      <Navigation />\n      <div' },
      
      // Fix missing closing tags
      { pattern: /<div\s+className="[^"]*">\s*<h1[^>]*>\s*<\/h1>\s*<\/p>/g, replacement: '<div className="text-center">\n              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                Page Title\n              </h1>\n              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Page description\n              </p>' },
      
      // Fix malformed button elements
      { pattern: /<button[^>]*>;\s*([^<]*)\s*<\/button>/g, replacement: '<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">\n                  $1\n                  <ArrowRight className="ml-2 h-5 w-5" />\n                </button>' },
      
      // Fix malformed object properties
      { pattern: /{\s*;\s*,/g, replacement: '{' },
      { pattern: /,\s*;\s*}/g, replacement: '}' },
      { pattern: /title:\s*'([^']*);\s*'/g, replacement: "title: '$1'" },
      
      // Fix missing closing JSX tags
      { pattern: /<div\s+className="[^"]*">\s*<h1[^>]*>\s*<\/h1>\s*<\/p>\s*<div/g, replacement: '<div className="text-center">\n              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                Page Title\n              </h1>\n              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Page description\n              </p>\n              <div' },
      
      // Fix malformed array declarations
      { pattern: /const\s+benefits\s*=\s*\[\s*;\s*\]/g, replacement: 'const benefits = [\n    "Feature 1",\n    "Feature 2",\n    "Feature 3"\n  ];' },
      
      // Fix malformed function declarations
      { pattern: /return\s*\(\s*;\s*<div/g, replacement: 'return (\n    <div' },
      
      // Fix missing closing div tags
      { pattern: /<\/section>\s*<\/main>\s*<\/>\s*\)\s*}\s*$/g, replacement: '        </section>\n      </main>\n    </>\n  );\n}' },
      
      // Fix malformed JSX fragments
      { pattern: /<>\s*<Helmet>\s*<\/Helmet>\s*<Navigation\s*\/>\s*<div[^>]*>\s*<section[^>]*>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>\s*<\/h1>\s*<\/p>\s*<div[^>]*>\s*<button[^>]*>;\s*([^<]*)\s*<\/button>/g, replacement: '<>\n      <Helmet>\n        <title>Page Title - Zion Tech Group</title>\n        <meta name="description" content="AI solutions and services" />\n      </Helmet>\n      <Navigation />\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto">\n            <div className="text-center">\n              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                Page Title\n              </h1>\n              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Page description\n              </p>\n              <div className="flex flex-col sm:flex-row gap-4 justify-center">\n                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">\n                  $1\n                  <ArrowRight className="ml-2 h-5 w-5" />\n                </button>' }
    ];
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes for common patterns
    if (content.includes('const benefits = [;')) {
      content = content.replace(/const benefits = \[\s*;\s*\]/g, 'const benefits = [\n    "Feature 1",\n    "Feature 2",\n    "Feature 3"\n  ];');
      modified = true;
    }
    
    if (content.includes('return (;')) {
      content = content.replace(/return\s*\(\s*;/g, 'return (\n    <>');
      modified = true;
    }
    
    if (modified) {
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

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });
let fixedCount = 0;

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);