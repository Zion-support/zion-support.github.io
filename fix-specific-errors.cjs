#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting targeted TypeScript error fixes...');

// Function to fix specific problematic patterns
function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove extra semicolons and quotes from imports
    if (content.includes('"";')) {
      console.log(`  📝 Fixing malformed imports in ${filePath}`);
      content = content.replace(/"";/g, '');
      content = content.replace(/;\s*""/g, '');
      content = content.replace(/from\s+"([^"]+)""/g, 'from "$1"');
      modified = true;
    }

    // Fix 2: Fix broken JSX fragments
    if (content.includes('<>') && content.includes('</>')) {
      console.log(`  📝 Fixing JSX fragments in ${filePath}`);
      content = content.replace(/<>([^<]*?)<\/>/g, (match, content) => {
        if (content.trim()) {
          return `<React.Fragment>${content}</React.Fragment>`;
        }
        return match;
      });
      modified = true;
    }

    // Fix 3: Fix unterminated string literals
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

    // Fix 4: Fix broken function declarations
    content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*:\s*(\w+)\s*{/g, (match, funcName, returnType) => {
      return `function ${funcName}(): ${returnType} {`;
    });

    // Fix 5: Fix broken arrow functions
    content = content.replace(/(\w+)\s*=>\s*{([^}]*?)}\s*:\s*(\w+)/g, (match, param, body, returnType) => {
      return `(${param}): ${returnType} => {${body}}`;
    });

    // Fix 6: Fix broken component declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, (match, compName) => {
      return `const ${compName} = () => {`;
    });

    // Fix 7: Fix broken JSX expressions
    content = content.replace(/\{([^}]*?)\}/g, (match, expr) => {
      if (expr.includes('=>') && !expr.includes('(') && !expr.includes(')')) {
        return `{(${expr})}`;
      }
      return match;
    });

    // Fix 8: Fix broken return statements
    content = content.replace(/return\s+([^;]+);?\s*$/gm, (match, returnValue) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    // Fix 9: Fix broken variable declarations
    content = content.replace(/(let|const|var)\s+(\w+)\s*=\s*([^;]+);?\s*$/gm, (match, keyword, varName, value) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    // Fix 10: Fix broken object literals
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

    // Fix 11: Fix broken array literals
    content = content.replace(/\[([^\]]*?)\]/g, (match, arrayContent) => {
      if (arrayContent.trim() && !arrayContent.includes(';')) {
        const items = arrayContent.split(',').map(item => item.trim()).filter(item => item);
        return `[${items.join(', ')}]`;
      }
      return match;
    });

    // Fix 12: Fix broken template literals
    content = content.replace(/`([^`]*?)`/g, (match, templateContent) => {
      if (templateContent.includes('${') && !templateContent.includes('}')) {
        return `\`${templateContent}}\``;
      }
      return match;
    });

    // Fix 13: Fix broken conditional expressions
    content = content.replace(/(\w+)\s*\?\s*([^:]+)\s*:\s*([^;]+);?\s*$/gm, (match, condition, trueValue, falseValue) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    // Fix 14: Fix broken imports
    content = content.replace(/import\s+([^;]+);?\s*$/gm, (match, importContent) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    // Fix 15: Fix broken exports
    content = content.replace(/export\s+([^;]+);?\s*$/gm, (match, exportContent) => {
      if (!match.endsWith(';')) {
        return `${match};`;
      }
      return match;
    });

    // Fix 16: Fix broken JSX attributes
    content = content.replace(/(\w+)\s*=\s*["']([^"']*?)["']\s*([^=<>]*?)(?=\s+\w+\s*=|\s*\/?>)/g, (match, attr, value, extra) => {
      if (extra.trim()) {
        return `${attr}="${value}"`;
      }
      return match;
    });

    // Fix 17: Fix broken JSX closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, (match, tag, attrs) => {
      if (match.includes('<>') && match.includes('</>')) {
        return match; // Fragment is fine
      }
      return match;
    });

    // Fix 18: Fix broken TypeScript syntax
    content = content.replace(/(\w+)\s*:\s*(\w+)\s*=\s*([^;]+);/g, (match, varName, type, value) => {
      if (value.includes('=>') && !value.includes('(')) {
        return `${varName}: ${type} = (${value});`;
      }
      return match;
    });

    // Fix 19: Fix broken JSX expressions
    content = content.replace(/\{([^}]*?)\}/g, (match, expr) => {
      if (expr.includes('=>') && !expr.includes('(') && !expr.includes(')')) {
        return `{(${expr})}`;
      }
      return match;
    });

    // Fix 20: Fix broken component declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, (match, compName) => {
      return `const ${compName} = () => {`;
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
    'app/ai-3d-generation/page.tsx',
    'app/ai-automation-suite/page.tsx',
    'app/ai-automation/page.tsx',
    'app/ai-chatbot-builder/page.tsx'
  ];

  problematicFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`🔧 Fixing specific file: ${file}`);
      fixSpecificErrors(file);
    }
  });
}

// Main execution
async function main() {
  console.log('🚀 Starting targeted TypeScript error fixes...');
  
  // Fix specific problematic files first
  fixSpecificFiles();
  
  console.log('🎉 Targeted TypeScript error fixes completed!');
}

main().catch(console.error);