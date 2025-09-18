#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting syntax error fixes...');

// Common syntax fixes
const fixes = [
  // Fix unclosed JSX tags
  {
    pattern: /<button([^>]*)>\s*([^<]*?)\s*$/gm,
    replacement: '<button$1>$2</button>',
    description: 'Fix unclosed button tags'
  },
  {
    pattern: /<div([^>]*)>\s*([^<]*?)\s*$/gm,
    replacement: '<div$1>$2</div>',
    description: 'Fix unclosed div tags'
  },
  {
    pattern: /<span([^>]*)>\s*([^<]*?)\s*$/gm,
    replacement: '<span$1>$2</span>',
    description: 'Fix unclosed span tags'
  },
  {
    pattern: /<a([^>]*)>\s*([^<]*?)\s*$/gm,
    replacement: '<a$1>$2</a>',
    description: 'Fix unclosed anchor tags'
  },
  {
    pattern: /<p([^>]*)>\s*([^<]*?)\s*$/gm,
    replacement: '<p$1>$2</p>',
    description: 'Fix unclosed paragraph tags'
  },
  {
    pattern: /<ul([^>]*)>\s*([^<]*?)\s*$/gm,
    replacement: '<ul$1>$2</ul>',
    description: 'Fix unclosed ul tags'
  },
  {
    pattern: /<Link([^>]*)>\s*([^<]*?)\s*$/gm,
    replacement: '<Link$1>$2</Link>',
    description: 'Fix unclosed Link tags'
  },
  {
    pattern: /<Select([^>]*)>\s*([^<]*?)\s*$/gm,
    replacement: '<Select$1>$2</Select>',
    description: 'Fix unclosed Select tags'
  },
  {
    pattern: /<Button([^>]*)>\s*([^<]*?)\s*$/gm,
    replacement: '<Button$1>$2</Button>',
    description: 'Fix unclosed Button tags'
  },
  // Fix missing commas in object literals
  {
    pattern: /(\w+):\s*([^,\n}]+)\s*$/gm,
    replacement: '$1: $2,',
    description: 'Fix missing commas in object properties'
  },
  // Fix React import issues
  {
    pattern: /^import React from 'react';$/gm,
    replacement: "import React from 'react';",
    description: 'Fix React imports'
  },
  // Fix semicolon issues
  {
    pattern: /;;+/g,
    replacement: ';',
    description: 'Fix multiple semicolons'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const originalContent = content;
      content = content.replace(fix.pattern, fix.replacement);
      if (content !== originalContent) {
        modified = true;
        console.log(`  ✓ ${fix.description} in ${path.basename(filePath)}`);
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`  ✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Get list of problematic files from the lint output
const problematicFiles = [
  'src/pages/QuantumNeuralFusion2035.tsx',
  'src/pages/QuantumNeuralInterface2026.tsx',
  'src/pages/QuantumNeuralNetworkPlatform.tsx',
  'src/pages/QuantumReality2026.tsx',
  'src/pages/RequestQuote.tsx',
  'src/pages/Resources.tsx',
  'src/pages/Services.tsx',
  'src/pages/Settings.tsx',
  'src/pages/Solutions.tsx',
  'src/pages/Talent.tsx',
  'src/pages/Terms.tsx',
  'src/pages/Training.tsx',
  'src/pages/Unauthorized.tsx',
  'src/pages/Wishlist.tsx',
  'src/utils/errorHandler.ts',
  'src/utils/notifications.ts',
  'src/utils/security.ts',
  'src/setupTests.ts'
];

let fixedCount = 0;
const totalFiles = problematicFiles.length;

console.log(`📁 Processing ${totalFiles} problematic files...`);

problematicFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`\n🔍 Fixing ${filePath}...`);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log(`\n✅ Fixed ${fixedCount} out of ${totalFiles} files`);

// Try to run a quick lint check on a few key files
console.log('\n🧪 Testing fixes...');
const testFiles = [
  'src/pages/RequestQuote.tsx',
  'src/pages/Services.tsx',
  'src/pages/Settings.tsx'
];

testFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    try {
      execSync(`npx eslint ${fullPath} --no-eslintrc --config .eslintrc.json`, { stdio: 'pipe' });
      console.log(`  ✓ ${filePath} - No syntax errors`);
    } catch (error) {
      console.log(`  ⚠️  ${filePath} - Still has issues`);
    }
  }
});

console.log('\n🎉 Syntax error fixing completed!');