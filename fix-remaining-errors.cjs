const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Fix remaining syntax errors
const fixes = [
  // Fix malformed JSX closing tags with commas
  {
    pattern: /<h2([^>]*)>([^<]+),\s*<\//g,
    replacement: '<h2$1>$2</h2>'
  },
  {
    pattern: /<h1([^>]*)>([^<]+),\s*<\//g,
    replacement: '<h1$1>$2</h1>'
  },
  {
    pattern: /<h3([^>]*)>([^<]+),\s*<\//g,
    replacement: '<h3$1>$2</h3>'
  },
  {
    pattern: /<p([^>]*)>([^<]+),\s*<\//g,
    replacement: '<p$1>$2</p>'
  },
  {
    pattern: /<div([^>]*)>([^<]+),\s*<\//g,
    replacement: '<div$1>$2</div>'
  },
  {
    pattern: /<span([^>]*)>([^<]+),\s*<\//g,
    replacement: '<span$1>$2</span>'
  },
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<\//g,
    replacement: '<></>'
  },
  // Fix missing closing tags
  {
    pattern: /<h2([^>]*)>([^<]+)\s*<\//g,
    replacement: '<h2$1>$2</h2>'
  },
  {
    pattern: /<h1([^>]*)>([^<]+)\s*<\//g,
    replacement: '<h1$1>$2</h1>'
  },
  {
    pattern: /<h3([^>]*)>([^<]+)\s*<\//g,
    replacement: '<h3$1>$2</h3>'
  },
  {
    pattern: /<p([^>]*)>([^<]+)\s*<\//g,
    replacement: '<p$1>$2</p>'
  },
  {
    pattern: /<div([^>]*)>([^<]+)\s*<\//g,
    replacement: '<div$1>$2</div>'
  },
  {
    pattern: /<span([^>]*)>([^<]+)\s*<\//g,
    replacement: '<span$1>$2</span>'
  },
  // Fix object syntax errors
  {
    pattern: /}\s*}\s*];/g,
    replacement: '}\n  }];'
  },
  // Fix missing commas in object arrays
  {
    pattern: /]\s*]/g,
    replacement: ']\n  ]'
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

async function main() {
  console.log('Starting remaining syntax error fixes...');
  
  // Find all TSX files in the app directory
  const files = await glob('app/**/*.tsx');
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);