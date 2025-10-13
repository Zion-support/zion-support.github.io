import fs from 'fs';

// All remaining files with issues
const filesToFix = [
  {
    file: '/workspace/app/ai-quantum-financial-oracle/page.tsx',
    removeImports: ['ArrowRight', 'Users', 'Award', 'Star', 'Monitor']
  },
  {
    file: '/workspace/app/ai-security-monitor/page.tsx',
    removeImports: ['Monitor']
  },
  {
    file: '/workspace/app/ai-sentiment-analysis-pro/page.tsx',
    removeImports: ['Star', 'Monitor']
  },
  {
    file: '/workspace/app/ai-smart-home-controller/page.tsx',
    removeImports: ['Home']
  },
  {
    file: '/workspace/app/ai-smart-scheduler/page.tsx',
    removeImports: ['Star', 'Calendar']
  },
  {
    file: '/workspace/app/ai-social-media-manager/page.tsx',
    removeImports: [],
    moveUseClient: true
  },
  {
    file: '/workspace/app/ai-space-mission-optimizer/page.tsx',
    removeImports: ['ArrowRight', 'Cpu', 'Clock', 'Users', 'Star', 'PieChart', 'MapPin', 'Monitor']
  },
  {
    file: '/workspace/app/ai-video-editor/page.tsx',
    removeImports: ['Edit'],
    moveUseClient: true
  },
  {
    file: '/workspace/app/ai-voice-cloning-studio/page.tsx',
    removeImports: ['Pause', 'Download', 'Upload', 'Star', 'Shield', 'ArrowRight', 'Clock']
  }
];

function fixFile(filePath, removeImports, moveUseClient = false) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const lines = content.split('\n');
    const newLines = [];

    // First, move "use client" to the top if needed
    if (moveUseClient) {
      const useClientIndex = lines.findIndex(line => line.trim() === '"use client";');
      if (useClientIndex > 0) {
        // Remove from current position
        lines.splice(useClientIndex, 1);
        // Add at the beginning
        newLines.push('"use client";');
        newLines.push('');
        modified = true;
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip if we already processed this line
      if (moveUseClient && line.trim() === '"use client";' && newLines.length > 0) {
        continue;
      }
      
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
filesToFix.forEach(({ file, removeImports, moveUseClient }) => {
  fixFile(file, removeImports, moveUseClient);
});

console.log('Final issues cleanup completed!');