const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common patterns
    const fixes = [
      // Fix misplaced code inside JSX return
      {
        pattern: /return\s*\(\s*<div[^>]*>\s*const\s+/g,
        replacement: 'const '
      },
      // Fix missing closing braces in object literals
      {
        pattern: /(\w+):\s*"([^"]*)"\s*,?\s*$/gm,
        replacement: (match, key, value) => {
          if (!match.includes('}')) {
            return `${key}: "${value}",`;
          }
          return match;
        }
      },
      // Fix unclosed JSX elements by adding proper structure
      {
        pattern: /<section[^>]*>(?![\s\S]*<\/section>)/g,
        replacement: (match) => {
          // This needs more sophisticated parsing, so we'll handle it case by case
          return match;
        }
      }
    ];
    
    // Apply basic fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);