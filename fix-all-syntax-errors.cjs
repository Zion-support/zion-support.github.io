#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing all remaining syntax errors...');

// Find all TypeScript/JavaScript files with syntax errors
function findFilesWithErrors() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | grep -v .next | grep -v dist', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file && fs.existsSync(file));
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
}

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix common syntax errors
    content = content.replace(/}\s*const\s+/g, '}\n\nconst ');
    content = content.replace(/;\s*const\s+/g, ';\n\nconst ');
    content = content.replace(/}\s*export\s+/g, '}\n\nexport ');
    content = content.replace(/;\s*export\s+/g, ';\n\nexport ');
    content = content.replace(/}\s*interface\s+/g, '}\n\ninterface ');
    content = content.replace(/;\s*interface\s+/g, ';\n\ninterface ');
    content = content.replace(/}\s*type\s+/g, '}\n\ntype ');
    content = content.replace(/;\s*type\s+/g, ';\n\ntype ');

    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*const\s+/g, '$1 = $2;\n  const ');
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*}\s*const\s+/g, '$1 = $2;\n}\n\nconst ');
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*}\s*export\s+/g, '$1 = $2;\n}\n\nexport ');
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*}\s*interface\s+/g, '$1 = $2;\n}\n\ninterface ');
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*}\s*type\s+/g, '$1 = $2;\n}\n\ntype ');

    // Fix malformed function parameters
    content = content.replace(/\(\s*{\s*([^}]+)\s*}\s*\)\s*=>\s*{/g, '({ $1 }) => {\n');
    content = content.replace(/\(\s*{\s*([^}]+)\s*}\s*\)\s*=>\s*{/g, '({ $1 }) => {\n');

    // Fix malformed JSX
    content = content.replace(/return\s*\(\s*<div;\s*className/g, 'return (\n    <div\n      className');
    content = content.replace(/className={`([^`]+)`}\s*>\s*;/g, 'className={`$1`}>\n');
    content = content.replace(/;\s*>\s*;/g, '>\n');
    content = content.replace(/;\s*<\/div>\s*\)\s*}/g, '\n    </div>\n  );\n}');

    // Fix interface definitions
    content = content.replace(/interface\s+(\w+)\s*{\s*([^}]+)\s*}\s*const\s+/g, 'interface $1 {\n  $2\n}\n\nconst ');
    content = content.replace(/interface\s+(\w+)\s*{\s*([^}]+)\s*}\s*export\s+/g, 'interface $1 {\n  $2\n}\n\nexport ');

    // Fix array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*;\s*/g, 'const $1 = [\n  ');
    content = content.replace(/;\s*\]\s*;/g, '\n];\n');

    // Fix object declarations
    content = content.replace(/const\s+(\w+)\s*=\s*{\s*;\s*/g, 'const $1 = {\n  ');
    content = content.replace(/;\s*}\s*;/g, '\n};\n');

    // Fix useEffect and other hooks
    content = content.replace(/useEffect\(\s*\(\s*\)\s*=>\s*{/g, 'useEffect(() => {\n');
    content = content.replace(/useState\(\s*([^)]+)\s*\)\s*const\s+/g, 'useState($1);\n  const ');

    // Fix missing semicolons in variable declarations
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*useEffect/g, '$1 = $2;\n  useEffect');
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*useState/g, '$1 = $2;\n  useState');
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*useRef/g, '$1 = $2;\n  useRef');

    // Fix malformed function calls
    content = content.replace(/\(\s*{\s*([^}]+)\s*}\s*\)\s*=>\s*{/g, '({ $1 }) => {\n');

    // Fix missing semicolons in return statements
    content = content.replace(/return\s*\(\s*<div;\s*className/g, 'return (\n    <div\n      className');

    // Fix malformed JSX attributes
    content = content.replace(/className={`([^`]+)`}\s*>\s*;/g, 'className={`$1`}>\n');
    content = content.replace(/;\s*>\s*;/g, '>\n');

    // Fix missing semicolons in function calls
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*return/g, '$1 = $2;\n  return');

    // Fix malformed array elements
    content = content.replace(/{\s*name:\s*'([^']+)',\s*href:\s*'([^']+)'\s*},/g, '  { name: \'$1\', href: \'$2\' },\n');

    // Fix missing semicolons in object properties
    content = content.replace(/(\w+):\s*([^,;]+)([^,;])\s*}/g, '$1: $2,\n}');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const files = findFilesWithErrors();
console.log(`🔍 Found ${files.length} files to check`);

let fixedCount = 0;
files.forEach(file => {
  if (fixSyntaxErrors(file)) {
    console.log(`✅ Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\n📊 Fixed ${fixedCount} files`);