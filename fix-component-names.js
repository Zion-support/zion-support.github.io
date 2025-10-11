#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixComponentName(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract page name from path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2] || 'Page';
    const componentName = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
    
    // Fix the component name in the file
    let fixedContent = content.replace(/const PagePage: React.FC = \(\) => \{/, `const ${componentName}: React.FC = () => {`);
    fixedContent = fixedContent.replace(/export default PagePage/, `export default ${componentName}`);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed component name in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules') && !item.includes('dist') && !item.includes('build')) {
        traverse(fullPath);
      } else if (stat.isFile() && item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
const pageFiles = findPageFiles(workspaceDir);

console.log(`Found ${pageFiles.length} page files to fix`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixComponentName(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} page files`);