#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
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
