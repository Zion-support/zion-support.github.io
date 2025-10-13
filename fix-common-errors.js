import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
#!/usr/bin/env node


// Function to fix common import and syntax errors
function fixCommonErrors(content, filePath) {
  let fixed = content;
  
  // Fix duplicate imports
  const lines = fixed.split('\n');
  const importLines = [];
  const otherLines = [];
  const seenImports = new Set();
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (!seenImports.has(importKey)) {
        importLines.push(line);
        seenImports.add(importKey);
      }
    } else {
      otherLines.push(line);
    }
  }
  
  fixed = [...importLines, ...otherLines].join('\n');
  
  // Fix 'Right' import from lucide-react (should be 'ChevronRight')
  fixed = fixed.replace(/import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"]/g, (match, imports) => {
    const importList = imports.split(',').map(imp => imp.trim());
    const fixedImports = importList.map(imp => {
      if (imp === 'Right') return 'ChevronRight';
      return imp;
    });
    return `import { ${fixedImports.join(', ')} } from 'lucide-react'`;
  });
  
  // Fix duplicate object properties
  fixed = fixed.replace(/(\w+):\s*[^,}]+,\s*\1:/g, '$1:');
  
  // Fix duplicate JSX attributes
  fixed = fixed.replace(/(\w+)=[^>]+\s+\1=/g, '$1=');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+\(\s*\)\s*=>/g, 'const useAnalytics = () =>');
  fixed = fixed.replace(/const\s+:\s*React\.FC\s*=\s*\(\)\s*=>/g, 'const LinkPage: React.FC = () =>');
  
  // Fix missing export names
  fixed = fixed.replace(/export\s+default\s+;/g, 'export default LinkPage;');
  
  // Fix React.Node import (should be ReactNode)
  fixed = fixed.replace(/import\s*{\s*([^}]*)\s*}\s*from\s*['"]react['"]/g, (match, imports) => {
    const importList = imports.split(',').map(imp => imp.trim());
    const fixedImports = importList.map(imp => {
      if (imp === 'Node') return 'ReactNode';
      return imp;
    });
    return `import { ${fixedImports.join(', ')} } from 'react'`;
  });
  
  // Fix gtag type issues
  if (fixed.includes('(window as any).gtag')) {
    fixed = fixed.replace(/window\.gtag/g, '(window as any).gtag');
  }
  
  // Fix missing structuredData variable
  if (fixed.includes('structuredData') && !fixed.includes('const structuredData')) {
    fixed = fixed.replace(/structuredData/g, 'defaultStructuredData');
  }
  
  // Fix vite config issues
  if (filePath.includes('vite.config.ts')) {
    fixed = fixed.replace(/assetInfo\.name/g, 'assetInfo.name || ""');
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixCommonErrors(content, filePath);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting common error fixes...');

const sourceFiles = findSourceFiles('.');
console.log(`Found ${sourceFiles.length} source files`);

let processedCount = 0;
let errorCount = 0;

for (const file of sourceFiles) {
  if (processFile(file)) {
    processedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nFix complete:`);
console.log(`- Files processed: ${processedCount}`);
console.log(`- Errors: ${errorCount}`);

console.log('Common error fixes completed!');