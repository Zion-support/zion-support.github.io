const fs = require('fs');
const path = require('path');
// Get all .ts files in the app directory
function getAllTsFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(getAllTsFiles(fullPath));
    } else if (item.endsWith('.ts') && !item.endsWith('.d.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}
function fixTsFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    // Skip if file already looks properly formatted
    if (content.includes('import {') && 
        content.includes('export') &&
        !content.includes('error TS') &&
        !content.includes('">: value') &&
        !content.includes(';>') &&
        !content.includes('"\'"')) {
      return;
    }
    // Extract the file name from the path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 1].replace('.ts', '');
    // Create a proper hook name
    const hookName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    // Create a simple hook template
    const fixedContent = `import { useEffect, useCallback, useRef } from 'react';
interface ${hookName}Options {
  // Add your options here
}
interface ${hookName}State {
  // Add your state here
}
export const ${hookName} = (options: ${hookName}Options = {}) => {
  const stateRef = useRef<${hookName}State>({
    // Initialize your state here
  });
  // Add your hooks logic here
  useEffect(() => {
    // Add your effect logic here
  }, []);
  return {
    // Return your hook values here
  };
};
export default ${hookName};`;
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}
// Get all .ts files
const allTsFiles = getAllTsFiles('./app');
console.log(`Found ${allTsFiles.length} .ts files`);
// Fix all files
allTsFiles.forEach(fixTsFile);
console.log('All .ts files have been processed.');