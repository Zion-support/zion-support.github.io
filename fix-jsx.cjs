const fs = require('fs');
const path = require('path');

// Find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already properly formatted
    if (content.includes('<>') && content.includes('</>')) {
      return false;
    }
    
    // Basic fix for malformed JSX
    if (content.includes('return (') && content.includes('<title>') && !content.includes('<>')) {
      content = content.replace(
        /return\s*\(\s*\n\s*<title>/g,
        'return (\n    <>\n      <Helmet>\n        <title>'
      );
      
      content = content.replace(
        /<\/title>\s*\n\s*<h1/g,
        '</title>\n      </Helmet>\n      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">\n        <div className="text-center">\n          <h1'
      );
      
      content = content.replace(
        /Contact Us\s*\n\s*\);/g,
        'Contact Us\n          </Link>\n        </div>\n      </div>\n    </>\n  );'
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
const pageFiles = findPageFiles('./app');
console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
pageFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
