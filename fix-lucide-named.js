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
      
      // Check if file has lucide-react default imports
      const hasDefaultImports = /import\s+\w+\s+from\s+['"]lucide-react['"]/.test(content);
      
      if (hasDefaultImports) {
        console.log(`Fixing lucide default imports in: ${filePath}`);
        
        // Extract all default imports from lucide-react
        const importMatches = content.match(/import\s+(\w+)\s+from\s+['"]lucide-react['"]/g);
        
        if (importMatches) {
          const imports = importMatches.map(match => {
            const componentMatch = match.match(/import\s+(\w+)\s+from/);
            return componentMatch ? componentMatch[1] : null;
          }).filter(Boolean);
          
          // Remove duplicates
          const uniqueImports = [...new Set(imports)];
          
          // Convert to named imports
          const namedImport = `import { ${uniqueImports.join(', ')} } from 'lucide-react'`;
          
          // Replace all default imports with a single named import
          let newContent = content.replace(/import\s+\w+\s+from\s+['"]lucide-react['"];?\s*/g, '');
          
          // Add the named import at the top
          const otherImports = newContent.match(/import\s+[^;]+from\s+['"][^'"]+['"];?\s*/g);
          if (otherImports && otherImports.length > 0) {
            const lastImport = otherImports[otherImports.length - 1];
            newContent = newContent.replace(lastImport, lastImport + '\n' + namedImport + ';\n');
          } else {
            newContent = namedImport + ';\n' + newContent;
          }
          
          fs.writeFileSync(filePath, newContent, 'utf8');
          fixedCount++;
        }
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

fixLucideImports().catch(console.error);