const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix Link components to use anchor tags
    const linkRegex = /<Link\s+to=["']([^"']+)["']([^>]*)>([^<]*)<\/Link>/g;
    if (linkRegex.test(content)) {
      content = content.replace(linkRegex, '<a href="$1"$2>$3</a>');
      modified = true;
    }
    
    // Fix any remaining Link usage
    const linkRegex2 = /<Link\s+[^>]*>/g;
    if (linkRegex2.test(content)) {
      content = content.replace(linkRegex2, '<a ');
      modified = true;
    }
    
    // Fix any remaining Link closing tags
    const linkCloseRegex = /<\/Link>/g;
    if (linkCloseRegex.test(content)) {
      content = content.replace(linkCloseRegex, '</a>');
      modified = true;
    }
    
    // Fix double semicolons in imports
    const doubleSemicolonRegex = /from\s+['"][^'"]+['"];;/g;
    if (doubleSemicolonRegex.test(content)) {
      content = content.replace(doubleSemicolonRegex, (match) => match.replace(';;', ';'));
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  }
}

// Find all page.tsx files and fix them
function findAndFixPages(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAndFixPages(filePath);
    } else if (file === 'page.tsx') {
      fixFile(filePath);
    }
  });
}

// Start fixing from the app directory
findAndFixPages(path.join(__dirname, 'app'));

console.log('All remaining issues fixed!');