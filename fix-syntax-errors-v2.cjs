#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix semicolon syntax errors in TSX files
function fixSemicolonErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common semicolon errors - more comprehensive patterns
    const fixes = [
      // Fix object property assignments with semicolons
      { pattern: /(\w+):\s*(\w+),;/g, replacement: '$1: $2,' },
      // Fix string assignments with semicolons
      { pattern: /(\w+):\s*'([^']*)',;/g, replacement: "$1: '$2'," },
      { pattern: /(\w+):\s*"([^"]*)",;/g, replacement: '$1: "$2",' },
      // Fix array assignments with semicolons
      { pattern: /(\w+):\s*\[([^\]]*)\],;/g, replacement: '$1: [$2],' },
      // Fix function calls with semicolons
      { pattern: /(\w+)\s*\([^)]*\),;/g, replacement: '$1($2),' },
      // Fix JSX elements with semicolons
      { pattern: /<(\w+);/g, replacement: '<$1' },
      // Fix closing tags with semicolons
      { pattern: /<\/(\w+)>;/g, replacement: '</$1>' },
      // Fix self-closing tags with semicolons
      { pattern: /<(\w+)\s*\/>;/g, replacement: '<$1 />' },
      // Fix attribute assignments with semicolons
      { pattern: /(\w+)="([^"]*)"\s*;/g, replacement: '$1="$2"' },
      { pattern: /(\w+)='([^']*)'\s*;/g, replacement: "$1='$2'" },
      // Fix className assignments with semicolons
      { pattern: /className="([^"]*)"\s*;/g, replacement: 'className="$1"' },
      { pattern: /className='([^']*)'\s*;/g, replacement: "className='$1'" },
      // Fix closing braces with semicolons (but not in object literals)
      { pattern: /\}\s*;(\s*[^,}])/g, replacement: '}$1' },
      // Fix closing parentheses with semicolons
      { pattern: /\)\s*;(\s*[^,}])/g, replacement: ')$1' },
      // Fix closing brackets with semicolons
      { pattern: /\]\s*;(\s*[^,}])/g, replacement: ']$1' },
      // Fix standalone semicolons at end of lines (not in comments or strings)
      { pattern: /^(\s*);\s*$/gm, replacement: '' },
      // Fix semicolons after closing braces in object literals
      { pattern: /\}\s*;\s*$/gm, replacement: '}' },
      // Fix semicolons after closing parentheses
      { pattern: /\)\s*;\s*$/gm, replacement: ')' },
      // Fix semicolons after closing brackets
      { pattern: /\]\s*;\s*$/gm, replacement: ']' },
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
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix merge conflict markers
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
      console.log(`Found merge conflicts in: ${filePath}`);
      
      // Simple strategy: keep the HEAD version and remove conflict markers
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          continue;
        } else if (line.includes('=======')) {
          continue;
        } else if (line.includes('>>>>>>> ')) {
          inConflict = false;
          continue;
        } else if (!inConflict) {
          fixedLines.push(line);
        }
      }
      
      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing merge conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all TSX files
function main() {
  console.log('Starting comprehensive syntax error fixes...');
  
  try {
    // Find all TSX files
    const result = execSync('find /workspace/app -name "*.tsx" -type f', { encoding: 'utf8' });
    const files = result.trim().split('\n').filter(f => f);
    
    console.log(`Found ${files.length} TSX files to process`);
    
    let fixedCount = 0;
    let conflictCount = 0;
    
    files.forEach(file => {
      if (fixSemicolonErrors(file)) {
        fixedCount++;
      }
      if (fixMergeConflicts(file)) {
        conflictCount++;
      }
    });
    
    console.log(`\nSummary:`);
    console.log(`- Fixed syntax errors in ${fixedCount} files`);
    console.log(`- Fixed merge conflicts in ${conflictCount} files`);
    console.log('Done!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();