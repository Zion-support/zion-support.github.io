#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictType = null;
    let headContent = [];
    let otherContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'other';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        
        // Choose the more complete content (usually the one with more lines)
        if (otherContent.length > headContent.length) {
          result.push(...otherContent);
        } else {
          result.push(...headContent);
        }
        
        headContent = [];
        otherContent = [];
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (conflictType === 'other') {
          otherContent.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to remove unused imports
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const result = [];
    const imports = [];
    const usedIdentifiers = new Set();
    
    // First pass: collect all imports and find used identifiers
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for import statements
      if (line.trim().startsWith('import ')) {
        imports.push({ line, index: i });
      } else {
        // Find used identifiers in the line
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
        if (matches) {
          matches.forEach(match => usedIdentifiers.add(match));
        }
      }
    }
    
    // Second pass: filter out unused imports
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('import ')) {
        // Check if any imported identifier is used
        const importMatch = line.match(/import\s*\{([^}]+)\}/);
        if (importMatch) {
          const importedItems = importMatch[1].split(',').map(item => item.trim());
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
        
        // Check for default imports
        const defaultImportMatch = line.match(/import\s+(\w+)/);
        if (defaultImportMatch && !usedIdentifiers.has(defaultImportMatch[1])) {
          continue; // Remove unused default import
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
  
  console.log(`Found ${filesToFix.length} files to check`);
  
  let fixedCount = 0;
  let importFixedCount = 0;
  
  for (const filePath of filesToFix) {
    if (fixMergeConflicts(filePath)) {
      fixedCount++;
    }
    
    if (removeUnusedImports(filePath)) {
      importFixedCount++;
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
  console.log(`Fixed unused imports in ${importFixedCount} files`);
  
  // Also fix some specific problematic files
  const specificFiles = [
    'App_clean.tsx',
    'app/layout.tsx',
    'app/page.tsx'
  ];
  
  for (const file of specificFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      removeUnusedImports(filePath);
    }
  }
}

main();