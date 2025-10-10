#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors after merge conflict resolution
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common patterns that cause syntax errors
    const fixes = [
      // Fix malformed JSX closing tags
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
        pattern: /(\s+)<\/h1>\s*<\/button>/g,
        replacement: '$1</h1>'
      },
      {
        pattern: /(\s+)<\/h2>\s*<\/button>/g,
        replacement: '$1</h2>'
      },
      {
        pattern: /(\s+)<\/h3>\s*<\/button>/g,
        replacement: '$1</h3>'
      },
      {
        pattern: /(\s+)<\/p>\s*<\/button>/g,
        replacement: '$1</p>'
      },
      {
        pattern: /(\s+)<\/button>\s*<\/h1>/g,
        replacement: '$1</h1>'
      },
      {
        pattern: /(\s+)<\/button>\s*<\/h2>/g,
        replacement: '$1</h2>'
      },
      {
        pattern: /(\s+)<\/button>\s*<\/h3>/g,
        replacement: '$1</h3>'
      },
      {
        pattern: /(\s+)<\/button>\s*<\/p>/g,
        replacement: '$1</p>'
      },
      
      // Fix malformed closing tags with semicolons
      {
        pattern: /(\s+)<\/div>\s*;\s*<\/p>/g,
        replacement: '$1</p>'
      },
      {
        pattern: /(\s+)<\/p>\s*;\s*<\/div>/g,
        replacement: '$1</div>'
      },
      {
        pattern: /(\s+)<\/span>\s*;\s*<\/button>/g,
        replacement: '$1</button>'
      },
      {
        pattern: /(\s+)<\/button>\s*;\s*<\/span>/g,
        replacement: '$1</span>'
      },
      
      // Fix orphaned semicolons
      {
        pattern: /;\s*<\/[^>]+>/g,
        replacement: (match) => match.replace(';', '')
      },
      
      // Fix malformed JSX expressions
      {
        pattern: /(\s+)<\/React\.Fragment>\s*;\s*<\/[^>]+>/g,
        replacement: '$1</React.Fragment>'
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
      },
      
      // Fix broken closing tags with extra characters
      {
        pattern: /(\s+)<\/[^>]+>\s*[^<]*<\/[^>]+>/g,
        replacement: (match) => {
          const tagMatch = match.match(/(\s+)(<\/[^>]+>)/);
          if (tagMatch) {
            return tagMatch[1] + tagMatch[2];
          }
          return match;
        }
      },
      
      // Fix malformed JSX with unexpected characters
      {
        pattern: /(\s+)<\/[^>]+>\s*[^<\s][^<]*<\/[^>]+>/g,
        replacement: (match) => {
          const cleanMatch = match.replace(/[^<\s>\/]+<\/[^>]+>/, '');
          return cleanMatch;
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
      // Fix Footer.tsx specific issues
      {
        pattern: /(\s+)<\/p>\s*<\/div>\s*<div className="flex space-x-6">/g,
        replacement: '$1</p>\n              <div className="flex space-x-6">'
      },
      {
        pattern: /Privacy Policy;\s*<\/\s*<a href="\/terms"/g,
        replacement: 'Privacy Policy\n                </a>\n                <a href="/terms"'
      },
      {
        pattern: /Terms of Service;\s*<\/\s*<\/div>/g,
        replacement: 'Terms of Service\n                </a>\n              </div>'
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
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
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
console.log('Starting syntax error fixes...');

const sourceFiles = findSourceFiles();
console.log(`Found ${sourceFiles.length} source files to check`);

let fixedCount = 0;
let errorCount = 0;

sourceFiles.forEach(filePath => {
  if (fixSyntaxErrors(filePath)) {
    console.log(`Fixed syntax errors in: ${filePath}`);
    fixedCount++;
  }
});

console.log(`\nSyntax fix complete:`);
console.log(`- Files processed: ${sourceFiles.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);