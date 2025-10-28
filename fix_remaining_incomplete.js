#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixIncompleteComponent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is incomplete (just has interface and export default name)
    if (content.includes('interface _') && content.includes('export default') && !content.includes('const ') && !content.includes('function ')) {
      const componentName = path.basename(filePath, '.tsx');
      
      const cleanComponent = `import React from 'react';

interface ${componentName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${componentName}: React.FC<${componentName}Props> = ({ className = '', children }) => {
  return (
    <div className={\`${componentName.toLowerCase()}-component \${className}\`}>
      {children || <h2>${componentName}</h2>}
    </div>
  );
};

export default ${componentName};`;
      
      fs.writeFileSync(filePath, cleanComponent, 'utf8');
      console.log(`Fixed incomplete component: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing component ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace/app';
const tsxFiles = findTsxFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TSX files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixIncompleteComponent(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} incomplete components`);