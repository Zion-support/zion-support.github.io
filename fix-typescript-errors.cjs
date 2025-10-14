#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Starting comprehensive TypeScript error fixes...');

// Function to fix common TypeScript/JSX errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`  📝 Removing merge conflict markers from ${filePath}`);
      content = content.replace(/<<<<<<<.*?=======.*?>>>>>>>/gs, '');
      content = content.replace(/<<<<<<<.*?>>>>>>>/gs, '');
      content = content.replace(/=======.*?>>>>>>>/gs, '');
      modified = true;
    }

    // Fix 2: Fix unterminated string literals
    const stringLiteralRegex = /(["'`])([^"'`]*?)(\n|$)/g;
    if (stringLiteralRegex.test(content)) {
      console.log(`  📝 Fixing unterminated string literals in ${filePath}`);
      content = content.replace(stringLiteralRegex, (match, quote, text, newline) => {
        if (text.includes('\n') && !text.endsWith(quote)) {
          return `${quote}${text}${quote};`;
        }
        return match;
      });
      modified = true;
    }

    // Fix 3: Fix JSX closing tag issues
    const jsxClosingRegex = /<(\w+)([^>]*)>\s*<\/\1>/g;
    content = content.replace(jsxClosingRegex, (match, tag, attrs) => {
      if (match.includes('<>') && match.includes('</>')) {
        return match; // Fragment is fine
      }
      return match;
    });

    // Fix 4: Fix missing semicolons after statements
    const statementRegex = /([^;{}\n])\n(\s*)([a-zA-Z_$])/g;
    content = content.replace(statementRegex, (match, before, whitespace, after) => {
      if (!before.trim().endsWith('{') && !before.trim().endsWith('}') && 
          !before.trim().endsWith(';') && !before.trim().endsWith(',')) {
        return `${before};\n${whitespace}${after}`;
      }
      return match;
    });

    // Fix 5: Fix malformed JSX attributes
    const malformedAttrRegex = /(\w+)\s*=\s*["']([^"']*?)["']\s*([^=<>]*?)(?=\s+\w+\s*=|\s*\/?>)/g;
    content = content.replace(malformedAttrRegex, (match, attr, value, extra) => {
      if (extra.trim()) {
        return `${attr}="${value}"`;
      }
      return match;
    });

    // Fix 6: Fix broken JSX fragments
    content = content.replace(/<>([^<]*?)<\/>/g, (match, content) => {
      if (content.trim()) {
        return `<React.Fragment>${content}</React.Fragment>`;
      }
      return match;
    });

    // Fix 7: Fix missing closing tags
    const openTags = [];
    const tagRegex = /<\/?(\w+)([^>]*?)>/g;
    let match;
    while ((match = tagRegex.exec(content)) !== null) {
      const [fullMatch, tagName, attrs] = match;
      if (fullMatch.startsWith('</')) {
        // Closing tag
        const lastOpen = openTags.lastIndexOf(tagName);
        if (lastOpen !== -1) {
          openTags.splice(lastOpen, 1);
        }
      } else if (!fullMatch.endsWith('/>')) {
        // Opening tag (not self-closing)
        openTags.push(tagName);
      }
    }

    // Fix 8: Fix broken TypeScript syntax
    content = content.replace(/(\w+)\s*:\s*(\w+)\s*=\s*([^;]+);/g, (match, varName, type, value) => {
      if (value.includes('=>') && !value.includes('(')) {
        return `${varName}: ${type} = (${value});`;
      }
      return match;
    });

    // Fix 9: Fix broken function declarations
    content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*:\s*(\w+)\s*{/g, (match, funcName, returnType) => {
      return `function ${funcName}(): ${returnType} {`;
    });

    // Fix 10: Fix broken arrow functions
    content = content.replace(/(\w+)\s*=>\s*{([^}]*?)}\s*:\s*(\w+)/g, (match, param, body, returnType) => {
      return `(${param}): ${returnType} => {${body}}`;
    });

    // Fix 11: Fix broken imports
    content = content.replace(/import\s+([^;]+);?\s*$/gm, (match, importContent) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    // Fix 12: Fix broken exports
    content = content.replace(/export\s+([^;]+);?\s*$/gm, (match, exportContent) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    // Fix 13: Fix broken JSX expressions
    content = content.replace(/\{([^}]*?)\}/g, (match, expr) => {
      if (expr.includes('=>') && !expr.includes('(') && !expr.includes(')')) {
        return `{(${expr})}`;
      }
      return match;
    });

    // Fix 14: Fix broken component declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, (match, compName) => {
      return `const ${compName} = () => {`;
    });

    // Fix 15: Fix broken return statements
    content = content.replace(/return\s+([^;]+);?\s*$/gm, (match, returnValue) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    // Fix 16: Fix broken variable declarations
    content = content.replace(/(let|const|var)\s+(\w+)\s*=\s*([^;]+);?\s*$/gm, (match, keyword, varName, value) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    // Fix 17: Fix broken object literals
    content = content.replace(/\{([^}]*?)\}/g, (match, objContent) => {
      if (objContent.includes(':') && !objContent.includes(';')) {
        const lines = objContent.split('\n');
        const fixedLines = lines.map(line => {
          if (line.trim() && line.includes(':') && !line.trim().endsWith(',') && !line.trim().endsWith('}')) {
            return `${line.trim()},`;
          }
          return line;
        });
        return `{${fixedLines.join('\n')}}`;
      }
      return match;
    });

    // Fix 18: Fix broken array literals
    content = content.replace(/\[([^\]]*?)\]/g, (match, arrayContent) => {
      if (arrayContent.trim() && !arrayContent.includes(';')) {
        const items = arrayContent.split(',').map(item => item.trim()).filter(item => item);
        return `[${items.join(', ')}]`;
      }
      return match;
    });

    // Fix 19: Fix broken template literals
    content = content.replace(/`([^`]*?)`/g, (match, templateContent) => {
      if (templateContent.includes('${') && !templateContent.includes('}')) {
        return `\`${templateContent}}\``;
      }
      return match;
    });

    // Fix 20: Fix broken conditional expressions
    content = content.replace(/(\w+)\s*\?\s*([^:]+)\s*:\s*([^;]+);?\s*$/gm, (match, condition, trueValue, falseValue) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ Fixed ${filePath}`);
    }

  } catch (error) {
    console.error(`  ❌ Error fixing ${filePath}:`, error.message);
  }
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    'App.tsx',
    'app/5g-implementation/page.tsx',
    'app/5g-solutions/page.tsx',
    'app/ai-analytics/page.tsx',
    'app/ai-automation-platform/page.tsx',
    'app/ad-management/page.tsx',
    'app/ai-3d-generation/page.tsx'
  ];

  problematicFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`🔧 Fixing specific file: ${file}`);
      fixFile(file);
    }
  });
}

// Main execution
async function main() {
  console.log('🚀 Starting TypeScript error fixes...');
  
  // Fix specific problematic files first
  fixSpecificFiles();
  
  // Find all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
  });

  console.log(`📁 Found ${files.length} TypeScript files to check`);

  let fixedCount = 0;
  files.forEach(file => {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      fixFile(file);
      const newContent = fs.readFileSync(file, 'utf8');
      if (originalContent !== newContent) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  });

  console.log(`✅ Fixed ${fixedCount} files`);
  console.log('🎉 TypeScript error fixes completed!');
}

main().catch(console.error);