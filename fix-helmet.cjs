const fs = require('fs');
const path = require('path');

// Find all files using react-helmet-async
const findFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('react-helmet-async')) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
};

// Fix a single file
const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove Helmet import
  content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
  
  // Remove Helmet usage
  content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
  
  // Clean up extra whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
};

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files with Helmet usage`);

files.forEach(fixFile);

console.log('All files fixed!');