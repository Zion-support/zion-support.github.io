#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix import statements with extra semicolons and quotes
  fixed = fixed.replace(/import\s+([^;]+);";/g, 'import $1;');
  fixed = fixed.replace(/import\s+([^;]+);\s*";/g, 'import $1;');
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/return\s*\(\s*"([^"]*?)\s*<div/g, 'return (\n    <div');
  fixed = fixed.replace(/<div\s+className="([^"]*?)"\s*><\/div>\s*"([^"]*?)<div/g, '<div className="$1">\n      $2\n      <div');
  
  // Fix JSX structure issues
  fixed = fixed.replace(/<div\s+className="([^"]*?)"\s*><\/div>\s*"([^"]*?)<Helmet/g, '<div className="$1">\n      <Helmet');
  fixed = fixed.replace(/<\/Helmet>\s*"([^"]*?)<div/g, '</Helmet>\n      <div');
  fixed = fixed.replace(/<div\s+className="([^"]*?)"\s*><\/div>\s*"([^"]*?)<div/g, '<div className="$1">\n        <div');
  
  // Fix closing tags
  fixed = fixed.replace(/<\/div>\s*"([^"]*?)<\/div>/g, '</div>\n      </div>');
  fixed = fixed.replace(/<\/div>\s*"([^"]*?)\)\s*;/g, '</div>\n    </div>\n  );');
  
  // Fix export statements
  fixed = fixed.replace(/export\s+default\s+([^;]+);\s*"$/gm, 'export default $1;');
  
  // Remove merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix extra semicolons
  fixed = fixed.replace(/;\s*;+/g, ';');
  fixed = fixed.replace(/;\s*$/gm, '');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)"\s*><\/div>\s*"([^"]*?)<div/g, 'className="$1">\n        <div');
  
  // Fix title and meta tags
  fixed = fixed.replace(/<title>([^<]*?)<\/title>\s*"([^"]*?)<meta/g, '<title>$1</title>\n        <meta');
  fixed = fixed.replace(/<meta\s+name="([^"]*?)"\s+content="([^"]*?)"\s*\/>\s*"([^"]*?)<\/Helmet>/g, '<meta name="$1" content="$2" />\n      </Helmet>');
  
  // Fix container structure
  fixed = fixed.replace(/<div\s+className="container[^"]*"\s*><\/div>\s*"([^"]*?)<div/g, '<div className="container mx-auto px-4 py-16">\n        <div');
  
  // Fix text content
  fixed = fixed.replace(/<h1[^>]*>([^<]*?)<\/h1>\s*"([^"]*?)<p/g, '<h1 className="text-4xl font-bold text-white mb-8">$1</h1>\n          <p');
  fixed = fixed.replace(/<p[^>]*>([^<]*?)<\/p>\s*"([^"]*?)<\/div>/g, '<p className="text-gray-300 text-lg">\n            $1\n          </p>\n        </div>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
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
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '**/*.tsx',
    '**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
    });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };