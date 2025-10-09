const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed anchor tags that are missing href and closing tag
    const malformedAnchorRegex = /<a\s*>\s*<h3/g;
    if (malformedAnchorRegex.test(content)) {
      content = content.replace(malformedAnchorRegex, '<h3');
      modified = true;
    }
    
    // Fix anchor tags with just content but no href
    const anchorWithContentRegex = /<a\s*>\s*([^<]+)\s*<\/a>/g;
    if (anchorWithContentRegex.test(content)) {
      content = content.replace(anchorWithContentRegex, '<a href="#" class="text-blue-600 hover:text-blue-800">$1</a>');
      modified = true;
    }
    
    // Fix anchor tags with JSX content but no href
    const anchorWithJSXRegex = /<a\s*>\s*<([^>]+)\s+className="([^"]+)"\s*\/>\s*([^<]+)\s*<\/a>/g;
    if (anchorWithJSXRegex.test(content)) {
      content = content.replace(anchorWithJSXRegex, '<a href="#" class="text-blue-600 hover:text-blue-800 flex items-center"><$1 className="$2" /> $3</a>');
      modified = true;
    }
    
    // Fix anchor tags with just JSX content
    const anchorWithJustJSXRegex = /<a\s*>\s*<([^>]+)\s+className="([^"]+)"\s*\/>\s*<\/a>/g;
    if (anchorWithJustJSXRegex.test(content)) {
      content = content.replace(anchorWithJustJSXRegex, '<a href="#" class="text-blue-600 hover:text-blue-800"><$1 className="$2" /></a>');
      modified = true;
    }
    
    // Fix anchor tags with text content
    const anchorWithTextRegex = /<a\s*>\s*([^<\n]+)\s*<\/a>/g;
    if (anchorWithTextRegex.test(content)) {
      content = content.replace(anchorWithTextRegex, '<a href="#" class="text-blue-600 hover:text-blue-800">$1</a>');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax in: ${filePath}`);
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

console.log('All syntax issues fixed!');