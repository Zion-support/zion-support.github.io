#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix missing closing brackets on main tags
  {
    pattern: /<main className="[^"]*"[^>]*>\s*{\/\* Hero Section \*\/}/g,
    replacement: '<main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        {/* Hero Section */}'
  },
  
  // Fix malformed meta tags
  {
    pattern: /<meta name="description" content="[^"]*"[^>]*>/g,
    replacement: (match) => {
      if (!match.includes('/>')) {
        return match.replace('>', ' />');
      }
      return match;
    }
  },
  
  // Fix malformed className attributes
  {
    pattern: /className="[^"]*m,\s*d:[^"]*"/g,
    replacement: (match) => {
      return match.replace(/m,\s*d:/g, 'md:');
    }
  },
  
  // Fix malformed div tags
  {
    pattern: /<div className="[^"]*"[^>]*>\s*<div className="[^"]*"[^>]*>\s*<div className="[^"]*"[^>]*>\s*<h2 className="[^"]*"[^>]*>\s*<p className="[^"]*"[^>]*>\s*[^<]*$/gm,
    replacement: (match) => {
      return match.replace(/(<div[^>]*>)\s*(<div[^>]*>)\s*(<div[^>]*>)\s*(<h2[^>]*>)\s*(<p[^>]*>)\s*([^<]*)$/gm, '$1\n            $2\n              $3\n                $4\n                $5\n                  $6')
    }
  },
  
  // Fix missing closing brackets on div tags
  {
    pattern: /<div className="[^"]*"[^>]*>\s*<div className="[^"]*"[^>]*>\s*<h2 className="[^"]*"[^>]*>\s*<p className="[^"]*"[^>]*>\s*[^<]*$/gm,
    replacement: (match) => {
      return match.replace(/(<div[^>]*>)\s*(<div[^>]*>)\s*(<h2[^>]*>)\s*(<p[^>]*>)\s*([^<]*)$/gm, '$1\n            $2\n              $3\n                $4\n                  $5')
    }
  }
];

// Find all TSX files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} TSX files to process...`);

let fixedFiles = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Apply fixes
  fixes.forEach(fix => {
    if (typeof fix.replacement === 'function') {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    } else {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
  });
  
  // Write back if modified
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedFiles++;
  }
});

console.log(`\nFixed ${fixedFiles} files out of ${files.length} total files.`);
=======

console.log('🔧 Starting syntax error fixes...');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let hasChanges = false;

    // Fix 1: Missing closing > in div tags
    content = content.replace(/className="([^"]*)"\s*$/gm, (match, className) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 2: Missing closing > in button tags
    content = content.replace(/className="([^"]*)"\s*$/gm, (match, className) => {
      if (!match.includes('>') && match.includes('button')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 3: Fix missing closing tags for buttons
    content = content.replace(/<button([^>]*)>\s*([^<]+)\s*<([^>]*)>/g, (match, buttonAttrs, text, iconAttrs) => {
      if (!match.includes('</button>')) {
        hasChanges = true;
        return `<button${buttonAttrs}>${text}<${iconAttrs}></button>`;
      }
      return match;
    });

    // Fix 4: Fix missing closing tags for divs
    content = content.replace(/<div([^>]*)>\s*$/gm, (match, divAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 5: Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)"\s*$/gm, (match, className) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 6: Fix missing closing tags in general
    content = content.replace(/<(\w+)([^>]*)\s*$/gm, (match, tagName, attrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 7: Fix specific patterns that are common
    content = content.replace(/flex flex-col sm: flex-row/g, 'flex flex-col sm:flex-row');
    content = content.replace(/sm: flex-row/g, 'sm:flex-row');

    // Fix 8: Fix missing closing tags for specific elements
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
>>>>>>> cursor/fix-errors-and-merge-to-main-f0fb
