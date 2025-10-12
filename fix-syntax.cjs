const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors from merge conflicts
    // Remove orphaned object properties
    content = content.replace(/\s+icon:\s*<[^>]+>,\s*\n\s*title:/g, '\n    {\n      title:');
    content = content.replace(/\s+title:\s*'[^']+',\s*\n\s*description:\s*'[^']+',\s*\n\s*icon:\s*<[^>]+>,\s*\n\s*link:\s*'[^']+',\s*\n\s*features:\s*\[[^\]]+\]\s*\n\s*\}/g, (match) => {
      return match.replace(/\s+title:/, '\n    {\n      title:');
    });
    
    // Fix missing closing brackets
    content = content.replace(/\s+}\s*\n\s*title:/g, '\n  ]\n\n  const features = [\n    {\n      title:');
    
    // Fix duplicate imports
    content = content.replace(/import\s+React[^;]+;\s*\n\s*import\s+React[^;]+;/g, (match) => {
      const lines = match.split('\n');
      return lines[0] + ';';
    });
    
    // Fix orphaned properties
    content = content.replace(/\s+}\s*\n\s*icon:\s*<[^>]+>,\s*\n\s*title:/g, '\n  ]\n\n  const features = [\n    {\n      title:');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all page.tsx files
const appDir = path.join(__dirname, 'app');
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
}

findTsxFiles(appDir);

console.log(`Found ${files.length} page.tsx files`);
files.forEach(fixFile);
console.log('Done fixing syntax errors');
