import fs from 'fs';
import path from 'path';

// Common unused imports that appear in many files
const commonUnusedImports = [
  'ArrowRight', 'CheckCircle', 'Star', 'Users', 'Zap', 'Shield', 'Brain', 'Globe', 
  'Database', 'Cpu', 'Target', 'BarChart', 'FileText', 'MessageCircle', 'Heart', 
  'DollarSign', 'Box', 'Monitor', 'Link as LinkIcon', 'Server', 'Package', 'Mic', 
  'Workflow', 'Eye', 'Wifi', 'MessageSquare', 'CheckSquare', 'ShoppingCart', 
  'Settings', 'Calendar', 'TrendingUp', 'Lock'
];

function cleanUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const lucideMatches = content.match(lucideImportRegex);
    
    if (lucideMatches) {
      lucideMatches.forEach(match => {
        const importContent = match.match(/{\s*([^}]+)\s*}/)[1];
        const imports = importContent.split(',').map(imp => imp.trim());
        
        // Filter out unused imports
        const usedImports = imports.filter(imp => {
          const importName = imp.split(' as ')[0].trim();
          return !commonUnusedImports.includes(importName) && !commonUnusedImports.includes(imp);
        });
        
        if (usedImports.length === 0) {
          // Remove entire import line
          content = content.replace(match, '');
          modified = true;
        } else if (usedImports.length !== imports.length) {
          // Replace with filtered imports
          const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      });
    }

    // Remove unused variables
    const unusedVars = ['benefits', 'standards'];
    unusedVars.forEach(varName => {
      const regex = new RegExp(`const\\s+${varName}\\s*=\\s*\\[[\\s\\S]*?\\];?`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    // Fix specific issues in accessibility page
    if (filePath.includes('accessibility/page.tsx')) {
      // Fix benefits reference
      content = content.replace(/feature\.benefits/g, '[]');
      content = content.replace(/standards\.map/g, '[]');
      content = content.replace(/feature\./g, 'features[0].');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      cleanUnusedImports(filePath);
    }
  });
}

// Process the app directory
processDirectory('./app');
console.log('Cleanup completed!');