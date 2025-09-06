const fs = require('fs');
const path = require('path');

// Common syntax error patterns to fix
const fixes = [
  // Fix missing semicolons after return statements
  { pattern: /return res\.status\(\d+\)\.json\(\{[^}]+\}\),\s*$/gm, replacement: 'return res.status($1).json({$2});' },
  { pattern: /return res\.status\(\d+\)\.end\(\),\s*$/gm, replacement: 'return res.status($1).end();' },
  { pattern: /return res\.status\(\d+\)\.json\(\{[^}]+\}\),\s*return\s*$/gm, replacement: 'return res.status($1).json({$2});\n    return;' },
  
  // Fix missing semicolons after variable declarations
  { pattern: /const [^=]+ = [^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') },
  { pattern: /let [^=]+ = [^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') },
  
  // Fix missing semicolons after if statements
  { pattern: /if \([^)]+\) return [^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') },
  
  // Fix object property syntax errors
  { pattern: /(\w+);\s*(\w+);/g, replacement: '$1,\n    $2,' },
  
  // Fix array syntax errors
  { pattern: /\[\s*([^]]+)\s*\]/g, replacement: (match, content) => {
    const items = content.split(',').map(item => item.trim()).filter(item => item);
    return '[\n    ' + items.join(',\n    ') + '\n  ]';
  }}
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        changed = true;
      }
    });
    
    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  });
}

// Start fixing from the pages/api directory
walkDir('./pages/api');