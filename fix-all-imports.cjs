const fs = require('fs');
const path = require('path');

// Common lucide-react icons that might be missing
const commonIcons = [
  'CheckCircle', 'Star', 'Zap', 'Shield', 'Clock', 'Users', 'Globe', 'Brain',
  'Cpu', 'Target', 'BarChart', 'MessageSquare', 'Eye', 'Sparkles', 'Settings',
  'RefreshCw', 'Database', 'PieChart', 'LineChart', 'Activity', 'AlertTriangle',
  'Lock', 'ArrowRight', 'Phone', 'Mail', 'MapPin', 'Briefcase', 'Home',
  'ExternalLink', 'ChevronRight', 'ChevronDown', 'Menu', 'X', 'Search'
];

// Find all files
const findFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
};

const files = findFiles('./app');

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check for missing icons
    const missingIcons = [];
    
    commonIcons.forEach(icon => {
      if (content.includes(`<${icon}`) || content.includes(`{${icon}`) || content.includes(`${icon} className`)) {
        // Check if it's already imported
        const hasImport = content.includes(`import {`) && content.includes(`${icon}`) && content.includes(`from 'lucide-react'`);
        if (!hasImport) {
          missingIcons.push(icon);
        }
      }
    });
    
    // Check for Link import
    if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
      missingIcons.push('Link');
    }
    
    if (missingIcons.length > 0) {
      console.log(`Fixing ${filePath} - missing: ${missingIcons.join(', ')}`);
      
      const lines = content.split('\n');
      let firstImportIndex = -1;
      
      // Find first import
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          firstImportIndex = i;
          break;
        }
      }
      
      if (firstImportIndex !== -1) {
        // Add Link import if needed
        if (missingIcons.includes('Link')) {
          lines.splice(firstImportIndex, 0, "import Link from 'next/link';");
          firstImportIndex++;
        }
        
        // Add lucide-react imports
        const lucideIcons = missingIcons.filter(icon => icon !== 'Link');
        if (lucideIcons.length > 0) {
          const existingLucideImport = lines.findIndex(line => line.includes("from 'lucide-react'"));
          
          if (existingLucideImport !== -1) {
            // Update existing import
            const importLine = lines[existingLucideImport];
            const currentImports = importLine.match(/\{([^}]+)\}/)?.[1] || '';
            const currentIcons = currentImports.split(',').map(s => s.trim()).filter(Boolean);
            const newIcons = [...new Set([...currentIcons, ...lucideIcons])];
            lines[existingLucideImport] = `import { ${newIcons.join(', ')} } from 'lucide-react';`;
          } else {
            // Add new import
            lines.splice(firstImportIndex, 0, `import { ${lucideIcons.join(', ')} } from 'lucide-react';`);
          }
        }
        
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing all import issues');