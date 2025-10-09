const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common patterns to fix
const fixes = [
  // Fix missing commas in object literals
  {
    pattern: /(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,}]+)\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g,
    replacement: '$1$2,\n$3$4'
  },
  // Fix missing commas in arrays
  {
    pattern: /(\s+)([^,}\]]+)\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g,
    replacement: '$1$2,\n$3$4'
  },
  // Fix duplicate export statements
  {
    pattern: /export default [^;]+;\nexport default [^;]+;/g,
    replacement: (match) => {
      const lines = match.split('\n');
      return lines[0] + ';';
    }
  },
  // Fix missing closing braces
  {
    pattern: /(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,}]+)\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g,
    replacement: '$1$2,\n$3$4'
  },
  // Fix malformed JSX
  {
    pattern: /<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*?)\s*>\s*<\/\1>/g,
    replacement: '<$1 $2></$1>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes
    // Fix missing commas in object properties
    content = content.replace(/(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,}]+)\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1$2,\n$3$4');
    
    // Fix missing closing braces for objects
    content = content.replace(/(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,}]+)\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1$2,\n$3$4');
    
    // Fix duplicate imports
    content = content.replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"];\s*\nimport\s+{[^}]+}\s+from\s+['"][^'"]+['"];/g, (match) => {
      const lines = match.split('\n');
      const imports = new Set();
      lines.forEach(line => {
        if (line.trim().startsWith('import')) {
          imports.add(line.trim());
        }
      });
      return Array.from(imports).join('\n');
    });
    
    // Fix malformed function declarations
    content = content.replace(/const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*\n\s*const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
    
    // Fix missing closing braces
    content = content.replace(/(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,}]+)\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1$2,\n$3$4');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);