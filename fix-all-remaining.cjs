#!/usr/bin/env node

const fs = require('fs');

const filesToFix = [
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

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Fix duplicate imports
  content = content.replace(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports, module) => {
    const items = imports.split(',').map(item => item.trim()).filter(item => item);
    const uniqueItems = [...new Set(items)];
    return `import { ${uniqueItems.join(', ')} } from '${module}';`;
  });
  
  // Fix missing semicolons in array items
  content = content.replace(/benefits:\s*\[([^\]]+)\];/g, (match, benefits) => {
    return `benefits: [${benefits}]`;
  });
  
  // Fix malformed object arrays
  content = content.replace(/\}\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\]/g, (match, icon, title, description, benefits) => {
    return `},\n    {\n      icon: ${icon.trim()},\n      title: '${title}',\n      description: '${description}',\n      benefits: [${benefits}]`;
  });
  
  // Fix missing closing braces
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
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  
  return false;
}

let fixedCount = 0;
filesToFix.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);