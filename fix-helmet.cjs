const fs = require('fs');
const path = require('path');

// Find all files with react-helmet-async imports
const findFilesWithHelmet = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFilesWithHelmet(fullPath));
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
  content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
  
  // Remove Helmet usage
  content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*\n?/g, '');
  
  // Fix return statements that had Helmet
  content = content.replace(/return\s*\(\s*<>\s*<div/g, 'return (\n    <div');
  content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
};

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFilesWithHelmet(appDir);

console.log(`Found ${files.length} files with Helmet imports`);

files.forEach(fixFile);

console.log('All Helmet imports have been removed!');