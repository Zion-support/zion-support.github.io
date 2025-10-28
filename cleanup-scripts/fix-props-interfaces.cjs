#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all component files
function getAllComponentFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllComponentFiles(fullPath));
    } else if (item.endsWith('.tsx') && fullPath.includes('components')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix props interface issues
function fixPropsInterfaces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix props interface references
    if (content.includes('Props') && content.includes('is not defined')) {
      // Find all interface definitions with _ prefix
      const interfaceMatches = content.match(/interface _(\w+Props)/g);
      if (interfaceMatches) {
        for (const match of interfaceMatches) {
          const interfaceName = match.replace('interface _', '');
          const originalName = interfaceName.replace('Props', '');
          
          // Replace all references to the original name with the prefixed name
          const regex = new RegExp(`\\b${originalName}Props\\b`, 'g');
          if (content.match(regex)) {
            content = content.replace(regex, `_${originalName}Props`);
            modified = true;
          }
        }
      }
    }
    
    // Fix component references that are not defined
    if (content.includes('is not defined')) {
      const componentName = path.basename(filePath, '.tsx');
      
      // Check if component is referenced but not defined
      if (content.includes(`'${componentName}' is not defined`)) {
        // This means the component is being used but not properly defined
        // Skip for now as it might be a complex case
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed props interfaces: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting props interface fixes...');

const appDir = path.join(__dirname, 'app');
const files = getAllComponentFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixPropsInterfaces(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);