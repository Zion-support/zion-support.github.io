const fs = require('fs');
const path = require('path');

// Find all files with react-helmet-async
const findFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
};

const files = findFiles('./app');

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('react-helmet-async')) {
      console.log(`Fixing ${filePath}`);
      
      // Remove import
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
      
      // Remove Helmet usage
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*\n?/g, '');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing react-helmet-async issues');