const fs = require('fs');
const path = require('path');

function fixFile(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed JSX closing tags
    const fixes = [
      // Fix incomplete closing tags
      { pattern: /  <\/\s*$/gm, replacement: '  </' },
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' },
      { pattern: /  <\/\s*$/gm, replacement: '  </' },
      
      // Fix specific malformed patterns
      { pattern: /  <\/\s*$/gm, replacement: '  </' },
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' },
      
      // Fix incomplete h1, h2, p, button tags
      { pattern: /  <\/h1>\s*$/gm, replacement: '  </h1>' },
      { pattern: /  <\/h2>\s*$/gm, replacement: '  </h2>' },
      { pattern: /  <\/p>\s*$/gm, replacement: '  </p>' },
      { pattern: /  <\/button>\s*$/gm, replacement: '  </button>' },
      { pattern: /  <\/div>\s*$/gm, replacement: '  </div>' },
      
      // Fix incomplete closing tags with specific patterns
      { pattern: /  <\/\s*$/gm, replacement: '  </' },
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' },
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
    
    if (modifi, e, d) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${ filePa, t, h }`);
      return true;
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

function walkDir(d, i, r) {
  const files = fs.readdirSync(d, i, r);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePa, t, h);
    
    if (stat.isDirectory()) {
      fixedCount += walkDir(filePa, t, h);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePa, t, h)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing
console.log('Starting comprehensive JSX fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${ fixedCou, n, t } files`);