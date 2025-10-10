const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with syntax errors
const files = glob.sync('app/**/*.{tsx,ts}', { cwd: __dirname });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.log(`Could not read file: ${file}`);
    return;
  }
  
  let originalContent = content;
  
  // Fix common syntax errors
  content = content
    // Fix extra closing braces
    .replace(/}\s*},\s*{/g, '},\n    {')
    .replace(/}\s*},\s*$/g, '}\n  ]')
    // Fix array syntax errors
    .replace(/;\s*\)\s*}/g, ']\n    }')
    .replace(/;\s*\)\s*,/g, '],')
    .replace(/;\s*\)\s*$/g, ']')
    // Fix object syntax errors
    .replace(/;\s*\)\s*}/g, ']\n    }')
    .replace(/;\s*\)\s*,/g, '],')
    // Fix JSX syntax errors
    .replace(/<title><\/titl>/g, '<title>')
    .replace(/<span><\/spa>/g, '<span>')
    .replace(/<h2><\/h>/g, '<h2>')
    .replace(/<h3><\/h3>/g, '<h3>')
    .replace(/<div><\/div>/g, '<div>')
    // Fix function syntax errors
    .replace(/}\s*}\s*},/g, '}\n  },\n')
    .replace(/}\s*}\s*$/g, '}\n  }')
    // Fix import syntax errors
    .replace(/import\s*{\s*([^}]+)\s*;\s*\)\s*}/g, 'import { $1 }')
    // Fix other common issues
    .replace(/,\s*;\s*\)/g, ']')
    .replace(/,\s*;\s*$/g, ']')
    .replace(/;\s*\)\s*$/g, ']')
    .replace(/;\s*\)\s*,/g, '],')
    .replace(/;\s*\)\s*}/g, ']\n    }')
    // Fix specific patterns
    .replace(/}\s*},\s*{/g, '},\n    {')
    .replace(/}\s*},\s*$/g, '}\n  ]')
    .replace(/}\s*}\s*},/g, '}\n  },\n')
    .replace(/}\s*}\s*$/g, '}\n  }');
  
  if (content !== originalContent) {
    console.log(`Fixed syntax errors in: ${file}`);
    fs.writeFileSync(filePath, content);
    fixedCount++;
  }
});

console.log(`Fixed syntax errors in ${fixedCount} files`);