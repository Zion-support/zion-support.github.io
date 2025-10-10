const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common patterns to fix
const fixes = [
  // Fix unescaped quotes in SVG URLs
  {
    pattern: /bg-\[url\('data:image\/svg\+xml,%3Csvg width="([^"]*)" height="([^"]*)" viewBox="([^"]*)" xmlns="([^"]*)"%3E%3Cg fill="([^"]*)" fill-rule="([^"]*)"%3E%3Cg fill="([^"]*)" fill-opacity="([^"]*)"%3E%3Ccircle cx="([^"]*)" cy="([^"]*)" r="([^"]*)"\/%3E%3C\/g%3E%3C\/g%3E%3C\/svg%3E'\)\]/g,
    replacement: (match, width, height, viewBox, xmlns, fill, fillRule, fillColor, fillOpacity, cx, cy, r) => {
      const encodedSvg = `data:image/svg+xml,%3Csvg%20width%3D%22${width}%22%20height%3D%22${height}%22%20viewBox%3D%22${viewBox}%22%20xmlns%3D%22${xmlns}%22%3E%3Cg%20fill%3D%22${fill}%22%20fill-rule%3D%22${fillRule}%22%3E%3Cg%20fill%3D%22${fillColor}%22%20fill-opacity%3D%22${fillOpacity}%22%3E%3Ccircle%20cx%3D%22${cx}%22%20cy%3D%22${cy}%22%20r%3D%22${r}%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
      return `bg-[url('${encodedSvg}')]`;
    }
  },
  // Fix malformed object literals with missing commas
  {
    pattern: /(\w+):\s*(\w+)\s*\n\s*(\w+):\s*(\w+)/g,
    replacement: '$1: $2,\n    $3: $4'
  },
  // Fix missing closing braces in object literals
  {
    pattern: /(\w+):\s*(\w+)\s*\n\s*\)/g,
    replacement: '$1: $2\n  )'
  },
  // Fix malformed JSX attributes
  {
    pattern: /(\w+)="([^"]*)"\s*\n\s*(\w+)="([^"]*)"\s*\n\s*>/g,
    replacement: '$1="$2"\n        $3="$4"\n      >'
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
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { ignore: ['node_modules/**'] });

console.log(`Found ${files.length} files to check...`);

files.forEach(fixFile);

console.log('Syntax fixes completed!');
