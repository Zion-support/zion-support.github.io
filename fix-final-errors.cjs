#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all TypeScript files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix AppErrorBoundary imports - change from named to default import
    if (content.includes("import { AppErrorBoundary } from '@/components/AppErrorBoundary'")) {
      content = content.replace(
        "import { AppErrorBoundary } from '@/components/AppErrorBoundary'",
        "import AppErrorBoundary from '@/components/AppErrorBoundary'"
      );
      modified = true;
    }
    
    // Fix ErrorBoundary imports - change to AppErrorBoundary default import
    if (content.includes("import { ErrorBoundary } from '@/components/ErrorBoundary'")) {
      content = content.replace(
        "import { ErrorBoundary } from '@/components/ErrorBoundary'",
        "import AppErrorBoundary from '@/components/AppErrorBoundary'"
      );
      modified = true;
    }
    
    // Fix ErrorBoundary usage
    if (content.includes('<ErrorBoundary>')) {
      content = content.replace(/<ErrorBoundary>/g, '<AppErrorBoundary>');
      content = content.replace(/<\/ErrorBoundary>/g, '</AppErrorBoundary>');
      modified = true;
    }
    
    // Remove duplicate imports and clean up unused imports
    const lines = content.split('\n');
    let newLines = [];
    const seenImports = new Set();
    const usedImports = new Set();
    
    // First pass: collect all imports and find used ones
    for (const line of lines) {
      if (line.includes('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          
          // Extract import names
          const match = line.match(/import\s+(?:{[^}]+}|\w+)\s+from/);
          if (match) {
            const importPart = match[0];
            if (importPart.includes('{')) {
              const names = importPart.match(/\{([^}]+)\}/)[1].split(',').map(n => n.trim());
              names.forEach(name => usedImports.add(name));
            } else {
              const name = importPart.match(/import\s+(\w+)/)[1];
              usedImports.add(name);
            }
          }
        }
      }
    }
    
    // Second pass: check which imports are actually used
    const contentWithoutImports = lines.filter(line => !line.includes('import ')).join('\n');
    const actuallyUsed = new Set();
    
    for (const line of lines) {
      if (line.includes('import ')) {
        const match = line.match(/import\s+(?:{([^}]+)}|(\w+))\s+from/);
        if (match) {
          if (match[1]) {
            // Named imports
            const names = match[1].split(',').map(n => n.trim());
            names.forEach(name => {
              if (contentWithoutImports.includes(name)) {
                actuallyUsed.add(name);
              }
            });
          } else if (match[2]) {
            // Default import
            const name = match[2];
            if (contentWithoutImports.includes(name)) {
              actuallyUsed.add(name);
            }
          }
        }
      }
    }
    
    // Third pass: build clean file
    const cleanImports = new Set();
    
    for (const line of lines) {
      if (line.includes('import ')) {
        const importKey = line.trim();
        if (!cleanImports.has(importKey)) {
          // Check if this import is actually used
          const match = line.match(/import\s+(?:{([^}]+)}|(\w+))\s+from/);
          if (match) {
            let shouldInclude = false;
            
            if (match[1]) {
              // Named imports
              const names = match[1].split(',').map(n => n.trim());
              const usedNames = names.filter(name => actuallyUsed.has(name));
              if (usedNames.length > 0) {
                shouldInclude = true;
                // Update the import to only include used names
                const newLine = line.replace(/\{[^}]+\}/, `{${usedNames.join(', ')}}`);
                newLines.push(newLine);
              }
            } else if (match[2]) {
              // Default import
              const name = match[2];
              if (actuallyUsed.has(name)) {
                shouldInclude = true;
                newLines.push(line);
              }
            }
            
            if (shouldInclude) {
              cleanImports.add(importKey);
            }
          } else {
            // Side-effect imports
            newLines.push(line);
            cleanImports.add(importKey);
          }
        }
      } else {
        newLines.push(line);
      }
    }
    
    // Clean up extra whitespace
    const cleanedContent = newLines.join('\n').replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript files
const appDir = path.join(process.cwd(), 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
files.forEach(filePath => {
  if (fixFile(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files!`);