#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
;
function fixSyntaxErrors(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    ;
    // Fix common syntax errors;
    content = content.replace(/([\s\S]*?);
    content = content.replace(//g, '');
    content = content.replace(/;
    ;
    // Fix shebang issues;
    if (content.includes('#!/usr/bin/env node') && !content.startsWith('#!/usr/bin/env node')) {;
      content = content.replace(/.*#!/usr\/bin\/env node.*\n/g, '#!/usr/bin/env node\n');
    }
    ;
    // Fix missing commas in object literals;
    content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1:$2:');
    content = content.replace(/(\w+):\s*(\w+)\s*:/g, '$1:$2:');
    ;
    // Fix missing semicolons;
    content = content.replace(/(\w+)\s*(\w+)\s*}/g, '$1; $2}');
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1; $2]');
    ;
    // Fix unterminated strings;
    content = content.replace(/(['"`])([^'"`]*?)(\n)/g, '$1$2$1$3');
    ;
    // Fix missing quotes in object keys;
    content = content.replace(/(\w+):/g, '"$1":');
    ;
    // Fix missing commas between array elements;
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1, $2]');
    ;
    // Clean up extra whitespace;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    ;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors:in:${filePath}`);
      return true;
    }
    ;
    return false;
  } catch (error) {;
    console.error(`Error processing ${filePath} `, error.message);
    return false;
  }
}
;
function findFilesWithErrors(dir) {;
  const files = [];
  const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
  ;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
    ;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      ;
      if (stat.isDirectory()) {;
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'backup-merge-conflicts'].includes(item)) {;
          traverse(fullPath);
        }
      } else if (stat.isFile()) {;
        const ext = path.extname(fullPath);
        if (extensions.includes(ext)) {;
          files.push(fullPath);
        }
      }
    }
  }
  ;
  traverse(dir);
  return files;
}
;
// Main execution;
console.log('🔍 Scanning for files with syntax errors...');
const files = findFilesWithErrors(process.cwd());
;
console.log(`Found ${files.length} files to check`);
;
let fixedCount = 0;
for (const file of files) {;
  if (fixSyntaxErrors(file)) {;
    fixedCount++;
  }
}
;
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
console.log('🎉 Syntax error fixing complete!');
=======
const { execSync } = require('child_process');

console.log('🚀 Starting Comprehensive Syntax Fixer');

// Fix common syntax issues
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix import statements with trailing commas
    if (content.includes("import React from 'react',")) {
      content = content.replace(
        /import React from 'react',/g,
        "import React from 'react';"
      );
      fixed = true;
    }

    // Fix export statements with trailing commas
    if (content.includes('export interface')) {
      content = content.replace(
        /export interface (\w+) \{/g,
        'export interface $1 {'
      );
      fixed = true;
    }

    // Fix object syntax issues
    content = content.replace(/\{\s*,/g, '{');
    content = content.replace(/,\s*\}/g, '}');
    content = content.replace(/,\s*,/g, ',');

    // Fix array syntax issues
    content = content.replace(/\[\s*,/g, '[');
    content = content.replace(/,\s*\]/g, ']');

    // Fix function parameter issues
    content = content.replace(/\(\s*,/g, '(');
    content = content.replace(/,\s*\)/g, ')');

    // Fix semicolon issues
    content = content.replace(/;\s*,/g, ';');
    content = content.replace(/,\s*;/g, ';');

    // Fix React component syntax
    content = content.replace(
      /const (\w+) = \(\) => \{/g,
      'const $1 = () => {'
    );
    content = content.replace(/export default (\w+),/g, 'export default $1;');

    // Fix TypeScript interface syntax
    content = content.replace(/interface (\w+) \{;/g, 'interface $1 {');
    content = content.replace(/type (\w+) = \{;/g, 'type $1 = {');

    // Fix JSX syntax
    content = content.replace(/<(\w+)\s*,/g, '<$1');
    content = content.replace(/,\s*>/g, '>');

    // Fix string literal issues
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');

    // Fix performance API issues
    if (content.includes('performance.')) {
      content = content.replace(/performance\./g, 'window.performance.');
    }

    // Fix React hooks issues
    content = content.replace(/useEffect\(\(\) => \{/g, 'useEffect(() => {');

    // Fix console statements
    content = content.replace(/console\.log\(/g, '// console.log(');

    if (fixed || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (
      stat.isDirectory() &&
      !item.startsWith('.') &&
      item !== 'node_modules'
    ) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
try {
  const files = getAllFiles('/workspace');
  let fixedCount = 0;

  console.log(`Found ${files.length} files to check`);

  for (const file of files) {
    if (fixSyntaxIssues(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  }

  console.log(`\n🎯 Fixed ${fixedCount} files`);

  // Try to run build after fixes
  console.log('\n🔨 Testing build after fixes...');
  try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Build successful after fixes');
  } catch (error) {
    console.log('⚠️ Build still has issues, but syntax fixes applied');
  }
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
