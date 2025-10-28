#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix missing type definitions in a file
function fixMissingTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has React imports
    const hasReactImport = content.includes("import React") || content.includes("import {");
    const hasReactFC = content.includes("React.FC");
    
    // Add React import if missing and file uses React
    if (!hasReactImport && (hasReactFC || content.includes("React."))) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Find all missing type definitions
    const typePattern = /(\w+Props)/g;
    const matches = content.match(typePattern);
    
    if (matches) {
      const uniqueTypes = [...new Set(matches)];
      
      for (const typeName of uniqueTypes) {
        // Check if interface already exists
        if (!content.includes(`interface ${typeName}`)) {
          // Find the component that uses this type
          const componentPattern = new RegExp(`(const|function|export default function)\\s+(\\w+).*?:\\s*React\\.FC<${typeName}>`, 'g');
          const componentMatch = componentPattern.exec(content);
          
          if (componentMatch) {
            const componentName = componentMatch[2];
            
            // Add interface before the component
            const interfaceDef = `interface ${typeName} {
  className?: string;
  children?: React.ReactNode;
}

`;
            
            // Insert interface before the component
            const insertIndex = content.indexOf(componentMatch[0]);
            content = content.slice(0, insertIndex) + interfaceDef + content.slice(insertIndex);
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
  if (fixMissingTypes(file)) {
    fixedCount++;
  }
}

console.log(`Fixed types in ${fixedCount} files`);