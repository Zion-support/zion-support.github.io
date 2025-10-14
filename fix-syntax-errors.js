#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals by adding missing quotes
  fixed = fixed.replace(/import\s+React\s+from\s+'react';'react-helmet-async;/g, "import React from 'react';\nimport { Helmet } from 'react-helmet-async';");
  
  // Fix missing quotes in import statements
  fixed = fixed.replace(/from\s+'lucide-react;/g, "from 'lucide-react';");
  fixed = fixed.replace(/from\s+'react-router-dom;/g, "from 'react-router-dom';");
  fixed = fixed.replace(/from\s+'react-helmet-async;/g, "from 'react-helmet-async';");
  fixed = fixed.replace(/from\s+'@heroicons\/react\/24\/outline';/g, "from '@heroicons/react/24/outline';");
  
  // Fix object property syntax errors
  fixed = fixed.replace(/icon:\s*icon:\s*/g, "icon: ");
  fixed = fixed.replace(/title:\s*'([^']*)';/g, "title: '$1',");
  fixed = fixed.replace(/description:\s*'([^']*)';/g, "description: '$1',");
  fixed = fixed.replace(/color:\s*'([^']*)';/g, "color: '$1',");
  
  // Fix array syntax errors
  fixed = fixed.replace(/\[\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*;\s*\]/g, '["$1", "$2", "$3", "$4", "$5", "$6"]');
  
  // Fix semicolons in wrong places
  fixed = fixed.replace(/;\s*\]/g, ']');
  fixed = fixed.replace(/;\s*\}/g, '}');
  fixed = fixed.replace(/;\s*\)/g, ')');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*;\s*(\w+):/g, '$1: "$2",\n      $3:');
  fixed = fixed.replace(/(\w+):\s*'([^']*)'\s*;\s*(\w+):/g, "$1: '$2',\n      $3:");
  
  // Fix JSX syntax errors
  fixed = fixed.replace(/<(\w+);/g, '<$1>');
  fixed = fixed.replace(/<\/(\w+);/g, '</$1>');
  
  // Fix function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div[^>]*>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<div[^>]*>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>/g, 
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <div className="container mx-auto px-4 py-8">\n          <h1 className="text-4xl font-bold text-white text-center mb-8">\n            $1\n          </h1>\n          <p className="text-xl text-gray-300 text-center">\n            $2\n          </p>\n          <div className="mt-8 text-center">\n            <p className="text-gray-400">\n              $3\n            </p>\n          </div>\n        </div>\n      </div>');
  
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
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
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
