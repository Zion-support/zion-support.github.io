#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix malformed color classes (0o0 -> 0, 40o0 -> 400, etc.)
  content = content.replace(/(\d+)o0/g, '$1');
  
  // Fix malformed import statements
  content = content.replace(/import\s+{\s*Helmet\s*}\s+from\s+from\s+/g, 'import { Helmet } from ');
  
  // Fix malformed string literals with extra quotes
  content = content.replace(/'([^']*)'/g, '"$1"');
  
  // Fix malformed object syntax with semicolons
  content = content.replace(/{\s*;\s*/g, '{');
  content = content.replace(/;\s*}\s*/g, '}');
  content = content.replace(/,\s*;\s*/g, ',');
  
  // Fix malformed JSX attributes
  content = content.replace(/hover:\s+([a-zA-Z-]+)\s+hove,r:/g, 'hover:$1 hover:');
  content = content.replace(/hove,r:/g, 'hover:');
  
  // Fix malformed grid classes
  content = content.replace(/md:\s+grid-cols/g, 'md:grid-cols');
  content = content.replace(/l,g:/g, 'lg:');
  
  // Fix malformed React.FC syntax
  content = content.replace(/const\s+(\w+):\s*"React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
  
  // Fix malformed 'use client' directives
  content = content.replace(/'use client'/g, '"use client"');
  
  // Fix malformed closing tags
  content = content.replace(/<\/\s*section\s*>/g, '</section>');
  content = content.replace(/<\/\s*div\s*>/g, '</div>');
  
  // Fix malformed numeric literals
  content = content.replace(/(\d+),0o0/g, '$1,000');
  content = content.replace(/(\d+)o0/g, '$1');
  
  // Fix malformed JSX expressions
  content = content.replace(/\{\s*feature\.icon\s*\}/g, '{feature.icon}');
  
  // Fix malformed className attributes
  content = content.replace(/className="([^"]*)\/50([^"]*)"/g, 'className="$1/50$2"');
  
  // Fix malformed closing brackets
  content = content.replace(/\]\s*;\s*$/gm, '];');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
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

export { fixSyntaxErrors, processFile };