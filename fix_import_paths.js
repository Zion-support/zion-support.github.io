const fs = require('fs');
const path = require('path');

function fixImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Calculate the correct relative path to components
    const pathParts = filePath.split('/');
    const depth = pathParts.filter(part => part !== 'app').length - 1; // -1 for the file itself
    const relativePath = '../'.repeat(depth) + 'components/SEOHead';
    
    // Fix the import path
    content = content.replace(
      /import SEOHead from '\.\.\/components\/SEOHead';/g,
      `import SEOHead from '${relativePath}';`
    );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') && file.includes('page.tsx')) {
      if (fixImportPaths(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting import path fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files`);