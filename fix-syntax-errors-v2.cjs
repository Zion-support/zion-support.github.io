const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix function declarations with extra commas
  if (content.includes('React.FC = () => {,')) {
    content = content.replace(/React.FC = \(\) => \{,/g, 'React.FC = () => {');
    modified = true;
  }

  // Fix array declarations with commas
  if (content.includes('const features = [,')) {
    content = content.replace(/const features = \[,/g, 'const features = [');
    modified = true;
  }

  // Fix object declarations with commas
  if (content.includes('{,')) {
    content = content.replace(/\{\s*,/g, '{');
    modified = true;
  }

  // Fix object properties with semicolons instead of commas
  content = content.replace(/(\w+):\s*([^,}]+);\s*(\w+):/g, '$1: $2,\n    $3:');
  content = content.replace(/(\w+):\s*([^,}]+);\s*}/g, '$1: $2\n  }');
  
  // Fix array elements with semicolons
  content = content.replace(/(\w+):\s*([^,}]+);\s*]/g, '$1: $2\n  ]');
  content = content.replace(/(\w+):\s*([^,}]+);\s*,/g, '$1: $2,\n    ');

  // Fix import statements with semicolons
  content = content.replace(/from 'lucide-react';\s*$/gm, "from 'lucide-react';");

  // Fix specific patterns
  content = content.replace(/\[\s*,/g, '[');
  content = content.replace(/\{\s*,/g, '{');

  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`Fixed ${fixedCount} files`);