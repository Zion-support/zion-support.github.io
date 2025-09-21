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

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Fix array/object syntax errors - replace semicolons with commas in arrays and objects
    content = content.replace(/;\s*(\])/g, ', $1'); // Array elements
    content = content.replace(/;\s*(\})/g, ', $1'); // Object properties
    content = content.replace(/;\s*(\]\s*)/g, '$1'); // Array closing
    content = content.replace(/;\s*(\}\s*)/g, '$1'); // Object closing
    
    // Fix specific patterns that are common
    content = content.replace(/:\s*'([^']*)';\s*$/gm, ": '$1',"); // Object property values
    content = content.replace(/\{\s*label:\s*"([^"]*)",\s*value:\s*"([^"]*)"\s*};/g, '{ label: "$1", value: "$2" },');
    content = content.replace(/\{\s*icon:\s*([^;]+);/g, '{ icon: $1,');
    content = content.replace(/\{\s*title:\s*"([^"]*)",\s*description:\s*"([^"]*)"\s*};/g, '{ title: "$1", description: "$2" },');
    content = content.replace(/\{\s*title:\s*"([^"]*)",\s*description:\s*'([^']*)'\s*};/g, '{ title: "$1", description: "$2" },');
    
    // Fix string array elements
    content = content.replace(/'\s*;\s*$/gm, "',");
    content = content.replace(/"\s*;\s*$/gm, '",');
    
    // Fix object property declarations
    content = content.replace(/(\w+):\s*([^;,\n]+);\s*$/gm, '$1: $2,');
    
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