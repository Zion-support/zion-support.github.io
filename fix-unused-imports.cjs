const fs = require('fs');
const path = require('path');

// Files to fix
const files = [
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-iot-management-pro/page.tsx'
];

// Remove unused imports from each file
files.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove the long import line and replace with individual imports
    const longImportRegex = /import { [^}]+ } from 'lucide-react';/;
    const match = content.match(longImportRegex);
    
    if (match) {
      // Extract only the used icons by looking at the JSX content
      const usedIcons = new Set();
      const iconRegex = /<(\w+Icon?)\s/g;
      let iconMatch;
      while ((iconMatch = iconRegex.exec(content)) !== null) {
        usedIcons.add(iconMatch[1]);
      }
      
      // Create new import statement with only used icons
      const usedIconsArray = Array.from(usedIcons).sort();
      const newImport = `import { ${usedIconsArray.join(', ')} } from 'lucide-react';`;
      
      content = content.replace(longImportRegex, newImport);
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed imports in ${filePath}`);
    }
  }
});

console.log('Import fixes completed');
