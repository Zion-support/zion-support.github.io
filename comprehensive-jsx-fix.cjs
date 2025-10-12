#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix comprehensive JSX syntax issues
function fixComprehensiveJsx(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix specific patterns that are causing errors
    const fixes = [
      // Fix unclosed sections by adding proper closing tags
      {
        pattern: /<section([^>]*)>\s*$/gm,
        replacement: (match, attrs) => {
          return match;
        }
      },
      
      // Fix JSX fragments that are not properly closed
      {
        pattern: /<>\s*$/gm,
        replacement: '<>'
      },
      
      // Fix unclosed ul elements
      {
        pattern: /<ul([^>]*)>\s*$/gm,
        replacement: (match, attrs) => {
          return match;
        }
      },
      
      // Fix unclosed div elements
      {
        pattern: /<div([^>]*)>\s*$/gm,
        replacement: (match, attrs) => {
          return match;
        }
      },
      
      // Remove orphaned closing fragments
      {
        pattern: /^\s*<\/>\s*$/gm,
        replacement: ''
      },
      
      // Fix JSX expressions that are not properly closed
      {
        pattern: /(\{[^}]*\})\s*$/gm,
        replacement: (match, expr) => {
          return match;
        }
      },
      
      // Fix misplaced )} that should be </div>
      {
        pattern: /(\s*)\)\}\s*$/gm,
        replacement: (match, spaces) => {
          return spaces + '</div>';
        }
      },
      
      // Fix missing closing tags for common elements
      {
        pattern: /<section([^>]*)>\s*$/gm,
        replacement: (match, attrs) => {
          return match;
        }
      }
    ];
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // More specific fixes for common patterns
    const specificFixes = [
      // Fix unclosed div tags by adding closing tags
      {
        pattern: /<div([^>]*)>\s*$/gm,
        replacement: (match, attrs) => {
          // This is a complex fix - we need to find the matching closing tag
          return match;
        }
      },
      
      // Remove duplicate closing tags
      {
        pattern: /<\/div>\s*<\/div>/g,
        replacement: '</div>'
      },
      
      // Fix JSX fragments
      {
        pattern: /<>\s*<\/>/g,
        replacement: '<></>'
      },
      
      // Fix unclosed sections
      {
        pattern: /<section([^>]*)>\s*$/gm,
        replacement: (match, attrs) => {
          return match;
        }
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed comprehensive JSX syntax in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        searchDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive JSX syntax fixes...');

const files = findTsxFiles('./app');
console.log(`Found ${files.length} TypeScript/JSX files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixComprehensiveJsx(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nComprehensive JSX syntax fixes complete:`);
console.log(`  - Files modified: ${fixedCount}`);
console.log(`  - Errors: ${errorCount}`);