#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix final syntax errors
function fixFinalSyntax(content) {
  // Fix remaining string literal issues
  content = content.replace(/,\s*";/g, ';');
  content = content.replace(/;\s*";/g, ';');
  content = content.replace(/{\s*";/g, '{');
  content = content.replace(/}\s*";/g, '}');
  
  // Fix function declarations
  content = content.replace(/const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*{\s*};/g, 'const $1 = () => {');
  
  // Fix JSX syntax
  content = content.replace(/<([a-zA-Z]+):\s*([^>]+)>/g, '<$1 $2>');
  content = content.replace(/<\/[a-zA-Z]+:>/g, '>');
  
  // Fix attribute syntax
  content = content.replace(/(\w+)\s*=\s*"([^"]+)";/g, '$1="$2"');
  content = content.replace(/(\w+)\s*=\s*{([^}]+)}";/g, '$1={$2}');
  
  // Fix import statements
  content = content.replace(/import\s+([^;]+);";/g, 'import $1;');
  
  // Fix console statements
  content = content.replace(/console\.log\('([^']+)',\s*([^;]+)\);/g, "console.log('$1', $2);");
  content = content.replace(/console\.error\('([^']+)',\s*([^;]+)\);/g, "console.error('$1', $2);");
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixFinalSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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

module.exports = { fixFinalSyntax, processFile };