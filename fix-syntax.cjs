const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixSyntaxErrors() {
  try {
    const files = await glob('app/**/*.tsx', { cwd: __dirname });
    
    files.forEach(file => {
      const filePath = path.join(__dirname, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix common patterns
        const patterns = [
          // Fix extra semicolons and parentheses in map functions
          {
            pattern: /(\s+)\)\);\s*$/gm,
            replacement: '$1))'
          },
          // Fix missing closing braces before export
          {
            pattern: /(\s+)\)\s*export\s+default/gm,
            replacement: '$1);\n};\n\nexport default'
          },
          // Fix missing closing braces in React.Fragment
          {
            pattern: /(\s+)\)\s*export\s+default/gm,
            replacement: '$1);\n};\n\nexport default'
          }
        ];

        patterns.forEach(({ pattern, replacement }) => {
          const newContent = content.replace(pattern, replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
          }
        });

        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed: ${file}`);
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    });

    console.log('Syntax fixing completed');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fixSyntaxErrors();