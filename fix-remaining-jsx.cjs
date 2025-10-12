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
    let modified = false;
    
    // Fix missing Link opening tags
    if (content.includes('Contact Us') && content.includes('</Link>') && !content.includes('<Link')) {
      content = content.replace(
        /(\s+)(Contact Us\s*\n\s*<\/Link>)/g,
        '$1<Link to="/contact" className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-600 transition-all duration-300">\n$1  Contact Us\n$1</Link>'
      );
      modified = true;
    }
    
    // Fix missing Link opening tags for other buttons
    if (content.includes('Learn More') && content.includes('</Link>') && !content.includes('<Link')) {
      content = content.replace(
        /(\s+)(Learn More\s*\n\s*<\/Link>)/g,
        '$1<Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300">\n$1  Learn More\n$1</Link>'
      );
      modified = true;
    }
    
    // Fix malformed JSX structure
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
        /Contact Us\s*\n\s*<\/Link>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>/g,
        'Contact Us\n          </Link>\n        </div>\n      </div>\n    </>\n  );'
      );
      
      modified = true;
    }
    
    if (modified) {
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
