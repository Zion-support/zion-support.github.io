<<<<<<< HEAD
// Function to fix corrupted syntax in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax issues
    content = content
      // Remove trailing commas before semicolons
      .replace(/,;/g, ';')
      // Remove standalone commas at end of lines
      .replace(/,(\s*)$/gm, '$1')
      // Fix JSX attributes with trailing commas
      .replace(/,(\s*[}>])/g, '$1')
      // Fix object properties with trailing commas
      .replace(/,(\s*[}\]])/g, '$1')
      // Fix function parameters with trailing commas
      .replace(/,(\s*\))/g, '$1')
      // Fix array elements with trailing commas
      .replace(/,(\s*\])/g, '$1')
      // Remove multiple consecutive commas
      .replace(/,+/g, ',')
      // Fix spacing around operators
      .replace(/\s*:\s*/g, ': ')
      .replace(/\s*=\s*/g, ' = ')
      // Fix JSX closing tags
      .replace(/>\s*,/g, '>')
      // Remove empty lines with just commas
      .replace(/^\s*,\s*$/gm, '')
      // Fix missing spaces in JSX
      .replace(/(\w)>\s*</g, '$1> <')
      // Fix className spacing
      .replace(/className="([^"]*)\s*"/g, 'className="$1"')
      // Fix hover: spacing
      .replace(/hover:\s*/g, 'hover:')
      // Fix group-hover: spacing
      .replace(/group-hover:\s*/g, 'group-hover:')
      // Fix md: spacing
      .replace(/md:\s*/g, 'md:')
      // Fix lg: spacing
      .replace(/lg:\s*/g, 'lg:')
      // Fix sm: spacing
      .replace(/sm:\s*/g, 'sm:')
      // Fix xl: spacing
      .replace(/xl:\s*/g, 'xl:')
      // Fix 2xl: spacing
      .replace(/2xl:\s*/g, '2xl:')
      // Fix last: spacing
      .replace(/last:\s*/g, 'last:')
      // Fix first: spacing
      .replace(/first:\s*/g, 'first:')
      // Fix not-sr-only spacing
      .replace(/not-sr-only:\s*/g, 'not-sr-only:')
      // Fix focus: spacing
      .replace(/focus:\s*/g, 'focus:')
      // Fix using-mouse spacing
      .replace(/using-mouse\s*\*/g, 'using-mouse *')
      // Fix focus-visible spacing
      .replace(/focus-visible:\s*/g, 'focus-visible:')
      // Fix sr-only spacing
      .replace(/sr-only\./g, 'sr-only.')
      // Fix not-sr-only spacing
      .replace(/not-sr-only\./g, 'not-sr-only.')
      // Fix multiple spaces
      .replace(/\s{2,}/g, ' ')
      // Fix missing semicolons at end of statements
      .replace(/([^;}])\s*$/gm, '$1;')
      // Remove semicolons from JSX
      .replace(/;\s*>/g, '>')
      .replace(/;\s*}/g, '}')
      // Fix import statements
      .replace(/import\s+([^,]+),\s*{([^}]+)}\s+from\s+['"]([^'"]+)['"]\s*,/g, 'import $1, { $2 } from "$3";')
      // Fix export statements
      .replace(/export\s+default\s+([^,;]+)\s*,/g, 'export default $1;')
      // Fix interface definitions
      .replace(/interface\s+(\w+)\s*{\s*([^}]+)\s*}\s*,/g, 'interface $1 {\n  $2\n}')
      // Fix type definitions
      .replace(/type\s+(\w+)\s*=\s*([^;]+)\s*,/g, 'type $1 = $2;')
      // Fix function declarations
      .replace(/const\s+(\w+)\s*:\s*([^=]+)\s*=\s*([^;]+)\s*,/g, 'const $1: $2 = $3;')
      // Fix arrow functions
      .replace(/=>\s*{\s*([^}]+)\s*}\s*,/g, ' => {\n  $1\n};')
      // Fix JSX return statements
      .replace(/return\s*\(\s*([^)]+)\s*\)\s*,/g, 'return (\n  $1\n);')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim();
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix interface properties - add semicolons
  {
    pattern: /(\w+)\s*:\s*([^,;]+),(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2;$3'
  },
  // Fix object properties - add semicolons
  {
    pattern: /(\w+)\s*:\s*([^,;]+),(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2;$3'
  },
  // Fix function parameters - add commas
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing semicolons after return statements
  {
    pattern: /return\s+([^;]+),(\s*\/\/[^\n]*)?$/gm,
    replacement: 'return $1;$2'
  },
  // Fix missing semicolons after variable declarations
  {
    pattern: /(\w+)\s*=\s*([^,;]+),(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2;$3'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
    content = newContent,
    modified = true
  }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
=======
const fs = require('fs');
const path = require('path');

// Common syntax error patterns to fix
const fixes = [
  // Fix missing semicolons after return statements
  { pattern: /return res\.status\(\d+\)\.json\(\{[^}]+\}\),\s*$/gm, replacement: 'return res.status($1).json({$2});' },
  { pattern: /return res\.status\(\d+\)\.end\(\),\s*$/gm, replacement: 'return res.status($1).end();' },
  { pattern: /return res\.status\(\d+\)\.json\(\{[^}]+\}\),\s*return\s*$/gm, replacement: 'return res.status($1).json({$2});\n    return;' },
  
  // Fix missing semicolons after variable declarations
  { pattern: /const [^=]+ = [^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') },
  { pattern: /let [^=]+ = [^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') },
  
  // Fix missing semicolons after if statements
  { pattern: /if \([^)]+\) return [^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') },
  
  // Fix object property syntax errors
  { pattern: /(\w+);\s*(\w+);/g, replacement: '$1,\n    $2,' },
  
  // Fix array syntax errors
  { pattern: /\[\s*([^]]+)\s*\]/g, replacement: (match, content) => {
    const items = content.split(',').map(item => item.trim()).filter(item => item);
    return '[\n    ' + items.join(',\n    ') + '\n  ]';
  }}
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        changed = true;
      }
    });
    
    if (changed) {
      fs.writeFileSync(filePath, content);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      console.log(`Fixed: ${filePath}`);
    }
<<<<<<< HEAD
    return false;
=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

<<<<<<< HEAD
// Function to recursively find and fix files
function fixAllFiles(dir) {
=======
function walkDir(dir) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
<<<<<<< HEAD
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixAllFiles('/workspace');
console.log(`Fixed ${fixedCount} files`);
// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', 'build/**', 'out/**']
});

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
=======
      walkDir(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  });
}

// Start fixing from the pages/api directory
walkDir('./pages/api');
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
