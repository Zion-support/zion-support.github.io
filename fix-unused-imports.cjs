const fs = require('fs');
const path = require('path');

// List of files with unused imports
const filesToFix = [
  'app/ai-automation-platform/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ai-quantum-computing/page.tsx'
];

// Unused imports to remove
const unusedImports = [
  'Zap', 'Shield', 'Code', 'Database', 'Star', 'Bot', 'Link', 'Users', 'Award', 
  'Clock', 'Smartphone', 'Mail', 'Globe', 'BarChart3', 'Target', 'Activity', 
  'LineChart', 'DollarSign', 'Brain', 'UserCheck', 'Calendar', 'Cpu', 'Settings',
  'Sparkles', 'Lock', 'Search', 'Filter', 'Download', 'Upload', 'Share', 'Bell',
  'Heart', 'ThumbsUp', 'AwardIcon', 'Wifi', 'Battery', 'Camera', 'Headphones',
  'Mic', 'Video', 'Music', 'BookOpen', 'Lightbulb', 'Puzzle', 'Gamepad2',
  'ShoppingCart', 'CreditCard', 'Wallet', 'Banknote', 'Coins', 'Gift', 'Tag',
  'Percent', 'Calculator', 'PieChart', 'Layers', 'Grid', 'List', 'Map',
  'Compass', 'Navigation', 'Globe2', 'WifiOff', 'Signal', 'Bluetooth', 'Usb',
  'HardDrive', 'MemoryStick', 'Printer', 'Scanner', 'Fax', 'Voicemail',
  'Headset', 'Speaker', 'Volume2', 'VolumeX', 'Play', 'Pause', 'Stop',
  'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw', 'Shuffle', 'Repeat',
  'Repeat1', 'Shuffle2', 'Maximize', 'Minimize', 'Square', 'Circle', 'Triangle',
  'Hexagon', 'Octagon', 'Diamond', 'StarIcon', 'Moon', 'Sun', 'Sunrise',
  'Sunset', 'CloudRain', 'CloudSnow', 'CloudLightning', 'Wind', 'Droplets',
  'Thermometer', 'Gauge', 'Timer', 'Stopwatch', 'Hourglass', 'TrendingUp',
  'Eye', 'Rocket'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused imports from lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["'];?/g;
    
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImp);
      });
      
      if (usedImports.length === 0) {
        return '';
      }
      
      return `import { ${usedImports.join(', ')} } from "lucide-react";`;
    });
    
    // Remove unused Link import
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*["']react-router-dom["'];?\n?/, '');
    
    // Remove unused variables
    content = content.replace(/const\s+benefits\s*=\s*[^;]+;?\n?/g, '');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Done fixing unused imports!');
