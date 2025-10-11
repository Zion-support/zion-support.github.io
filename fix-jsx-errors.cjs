const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common patterns to fix
const fixes = [
  // Fix duplicate imports
  {
    pattern: /import\s*\{[^}]*\}\s*from\s*['"][^'"]*['"];\s*import\s*\{[^}]*\}\s*from\s*['"][^'"]*['"];/g,
    replacement: (match) => {
      const imports = match.match(/import\s*\{[^}]*\}\s*from\s*['"][^'"]*['"];/g);
      if (imports && imports.length === 2) {
        const firstImport = imports[0].match(/import\s*\{([^}]*)\}\s*from\s*(['"][^'"]*['"])/);
        const secondImport = imports[1].match(/import\s*\{([^}]*)\}\s*from\s*(['"][^'"]*['"])/);
        
        if (firstImport && secondImport && firstImport[2] === secondImport[2]) {
          const allItems = [...new Set([...firstImport[1].split(','), ...secondImport[1].split(',')])]
            .map(item => item.trim())
            .filter(item => item)
            .join(', ');
          return `import { ${allItems} } from ${firstImport[2]};`;
        }
      }
      return match;
    }
  },
  
  // Fix empty objects in arrays
  {
    pattern: /\{\s*\},/g,
    replacement: ''
  },
  
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<\/>/g,
    replacement: ''
  },
  
  // Fix missing semicolons in const declarations
  {
    pattern: /const\s+(\w+)\s*=\s*(\w+)\s*$/gm,
    replacement: 'const $1 = $2;'
  },
  
  // Fix duplicate export statements
  {
    pattern: /export\s+default\s+(\w+);\s*export\s+default\s+\1;/g,
    replacement: 'export default $1;'
  },
  
  // Fix orphaned JSX elements
  {
    pattern: /^\s*<\/[^>]+>\s*$/gm,
    replacement: ''
  },
  
  // Fix malformed component names
  {
    pattern: /const\s+PagePage:\s*React\.FC/g,
    replacement: 'const Page: React.FC'
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

// Find all TSX files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} TSX files to check...`);

let fixedCount = 0;
files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fixFile(fullPath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);