const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common patterns
    const fixes = [
      // Fix malformed JSX attributes
      { pattern: /className="([^"]*)"([^>]*?)>/g, replacement: 'className="$1">' },
      { pattern: /className= "([^"]*)"([^>]*?)>/g, replacement: 'className="$1">' },
      { pattern: /className="([^"]*)"([^>]*?)"/g, replacement: 'className="$1"' },
      
      // Fix malformed string literals
      { pattern: /(["'])([^"']*?)\1"/g, replacement: '$1$2$1' },
      { pattern: /(["'])([^"']*?)\1\s*"/g, replacement: '$1$2$1' },
      
      // Fix malformed array syntax
      { pattern: /features:\s*\[([^\]]*?)\]"/g, replacement: 'features: [$1]' },
      
      // Fix malformed JSX closing tags
      { pattern: /<\/div>"/g, replacement: '</div>' },
      { pattern: /<\/section>"/g, replacement: '</section>' },
      { pattern: /<\/h[1-6]>"/g, replacement: '</h$1>' },
      { pattern: /<\/p>"/g, replacement: '</p>' },
      { pattern: /<\/span>"/g, replacement: '</span>' },
      { pattern: /<\/li>"/g, replacement: '</li>' },
      { pattern: /<\/ul>"/g, replacement: '</ul>' },
      { pattern: /<\/Link>"/g, replacement: '</Link>' },
      
      // Fix malformed JSX opening tags
      { pattern: /<div className="([^"]*?)">"/g, replacement: '<div className="$1">' },
      { pattern: /<section className="([^"]*?)">"/g, replacement: '<section className="$1">' },
      { pattern: /<h[1-6] className="([^"]*?)">"/g, replacement: '<h$1 className="$1">' },
      { pattern: /<p className="([^"]*?)">"/g, replacement: '<p className="$1">' },
      { pattern: /<span className="([^"]*?)">"/g, replacement: '<span className="$1">' },
      { pattern: /<li className="([^"]*?)">"/g, replacement: '<li className="$1">' },
      { pattern: /<ul className="([^"]*?)">"/g, replacement: '<ul className="$1">' },
      { pattern: /<Link className="([^"]*?)">"/g, replacement: '<Link className="$1">' },
      
      // Fix hover syntax
      { pattern: /hover:\s*([^"]*?)"/g, replacement: 'hover:$1' },
      
      // Fix malformed meta tags
      { pattern: /<meta name="([^"]*?)",\s*content="([^"]*?)"\s*\/>"/g, replacement: '<meta name="$1" content="$2" />' },
      
      // Fix malformed link tags
      { pattern: /<link rel="([^"]*?)",\s*href="([^"]*?)"\s*\/>"/g, replacement: '<link rel="$1" href="$2" />' },
      
      // Fix malformed to attributes
      { pattern: /to:\s*"([^"]*?)",/g, replacement: 'to="$1"' },
      
      // Remove stray quotes at end of lines
      { pattern: /"\s*$/gm, replacement: '' },
      
      // Fix malformed comments
      { pattern: /{\/\*([^*]|\*[^/])*\*\/\}"\s*$/gm, replacement: '$1' },
    ];

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
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TSX files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const tsxFiles = findTsxFiles(srcDir);

console.log(`Found ${tsxFiles.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);