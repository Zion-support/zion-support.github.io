import fs from 'fs';

// Files to fix
const filesToFix = [
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-quantum-computing/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-voice-assistant-pro/page.tsx',
  'app/ar-vr-development/page.tsx'
];

function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Get all imports from lucide-react
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (!importMatch) return;

    const imports = importMatch[1].split(',').map(imp => imp.trim());
    
    // Find which imports are actually used in the file
    const usedImports = imports.filter(imp => {
      const iconName = imp.replace(/\s+as\s+\w+/, '').trim();
      return content.includes(`<${iconName}`) || content.includes(`${iconName}.`) || content.includes(`${iconName} `);
    });

    // If we have unused imports, replace the import statement
    if (usedImports.length !== imports.length) {
      const newImport = usedImports.length > 0 
        ? `import { ${usedImports.join(', ')} } from 'lucide-react';`
        : '';
      
      content = content.replace(importMatch[0], newImport);
      modified = true;
    }

    // Remove unused variables
    const unusedVars = ['benefits'];
    unusedVars.forEach(varName => {
      const regex = new RegExp(`\\s*const\\s+${varName}\\s*=.*?;`, 'gs');
      if (content.includes(`const ${varName}`)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(removeUnusedImports);
console.log('Unused imports removed!');