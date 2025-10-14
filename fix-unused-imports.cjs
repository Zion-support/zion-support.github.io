const fs = require('fs');
const path = require('path');

// List of files with unused imports
const filesToFix = [
  'app/ai-customer-sentiment-tracker/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-quantum-computing/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-space-mission-optimizer/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'Link', 'Shield', 'Globe', 'Star', 'Users', 'Award', 'Clock', 'Zap', 'Brain',
  'Frown', 'Database', 'PieChart', 'Target', 'TrendingUp', 'Cpu', 'Mic', 'Layers',
  'Box', 'Search', 'Settings', 'Sparkles', 'Smartphone', 'Lock', 'Calendar',
  'Filter', 'Download', 'Upload', 'Share', 'Bell', 'Heart', 'ThumbsUp', 'Wifi',
  'Battery', 'Camera', 'Headphones', 'Video', 'Music', 'BookOpen', 'Lightbulb',
  'Puzzle', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Wallet', 'Banknote',
  'Coins', 'Gift', 'Tag', 'Percent', 'Calculator', 'Activity', 'Grid', 'List',
  'Map', 'Compass', 'Navigation', 'Globe2', 'WifiOff', 'Signal', 'Bluetooth',
  'Usb', 'HardDrive', 'MemoryStick', 'Printer', 'Scanner', 'Fax', 'Voicemail',
  'Headset', 'Speaker', 'Volume2', 'VolumeX', 'Play', 'Pause', 'Stop', 'SkipBack',
  'SkipForward', 'RotateCcw', 'RotateCw', 'Shuffle', 'Repeat', 'Repeat1',
  'Shuffle2', 'Maximize', 'Minimize', 'Square', 'Circle', 'Triangle', 'Hexagon',
  'Octagon', 'Diamond', 'Moon', 'Sun', 'Sunrise', 'Sunset', 'CloudRain',
  'CloudSnow', 'CloudLightning', 'Wind', 'Droplets', 'Thermometer', 'Gauge',
  'Timer', 'Stopwatch', 'Hourglass', 'DollarSign', 'Eye', 'Rocket', 'MessageSquare',
  'Smile', 'LineChart', 'ArrowRight', 'MapPin', 'BarChart3'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
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
        return ''; // Remove entire import if no imports are used
      }
      
      return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
    });
    
    // Remove unused Link imports
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?\n?/g, '');
    
    // Remove unused variables
    content = content.replace(/const\s+benefits\s*=\s*[^;]+;/g, '');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Unused imports fixed!');
