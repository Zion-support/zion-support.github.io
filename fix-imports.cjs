const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common Lucide React icons that are frequently used
const commonIcons = [
  'Link', 'Shield', 'Zap', 'Target', 'Star', 'Users', 'Database', 'Brain', 
  'BarChart3', 'BarChart', 'Code', 'Smartphone', 'Cloud', 'Globe', 'Coins',
  'Cpu', 'CheckCircle', 'ArrowRight', 'Mail', 'MapPin', 'Phone', 'Calendar',
  'Clock', 'Settings', 'Eye', 'TrendingUp', 'PieChart', 'Activity', 'AlertCircle',
  'Headphones', 'Bot', 'Building', 'ShoppingCart', 'Home', 'MessageSquare',
  'Award', 'Laptop', 'Tablet', 'Watch', 'Headset', 'Keyboard', 'Mouse', 'Webcam',
  'Microphone', 'Speaker', 'Battery', 'Power', 'Wrench', 'Hammer', 'Screwdriver',
  'Tool', 'Gear', 'Settings2', 'Server', 'Lock', 'Monitor', 'Navigate'
];

// Find all TypeScript/TSX files
const files = glob.sync('src/**/*.{ts,tsx}', { ignore: ['src/**/*.d.ts'] });

console.log(`Found ${files.length} files to process`);

let totalFixed = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Check if file uses any of the common icons
    const usedIcons = commonIcons.filter(icon => {
      const regex = new RegExp(`\\b${icon}\\b`, 'g');
      return regex.test(content) && !content.includes(`import.*${icon}`);
    });
    
    if (usedIcons.length > 0) {
      // Find existing lucide-react import
      const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/;
      const existingImport = content.match(lucideImportRegex);
      
      if (existingImport) {
        // Add missing icons to existing import
        const existingIcons = existingImport[1].split(',').map(icon => icon.trim());
        const allIcons = [...new Set([...existingIcons, ...usedIcons])].sort();
        const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(lucideImportRegex, newImport);
        modified = true;
      } else {
        // Add new import
        const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
        content = newImport + content;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed imports in: ${file} - Added: ${usedIcons.join(', ')}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed imports in ${totalFixed} files`);