#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax errors
    const fixes = [
      // Fix missing closing tags
      {
        pattern: /<section([^>]*)>([\s\S]*?)(?=<section|$)/g,
        replacement: (match, attrs, inner) => {
          if (!inner.includes('</section>')) {
            return `<section${attrs}>${inner}</section>`;
          }
          return match;
        }
      },
      // Fix missing closing div tags
      {
        pattern: /<div([^>]*)>([\s\S]*?)(?=<div|<section|<main|$)/g,
        replacement: (match, attrs, inner) => {
          if (!inner.includes('</div>') && !inner.includes('<div') && !inner.includes('<section') && !inner.includes('<main')) {
            return `<div${attrs}>${inner}</div>`;
          }
          return match;
        }
      },
      // Fix JSX fragments
      {
        pattern: /<>([\s\S]*?)(?=<[^/]|$)/g,
        replacement: (match, inner) => {
          if (!inner.includes('</>')) {
            return `<>${inner}</>`;
          }
          return match;
        }
      },
      // Fix missing closing Helmet tags
      {
        pattern: /<Helmet([^>]*)>([\s\S]*?)(?=<Helmet|$)/g,
        replacement: (match, attrs, inner) => {
          if (!inner.includes('</Helmet>')) {
            return `<Helmet${attrs}>${inner}</Helmet>`;
          }
          return match;
        }
      },
      // Fix missing closing main tags
      {
        pattern: /<main([^>]*)>([\s\S]*?)(?=<main|$)/g,
        replacement: (match, attrs, inner) => {
          if (!inner.includes('</main>')) {
            return `<main${attrs}>${inner}</main>`;
          }
          return match;
        }
      }
    ];
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Fix specific syntax issues
    const lines = content.split('\n');
    const result = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Fix missing closing braces in JSX
      if (line.includes('Unexpected token') || line.includes('Did you mean')) {
        // Skip error lines
        continue;
      }
      
      // Fix missing closing parentheses
      if (line.includes(')\' expected') || line.includes(')\' expected')) {
        // Look for missing closing parenthesis
        const openParens = (line.match(/\(/g) || []).length;
        const closeParens = (line.match(/\)/g) || []).length;
        if (openParens > closeParens) {
          line += ')'.repeat(openParens - closeParens);
          modified = true;
        }
      }
      
      // Fix missing closing braces
      if (line.includes('}\' expected') || line.includes('}\' expected')) {
        const openBraces = (line.match(/\{/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length;
        if (openBraces > closeBraces) {
          line += '}'.repeat(openBraces - closeBraces);
          modified = true;
        }
      }
      
      result.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, result.join('\n'), 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with syntax errors
const { execSync } = require('child_process');

// First, let's get files that have parsing errors
const filesWithErrors = execSync('npm run lint 2>&1 | grep "Parsing error" | cut -d: -f1 | sort -u', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(f => f.length > 0 && f.includes('/workspace/'));

console.log(`Found ${filesWithErrors.length} files with syntax errors`);

let fixedCount = 0;
filesWithErrors.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`Fixed syntax errors in ${fixedCount} files`);