#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix unterminated string literals
function fixUnterminatedStrings(content) {
  // Fix import statements with missing closing quotes
  content = content.replace(/import\s+([^'"]*)\s+from\s+'([^']*);/g, (match, imports, path) => {
    return `import ${imports} from '${path}';`;
  });
  
  content = content.replace(/import\s+([^'"]*)\s+from\s+"([^"]*);/g, (match, imports, path) => {
    return `import ${imports} from "${path}";`;
  });
  
  // Fix require statements
  content = content.replace(/require\s*\(\s*'([^']*);/g, (match, path) => {
    return `require('${path}');`;
  });
  
  content = content.replace(/require\s*\(\s*"([^"]*);/g, (match, path) => {
    return `require("${path}");`;
  });
  
  // Fix string literals in object properties
  content = content.replace(/(\w+):\s*'([^']*);/g, (match, key, value) => {
    return `${key}: '${value}';`;
  });
  
  content = content.replace(/(\w+):\s*"([^"]*);/g, (match, key, value) => {
    return `${key}: "${value}";`;
  });
  
  // Fix JSX attributes
  content = content.replace(/className="([^"]*);/g, (match, className) => {
    return `className="${className}";`;
  });
  
  content = content.replace(/path="([^"]*);/g, (match, path) => {
    return `path="${path}";`;
  });
  
  // Fix template literals
  content = content.replace(/`([^`]*);/g, (match, template) => {
    return `\`${template}\`;`;
  });
  
  return content;
}

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  // Fix missing closing quotes in JSX attributes
  content = content.replace(/className="([^"]*);/g, (match, className) => {
    return `className="${className}">`;
  });
  
  content = content.replace(/path="([^"]*);/g, (match, path) => {
    return `path="${path}">`;
  });
  
  // Fix missing closing tags
  content = content.replace(/<(\w+)\s+([^>]*);/g, (match, tag, attrs) => {
    return `<${tag} ${attrs}>`;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixUnterminatedStrings(fixedContent);
    fixedContent = fixJSXSyntax(fixedContent);
    
    // Only write if content changed
    if (fixedContent !== content) {
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
      ignore: [
        'node_modules/**',
        'dist/**',
        '.next/**',
        'out/**',
        '**/backup*/**',
        '**/disabled*/**',
        '**/corrupted*/**',
        '**/broken*/**'
      ]
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

module.exports = { fixUnterminatedStrings, fixJSXSyntax, processFile };