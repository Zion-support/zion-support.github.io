const fs = require('fs');
const path = require('path');
const glob = require('glob');

// More comprehensive fixes
const fixes = [
  // Fix duplicate imports - more comprehensive
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
  },
  
  // Fix missing closing tags in JSX
  {
    pattern: /<(\w+)([^>]*)>\s*$/gm,
    replacement: (match, tagName, attributes) => {
      // This is a complex fix that would need more context
      return match;
    }
  },
  
  // Fix malformed JSX expressions
  {
    pattern: /\{\s*\}\s*$/gm,
    replacement: ''
  },
  
  // Fix missing closing parentheses
  {
    pattern: /\(\s*$/gm,
    replacement: '()'
  },
  
  // Fix malformed object properties
  {
    pattern: /,\s*$/gm,
    replacement: ''
  },
  
  // Fix duplicate Helmet meta tags
  {
    pattern: /<title>.*?<\/title>\s*<title>.*?<\/title>/gs,
    replacement: (match) => {
      const titles = match.match(/<title>(.*?)<\/title>/g);
      return titles ? titles[0] : match;
    }
  },
  
  // Fix duplicate meta descriptions
  {
    pattern: /<meta\s+name="description"[^>]*>\s*<meta\s+name="description"[^>]*>/gs,
    replacement: (match) => {
      const metas = match.match(/<meta\s+name="description"[^>]*>/g);
      return metas ? metas[0] : match;
    }
  },
  
  // Fix malformed array syntax
  {
    pattern: /\[\s*\]\s*,/g,
    replacement: ''
  },
  
  // Fix missing closing braces in objects
  {
    pattern: /\{\s*$/gm,
    replacement: '{}'
  },
  
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{/g,
    replacement: 'const $1 = () => {'
  },
  
  // Fix missing return statements
  {
    pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{[^}]*$/gm,
    replacement: (match) => {
      if (!match.includes('return')) {
        return match + '\n    return null;';
      }
      return match;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes for common patterns
    const lines = content.split('\n');
    let newLines = [];
    let inJSX = false;
    let braceCount = 0;
    let parenCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Skip empty lines at the end
      if (line.trim() === '' && i === lines.length - 1) {
        continue;
      }
      
      // Fix malformed JSX
      if (line.includes('<') && line.includes('>')) {
        inJSX = true;
      }
      
      // Count braces and parentheses
      braceCount += (line.match(/\{/g) || []).length;
      braceCount -= (line.match(/\}/g) || []).length;
      parenCount += (line.match(/\(/g) || []).length;
      parenCount -= (line.match(/\)/g) || []).length;
      
      // Fix common syntax errors
      if (line.includes('const') && line.includes('=') && !line.includes(';') && !line.includes('{')) {
        line += ';';
        modified = true;
      }
      
      // Fix malformed JSX closing tags
      if (line.includes('</') && !line.includes('>')) {
        line += '>';
        modified = true;
      }
      
      // Fix missing closing tags
      if (line.includes('<') && !line.includes('>') && !line.includes('/>')) {
        line += '>';
        modified = true;
      }
      
      newLines.push(line);
    }
    
    // Add missing closing braces/parentheses
    if (braceCount > 0) {
      for (let i = 0; i < braceCount; i++) {
        newLines.push('}');
      }
      modified = true;
    }
    
    if (parenCount > 0) {
      for (let i = 0; i < parenCount; i++) {
        newLines.push(')');
      }
      modified = true;
    }
    
    const finalContent = newLines.join('\n');
    
    if (modified || finalContent !== content) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
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