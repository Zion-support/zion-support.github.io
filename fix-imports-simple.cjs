const fs = require('fs');
const path = require('path');

// List of files with unused imports that we need to fix
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

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove specific unused imports based on common patterns
    const unusedImports = [
      'Zap', 'Shield', 'Code', 'Database', 'Star', 'Bot',
      'Link', 'Users', 'Award', 'Clock', 'Smartphone', 'Mail',
      'BarChart3', 'Target', 'Activity', 'LineChart',
      'DollarSign', 'Brain', 'UserCheck', 'Calendar',
      'Cpu', 'Settings', 'Sparkles', 'Lock', 'Search', 'Filter',
      'Download', 'Upload', 'Share', 'Bell', 'Heart', 'ThumbsUp',
      'AwardIcon', 'Wifi', 'Battery', 'Camera', 'Headphones',
      'Mic', 'Video', 'Music', 'BookOpen', 'Lightbulb', 'Puzzle',
      'Gamepad2', 'ShoppingCart', 'CreditCard', 'Wallet', 'Banknote',
      'Coins', 'Gift', 'Tag', 'Percent', 'Calculator', 'PieChart',
      'Layers', 'Grid', 'List', 'Map', 'Compass', 'Navigation',
      'Globe2', 'WifiOff', 'Signal', 'Bluetooth', 'Usb', 'HardDrive',
      'MemoryStick', 'Printer', 'Scanner', 'Fax', 'Voicemail',
      'Headset', 'Speaker', 'Volume2', 'VolumeX', 'Play', 'Pause',
      'Stop', 'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw',
      'Shuffle', 'Repeat', 'Repeat1', 'Shuffle2', 'Maximize',
      'Minimize', 'Square', 'Circle', 'Triangle', 'Hexagon',
      'Octagon', 'Diamond', 'StarIcon', 'Moon', 'Sun', 'Sunrise',
      'Sunset', 'CloudRain', 'CloudSnow', 'CloudLightning', 'Wind',
      'Droplets', 'Thermometer', 'Gauge', 'Timer', 'Stopwatch',
      'Hourglass', 'TrendingUp', 'Eye', 'Rocket'
    ];
    
    // Remove unused imports from import statements
    unusedImports.forEach(importName => {
      // Pattern 1: Remove from named imports { A, B, C }
      const namedImportPattern = new RegExp(`\\s*,\\s*${importName}\\s*`, 'g');
      content = content.replace(namedImportPattern, '');
      
      // Pattern 2: Remove single named import { A }
      const singleNamedPattern = new RegExp(`\\{\\s*${importName}\\s*\\}`, 'g');
      content = content.replace(singleNamedPattern, '{}');
      
      // Pattern 3: Remove from multi-line imports
      const multiLinePattern = new RegExp(`\\s*${importName}\\s*,?\\s*\\n`, 'g');
      content = content.replace(multiLinePattern, '\n');
    });
    
    // Clean up empty import statements
    content = content.replace(/import\s*\{\s*\}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    content = content.replace(/import\s*\{\s*,\s*\}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    
    // Clean up trailing commas in imports
    content = content.replace(/,\s*\}/g, '}');
    content = content.replace(/,\s*\)/g, ')');
    
    // Write the fixed content back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process each file
console.log('Starting to fix unused imports...');
filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    removeUnusedImports(file);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('Finished fixing unused imports');