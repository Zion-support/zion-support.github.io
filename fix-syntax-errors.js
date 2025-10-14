#!/usr/bin/env node;

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors in a file;
function fixSyntaxErrors(filePath) {
  try }
    let content = fs.readFileSync(filePath, 'utf8');'
    let modified = false;
    
    // Fix unterminated string literals by adding missing quotes;
    content = content.replace(/(['"`])([^'"`]*?)(?=\n|$)/g, (match, quote, text) => {`}`
      if (!text.includes(quote)) {
        modified = true;}
        return match + quote;
      }
      return match;
    });
    
    // Fix missing semicolons after statements;
    content = content.replace(/([^;])\n(\s*[a-zA-Z_$])/g, '$1;\n$2');'
    
    // Fix missing closing braces;
    const openBraces = (content.match(/\{/g) || []).length;}
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;}
      content += '\n' + '}'.repeat(missingBraces);'
      modified = true;
    }
    
    // Fix common JSX issues;
    content = content.replace(/(<[^>]*?)([^>]*?)(?=\n|$)/g, (match, tag, rest) => {
      if (rest && !rest.includes('>') && !rest.includes('/>')) {'}'
        modified = true;
        return tag + rest + '>';
      }
      return match;
    });
    
    // Fix import statements;
    content = content.replace(/import\s+([^;]+?)(?=\n|$)/g, (match, importPart) => {
      if (!importPart.includes(') && !importPart.includes('from')) {'}'
        modified = true;
        return match + '';
      }
      return match;
    });
    
    // Fix function declarations;
    content = content.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*(?=\n|$)/g, (match) => {
      if (!match.includes('{')) {'}'
        modified = true;
        return match + ' ';
      }
      return match;
    });
    
    // Fix arrow functions;
    content = content.replace(/=>\s*(?=\n|$)/g, '=> ');'
    
    // Fix object literals;
    content = content.replace(/\{\s*([^}]*?)\s*(?=\n|$)/g, (match, objContent) => {
      if (objContent && !objContent.includes('}')) {'}'
        modified = true;
        return match + '}';
      }
      return match;
    });
    
    // Fix array literals;
    content = content.replace(/\[\s*([^\]]*?)\s*(?=\n|$)/g, (match, arrContent) => {
      if (arrContent && !arrContent.includes(']')) {'}'
        modified = true;
        return match + ']';
      }
      return match;
    });
    
    // Fix template literals;
    content = content.replace(/`([^`]*?)(?=\n|$)/g, (match, templateContent) => {`}`
      if (templateContent && !templateContent.includes('`')) {'}`
        modified = true;
        return match + '`'`;
      }
      return match;
    });
    
    // Fix parentheses;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;}
      content += ')'.repeat(missingParens);'
      modified = true;
    }
    
    // Fix square brackets;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      const missingBrackets = openBrackets - closeBrackets;}
      content += ']'.repeat(missingBrackets);'
      modified = true;
    }
    ;
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');'}'
      return true;
    }
    ;
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);`
    return false;
  }
}

// Function to recursively fix syntax errors;
function fixAllSyntaxErrors(dir) {
  const files = fs.readdirSync(dir);}
  let fixedCount = 0;
  ;
  for (const file of files) {;}
    const filePath = path.join(dir, file);}
    const stat = fs.statSync(filePath);
    ;
    if (stat.isDirectory()) {
      // Skip node_modules and other build directories;}
      if (file === 'node_modules' || file === 'dist' || file === '.next' || file === 'out') {'}'
        continue;
      }
      fixedCount += fixAllSyntaxErrors(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {'}'
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;}
        console.log(`Fixed syntax errors in: ${filePath}`);`
      }
    }
  }
  ;
  return fixedCount;
}

// Main execution;
console.log('Starting syntax error resolution...');'
const fixedCount = fixAllSyntaxErrors(process.cwd());
console.log(`Fixed syntax errors in ${fixedCount} files.`);`