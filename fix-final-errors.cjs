#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix specific syntax errors
function fixFinalErrors(content) {
  // Fix duplicate imports
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g;
  
  content = content.replace(importRegex, (match, imports, module) => {
    const items = imports.split(',').map(item => item.trim()).filter(item => item);
    const uniqueItems = [...new Set(items)];
    return `import { ${uniqueItems.join(', ')} } from '${module}';`;
  });
  
  // Fix missing semicolons in array items
  content = content.replace(/benefits:\s*\[([^\]]+)\];/g, (match, benefits) => {
    return `benefits: [${benefits}]`;
  });
  
  // Fix malformed object arrays - missing commas between objects
  content = content.replace(/\}\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]/g, (match, icon, title, description, benefits) => {
    return `},\n    {\n      icon: ${icon.trim()},\n      title: '${title}',\n      description: '${description}',\n      benefits: [${benefits}]`;
  });
  
  // Fix missing closing braces in arrays
  content = content.replace(/benefits:\s*\[([^\]]+)\]\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]/g, (match, benefits1, icon, title, description, benefits2) => {
    return `benefits: [${benefits1}]\n    },\n    {\n      icon: ${icon.trim()},\n      title: '${title}',\n      description: '${description}',\n      benefits: [${benefits2}]`;
  });
  
  // Fix duplicate function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, (match, funcName) => {
    return `const ${funcName}: React.FC = () => {`;
  });
  
  // Fix malformed closing braces
  content = content.replace(/\}\s*\n\s*\}\s*\n\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, (match, funcName) => {
    return `};\n\nexport default ${funcName};`;
  });
  
  // Fix missing closing braces in function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}\s*\n\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, (match, funcName1, funcName2) => {
    return `const ${funcName1}: React.FC = () => {`;
  });
  
  return content;
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixFinalErrors(content);
    
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

// Get files with errors
const errorFiles = [
  'src/ai-automation/page.tsx',
  'src/ai-computer-vision/page.tsx',
  'src/ai-content-studio/page.tsx',
  'src/ai-customer-insights/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-customer-support/page.tsx',
  'src/ai-design-assistant/page.tsx',
  'src/ai-document-processor/page.tsx',
  'src/ai-ecommerce-optimizer/page.tsx',
  'src/ai-edge-computing/page.tsx',
  'src/ai-email-assistant/page.tsx',
  'src/ai-email-marketing/page.tsx'
];

console.log(`Fixing ${errorFiles.length} files...`);

let fixedCount = 0;
errorFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} files.`);