#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix escaped quotes in import statements
  fixed = fixed.replace(/import\s+([^'"]*)\s+from\s+\\'([^']*)\\'/g, "import $1 from '$2'");
  fixed = fixed.replace(/import\s+([^'"]*)\s+from\s+\\"([^"]*)\\"/g, 'import $1 from "$2"');
  
  // Fix missing spaces in className attributes
  fixed = fixed.replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, (match, before, lower, upper, after) => {
    return `className="${before}${lower} ${upper}${after}"`;
  });
  
  // Fix specific patterns like "to-slate-900pt-20" -> "to-slate-900 pt-20"
  fixed = fixed.replace(/([a-z0-9-]+)([a-z])([A-Z])([a-z0-9-]+)/g, '$1$2 $3$4');
  
  // Fix border-tborder -> border-t border
  fixed = fixed.replace(/border-tborder/g, 'border-t border');
  
  // Fix col-span-1md:col-span-2 -> col-span-1 md:col-span-2
  fixed = fixed.replace(/col-span-1md:/g, 'col-span-1 md:');
  
  // Fix grid-cols-1md:grid-cols-4gap-8 -> grid-cols-1 md:grid-cols-4 gap-8
  fixed = fixed.replace(/grid-cols-1md:grid-cols-4gap-8/g, 'grid-cols-1 md:grid-cols-4 gap-8');
  
  // Fix px-4sm:px-6lg:px-8py-12 -> px-4 sm:px-6 lg:px-8 py-12
  fixed = fixed.replace(/px-4sm:px-6lg:px-8py-12/g, 'px-4 sm:px-6 lg:px-8 py-12');
  
  // Fix max-w-7xl mx-auto px-4sm:px-6lg:px-8py-12 -> max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12
  fixed = fixed.replace(/max-w-7xl mx-auto px-4sm:px-6lg:px-8py-12/g, 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12');
  
  // Fix JSX syntax issues - missing opening tags
  fixed = fixed.replace(/<div className="([^"]*)" \/>\s*<Helmet \/>/g, '<div className="$1">\n      <Helmet>');
  fixed = fixed.replace(/<footer className="([^"]*)" \/>\s*<div className="([^"]*)" \/>/g, '<footer className="$1">\n      <div className="$2">');
  
  // Fix self-closing tags that should be opening tags
  fixed = fixed.replace(/<ErrorBoundary \/>\s*<HelmetProvider \/>\s*<BrowserRouter \/>/g, 
    '<ErrorBoundary>\n      <HelmetProvider>\n        <BrowserRouter>');
  
  // Fix missing spaces in various patterns
  fixed = fixed.replace(/([a-z0-9-])([A-Z][a-z])/g, '$1 $2');
  
  // Fix specific JSX patterns
  fixed = fixed.replace(/<LoadingSpinner \/ \/>/g, '<LoadingSpinner />');
  
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
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript/TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  let totalProcessed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      totalProcessed++;
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalProcessed} files`);
  console.log(`Fixed ${totalFixed} files`);
  console.log('Syntax error fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };