#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed closing tags with semicolons
    const fixes = [
      // Fix patterns like "Text; </" -> "Text"
      {
        pattern: /([^<>\s][^<>]*);\s*<\/\s*<([^>]+)>/g,
        replacement: '$1\n          </$2>'
      },
      // Fix patterns like "Text; </" -> "Text"
      {
        pattern: /([^<>\s][^<>]*);\s*<\/\s*$/gm,
        replacement: '$1'
      },
      // Fix patterns like "Text; </" -> "Text"
      {
        pattern: /([^<>\s][^<>]*);\s*<\/\s*<([^>]+)>/g,
        replacement: '$1\n          </$2>'
      },
      // Fix orphaned closing tags
      {
        pattern: /^\s*<\/[^>]+>\s*$/gm,
        replacement: ''
      },
      // Fix malformed JSX with unexpected characters
      {
        pattern: /(\s+)<\/[^>]+>\s*[^<\s][^<]*<\/[^>]+>/g,
        replacement: (match) => {
          const cleanMatch = match.replace(/[^<\s>\/]+<\/[^>]+>/, '');
          return cleanMatch;
        }
      },
      // Fix broken JSX attributes
      {
        pattern: /(\s+)<\/[^>]+>\s*;\s*<\/[^>]+>/g,
        replacement: (match) => {
          const parts = match.split(';');
          if (parts.length === 2) {
            return parts[0] + parts[1];
          }
          return match;
        }
      }
    ];
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix broken h2 tags
      {
        pattern: /(\s+)<h2[^>]*>([^<]+);\s*<\/\s*<([^>]+)>/g,
        replacement: '$1<h2$2>$3</h2>'
      },
      // Fix broken p tags
      {
        pattern: /(\s+)<p[^>]*>([^<]+);\s*<\/\s*<([^>]+)>/g,
        replacement: '$1<p$2>$3</p>'
      },
      // Fix broken div tags
      {
        pattern: /(\s+)<div[^>]*>([^<]+);\s*<\/\s*<([^>]+)>/g,
        replacement: '$1<div$2>$3</div>'
      },
      // Fix broken span tags
      {
        pattern: /(\s+)<span[^>]*>([^<]+);\s*<\/\s*<([^>]+)>/g,
        replacement: '$1<span$2>$3</span>'
      },
      // Fix broken button tags
      {
        pattern: /(\s+)<button[^>]*>([^<]+);\s*<\/\s*<([^>]+)>/g,
        replacement: '$1<button$2>$3</button>'
      }
    ];
    
    specificFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles() {
  try {
    const { execSync } = require('child_process');
    const result = execSync(
      'find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | head -50',
      { encoding: 'utf8' }
    );
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    console.log('Error finding source files');
    return [];
  }
}

// Main execution
console.log('Starting JSX syntax error fixes...');

const sourceFiles = findSourceFiles();
console.log(`Found ${sourceFiles.length} source files to check`);

let fixedCount = 0;
let errorCount = 0;

sourceFiles.forEach(filePath => {
  if (fixJSXSyntax(filePath)) {
    console.log(`Fixed JSX syntax errors in: ${filePath}`);
    fixedCount++;
  }
});

console.log(`\nJSX syntax fix complete:`);
console.log(`- Files processed: ${sourceFiles.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);