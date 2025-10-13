#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to find all TypeScript/JavaScript files
function findTSFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Function to clean up unused imports and fix common issues
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove duplicate imports
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    const usedImports = new Set();
    const importMap = new Map();
    
    // First pass: collect all import lines
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        importLines.push(line);
      } else {
        otherLines.push(line);
      }
    }
    
    // Second pass: find used imports by scanning the rest of the content
    const contentWithoutImports = otherLines.join('\n');
    
    for (const importLine of importLines) {
      // Extract imported names from the import line
      const match = importLine.match(/import\s+.*?from\s+['"](.*?)['"]/);
      if (match) {
        const moduleName = match[1];
        
        // Check if this is a relative import (starts with . or /)
        if (moduleName.startsWith('.') || moduleName.startsWith('/')) {
          // For relative imports, check if the module is used
          if (contentWithoutImports.includes(moduleName)) {
            usedImports.add(importLine);
          }
        } else {
          // For external imports, extract the imported names
          const importMatch = importLine.match(/import\s+\{([^}]+)\}/);
          if (importMatch) {
            const importedNames = importMatch[1].split(',').map(name => name.trim());
            const hasUsedImport = importedNames.some(name => {
              const cleanName = name.replace(/\s+as\s+\w+/, '').trim();
              return contentWithoutImports.includes(cleanName);
            });
            
            if (hasUsedImport) {
              usedImports.add(importLine);
            }
          } else {
            // Default import
            const defaultMatch = importLine.match(/import\s+(\w+)/);
            if (defaultMatch && contentWithoutImports.includes(defaultMatch[1])) {
              usedImports.add(importLine);
            }
          }
        }
      }
    }
    
    // Remove duplicate imports by consolidating them
    const consolidatedImports = new Map();
    
    for (const importLine of usedImports) {
      const match = importLine.match(/import\s+.*?from\s+['"](.*?)['"]/);
      if (match) {
        const moduleName = match[1];
        if (!consolidatedImports.has(moduleName)) {
          consolidatedImports.set(moduleName, importLine);
        }
      }
    }
    
    // Combine cleaned imports with other lines
    const cleanedImports = Array.from(consolidatedImports.values());
    const newContent = [...cleanedImports, ...otherLines].join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific common issues
function fixCommonIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unused expressions (lines that are just variable names)
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      const trimmed = line.trim();
      // If line is just a variable name or simple expression, comment it out
      if (trimmed && !trimmed.startsWith('//') && !trimmed.startsWith('*') && !trimmed.startsWith('import') && !trimmed.startsWith('export') && !trimmed.includes('=') && !trimmed.includes('(') && !trimmed.includes('{') && !trimmed.includes('}') && !trimmed.includes(';') && !trimmed.includes('return') && !trimmed.includes('if') && !trimmed.includes('for') && !trimmed.includes('while') && !trimmed.includes('const') && !trimmed.includes('let') && !trimmed.includes('var') && !trimmed.includes('function') && !trimmed.includes('class') && !trimmed.includes('interface') && !trimmed.includes('type') && !trimmed.includes('enum')) {
        return `// ${line}`;
      }
      return line;
    });
    
    const newContent = fixedLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing issues in ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🔍 Finding TypeScript/JavaScript files...');
  
  const files = findTSFiles(process.cwd());
  console.log(`📁 Found ${files.length} files to process`);
  
  console.log('\n🧹 Cleaning up unused imports and fixing common issues...');
  
  let cleanedCount = 0;
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of files) {
    try {
      console.log(`Processing: ${filePath}`);
      
      const cleaned = cleanFile(filePath);
      if (cleaned) {
        cleanedCount++;
        console.log(`  ✅ Cleaned imports: ${filePath}`);
      }
      
      const fixed = fixCommonIssues(filePath);
      if (fixed) {
        fixedCount++;
        console.log(`  ✅ Fixed issues: ${filePath}`);
      }
      
    } catch (error) {
      console.error(`  ❌ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Files with cleaned imports: ${cleanedCount}`);
  console.log(`  ✅ Files with fixed issues: ${fixedCount}`);
  console.log(`  ❌ Errors: ${errorCount}`);
  
  if (cleanedCount > 0 || fixedCount > 0) {
    console.log('\n🎉 Cleanup completed! You can now run your build and lint commands again.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { findTSFiles, cleanFile, fixCommonIssues };