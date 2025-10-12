const fs = require('fs');
const path = require('path');

// Common Lucide React icons used in the project
const commonIcons = [
  'ArrowRight', 'Brain', 'Zap', 'Shield', 'Globe', 'CheckCircle', 'Star',
  'Phone', 'Mail', 'Clock', 'Target', 'BarChart3', 'TrendingUp', 'Settings',
  'Users', 'DollarSign', 'ChevronRight', 'ChevronDown', 'Menu', 'X',
  'Search', 'Filter', 'Download', 'Upload', 'Edit', 'Trash', 'Plus',
  'Minus', 'Eye', 'EyeOff', 'Lock', 'Unlock', 'Home', 'User', 'Users',
  'Calendar', 'Clock', 'MapPin', 'ExternalLink', 'Copy', 'Share',
  'Heart', 'ThumbsUp', 'ThumbsDown', 'MessageCircle', 'Bell', 'Settings',
  'LogOut', 'LogIn', 'UserPlus', 'UserMinus', 'Cog', 'Wrench', 'Tool',
  'Database', 'Server', 'Cloud', 'Wifi', 'Bluetooth', 'Camera', 'Video',
  'Image', 'File', 'Folder', 'Archive', 'Package', 'Truck', 'Car',
  'Plane', 'Train', 'Ship', 'Bike', 'Walk', 'Run', 'Activity', 'PieChart',
  'BarChart', 'LineChart', 'TrendingUp', 'TrendingDown', 'Percent',
  'DollarSign', 'Euro', 'Pound', 'Yen', 'Bitcoin', 'CreditCard',
  'Wallet', 'Receipt', 'Calculator', 'Calendar', 'Clock', 'Timer',
  'Stopwatch', 'AlarmClock', 'Sun', 'Moon', 'Cloud', 'CloudRain',
  'CloudSnow', 'CloudLightning', 'Wind', 'Thermometer', 'Droplet',
  'Flame', 'Snowflake', 'Umbrella', 'Sunrise', 'Sunset', 'Star',
  'Compass', 'Map', 'Navigation', 'Flag', 'Award', 'Trophy', 'Medal',
  'Crown', 'Gem', 'Diamond', 'Gift', 'PartyPopper', 'Cake', 'Coffee',
  'Wine', 'Beer', 'Pizza', 'Hamburger', 'Apple', 'Banana', 'Cherry',
  'Grape', 'Lemon', 'Orange', 'Peach', 'Pear', 'Strawberry', 'Watermelon'
];

function findMissingIcons(content) {
  const missingIcons = [];
  for (const icon of commonIcons) {
    if (content.includes(`<${icon}`) && !content.includes(`import { ${icon}`)) {
      missingIcons.push(icon);
    }
  }
  return missingIcons;
}

function addMissingImports(filePath, missingIcons) {
  if (missingIcons.length === 0) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the last import statement
  const importLines = content.split('\n').filter(line => line.trim().startsWith('import '));
  if (importLines.length === 0) return;
  
  const lastImportLine = importLines[importLines.length - 1];
  const lastImportIndex = content.lastIndexOf(lastImportLine);
  const endOfLastImport = lastImportIndex + lastImportLine.length;
  
  // Check if lucide-react is already imported
  const lucideImport = importLines.find(line => line.includes('lucide-react'));
  
  if (lucideImport) {
    // Add to existing lucide-react import
    const importMatch = lucideImport.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    if (importMatch) {
      const existingIcons = importMatch[1].split(',').map(icon => icon.trim());
      const newIcons = [...new Set([...existingIcons, ...missingIcons])];
      const newImport = `import { ${newIcons.join(', ')} } from 'lucide-react';`;
      content = content.replace(lucideImport, newImport);
    }
  } else {
    // Add new lucide-react import
    const newImport = `import { ${missingIcons.join(', ')} } from 'lucide-react';\n`;
    content = content.slice(0, endOfLastImport) + '\n' + newImport + content.slice(endOfLastImport);
  }
  
  fs.writeFileSync(filePath, content);
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const missingIcons = findMissingIcons(content);
        
        if (missingIcons.length > 0) {
          console.log(`Fixing ${missingIcons.length} missing icons in ${filePath}`);
          addMissingImports(filePath, missingIcons);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Process the app directory
processDirectory('/workspace/app');
console.log('Import fixing completed!');