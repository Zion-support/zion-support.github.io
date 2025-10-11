#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        files = files.concat(findFiles(fullPath, extensions));
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix specific syntax errors
function fixSyntaxErrors(filePath) {
=======
import { glob } from 'glob';

// Common syntax error patterns to fix
const fixes = [
  // Fix double semicolons and brackets
  { pattern: /];];/g, replacement: '];' },
  { pattern: /];\s*];/g, replacement: '];' },
  { pattern: /};\s*};/g, replacement: '};' },
  { pattern: /\);\s*\);/g, replacement: ');' },
  
  // Fix missing commas in object properties
  { pattern: /(\w+):\s*'([^']+)'\s*\n\s*(\w+):/g, replacement: "$1: '$2',\n    $3:" },
  { pattern: /(\w+):\s*"([^"]+)"\s*\n\s*(\w+):/g, replacement: '$1: "$2",\n    $3:' },
  
  // Fix JSX syntax issues
  { pattern: /<(\w+)\s+([^>]*?)\s*>\s*<\/\1>/g, replacement: '<$1 $2 />' },
  
  // Fix missing closing tags
  { pattern: /<(\w+)([^>]*)>\s*$/gm, replacement: '<$1$2></$1>' },
  
  // Fix malformed JSX fragments
  { pattern: /<>\s*<\/(\w+)>/g, replacement: '<$1></$1>' },
  { pattern: /<(\w+)>\s*<\/>/g, replacement: '<$1></$1>' },
  
  // Fix missing semicolons after variable declarations
  { pattern: /(const|let|var)\s+(\w+)\s*=\s*[^;]+$/gm, replacement: '$1 $2 = $&;' },
  
  // Fix missing commas in arrays
  { pattern: /\]\s*\[/g, replacement: '], [' },
  { pattern: /}\s*{/g, replacement: '}, {' },
  
  // Fix malformed function calls
  { pattern: /(\w+)\s*\(\s*\)\s*{/g, replacement: '$1() {' },
  
  // Fix missing closing parentheses
  { pattern: /\(\s*[^)]*$/gm, replacement: '()' },
];

function fixFile(filePath) {
>>>>>>> main
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
<<<<<<< HEAD
    // Fix missing commas in object literals
    const commaFixes = [
      // Fix missing comma after array in object
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:/g,
        replacement: '$1: [$2],\n    $3:'
      },
      // Fix missing comma after object property
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2],\n    $3: ['
      },
      // Fix missing comma after string array
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2],\n    $3: ['
      }
    ];
    
    for (const fix of commaFixes) {
=======
    fixes.forEach(fix => {
>>>>>>> main
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
<<<<<<< HEAD
    }
    
    // Fix missing semicolons in array declarations
    const semicolonFixes = [
      // Fix missing semicolon after array declaration
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2];\n  const $3 = ['
      },
      // Fix missing semicolon after const declaration
      {
        pattern: /const\s+(\w+)\s*=\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: 'const $1 = [$2];\n  const $3 = ['
      }
    ];
    
    for (const fix of semicolonFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix JSX closing tag issues
    const jsxFixes = [
      // Fix unclosed JSX elements
      {
        pattern: /<(\w+)([^>]*?)(?<!\/)>([^<]*?)(?=<\w+|\s*$)/g,
        replacement: (match, tagName, attributes, content) => {
          // Skip self-closing tags
          if (match.endsWith('/>') || ['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
            return match;
          }
          // Add closing tag if missing
          if (!content.includes(`</${tagName}>`)) {
            return `<${tagName}${attributes}>${content}</${tagName}>`;
          }
          return match;
        }
      },
      // Fix meta tags
      {
        pattern: /<meta\s+([^>]*?)(?<!\/)>/g,
        replacement: (match, attributes) => {
          if (!match.includes('/>') && !match.includes('</meta>')) {
            return `<meta ${attributes} />`;
          }
          return match;
        }
      }
    ];
    
    for (const fix of jsxFixes) {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    }
    
    // Fix specific parsing errors
    const specificFixes = [
      // Fix missing closing bracket in features array
      {
        pattern: /const\s+features\s*=\s*\[([^\]]+)\]\s*const\s+benefits/g,
        replacement: 'const features = [$1];\n  const benefits'
      },
      // Fix missing semicolon after features array
      {
        pattern: /const\s+features\s*=\s*\[([^\]]+)\]\s*const\s+benefits/g,
        replacement: 'const features = [$1];\n  const benefits'
      },
      // Fix missing comma in object properties
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2],\n    $3: ['
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax errors in ${filePath}:`, error.message);
=======
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> main
    return false;
  }
}

<<<<<<< HEAD
// Main execution
console.log('Starting syntax error fixes...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors: ${errorCount} files`);

// Run linting to check remaining issues
console.log('\nRunning linting to check remaining issues...');
try {
  execSync('pnpm run lint', { stdio: 'inherit' });
} catch (error) {
  console.log('Linting completed with some remaining issues to fix manually');
}
=======
async function main() {
  console.log('Fixing syntax errors in TypeScript/JSX files...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile, fixes };
>>>>>>> main
