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
      
      // Check if file has lucide-react named imports
      const hasNamedImports = /import\s*\{\s*[^}]*\s*\}\s*from\s*['"]lucide-react['"]/.test(content);
      
      if (hasNamedImports) {
        console.log(`Fixing lucide imports in: ${filePath}`);
        
        // Extract all named imports from lucide-react
        const importMatch = content.match(/import\s*\{\s*([^}]*)\s*\}\s*from\s*['"]lucide-react['"]/);
        
        if (importMatch) {
          const imports = importMatch[1]
            .split(',')
            .map(imp => imp.trim())
            .filter(imp => imp.length > 0);
          
          // Remove duplicates
          const uniqueImports = [...new Set(imports)];
          
          // Convert to default imports
          const defaultImports = uniqueImports.map(imp => `import ${imp} from 'lucide-react'`).join('\n');
          
          // Replace the named import with default imports
          const newContent = content.replace(
            /import\s*\{\s*[^}]*\s*\}\s*from\s*['"]lucide-react['"]/g,
            defaultImports
          );
          
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