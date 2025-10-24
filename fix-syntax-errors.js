const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix missing semicolons
  {
    pattern: /export default (\w+)(?!;)$/gm,
    replacement: 'export default $1;'
  },
  // Fix missing closing tags in JSX
  {
    pattern: /<div([^>]*)>\s*{children}\s*<\/div>\s*<\/div>/g,
    replacement: '<div$1>{children}</div>'
  },
  // Fix JSX expressions without parent element
  {
    pattern: /return\s*\(\s*<>\s*{([^}]+)}\s*<\/>\s*\)/g,
    replacement: 'return (\n    <>\n      {$1}\n    </>\n  )'
  },
  // Fix missing closing fragments
  {
    pattern: /<>\s*{([^}]+)}\s*$/gm,
    replacement: '<>\n      {$1}\n    </>'
  },
  // Fix missing commas in interfaces
  {
    pattern: /interface\s+(\w+)\s*{\s*([^}]+)\s*}/g,
    replacement: (match, name, content) => {
      const fixedContent = content.replace(/(\w+):\s*([^;,\n]+)(?![,;])/g, '$1: $2;');
      return `interface ${name} {\n  ${fixedContent}\n}`;
    }
  },
  // Fix missing semicolons in type definitions
  {
    pattern: /(\w+):\s*([^;,\n]+)(?![,;])/g,
    replacement: '$1: $2;'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

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

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);
