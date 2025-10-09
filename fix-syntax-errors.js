#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax error patterns and their fixes
const fixes = [
  // Fix missing commas in arrays/objects
  {
    pattern: /(\s+)(name|title|description|icon|role|image|bio):\s*['"][^'"]*['"],?\s*\n\s*(name|title|description|icon|role|image|bio):/g,
    replacement: '$1$2: $3,\n    $4:'
  },
  
  // Fix missing closing brackets/parentheses
  {
    pattern: /(\s+)(\w+):\s*['"][^'"]*['"],?\s*\n\s*(\w+):/g,
    replacement: '$1$2: $3,'
  },
  
  // Fix duplicate imports
  {
    pattern: /import\s+\{[^}]+\}\s+from\s+['"][^'"]+['"];\s*\n\s*import\s+\{[^}]+\}\s+from\s+['"][^'"]+['"];/g,
    replacement: (match) => {
      const lines = match.split('\n');
      const firstImport = lines[0];
      const secondImport = lines[1];
      
      // Extract unique imports
      const firstImports = firstImport.match(/\{([^}]+)\}/)[1].split(',').map(s => s.trim());
      const secondImports = secondImport.match(/\{([^}]+)\}/)[1].split(',').map(s => s.trim());
      
      const allImports = [...new Set([...firstImports, ...secondImports])];
      const source = firstImport.match(/from\s+(['"][^'"]+['"])/)[1];
      
      return `import { ${allImports.join(', ')} } from ${source};`;
    }
  },
  
  // Fix missing closing div tags
  {
    pattern: /(\s+)(<div[^>]*>)\s*\n\s*(<h1[^>]*>.*<\/h1>)\s*\n\s*(<p[^>]*>.*<\/p>)\s*\n\s*(<a[^>]*>.*<\/a>)\s*\n\s*(<\/div>)\s*\n\s*\);$/gm,
    replacement: '$1$2\n$1  $3\n$1  $4\n$1  $5\n$1$6\n$1);'
  },
  
  // Fix duplicate export statements
  {
    pattern: /export\s+default\s+\w+;\s*\n\s*export\s+default\s+\w+;/g,
    replacement: 'export default $1;'
  },
  
  // Fix missing semicolons after return statements
  {
    pattern: /(\s+)(return\s+\([^)]+\))\s*\n\s*(\}\);)/g,
    replacement: '$1$2;\n$1$3'
  },
  
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*\n\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g,
    replacement: 'const $1: React.FC = () => {'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes
    // Fix missing closing div in simple page components
    content = content.replace(
      /(\s+)(<div[^>]*>)\s*\n\s*(<div[^>]*>)\s*\n\s*(<h1[^>]*>.*<\/h1>)\s*\n\s*(<p[^>]*>.*<\/p>)\s*\n\s*(<a[^>]*>.*<\/a>)\s*\n\s*(<\/div>)\s*\n\s*\);$/gm,
      '$1$2\n$1  $3\n$1    $4\n$1    $5\n$1    $6\n$1  $7\n$1);'
    );
    
    // Fix missing closing div tags
    content = content.replace(
      /(\s+)(<div[^>]*>)\s*\n\s*(<div[^>]*>)\s*\n\s*(<h1[^>]*>.*<\/h1>)\s*\n\s*(<p[^>]*>.*<\/p>)\s*\n\s*(<a[^>]*>.*<\/a>)\s*\n\s*\);$/gm,
      '$1$2\n$1  $3\n$1    $4\n$1    $5\n$1    $6\n$1  $7\n$1);'
    );
    
    // Fix duplicate export statements
    content = content.replace(
      /export\s+default\s+(\w+);\s*\n\s*export\s+default\s+\w+;/g,
      'export default $1;'
    );
    
    // Fix missing closing brackets in arrays
    content = content.replace(
      /(\s+)(\w+):\s*['"][^'"]*['"],?\s*\n\s*(\w+):\s*['"][^'"]*['"],?\s*\n\s*(\w+):\s*['"][^'"]*['"],?\s*\n\s*(\w+):\s*['"][^'"]*['"],?\s*\n\s*(\w+):/g,
      '$1$2: $3,\n$1$4: $5,\n$1$6: $7,\n$1$8:'
    );
    
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

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files
  const files = await glob('src/**/*.{ts,tsx,js,jsx}');

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