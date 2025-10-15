const fs = require('fs');
const path = require('path');

// List of files with unused imports
const filesToFix = [
  'app/5g-solutions/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-email-marketing-automation/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/blog/page.tsx',
  'app/cloud-services/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'Shield', 'ArrowRight', 'Clock', 'BarChart3', 'Star', 'PieChart',
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
  'Timer', 'Stopwatch', 'Hourglass', 'Bot', 'Link', 'User'
];

filesToFix.forEach(filePath => {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
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
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Unused imports cleanup completed!');
