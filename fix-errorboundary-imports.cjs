const fs = require('fs');
const path = require('path');

// Get all page files that need fixing
const getAllPageFiles = () => {
  const files = [];
  
  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  };
  
  walkDir('app');
  return files;
};

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix ErrorBoundary import - change from named import to default import
    content = content.replace(
      /import { ErrorBoundary } from ['"][^'"]*ErrorBoundary['"]/g,
      (match) => {
        const pathMatch = match.match(/from ['"]([^'"]*)['"]/);
        if (pathMatch) {
          return `import ErrorBoundary from '${pathMatch[1]}'`;
        }
        return match;
      }
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ErrorBoundary import in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Get all page files and fix them
const pageFiles = getAllPageFiles();
console.log(`Found ${pageFiles.length} page files to fix`);

pageFiles.forEach(fixFile);

console.log('ErrorBoundary imports fixed!');