const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix missing semicolons after interface declarations
  {
    pattern: /interface\s+(\w+)\s*\{([^}]+)\}\s*$/gm,
    replacement: (match, interfaceName, content) => {
      return `interface ${interfaceName} {\n${content}\n}`;
    }
  },
  // Fix missing semicolons after variable declarations
  {
    pattern: /(\w+)\s*=\s*useState<[^>]+>\([^)]+\)\s*$/gm,
    replacement: '$1;'
  },
  // Fix missing semicolons after function calls
  {
    pattern: /(\w+\([^)]*\))\s*$/gm,
    replacement: '$1;'
  },
  // Fix missing commas in object literals
  {
    pattern: /(\w+:\s*[^,}]+)\s*$/gm,
    replacement: '$1,'
  },
  // Fix missing closing braces
  {
    pattern: /(\w+)\s*=\s*\{([^}]+)\}\s*$/gm,
    replacement: (match, varName, content) => {
      return `${varName} = {\n${content}\n};`;
    }
  },
  // Fix malformed JSX attributes
  {
    pattern: /className="([^"]*)\s+([^"]*)"/g,
    replacement: 'className="$1$2"'
  },
  // Fix missing closing tags
  {
    pattern: /<(\w+)([^>]*)>\s*$/gm,
    replacement: '<$1$2></$1>'
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
    // Fix missing semicolons after interface declarations
    content = content.replace(/interface\s+(\w+)\s*\{([^}]+)\}\s*$/gm, (match, interfaceName, content) => {
      return `interface ${interfaceName} {\n${content}\n}`;
    });

    // Fix missing semicolons after variable declarations
    content = content.replace(/(\w+)\s*=\s*useState<[^>]+>\([^)]+\)\s*$/gm, '$1;');

    // Fix missing semicolons after function calls
    content = content.replace(/(\w+\([^)]*\))\s*$/gm, '$1;');

    // Fix missing commas in object literals
    content = content.replace(/(\w+:\s*[^,}]+)\s*$/gm, '$1,');

    // Fix malformed className attributes
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');

    // Fix missing closing parentheses
    content = content.replace(/return\s*\(\s*<([^>]+)>\s*$/gm, 'return (\n    <$1>\n  );');

    if (modified) {
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
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixFile(filePath);
    }
  });
}

// Start fixing from the app directory
console.log('Starting syntax fixes...');
walkDir('./app');
walkDir('./src');
console.log('Syntax fixes completed!');