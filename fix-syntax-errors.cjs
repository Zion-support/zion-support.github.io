#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix semicolons in wrong places
  { pattern: /;\s*const\s+/g, replacement: ';\nconst ' },
  { pattern: /;\s*let\s+/g, replacement: ';\nlet ' },
  { pattern: /;\s*var\s+/g, replacement: ';\nvar ' },
  { pattern: /;\s*function\s+/g, replacement: ';\nfunction ' },
  { pattern: /;\s*export\s+/g, replacement: ';\nexport ' },
  { pattern: /;\s*import\s+/g, replacement: ';\nimport ' },
  
  // Fix object syntax
  { pattern: /{\s*;\s*/g, replacement: '{\n  ' },
  { pattern: /;\s*}/g, replacement: '\n}' },
  { pattern: /,\s*;\s*/g, replacement: ',\n  ' },
  
  // Fix function parameters
  { pattern: /\(\s*;\s*/g, replacement: '(\n  ' },
  { pattern: /;\s*\)/g, replacement: '\n)' },
  
  // Fix array syntax
  { pattern: /\[\s*;\s*/g, replacement: '[\n  ' },
  { pattern: /;\s*\]/g, replacement: '\n]' },
  
  // Fix comments
  { pattern: /\/\/\s*;\s*/g, replacement: '// ' },
  
  // Fix missing commas in objects
  { pattern: /}\s*{/g, replacement: '},\n  {' },
  { pattern: /}\s*\[/g, replacement: '},\n  [' },
  { pattern: /\]\s*{/g, replacement: '],\n  {' },
  { pattern: /\]\s*\[/g, replacement: '],\n  [' },
  
  // Fix missing commas in arrays
  { pattern: /}\s*}/g, replacement: '},\n  }' },
  { pattern: /\]\s*}/g, replacement: '],\n  }' },
  { pattern: /}\s*\]/g, replacement: '},\n  ]' },
  { pattern: /\]\s*\]/g, replacement: '],\n  ]' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', 'dist', 'build', '.git'].includes(file)) {
        fixedCount += processDirectory(fullPath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed ${fixedCount} files`);