const fs = require('fs');
const path = require('path');

// Files with many unused imports that need fixing
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

// Common unused imports to remove
const unusedImports = [
  'Zap', 'Shield', 'Code', 'Database', 'Star', 'Bot', 'Link', 'Users', 'Award', 'Clock',
  'Smartphone', 'Mail', 'Globe', 'BarChart3', 'Target', 'Activity', 'LineChart',
  'DollarSign', 'Brain', 'UserCheck', 'Calendar', 'TrendingUp', 'Cpu', 'Settings',
  'Sparkles', 'Lock', 'Search', 'Filter', 'Download', 'Upload', 'Share', 'Bell',
  'Heart', 'ThumbsUp', 'AwardIcon', 'Wifi', 'Battery', 'Camera', 'Headphones',
  'Mic', 'Video', 'Music', 'BookOpen', 'Lightbulb', 'Puzzle', 'Gamepad2',
  'ShoppingCart', 'CreditCard', 'Wallet', 'Banknote', 'Coins', 'Gift', 'Tag',
  'Percent', 'Calculator', 'PieChart', 'Layers', 'Grid', 'List', 'Map', 'Compass',
  'Navigation', 'Globe2', 'WifiOff', 'Signal', 'Bluetooth', 'Usb', 'HardDrive',
  'MemoryStick', 'Printer', 'Scanner', 'Fax', 'Voicemail', 'Headset', 'Speaker',
  'Volume2', 'VolumeX', 'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward',
  'RotateCcw', 'RotateCw', 'Shuffle', 'Repeat', 'Repeat1', 'Shuffle2', 'Maximize',
  'Minimize', 'Square', 'Circle', 'Triangle', 'Hexagon', 'Octagon', 'Diamond',
  'StarIcon', 'Moon', 'Sun', 'Sunrise', 'Sunset', 'CloudRain', 'CloudSnow',
  'CloudLightning', 'Wind', 'Droplets', 'Thermometer', 'Gauge', 'Timer',
  'Stopwatch', 'Hourglass', 'Rocket', 'Eye'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused imports from the import statements
    unusedImports.forEach(importName => {
      // Remove from single line imports
      content = content.replace(new RegExp(`\\s*${importName}\\s*,?\\s*`, 'g'), '');
      // Remove from multi-line imports
      content = content.replace(new RegExp(`\\s*${importName}\\s*,?\\s*\\n`, 'g'), '');
    });
    
    // Clean up empty lines and trailing commas
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/{\s*,/g, '{');
    content = content.replace(/{\s*}/g, '{}');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed unused imports in ${filePath}`);
  }
});

console.log('Unused imports cleanup completed!');
