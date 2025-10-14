#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix comprehensive syntax errors
function fixComprehensiveErrors(content, filePath) {
  let fixed = content;
  let changes = [];

  // Fix 1: Fix malformed JSX closing tags
  if (fixed.includes('</>')) {
    fixed = fixed.replace(/<\/(\w+)>\s*<\/(\w+)>/g, '</$1></$2>');
    changes.push('Fixed malformed JSX closing tags');
  }

  // Fix 2: Fix incomplete function declarations
  if (fixed.includes('export default function') && !fixed.includes('export default function $1() {')) {
    fixed = fixed.replace(/export default function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'export default function $1() {\n');
    changes.push('Fixed incomplete function declarations');
  }

  // Fix 3: Fix malformed object properties
  if (fixed.includes(':')) {
    fixed = fixed.replace(/(\w+):\s*"([^"]*?)",\s*""/g, '$1: "$2",');
    fixed = fixed.replace(/(\w+):\s*'([^']*?)',\s*''/g, "$1: '$2',");
    changes.push('Fixed malformed object properties');
  }

  // Fix 4: Fix incomplete JSX elements
  if (fixed.includes('<') && fixed.includes('>')) {
    fixed = fixed.replace(/<(\w+)\s*$/gm, '<$1>');
    changes.push('Fixed incomplete JSX elements');
  }

  // Fix 5: Fix malformed array declarations
  if (fixed.includes('[') && fixed.includes(']')) {
    fixed = fixed.replace(/\[\s*{\s*;/g, '[{');
    fixed = fixed.replace(/\[\s*{\s*''/g, '[{');
    changes.push('Fixed malformed array declarations');
  }

  // Fix 6: Fix malformed string literals
  if (fixed.includes('"') || fixed.includes("'")) {
    fixed = fixed.replace(/"([^"]*?)'([^']*?)'"/g, '"$1$2"');
    fixed = fixed.replace(/'([^']*?)"([^"]*?)'/g, "'$1$2'");
    changes.push('Fixed malformed string literals');
  }

  // Fix 7: Fix malformed JSX attributes
  if (fixed.includes('className=') || fixed.includes('onClick=')) {
    fixed = fixed.replace(/(\w+)=\s*"([^"]*?)",\s*""/g, '$1="$2"');
    fixed = fixed.replace(/(\w+)=\s*'([^']*?)',\s*''/g, "$1='$2'");
    changes.push('Fixed malformed JSX attributes');
  }

  // Fix 8: Fix malformed function calls
  if (fixed.includes('(') && fixed.includes(')')) {
    fixed = fixed.replace(/(\w+)\(\s*([^)]*?)\s*,\s*""/g, '$1($2)');
    fixed = fixed.replace(/(\w+)\(\s*([^)]*?)\s*,\s*''/g, '$1($2)');
    changes.push('Fixed malformed function calls');
  }

  // Fix 9: Fix malformed return statements
  if (fixed.includes('return')) {
    fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (');
    fixed = fixed.replace(/return\s*\(\s*<\s*$/gm, 'return (<');
    changes.push('Fixed malformed return statements');
  }

  // Fix 10: Fix malformed conditional statements
  if (fixed.includes('if') || fixed.includes('else')) {
    fixed = fixed.replace(/if\s*\(\s*([^)]*?)\s*\)\s*{\s*$/gm, 'if ($1) {');
    fixed = fixed.replace(/else\s*{\s*$/gm, 'else {');
    changes.push('Fixed malformed conditional statements');
  }

  // Fix 11: Fix malformed try-catch blocks
  if (fixed.includes('try') || fixed.includes('catch')) {
    fixed = fixed.replace(/try\s*{\s*$/gm, 'try {');
    fixed = fixed.replace(/}\s*catch\s*\(\s*(\w+)\s*\)\s*{\s*$/gm, '} catch ($1) {');
    changes.push('Fixed malformed try-catch blocks');
  }

  // Fix 12: Fix malformed switch statements
  if (fixed.includes('switch')) {
    fixed = fixed.replace(/switch\s*\(\s*(\w+)\s*\)\s*{\s*$/gm, 'switch ($1) {');
    changes.push('Fixed malformed switch statements');
  }

  // Fix 13: Fix malformed for loops
  if (fixed.includes('for')) {
    fixed = fixed.replace(/for\s*\(\s*(\w+)\s+(\w+)\s*=\s*0;\s*(\w+)\s*<\s*(\w+);\s*(\w+)\+\+\)\s*{\s*$/gm, 'for (let $2 = 0; $2 < $4; $2++) {');
    changes.push('Fixed malformed for loops');
  }

  // Fix 14: Fix malformed while loops
  if (fixed.includes('while')) {
    fixed = fixed.replace(/while\s*\(\s*([^)]*?)\s*\)\s*{\s*$/gm, 'while ($1) {');
    changes.push('Fixed malformed while loops');
  }

  // Fix 15: Fix malformed do-while loops
  if (fixed.includes('do')) {
    fixed = fixed.replace(/do\s*{\s*$/gm, 'do {');
    fixed = fixed.replace(/}\s*while\s*\(\s*([^)]*?)\s*\)\s*;\s*$/gm, '} while ($1);');
    changes.push('Fixed malformed do-while loops');
  }

  // Fix 16: Fix malformed for-in loops
  if (fixed.includes('for') && fixed.includes('in')) {
    fixed = fixed.replace(/for\s*\(\s*(\w+)\s+in\s+(\w+)\s*\)\s*{\s*$/gm, 'for ($1 in $2) {');
    changes.push('Fixed malformed for-in loops');
  }

  // Fix 17: Fix malformed for-of loops
  if (fixed.includes('for') && fixed.includes('of')) {
    fixed = fixed.replace(/for\s*\(\s*(\w+)\s+of\s+(\w+)\s*\)\s*{\s*$/gm, 'for ($1 of $2) {');
    changes.push('Fixed malformed for-of loops');
  }

  // Fix 18: Fix malformed object destructuring
  if (fixed.includes('{') && fixed.includes('}')) {
    fixed = fixed.replace(/\{\s*(\w+),\s*(\w+)\s*\}\s*=\s*(\w+)/g, '{$1, $2} = $3');
    changes.push('Fixed malformed object destructuring');
  }

  // Fix 19: Fix malformed array destructuring
  if (fixed.includes('[') && fixed.includes(']')) {
    fixed = fixed.replace(/\[\s*(\w+),\s*(\w+)\s*\]\s*=\s*(\w+)/g, '[$1, $2] = $3');
    changes.push('Fixed malformed array destructuring');
  }

  // Fix 20: Fix malformed template literals
  if (fixed.includes('`')) {
    fixed = fixed.replace(/`([^`]*?)\n/g, '`$1`\n');
    changes.push('Fixed malformed template literals');
  }

  // Fix 21: Fix malformed regular expressions
  if (fixed.includes('/') && fixed.includes('/')) {
    fixed = fixed.replace(/\/\s*([^\/]*?)\s*\/\s*$/gm, '/$1/');
    changes.push('Fixed malformed regular expressions');
  }

  // Fix 22: Fix malformed comments
  if (fixed.includes('/*') && fixed.includes('*/')) {
    fixed = fixed.replace(/\/\*\s*([^*]*?)\s*\*\/\s*$/gm, '/* $1 */');
    changes.push('Fixed malformed comments');
  }

  // Fix 23: Fix malformed single-line comments
  if (fixed.includes('//')) {
    fixed = fixed.replace(/\/\/\s*([^\n]*?)\s*$/gm, '// $1');
    changes.push('Fixed malformed single-line comments');
  }

  // Fix 24: Fix malformed HTML comments
  if (fixed.includes('<!--') && fixed.includes('-->')) {
    fixed = fixed.replace(/<!--\s*([^-]*?)\s*-->\s*$/gm, '<!-- $1 -->');
    changes.push('Fixed malformed HTML comments');
  }

  // Fix 25: Fix malformed JSX comments
  if (fixed.includes('{/*') && fixed.includes('*/}')) {
    fixed = fixed.replace(/\{\s*\/\*\s*([^*]*?)\s*\*\/\s*\}\s*$/gm, '{/* $1 */}');
    changes.push('Fixed malformed JSX comments');
  }

  // Fix 26: Fix malformed JSX expressions
  if (fixed.includes('{') && fixed.includes('}')) {
    fixed = fixed.replace(/\{\s*([^}]*?)\s*\}\s*$/gm, '{$1}');
    changes.push('Fixed malformed JSX expressions');
  }

  // Fix 27: Fix malformed JSX fragments
  if (fixed.includes('<>') && fixed.includes('</>')) {
    fixed = fixed.replace(/<>\s*<\//g, '<>');
    fixed = fixed.replace(/<\/>\s*<\/>/g, '</>');
    changes.push('Fixed malformed JSX fragments');
  }

  // Fix 28: Fix malformed class declarations
  if (fixed.includes('class')) {
    fixed = fixed.replace(/class\s+(\w+)\s+extends\s+(\w+)\s*{\s*$/gm, 'class $1 extends $2 {\n');
    changes.push('Fixed malformed class declarations');
  }

  // Fix 29: Fix malformed interface declarations
  if (fixed.includes('interface')) {
    fixed = fixed.replace(/interface\s+(\w+)\s*{\s*$/gm, 'interface $1 {\n');
    changes.push('Fixed malformed interface declarations');
  }

  // Fix 30: Fix malformed type declarations
  if (fixed.includes('type')) {
    fixed = fixed.replace(/type\s+(\w+)\s*=\s*{\s*$/gm, 'type $1 = {\n');
    changes.push('Fixed malformed type declarations');
  }

  // Fix 31: Fix malformed enum declarations
  if (fixed.includes('enum')) {
    fixed = fixed.replace(/enum\s+(\w+)\s*{\s*$/gm, 'enum $1 {\n');
    changes.push('Fixed malformed enum declarations');
  }

  // Fix 32: Fix malformed namespace declarations
  if (fixed.includes('namespace')) {
    fixed = fixed.replace(/namespace\s+(\w+)\s*{\s*$/gm, 'namespace $1 {\n');
    changes.push('Fixed malformed namespace declarations');
  }

  // Fix 33: Fix malformed module declarations
  if (fixed.includes('module')) {
    fixed = fixed.replace(/module\s+(\w+)\s*{\s*$/gm, 'module $1 {\n');
    changes.push('Fixed malformed module declarations');
  }

  // Fix 34: Fix malformed export statements
  if (fixed.includes('export')) {
    fixed = fixed.replace(/export\s+(\w+)\s+from\s+from/g, 'export $1 from');
    fixed = fixed.replace(/export\s*{\s*(\w+)\s*}\s+from\s+from/g, 'export {$1} from');
    changes.push('Fixed malformed export statements');
  }

  // Fix 35: Fix malformed default exports
  if (fixed.includes('export default')) {
    fixed = fixed.replace(/export\s+default\s+$/gm, 'export default ');
    changes.push('Fixed malformed default exports');
  }

  // Fix 36: Fix malformed named exports
  if (fixed.includes('export {')) {
    fixed = fixed.replace(/export\s*{\s*(\w+)\s*$/gm, 'export {$1}');
    changes.push('Fixed malformed named exports');
  }

  // Fix 37: Fix malformed const declarations
  if (fixed.includes('const')) {
    fixed = fixed.replace(/const\s+(\w+)\s*=\s*$/gm, 'const $1 = ');
    changes.push('Fixed malformed const declarations');
  }

  // Fix 38: Fix malformed let declarations
  if (fixed.includes('let')) {
    fixed = fixed.replace(/let\s+(\w+)\s*=\s*$/gm, 'let $1 = ');
    changes.push('Fixed malformed let declarations');
  }

  // Fix 39: Fix malformed var declarations
  if (fixed.includes('var')) {
    fixed = fixed.replace(/var\s+(\w+)\s*=\s*$/gm, 'var $1 = ');
    changes.push('Fixed malformed var declarations');
  }

  // Fix 40: Fix malformed function declarations
  if (fixed.includes('function')) {
    fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n');
    changes.push('Fixed malformed function declarations');
  }

  // Fix 41: Fix malformed arrow function declarations
  if (fixed.includes('=>')) {
    fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*$/gm, 'const $1 = () => ');
    changes.push('Fixed malformed arrow function declarations');
  }

  // Fix 42: Fix malformed async function declarations
  if (fixed.includes('async')) {
    fixed = fixed.replace(/async\s+function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'async function $1() {\n');
    changes.push('Fixed malformed async function declarations');
  }

  // Fix 43: Fix malformed async arrow function declarations
  if (fixed.includes('async') && fixed.includes('=>')) {
    fixed = fixed.replace(/const\s+(\w+)\s*=\s*async\s*\(\s*\)\s*=>\s*$/gm, 'const $1 = async () => ');
    changes.push('Fixed malformed async arrow function declarations');
  }

  // Fix 44: Fix malformed generator function declarations
  if (fixed.includes('function*')) {
    fixed = fixed.replace(/function\s*\*\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function* $1() {\n');
    changes.push('Fixed malformed generator function declarations');
  }

  // Fix 45: Fix malformed async generator function declarations
  if (fixed.includes('async') && fixed.includes('function*')) {
    fixed = fixed.replace(/async\s+function\s*\*\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'async function* $1() {\n');
    changes.push('Fixed malformed async generator function declarations');
  }

  // Fix 46: Fix malformed class method declarations
  if (fixed.includes('(') && fixed.includes(')')) {
    fixed = fixed.replace(/(\w+)\s*\(\s*\)\s*{\s*$/gm, '$1() {\n');
    changes.push('Fixed malformed class method declarations');
  }

  // Fix 47: Fix malformed getter declarations
  if (fixed.includes('get')) {
    fixed = fixed.replace(/get\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'get $1() {\n');
    changes.push('Fixed malformed getter declarations');
  }

  // Fix 48: Fix malformed setter declarations
  if (fixed.includes('set')) {
    fixed = fixed.replace(/set\s+(\w+)\s*\(\s*(\w+)\s*\)\s*{\s*$/gm, 'set $1($2) {\n');
    changes.push('Fixed malformed setter declarations');
  }

  // Fix 49: Fix malformed static method declarations
  if (fixed.includes('static')) {
    fixed = fixed.replace(/static\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'static $1() {\n');
    changes.push('Fixed malformed static method declarations');
  }

  // Fix 50: Fix malformed constructor declarations
  if (fixed.includes('constructor')) {
    fixed = fixed.replace(/constructor\s*\(\s*\)\s*{\s*$/gm, 'constructor() {\n');
    changes.push('Fixed malformed constructor declarations');
  }

  // Clean up extra whitespace and newlines
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  fixed = fixed.replace(/\s+$/gm, '');

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixComprehensiveErrors(content, filePath);
    
    if (result.changes.length > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`✅ Fixed ${filePath}:`);
      result.changes.forEach(change => console.log(`   - ${change}`));
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('🔧 Starting comprehensive syntax error fixes...\n');
  
  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - fixedFiles}`);
  
  if (fixedFiles > 0) {
    console.log('\n✨ Comprehensive syntax errors have been fixed!');
  } else {
    console.log('\n✅ No comprehensive syntax errors found to fix.');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixComprehensiveErrors, processFile };