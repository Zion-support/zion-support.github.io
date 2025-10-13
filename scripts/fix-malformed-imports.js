import fs from 'fs';
import path from 'path';

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix malformed import statements
function fixMalformedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find all import statements from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const matches = [...content.matchAll(lucideImportRegex)];
    
    for (const match of matches) {
      const importLine = match[0];
      const imports = match[1];
      
      // Check if the import line is malformed (contains syntax errors)
      if (imports.includes('as  ') || imports.includes(' as  ') || 
          imports.includes('Calendar as Calendar') || imports.includes('Star as  ')) {
        
        // Extract only the basic icons that are actually used
        const basicIcons = [
          'ArrowRight', 'Mail', 'Phone', 'MapPin', 'Star', 'CheckCircle', 'Zap', 'Shield',
          'Globe', 'Monitor', 'BarChart3', 'TrendingUp', 'Target', 'MessageSquare', 'Award',
          'FileText', 'Send', 'Receipt', 'Calculator', 'CreditCard', 'DollarSign', 'Clock',
          'Brain', 'Cloud', 'Users', 'Settings', 'Sparkles', 'Lock', 'Calendar', 'Search',
          'Filter', 'Download', 'Upload', 'Share', 'Bell', 'Heart', 'ThumbsUp', 'Wifi',
          'Battery', 'Camera', 'Headphones', 'Mic', 'Video', 'Music', 'BookOpen', 'Lightbulb',
          'Puzzle', 'Gamepad2', 'ShoppingCart', 'Wallet', 'Banknote', 'Coins', 'Gift', 'Tag',
          'Percent', 'PieChart', 'LineChart', 'Activity', 'Layers', 'Grid', 'List', 'Map',
          'Compass', 'Navigation', 'Globe2', 'WifiOff', 'Signal', 'Bluetooth', 'Usb', 'HardDrive',
          'MemoryStick', 'Printer', 'Scanner', 'Fax', 'Voicemail', 'Headset', 'Speaker', 'Volume2',
          'VolumeX', 'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw',
          'Shuffle', 'Repeat', 'Repeat1', 'Shuffle2', 'Maximize', 'Minimize', 'Square', 'Circle',
          'Triangle', 'Hexagon', 'Octagon', 'Diamond', 'Moon', 'Sun', 'Sunrise', 'Sunset',
          'CloudRain', 'CloudSnow', 'CloudLightning', 'Wind', 'Droplets', 'Thermometer', 'Gauge',
          'Timer', 'Stopwatch', 'Hourglass', 'Package', 'ClipboardList', 'Workflow'
        ];
        
        // Find which basic icons are actually used in the file
        const usedIcons = basicIcons.filter(icon => {
          const regex = new RegExp(`\\b${icon}\\b`, 'g');
          const matches = content.match(regex);
          return matches && matches.length > 1; // More than just the import itself
        });
        
        if (usedIcons.length > 0) {
          const newImportLine = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
          content = content.replace(importLine, newImportLine);
          modified = true;
        } else {
          // Remove the import line if no icons are used
          content = content.replace(importLine, '');
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed malformed imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Fixing malformed imports...');

const files = getAllFiles('./app');
let fixedCount = 0;

for (const file of files) {
  try {
    const originalContent = fs.readFileSync(file, 'utf8');
    fixMalformedImports(file);
    const newContent = fs.readFileSync(file, 'utf8');
    
    if (originalContent !== newContent) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files with malformed imports`);