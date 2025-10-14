#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix function declarations with arrow syntax
  fixed = fixed.replace(/function\s+(\w+)\s*\([^)]*\)\s*=>\s*{/g, 'function $1() {');
  
  // Fix array declarations missing brackets
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*$/gm, 'const $1 = [');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\n\s*{/gm, 'const $1 = [\n    {');
  
  // Fix missing semicolons after array declarations
  fixed = fixed.replace(/\]\s*$/gm, '];');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n        </div>\n      </div>');
  
  // Fix missing closing tags for common elements
  fixed = fixed.replace(/<h3[^>]*>([^<]+)<\/h3>/g, '<h3>$1</h3>');
  fixed = fixed.replace(/<p[^>]*>([^<]+)<\/p>/g, '<p>$1</p>');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');
  
  // Fix missing closing tags for sections
  fixed = fixed.replace(/<section[^>]*>([^<]+)<\/section>/g, '<section>$1</section>');
  
  // Fix malformed className attributes with spaces
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');
  
  // Fix missing closing tags for Router and HelmetProvider
  fixed = fixed.replace(/<Router>\s*<div className="App">\s*<Routes>([^<]*)<\/Routes>\s*<\/div>\s*<\/div>\s*<\/Router>/g, 
    '<Router>\n        <div className="App">\n          <Routes>\n            $1\n          </Routes>\n        </div>\n      </Router>');
  
  // Fix missing closing tags for HelmetProvider
  fixed = fixed.replace(/<HelmetProvider>\s*<Router>([^<]*)<\/Router>\s*<\/HelmetProvider>/g, 
    '<HelmetProvider>\n      <Router>\n        $1\n      </Router>\n    </HelmetProvider>');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = content;
  
  // Fix specific patterns for different file types
  if (filePath.includes('page.tsx')) {
    // Fix array declarations
    fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\n\s*{/g, 'const $1 = [\n    {');
    fixed = fixed.replace(/}\s*\]\s*$/gm, '}\n  ];');
    
    // Fix missing closing tags
    fixed = fixed.replace(/<div className="container mx-autopx-4py-1 6">/g, '<div className="container mx-auto px-4 py-16">');
    fixed = fixed.replace(/<div className="text-center mb-1 6">/g, '<div className="text-center mb-16">');
    fixed = fixed.replace(/<div className="grid md:grid-cols-3 gap-8 mb-1 6">/g, '<div className="grid md:grid-cols-3 gap-8 mb-16">');
  }
  
  if (filePath.includes('App.tsx')) {
    // Fix Router structure
    fixed = fixed.replace(/<Router>\s*<div className="App">\s*<Routes>([^<]*)<\/Routes>\s*<\/div>\s*<\/div>\s*<\/Router>/g, 
      '<Router>\n        <div className="App">\n          <Routes>\n            $1\n          </Routes>\n        </div>\n      </Router>');
  }
  
  return fixed;
}

// Main function to process all files
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalFiles++;
      try {
        const content = fs.readFileSync(file, 'utf8');
        let fixed = fixJSXSyntax(content);
        fixed = fixSpecificFile(file);
        
        if (fixed !== content) {
          fs.writeFileSync(file, fixed, 'utf8');
          console.log(`Fixed: ${file}`);
          fixedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixJSXSyntax, fixSpecificFile };