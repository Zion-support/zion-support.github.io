import fs from 'fs';
import path from 'path';

// Function to fix props type annotations
function fixPropsTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix props: any to props: Record<string, any>
    const propsAnyRegex = /\(props: any\)/g;
    if (propsAnyRegex.test(content)) {
      content = content.replace(propsAnyRegex, '(props: Record<string, any>)');
      modified = true;
    }

    // Fix implicit any props parameter in function declarations
    const implicitPropsRegex = /\(props\) =>/g;
    if (implicitPropsRegex.test(content)) {
      content = content.replace(implicitPropsRegex, '(props: Record<string, any>) =>');
      modified = true;
    }

    // Fix implicit any props parameter in export default function
    const exportDefaultPropsRegex = /export default function Wrapped\(props\)/g;
    if (exportDefaultPropsRegex.test(content)) {
      content = content.replace(exportDefaultPropsRegex, 'export default function Wrapped(props: Record<string, any>)');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed props types in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Get all page.tsx files
function getAllPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const pageFiles = getAllPageFiles(appDir);

console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixPropsTypes(file)) {
    fixedCount++;
  }
}

console.log(`Fixed props types in ${fixedCount} files`);