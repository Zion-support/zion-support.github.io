#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function cleanImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove duplicate imports and clean up unused ones
    const lines = content.split('\n');
    const cleanedLines = [];
    const seenImports = new Set();
    const usedImports = new Set();
    
    // First pass: collect used imports
    for (const line of lines) {
      if (line.includes('Layers')) usedImports.add('Layers');
      if (line.includes('Link')) usedImports.add('Link');
      if (line.includes('ArrowRight')) usedImports.add('ArrowRight');
    }
    
    // Second pass: clean up imports
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lucide-react import lines that are unused
      if (line.includes('from \'lucide-react\'')) {
        const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"];?/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedLucideImports = imports.filter(imp => usedImports.has(imp));
          
          if (usedLucideImports.length > 0) {
            cleanedLines.push(`import { ${usedLucideImports.join(', ')} } from 'lucide-react';`);
          }
          // Skip the original line
          continue;
        }
      }
      
      // Skip duplicate Link imports
      if (line.includes('import Link from') && seenImports.has('Link')) {
        continue;
      }
      
      if (line.includes('import Link from')) {
        seenImports.add('Link');
      }
      
      cleanedLines.push(line);
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Cleaned imports: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (cleanImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting import cleanup...');
const fixedCount = findAndFixFiles('./app');
console.log(`Cleaned ${fixedCount} files with import issues.`);