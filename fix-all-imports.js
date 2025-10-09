#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Common unused imports patterns
const commonUnusedImports = [
  'ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 
  'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award', 'Brain', 'Zap', 
  'Shield', 'Mail', 'MapPin', 'Phone', 'Calendar', 'Settings', 'Target'
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    let changed = false;
    
    // Fix lucide-react imports
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g;
    const lucideMatches = [...content.matchAll(lucideImportRegex)];
    
    for (const match of lucideMatches) {
      const allImports = match[1].split(',').map(imp => imp.trim());
      
      // Check which imports are actually used
      const usedImports = allImports.filter(imp => {
        // Create a regex to find the import usage
        const usageRegex = new RegExp(`\\b${imp}\\b`, 'g');
        const matches = content.match(usageRegex);
        // Count occurrences, excluding the import statement itself
        return matches && matches.length > 1;
      });
      
      if (usedImports.length !== allImports.length) {
        if (usedImports.length === 0) {
          // Remove the entire import line
          newContent = newContent.replace(match[0], '');
        } else {
          // Replace with only used imports
          const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          newContent = newContent.replace(match[0], newImport);
        }
        changed = true;
      }
    }
    
    // Fix unused component declarations
    const componentRegex = /const\s+(\w+Page)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/;
    const componentMatch = newContent.match(componentRegex);
    
    if (componentMatch && !newContent.includes('export default')) {
      const componentName = componentMatch[1];
      // Add export default at the end
      newContent = newContent.trim() + `\n\nexport default ${componentName};`;
      changed = true;
    }
    
    // Fix unused variable declarations in catch blocks
    newContent = newContent.replace(/catch\s*\(\s*error\s*\)\s*{/g, 'catch (error) {');
    
    // Remove unused imports from other libraries
    const unusedImportRegex = /import\s+{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];\s*\n/g;
    const importMatches = [...newContent.matchAll(unusedImportRegex)];
    
    for (const match of importMatches) {
      const allImports = match[1].split(',').map(imp => imp.trim());
      const usedImports = allImports.filter(imp => {
        const usageRegex = new RegExp(`\\b${imp}\\b`, 'g');
        const matches = newContent.match(usageRegex);
        return matches && matches.length > 1;
      });
      
      if (usedImports.length !== allImports.length) {
        if (usedImports.length === 0) {
          newContent = newContent.replace(match[0], '');
        } else {
          const newImport = `import { ${usedImports.join(', ')} } from '${match[0].match(/from\s*['"]([^'"]+)['"]/)[1]}';\n`;
          newContent = newContent.replace(match[0], newImport);
        }
        changed = true;
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, newContent);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main function
function main() {
  console.log('Fixing unused imports across all files...');
  
  const files = getAllFiles('./src');
  let fixedCount = 0;
  
  console.log(`Processing ${files.length} files...`);
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  console.log('Import fixes completed!');
}

main();