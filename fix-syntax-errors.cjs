const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix unterminated string literals in import statements
  {
    pattern: /import Navigation from '\.\.\/components$/gm,
    replacement: "import Navigation from '../components/Navigation';"
  },
  {
    pattern: /import Footer from '\.\.\/components$/gm,
    replacement: "import Footer from '../components/Footer';"
  },
  // Fix missing semicolons and malformed function declarations
  {
    pattern: /;\nconst \w+Page: React\.FC = \(\) => \{const/gm,
    replacement: ';\n\nconst $1Page: React.FC = () => {\n  const'
  },
  // Fix malformed icon properties
  {
    pattern: /ico,\s*n:/gm,
    replacement: 'icon:'
  },
  // Fix unterminated string literals in titles
  {
    pattern: /title: '[^']*$/gm,
    replacement: (match) => match + "'"
  },
  // Fix malformed descriptions
  {
    pattern: /descriptio,\s*n:/gm,
    replacement: 'description:'
  },
  // Fix missing closing quotes in strings
  {
    pattern: /description: '[^']*$/gm,
    replacement: (match) => match + "'"
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