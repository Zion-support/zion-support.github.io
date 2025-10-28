#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all micro-saas files
function getAllMicroSaasFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllMicroSaasFiles(fullPath));
    } else if (item.endsWith('.tsx') && fullPath.includes('micro-saas')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix missing imports
function fixMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if ArrowRight is used but not imported
    if (content.includes('ArrowRight') && !content.includes("import { ArrowRight }")) {
      // Find the import section
      const lines = content.split('\n');
      let importIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('import') && lines[i].includes('from')) {
          importIndex = i;
        }
      }
      
      if (importIndex !== -1) {
        // Add ArrowRight import
        const importLine = lines[importIndex];
        if (importLine.includes('lucide-react')) {
          // Add to existing lucide-react import
          lines[importIndex] = importLine.replace(
            /import { ([^}]+) } from 'lucide-react';/,
            (match, imports) => {
              const importList = imports.split(',').map(i => i.trim());
              if (!importList.includes('ArrowRight')) {
                importList.push('ArrowRight');
              }
              return `import { ${importList.join(', ')} } from 'lucide-react';`;
            }
          );
        } else {
          // Add new import
          lines.splice(importIndex + 1, 0, "import { ArrowRight } from 'lucide-react';");
        }
        content = lines.join('\n');
        modified = true;
      }
    }
    
    // Check if Home is used but not imported
    if (content.includes('<Home') && !content.includes("import { Home }")) {
      const lines = content.split('\n');
      let importIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('import') && lines[i].includes('from')) {
          importIndex = i;
        }
      }
      
      if (importIndex !== -1) {
        const importLine = lines[importIndex];
        if (importLine.includes('lucide-react')) {
          lines[importIndex] = importLine.replace(
            /import { ([^}]+) } from 'lucide-react';/,
            (match, imports) => {
              const importList = imports.split(',').map(i => i.trim());
              if (!importList.includes('Home')) {
                importList.push('Home');
              }
              return `import { ${importList.join(', ')} } from 'lucide-react';`;
            }
          );
        } else {
          lines.splice(importIndex + 1, 0, "import { Home } from 'lucide-react';");
        }
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting missing imports fixes...');

const appDir = path.join(__dirname, 'app');
const files = getAllMicroSaasFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixMissingImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);