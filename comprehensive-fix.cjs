#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix comprehensive syntax errors
function fixComprehensiveErrors(content) {
  let fixed = content;
  
  // Fix spaces in import statements
  fixed = fixed.replace(/import\s+([^'"]*)\s+from\s+'([^']*)'/g, (match, imports, from) => {
    // Fix spaces in import names
    const cleanImports = imports.replace(/\s+/g, '');
    return `import ${cleanImports} from '${from}'`;
  });
  
  // Fix spaces in JSX component names
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*\s+[A-Z][a-zA-Z0-9]*)\s*([^>]*)>/g, (match, componentName, attributes) => {
    const cleanName = componentName.replace(/\s+/g, '');
    return `<${cleanName}${attributes}>`;
  });
  
  // Fix spaces in function names
  fixed = fixed.replace(/function\s+([A-Z][a-zA-Z0-9]*\s+[A-Z][a-zA-Z0-9]*)\s*\(/g, (match, funcName) => {
    const cleanName = funcName.replace(/\s+/g, '');
    return `function ${cleanName}(`;
  });
  
  // Fix spaces in export default function names
  fixed = fixed.replace(/export\s+default\s+function\s+([A-Z][a-zA-Z0-9]*\s+[A-Z][a-zA-Z0-9]*)\s*\(/g, (match, funcName) => {
    const cleanName = funcName.replace(/\s+/g, '');
    return `export default function ${cleanName}(`;
  });
  
  // Fix spaces in className attributes
  fixed = fixed.replace(/className="([^"]*?)"/g, (match, className) => {
    // Fix common patterns
    let cleanClass = className
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/([a-z0-9-])([A-Z])/g, '$1 $2') // Add space before capital letters
      .replace(/\s+/g, ' ') // Clean up multiple spaces again
      .trim();
    
    return `className="${cleanClass}"`;
  });
  
  // Fix spaces in class names (without quotes)
  fixed = fixed.replace(/class\s+Name="([^"]*?)"/g, (match, className) => {
    let cleanClass = className
      .replace(/\s+/g, ' ')
      .replace(/([a-z0-9-])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim();
    
    return `className="${cleanClass}"`;
  });
  
  // Fix specific patterns
  fixed = fixed.replace(/from-slate-900 via-purple-900 to-slate-900pt-20/g, 'from-slate-900 via-purple-900 to-slate-900 pt-20');
  fixed = fixed.replace(/border-tborder-slate-800/g, 'border-t border-slate-800');
  fixed = fixed.replace(/col-span-1md:col-span-2/g, 'col-span-1 md:col-span-2');
  fixed = fixed.replace(/grid-cols-1md:grid-cols-4gap-8/g, 'grid-cols-1 md:grid-cols-4 gap-8');
  fixed = fixed.replace(/px-4sm:px-6lg:px-8py-12/g, 'px-4 sm:px-6 lg:px-8 py-12');
  fixed = fixed.replace(/max-w-7xl mx-auto px-4sm:px-6lg:px-8py-12/g, 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12');
  
  // Fix JSX syntax issues
  fixed = fixed.replace(/<div className="([^"]*)" \/>\s*<Helmet \/>/g, '<div className="$1">\n      <Helmet>');
  fixed = fixed.replace(/<footer className="([^"]*)" \/>\s*<div className="([^"]*)" \/>/g, '<footer className="$1">\n      <div className="$2">');
  
  // Fix self-closing tags that should be opening tags
  fixed = fixed.replace(/<ErrorBoundary \/>\s*<HelmetProvider \/>\s*<BrowserRouter \/>/g, 
    '<ErrorBoundary>\n      <HelmetProvider>\n        <BrowserRouter>');
  
  // Fix specific JSX patterns
  fixed = fixed.replace(/<LoadingSpinner \/ \/>/g, '<LoadingSpinner />');
  
  // Fix spaces in variable names and identifiers
  fixed = fixed.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g, (match, part1, part2) => {
    return `${part1}${part2} =`;
  });
  
  // Fix spaces in object property names
  fixed = fixed.replace(/\{([^}]*?)\}/g, (match, content) => {
    const fixedContent = content.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g, '$1$2:');
    return `{${fixedContent}}`;
  });
  
  // Fix spaces in destructuring
  fixed = fixed.replace(/const\s+\{([^}]*?)\}\s*=/g, (match, destructured) => {
    const cleanDestructured = destructured.replace(/\s+/g, '');
    return `const {${cleanDestructured}} =`;
  });
  
  // Fix spaces in function parameters
  fixed = fixed.replace(/\(([^)]*?)\)/g, (match, params) => {
    const cleanParams = params.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '$1$2');
    return `(${cleanParams})`;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixComprehensiveErrors(content);
    
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
  console.log('Starting comprehensive syntax error fixes...');
  
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
  console.log('Comprehensive syntax error fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixComprehensiveErrors, processFile };