#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common unused imports that appear frequently
const commonUnusedImports = [
  'Download', 'Share', 'Star', 'Clock', 'Users', 'Award', 'ArrowRight', 'Sparkles',
  'Helmet', 'Eye', 'DollarSign', 'Zap', 'Mail', 'MapPin', 'Shield', 'Globe', 'Target',
  'PieChart', 'Activity', 'AlertCircle', 'CheckCircle', 'Headphones', 'Bot', 'BarChart',
  'AlertTriangle', 'Database', 'Settings', 'TrendingUp', 'Brain', 'Phone', 'Calendar',
  'Cpu', 'MessageSquare', 'Link', 'useState', 'Mic', 'Search', 'Truck'
];

function cleanUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import') && line.includes('{')) {
        // Extract the import statement
        const importMatch = line.match(/import\s+.*?from\s+['"][^'"]+['"];?/);
        if (importMatch) {
          const importStatement = importMatch[0];
          
          // Extract the imports inside curly braces
          const braceMatch = importStatement.match(/\{([^}]+)\}/);
          if (braceMatch) {
            const imports = braceMatch[1].split(',').map(imp => imp.trim());
            const usedImports = [];
            
            // Check which imports are actually used in the file
            for (const imp of imports) {
              const importName = imp.replace(/\s+as\s+\w+/, '').trim();
              
              // Skip if it's a default import or if it's used in the file
              if (!importName.includes('default') && !importName.includes('*')) {
                const isUsed = content.includes(importName) && 
                  !content.match(new RegExp(`import.*${importName}.*from`));
                
                if (isUsed || !commonUnusedImports.includes(importName)) {
                  usedImports.push(imp);
                }
              } else {
                usedImports.push(imp);
              }
            }
            
            // Reconstruct the import line
            if (usedImports.length > 0) {
              const newImportStatement = importStatement.replace(
                /\{[^}]+\}/, 
                `{ ${usedImports.join(', ')} }`
              );
              cleanedLines.push(newImportStatement);
              modified = true;
            } else {
              // Remove the entire import line if no imports are used
              modified = true;
            }
          } else {
            cleanedLines.push(line);
          }
        } else {
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, cleanedLines.join('\n'));
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  ignore: ['src/**/*.d.ts', 'node_modules/**']
});

let cleanedCount = 0;

console.log('Cleaning unused imports...');

files.forEach(file => {
  if (cleanUnusedImports(file)) {
    cleanedCount++;
  }
});

console.log(`\nCleaned ${cleanedCount} files.`);
console.log('Unused imports cleanup completed!');