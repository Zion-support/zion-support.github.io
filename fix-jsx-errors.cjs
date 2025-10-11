const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common patterns to fix
const fixes = [
  // Fix missing line breaks after const declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{const\s+/g,
    replacement: 'const $1: React.FC = () => {\n  const '
  },
  // Fix missing line breaks in object arrays
  {
    pattern: /}\s*,\s*{/g,
    replacement: '},\n    {'
  },
  // Fix missing line breaks after closing braces in arrays
  {
    pattern: /}\s*]\s*const\s+/g,
    replacement: '}\n  ]\n\n  const '
  },
  // Fix missing line breaks before return statements
  {
    pattern: /}\s*]\s*return\s*\(/g,
    replacement: '}\n  ]\n\n  return ('
  },
  // Fix malformed JSX attributes
  {
    pattern: /className="([^"]*)"\s*{/g,
    replacement: 'className="$1">\n        {'
  },
  // Fix missing closing tags
  {
    pattern: /<button[^>]*>\s*([^<]+)\s*<ArrowRight[^>]*>\s*<\/button>/g,
    replacement: '<button $1>\n                  <ArrowRight className="w-5 h-5 ml-2" />\n                </button>'
  },
  // Fix missing semicolons in imports
  {
    pattern: /import\s+{([^}]+)}\s+from\s+'([^']+)'\s*$/gm,
    replacement: (match, imports, module) => {
      const cleanImports = imports.replace(/[;,\s]+$/, '').trim();
      return `import { ${cleanImports} } from '${module}';`;
    }
  },
  // Fix malformed object properties
  {
    pattern: /{([^}]*);,([^}]*)}/g,
    replacement: '{$1, $2}'
  },
  // Fix missing commas in object arrays
  {
    pattern: /}\s*{/g,
    replacement: '},\n    {'
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
    // Fix missing line breaks in component structure
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {\n');
    
    // Fix missing closing tags for main elements
    content = content.replace(/<main[^>]*>\s*{/g, '<main $1>\n        {');
    
    // Fix missing closing tags for sections
    content = content.replace(/<section[^>]*>\s*{/g, '<section $1>\n          {');
    
    // Fix missing closing tags for divs
    content = content.replace(/<div[^>]*>\s*{/g, '<div $1>\n            {');
    
    // Fix missing closing tags for buttons
    content = content.replace(/<button[^>]*>\s*([^<]+)\s*$/gm, '<button $1>\n                  $2\n                </button>');
    
    // Only write if content changed
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

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);