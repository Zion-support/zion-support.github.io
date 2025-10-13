import fs from 'fs';

// Remaining component files with issues
const filesToFix = [
  {
    file: '/workspace/app/components/EnhancedPerformanceMonitor.tsx',
    removeImports: [],
    fixUnusedVar: { line: 97, varName: 'error' }
  },
  {
    file: '/workspace/app/components/ImprovedImage.tsx',
    removeImports: ['Cloud']
  },
  {
    file: '/workspace/app/components/ImprovedSidebar.tsx',
    removeImports: ['Network', 'Code', 'Mic']
  },
  {
    file: '/workspace/app/components/PerformanceMonitor.tsx',
    removeImports: ['Monitor']
  },
  {
    file: '/workspace/app/components/SEOOptimizer.tsx',
    removeImports: ['Code', 'Cloud']
  },
  {
    file: '/workspace/app/components/StructuredData.tsx',
    removeImports: ['Search']
  }
];

function fixFile(filePath, removeImports, fixUnusedVar = null) {
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
      
      // Fix unused variable
      if (fixUnusedVar && i === fixUnusedVar.line - 1) {
        // Remove the unused variable declaration
        const newLine = line.replace(/\s*const\s+\w+\s*=\s*[^;]+;/, '');
        if (newLine !== line) {
          newLines.push(newLine);
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
filesToFix.forEach(({ file, removeImports, fixUnusedVar }) => {
  fixFile(file, removeImports, fixUnusedVar);
});

console.log('Remaining components cleanup completed!');