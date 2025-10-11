#!/usr/bin/env node

const fs = require('fs');

// Function to fix page.tsx structure issues
function fixPageStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix specific patterns that are causing errors
    const fixes = [
      // Fix misplaced closing tags
      {
        pattern: /<\/section>\s*<\/main>/g,
        replacement: '</main>'
      },
      
      // Fix misplaced closing tags
      {
        pattern: /<\/section>\s*<\/div>/g,
        replacement: '</div>'
      },
      
      // Fix misplaced closing tags
      {
        pattern: /<\/section>\s*<\/>/g,
        replacement: '</>'
      },
      
      // Fix unclosed JSX fragments
      {
        pattern: /<>\s*$/gm,
        replacement: '<>'
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
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed page structure in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting page structure fixes...');

if (fixPageStructure('./app/page.tsx')) {
  console.log('Page structure fixes complete');
} else {
  console.log('No page structure fixes needed');
}