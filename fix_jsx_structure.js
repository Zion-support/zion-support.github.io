const fs = require('fs');
const path = require('path');

function fixJSXStructure(content) {
  // Fix self-closing divs that should be opening divs
  content = content.replace(/<div className="[^"]*"><\/div>\s*{/g, (match) => {
    const className = match.match(/className="([^"]*)"/)[1];
    return `<div className="${className}">\n            {`;
  });
  
  // Fix self-closing sections that should be opening sections
  content = content.replace(/<section className="[^"]*"><\/section>\s*{/g, (match) => {
    const className = match.match(/className="([^"]*)"/)[1];
    return `<section className="${className}">\n          {`;
  });
  
  // Fix self-closing divs that should be opening divs (without className)
  content = content.replace(/<div><\/div>\s*{/g, '<div>\n            {');
  
  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXStructure(content);
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all TSX files in app/components
const componentsDir = path.join(__dirname, 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  processFile(path.join(componentsDir, file));
});

console.log('JSX structure fixes completed');
