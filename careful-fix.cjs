const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix common syntax errors more carefully
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Remove git branch markers
  fixed = fixed.replace(/cursor\/fix-errors-and-merge-to-main-[a-f0-9]+/g, '');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<title>([^<]*)<\/>/g, '<title>$1</title>');
  fixed = fixed.replace(/<meta[^>]*\/>/g, (match) => {
    if (!match.endsWith('/>')) {
      return match + ' />';
    }
    return match;
  });
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/<Helmet\s*>/g, '<Helmet>');
  fixed = fixed.replace(/<title>([^<]*)<\/>/g, '<title>$1</title>');
  fixed = fixed.replace(/<meta[^>]*\/>/g, (match) => {
    if (!match.endsWith('/>')) {
      return match + ' />';
    }
    return match;
  });
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<h1[^>]*>([^<]*)<\/>/g, '<h1>$1</h1>');
  fixed = fixed.replace(/<p[^>]*>([^<]*)<\/>/g, '<p>$1</p>');
  fixed = fixed.replace(/<div[^>]*>([^<]*)<\/>/g, '<div>$1</div>');
  
  // Fix unterminated string literals
  fixed = fixed.replace(/'$/gm, "'");
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*'([^']*)',/g, '$1: "$2",');
  fixed = fixed.replace(/(\w+):\s*"([^"]*)",/g, '$1: "$2",');
  
  // Fix object properties with trailing quotes
  fixed = fixed.replace(/(\w+):\s*'([^']*)'$/gm, '$1: "$2",');
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"$/gm, '$1: "$2",');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)'$/gm, 'className="$1"');
  fixed = fixed.replace(/title="([^"]*)'$/gm, 'title="$1"');
  fixed = fixed.replace(/description="([^"]*)'$/gm, 'description="$1"');
  
  // Fix object literals with missing commas
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
  
  // Fix malformed array/object syntax
  fixed = fixed.replace(/{\s*'([^']*)':\s*'([^']*)',?\s*}/g, '{"$1": "$2"}');
  
  // Fix missing closing brackets/parentheses
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');
  
  // Fix numeric literal issues
  fixed = fixed.replace(/(\d+)([a-zA-Z_])/g, '$1 $2');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s*{\s*([^}]*)\s*}\s*from\s*'([^']*)';/g, 'import { $1 } from "$2";');
  
  // Fix extra quotes in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
  
  // Fix malformed JSX
  fixed = fixed.replace(/<(\w+)\s*([^>]*)\s*>\s*$/gm, '<$1 $2>');
  
  // Fix unterminated strings in JSX
  fixed = fixed.replace(/className="([^"]*)$/gm, 'className="$1"');
  fixed = fixed.replace(/title="([^"]*)$/gm, 'title="$1"');
  fixed = fixed.replace(/description="([^"]*)$/gm, 'description="$1"');
  
  // Fix malformed object literals with extra quotes
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
  
  // Fix missing semicolons in imports
  fixed = fixed.replace(/import\s*{\s*([^}]*)\s*}\s*from\s*'([^']*)'$/gm, 'import { $1 } from "$2";');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/\w+>\s*$/gm, '</>');
  
  // Fix missing React import
  if (fixed.includes('React.FC') || (fixed.includes('<') && fixed.includes('>') && !fixed.includes('import React'))) {
    fixed = "import React from 'react';\n" + fixed;
  }
  
  // Fix malformed object properties with extra quotes
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<(\w+)\s*([^>]*)\s*>\s*$/gm, '<$1 $2>');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)$/gm, 'className="$1"');
  
  // Fix missing closing brackets
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
  
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
    'components/**/*.tsx',
    'components/**/*.ts',
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

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { fixSyntaxErrors, processFile };