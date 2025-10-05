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
      
      // Check if file has lucide-react individual module imports
      const hasIndividualImports = /import\s+\w+\s+from\s+['"]lucide-react\/\w+['"]/.test(content);
      
      if (hasIndividualImports) {
        console.log(`Fixing individual imports in: ${filePath}`);
        
        // Replace individual imports with named imports from main package
        const newContent = content.replace(
          /import\s+(\w+)\s+from\s+['"]lucide-react\/(\w+)['"]/g,
          (match, componentName, moduleName) => {
            // Convert kebab-case to PascalCase for component name
            const pascalCase = moduleName
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join('');
            return `import { ${pascalCase} as ${componentName} } from 'lucide-react'`;
          }
        );
        
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