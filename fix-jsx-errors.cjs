#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common patterns to fix
const fixes = [
  // Fix missing closing div tags
  {
    pattern: /(\s+<\/div>\s+);\s*$/gm,
    replacement: '$1\n  );\n};'
  },
  // Fix missing closing div tags in return statements
  {
    pattern: /(\s+<\/div>\s+)\s*\);\s*$/gm,
    replacement: '$1\n    </div>\n  );\n};'
  },
  // Fix duplicate export statements
  {
    pattern: /export default \w+;\s*\n\s*export default \w+;/gm,
    replacement: (match) => {
      const exports = match.match(/export default (\w+);/g);
      return exports[0]; // Keep only the first export
    }
  },
  // Fix missing commas in object arrays
  {
    pattern: /(\s+}\s*)\s*name:/gm,
    replacement: '$1,\n    {'
  },
  // Fix missing opening braces in object arrays
  {
    pattern: /(\s+}\s*,\s*)\s*name:/gm,
    replacement: '$1\n    {'
  },
  // Fix missing closing braces in functions
  {
    pattern: /(\s+}\s*)\s*export default/gm,
    replacement: '$1\n};\n\nexport default'
  },
  // Fix JSX expressions with missing parent elements
  {
    pattern: /return\s*\(\s*<([^>]+)>\s*<([^>]+)>\s*<\/\2>\s*<([^>]+)>\s*<\/\3>\s*\)\s*;\s*$/gm,
    replacement: 'return (\n    <div>\n      <$1>\n        <$2></$2>\n        <$3></$3>\n      </$1>\n    </div>\n  );'
  },
  // Fix unclosed JSX tags
  {
    pattern: /<h2([^>]*)>\s*([^<]+)\s*$/gm,
    replacement: '<h2$1>$2</h2>'
  },
  // Fix missing closing tags in paragraphs
  {
    pattern: /<p([^>]*)>\s*([^<]+)\s*$/gm,
    replacement: '<p$1>$2</p>'
  },
  // Fix missing closing tags in links
  {
    pattern: /<Link([^>]*)>\s*([^<]+)\s*$/gm,
    replacement: '<Link$1>$2</Link>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply all fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes
    // Fix missing closing div in return statements
    if (content.includes('</div>\n  );') && !content.includes('</div>\n    </div>\n  );')) {
      content = content.replace(
        /(\s+<\/div>\s+)\s*\);\s*$/gm,
        '$1\n    </div>\n  );\n};'
      );
      modified = true;
    }

    // Fix duplicate function declarations
    const duplicateFunctionMatch = content.match(/(const \w+: React\.FC = \(\) => \{\s*const \w+: React\.FC = \(\) => \{)/);
    if (duplicateFunctionMatch) {
      content = content.replace(
        /const (\w+): React\.FC = \(\) => \{\s*const \w+: React\.FC = \(\) => \{/,
        'const $1: React.FC = () => {'
      );
      modified = true;
    }

    // Fix missing closing braces
    if (content.includes('export default') && !content.includes('};\n\nexport default')) {
      content = content.replace(
        /(\s+}\s*)\s*export default/gm,
        '$1\n};\n\nexport default'
      );
      modified = true;
    }

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

// Find all TypeScript/JSX files
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);