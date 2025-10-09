const fs = require('fs');
const path = require('path');

// Common icons that are frequently used
const commonIcons = [
  'Zap', 'Shield', 'Clock', 'TrendingUp', 'Globe', 'Star', 'CheckCircle',
  'ArrowRight', 'Brain', 'Target', 'Settings', 'Eye', 'Lock', 'Database',
  'AlertTriangle', 'BarChart', 'MessageSquare', 'Users', 'Cloud', 'Server',
  'Cpu', 'Monitor', 'Wifi', 'Smartphone', 'Laptop', 'HardDrive', 'Network',
  'RefreshCw', 'Home', 'Menu', 'X', 'Mail', 'Phone', 'Calendar', 'FileText',
  'Image', 'Video', 'Music', 'Headphones', 'Printer', 'Camera', 'Wrench',
  'Cog', 'Activity', 'Mic', 'DollarSign', 'Award', 'Rocket', 'Sparkles'
];

function fixImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all icon usage in the file
    const iconMatches = content.match(/<(\w+)\s+className="[^"]*w-\d+[^"]*h-\d+[^"]*"/g);
    if (!iconMatches) return;
    
    const usedIcons = new Set();
    iconMatches.forEach(match => {
      const iconName = match.match(/<(\w+)\s+/)[1];
      if (commonIcons.includes(iconName)) {
        usedIcons.add(iconName);
      }
    });
    
    if (usedIcons.size === 0) return;
    
    // Check if there's already an import statement
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    
    if (importMatch) {
      // Add missing icons to existing import
      const existingIcons = importMatch[1].split(',').map(i => i.trim());
      const allIcons = [...new Set([...existingIcons, ...usedIcons])].sort();
      const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
      const newContent = content.replace(importMatch[0], newImport);
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed imports in ${filePath}`);
    } else {
      // Add new import statement
      const newImport = `import { ${Array.from(usedIcons).sort().join(', ')} } from 'lucide-react';\n`;
      const newContent = newImport + content;
      fs.writeFileSync(filePath, newContent);
      console.log(`Added imports to ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all .tsx files in the app directory
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      fixImports(filePath);
    }
  });
}

processDirectory('./app');
console.log('Import fixing complete!');