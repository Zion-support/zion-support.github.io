import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax patterns
    const fixes = [
      // Fix missing closing braces for functions
      { pattern: /(\s+return \(\s*<>\s*)/g, replacement: '  return (\n    <>\n      ' },
      
      // Fix missing semicolons after variable declarations
      { pattern: /(\w+)\s*\]\s*$/gm, replacement: '$1];' },
      
      // Fix missing closing parentheses for arrays
      { pattern: /(\w+)\s*\]\s*$/gm, replacement: '$1];' },
      
      // Fix malformed JSX return statements
      { pattern: /return \(\s*<>\s*$/gm, replacement: 'return (\n    <>\n      ' },
      
      // Fix missing closing braces for objects
      { pattern: /(\w+)\s*}\s*$/gm, replacement: '$1}' },
      
      // Fix spacing in className attributes
      { pattern: /className\s*=\s*"([^"]*)\s+([^"]*)"/g, replacement: 'className="$1 $2"' },
      
      // Fix missing commas in object literals
      { pattern: /(\w+)\s*(\w+)\s*(\w+)/g, replacement: '$1, $2, $3' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Specific fixes for common patterns
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*$/gm, 'const $1 = [');
    content = content.replace(/\]\s*$/gm, '];');
    content = content.replace(/}\s*$/gm, '};');
    content = content.replace(/return\s*\(\s*$/gm, 'return (\n    ');
    content = content.replace(/<>\s*$/gm, '<>\n      ');
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath, callback);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      callback(filePath);
    }
  });
}

// Fix all TypeScript/JavaScript files
console.log('Starting final syntax fixes...');
walkDir('./pages', fixFile);
walkDir('./src', fixFile);
console.log('Final syntax fixes completed!');