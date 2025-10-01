const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific errors we're seeing
    const fixes = [
      // Fix object properties with semicolons instead of commas
      { pattern: /(\w+);(\s*\w+:)/g, replacement: '$1,$2' },
      // Fix object properties ending with semicolons
      { pattern: /(\w+);\s*}/g, replacement: '$1\n  }' },
      // Fix trailing commas in variable declarations
      { pattern: /const\s+([^=]+)=\s*([^,]+),\s*$/gm, replacement: 'const $1= $2;' },
      // Fix Content-Type headers
      { pattern: /Content-Type([a-zA-Z\/\-]+)/g, replacement: 'Content-Type", "$1' },
      // Fix object literal syntax issues
      { pattern: /}\),\s*$/gm, replacement: '});' },
      // Fix missing commas in object literals
      { pattern: /([^,\s])\s*(\w+:)/g, replacement: '$1,\n    $2' },
    ];

    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      fixSyntaxErrors(filePath);
    }
  }
}

// Process the pages/api directory
processDirectory('/workspace/pages/api');
console.log('Syntax fixes completed!');