const fs = require('fs');
const path = require('path');

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Common unused imports to remove
    const unusedImports = [
      'Link', 'Shield', 'Globe', 'Star', 'Users', 'Award', 'Clock', 'Database',
      'Brain', 'Zap', 'Target', 'TrendingUp', 'Cpu', 'Settings', 'Sparkles',
      'Smartphone', 'Lock', 'Calendar', 'Search', 'Filter', 'Download', 'Upload',
      'Share', 'Bell', 'Heart', 'ThumbsUp', 'AwardIcon', 'Wifi', 'Battery',
      'Camera', 'Headphones', 'Mic', 'Video', 'Music', 'BookOpen', 'Lightbulb',
      'Puzzle', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Wallet', 'Banknote',
      'Coins', 'Gift', 'Tag', 'Percent', 'Calculator', 'PieChart', 'LineChart',
      'Activity', 'Layers', 'Grid', 'List', 'Map', 'Compass', 'Navigation',
      'Globe2', 'WifiOff', 'Signal', 'Bluetooth', 'Usb', 'HardDrive', 'MemoryStick',
      'Printer', 'Scanner', 'Fax', 'Voicemail', 'Headset', 'Speaker', 'Volume2',
      'VolumeX', 'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward', 'RotateCcw',
      'RotateCw', 'Shuffle', 'Repeat', 'Repeat1', 'Shuffle2', 'Maximize', 'Minimize',
      'Square', 'Circle', 'Triangle', 'Hexagon', 'Octagon', 'Diamond', 'StarIcon',
      'Moon', 'Sun', 'Sunrise', 'Sunset', 'CloudRain', 'CloudSnow', 'CloudLightning',
      'Wind', 'Droplets', 'Thermometer', 'Gauge', 'Timer', 'Stopwatch', 'Hourglass',
      'DollarSign', 'Eye', 'Rocket', 'Frown'
    ];

    // Remove unused imports from lucide-react imports
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    
    content = content.replace(lucideImportRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImport);
      });
      
      if (usedImports.length === 0) {
        return ''; // Remove the entire import line if no imports are used
      }
      
      return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
    });

    // Remove Link import if not used
    if (content.includes("import { Link } from 'react-router-dom';") && !content.includes('<Link')) {
      content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?\s*\n?/g, '');
    }

    // Remove unused variables
    const lines = content.split('\n');
    const newLines = lines.filter(line => {
      // Remove lines that declare unused variables
      if (line.includes('const benefits =') && !content.includes('benefits')) {
        return false;
      }
      return true;
    });
    
    content = newLines.join('\n');

    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused imports in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all files
const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process...`);

files.forEach(file => {
  fixUnusedImports(file);
});

console.log('Done fixing unused imports!');