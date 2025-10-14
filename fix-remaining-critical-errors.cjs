const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix critical remaining errors
function fixCriticalErrors(content, filePath) {
  // Skip if it's a script file
  if (filePath.includes('.js') && !filePath.includes('.tsx') && !filePath.includes('.ts')) {
    return content;
  }

  // Fix unterminated string literals in imports
  content = content.replace(/import\s+([^;]+);$/gm, 'import $1;');
  content = content.replace(/import\s+([^;]+);""/g, 'import $1;');
  content = content.replace(/import\s+([^;]+);"/g, 'import $1;');
  
  // Fix malformed React imports
  content = content.replace(/import React from "react";"/g, 'import React from "react";');
  content = content.replace(/import React, { ([^}]+) } from "react";"/g, 'import React, { $1 } from "react";');
  
  // Fix malformed JSX attributes
  content = content.replace(/type="text/g, 'type="text"');
  content = content.replace(/id="name/g, 'id="name"');
  content = content.replace(/name="name/g, 'name="name"');
  content = content.replace(/placeholder="Your full name/g, 'placeholder="Your full name"');
  content = content.replace(/className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent/g, 'className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"');
  
  // Fix missing closing tags
  content = content.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
  content = content.replace(/<textarea([^>]*?)(?<!\/)>/g, '<textarea$1></textarea>');
  
  // Fix malformed object properties
  content = content.replace(/name: ,'/g, "name: '',");
  content = content.replace(/email: ,'/g, "email: '',");
  content = content.replace(/company: ,'/g, "company: '',");
  content = content.replace(/message: /g, "message: ''");
  
  // Fix string literals with missing quotes
  content = content.replace(/title: 'Email','/g, "title: 'Email',");
  content = content.replace(/details: 'contact@ziontech\.com','/g, "details: 'contact@ziontech.com',");
  content = content.replace(/description: 'Send us an email anytime/g, "description: 'Send us an email anytime'");
  
  // Fix console.log statements
  content = content.replace(/console\.log\('Form submitted:', formData\);'/g, "console.log('Form submitted:', formData);");
  
  // Fix JSX fragments
  content = content.replace(/<>\s*<section/g, '<>\n      <section');
  content = content.replace(/<\/section>\s*<\/>/g, '</section>\n    </>');
  
  // Fix missing closing div tags
  content = content.replace(/<div([^>]*?)>\s*<form/g, '<div$1>\n              <form');
  content = content.replace(/<\/form>\s*<\/div>/g, '</form>\n            </div>');
  
  // Fix malformed JSX expressions
  content = content.replace(/<info\.icon className="h-6 w-6 text-blue-600" \/>/g, '<info.icon className="h-6 w-6 text-blue-600" />');
  
  // Fix missing closing tags in lists
  content = content.replace(/<li className="flex items-center">\s*<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"><\/div>\s*([^<]+)\s*<\/li>/g, '<li className="flex items-center">\n                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>\n                    $1\n                  </li>');
  
  // Fix malformed string literals with extra quotes
  content = content.replace(/''''/g, '');
  content = content.replace(/'''/g, "'");
  content = content.replace(/"""/g, '"');
  content = content.replace(/""/g, '"');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/\s*([A-Z][a-zA-Z]*?)\s*\/>/g, '</$1>');
  
  // Fix JSX fragments that are not properly closed
  content = content.replace(/<>\s*<([A-Z][a-zA-Z]*?)><\/\1>\s*<([^>]+)>\s*<\/\2>\s*<\/>/g, '<><$1><$2></$2></$1></>');
  
  // Fix malformed function declarations
  content = content.replace(/const\s+([A-Z][a-zA-Z]*?):\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
  
  // Fix malformed arrow functions
  content = content.replace(/const\s+([a-zA-Z][a-zA-Z0-9]*?)\s*=\s*\(\)\s*=>\s*{/g, 'const $1 = () => {');
  
  // Fix malformed object literals
  content = content.replace(/{\s*([^}]+):\s*([^,}]+),?\s*}/g, '{\n    $1: $2,\n  }');
  
  // Fix malformed array literals
  content = content.replace(/\[\s*([^\]]+),?\s*\]/g, '[\n    $1,\n  ]');
  
  // Fix malformed template literals
  content = content.replace(/`([^`]*?)`/g, '`$1`');
  
  // Fix malformed regular expressions
  content = content.replace(/\/\^([^$]+)\$\/g/g, '/^$1$/g');
  
  // Fix malformed JSX expressions
  content = content.replace(/\{([^}]+)\}/g, '{$1}');
  
  // Fix malformed comments
  content = content.replace(/\/\*\s*([^*]+)\s*\*\//g, '/* $1 */');
  
  // Fix malformed HTML entities
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&amp;/g, '&');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixCriticalErrors(content, filePath);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to fix all files
async function fixAllFiles() {
  const patterns = [
    'app/components/**/*.tsx',
    'app/**/*.tsx',
    'app/**/*.ts',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts'
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

// Run the fix
fixAllFiles().catch(console.error);