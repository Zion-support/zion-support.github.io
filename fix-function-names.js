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

// Convert page name to valid function name
function createValidFunctionName(pageName) {
  // Remove leading numbers and replace hyphens with camelCase
  const cleaned = pageName.replace(/^[0-9]+/, '').replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + 'Page';
}

// Find all page files
const pageFiles = findPageFiles('/workspace/app');

console.log(`Found ${pageFiles.length} page files`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has invalid function name (starts with number)
    const match = content.match(/export default function (\d+[a-zA-Z]+)\(/);
    if (match) {
      const invalidFunctionName = match[1];
      
      // Extract page name from path
      const pathParts = filePath.split('/');
      const pageName = pathParts[pathParts.length - 2] || 'Page';
      const validFunctionName = createValidFunctionName(pageName);
      
      // Replace the invalid function name
      const newContent = content.replace(
        new RegExp(`export default function ${invalidFunctionName}\\(`),
        `export default function ${validFunctionName}(`
      );
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath} - ${invalidFunctionName} -> ${validFunctionName}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} pages`);