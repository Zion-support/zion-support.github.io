/* eslint-disable @typescript-eslint/no-require-imports */
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix double quotes in import statements
  fixed = fixed.replace(/from\s+['"]([^'"]+)['"]\s*['"]/g, "from '$1'");
  
  // Fix missing closing quotes in import statements
  fixed = fixed.replace(/from\s+['"]([^'"]+)\s*$/gm, "from '$1';");
  
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import\s+([^'"]+)\s+from\s+['"]([^'"]+)\s*$/gm, "import $1 from '$2';");
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix 'use client' directive
  fixed = fixed.replace(/'use client;\s*$/gm, "'use client';");
  
  // Fix malformed JSX - add missing closing tags
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*?)\s*>\s*$/gm, '<$1 $2></$1>');
  
  // Fix self-closing tags that should be closed
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*?)\s*>\s*$/gm, '<$1 $2></$1>');
  
  // Fix missing closing quotes in JSX attributes
  fixed = fixed.replace(/=([^"'>\s]+)(?=\s|>)/g, '="$1"');
  
  // Fix unterminated JSX comments
  fixed = fixed.replace(/{\/\*([^*]|\*[^/])*$/gm, '{/* */}');
  
  // Fix missing closing braces in JSX
  fixed = fixed.replace(/\{([^}]*)$/gm, '{$1}');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+function\s+([^(]+)\s*\(/g, 'export default function $1(');
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/\(([^)]*)$/gm, '($1)');
  
  // Fix missing closing brackets in object literals
  fixed = fixed.replace(/\{([^}]*)$/gm, '{$1}');
  
  // Fix missing closing brackets in array literals
  fixed = fixed.replace(/\[([^\]]*)$/gm, '[$1]');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const patterns = [
    '**/*.tsx',
    '**/*.ts',
    '**/*.jsx',
    '**/*.js'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, {
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
    });
    
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };