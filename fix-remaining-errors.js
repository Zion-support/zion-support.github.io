#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  // Fix unterminated string literals in import statements
  content = content.replace(/import\s+{\s*Helmet\s*}\s+from\s+from\s+/g, 'import { Helmet } from ');
  
  // Fix malformed 'use client' directives
  content = content.replace(/'use client'/g, '"use client"');
  
  // Fix unterminated string literals in various contexts
  content = content.replace(/content="([^"]*?)(?=\s*\/>)/g, 'content="$1"');
  content = content.replace(/title="([^"]*?)(?=\s*\/>)/g, 'title="$1"');
  content = content.replace(/description="([^"]*?)(?=\s*\/>)/g, 'description="$1"');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*?)(?=\s*\/>)/g, 'className="$1"');
  content = content.replace(/href="([^"]*?)(?=\s*\/>)/g, 'href="$1"');
  content = content.replace(/src="([^"]*?)(?=\s*\/>)/g, 'src="$1"');
  
  // Fix malformed React.FC syntax
  content = content.replace(/const\s+(\w+):\s*"React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
  
  // Fix malformed object syntax
  content = content.replace(/{\s*;\s*/g, '{');
  content = content.replace(/;\s*}\s*/g, '}');
  content = content.replace(/,\s*;\s*/g, ',');
  
  // Fix malformed closing brackets
  content = content.replace(/\]\s*;\s*$/gm, '];');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/\s*section\s*>/g, '</section>');
  content = content.replace(/<\/\s*div\s*>/g, '</div>');
  content = content.replace(/<\/\s*span\s*>/g, '</span>');
  content = content.replace(/<\/\s*p\s*>/g, '</p>');
  content = content.replace(/<\/\s*h[1-6]\s*>/g, '</h$1>');
  
  // Fix malformed grid classes
  content = content.replace(/md:\s+grid-cols/g, 'md:grid-cols');
  content = content.replace(/l,g:/g, 'lg:');
  
  // Fix malformed hover classes
  content = content.replace(/hover:\s+([a-zA-Z-]+)\s+hove,r:/g, 'hover:$1 hover:');
  content = content.replace(/hove,r:/g, 'hover:');
  
  // Fix malformed numeric literals
  content = content.replace(/(\d+),0o0/g, '$1,000');
  content = content.replace(/(\d+)o0/g, '$1');
  
  // Fix malformed JSX expressions
  content = content.replace(/\{\s*feature\.icon\s*\}/g, '{feature.icon}');
  
  // Fix malformed className attributes with slashes
  content = content.replace(/className="([^"]*)\/50([^"]*)"/g, 'className="$1/50$2"');
  
  // Fix malformed import statements
  content = content.replace(/import\s+React\s+from\s+from\s+/g, 'import React from ');
  content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+from\s+/g, 'import { $1 } from ');
  
  // Fix malformed export statements
  content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'export default function $1() {');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*$/gm, '<>');
  content = content.replace(/<\/>\s*$/gm, '</>');
  
  // Fix malformed closing parentheses
  content = content.replace(/\)\s*;\s*$/gm, ');');
  
  // Fix malformed arrow functions
  content = content.replace(/=>\s*{\s*$/gm, '=> {');
  
  // Fix malformed template literals
  content = content.replace(/`([^`]*?)(?=\s*\/>)/g, '`$1`');
  
  // Fix malformed array syntax
  content = content.replace(/\[\s*;\s*/g, '[');
  content = content.replace(/;\s*\]\s*/g, ']');
  
  // Fix malformed object property syntax
  content = content.replace(/:\s*"([^"]*?)(?=\s*[,}])/g, ': "$1"');
  
  // Fix malformed JSX self-closing tags
  content = content.replace(/<(\w+)\s+([^>]*?)(?=\s*\/>)/g, '<$1 $2');
  
  // Fix malformed closing tags with extra characters
  content = content.replace(/<\/\s*(\w+)\s*>\s*$/gm, '</$1>');
  
  // Fix malformed string concatenation
  content = content.replace(/"\s*\+\s*"/g, '""');
  
  // Fix malformed function calls
  content = content.replace(/\(\s*\)\s*;\s*$/gm, '();');
  
  // Fix malformed variable declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, 'const $1 = () => {');
  
  // Fix malformed return statements
  content = content.replace(/return\s*\(\s*$/gm, 'return (');
  
  // Fix malformed JSX expressions in attributes
  content = content.replace(/\{\s*([^}]+)\s*\}\s*$/gm, '{$1}');
  
  // Fix malformed closing braces
  content = content.replace(/\}\s*;\s*$/gm, '};');
  
  // Fix malformed opening braces
  content = content.replace(/{\s*;\s*/g, '{');
  
  // Fix malformed semicolons
  content = content.replace(/;\s*;\s*/g, ';');
  
  // Fix malformed commas
  content = content.replace(/,\s*,\s*/g, ',');
  
  // Fix malformed parentheses
  content = content.replace(/\(\s*\(\s*/g, '(');
  content = content.replace(/\s*\)\s*\)/g, ')');
  
  // Fix malformed brackets
  content = content.replace(/\[\s*\[\s*/g, '[');
  content = content.replace(/\s*\]\s*\]/g, ']');
  
  // Fix malformed curly braces
  content = content.replace(/{\s*{\s*/g, '{');
  content = content.replace(/\s*}\s*}/g, '}');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingErrors(content);
    
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

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    totalFiles += files.length;
    
    for (const file of files) {
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { fixRemainingErrors, processFile };