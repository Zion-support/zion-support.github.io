const fs = require('fs');
const path = require('path');

// Files that need Zap import
const filesToFix = [
  'app/ai-analytics-dashboard/page.tsx',
  'app/ai-analytics/page.tsx', 
  'app/ai-api-management/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx'
];

// Fix a single file
const fixFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if Zap is used but not imported
  if (content.includes('icon: Zap') && !content.includes('import') || !content.includes('Zap')) {
    // Find the lucide-react import line
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      if (!imports.includes('Zap')) {
        imports.push('Zap');
        const newImport = `import { ${imports.join(', ')} } from 'lucide-react';`;
        content = content.replace(/import\s*{\s*[^}]+?\s*}\s*from\s*['"]lucide-react['"];?/g, newImport);
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
      }
    } else {
      // Add new import
      const newImport = `import { Zap } from 'lucide-react';\n`;
      content = newImport + content;
      fs.writeFileSync(filePath, content);
      console.log(`Added import to: ${filePath}`);
    }
  }
};

// Main execution
filesToFix.forEach(fixFile);
console.log('Zap imports fixed!');