const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixComponent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix self-closing div tags that should be opening tags
    const selfClosingDivPattern = /<div\s+[^>]*className="[^"]*"[^>]*><\/div>/g;
    const matches = content.match(selfClosingDivPattern);
    
    if (matches) {
      matches.forEach(match => {
        // Extract the className and other attributes
        const classNameMatch = match.match(/className="([^"]*)"/);
        const otherAttrs = match.replace(/className="[^"]*"/, '').replace(/<div\s*/, '<div ').replace(/\s*><\/div>/, '');
        
        if (classNameMatch) {
          const className = classNameMatch[1];
          const newOpeningTag = `<div${otherAttrs} className="${className}">`;
          content = content.replace(match, newOpeningTag);
          modified = true;
        }
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all component files
const files = glob.sync('app/components/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} component files to check...`);

files.forEach(fixComponent);

console.log('Component fixes completed!');