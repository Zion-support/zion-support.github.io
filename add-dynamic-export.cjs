const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files in app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find all page.tsx files in app directory
const files = findTsxFiles('app');

let fixedCount = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if dynamic export already exists
    if (content.includes('export const dynamic')) {
      return;
    }
    
    // Find the first import statement and add dynamic export after it
    const importMatch = content.match(/import.*from.*['"][^'"]*['"];?\s*\n/);
    if (importMatch) {
      const insertIndex = importMatch.index + importMatch[0].length;
      const beforeInsert = content.substring(0, insertIndex);
      const afterInsert = content.substring(insertIndex);
      
      content = beforeInsert + '\nexport const dynamic = \'force-dynamic\';\n' + afterInsert;
      
      fs.writeFileSync(filePath, content);
      console.log(`Added dynamic export to: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Added dynamic export to ${fixedCount} files`);