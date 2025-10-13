const fs = require('fs');

// Fix specific files with known unused imports
const fixes = [
  {
    file: '/workspace/app/ai-voice-cloning-studio/page.tsx',
    remove: ['Pause', 'Download', 'Upload', 'Star', 'Shield', 'ArrowRight', 'Clock']
  },
  {
    file: '/workspace/app/micro-saas-services/page.tsx', 
    remove: ['Shield', 'Cloud', 'Calendar', 'Code']
  },
  {
    file: '/workspace/app/quantum-computing-solutions/page.tsx',
    remove: ['ArrowRight', 'Clock', 'Users', 'Award', 'Star', 'PieChart', 'Database']
  },
  {
    file: '/workspace/app/quantum-data-encryption-vault/page.tsx',
    remove: ['Users']
  }
];

function fixFile(filePath, removeList) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the import line
    const importMatch = content.match(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      const usedImports = imports.filter(imp => !removeList.includes(imp));
      
      if (usedImports.length > 0) {
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
      } else {
        // Remove the entire import line
        content = content.replace(importMatch[0], '');
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Apply fixes
fixes.forEach(({ file, remove }) => {
  fixFile(file, remove);
});

console.log('Final import fixes completed');