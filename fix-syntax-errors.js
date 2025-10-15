#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common fixes for syntax errors
const fixes = [
  // Fix JSX fragment issues
  {
    pattern: /<>(\s*<div[^>]*>[\s\S]*?)(\s*<\/div>\s*)(?!\s*<\/>)/g,
    replacement: '<>$1$2</>'
  },
  // Fix missing closing tags
  {
    pattern: /<div([^>]*)>([^<]*(?:<[^/][^>]*>[^<]*)*?)(?!\s*<\/div>)/g,
    replacement: '<div$1>$2</div>'
  },
  // Fix malformed className attributes
  {
    pattern: /className="([^"]*?)([a-zA-Z])([a-zA-Z])/g,
    replacement: 'className="$1$2 $3"'
  },
  // Fix missing spaces in className
  {
    pattern: /className="([^"]*?)([a-zA-Z])([a-zA-Z])([a-zA-Z])/g,
    replacement: 'className="$1$2 $3$4"'
  },
  // Fix unterminated strings
  {
    pattern: /"([^"]*?)([^"]*?)$/gm,
    replacement: '"$1$2"'
  },
  // Fix missing semicolons
  {
    pattern: /(\w+)\s*$/gm,
    replacement: '$1;'
  }
];

// Files to fix
const filesToFix = [
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-infrastructure/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-network-optimization/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/5g-performance/page.tsx',
  'app/5g-reliability/page.tsx',
  'app/5g-scalability/page.tsx',
  'app/5g-security/page.tsx',
  'app/5g-support/page.tsx',
  'app/5g-testing/page.tsx',
  'app/5g-training/page.tsx',
  'app/5g-transformation/page.tsx',
  'app/5g-upgrade/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Specific fixes for common patterns
    content = content.replace(/className="([^"]*?)([a-zA-Z])([a-zA-Z])([a-zA-Z])/g, 'className="$1$2 $3$4"');
    content = content.replace(/className="([^"]*?)([a-zA-Z])([a-zA-Z])/g, 'className="$1$2 $3"');
    content = content.replace(/className="([^"]*?)([a-zA-Z])/g, 'className="$1$2"');
    
    // Fix missing closing tags
    content = content.replace(/(<div[^>]*>)([^<]*(?:<[^/][^>]*>[^<]*)*?)(?!\s*<\/div>)/g, '$1$2</div>');
    
    // Fix JSX fragments
    content = content.replace(/<>(\s*<div[^>]*>[\s\S]*?)(\s*<\/div>\s*)(?!\s*<\/>)/g, '<>$1$2</>');
    
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

// Fix all files
let fixedCount = 0;
filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} files`);