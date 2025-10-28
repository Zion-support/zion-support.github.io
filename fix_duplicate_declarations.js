#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixDuplicateDeclarations(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check for duplicate component declarations
    const lines = content.split('\n');
    const componentNames = new Set();
    const newLines = [];
    let inComponent = false;
    let currentComponent = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for component declaration
      const componentMatch = line.match(/(?:const|function)\s+(\w+)(?:\s*:\s*React\.FC)?/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        
        if (componentNames.has(componentName)) {
          // Skip duplicate component declaration
          modified = true;
          continue;
        }
        
        componentNames.add(componentName);
        currentComponent = componentName;
        inComponent = true;
      }
      
      // Check for export default
      if (line.includes('export default') && currentComponent) {
        // Keep the export but remove duplicate component
        if (componentNames.has(currentComponent)) {
          newLines.push(line);
          inComponent = false;
          currentComponent = null;
          continue;
        }
      }
      
      // Check for end of component
      if (inComponent && (line.includes('};') || line.includes('}'))) {
        inComponent = false;
        currentComponent = null;
      }
      
      if (!inComponent || !componentNames.has(currentComponent)) {
        newLines.push(line);
      }
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicate declarations in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing declarations in ${filePath}:`, error.message);
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
  if (fixDuplicateDeclarations(file)) {
    fixedCount++;
  }
}

console.log(`Fixed duplicate declarations in ${fixedCount} files`);