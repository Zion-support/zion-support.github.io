#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix unused imports
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Get all import lines
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        importLines.push({ line: lines[i], index: i });
      } else {
        otherLines.push(lines[i]);
      }
    }
    
    // Check which imports are actually used
    const usedImports = new Set();
    
    for (const importLine of importLines) {
      const importMatch = importLine.line.match(/import\s+(?:{[^}]+}|\w+)\s+from\s+['"][^'"]+['"]/);
      if (importMatch) {
        const importStatement = importMatch[0];
        
        // Extract imported names
        const nameMatch = importStatement.match(/import\s+{([^}]+)}/);
        if (nameMatch) {
          // Named imports
          const names = nameMatch[1].split(',').map(name => name.trim().split(' as ')[0].trim());
          for (const name of names) {
            if (content.includes(name) && !importLine.line.includes(name)) {
              usedImports.add(importLine.line);
              break;
            }
          }
        } else {
          // Default import
          const defaultMatch = importStatement.match(/import\s+(\w+)\s+from/);
          if (defaultMatch) {
            const name = defaultMatch[1];
            if (content.includes(name) && !importLine.line.includes(name)) {
              usedImports.add(importLine.line);
            }
          }
        }
      }
    }
    
    // Remove unused imports
    const newLines = lines.filter((line, index) => {
      if (line.trim().startsWith('import ')) {
        const importLine = importLines.find(imp => imp.index === index);
        return importLine && usedImports.has(importLine.line);
      }
      return true;
    });
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing unused imports in ${filePath}:`, error.message);
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
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports in ${fixedCount} files`);