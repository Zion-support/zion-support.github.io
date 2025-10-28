#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing braces and parentheses
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    // Add missing closing braces
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }
    
    // Add missing closing parentheses
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
      modified = true;
    }
    
    // Fix "use client" directive placement
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      const useClientMatch = content.match(/'use client'[\s\S]*?\n/);
      if (useClientMatch) {
        content = content.replace(/'use client'[\s\S]*?\n/, '');
        content = "'use client'\n" + content;
        modified = true;
      }
    }
    
    // Fix malformed function declarations
    content = content.replace(
      /function\s+(\w+)\s*\(\s*\)\s*\{[\s\S]*?\}\s*$/gm,
      (match) => {
        if (!match.includes('return')) {
          return match.replace(/\}\s*$/, '\n  return null;\n}');
        }
        return match;
      }
    );
    
    // Fix incomplete JSX
    content = content.replace(
      /<(\w+)[^>]*>\s*$/gm,
      (match) => {
        const tagName = match.match(/<(\w+)/)[1];
        return match + `</${tagName}>`;
      }
    );
    
    // Fix missing semicolons
    content = content.replace(
      /(\w+)\s*$/gm,
      (match) => {
        if (match.trim() && !match.includes(';') && !match.includes('}') && !match.includes(')')) {
          return match + ';';
        }
        return match;
      }
    );
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('🔧 Fixing syntax errors...');
const fixedCount = processDirectory('./app');
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);