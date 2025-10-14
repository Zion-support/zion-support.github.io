#!/usr/bin/env node;
;
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors;
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals - add missing quotes;
  fixed = fixed.replace(/([^\\])(['"])([^'"]*?)(\n|$)/g, (match, before, quote, text, newline) => {
    if (text.trim() && !text.includes(quote)) {
      return before + quote + text + quote + newline;
    }
    return match;
  });
  
  // Fix malformed object properties - add missing commas;
  fixed = fixed.replace(/(\w+):\s*['"]([^'"]*)['"]\s*(\n\s*[^,}\s])/g, '$1: \'$2\',$3');
  
  // Fix missing commas in arrays and objects;
  fixed = fixed.replace(/(\w+):\s*['"]([^'"]*)['"]\s*(\n\s*[^,}\s])/g, '$1: \'$2\',$3');
  
  // Fix unterminated JSX attributes;
  fixed = fixed.replace(/(\w+)=['"]([^'"]*?)(\n|$)/g, (match, attr, value, newline) => {
    if (value.trim() && !value.includes('"') && !value.includes("'")) {
      return attr + '="' + value + '"' + newline;
    }
    return match;
  });
  
  // Fix missing closing tags - basic pattern matching;
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*$/gm, (match, tag, attrs) => {
    return match + `</${tag}>`;
  });
  
  // Fix malformed imports;
  fixed = fixed.replace(/import\s+{\s*([^}]*?)\s*}\s*from\s*['"]([^'"]*)['"];?\s*$/gm, (match, imports, module) => {
    const cleanImports = imports.replace(/[,\s]+$/, '').replace(/,\s*$/, '');
    return `import { ${cleanImports} } from '${module}';`;
  });
  
  // Fix missing semicolons;
  fixed = fixed.replace(/(\w+)\s*$/gm, (match) => {
    if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}')) {
      return match + ';';
    }
    return match;
  });
  
  return fixed;
}

// Function to fix specific file patterns;
function fixFilePatterns(filePath, content) {
  let fixed = content;
  
  // Fix common React component issues;
  if (filePath.includes('.tsx') || filePath.includes('.jsx')) {
    // Fix missing React import;
    if (!fixed.includes('import React') && fixed.includes('React.FC')) {
      fixed = "import React from 'react';\n" + fixed;
    }
    
    // Fix missing closing tags in JSX;
    fixed = fixed.replace(/<(\w+)([^>]*)>\s*$/gm, (match, tag, attrs) => {
      if (!match.includes('</')) {
        return match + `</${tag}>`;
      }
      return match;
    });
  }
  
  return fixed;
}

// Main function to process files;
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      try {
        const filePath = path.resolve(file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        totalFiles++;
        
        // Skip if file is already valid (basic check)
        if (content.includes('export default') || content.includes('export {')) {
          let fixed = fixSyntaxErrors(content);
          fixed = fixFilePatterns(file, fixed);
          
          if (fixed !== content) {
            fs.writeFileSync(filePath, fixed, 'utf8');
            fixedFiles++;
            console.log(`Fixed: ${file}`);
          }
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

// Run the fix;
processFiles().catch(console.error);