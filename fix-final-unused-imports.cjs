const fs = require('fs');
const path = require('path');

// Find all files with unused imports
const findFilesWithUnusedImports = () => {
  const files = [];
  const appDir = path.join(process.cwd(), 'app');
  
  const walkDir = (dir) => {
    const filesInDir = fs.readdirSync(dir);
    filesInDir.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        files.push(filePath);
      }
    });
  };
  
  walkDir(appDir);
  return files;
};

const files = findFilesWithUnusedImports();

// Common unused imports to remove
const unusedImports = [
  'ArrowRight', 'Clock', 'BarChart3', 'Star', 'PieChart',
  'Smartphone', 'Globe', 'FileText', 'Settings', 'Award', 'Phone',
  'MapPin', 'Envelope', 'Zap', 'Eye', 'MessageSquare', 'Users',
  'RefreshCw', 'Mail', 'Target', 'Share2', 'Calendar', 'Cloud',
  'Lock', 'Search', 'Filter', 'Download', 'Upload', 'Share', 'Bell',
  'ThumbsUp', 'Rocket', 'Headphones', 'Music', 'BookOpen', 'Lightbulb',
  'Puzzle', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Wallet',
  'Banknote', 'Coins', 'Gift', 'Tag', 'Percent', 'LineChart',
  'Activity', 'Grid', 'List', 'Map', 'Compass', 'Navigation',
  'Globe2', 'WifiOff', 'Signal', 'Bluetooth', 'Usb', 'HardDrive',
  'MemoryStick', 'Printer', 'Scanner', 'Fax', 'Voicemail', 'Headset',
  'Speaker', 'Volume2', 'VolumeX', 'Play', 'Pause', 'Stop',
  'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw', 'Shuffle',
  'Repeat', 'Repeat1', 'Shuffle2', 'Maximize', 'Minimize', 'Square',
  'Circle', 'Triangle', 'Hexagon', 'Octagon', 'Diamond', 'StarIcon',
  'Moon', 'Sun', 'Sunrise', 'Sunset', 'CloudRain', 'CloudSnow',
  'CloudLightning', 'Wind', 'Droplets', 'Thermometer', 'Gauge',
  'Timer', 'Stopwatch', 'Hourglass', 'Bot', 'Link', 'User',
  'DollarSign', 'Heart', 'GraduationCap', 'Right', 'Code', 'Building',
  'Instagram', 'Facebook', 'Twitter', 'Linkedin', 'Youtube'
];

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports from lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImp);
      });
      
      if (usedImports.length === 0) {
        return ''; // Remove entire import line
      }
      
      return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
    });
    
    // Remove unused variables
    content = content.replace(/const\s+(\w+)\s*=\s*useState\([^)]+\);\s*\/\/\s*unused/gi, '');
    content = content.replace(/const\s+(\w+)\s*=\s*[^;]+;\s*\/\/\s*unused/gi, '');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath.replace(process.cwd(), '')}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Final unused imports cleanup completed!');
