import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all page.tsx files that don't have default exports
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

// Check if file has default export
const hasDefaultExport = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes('export default');
  } catch (error) {
    return false;
  }
};

// Add default export to file
const addDefaultExport = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file already has default export
    if (content.includes('export default')) {
      return false;
    }
    
    // Find the function name (assuming it's the last function in the file)
    const functionMatch = content.match(/function\s+(\w+)\s*\(/g);
    if (!functionMatch) {
      console.log(`No function found in ${filePath}`);
      return false;
    }
    
    const lastFunction = functionMatch[functionMatch.length - 1];
    const functionName = lastFunction.match(/function\s+(\w+)\s*\(/)[1];
    
    // Add export default at the end
    content = content.trim();
    if (!content.endsWith('}')) {
      console.log(`File doesn't end with } in ${filePath}`);
      return false;
    }
    
    content += '\n\nexport default ' + functionName + ';';
    
    fs.writeFileSync(filePath, content);
    console.log(`Added default export to ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (!hasDefaultExport(file)) {
    if (addDefaultExport(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files`);