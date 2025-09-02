#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Enhanced patterns to fix
const fixes = [
  // Fix malformed type annotations
  { pattern: /anykeyof/g, replacement: 'keyof' },
  { pattern: /any([^,]+)/g, replacement: '$1' },
  { pattern: /any([^:]+):/g, replacement: '$1:' },
  { pattern: /any([^;]+);/g, replacement: '$1;' },
  { pattern: /any([^,]+),/g, replacement: '$1,' },
  { pattern: /any([^}]+)}/g, replacement: '$1}' },
  { pattern: /any([^)]+)\)/g, replacement: '$1)' },
  
  // Fix malformed object properties
  { pattern: /:\s*{;/g, replacement: ': {' },
  { pattern: /:\s*{([^}]+);/g, replacement: ': { $1' },
  
  // Fix malformed function declarations
  { pattern: /\(\s*\)\s*=>\s*{/g, replacement: '() => {' },
  { pattern: /\(\s*\)\s*=>\s*void;/g, replacement: '() => void;' },
  
  // Fix malformed JSX
  { pattern: /<\/([^>]+)>/g, replacement: '</$1>' },
  
  // Fix malformed imports
  { pattern: /import:\s*{([^}]+)},\s*from,\s*'([^']+)'/g, replacement: "import { $1 } from '$2'" },
  { pattern: /import:\s*([^,]+),\s*from,\s*'([^']+)'/g, replacement: "import $1 from '$2'" },
  
  // Fix specific error patterns
  { pattern: /:\s*null\s*;/g, replacement: ': null;' },
  { pattern: /:\s*null\s*,/g, replacement: ': null,' },
  { pattern: /:\s*null\s*}/g, replacement: ': null}' },
  { pattern: /:\s*null\s*\)/g, replacement: ': null)' },
  
  // Fix malformed type declarations
  { pattern: /:\s*string\s*;/g, replacement: ': string;' },
  { pattern: /:\s*number\s*;/g, replacement: ': number;' },
  { pattern: /:\s*boolean\s*;/g, replacement: ': boolean;' },
  { pattern: /:\s*any\s*;/g, replacement: ': any;' },
  
  // Fix malformed interface properties
  { pattern: /(\w+)\s*:\s*{;/g, replacement: '$1: {' },
  { pattern: /(\w+)\s*:\s*string\s*;/g, replacement: '$1: string;' },
  { pattern: /(\w+)\s*:\s*number\s*;/g, replacement: '$1: number;' },
  { pattern: /(\w+)\s*:\s*boolean\s*;/g, replacement: '$1: boolean;' },
  
  // Fix malformed function parameters
  { pattern: /\(\s*(\w+)\s*:\s*string\s*\)/g, replacement: '($1: string)' },
  { pattern: /\(\s*(\w+)\s*:\s*number\s*\)/g, replacement: '($1: number)' },
  { pattern: /\(\s*(\w+)\s*:\s*boolean\s*\)/g, replacement: '($1: boolean)' },
  
  // Fix malformed array types
  { pattern: /:\s*string\s*\[\s*\]/g, replacement: ': string[]' },
  { pattern: /:\s*number\s*\[\s*\]/g, replacement: ': number[]' },
  { pattern: /:\s*any\s*\[\s*\]/g, replacement: ': any[]' },
  
  // Fix malformed generic types
  { pattern: /:\s*Promise\s*<\s*any\s*>/g, replacement: ': Promise<any>' },
  { pattern: /:\s*Partial\s*<\s*(\w+)\s*>/g, replacement: ': Partial<$1>' },
  
  // Fix malformed JSX attributes
  { pattern: /className\s*=\s*"([^"]*)"\s*>/g, replacement: 'className="$1">' },
  { pattern: /onClick\s*=\s*{([^}]+)}\s*>/g, replacement: 'onClick={$1}>' },
  
  // Fix malformed object literals
  { pattern: /{\s*(\w+)\s*:\s*([^,}]+)\s*}/g, replacement: '{ $1: $2 }' },
  { pattern: /{\s*(\w+)\s*:\s*([^,}]+)\s*,/g, replacement: '{ $1: $2,' },
  
  // Fix malformed destructuring
  { pattern: /const\s*{\s*(\w+)\s*}\s*=\s*([^;]+);/g, replacement: 'const { $1 } = $2;' },
  { pattern: /const\s*\[\s*(\w+)\s*\]\s*=\s*([^;]+);/g, replacement: 'const [ $1 ] = $2;' }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    
    // Additional specific fixes for common patterns
    content = content
      .replace(/:\s*null\s*;/g, ': null;')
      .replace(/:\s*null\s*,/g, ': null,')
      .replace(/:\s*null\s*}/g, ': null}')
      .replace(/:\s*null\s*\)/g, ': null)')
      .replace(/:\s*string\s*;/g, ': string;')
      .replace(/:\s*number\s*;/g, ': number;')
      .replace(/:\s*boolean\s*;/g, ': boolean;')
      .replace(/:\s*any\s*;/g, ': any;')
      .replace(/:\s*{;/g, ': {')
      .replace(/:\s*};/g, ': };')
      .replace(/:\s*\[;/g, ': [')
      .replace(/:\s*\];/g, ': ];')
      .replace(/\(\s*\)\s*=>\s*{/g, '() => {')
      .replace(/\(\s*\)\s*=>\s*void;/g, '() => void;')
      .replace(/\(\s*\)\s*=>\s*Promise<[^>]+>;/g, '() => Promise<any>;')
      .replace(/:\s*Promise<[^>]+>;/g, ': Promise<any>;')
      .replace(/:\s*Partial<[^>]+>;/g, ': Partial<any>;')
      .replace(/:\s*React\.FC<[^>]*>;/g, ': React.FC;')
      .replace(/:\s*React\.FC<[^>]*>/g, ': React.FC')
      .replace(/:\s*JSX\.Element;/g, ': JSX.Element;')
      .replace(/:\s*JSX\.Element/g, ': JSX.Element')
      .replace(/:\s*void;/g, ': void;')
      .replace(/:\s*void/g, ': void')
      .replace(/:\s*undefined;/g, ': undefined;')
      .replace(/:\s*undefined/g, ': undefined')
      .replace(/:\s*null;/g, ': null;')
      .replace(/:\s*null/g, ': null');
    
    // Write back if changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const srcDir = path.join(process.cwd(), 'src');
if (fs.existsSync(srcDir)) {
  const files = getAllFiles(srcDir);
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files.`);
} else {
  console.log('src directory not found');
}