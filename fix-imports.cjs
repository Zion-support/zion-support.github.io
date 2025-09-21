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
    
    // Fix import statements - replace commas with semicolons
    content = content.replace(/import\s+[^;]+,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });
    
    // Fix 'use client' directives
    content = content.replace(/'use client',/g, "'use client';");
    
    // Fix closing function syntax
    content = content.replace(/  \), }/g, '  );');
    content = content.replace(/  \),}/g, '  );');
    content = content.replace(/\), }/g, ');');
    content = content.replace(/\),}/g, ');');
    
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