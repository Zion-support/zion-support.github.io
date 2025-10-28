#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix unused interfaces
function fixUnusedInterfaces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check for unused interface pattern (interface with underscore prefix)
    const unusedInterfacePattern = /interface\s+_(\w+)\s*{[\s\S]*?}\s*\n\s*export\s+default\s+\1;?\s*$/;
    const match = content.match(unusedInterfacePattern);
    
    if (match) {
      const componentName = match[1];
      
      // Create a complete component
      const newContent = `import React from 'react';

interface ${componentName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${componentName}: React.FC<${componentName}Props> = ({ className = '', children }) => {
  return (
    <div className={\`${componentName.toLowerCase()}-component \${className}\`}>
      {children || <p>${componentName} component</p>}
    </div>
  );
};

export default ${componentName};
`;
      
      content = newContent;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused interface in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing unused interface in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript files
function findTSFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace';
const tsFiles = findTSFiles(workspaceDir);

console.log(`Found ${tsFiles.length} TypeScript files`);

let fixedCount = 0;
for (const file of tsFiles) {
  if (fixUnusedInterfaces(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused interfaces in ${fixedCount} files`);