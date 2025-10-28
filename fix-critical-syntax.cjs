const fs = require('fs');
const { glob } = require('glob');

async function fixCriticalSyntax() {
  try {
    const files = await glob('app/**/*.{ts,tsx}');
    console.log(`Found ${files.length} files to process`);

    let fixedCount = 0;

    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        const originalContent = content;

        // Fix 1: Fix malformed import statements with colons
        // Pattern: import React from: 'react'; -> import React from 'react';
        content = content.replace(
          /import\s+([^{}]+)\s+from:\s*([^;]+);/g,
          'import $1 from $2;'
        );

        // Fix 2: Fix malformed import statements with colons in destructuring
        // Pattern: import { A, B } from: 'module'; -> import { A, B } from 'module';
        content = content.replace(
          /import\s+\{([^}]+)\}\s+from:\s*([^;]+);/g,
          "import {$1} from $2;"
        );

        // Fix 3: Fix object properties with trailing commas
        // Pattern: openGraph: {, -> openGraph: {
        content = content.replace(
          /(\w+):\s*\{\s*,/g,
          '$1: {'
        );

        // Fix 4: Fix object properties without colons
        // Pattern: title 'value' -> title: 'value'
        content = content.replace(
          /(\w+)\s+'([^']+)'/g,
          "$1: '$2'"
        );

        // Fix 5: Fix object properties without colons (double quotes)
        // Pattern: title "value" -> title: "value"
        content = content.replace(
          /(\w+)\s+"([^"]+)"/g,
          '$1: "$2"'
        );

        // Fix 6: Fix array elements without commas
        // Pattern: 'item1' 'item2' -> 'item1', 'item2'
        content = content.replace(
          /'([^']+)'\s+'([^']+)'/g,
          "'$1', '$2'"
        );

        // Fix 7: Fix object closing braces
        // Pattern: }\n  } -> },\n  }
        content = content.replace(
          /\}\n\s+\}/g,
          '},\n  }'
        );

        // Fix 8: Fix missing commas in object properties
        // Pattern: prop: value\n  prop2: -> prop: value,\n  prop2:
        content = content.replace(
          /(\w+):\s*([^,\n}]+)\n\s+(\w+):/g,
          '$1: $2,\n  $3:'
        );

        // Fix 9: Fix malformed object syntax
        // Pattern: { prop: value, } -> { prop: value }
        content = content.replace(
          /\{\s*([^}]+),\s*\}/g,
          '{ $1 }'
        );

        // Fix 10: Fix object properties with missing colons
        // Pattern: prop 'value' -> prop: 'value'
        content = content.replace(
          /(\w+)\s+'([^']+)'/g,
          "$1: '$2'"
        );

        // Fix 11: Fix object properties with missing colons (double quotes)
        // Pattern: prop "value" -> prop: "value"
        content = content.replace(
          /(\w+)\s+"([^"]+)"/g,
          '$1: "$2"'
        );

        // Fix 12: Fix type annotations with colons
        // Pattern: export const metadata: Metadata = {, -> export const metadata: Metadata = {
        content = content.replace(
          /(\w+):\s*(\w+)\s*=\s*\{\s*,/g,
          '$1: $2 = {'
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

fixCriticalSyntax();