#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMissingTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Add React import if missing and file uses React
    if ((content.includes('React.FC') || content.includes('React.ReactNode')) && !content.includes("import React")) {
      content = "import React from 'react';\n\n" + content;
      modified = true;
    }
    
    // Find all missing prop types
    const propTypeRegex = /React\.FC<(\w+)>/g;
    const matches = [...content.matchAll(propTypeRegex)];
    
    for (const match of matches) {
      const propTypeName = match[1];
      
      // Check if interface already exists
      if (!content.includes(`interface ${propTypeName}`)) {
        // Find the component using this prop type
        const componentRegex = new RegExp(`const\\s+(\\w+):\\s+React\\.FC<${propTypeName}>\\s*=\\s*\\(\\s*\\{([^}]+)\\}\\s*\\)`, 's');
        const componentMatch = content.match(componentRegex);
        
        if (componentMatch) {
          const [, componentName, params] = componentMatch;
          
          // Extract parameter names
          const paramNames = params.split(',').map(p => p.trim().split(':')[0].trim()).filter(p => p);
          
          // Create interface
          let interfaceDef = `interface ${propTypeName} {\n`;
          for (const param of paramNames) {
            if (param === 'className') {
              interfaceDef += `  className?: string;\n`;
            } else if (param === 'children') {
              interfaceDef += `  children?: React.ReactNode;\n`;
            } else {
              interfaceDef += `  ${param}?: any;\n`;
            }
          }
          interfaceDef += `}\n\n`;
          
          // Insert interface before the component
          const insertPoint = content.indexOf(`const ${componentName}:`);
          if (insertPoint > 0) {
            content = content.slice(0, insertPoint) + interfaceDef + content.slice(insertPoint);
            modified = true;
          }
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed types in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing types in ${filePath}:`, error.message);
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
  if (fixMissingTypes(file)) {
    fixedCount++;
  }
}

console.log(`Fixed types in ${fixedCount} files`);