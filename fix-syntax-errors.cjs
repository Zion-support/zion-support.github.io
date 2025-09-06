const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix merge conflict markers
  { pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, replacement: '' },
  { pattern: /<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, replacement: '' },
  { pattern: /=======[\s\S]*?>>>>>>> [^\n]+/g, replacement: '' },
  
  // Fix common syntax errors
  { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"]\s*;\s*;\s*/g, replacement: 'import { $1 } from \'$2\';' },
  { pattern: /export\s+default\s+([^;]+)\s*;\s*;\s*/g, replacement: 'export default $1;' },
  { pattern: /const\s+([^=]+)=\s*([^;]+)\s*;\s*;\s*/g, replacement: 'const $1 = $2;' },
  { pattern: /let\s+([^=]+)=\s*([^;]+)\s*;\s*;\s*/g, replacement: 'let $1 = $2;' },
  { pattern: /var\s+([^=]+)=\s*([^;]+)\s*;\s*;\s*/g, replacement: 'var $1 = $2;' },
  { pattern: /function\s+([^(]+)\([^)]*\)\s*{\s*;\s*/g, replacement: 'function $1() {' },
  { pattern: /}\s*;\s*;\s*/g, replacement: '};' },
  { pattern: /;\s*;\s*/g, replacement: ';' },
  
  // Fix JSX syntax errors
  { pattern: /<([^>]+)>\s*;\s*<\/\1>/g, replacement: '<$1></$1>' },
  { pattern: /<([^>]+)>\s*;\s*([^<]+)<\/\1>/g, replacement: '<$1>$2</$1>' },
  
  // Fix TypeScript syntax errors
  { pattern: /interface\s+([^{]+)\s*{\s*;\s*/g, replacement: 'interface $1 {' },
  { pattern: /type\s+([^=]+)=\s*([^;]+)\s*;\s*;\s*/g, replacement: 'type $1 = $2;' },
  
  // Fix common parsing errors
  { pattern: /,\s*;\s*/g, replacement: ',' },
  { pattern: /{\s*;\s*/g, replacement: '{' },
  { pattern: /}\s*;\s*/g, replacement: '}' },
  { pattern: /\(\s*;\s*/g, replacement: '(' },
  { pattern: /\)\s*;\s*/g, replacement: ')' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  let fixedCount = 0;
  let totalFiles = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      
      try {
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(item)) {
            fixedCount += walkDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Only process JavaScript/TypeScript files
          if (/\.(js|jsx|ts|tsx)$/.test(item)) {
            totalFiles++;
            if (fixFile(fullPath)) {
              fixedCount++;
            }
          }
        }
      } catch (error) {
        // Skip files that can't be accessed
        if (error.code !== 'ENOENT' && error.code !== 'EACCES') {
          console.error(`Error accessing ${fullPath}:`, error.message);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = walkDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);