#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  // Fix duplicate imports that weren't caught before
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g;
  
  content = content.replace(importRegex, (match, imports, module) => {
    // Split by comma and clean up
    const items = imports.split(',').map(item => item.trim()).filter(item => item);
    
    // Remove duplicates while preserving order
    const uniqueItems = [...new Set(items)];
    
    return `import { ${uniqueItems.join(', ')} } from '${module}';`;
  });
  
  // Fix malformed object syntax with missing commas
  content = content.replace(/\}\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]/g, (match, icon1, title1, desc1, benefits1, icon2, title2, desc2, benefits2, icon3, title3, desc3, benefits3) => {
    return `}\n    },\n    {\n      icon: ${icon1.trim()},\n      title: '${title1}',\n      description: '${desc1}',\n      benefits: [${benefits1}]\n    },\n    {\n      icon: ${icon2.trim()},\n      title: '${title2}',\n      description: '${desc2}',\n      benefits: [${benefits2}]\n    },\n    {\n      icon: ${icon3.trim()},\n      title: '${title3}',\n      description: '${desc3}',\n      benefits: [${benefits3}]`;
  });
  
  // Fix missing commas between object properties
  content = content.replace(/\}\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]/g, (match, icon1, title1, desc1, benefits1, icon2, title2, desc2, benefits2) => {
    return `}\n    },\n    {\n      icon: ${icon1.trim()},\n      title: '${title1}',\n      description: '${desc1}',\n      benefits: [${benefits1}]\n    },\n    {\n      icon: ${icon2.trim()},\n      title: '${title2}',\n      description: '${desc2}',\n      benefits: [${benefits2}]`;
  });
  
  // Fix missing commas between array items
  content = content.replace(/\}\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]/g, (match, icon1, title1, desc1, benefits1, icon2, title2, desc2, benefits2) => {
    return `}\n    },\n    {\n      icon: ${icon1.trim()},\n      title: '${title1}',\n      description: '${desc1}',\n      benefits: [${benefits1}]\n    },\n    {\n      icon: ${icon2.trim()},\n      title: '${title2}',\n      description: '${desc2}',\n      benefits: [${benefits2}]`;
  });
  
  // Fix duplicate function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, (match, funcName) => {
    return `const ${funcName}: React.FC = () => {`;
  });
  
  // Fix malformed object with TODO comments
  content = content.replace(/\{\s*\n\s*\/\/ TODO: Add content\s*\n\};\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]/g, (match, icon, title, description, benefits) => {
    return `{\n      icon: ${icon.trim()},\n      title: '${title}',\n      description: '${description}',\n      benefits: [${benefits}]`;
  });
  
  // Fix missing closing braces and semicolons
  content = content.replace(/\}\s*\n\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}\s*\n\s*\}/g, (match, funcName) => {
    return `}\n};\n\nexport default ${funcName};`;
  });
  
  // Fix duplicate closing braces
  content = content.replace(/\}\s*\n\s*\}\s*\n\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, (match, funcName) => {
    return `};\n\nexport default ${funcName};`;
  });
  
  return content;
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixRemainingErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/TSX files in src directory
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);