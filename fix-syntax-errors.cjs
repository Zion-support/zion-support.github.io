const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix import statements with spaces
  { 
    pattern: /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]([^'"`]+)\s*-\s*([^'"`]+)['"`]/g,
    replacement: "import { $1 } from '$2-$3'"
  },
  // Fix import statements with .ts extension
  { 
    pattern: /from\s+['"`]([^'"`]+)\.ts['"`]/g,
    replacement: "from '$1'"
  },
  // Fix function declarations with incorrect syntax
  { 
    pattern: /export\s+(?:default\s+)?(?:React\.memo\s*\()?function\s+(\w+)\s*\(\.\.\.args\s*:\s*any\[\]\)\s*:\s*any\s*\{/g,
    replacement: "export default function $1() {"
  },
  // Fix useState calls with spaces
  { 
    pattern: /useState\s*\(\s*([^)]+)\s*\)\s*;/g,
    replacement: "useState($1);"
  },
  // Fix className with spaces
  { 
    pattern: /className\s*=\s*["'`]([^"'`]+)\s*-\s*([^"'`]+)["'`]/g,
    replacement: 'className="$1-$2"'
  },
  // Fix JSX attributes with spaces
  { 
    pattern: /(\w+)\s*-\s*(\w+)\s*=/g,
    replacement: '$1-$2='
  },
  // Fix array access with spaces
  { 
    pattern: /\[\s*([^\]]+)\s*\]/g,
    replacement: '[$1]'
  },
  // Fix object property access with spaces
  { 
    pattern: /\.\s*([^\s]+)/g,
    replacement: '.$1'
  },
  // Fix function calls with spaces
  { 
    pattern: /(\w+)\s*\(\s*([^)]+)\s*\)/g,
    replacement: '$1($2)'
  },
  // Fix template literals with spaces
  { 
    pattern: /\$\{\s*([^}]+)\s*\}/g,
    replacement: '${$1}'
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
    
    // Additional specific fixes
    content = content.replace(/import\s+React\s+from\s+['"`]react\.ts['"`]/g, "import React from 'react'");
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]framer\s*-\s*motion\.ts['"`]/g, "import { $1 } from 'framer-motion'");
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]lucide\s*-\s*react\.ts['"`]/g, "import { $1 } from 'lucide-react'");
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]react\s*-\s*router\s*-\s*dom\.ts['"`]/g, "import { $1 } from 'react-router-dom'");
    
    // Fix common JSX issues
    content = content.replace(/role\s*=\s*["'`]button["'`]/g, '');
    content = content.replace(/aria\s*-\s*label\s*=\s*["'`][^"'`]*["'`]/g, '');
    
    // Fix spacing issues in class names
    content = content.replace(/bg\s*-\s*([^\s]+)/g, 'bg-$1');
    content = content.replace(/text\s*-\s*([^\s]+)/g, 'text-$1');
    content = content.replace(/border\s*-\s*([^\s]+)/g, 'border-$1');
    content = content.replace(/rounded\s*-\s*([^\s]+)/g, 'rounded-$1');
    content = content.replace(/px\s*-\s*([^\s]+)/g, 'px-$1');
    content = content.replace(/py\s*-\s*([^\s]+)/g, 'py-$1');
    content = content.replace(/w\s*-\s*([^\s]+)/g, 'w-$1');
    content = content.replace(/h\s*-\s*([^\s]+)/g, 'h-$1');
    content = content.replace(/gap\s*-\s*([^\s]+)/g, 'gap-$1');
    content = content.replace(/mb\s*-\s*([^\s]+)/g, 'mb-$1');
    content = content.replace(/mt\s*-\s*([^\s]+)/g, 'mt-$1');
    content = content.replace(/ml\s*-\s*([^\s]+)/g, 'ml-$1');
    content = content.replace(/mr\s*-\s*([^\s]+)/g, 'mr-$1');
    
    if (content !== originalContent) {
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
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-source directories
      if (!['node_modules', '.git', '.next', 'out', 'dist'].includes(file)) {
        fixedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Start fixing from the src directory
console.log('Starting syntax fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);