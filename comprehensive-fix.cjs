const fs = require('fs');
const { glob } = require('glob');

async function fixAllSyntaxErrors() {
  try {
    const files = await glob('app/**/*.{ts,tsx}');
    console.log(`Found ${files.length} files to process`);

    let fixedCount = 0;

    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        const originalContent = content;

        // Fix 1: Malformed destructuring in function parameters
        // Pattern: (_{ prop1, prop2 }) -> ({ prop1, prop2 })
        content = content.replace(
          /\(\s*_\s*\{\s*([^}]+)\s*\}\s*\)/g,
          '({ $1 })'
        );

        // Fix 2: Fix malformed arrow function parameters
        // Pattern: _() => -> () =>
        content = content.replace(
          /\(\s*_\s*\)\s*=>/g,
          '() =>'
        );

        // Fix 3: Fix malformed type annotations in function parameters
        // Pattern: options:, Type, =, { -> options: Type = {
        content = content.replace(
          /(\w+):\s*([^,]+),\s*=\s*,\s*\{/g,
          '$1: $2 = {'
        );

        // Fix 4: Fix malformed forEach callbacks
        // Pattern: (entry:, Type) -> (entry: Type)
        content = content.replace(
          /\(\s*(\w+):\s*,\s*([^)]+)\)/g,
          '($1: $2)'
        );

        // Fix 5: Fix malformed destructuring in forEach
        // Pattern: (entry:, Type, &, {, prop?:, type, }) -> (entry: Type & { prop?: type })
        content = content.replace(
          /\(\s*(\w+):\s*,\s*([^,]+),\s*&\s*,\s*\{\s*,\s*([^}]+)\s*\}\s*\)/g,
          '($1: $2 & { $3 })'
        );

        // Fix 6: Fix malformed interface properties
        // Pattern: prop?:, type, -> prop?: type
        content = content.replace(
          /(\w+)\?:\s*,\s*([^,]+),\s*/g,
          '$1?: $2, '
        );

        // Fix 7: Fix malformed object destructuring
        // Pattern: { prop1, prop2, } -> { prop1, prop2 }
        content = content.replace(
          /\{\s*([^}]+),\s*\}\s*/g,
          '{ $1 }'
        );

        // Fix 8: Fix malformed array destructuring
        // Pattern: [ prop1, prop2, ] -> [ prop1, prop2 ]
        content = content.replace(
          /\[\s*([^\]]+),\s*\]\s*/g,
          '[ $1 ]'
        );

        // Fix 9: Fix malformed type annotations
        // Pattern: Type, -> Type
        content = content.replace(
          /([A-Z][a-zA-Z0-9]*)\s*,\s*/g,
          '$1 '
        );

        // Fix 10: Fix malformed function calls
        // Pattern: func(, arg) -> func(arg)
        content = content.replace(
          /\(\s*,\s*([^)]+)\)/g,
          '($1)'
        );

        // Fix 11: Fix malformed object properties
        // Pattern: prop: value, -> prop: value
        content = content.replace(
          /(\w+):\s*([^,]+),\s*$/gm,
          '$1: $2'
        );

        // Fix 12: Fix malformed array syntax
        // Pattern: [ item, ] -> [ item ]
        content = content.replace(
          /\[\s*([^,]+),\s*\]/g,
          '[ $1 ]'
        );

        // Fix 13: Fix malformed interface syntax
        // Pattern: interface Name { prop: type, } -> interface Name { prop: type }
        content = content.replace(
          /interface\s+(\w+)\s*\{\s*([^}]+),\s*\}/g,
          'interface $1 { $2 }'
        );

        // Fix 14: Fix malformed type definitions
        // Pattern: type Name = { prop: type, } -> type Name = { prop: type }
        content = content.replace(
          /type\s+(\w+)\s*=\s*\{\s*([^}]+),\s*\}/g,
          'type $1 = { $2 }'
        );

        // Fix 15: Fix malformed function parameters with trailing commas
        // Pattern: (param1, param2,) -> (param1, param2)
        content = content.replace(
          /\(\s*([^)]+),\s*\)/g,
          '($1)'
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

fixAllSyntaxErrors();