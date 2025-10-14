#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix double quotes in import statements
  fixed = fixed.replace(/import\s+([^'"]+)\s+from\s+['"]([^'"]+)['"]''/g, 'import $1 from \'$2\'');
  fixed = fixed.replace(/import\s+([^'"]+)\s+from\s+['"]([^'"]+)['"]""/g, 'import $1 from "$2"');
  
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import\s+([^'"]+)\s+from\s+['"]([^'"]+);/g, 'import $1 from \'$2\';');
  
  // Fix malformed JSX - add missing opening tags
  fixed = fixed.replace(/<div className="([^"]*)"[^>]*><\/div>/g, '<div className="$1"></div>');
  
  // Fix broken JSX structure
  fixed = fixed.replace(/<div className="([^"]*)"[^>]*>\s*<\/div>\s*<([^>]+)><\/\2>/g, '<div className="$1">\n        <$2></$2>\n      </div>');
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/import\s+([^'"]+)\s+from\s+['"]([^'"]+)['"]\s*$/gm, 'import $1 from \'$2\';');
  
  // Fix 'use client' directive
  fixed = fixed.replace(/'use client;/g, '\'use client\';');
  fixed = fixed.replace(/'use client/g, '\'use client\';');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export default function\s+([^(]+)\([^)]*\)\s*{\s*return\s*\(\s*<div[^>]*><\/div>\s*\)\s*}/g, 
    'export default function $1() {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <div className="container mx-auto px-4 py-16">\n        <div className="text-center">\n          <h1 className="text-4xl font-bold text-white mb-8">$1</h1>\n          <p className="text-xl text-gray-300 mb-8">Coming soon...</p>\n        </div>\n      </div>\n    </div>\n  );\n}');
  
  // Fix broken JSX tags
  fixed = fixed.replace(/<([^>]+)><\/\1>/g, '<$1></$1>');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>\s*<h1([^>]*)>\s*([^<]+)\s*<\/h1>\s*<p([^>]*)>\s*([^<]+)\s*<\/p>\s*<\/div>/g, 
    '<div$1>\n        <h1$2>$3</h1>\n        <p$4>$5</p>\n      </div>');
  
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

// Main function
function main() {
  const patterns = [
    '**/*.tsx',
    '**/*.ts',
    '**/*.jsx',
    '**/*.js'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, {
      ignore: ['node_modules/**', 'dist/**', '.next/**', '**/*.d.ts']
    });
    
    files.forEach(file => {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };