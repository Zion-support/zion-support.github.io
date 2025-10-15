#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix all API files comprehensively
function fixAllApiFiles(content) {
  // Fix method checks
  content = content.replace(/if\s*\(\s*req\.method\s*!==\s*['"]POST[""]\s*\)\s*\{\s*\{return/g, 'if (req.method !== \'POST\') {\n    return');
  
  // Fix error messages
  content = content.replace(/error:\s*[""]Method not allowed;[""]/g, 'error: 'Method not allowed"");
  content = content.replace(/error:\s*[""]Valid email is required;[""]/g, 'error: 'Valid email is required"");
  content = content.replace(/error:\s*[""]Name, email, and service are required;[""]/g, 'error: 'Name, email, and service are required"");
  
  // Fix object destructuring
  content = content.replace(/const\s+\{[^}]+\}\s*=\s*req\.body'/g, (match) => match.slice(0, -1) + ';);
  
  // Fix object properties
  content = content.replace(/(\w+):\s*'([^']+)",\s*"/g, '$1: '$2",);
  content = content.replace(/(\w+):\s*"([^"]+)",\s*'/g, "$1: "$2',);
  content = content.replace(/(\w+):\s*'([^']+)',\s*;/g, '$1: '$2",);
  content = content.replace(/(\w+):\s*"([^"]+)',\s*;/g, "$1: "$2',);
  
  // Fix array declarations
  content = content.replace(/let\s+(\w+)\s*=\s*\[\]'/g, 'let $1 = [];);
  content = content.replace(/const\s+(\w+)\s*=\s*\[\]'/g, 'const $1 = [];);
  
  // Fix function calls
  content = content.replace(/console\.log\('([^']+)',\s*(\w+)\)'/g, 'console.log('$1', $2););
  content = content.replace(/console\.error\('([^']+)',\s*(\w+)\)'/g, 'console.error('$1', $2););
  
  // Fix return statements
  content = content.replace(/return\s+res\.status\(\d+\)\.json\(\s*\{\s*error:\s*'([^']+)'\s*\}\)'/g, 'return res.status($1).json({ error: '$2" }););
  
  // Fix closing braces
  content = content.replace(/}\s*'/g, '};);
  content = content.replace(/}\s*'/g, '};);
  
  // Fix semicolons
  content = content.replace(/;\s*'/g, ';);
  content = content.replace(/;\s*'/g, ';);
  
  // Fix string literals
  content = content.replace(/'([^']+)'/g, ''$1"");
  content = content.replace(/"([^"]+)'/g, ""$1'');
  
  // Fix variable declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\([^)]+\)\s*=>\s*\{/g, 'const $1 = () => {');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixAllApiFiles(content);
    
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
  const apiFiles = await glob('api/**/*.js");
  
  let totalFixed = 0;
  
  for (const file of apiFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
  
  console.log(`\nFixed ${totalFixed} API files`);
}

main().catch(console.error);