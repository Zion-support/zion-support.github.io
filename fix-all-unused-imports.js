import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common unused imports to remove
const unusedImports = [
  'ArrowRight', 'CheckCircle', 'Star', 'Users', 'Database', 'Cpu', 'Target', 
  'BarChart', 'FileText', 'MessageCircle', 'Heart', 'DollarSign', 'Box', 
  'Monitor', 'LinkIcon', 'Server', 'Package', 'Mic', 'Workflow', 'Eye', 
  'Wifi', 'MessageSquare', 'CheckSquare', 'ShoppingCart', 'Settings', 
  'Calendar', 'TrendingUp', 'Lock', 'fireEvent'
];

async function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports from lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const importName = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(importName) && content.includes(importName);
      });
      
      if (usedImports.length === 0) {
        modified = true;
        return ''; // Remove the entire import line
      }
      
      if (usedImports.length !== importList.length) {
        modified = true;
        return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
      }
      
      return match;
    });
    
    // Remove unused variables
    content = content.replace(/const\s+benefits\s*=\s*\[[^\]]*\];?\s*\n?/g, '');
    content = content.replace(/const\s+standards\s*=\s*\[[^\]]*\];?\s*\n?/g, '');
    
    // Fix specific issues in accessibility page
    if (filePath.includes('accessibility/page.tsx')) {
      // Remove broken map functions
      content = content.replace(/benefits\.map\(\(benefit, benefitIndex\) => \{[\s\S]*?\}\)\}/g, '');
      content = content.replace(/standards\.map\(\(standard, index\) => \{[\s\S]*?\}\)\}/g, '');
      content = content.replace(/feature\./g, 'features.');
      
      // Add missing imports
      if (content.includes('CheckCircle') && !content.includes("import { CheckCircle }")) {
        content = content.replace(
          /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/,
          (match, imports) => {
            const importList = imports.split(',').map(imp => imp.trim());
            if (!importList.includes('CheckCircle')) {
              importList.push('CheckCircle');
            }
            return `import { ${importList.join(', ')} } from 'lucide-react';`;
          }
        );
      }
    }
    
    // Remove unused imports from testing library
    content = content.replace(/,\s*fireEvent\s*/g, '');
    content = content.replace(/fireEvent,\s*/g, '');
    
    // Remove unused variables in test files
    content = content.replace(/const\s+mockSEOData\s*=\s*\{[^}]*\};?\s*\n?/g, '');
    content = content.replace(/enableRealTimeMonitoring\s*,\s*/g, '');
    content = content.replace(/,\s*enableRealTimeMonitoring/g, '');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

async function main() {
  try {
    // Find all TypeScript/TSX files in the app directory
    const files = await glob('app/**/*.{ts,tsx}', { cwd: __dirname });
    
    // Also include test files
    const testFiles = await glob('__tests__/**/*.{ts,tsx}', { cwd: __dirname });
    
    const allFiles = [...files, ...testFiles];
    
    console.log(`Found ${allFiles.length} files to process`);
    
    // Fix all files
    for (const file of allFiles) {
      const fullPath = path.join(__dirname, file);
      if (fs.existsSync(fullPath)) {
        await fixUnusedImports(fullPath);
      }
    }
    
    console.log('All unused imports fixed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();