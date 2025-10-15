#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  // Fix function declarations with missing opening braces
  content = content.replace(/function\s+([^{]+)\s*\{\}\s*return\s*\(\)/g, 'function $1 { return (');
  content = content.replace(/const\s+([^=]+):\s*React\.FC\s*=\s*\(\)\s*\{\}\s*return\s*\(\)/g, 'const $1: React.FC = () => { return (');
  
  // Fix JSX syntax issues
  content = content.replace(/<([a-zA-Z]+):\s*className/g, '<$1 className');
  content = content.replace(/<([a-zA-Z]+):\s*onClick/g, '<$1 onClick');
  content = content.replace(/<([a-zA-Z]+):\s*href/g, '<$1 href');
  content = content.replace(/<([a-zA-Z]+):\s*path/g, '<$1 path');
  content = content.replace(/<([a-zA-Z]+):\s*fallback/g, '<$1 fallback');
  
  // Fix className attributes
  content = content.replace(/className\s*=\s*"([^"]+)";/g, 'className="$1"');
  content = content.replace(/className\s*=\s*"([^"]+)";";/g, 'className="$1"');
  
  // Fix other attributes
  content = content.replace(/onClick\s*=\s*{([^}]+)}";/g, 'onClick={$1}');
  content = content.replace(/href\s*=\s*"([^"]+)";/g, 'href="$1"');
  content = content.replace(/path\s*=\s*"([^"]+)";/g, 'path="$1"');
  content = content.replace(/fallback\s*=\s*{([^}]+)}";/g, 'fallback={$1}');
  
  // Fix string literals
  content = content.replace(/'([^']+)';/g, "'$1';");
  content = content.replace(/"([^"]+)";/g, '"$1";');
  
  // Fix try-catch blocks
  content = content.replace(/try\s*\{;/g, 'try {');
  
  // Fix console statements
  content = content.replace(/console\.error\('([^']+)',\s*\{/g, "console.error('$1', {");
  
  // Fix return statements
  content = content.replace(/return\s*res\.status\(([^)]+)\)\.json\(\{\s*error:\s*'([^']+)'\s*\}\);/g, 'return res.status($1).json({ error: \'$2\' });');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingErrors(content);
    
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

module.exports = { fixRemainingErrors, processFile };