const fs = require('fs');
const path = require('path');

// Common patterns to fix
const fixes = [
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<\/>/g,
    replacement: '<></>'
  },
  // Fix missing semicolons in imports
  {
    pattern: /import\s+([^;]+)\s*$/gm,
    replacement: 'import $1;'
  },
  // Fix malformed JSX attributes
  {
    pattern: /className=&quot;([^&]+)&quot;/g,
    replacement: 'className="$1"'
  },
  // Fix malformed JSX content
  {
    pattern: /&quot;([^&]+)&quot;/g,
    replacement: '"$1"'
  },
  // Fix missing closing tags
  {
    pattern: /<([^>]+)>\s*$/gm,
    replacement: '<$1></$1>'
  },
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g,
    replacement: 'const $1 = () => {'
  },
  // Fix missing commas in object literals
  {
    pattern: /(\w+)\s*:\s*([^,}]+)\s*}/g,
    replacement: '$1: $2, }'
  },
  // Fix malformed array syntax
  {
    pattern: /\[\s*\]/g,
    replacement: '[]'
  },
  // Fix missing return statements
  {
    pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{([^}]*)}/g,
    replacement: 'const $1 = () => {\n  return $2\n}'
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
    // Fix merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>>[^\n]*/g, '');
      modified = true;
    }

    // Fix malformed JSX
    content = content.replace(/<([^>]+)>\s*<\/\1>/g, '<$1></$1>');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');

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

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Start fixing
console.log('Starting syntax error fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);