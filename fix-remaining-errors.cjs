#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix remaining semicolon syntax errors
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // More specific fixes for remaining issues
    const fixes = [
      // Fix object property assignments with semicolons
      { pattern: /(\w+):\s*(\w+),;/g, replacement: '$1: $2,' },
      // Fix string assignments with semicolons
      { pattern: /(\w+):\s*'([^']*)',;/g, replacement: "$1: '$2'," },
      { pattern: /(\w+):\s*"([^"]*)",;/g, replacement: '$1: "$2",' },
      // Fix array assignments with semicolons
      { pattern: /(\w+):\s*\[([^\]]*)\],;/g, replacement: '$1: [$2],' },
      // Fix closing braces with semicolons in object literals
      { pattern: /\}\s*;\s*$/gm, replacement: '}' },
      // Fix closing braces with semicolons followed by comma
      { pattern: /\}\s*;\s*,/g, replacement: '},' },
      // Fix closing braces with semicolons followed by closing bracket
      { pattern: /\}\s*;\s*\]/g, replacement: '}]' },
      // Fix closing braces with semicolons followed by closing parenthesis
      { pattern: /\}\s*;\s*\)/g, replacement: '})' },
      // Fix standalone semicolons at end of lines
      { pattern: /^(\s*);\s*$/gm, replacement: '' },
      // Fix semicolons after closing braces in object literals
      { pattern: /\}\s*;\s*$/gm, replacement: '}' },
      // Fix semicolons after closing parentheses
      { pattern: /\)\s*;\s*$/gm, replacement: ')' },
      // Fix semicolons after closing brackets
      { pattern: /\]\s*;\s*$/gm, replacement: ']' },
      // Fix semicolons in object property assignments
      { pattern: /(\w+):\s*(\w+),;/g, replacement: '$1: $2,' },
      // Fix semicolons in string assignments
      { pattern: /(\w+):\s*'([^']*)',;/g, replacement: "$1: '$2'," },
      { pattern: /(\w+):\s*"([^"]*)",;/g, replacement: '$1: "$2",' },
      // Fix semicolons in array assignments
      { pattern: /(\w+):\s*\[([^\]]*)\],;/g, replacement: '$1: [$2],' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all TSX files
function main() {
  console.log('Starting remaining error fixes...');
  
  try {
    // Find all TSX files
    const result = execSync('find /workspace/app -name "*.tsx" -type f', { encoding: 'utf8' });
    const files = result.trim().split('\n').filter(f => f);
    
    console.log(`Found ${files.length} TSX files to process`);
    
    let fixedCount = 0;
    
    files.forEach(file => {
      if (fixRemainingErrors(file)) {
        fixedCount++;
      }
    });
    
    console.log(`\nSummary:`);
    console.log(`- Fixed remaining errors in ${fixedCount} files`);
    console.log('Done!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();