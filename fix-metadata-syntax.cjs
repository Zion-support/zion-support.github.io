const fs = require('fs');
const { glob } = require('glob');

async function fixMetadataSyntax() {
  try {
    const files = await glob('app/**/*.{ts,tsx}');
    console.log(`Found ${files.length} files to process`);

    let fixedCount = 0;

    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        const originalContent = content;

        // Fix 1: Add missing commas in metadata objects
        // Pattern: title: 'value'\n  description: -> title: 'value',\n  description:
        content = content.replace(
          /(\w+):\s*([^,\n]+)\n\s+(\w+):/g,
          '$1: $2,\n  $3:'
        );

        // Fix 2: Fix object properties without commas
        // Pattern: icon: Brain title: -> icon: Brain,\n      title:
        content = content.replace(
          /(\w+):\s*([^,\n]+)\s+(\w+):/g,
          '$1: $2,\n      $3:'
        );

        // Fix 3: Fix array properties without commas
        // Pattern: benefits: ['item1', 'item2']\n    },\n    { -> benefits: ['item1', 'item2']\n    },\n    {
        content = content.replace(
          /(\w+):\s*\[([^\]]+)\]\n\s+\},\n\s+\{/g,
          '$1: [$2]\n    },\n    {'
        );

        // Fix 4: Fix openGraph objects
        // Pattern: openGraph: {\n    title: 'value'\n    description: -> openGraph: {\n    title: 'value',\n    description:
        content = content.replace(
          /(openGraph:\s*\{[^}]*?)(\w+):\s*([^,\n]+)\n\s+(\w+):/g,
          '$1$2: $3,\n    $4:'
        );

        // Fix 5: Fix twitter objects
        // Pattern: twitter: { card: 'value'\n    title: -> twitter: { card: 'value',\n    title:
        content = content.replace(
          /(twitter:\s*\{[^}]*?)(\w+):\s*([^,\n]+)\n\s+(\w+):/g,
          '$1$2: $3,\n    $4:'
        );

        // Fix 6: Fix general object properties
        // Pattern: prop: value\n  prop2: -> prop: value,\n  prop2:
        content = content.replace(
          /(\w+):\s*([^,\n}]+)\n\s+(\w+):/g,
          '$1: $2,\n  $3:'
        );

        // Fix 7: Fix array elements
        // Pattern: 'item1'\n      'item2' -> 'item1',\n      'item2'
        content = content.replace(
          /'([^']+)'\n\s+'([^']+)'/g,
          "'$1',\n      '$2'"
        );

        // Fix 8: Fix object closing braces
        // Pattern: }\n  } -> },\n  }
        content = content.replace(
          /\}\n\s+\}/g,
          '},\n  }'
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

fixMetadataSyntax();