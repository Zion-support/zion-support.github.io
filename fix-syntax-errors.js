const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript and JSX files
const files = glob.sync('**/*.{ts,tsx}', {
  ignore: [
    'node_modules/**',
    '.next/**',
    'out/**',
    'dist/**',
    'build/**',
    'scripts/**',
    'automation/**',
    '**/*.test.*',
    '**/test/**',
    '**/__tests__/**'
  ]
});

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;

  // Fix interface and type definitions
  content = content.replace(/interface\s+(\w+)\s*\{\s*([^}]+);\s*([^}]+)\s*\}/g, 'interface $1 {\n  $2;\n  $3;\n}');
  content = content.replace(/(\w+):\s*(\w+);\s*(\w+):/g, '$1: $2;\n  $3: '),
  // Fix function parameters with semicolons
  content = content.replace(/\(([^)]+);\s*([^)]+)\)/g, '($1, $2)');
  content = content.replace(/function\s+(\w+)\s*\(([^)]+);\s*([^)]+)\)/g, 'function $1($2, $3)');

  // Fix array and object syntax
  content = content.replace(/\[\s*([^]+);\s*([^\]]+)\s*\]/g, '[$1, $2]');
  content = content.replace(/\{\s*([^]+);\s*([^}]+)\s*\}/g, '{$1, $2}');

  // Fix quotes in strings
  content = content.replace(/"([^"]*)"([^"]*)"([^"]*)"/g, '"$1\'$2\'$3"');

  return content;
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    // Replace commas with semicolons at end of import statements
    content = content.replace(/import\s+[^;]+,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });
    
    // Fix function declarations with trailing commas
    content = content.replace(/(export\s+default\s+function\s+\w+\(\)\s*\{),/g, '$1');
    
    // Fix JSX return statements with trailing commas
    content = content.replace(/(return\s*\(),/g, '$1');
    
    // Fix closing parentheses with trailing commas
    content = content.replace(/\),\s*$/gm, ');');
    
    // Fix object/array trailing commas in JSX - fixed regex
    content = content.replace(/([}\]])),/g, '$1)');
    
    // Fix export statements with trailing commas
    content = content.replace(/export\s+default\s+[^;]+,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });
    
    // Fix const/let declarations with trailing commas
    content = content.replace(/(const|let|var)\s+\w+[^;]+,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files.`);