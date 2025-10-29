const fs = require('fs');
const path = require('path');

// Find all files that import Footer
const findFilesWithFooterImport = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFilesWithFooterImport(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("import Footer from '@/components/Footer'")) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
};

// Fix Footer imports in a file
const fixFooterImport = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Calculate relative path to components directory
  const relativePath = path.relative(path.dirname(filePath), 'app/components');
  const newImport = `import Footer from '${relativePath}/FooterSimple';`;
  
  const updatedContent = content.replace(
    /import Footer from '@\/components\/Footer';/g,
    newImport
  );
  
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Fixed: ${filePath}`);
  }
};

// Main execution
const files = findFilesWithFooterImport('app');
console.log(`Found ${files.length} files with Footer imports`);

files.forEach(fixFooterImport);
console.log('All Footer imports fixed!');