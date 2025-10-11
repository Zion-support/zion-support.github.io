#!/usr/bin/env node

const fs = require('fs');

// Function to fix Navigation.tsx structure issues
function fixNavigationStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix specific patterns that are causing errors
    const fixes = [
      // Fix misplaced closing tags
      {
        pattern: /<\/div>\s*<\/div>\s*<\/div>/g,
        replacement: '</div>\n                </div>\n              </div>'
      },
      
      // Fix misplaced closing tags
      {
        pattern: /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g,
        replacement: '</div>\n                </div>\n              </div>\n            </div>'
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
      console.log(`Fixed navigation structure in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting navigation structure fixes...');

if (fixNavigationStructure('./app/components/Navigation.tsx')) {
  console.log('Navigation structure fixes complete');
} else {
  console.log('No navigation structure fixes needed');
}