#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix comprehensive syntax errors
function fixComprehensiveSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix semicolons after JSX closing tags
    const jsxSemicolonFix = content.replace(/;(\s*<\/[^>]+>)/g, '$1');
    if (jsxSemicolonFix !== content) {
      content = jsxSemicolonFix;
      modified = true;
    }
    
    // Fix semicolons after JSX elements
    const jsxElementSemicolonFix = content.replace(/(<\/[^>]+>);(\s*<[^>]+>)/g, '$1$2');
    if (jsxElementSemicolonFix !== content) {
      content = jsxElementSemicolonFix;
      modified = true;
    }
    
    // Fix broken closing tags with semicolons
    const brokenClosingTags = content.replace(/(<\/[^>]+>);(\s*<\/[^>]+>)/g, '$1$2');
    if (brokenClosingTags !== content) {
      content = brokenClosingTags;
      modified = true;
    }
    
    // Fix malformed JSX with unexpected characters
    const malformedJSX = content.replace(/(\s+)<\/[^>]+>\s*[^<\s][^<]*<\/[^>]+>/g, (match) => {
      const cleanMatch = match.replace(/[^<\s>\/]+<\/[^>]+>/, '');
      return cleanMatch;
    });
    if (malformedJSX !== content) {
      content = malformedJSX;
      modified = true;
    }
    
    // Fix orphaned semicolons at end of lines
    const orphanedSemicolons = content.replace(/;\s*$/gm, '');
    if (orphanedSemicolons !== content) {
      content = orphanedSemicolons;
      modified = true;
    }
    
    // Fix broken JSX attributes with semicolons
    const brokenAttributes = content.replace(/(\s+)<\/[^>]+>\s*;\s*<\/[^>]+>/g, (match) => {
      const parts = match.split(';');
      if (parts.length === 2) {
        return parts[0] + parts[1];
      }
      return match;
    });
    if (brokenAttributes !== content) {
      content = brokenAttributes;
      modified = true;
    }
    
    // Fix specific patterns that cause parsing errors
    const specificPatterns = [
      // Fix broken closing tags
      {
        pattern: /(\s+)<\/div>\s*<\/p>/g,
        replacement: '$1</p>'
      },
      {
        pattern: /(\s+)<\/p>\s*<\/div>/g,
        replacement: '$1</div>'
      },
      {
        pattern: /(\s+)<\/span>\s*<\/button>/g,
        replacement: '$1</button>'
      },
      {
        pattern: /(\s+)<\/button>\s*<\/span>/g,
        replacement: '$1</span>'
      },
      {
        pattern: /(\s+)<\/h[1-6]>\s*<\/button>/g,
        replacement: '$1</h1>'
      },
      {
        pattern: /(\s+)<\/button>\s*<\/h[1-6]>/g,
        replacement: '$1</h1>'
      },
      {
        pattern: /(\s+)<\/p>\s*<\/button>/g,
        replacement: '$1</p>'
      },
      {
        pattern: /(\s+)<\/button>\s*<\/p>/g,
        replacement: '$1</p>'
      }
    ];
    
    specificPatterns.forEach(fix => {
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
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with errors
function findFilesWithErrors() {
  try {
    const { execSync } = require('child_process');
    const result = execSync(
      'find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | head -100',
      { encoding: 'utf8' }
    );
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    console.log('Error finding source files');
    return [];
  }
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');

const sourceFiles = findFilesWithErrors();
console.log(`Found ${sourceFiles.length} source files to check`);

let fixedCount = 0;
let errorCount = 0;

sourceFiles.forEach(filePath => {
  if (fixComprehensiveSyntax(filePath)) {
    console.log(`Fixed syntax errors in: ${filePath}`);
    fixedCount++;
  }
});

console.log(`\nComprehensive syntax fix complete:`);
console.log(`- Files processed: ${sourceFiles.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);