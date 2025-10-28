const fs = require('fs');
const { glob } = require('glob');

async function fixImportsAndObjects() {
  try {
    const files = await glob('app/**/*.{ts,tsx}');
    console.log(`Found ${files.length} files to process`);

    let fixedCount = 0;

    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        const originalContent = content;

        // Fix 1: Fix malformed import statements
        // Pattern: import { A B C D } from -> import { A, B, C, D } from
        content = content.replace(
          /import\s*\{\s*([^}]+)\s*\}\s*from/g,
          (match, imports) => {
            const cleanImports = imports
              .split(/\s+/)
              .filter(Boolean)
              .join(', ');
            return `import { ${cleanImports} } from`;
          }
        );

        // Fix 2: Fix object properties with trailing commas
        // Pattern: openGraph: {, -> openGraph: {
        content = content.replace(
          /(\w+):\s*\{\s*,/g,
          '$1: {'
        );

        // Fix 3: Fix object properties without colons
        // Pattern: title 'value' -> title: 'value'
        content = content.replace(
          /(\w+)\s+'([^']+)'/g,
          "$1: '$2'"
        );

        // Fix 4: Fix object properties without colons (double quotes)
        // Pattern: title "value" -> title: "value"
        content = content.replace(
          /(\w+)\s+"([^"]+)"/g,
          '$1: "$2"'
        );

        // Fix 5: Fix array elements without commas
        // Pattern: 'item1' 'item2' -> 'item1', 'item2'
        content = content.replace(
          /'([^']+)'\s+'([^']+)'/g,
          "'$1', '$2'"
        );

        // Fix 6: Fix object closing braces
        // Pattern: }\n  } -> },\n  }
        content = content.replace(
          /\}\n\s+\}/g,
          '},\n  }'
        );

        // Fix 7: Fix missing commas in object properties
        // Pattern: prop: value\n  prop2: -> prop: value,\n  prop2:
        content = content.replace(
          /(\w+):\s*([^,\n}]+)\n\s+(\w+):/g,
          '$1: $2,\n  $3:'
        );

        // Fix 8: Fix malformed object syntax
        // Pattern: { prop: value, } -> { prop: value }
        content = content.replace(
          /\{\s*([^}]+),\s*\}/g,
          '{ $1 }'
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

fixImportsAndObjects();