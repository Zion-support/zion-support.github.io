const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix missing semicolons after interface properties
  {
    pattern: /(\w+)\?\s*:\s*(\w+)\s*\n/g,
    replacement: '$1?: $2;\n'
  },
  // Fix missing semicolons after object properties
  {
    pattern: /(\w+):\s*([^,}\n]+)\s*\n/g,
    replacement: '$1: $2,\n'
  },
  // Fix missing semicolons after function declarations
  {
    pattern: /(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\}\s*\n/g,
    replacement: '$1 = ($2) => {\n$3\n};\n'
  },
  // Fix malformed JSX attributes
  {
    pattern: /(\w+)=\{([^}]+)\}/g,
    replacement: '$1={$2}'
  },
  // Fix missing closing tags
  {
    pattern: /<(\w+)([^>]*)>\s*$/gm,
    replacement: '<$1$2></$1>'
  },
  // Fix duplicate imports
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];\s*\nimport\s*{\s*([^}]+)\s*}\s*from\s*['"]\2['"];/g,
    replacement: "import { $1, $3 } from '$2';"
  },
  // Fix missing commas in arrays
  {
    pattern: /(\w+)\s*\n\s*]/g,
    replacement: '$1,\n]'
  },
  // Fix missing commas in objects
  {
    pattern: /(\w+):\s*([^,}\n]+)\s*\n\s*}/g,
    replacement: '$1: $2,\n}'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes
    // Fix "use client" directive placement
    if (content.includes('"use client",') && !content.startsWith('"use client";')) {
      content = content.replace(/"use client",\s*/, '');
      content = '"use client";\n' + content;
      modified = true;
    }

    // Fix missing semicolons at end of statements
    content = content.replace(/(\w+)\s*\n\s*export/g, '$1;\n\nexport');
    content = content.replace(/(\w+)\s*\n\s*const/g, '$1;\n\nconst');
    content = content.replace(/(\w+)\s*\n\s*function/g, '$1;\n\nfunction');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files`);