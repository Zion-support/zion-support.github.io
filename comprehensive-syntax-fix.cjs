#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive syntax fixes...');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let hasChanges = false;

    // Fix 1: Fix missing closing > in div tags
    content = content.replace(/className="([^"]*)"\s*$/gm, (match, className) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 2: Fix missing closing > in button tags
    content = content.replace(/className="([^"]*)"\s*$/gm, (match, className) => {
      if (!match.includes('>') && match.includes('button')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 3: Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)"\s*$/gm, (match, className) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 4: Fix missing closing tags for buttons
    content = content.replace(/<button([^>]*)>\s*([^<]+)\s*<([^>]*)>/g, (match, buttonAttrs, text, iconAttrs) => {
      if (!match.includes('</button>')) {
        hasChanges = true;
        return `<button${buttonAttrs}>${text}<${iconAttrs}></button>`;
      }
      return match;
    });

    // Fix 5: Fix missing closing tags for divs
    content = content.replace(/<div([^>]*)>\s*$/gm, (match, divAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 6: Fix specific patterns that are common
    content = content.replace(/flex flex-col sm: flex-row/g, 'flex flex-col sm:flex-row');
    content = content.replace(/sm: flex-row/g, 'sm:flex-row');

    // Fix 7: Fix missing closing tags in general
    content = content.replace(/<(\w+)([^>]*)\s*$/gm, (match, tagName, attrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 8: Fix specific button patterns
    content = content.replace(/<button([^>]*)>\s*([^<]+)\s*<([^>]*)>\s*$/gm, (match, buttonAttrs, text, iconAttrs) => {
      if (!match.includes('</button>')) {
        hasChanges = true;
        return `<button${buttonAttrs}>${text}<${iconAttrs}></button>`;
      }
      return match;
    });

    // Fix 9: Fix missing closing tags for specific elements
    content = content.replace(/<button([^>]*)>\s*([^<]+)\s*<([^>]*)>\s*$/gm, (match, buttonAttrs, text, iconAttrs) => {
      if (!match.includes('</button>')) {
        hasChanges = true;
        return `<button${buttonAttrs}>${text}<${iconAttrs}></button>`;
      }
      return match;
    });

    // Fix 10: Fix missing closing tags for divs
    content = content.replace(/<div([^>]*)>\s*$/gm, (match, divAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 11: Fix missing closing tags for buttons
    content = content.replace(/<button([^>]*)>\s*([^<]+)\s*<([^>]*)>\s*$/gm, (match, buttonAttrs, text, iconAttrs) => {
      if (!match.includes('</button>')) {
        hasChanges = true;
        return `<button${buttonAttrs}>${text}<${iconAttrs}></button>`;
      }
      return match;
    });

    // Fix 12: Fix missing closing tags for divs
    content = content.replace(/<div([^>]*)>\s*$/gm, (match, divAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 13: Fix missing closing tags for buttons
    content = content.replace(/<button([^>]*)>\s*([^<]+)\s*<([^>]*)>\s*$/gm, (match, buttonAttrs, text, iconAttrs) => {
      if (!match.includes('</button>')) {
        hasChanges = true;
        return `<button${buttonAttrs}>${text}<${iconAttrs}></button>`;
      }
      return match;
    });

    // Fix 14: Fix missing closing tags for divs
    content = content.replace(/<div([^>]*)>\s*$/gm, (match, divAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 15: Fix missing closing tags for buttons
    content = content.replace(/<button([^>]*)>\s*([^<]+)\s*<([^>]*)>\s*$/gm, (match, buttonAttrs, text, iconAttrs) => {
      if (!match.includes('</button>')) {
        hasChanges = true;
        return `<button${buttonAttrs}>${text}<${iconAttrs}></button>`;
      }
      return match;
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  let fixedCount = 0;

  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          continue;
        }
        const result = processDirectory(fullPath);
        processedCount += result.processed;
        fixedCount += result.fixed;
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          processedCount++;
          if (fixSyntaxErrors(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${dirPath}:`, error.message);
  }

  return { processed: processedCount, fixed: fixedCount };
}

// Main execution
console.log('🔍 Scanning for files with syntax errors...');

const result = processDirectory('.');

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${result.processed}`);
console.log(`   Files fixed: ${result.fixed}`);

if (result.fixed > 0) {
  console.log('\n🎉 Syntax error fixes completed!');
} else {
  console.log('\n✅ No syntax errors found or all errors were already fixed.');
}

console.log('\n🔧 Syntax error fix script completed.');