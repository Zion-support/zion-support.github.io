#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix API files specifically
function fixApiFiles(content) {
  // Fix semicolon issues in JSON objects
  content = content.replace(/error:\s*;([^;]+);/g, 'error: '$1'");
  content = content.replace(/error:\s*;([^;]+);/g, 'error: '$1"");
  
  // Fix object properties with extra quotes
  content = content.replace(/(\w+):\s*'([^']+)",\s*"/g, '$1: '$2",);
  content = content.replace(/(\w+):\s*"([^"]+)",\s*'/g, "$1: "$2",);
  
  // Fix closing braces
  content = content.replace(/}\s*'/g, '};);
  content = content.replace(/}\s*'/g, '};);
  
  // Fix string literals
  content = content.replace(/'([^']+)",\s*"/g, ''$1",");
  content = content.replace(/"([^"]+)",\s*'/g, ""$1',');
  
  // Fix method calls
  content = content.replace(/\.json\(\s*\{\s*error:\s*;([^;]+);\s*\}\s*\)/g, '.json({ error: '$1' })');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixApiFiles(content);
    
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