const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix missing Helmet closing tags
  {
    pattern: /<Helmet>\s*<title>.*?<\/title>\s*<meta name="description".*?\/>\s*<meta name="keywords".*?\/>\s*\n\s*$/gm,
    replacement: (match) => match.replace(/\n\s*$/, '\n      </Helmet>\n')
  },
  
  // Fix malformed JSX with stray characters
  {
    pattern: /,\s*$/gm,
    replacement: ''
  },
  
  // Fix malformed object properties
  {
    pattern: /{\s*icon:\s*(\w+),\s*$/gm,
    replacement: '{\n      icon: $1,'
  },
  
  // Fix malformed array structures
  {
    pattern: /\[\s*\]\s*;\s*$/gm,
    replacement: '[];'
  },
  
  // Fix malformed JSX fragments
  {
    pattern: /return\(<React\.Fragment>\)<\/React\.Fragment>/gm,
    replacement: 'return (\n    <>\n      <div>Content</div>\n    </>\n  );'
  },
  
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*,\s*\[\]\s*\)\s*;/gm,
    replacement: 'const $1: React.FC = () => {\n  const features = [];'
  },
  
  // Fix malformed JSX with stray characters
  {
    pattern: /}\s*<section/gm,
    replacement: '}\n        <section'
  },
  
  // Fix malformed className attributes
  {
    pattern: /className="[^"]*sm:\s*px-6[^"]*"/gm,
    replacement: 'className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"'
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

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
