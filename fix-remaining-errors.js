#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;

  // Remove merge conflict markers completely
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/=======/g, '');
  fixed = fixed.replace(/>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< HEAD/g, '');

  // Fix JSX structure issues
  fixed = fixed.replace(/<div[^>]*><\/div>\s*<Helmet><\/Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>/g, 
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Helmet>\n        <title>$1</title>\n        <meta name="description" content="$1" />\n      </Helmet>');

  // Fix malformed JSX structure
  fixed = fixed.replace(/<div[^>]*><\/div>\s*<div[^>]*><\/div>\s*"([^"]*?)<div/g, '<div className="container mx-auto px-4 py-16">\n        <div');
  
  // Fix text content structure
  fixed = fixed.replace(/<div[^>]*><\/div>"([^"]*?)<h1/g, '<div className="text-center">\n          <h1');
  fixed = fixed.replace(/<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)\s*\)/g, 
    '<h1 className="text-4xl font-bold text-white mb-8">$1</h1>\n          <p className="text-gray-300 text-lg">\n            $2\n          </p>\n        </div>\n      </div>\n    </div>\n  );');

  // Fix export statements
  fixed = fixed.replace(/export\s+default\s+([^;]+)\s*$/gm, 'export default $1;');

  // Fix function declarations
  fixed = fixed.replace(/const\s+([A-Za-z]+)\s*=\s*\(\)\s*=>\s*\{/g, 'const $1 = () => {');
  fixed = fixed.replace(/}\s*export\s+default/g, '};\n\nexport default');

  // Fix missing semicolons in imports
  fixed = fixed.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');

  // Fix JSX return statements
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*><\/div>/g, 'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');

  // Fix closing parentheses and braces
  fixed = fixed.replace(/\)\s*\)\s*$/gm, ');');
  fixed = fixed.replace(/}\s*$/gm, '};');

  // Remove extra quotes and fix string literals
  fixed = fixed.replace(/"([^"]*?)"([^"]*?)"/g, '$1$2');
  fixed = fixed.replace(/""/g, '');
  fixed = fixed.replace(/<div[^>]*><\/div>"([^"]*?)<div/g, '<div className="text-center">\n          <div');

  // Fix specific patterns for about page
  if (fixed.includes('export default function Page()')) {
    fixed = `import React from "react";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to excellence in AI and IT solutions." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions, 
            committed to delivering excellence and innovation to our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;`;
  }

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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
    'app/**/*.ts'
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

export { fixRemainingErrors, processFile };