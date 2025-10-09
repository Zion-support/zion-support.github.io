const fs = require('fs');
const path = require('path');

// Files to fix with their unused imports
const filesToFix = [
  {
    file: 'src/ai-edge-computing/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Target', 'Database', 'BarChart', 'Settings', 'Code', 'Cloud', 'Users', 'Lock']
  }
];

function fixFile(filePath, unusedImports) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the import line with lucide-react
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (importMatch) {
      const currentImports = importMatch[1].split(',').map(imp => imp.trim());
      const usedImports = currentImports.filter(imp => !unusedImports.includes(imp));
      
      if (usedImports.length > 0) {
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
      } else {
        // Remove the entire import line if no imports are used
        content = content.replace(importMatch[0], '');
      }
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(({ file, unusedImports }) => {
  fixFile(file, unusedImports);
});

console.log('Final import fixing completed!');