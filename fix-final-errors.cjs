#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix final semicolon syntax errors
function fixFinalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix specific patterns that are causing issues
    const fixes = [
      // Fix semicolons after closing braces in object literals
      { pattern: /\}\s*;\s*$/gm, replacement: '}' },
      // Fix semicolons after closing braces followed by comma
      { pattern: /\}\s*;\s*,/g, replacement: '},' },
      // Fix semicolons after closing braces followed by closing bracket
      { pattern: /\}\s*;\s*\]/g, replacement: '}]' },
      // Fix semicolons after closing braces followed by closing parenthesis
      { pattern: /\}\s*;\s*\)/g, replacement: '})' },
      // Fix semicolons after closing braces followed by semicolon
      { pattern: /\}\s*;\s*;/g, replacement: '}' },
      // Fix semicolons after closing braces followed by newline
      { pattern: /\}\s*;\s*\n/g, replacement: '}\n' },
      // Fix semicolons after closing braces followed by whitespace
      { pattern: /\}\s*;\s+/g, replacement: '}' },
      // Fix semicolons after closing braces followed by any character
      { pattern: /\}\s*;\s*([^,}\])])/g, replacement: '}$1' },
      // Fix semicolons after closing braces followed by comma
      { pattern: /\}\s*;\s*,/g, replacement: '},' },
      // Fix semicolons after closing braces followed by closing bracket
      { pattern: /\}\s*;\s*\]/g, replacement: '}]' },
      // Fix semicolons after closing braces followed by closing parenthesis
      { pattern: /\}\s*;\s*\)/g, replacement: '})' },
      // Fix semicolons after closing braces followed by semicolon
      { pattern: /\}\s*;\s*;/g, replacement: '}' },
      // Fix semicolons after closing braces followed by newline
      { pattern: /\}\s*;\s*\n/g, replacement: '}\n' },
      // Fix semicolons after closing braces followed by whitespace
      { pattern: /\}\s*;\s+/g, replacement: '}' },
      // Fix semicolons after closing braces followed by any character
      { pattern: /\}\s*;\s*([^,}\])])/g, replacement: '}$1' },
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
      console.log(`Fixed final errors in: ${filePath}`);
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
  console.log('Starting final error fixes...');
  
  try {
    // Find all TSX files
    const result = execSync('find /workspace/app -name "*.tsx" -type f', { encoding: 'utf8' });
    const files = result.trim().split('\n').filter(f => f);
    
    console.log(`Found ${files.length} TSX files to process`);
    
    let fixedCount = 0;
    
    files.forEach(file => {
      if (fixFinalErrors(file)) {
        fixedCount++;
      }
    });
    
    console.log(`\nSummary:`);
    console.log(`- Fixed final errors in ${fixedCount} files`);
    console.log('Done!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();