#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const result = [];
    const usedIdentifiers = new Set();
    
    // First pass: collect all used identifiers (excluding import lines)
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip import lines for now
      if (line.trim().startsWith('import ')) {
        continue;
      }
      
      // Find used identifiers in the line
      const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
      if (matches) {
        matches.forEach(match => usedIdentifiers.add(match));
      }
      
      // Also check for JSX components
      const jsxMatches = line.match(/<([A-Z][a-zA-Z0-9]*)/g);
      if (jsxMatches) {
        jsxMatches.forEach(match => {
          const component = match.replace('<', '');
          usedIdentifiers.add(component);
        });
      }
      
      // Check for destructured imports
      const destructuredMatches = line.match(/\{([^}]+)\}/g);
      if (destructuredMatches) {
        destructuredMatches.forEach(match => {
          const items = match.replace(/[{}]/g, '').split(',').map(item => item.trim());
          items.forEach(item => usedIdentifiers.add(item));
        });
      }
    }
    
    // Second pass: filter imports
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('import ')) {
        // Handle named imports
        const namedImportMatch = line.match(/import\s*\{([^}]+)\}/);
        if (namedImportMatch) {
          const importedItems = namedImportMatch[1].split(',').map(item => item.trim());
          const usedItems = importedItems.filter(item => usedIdentifiers.has(item));
          
          if (usedItems.length === 0) {
            // Remove the entire import line
            continue;
          } else if (usedItems.length < importedItems.length) {
            // Keep only used items
            const newImport = line.replace(/\{[^}]+\}/, `{ ${usedItems.join(', ')} }`);
            result.push(newImport);
            continue;
          }
        }
        
        // Handle default imports
        const defaultImportMatch = line.match(/import\s+(\w+)\s+from/);
        if (defaultImportMatch && !usedIdentifiers.has(defaultImportMatch[1])) {
          continue; // Remove unused default import
        }
        
        // Handle namespace imports
        const namespaceImportMatch = line.match(/import\s+\*\s+as\s+(\w+)/);
        if (namespaceImportMatch && !usedIdentifiers.has(namespaceImportMatch[1])) {
          continue; // Remove unused namespace import
        }
      }
      
      result.push(line);
    }
    
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error removing unused imports from ${filePath}:`, error.message);
    return false;
  }
}

// Function to remove unused variables
function removeUnusedVariables(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const result = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Remove unused variable assignments
      if (line.includes('is assigned a value but never used')) {
        continue; // Skip this line
      }
      
      // Remove unused variable declarations
      const unusedVarMatch = line.match(/^\s*const\s+(\w+)\s*=.*$/);
      if (unusedVarMatch) {
        const varName = unusedVarMatch[1];
        // Check if this variable is used anywhere in the file
        const isUsed = content.includes(varName) && !content.includes(`const ${varName} =`);
        if (!isUsed) {
          continue; // Skip this line
        }
      }
      
      result.push(line);
    }
    
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error removing unused variables in ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const appDir = path.join(__dirname, 'app');
  const filesToFix = [];
  
  // Find all .tsx and .ts files in app directory
  function findFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findFiles(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filesToFix.push(filePath);
      }
    }
  }
  
  findFiles(appDir);
  
  console.log(`Found ${filesToFix.length} files to fix`);
  
  let fixedCount = 0;
  
  for (const filePath of filesToFix) {
    if (removeUnusedImports(filePath)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed unused imports in ${fixedCount} files`);
}

main();