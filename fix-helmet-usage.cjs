const fs = require('fs');
const path = require('path');

function fixHelmetUsage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
    
    // Remove Helmet usage in JSX
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*\n?/g, '');
    
    // Clean up any extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('react-helmet-async') || content.includes('<Helmet>')) {
        if (fixHelmetUsage(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting to fix Helmet usage...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed ${fixedCount} files`);