#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Patterns to fix
const fixes = [
  // Fix malformed JSX elements like " />" and " />"
  {
    pattern: /^\s*\/>\s*$/gm,
    replacement: ''
  },
  // Fix malformed icon properties like "icon:  />,"
  {
    pattern: /icon:\s*\/>,/g,
    replacement: 'icon: "🔮",'
  },
  // Fix malformed icon properties like "icon:  />"
  {
    pattern: /icon:\s*\/>/g,
    replacement: 'icon: "🔮"'
  },
  // Fix malformed JSX with incomplete elements
  {
    pattern: /^\s*\/>\s*$/gm,
    replacement: ''
  },
  // Fix lines that are just " />" or similar
  {
    pattern: /^\s*\/>\s*$/gm,
    replacement: ''
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    content = content.replace(/^\s*\/>\s*$/gm, '');
    content = content.replace(/icon:\s*\/>,/g, 'icon: "🔮",');
    content = content.replace(/icon:\s*\/>/g, 'icon: "🔮"');
    
    // Remove empty lines that might have been created
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  // Find all TypeScript/TSX files in src/components
  const pattern = 'src/components/**/*.{ts,tsx}';
  const files = await glob(pattern);

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);