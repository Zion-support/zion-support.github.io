const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixDestructuringErrors() {
  try {
    // Find all TypeScript/TSX files in the components directory
    const files = await glob('app/components/**/*.{ts,tsx}');
    
    console.log(`Found ${files.length} files to process`);

    let fixedCount = 0;

    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix the main destructuring issue: (_{ ... }) -> ({ ... })
        const originalContent = content;
        
        // Pattern 1: (_{ prop1, prop2 }) -> ({ prop1, prop2 })
        content = content.replace(
          /\(\s*_\s*\{\s*([^}]+)\s*\}\s*\)/g,
          '({ $1 })'
        );

        // Pattern 2: (_{ prop1 = '', prop2 }) -> ({ prop1 = '', prop2 })
        content = content.replace(
          /\(\s*_\s*\{\s*([^}]+)\s*\}\s*\)/g,
          '({ $1 })'
        );

        // Pattern 3: Fix any remaining underscore patterns
        content = content.replace(
          /\(\s*_\s*\)/g,
          '()'
        );

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
          fixedCount++;
          modified = true;
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }

    console.log(`\nFixed ${fixedCount} files`);
  } catch (error) {
    console.error('Error:', error);
  }
}

fixDestructuringErrors();