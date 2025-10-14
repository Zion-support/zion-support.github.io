#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final syntax errors
function fixFinalSyntax(content) {
  let fixed = content;
  
  // Fix malformed JSX self-closing tags
  fixed = fixed.replace(/<(\w+[^>]*)\s*\/\s*\/>/g, '<$1 />');
  fixed = fixed.replace(/<(\w+[^>]*)\s*\/\s*\/>/g, '<$1 />');
  
  // Fix unterminated string literals in imports
  fixed = fixed.replace(/import\s+([^'"`\s]+)\s+from\s+['"`]([^'"`]+)['"`];/g, "import $1 from '$2';");
  
  // Fix malformed object properties
  fixed = fixed.replace(/icon:\s*<([^>]+)>\s*,/g, 'icon: <$1 />,');
  fixed = fixed.replace(/title:\s*'([^']*)',/g, "title: '$1',");
  fixed = fixed.replace(/description:\s*'([^']*)'/g, "description: '$1'");
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div[^>]*><\/div>\s*<(\w+)/g, '<div>\n      <$1');
  fixed = fixed.replace(/<section[^>]*><\/section>\s*<div>/g, '<section>\n        <div>');
  fixed = fixed.replace(/<h1[^>]*><\/h1>\s*([^<]+)/g, '<h1>$1</h1>');
  fixed = fixed.replace(/<h2[^>]*><\/h2>\s*([^<]+)/g, '<h2>$1</h2>');
  fixed = fixed.replace(/<p[^>]*><\/p>\s*([^<]+)/g, '<p>$1</p>');
  
  // Fix malformed Link components
  fixed = fixed.replace(/<Link[^>]*><\/Link>\s*([^<]+)\s*<(\w+[^>]*)>\s*([^<]+)\s*<\/\2>\s*<\/Link>/g, '<Link>$1 <$2>$3</$2></Link>');
  fixed = fixed.replace(/<Link[^>]*><\/Link>\s*([^<]+)\s*<\/Link>/g, '<Link>$1</Link>');
  
  // Fix empty JSX elements
  fixed = fixed.replace(/<(\w+)[^>]*><\/\1>/g, '<$1 />');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<div>\s*<EnhancedSEO[^>]*><\/EnhancedSEO>\s*<div[^>]*>/g, 'return (\n    <div>\n      <EnhancedSEO');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div[^>]*>\s*<section[^>]*>\s*<div[^>]*>\s*<h1[^>]*>([^<]+)<\/h1>/g, '<div>\n      <section>\n        <div>\n          <h1>$1</h1>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n          </div>\n        </div>\n      </div>');
  
  // Fix duplicate content at the end of files
  fixed = fixed.replace(/\s*;\s*const\s+page\s*=\s*React\.lazy\(\(\)\s*=>\s*import\('\.\/page'\)\);\s*export\s+default\s+page;\s*'?\s*$/g, '');
  fixed = fixed.replace(/\s*;\s*export\s+default\s+page;\s*'?\s*$/g, '');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+(\w+);\s*'?\s*$/g, 'export default $1;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFinalSyntax(content);
    
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
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, {
      ignore: ['node_modules/**', 'dist/**', 'build/**', '.next/**']
    });
    
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();