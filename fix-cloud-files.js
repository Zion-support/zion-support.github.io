import fs from 'fs';

// Cloud-related files with issues
const filesToFix = [
  {
    file: '/workspace/app/cloud-cost-optimization/page.tsx',
    removeImports: ['Cloud']
  },
  {
    file: '/workspace/app/cloud-infrastructure-manager/page.tsx',
    removeImports: ['Cloud']
  },
  {
    file: '/workspace/app/cloud-infrastructure/page.tsx',
    removeImports: ['Network', 'Code', 'Monitor']
  },
  {
    file: '/workspace/app/cloud-migration-advanced/page.tsx',
    removeImports: ['Cloud']
  },
  {
    file: '/workspace/app/cloud-migration-services/page.tsx',
    removeImports: ['Cloud']
  },
  {
    file: '/workspace/app/cloud-migration/page.tsx',
    removeImports: ['Cloud']
  },
  {
    file: '/workspace/app/cloud-native-development/page.tsx',
    removeImports: ['Cloud']
  },
  {
    file: '/workspace/app/cloud-native-security/page.tsx',
    removeImports: ['Cloud']
  },
  {
    file: '/workspace/app/cloud-security/page.tsx',
    removeImports: ['Cloud']
  }
];

function fixFile(filePath, removeImports) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const lines = content.split('\n');
    const newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this line imports the variables we want to remove
      if (line.includes('import') && line.includes('from') && removeImports.length > 0) {
        let shouldRemoveLine = false;
        let newImportLine = line;

        for (const importToRemove of removeImports) {
          if (line.includes(importToRemove)) {
            // Check if this is a single import
            if (line.includes(`{ ${importToRemove} }`) || line.includes(`{${importToRemove}}`)) {
              shouldRemoveLine = true;
              break;
            } else {
              // Remove from multi-import
              const importMatch = line.match(/import\s*\{([^}]+)\}\s*from/);
              if (importMatch) {
                const imports = importMatch[1].split(',').map(imp => imp.trim());
                const filteredImports = imports.filter(imp => {
                  const importName = imp.replace(/\s+as\s+\w+/, '').trim();
                  return !removeImports.includes(importName);
                });
                
                if (filteredImports.length === 0) {
                  shouldRemoveLine = true;
                  break;
                } else if (filteredImports.length !== imports.length) {
                  newImportLine = line.replace(/\{[^}]+\}/, `{ ${filteredImports.join(', ')} }`);
                  modified = true;
                }
              }
            }
          }
        }

        if (shouldRemoveLine) {
          modified = true;
          continue;
        } else if (newImportLine !== line) {
          newLines.push(newImportLine);
          modified = true;
          continue;
        }
      }
      
      newLines.push(line);
    }

    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(({ file, removeImports }) => {
  fixFile(file, removeImports);
});

console.log('Cloud files cleanup completed!');