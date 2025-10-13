const fs = require('fs');
const path = require('path');

// List of remaining files with unused imports
const filesToFix = [
  'app/ai-services/page.tsx',
  'app/ai-voice-assistant-pro/page.tsx',
  'app/ar-vr-development/page.tsx'
];

// Unused imports to remove
const unusedImports = [
  'Brain', 'Cloud', 'Zap', 'Volume2', 'Shield', 'Users', 'Target'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused imports from lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["'];?/g;
    
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImp);
      });
      
      if (usedImports.length === 0) {
        return '';
      }
      
      return `import { ${usedImports.join(', ')} } from "lucide-react";`;
    });
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Done fixing remaining unused imports!');
