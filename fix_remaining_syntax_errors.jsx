const fs = require('fs');
const path = require('path');

// Function to recursively find all files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat &&
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });

  return results;
}

// Function to fix syntax errors in a file;
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Fix common syntax patterns
    const patterns = [
      // Fix useState syntax
      { from: /useState\('([^']*)'\)/g, to: "useState('$1')" },
      { from: /useState\(false\)/g, to: 'useState(false)' },
      { from: /useState\(null\)/g, to: 'useState(null)' },
      { from: /useState<any>/g, to: 'useState<any>' },

      // Fix JSX syntax
      { from: /<>\s*<\/>/g, to: '<></>' },
      { from: /<Routes>\s*<\/Routes>/g, to: '<Routes></Routes>' },

      // Fix function syntax
      {
        from: /const\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*\(\)\s*=>\s*{/g,
        to: 'const $1 = () => {',
      },

      // Fix type annotations
      { from: /:\s*\)/g, to: ')' },
      { from: /:\s*;/g, to: ';' },
      { from: /:\s*}/g, to: '}' },
      { from: /:\s*\[/g, to: '[' },

      // Fix missing semicolons
      { from: /(\w+)\s*=\s*useState\(/g, to: '$1 = useState(' },

      // Fix object syntax
      { from: /{\s*;/g, to: '{' },
      { from: /;\s*}/g, to: '}' },
    ];

    patterns.forEach(pattern => {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        fixed = true;
      }
    });

    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting to fix remaining syntax errors...');
const files = findFiles('.');
let totalFixed = 0;

files.forEach(file => {
  if (fixFile(file)) {
    totalFixed++;
  }
});

console.log(`\nCompleted! Fixed ${totalFixed} files.`);
