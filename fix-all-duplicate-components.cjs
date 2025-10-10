#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix duplicate component definitions
function fixDuplicateComponents(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has duplicate component definitions
    const componentMatches = content.match(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g);
    if (componentMatches && componentMatches.length > 1) {
      // Find the last component definition
      const lastComponentMatch = content.match(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\};\s*$/);
      if (lastComponentMatch) {
        const componentName = lastComponentMatch[1];
        
        // Remove all previous component definitions and keep only the last one
        const lines = content.split('\n');
        const filteredLines = [];
        let inComponent = false;
        let componentStart = -1;
        let componentEnd = -1;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check if this is a component definition
          if (line.match(/const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/)) {
            if (inComponent) {
              // We found another component definition, skip the previous one
              inComponent = false;
            }
            inComponent = true;
            componentStart = i;
          } else if (inComponent && line.trim() === '};') {
            componentEnd = i;
            inComponent = false;
          }
        }
        
        if (componentStart !== -1 && componentEnd !== -1) {
          // Keep only the last component definition
          const beforeComponent = lines.slice(0, componentStart);
          const componentLines = lines.slice(componentStart, componentEnd + 1);
          const afterComponent = lines.slice(componentEnd + 1);
          
          // Remove any duplicate component definitions before the last one
          const cleanBefore = beforeComponent.filter(line => 
            !line.match(/const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/)
          );
          
          content = [...cleanBefore, ...componentLines, ...afterComponent].join('\n');
          modified = true;
        }
      }
    }
    
    // Also fix any extra closing braces after export statements
    content = content.replace(/export\s+default\s+\w+;\s*}/g, (match) => {
      return match.replace(/\s*}$/, '');
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files that need fixing
function findFilesToFix(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const componentMatches = content.match(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g);
          if (componentMatches && componentMatches.length > 1) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('Starting duplicate component fix...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const filesToFix = findFilesToFix(srcDir);
  
  console.log(`Found ${filesToFix.length} files with duplicate components`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of filesToFix) {
    if (fixDuplicateComponents(filePath)) {
      fixedCount++;
      console.log(`Fixed: ${filePath}`);
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nFix complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixDuplicateComponents, findFilesToFix };