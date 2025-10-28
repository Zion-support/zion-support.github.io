const fs = require('fs');
const path = require('path');

function fixPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove Head and Footer usage
  content = content.replace(/<Head>[\s\S]*?<\/Head>/g, '');
  content = content.replace(/<Footer[^>]*\/>/g, '');
  content = content.replace(/<Footer[^>]*>[\s\S]*?<\/Footer>/g, '');
  
  // Remove unused variables
  content = content.replace(/const pagePage = [^;]+;/g, '');
  
  // Fix function names
  content = content.replace(/function pagePage\(\)/g, 'function Page()');
  
  // Remove duplicate export statements
  const exportMatches = content.match(/export default [^;]+;/g);
  if (exportMatches && exportMatches.length > 1) {
    // Keep only the last export statement
    content = content.replace(/export default [^;]+;/g, '');
    content += '\nexport default Page;';
  }
  
  // Clean up empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
}

// Find all page.tsx files
const findPageFiles = (dir) => {
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
};

const pageFiles = findPageFiles('./app');
pageFiles.forEach(fixPage);
console.log(`Fixed ${pageFiles.length} page files`);
