const fs = require('fs');
const path = require('path');

// Function to get actually used imports from a file
function getUsedImports(content) {
  const usedImports = new Set();
  
  // Common patterns for icon usage
  const patterns = [
    /icon:\s*(\w+)/g,  // icon: IconName
    /<(\w+)\s+className/g,  // <IconName className
    /<(\w+)\s+[^>]*>/g,  // <IconName ...>
    /(\w+)\s+className/g  // IconName className
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      usedImports.add(match[1]);
    }
  });
  
  return Array.from(usedImports);
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Get used imports
    const usedImports = getUsedImports(content);
    
    // Fix lucide-react imports
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const currentImports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const filteredImports = currentImports.filter(imp => usedImports.includes(imp));
      
      if (filteredImports.length !== currentImports.length) {
        const newImportLine = `import { ${filteredImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(lucideImportMatch[0], newImportLine);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of remaining files to fix
const files = [
  'src/ai-automation/page.tsx',
  'src/ai-computer-vision/page.tsx',
  'src/ai-content-studio/page.tsx',
  'src/ai-customer-insights/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-design-assistant/page.tsx',
  'src/ai-document-processor/page.tsx',
  'src/ai-ecommerce-optimizer/page.tsx',
  'src/ai-edge-computing/page.tsx'
];

files.forEach(fixFile);
console.log('Done fixing remaining imports');