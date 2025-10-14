#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing import statements and remaining syntax issues...');

// Function to fix import statements and remaining syntax
function fixImportsAndSyntax(content) {
  // Fix mangled import statements
  content = content.replace(/'import\s*\{([^}]*)\}\s*from\s*'([^']*)';\s*'import\s*\{([^}]*)\}\s*from\s*'([^']*)';\s*'/g, 
    "import {$1} from '$2';\nimport {$3} from '$4';");
  
  // Fix single quotes in import statements
  content = content.replace(/'import\s*\{([^}]*)\}\s*from\s*'([^']*)';\s*'/g, "import {$1} from '$2';");
  
  // Fix malformed import statements
  content = content.replace(/import\s*\{([^}]*)\}\s*from\s*'([^']*)';\s*'([^']*)'/g, "import {$1} from '$2';\n$3");
  
  // Fix missing semicolons after imports
  content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*$/gm, 'import $1 from "$2";');
  
  // Fix malformed function declarations
  content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{return\s*\(/g, 'export default function $1() {\n  return (');
  
  // Fix missing spaces in function declarations
  content = content.replace(/function\s+(\w+)\(\s*\)\s*\{return\s*\(/g, 'function $1() {\n  return (');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*?)\s*"/g, 'className="$1"');
  
  // Fix malformed string literals
  content = content.replace(/"([^"]*?)\s*"/g, '"$1"');
  content = content.replace(/'([^']*?)\s*'/g, "'$1'");
  
  // Fix malformed JSX elements
  content = content.replace(/<(\w+)\s*\/>\s*$/gm, '<$1 />');
  
  // Fix malformed closing tags
  content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>');
  content = content.replace(/<\/h3>\s*<\/h3>/g, '</h3>');
  content = content.replace(/<\/p>\s*<\/p>/g, '</p>');
  
  // Fix malformed JSX fragments
  content = content.replace(/<React\.Fragment>\s*<\/React>/g, '<React.Fragment>');
  content = content.replace(/<\/React>\s*<\/React\.Fragment>/g, '</React.Fragment>');
  
  // Fix malformed conditional rendering
  content = content.replace(/\{\s*(\w+)\s*&&\s*\(\s*\)\s*\}/g, '{$1 && null}');
  
  // Fix malformed array literals
  content = content.replace(/\[\s*([^\]]*?)\s*\]/g, '[$1]');
  
  // Fix malformed object literals
  content = content.replace(/\{\s*([^}]*?)\s*\}/g, '{$1}');
  
  // Fix malformed function calls
  content = content.replace(/(\w+)\s*\(\s*\)\s*$/gm, '$1();');
  
  // Fix malformed method calls
  content = content.replace(/(\w+)\.(\w+)\s*\(\s*\)\s*$/gm, '$1.$2();');
  
  // Fix malformed property access
  content = content.replace(/(\w+)\.(\w+)\s*$/gm, '$1.$2');
  
  // Fix malformed destructuring
  content = content.replace(/const\s*\{\s*([^}]*?)\s*\}\s*=\s*([^;]+)\s*$/gm, 'const {$1} = $2;');
  
  // Fix malformed spread operators
  content = content.replace(/\.\.\.\s*(\w+)\s*$/gm, '...$1');
  
  // Fix malformed rest parameters
  content = content.replace(/\.\.\.\s*(\w+)\s*:\s*(\w+)\s*$/gm, '...$1: $2');
  
  // Fix malformed optional chaining
  content = content.replace(/(\w+)\?\s*\.\s*(\w+)/gm, '$1?.$2');
  
  // Fix malformed nullish coalescing
  content = content.replace(/(\w+)\s*\?\?\s*(\w+)/gm, '$1 ?? $2');
  
  // Fix malformed logical operators
  content = content.replace(/(\w+)\s*&&\s*(\w+)/gm, '$1 && $2');
  content = content.replace(/(\w+)\s*\|\|\s*(\w+)/gm, '$1 || $2');
  
  // Fix malformed comparison operators
  content = content.replace(/(\w+)\s*===\s*(\w+)/gm, '$1 === $2');
  content = content.replace(/(\w+)\s*!==\s*(\w+)/gm, '$1 !== $2');
  
  // Fix malformed assignment operators
  content = content.replace(/(\w+)\s*=\s*(\w+)\s*$/gm, '$1 = $2;');
  
  // Fix malformed increment/decrement operators
  content = content.replace(/(\w+)\s*\+\+\s*$/gm, '$1++;');
  content = content.replace(/(\w+)\s*--\s*$/gm, '$1--;');
  
  // Fix malformed ternary operators
  content = content.replace(/(\w+)\s*\?\s*(\w+)\s*:\s*(\w+)/gm, '$1 ? $2 : $3');
  
  // Fix malformed switch statements
  content = content.replace(/switch\s*\(\s*(\w+)\s*\)\s*\{\s*\}\s*$/gm, 'switch ($1) {\n  default:\n    break;\n}');
  
  // Fix malformed try-catch blocks
  content = content.replace(/try\s*\{\s*\}\s*catch\s*\(\s*(\w+)\s*\)\s*\{\s*\}\s*$/gm, 'try {\n  // Add code here\n} catch ($1) {\n  // Handle error\n}');
  
  // Fix malformed if statements
  content = content.replace(/if\s*\(\s*(\w+)\s*\)\s*\{\s*\}\s*$/gm, 'if ($1) {\n  // Add code here\n}');
  
  // Fix malformed for loops
  content = content.replace(/for\s*\(\s*(\w+)\s*;\s*(\w+)\s*;\s*(\w+)\s*\)\s*\{\s*\}\s*$/gm, 'for ($1; $2; $3) {\n  // Add code here\n}');
  
  // Fix malformed while loops
  content = content.replace(/while\s*\(\s*(\w+)\s*\)\s*\{\s*\}\s*$/gm, 'while ($1) {\n  // Add code here\n}');
  
  // Fix malformed do-while loops
  content = content.replace(/do\s*\{\s*\}\s*while\s*\(\s*(\w+)\s*\)\s*$/gm, 'do {\n  // Add code here\n} while ($1);');
  
  // Fix malformed for-in loops
  content = content.replace(/for\s*\(\s*(\w+)\s+in\s+(\w+)\s*\)\s*\{\s*\}\s*$/gm, 'for ($1 in $2) {\n  // Add code here\n}');
  
  // Fix malformed for-of loops
  content = content.replace(/for\s*\(\s*(\w+)\s+of\s+(\w+)\s*\)\s*\{\s*\}\s*$/gm, 'for ($1 of $2) {\n  // Add code here\n}');
  
  // Fix malformed async functions
  content = content.replace(/async\s+function\s+(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, 'async function $1() {\n  // Add code here\n}');
  
  // Fix malformed async arrow functions
  content = content.replace(/const\s+(\w+)\s*=\s*async\s*\(\s*\)\s*=>\s*\{\s*\}\s*$/gm, 'const $1 = async () => {\n  // Add code here\n};');
  
  // Fix malformed generator functions
  content = content.replace(/function\s*\*\s*(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, 'function* $1() {\n  // Add code here\n}');
  
  // Fix malformed async generator functions
  content = content.replace(/async\s+function\s*\*\s*(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, 'async function* $1() {\n  // Add code here\n}');
  
  // Fix malformed class declarations
  content = content.replace(/class\s+(\w+)\s*\{\s*\}\s*$/gm, 'class $1 {\n  // Add methods here\n}');
  
  // Fix malformed class expressions
  content = content.replace(/const\s+(\w+)\s*=\s*class\s*\{\s*\}\s*$/gm, 'const $1 = class {\n  // Add methods here\n};');
  
  // Fix malformed extends clauses
  content = content.replace(/class\s+(\w+)\s+extends\s+(\w+)\s*\{\s*\}\s*$/gm, 'class $1 extends $2 {\n  // Add methods here\n}');
  
  // Fix malformed implements clauses
  content = content.replace(/class\s+(\w+)\s+implements\s+(\w+)\s*\{\s*\}\s*$/gm, 'class $1 implements $2 {\n  // Add methods here\n}');
  
  // Fix malformed method declarations
  content = content.replace(/(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, '$1() {\n  // Add code here\n}');
  
  // Fix malformed getter declarations
  content = content.replace(/get\s+(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, 'get $1() {\n  // Add code here\n}');
  
  // Fix malformed setter declarations
  content = content.replace(/set\s+(\w+)\s*\(\s*(\w+)\s*\)\s*\{\s*\}\s*$/gm, 'set $1($2) {\n  // Add code here\n}');
  
  // Fix malformed static method declarations
  content = content.replace(/static\s+(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, 'static $1() {\n  // Add code here\n}');
  
  // Fix malformed private method declarations
  content = content.replace(/#(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, '#$1() {\n  // Add code here\n}');
  
  // Fix malformed protected method declarations
  content = content.replace(/protected\s+(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, 'protected $1() {\n  // Add code here\n}');
  
  // Fix malformed public method declarations
  content = content.replace(/public\s+(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, 'public $1() {\n  // Add code here\n}');
  
  // Fix malformed abstract method declarations
  content = content.replace(/abstract\s+(\w+)\s*\(\s*\)\s*\{\s*\}\s*$/gm, 'abstract $1();');
  
  // Fix malformed readonly property declarations
  content = content.replace(/readonly\s+(\w+)\s*:\s*(\w+)\s*$/gm, 'readonly $1: $2;');
  
  // Fix malformed optional property declarations
  content = content.replace(/(\w+)\s*\?\s*:\s*(\w+)\s*$/gm, '$1?: $2;');
  
  // Fix malformed required property declarations
  content = content.replace(/(\w+)\s*!\s*:\s*(\w+)\s*$/gm, '$1!: $2;');
  
  // Fix malformed union types
  content = content.replace(/(\w+)\s*\|\s*(\w+)/gm, '$1 | $2');
  
  // Fix malformed intersection types
  content = content.replace(/(\w+)\s*&\s*(\w+)/gm, '$1 & $2');
  
  // Fix malformed generic types
  content = content.replace(/(\w+)\s*<\s*(\w+)\s*>/gm, '$1<$2>');
  
  // Fix malformed array types
  content = content.replace(/(\w+)\s*\[\s*\]/gm, '$1[]');
  
  // Fix malformed tuple types
  content = content.replace(/\[\s*(\w+)\s*,\s*(\w+)\s*\]/gm, '[$1, $2]');
  
  // Fix malformed function types
  content = content.replace(/\(\s*\)\s*=>\s*(\w+)/gm, '() => $1');
  
  // Fix malformed object types
  content = content.replace(/\{\s*(\w+)\s*:\s*(\w+)\s*\}/gm, '{$1: $2}');
  
  // Fix malformed index signatures
  content = content.replace(/\[\s*(\w+)\s*:\s*(\w+)\s*\]\s*:\s*(\w+)/gm, '[$1: $2]: $3');
  
  // Fix malformed mapped types
  content = content.replace(/\{\s*\[(\w+)\s+in\s+(\w+)\]\s*:\s*(\w+)\s*\}/gm, '{$1 in $2: $3}');
  
  // Fix malformed conditional types
  content = content.replace(/(\w+)\s+extends\s+(\w+)\s*\?\s*(\w+)\s*:\s*(\w+)/gm, '$1 extends $2 ? $3 : $4');
  
  // Fix malformed template literal types
  content = content.replace(/`([^`]*?)\s*`/gm, '`$1`');
  
  // Fix malformed keyof types
  content = content.replace(/keyof\s+(\w+)/gm, 'keyof $1');
  
  // Fix malformed typeof types
  content = content.replace(/typeof\s+(\w+)/gm, 'typeof $1');
  
  // Fix malformed instance types
  content = content.replace(/InstanceType\s*<\s*(\w+)\s*>/gm, 'InstanceType<$1>');
  
  // Fix malformed utility types
  content = content.replace(/Partial\s*<\s*(\w+)\s*>/gm, 'Partial<$1>');
  content = content.replace(/Required\s*<\s*(\w+)\s*>/gm, 'Required<$1>');
  content = content.replace(/Readonly\s*<\s*(\w+)\s*>/gm, 'Readonly<$1>');
  content = content.replace(/Pick\s*<\s*(\w+)\s*,\s*(\w+)\s*>/gm, 'Pick<$1, $2>');
  content = content.replace(/Omit\s*<\s*(\w+)\s*,\s*(\w+)\s*>/gm, 'Omit<$1, $2>');
  content = content.replace(/Record\s*<\s*(\w+)\s*,\s*(\w+)\s*>/gm, 'Record<$1, $2>');
  content = content.replace(/Exclude\s*<\s*(\w+)\s*,\s*(\w+)\s*>/gm, 'Exclude<$1, $2>');
  content = content.replace(/Extract\s*<\s*(\w+)\s*,\s*(\w+)\s*>/gm, 'Extract<$1, $2>');
  content = content.replace(/NonNullable\s*<\s*(\w+)\s*>/gm, 'NonNullable<$1>');
  content = content.replace(/Parameters\s*<\s*(\w+)\s*>/gm, 'Parameters<$1>');
  content = content.replace(/ReturnType\s*<\s*(\w+)\s*>/gm, 'ReturnType<$1>');
  content = content.replace(/ConstructorParameters\s*<\s*(\w+)\s*>/gm, 'ConstructorParameters<$1>');
  content = content.replace(/InstanceType\s*<\s*(\w+)\s*>/gm, 'InstanceType<$1>');
  content = content.replace(/ThisParameterType\s*<\s*(\w+)\s*>/gm, 'ThisParameterType<$1>');
  content = content.replace(/OmitThisParameter\s*<\s*(\w+)\s*>/gm, 'OmitThisParameter<$1>');
  content = content.replace(/ThisType\s*<\s*(\w+)\s*>/gm, 'ThisType<$1>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixImportsAndSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all relevant files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
try {
  const files = findFiles('./app');
  let fixedCount = 0;
  
  console.log(`📁 Found ${files.length} files to process...`);
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files!`);
  
} catch (error) {
  console.error('❌ Error during processing:', error.message);
  process.exit(1);
}