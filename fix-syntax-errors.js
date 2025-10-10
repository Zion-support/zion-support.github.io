#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript errors
function getTypeScriptErrors() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    return output.split('\n').filter(line => line.includes('error TS'));
  } catch (error) {
    return error.stdout.split('\n').filter(line => line.includes('error TS'));
  }
}

// Fix common syntax errors in a file
function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix missing closing braces in JSX
  const jsxPattern = /(\s*)(<[^>]+>)(\s*)([^<]*?)(\s*)(<\/[^>]+>)/g;
  const beforeLength = content.length;

  // Fix common patterns
  const fixes = [
    // Fix missing closing braces in className templates
    {
      pattern: /className=\{`([^`]*?)\$\{([^}]*?)\}\s*([^`]*?)\`\}/g,
      replacement: (match, before, expr, after) => {
        if (!match.includes('}')) {
          return `className={\`${before}\${${expr}}${after}\`}`;
        }
        return match;
      }
    },
    // Fix missing closing parentheses in function calls
    {
      pattern: /(\w+\([^)]*?)\s*$/gm,
      replacement: (match) => {
        if (match.includes('(') && !match.includes(')')) {
          return match + ')';
        }
        return match;
      }
    },
    // Fix missing closing braces in object literals
    {
      pattern: /(\{[^}]*?)\s*$/gm,
      replacement: (match) => {
        const openBraces = (match.match(/\{/g) || []).length;
        const closeBraces = (match.match(/\}/g) || []).length;
        if (openBraces > closeBraces) {
          return match + '}';
        }
        return match;
      }
    }
  ];

  fixes.forEach(fix => {
    const newContent = content.replace(fix.pattern, fix.replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  }

  return false;
}

// Main function
function main() {
  console.log('🔧 Starting syntax error fixes...');
  
  const errors = getTypeScriptErrors();
  const files = new Set();
  
  errors.forEach(error => {
    const match = error.match(/^([^(]+)\((\d+),(\d+)\):/);
    if (match) {
      files.add(match[1]);
    }
  });

  console.log(`Found ${files.size} files with errors`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`✅ Fixed ${fixedCount} files`);
  
  // Run type check again to see remaining errors
  console.log('\n🔍 Running type check again...');
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('✅ All TypeScript errors fixed!');
  } catch (error) {
    console.log('⚠️  Some errors remain, continuing...');
  }
}

main();