import fs from 'fs';

// Fix specific files with unused imports
const filesToFix = [
  {
    file: '/workspace/app/ai-cloud-infrastructure/page.tsx',
    removeImports: ['Cloud']
  },
  {
    file: '/workspace/app/ai-customer-support-chatbot/page.tsx',
    removeImports: ['Star', 'Database']
  },
  {
    file: '/workspace/app/ai-cybersecurity-monitor-pro/page.tsx',
    removeImports: ['Monitor']
  },
  {
    file: '/workspace/app/ai-cybersecurity-monitor/page.tsx',
    removeImports: ['Monitor']
  },
  {
    file: '/workspace/app/ai-data-analytics-pro/page.tsx',
    removeImports: ['Star']
  },
  {
    file: '/workspace/app/ai-ecommerce-optimizer-pro/page.tsx',
    removeImports: ['Search']
  }
];

function fixFile(filePath, importsToRemove) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const lines = content.split('\n');
    const newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this line imports the variables we want to remove
      if (line.includes('import') && line.includes('from')) {
        let shouldRemoveLine = false;
        let newImportLine = line;

        for (const importToRemove of importsToRemove) {
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
                  return !importsToRemove.includes(importName);
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

console.log('Specific files cleanup completed!');