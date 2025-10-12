const fs = require('fs');
const path = require('path');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the pattern "  return (" at the beginning
    if (content.match(/^import.*\n.*\n.*\n.*\n\n  return \(/m)) {
      // Extract the component name from the file path
      const fileName = path.basename(filePath, '.tsx');
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Page';
      
      // Add the function declaration
      content = content.replace(
        /^import.*\n.*\n.*\n.*\n\n  return \(/m,
        `import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ${componentName}: React.FC = () => {
  return (`
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);