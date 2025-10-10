#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix stray )} patterns
      {
        pattern: /(\s+)\}\)(\s*)$/gm,
        replacement: '$1}$2'
      },
      // Fix missing closing tags in JSX
      {
        pattern: /<section([^>]*)>([\s\S]*?)(?=<section|<main|<\/div>|$)/g,
        replacement: (match, attrs, inner) => {
          if (!inner.includes('</section>') && !inner.includes('<section')) {
            return `<section${attrs}>${inner}</section>`;
          }
          return match;
        }
      },
      // Fix missing closing div tags
      {
        pattern: /<div([^>]*)>([\s\S]*?)(?=<div|<section|<main|<\/div>|$)/g,
        replacement: (match, attrs, inner) => {
          if (!inner.includes('</div>') && !inner.includes('<div') && !inner.includes('<section') && !inner.includes('<main')) {
            return `<div${attrs}>${inner}</div>`;
          }
          return match;
        }
      },
      // Fix missing closing main tags
      {
        pattern: /<main([^>]*)>([\s\S]*?)(?=<main|<\/div>|$)/g,
        replacement: (match, attrs, inner) => {
          if (!inner.includes('</main>') && !inner.includes('<main')) {
            return `<main${attrs}>${inner}</main>`;
          }
          return match;
        }
      },
      // Fix missing closing Helmet tags
      {
        pattern: /<Helmet([^>]*)>([\s\S]*?)(?=<Helmet|<\/div>|$)/g,
        replacement: (match, attrs, inner) => {
          if (!inner.includes('</Helmet>') && !inner.includes('<Helmet')) {
            return `<Helmet${attrs}>${inner}</Helmet>`;
          }
          return match;
        }
      },
      // Fix JSX fragments
      {
        pattern: /<>([\s\S]*?)(?=<[^/]|$)/g,
        replacement: (match, inner) => {
          if (!inner.includes('</>') && !inner.includes('<>')) {
            return `<>${inner}</>`;
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
    
    // Fix specific line-by-line issues
    const lines = content.split('\n');
    const result = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const originalLine = line;
      
      // Fix missing closing parentheses
      if (line.includes(')\' expected') || line.includes(')\' expected')) {
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
      
      // Fix stray )} patterns
      if (line.includes('})}') && !line.includes('map(')) {
        line = line.replace(/}\)\}/g, '}');
        modified = true;
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

// Get all TypeScript/JSX files
const { execSync } = require('child_process');

const files = execSync('find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | head -50', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(f => f.length > 0);

console.log(`Processing ${files.length} files`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed syntax errors in ${fixedCount} files`);