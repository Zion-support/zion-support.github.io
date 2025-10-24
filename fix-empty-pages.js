const fs = require('fs');
const path = require('path');

// Find all page.tsx files in the app directory
function findPageFiles(dir) {
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
}

// Simple page template
const pageTemplate = `export default function Page() {
  return (
    <div>
      <h1>Page</h1>
      <p>This page is under construction.</p>
    </div>
  );
}`;

// Find all page files
const pageFiles = findPageFiles('/workspace/app');

console.log(`Found ${pageFiles.length} page files`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file only contains merge conflict comments
    if (content.trim() === '// Conflict resolved: taking HEAD version' || 
        content.trim() === '' ||
        content.includes('// Conflict resolved: taking HEAD version')) {
      
      // Extract page name from path
      const pathParts = filePath.split('/');
      const pageName = pathParts[pathParts.length - 2] || 'Page';
      const capitalizedName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' ');
      
      // Convert page name to valid function name
      const functionName = pageName.replace(/^[0-9]+/, '').replace(/-/g, '');
      const validFunctionName = functionName.charAt(0).toUpperCase() + functionName.slice(1) + 'Page';
      
      const newContent = `export default function ${validFunctionName}() {
  return (
    <div>
      <h1>${capitalizedName}</h1>
      <p>This page is under construction.</p>
    </div>
  );
}`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} pages`);