const fs = require('fs');
const path = require('path');

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

// Fix a single page file
const fixPageFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the circular reference issue
    if (content.includes("const page = React.lazy(() => import('./page'));")) {
      console.log(`Fixing: ${filePath}`);
      
      // Replace the problematic line with proper export
      const fixedContent = content.replace(
        "const page = React.lazy(() => import('./page'));\nexport default page;",
        "export default Page;"
      );
      
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
};

// Main execution
const pageFiles = findPageFiles('./app');
let fixedCount = 0;

console.log(`Found ${pageFiles.length} page files`);

for (const file of pageFiles) {
  if (fixPageFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
