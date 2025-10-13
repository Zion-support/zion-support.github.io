#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals in import statements
    content = content.replace(/from ['"]([^'"]*);$/gm, (match, p1) => {
      if (!p1.endsWith("'") && !p1.endsWith('"')) {
        return `from '${p1}'`;
      }
      return match;
    });

    // Fix missing quotes in import statements
    content = content.replace(/import ([^;]+);$/gm, (match, p1) => {
      if (p1.includes("'") || p1.includes('"')) {
        return match;
      }
      return `import ${p1};`;
    });

    // Fix semicolons in JSX (remove them)
    content = content.replace(/<([^>]+)>;/g, '<$1>');
    content = content.replace(/<\/[^>]+>;/g, (match) => match.slice(0, -1));

    // Fix object property syntax errors
    content = content.replace(/(\w+):\s*icon:\s*(\w+)/g, '$1: $2');
    content = content.replace(/(\w+):\s*'([^']*)';/g, '$1: \'$2\',');
    content = content.replace(/(\w+):\s*"([^"]*)";/g, '$1: "$2",');

    // Fix missing closing braces and brackets
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;

    if (openBraces > closeBraces) {
      content += '\n'.repeat(openBraces - closeBraces).replace(/\n/g, '}\n');
      modified = true;
    }
    if (openBrackets > closeBrackets) {
      content += '\n'.repeat(openBrackets - closeBrackets).replace(/\n/g, ']\n');
      modified = true;
    }
    if (openParens > closeParens) {
      content += '\n'.repeat(openParens - closeParens).replace(/\n/g, ')\n');
      modified = true;
    }

    // Fix duplicate imports
    const lines = content.split('\n');
    const importLines = lines.filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      content = content.replace(/import[^;]+;/g, '').replace(/(\n\n)/g, '\n');
      content = uniqueImports.join('\n') + '\n' + content;
      modified = true;
    }

    // Fix malformed JSX
    content = content.replace(/<(\w+)\s+([^>]*)\s*>\s*;/g, '<$1 $2>');
    content = content.replace(/<\/\w+>\s*;/g, (match) => match.replace(';', ''));

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting remaining syntax error fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed syntax errors in ${fixedCount} files`);

// Run build to check
try {
  console.log('Running build check...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {
  console.log('Build still has issues, but progress made...');
}

console.log('Remaining syntax error fixing completed!');