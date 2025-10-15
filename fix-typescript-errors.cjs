#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to remove unused imports from a file
function removeUnusedImports(content) {
  const lines = content.split('\n');
  const result = [];
  const usedImports = new Set();
  
  // Track which imports are actually used in the code
  const codeContent = content.replace(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/g, '');
  
  // Find all import statements
  const importRegex = /import\s+(?:{([^}]+)}|([^{][^;]+?))\s+from\s+['"]([^'"]+)['"];?/g;
  let match;
  const importsToRemove = [];
  
  while ((match = importRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const namedImports = match[1];
    const defaultImport = match[2];
    const moduleName = match[3];
    
    if (namedImports) {
      // Handle named imports
      const namedImportList = namedImports.split(',').map(imp => imp.trim());
      const usedNamedImports = [];
      
      for (const namedImport of namedImportList) {
        const cleanImport = namedImport.replace(/\s+as\s+\w+/, '').trim();
        if (codeContent.includes(cleanImport)) {
          usedNamedImports.push(namedImport);
        }
      }
      
      if (usedNamedImports.length === 0) {
        importsToRemove.push(fullMatch);
      } else if (usedNamedImports.length < namedImportList.length) {
        // Replace with only used imports
        const newImport = `import { ${usedNamedImports.join(', ')} } from '${moduleName}';`;
        content = content.replace(fullMatch, newImport);
      }
    } else if (defaultImport) {
      // Handle default imports
      const cleanImport = defaultImport.trim();
      if (!codeContent.includes(cleanImport)) {
        importsToRemove.push(fullMatch);
      }
    }
  }
  
  // Remove unused imports
  for (const importToRemove of importsToRemove) {
    content = content.replace(importToRemove + '\n', '');
  }
  
  return content;
}

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  
  let inImportBlock = false;
  let currentImportBlock = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ')) {
      if (!inImportBlock) {
        inImportBlock = true;
        currentImportBlock = [line];
      } else {
        currentImportBlock.push(line);
      }
    } else if (inImportBlock && (line.trim() === '' || line.trim().startsWith('//'))) {
      currentImportBlock.push(line);
    } else {
      if (inImportBlock) {
        // Process the import block
        const processedBlock = processImportBlock(currentImportBlock);
        importLines.push(...processedBlock);
        inImportBlock = false;
        currentImportBlock = [];
      }
      otherLines.push(line);
    }
  }
  
  // Process any remaining import block
  if (inImportBlock) {
    const processedBlock = processImportBlock(currentImportBlock);
    importLines.push(...processedBlock);
  }
  
  return [...importLines, ...otherLines].join('\n');
}

// Function to process a block of imports and remove duplicates
function processImportBlock(importBlock) {
  const imports = new Map(); // module -> { default: [], named: [] }
  
  for (const line of importBlock) {
    if (line.trim().startsWith('import ')) {
      const match = line.match(/import\s+(?:{([^}]+)}|([^{][^;]+?))\s+from\s+['"]([^'"]+)['"];?/);
      if (match) {
        const namedImports = match[1];
        const defaultImport = match[2];
        const moduleName = match[3];
        
        if (!imports.has(moduleName)) {
          imports.set(moduleName, { default: [], named: [] });
        }
        
        if (namedImports) {
          const namedImportList = namedImports.split(',').map(imp => imp.trim());
          imports.get(moduleName).named.push(...namedImportList);
        } else if (defaultImport) {
          imports.get(moduleName).default.push(defaultImport.trim());
        }
      }
    }
  }
  
  // Generate new import statements
  const result = [];
  for (const [moduleName, { default: defaultImports, named: namedImports }] of imports) {
    if (defaultImports.length > 0 && namedImports.length > 0) {
      // Both default and named imports
      const uniqueNamed = [...new Set(namedImports)];
      result.push(`import ${defaultImports[0]}, { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    } else if (defaultImports.length > 0) {
      // Only default imports
      result.push(`import ${defaultImports[0]} from '${moduleName}';`);
    } else if (namedImports.length > 0) {
      // Only named imports
      const uniqueNamed = [...new Set(namedImports)];
      result.push(`import { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    }
  }
  
  return result;
}

// Function to clean up empty import statements
function cleanEmptyImports(content) {
  return content.replace(/import\s*{\s*}\s*from\s+['"][^'"]+['"];?\s*\n/g, '');
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix duplicate imports
    content = fixDuplicateImports(content);
    
    // Remove unused imports
    content = removeUnusedImports(content);
    
    // Clean up empty imports
    content = cleanEmptyImports(content);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);