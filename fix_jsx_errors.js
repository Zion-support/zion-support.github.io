const fs = require('fs');
const path = require('path');

// Common JSX fixes
const fixes = [
  // Fix malformed closing tags
  { pattern: /  <\//g, replacement: '  </' },
  { pattern: /  <\/h1>/g, replacement: '  </h1>' },
  { pattern: /  <\/h2>/g, replacement: '  </h2>' },
  { pattern: /  <\/p>/g, replacement: '  </p>' },
  { pattern: /  <\/button>/g, replacement: '  </button>' },
  { pattern: /  <\/div>/g, replacement: '  </div>' },
  
  // Fix React.Fragment issues
  { pattern: /<React\.Fragment>/g, replacement: '<>' },
  { pattern: /<\/React\.Fragment>/g, replacement: '</>' },
  
  // Fix malformed JSX closing tags
  { pattern: /  <\/\n/g, replacement: '  </\n' },
  { pattern: /  <\/\s*\n/g, replacement: '  </\n' },
  
  // Fix specific malformed patterns
  { pattern: /  <\/\s*$/gm, replacement: '  </' },
  { pattern: /  <\/\s*\n\s*$/gm, replacement: '  </\n' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix specific malformed closing tags
    content = content.replace(/  <\/\s*$/gm, '  </');
    content = content.replace(/  <\/\s*\n/gm, '  </\n');
    
    // Fix unterminated regexp literals
    content = content.replace(/  <\/\s*$/gm, '  </');
    
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
console.log('Starting JSX fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);