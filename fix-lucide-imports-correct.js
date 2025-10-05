import fs from 'fs';
import { glob } from 'glob';

async function fixLucideImports() {
  // Find all TypeScript/JavaScript files that import from lucide-react
  const files = await glob('**/*.{ts,tsx,js,jsx}', {
    ignore: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'backup-problematic-files/**',
      'corrupted-files-backup/**',
      'components.disabled/**',
      'components-disabled/**',
      'backup/**',
      'automation/**',
      'factories/**',
      '*.backup.*',
      '*.disabled.*',
      '*.broken.*',
      '*.corrupted.*'
    ]
  });

  let fixedCount = 0;

  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has lucide-react imports (both named and individual)
      const hasLucideImports = /import.*from\s*['"]lucide-react['"]/.test(content);
      
      if (hasLucideImports) {
        console.log(`Fixing lucide imports in: ${filePath}`);
        
        // Remove all lucide-react imports
        let newContent = content.replace(/import\s+[^;]+from\s+['"]lucide-react['"];?\s*/g, '');
        
        // Remove duplicate imports and clean up
        newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        // Add a single named import at the top
        const importMatch = content.match(/import\s*\{\s*([^}]*)\s*\}\s*from\s*['"]lucide-react['"]/);
        if (importMatch) {
          const imports = importMatch[1]
            .split(',')
            .map(imp => imp.trim())
            .filter(imp => imp.length > 0);
          
          // Remove duplicates
          const uniqueImports = [...new Set(imports)];
          
          // Add the import at the top after other imports
          const importStatement = `import { ${uniqueImports.join(', ')} } from 'lucide-react';\n`;
          
          // Find the last import statement and add after it
          const lastImportMatch = newContent.match(/(import\s+[^;]+from\s+['"][^'"]+['"];?\s*)+/g);
          if (lastImportMatch) {
            const lastImport = lastImportMatch[lastImportMatch.length - 1];
            newContent = newContent.replace(lastImport, lastImport + '\n' + importStatement);
          } else {
            newContent = importStatement + newContent;
          }
        }
        
        fs.writeFileSync(filePath, newContent, 'utf8');
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

fixLucideImports().catch(console.error);