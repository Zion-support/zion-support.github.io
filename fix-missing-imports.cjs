const fs = require('fs');
const path = require('path');

// Common Lucide React icons that might be used
const commonIcons = [
  'Shield', 'Zap', 'Clock', 'Award', 'ArrowRight', 'Brain', 'Cloud', 'Code', 
  'BarChart', 'Users', 'Globe', 'Target', 'Settings', 'RefreshCw', 'Eye',
  'Database', 'PieChart', 'LineChart', 'Activity', 'TrendingUp', 'Cpu',
  'MessageSquare', 'Sparkles', 'Star', 'CheckCircle', 'Phone', 'Mail',
  'MapPin', 'ArrowLeft', 'Menu', 'X'
];

// Find all files that use icons but don't import them
function findFilesWithMissingImports(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Check if file uses any of the common icons
        const usedIcons = commonIcons.filter(icon => 
          content.includes(`<${icon}`) || content.includes(`<${icon} `)
        );
        
        if (usedIcons.length > 0) {
          // Check if lucide-react is imported
          if (content.includes("from 'lucide-react'")) {
            // Check which icons are missing from import
            const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
            if (importMatch) {
              const importedIcons = importMatch[1].split(',').map(icon => icon.trim());
              const missingIcons = usedIcons.filter(icon => !importedIcons.includes(icon));
              
              if (missingIcons.length > 0) {
                files.push({ path: fullPath, missing: missingIcons });
              }
            } else {
              files.push({ path: fullPath, missing: usedIcons });
            }
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

function fixMissingImports(filePath, missingIcons) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the lucide-react import
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    
    if (importMatch) {
      // Add missing icons to existing import
      const existingIcons = importMatch[1].split(',').map(icon => icon.trim());
      const allIcons = [...new Set([...existingIcons, ...missingIcons])].sort();
      
      const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
      content = content.replace(importMatch[0], newImport);
    } else {
      // Create new import
      const newImport = `import { ${missingIcons.join(', ')} } from 'lucide-react';\n`;
      
      // Find the first import statement
      const firstImportMatch = content.match(/import .+ from ['"][^'"]+['"];?\n/);
      if (firstImportMatch) {
        const insertIndex = firstImportMatch.index;
        content = content.slice(0, insertIndex) + newImport + content.slice(insertIndex);
      } else {
        // Add at the beginning
        content = newImport + content;
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in ${filePath}: ${missingIcons.join(', ')}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all files
const filesToFix = findFilesWithMissingImports('app');
console.log(`Found ${filesToFix.length} files with missing icon imports`);

filesToFix.forEach(({ path: filePath, missing }) => {
  fixMissingImports(filePath, missing);
});

console.log('Missing import fixes completed!');