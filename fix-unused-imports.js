import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with unused imports
const filesToFix = [
  'app/5g-solutions/page.tsx',
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx',
  'app/ai-3d-model-generator/page.tsx',
  'app/ai-audio-processor-improved/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'ArrowRight', 'CheckCircle', 'Star', 'Users', 'Database', 'Cpu', 'Target', 
  'BarChart', 'FileText', 'MessageCircle', 'Heart', 'DollarSign', 'Box', 
  'Monitor', 'LinkIcon', 'Server', 'Package', 'Mic', 'Workflow', 'Eye', 
  'Wifi', 'MessageSquare', 'CheckSquare', 'ShoppingCart', 'Settings', 
  'Calendar', 'TrendingUp', 'Lock'
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports from the import statement
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        // Check if the import is actually used in the file
        const importName = imp.replace(/\s+as\s+\w+/, '').trim();
        return content.includes(importName) && !unusedImports.includes(importName);
      });
      
      if (usedImports.length === 0) {
        return ''; // Remove the entire import line
      }
      
      return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
    });
    
    // Remove unused variables
    content = content.replace(/const\s+benefits\s*=\s*\[[^\]]*\];?\s*\n?/g, '');
    content = content.replace(/const\s+standards\s*=\s*\[[^\]]*\];?\s*\n?/g, '');
    
    // Fix specific issues in accessibility page
    if (filePath.includes('accessibility/page.tsx')) {
      content = content.replace(/benefits\.map\(\(benefit, benefitIndex\) => \{[\s\S]*?\}\)\}/g, '');
      content = content.replace(/standards\.map\(\(standard, index\) => \{[\s\S]*?\}\)\}/g, '');
      content = content.replace(/feature\./g, 'features.');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixUnusedImports(fullPath);
  }
});

console.log('Unused imports fixed!');