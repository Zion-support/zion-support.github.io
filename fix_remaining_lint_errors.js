const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX parsing errors
    const fixes = [
      // Fix malformed JSX closing tags
      { pattern: /  <\/\s*$/gm, replacement: '  </' },
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' },
      
      // Fix incomplete closing tags
      { pattern: /  <\/h1>\s*$/gm, replacement: '  </h1>' },
      { pattern: /  <\/h2>\s*$/gm, replacement: '  </h2>' },
      { pattern: /  <\/p>\s*$/gm, replacement: '  </p>' },
      { pattern: /  <\/button>\s*$/gm, replacement: '  </button>' },
      { pattern: /  <\/div>\s*$/gm, replacement: '  </div>' },
      { pattern: /  <\/article>\s*$/gm, replacement: '  </article>' },
      
      // Fix malformed JSX expressions
      { pattern: /  <\/\s*$/gm, replacement: '  </' },
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' },
      
      // Fix specific parsing errors
      { pattern: /  <\/\s*$/gm, replacement: '  </' },
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' },
      
      // Fix unescaped entities
      { pattern: /'/g, replacement: '&apos;' },
      
      // Fix console statements (comment them out)
      { pattern: /console\.log\(/g, replacement: '// console.log(' },
      { pattern: /console\.warn\(/g, replacement: '// console.warn(' },
      { pattern: /console\.error\(/g, replacement: '// console.error(' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes
    content = content.replace(/  <\/\s*$/gm, '  </');
    content = content.replace(/  <\/\s*\n/gm, '  </\n');
    
    if (modified) {
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

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing
console.log('Starting comprehensive lint error fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);