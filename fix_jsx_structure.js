const fs = require('fs');
const path = require('path');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX structure issues
    // Fix unclosed div tags that should be self-closing or properly closed
    content = content.replace(/<div className="[^"]*"><\/div>\s*<div className="[^"]*"><\/div>/g, (match) => {
      return match.replace(/<\/div>\s*<div/g, '><div');
    });
    
    // Fix unclosed section tags
    content = content.replace(/<section className="[^"]*"><\/section>\s*<div className="[^"]*"><\/div>/g, (match) => {
      return match.replace(/<\/section>\s*<div/g, '><div');
    });
    
    // Fix unclosed div tags in general
    content = content.replace(/<div className="[^"]*"><\/div>\s*<div className="[^"]*"><\/div>/g, (match) => {
      return match.replace(/<\/div>\s*<div/g, '><div');
    });
    
    // Fix specific patterns like <div></div> followed by content
    content = content.replace(/<div className="[^"]*"><\/div>\s*{/g, '<div className="[^"]*">{');
    
    // Fix unclosed JSX elements that should be self-closing
    content = content.replace(/<div className="[^"]*"><\/div>\s*<button/g, '<div className="[^"]*"><button');
    content = content.replace(/<div className="[^"]*"><\/div>\s*<h/g, '<div className="[^"]*"><h');
    content = content.replace(/<div className="[^"]*"><\/div>\s*<p/g, '<div className="[^"]*"><p');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX structure in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all .tsx files in app/components
const componentsDir = path.join(__dirname, 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  fixJSXStructure(filePath);
});

console.log('JSX structure fixes completed');
