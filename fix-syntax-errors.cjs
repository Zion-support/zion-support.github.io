#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix unterminated string literals and JSX issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals with extra quotes
    const originalContent = content;
    content = content.replace(/from\s+['"`]([^'"`]+)['"`]''/g, "from '$1';");
    content = content.replace(/from\s+['"`]([^'"`]+)['"`]"/g, "from '$1';");
    content = content.replace(/import\s+([^'"`]+)\s+from\s+['"`]([^'"`]+)['"`]''/g, "import $1 from '$2';");
    content = content.replace(/import\s+([^'"`]+)\s+from\s+['"`]([^'"`]+)['"`]"/g, "import $1 from '$2';");
    
    // Fix 'use client' directive
    content = content.replace(/'use client;'/g, "'use client';");
    content = content.replace(/'use client'/g, "'use client';");
    
    // Fix JSX closing tags that are malformed
    content = content.replace(/<([^>]+)><\/\1>/g, '<$1></$1>');
    
    // Fix unterminated comments
    content = content.replace(/\/\/\s*([^'\n]*?)'$/gm, '// $1');
    
    // Remove trailing quotes at end of file
    content = content.replace(/'$/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  // Find all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**'] });
    
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }

  console.log(`\nFixed ${totalFixed} files`);
}

main().catch(console.error);