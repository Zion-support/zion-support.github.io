const fs = require('fs');
const path = require('path');

// Function to fix unterminated string literals
function fixStringLiterals(content) {
  // Fix common string literal issues
  let fixed = content
    // Fix unterminated strings with proper quotes
    .replace(/import\s+.*from\s+['"]([^'"]*)$/gm, (match, p1) => {
      return match.replace(p1, p1 + '"');
    })
    // Fix broken import statements
    .replace(/from\s+['"]([^'"]*)\s*$/gm, 'from "$1"')
    // Fix broken JSX attributes
    .replace(/className\s*=\s*['"]([^'"]*)$/gm, 'className="$1"')
    .replace(/title\s*=\s*['"]([^'"]*)$/gm, 'title="$1"')
    // Fix broken template literals
    .replace(/`([^`]*)$/gm, '`$1`')
    // Fix broken object properties
    .replace(/(\w+)\s*:\s*['"]([^'"]*)$/gm, '$1: "$2"')
    // Fix broken array elements
    .replace(/['"]([^'"]*)$/gm, '"$1"')
    // Fix broken JSX text content
    .replace(/>\s*([^<]*)$/gm, '>$1</>')
    // Fix broken function parameters
    .replace(/\(\s*['"]([^'"]*)$/gm, '("$1")')
    // Fix broken return statements
    .replace(/return\s+['"]([^'"]*)$/gm, 'return "$1"')
    // Fix broken console.log statements
    .replace(/console\.log\(\s*['"]([^'"]*)$/gm, 'console.log("$1")')
    // Fix broken variable declarations
    .replace(/const\s+(\w+)\s*=\s*['"]([^'"]*)$/gm, 'const $1 = "$2"')
    .replace(/let\s+(\w+)\s*=\s*['"]([^'"]*)$/gm, 'let $1 = "$2"')
    .replace(/var\s+(\w+)\s*=\s*['"]([^'"]*)$/gm, 'var $1 = "$2"');

  return fixed;
}

// Function to recursively process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixStringLiterals(content);
        
        if (content !== fixed) {
          fs.writeFileSync(filePath, fixed, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start processing from the app directory
console.log('Starting string literal fixes...');
processDirectory('./app');
processDirectory('./src');
processDirectory('./components');
console.log('String literal fixes completed!');