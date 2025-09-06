#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let totalFixed = 0;

files.forEach(file => {
  try {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in object literals and function parameters
    content = content.replace(/(\w+)\s*=\s*\{([^}]*)\}\s*$/gm, (match, varName, objContent) => {
      if (objContent && !objContent.trim().endsWith(',') && objContent.trim() !== '') {
        modified = true;
        return `${varName} = {${objContent},}`;
      }
      return match;
    });
    
    // Fix missing semicolons after variable declarations
    content = content.replace(/^(\s*)(\w+)\s*=\s*[^;]+(?!;)\s*$/gm, (match, indent, varName) => {
      if (!match.includes('function') && !match.includes('if') && !match.includes('for') && !match.includes('while') && !match.includes('switch') && !match.includes('try') && !match.includes('catch') && !match.includes('finally') && !match.includes('return') && !match.includes('throw') && !match.includes('break') && !match.includes('continue') && !match.includes('debugger') && !match.includes('export') && !match.includes('import')) {
        modified = true;
        return match + ';';
      }
      return match;
    });
    
    // Fix missing commas in function parameters
    content = content.replace(/\(([^)]*)\s*\)\s*=>/g, (match, params) => {
      if (params && !params.trim().endsWith(',') && params.trim() !== '') {
        modified = true;
        return `(${params},) =>`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nTotal files fixed: ${totalFixed}`);