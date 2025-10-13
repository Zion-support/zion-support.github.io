const fs = require('fs');
const path = require('path');

// Comprehensive list of ALL unused imports
const unusedImports = [
  'Link', 'ArrowRight', 'Users', 'Zap', 'Shield', 'Globe', 'Mail', 'MapPin', 
  'Clock', 'CheckCircle', 'Star', 'Award', 'Helmet', 'Brain', 'Cloud', 'Settings',
  'Volume2', 'VolumeX', 'Target', 'Database', 'Cpu', 'HardDrive', 'Network',
  'Monitor', 'Phone', 'AlertTriangle', 'Lock', 'Eye', 'BarChart3', 'TrendingUp',
  'ExternalLink', 'HelpCircle', 'Menu', 'Download', 'Share2', 'onSidebarToggle',
  'quality', 'reportMetric', 'glowColors', 'rippleVariants', 'caseStudies', 'stats',
  'benefits', 'categories', 'testimonials', 'MobileNavigation', 'Server', 'DollarSign',
  'Wifi', 'Bluetooth', 'Usb', 'Printer', 'Scanner', 'Fax', 'Voicemail', 'Headset',
  'Speaker', 'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw',
  'Shuffle', 'Repeat', 'Repeat1', 'Shuffle2', 'Maximize', 'Minimize', 'Square', 'Circle',
  'Triangle', 'Hexagon', 'Octagon', 'Diamond', 'Moon', 'Sun', 'Sunrise', 'Sunset',
  'CloudRain', 'CloudSnow', 'CloudLightning', 'Wind', 'Droplets', 'Thermometer', 'Gauge',
  'Timer', 'Stopwatch', 'Hourglass', 'Calendar', 'CalendarDays', 'CalendarCheck',
  'CalendarX', 'CalendarPlus', 'CalendarMinus', 'CalendarRange', 'CalendarSearch',
  'CalendarHeart', 'CalendarStar', 'CalendarClock', 'CalendarUser', 'CalendarEdit',
  'CalendarTrash', 'CalendarSettings', 'CalendarImport', 'CalendarExport', 'CalendarShare',
  'CalendarLock', 'CalendarUnlock', 'CalendarKey', 'CalendarShield', 'CalendarAlert',
  'CalendarBell', 'CalendarZap', 'CalendarSparkles', 'CalendarGift', 'CalendarAward',
  'CalendarTrophy', 'CalendarMedal', 'CalendarCrown', 'CalendarGem', 'CalendarDiamond',
  'CalendarPearl', 'CalendarRuby', 'CalendarSapphire', 'CalendarEmerald', 'CalendarTopaz',
  'CalendarAmethyst', 'CalendarQuartz', 'CalendarCrystal', 'CalendarJewel', 'CalendarTreasure',
  'CalendarGold', 'CalendarSilver', 'CalendarBronze', 'CalendarPlatinum', 'CalendarTitanium',
  'CalendarSteel', 'CalendarIron', 'CalendarCopper', 'CalendarAluminum', 'CalendarZinc',
  'CalendarTin', 'CalendarLead', 'CalendarMercury', 'CalendarUranium', 'CalendarPlutonium',
  'CalendarRadium', 'CalendarThorium', 'CalendarActinium', 'CalendarProtactinium',
  'CalendarNeptunium', 'CalendarAmericium', 'CalendarCurium', 'CalendarBerkelium',
  'CalendarCalifornium', 'CalendarEinsteinium', 'CalendarFermium', 'CalendarMendelevium',
  'CalendarNobelium', 'CalendarLawrencium', 'CalendarRutherfordium', 'CalendarDubnium',
  'CalendarSeaborgium', 'CalendarBohrium', 'CalendarHassium', 'CalendarMeitnerium',
  'CalendarDarmstadtium', 'CalendarRoentgenium', 'CalendarCopernicium', 'CalendarNihonium',
  'CalendarFlerovium', 'CalendarMoscovium', 'CalendarLivermorium', 'CalendarTennessine',
  'CalendarOganesson', 'Smartphone', 'Calendar', 'FileText', 'Server', 'Laptop',
  'Headphones', 'Rocket', 'Code', 'Bot', 'Wifi', 'MobileIcon', 'SupportIcon', 'ServerIcon',
  'Activity', 'LineChart', 'UserCheck', 'Sparkles', 'Search', 'Filter', 'Upload', 'Share',
  'Bell', 'Heart', 'ThumbsUp', 'AwardIcon', 'Battery', 'Camera', 'Mic', 'Video', 'Music',
  'BookOpen', 'Lightbulb', 'Puzzle', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Wallet',
  'Banknote', 'Coins', 'Gift', 'Tag', 'Percent', 'Calculator', 'PieChart', 'Layers',
  'Grid', 'List', 'Map', 'Compass', 'Navigation', 'Globe2', 'WifiOff', 'Signal',
  'Bluetooth', 'Usb', 'HardDrive', 'MemoryStick', 'Printer', 'Scanner', 'Fax',
  'Voicemail', 'Headset', 'Speaker', 'Volume2', 'VolumeX', 'Play', 'Pause', 'Stop',
  'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw', 'Shuffle', 'Repeat', 'Repeat1',
  'Shuffle2', 'Maximize', 'Minimize', 'Square', 'Circle', 'Triangle', 'Hexagon',
  'Octagon', 'Diamond', 'StarIcon', 'Moon', 'Sun', 'Sunrise', 'Sunset', 'CloudRain',
  'CloudSnow', 'CloudLightning', 'Wind', 'Droplets', 'Thermometer', 'Gauge', 'Timer',
  'Stopwatch', 'Hourglass', 'MessageSquare', 'Smile'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["'];?/g;
    content = content.replace(lucideImportRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImp);
      });
      
      if (usedImports.length === 0) {
        modified = true;
        return '';
      }
      
      if (usedImports.length !== importList.length) {
        modified = true;
        return `import { ${usedImports.join(', ')} } from "lucide-react";`;
      }
      
      return match;
    });
    
    // Remove unused imports from react-router-dom
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*["']react-router-dom["'];?\n?/g, '');
    
    // Remove unused imports from react-helmet-async
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*["']react-helmet-async["'];?\n?/g, '');
    
    // Remove unused variables
    content = content.replace(/const\s+(benefits|caseStudies|stats|reportMetric|glowColors|rippleVariants|quality|categories|testimonials)\s*=\s*[^;]+;?\n?/g, '');
    
    // Remove unused function parameters
    content = content.replace(/onSidebarToggle\?:\s*\(\)\s*=>\s*void;?\n?/g, '');
    content = content.replace(/onSidebarToggle\?\s*:\s*\(\)\s*=>\s*void;?\n?/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath.replace(__dirname, '')}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TSX files and fix them
const tsxFiles = getAllTsxFiles(__dirname);
console.log(`Found ${tsxFiles.length} TypeScript files to check...`);

tsxFiles.forEach(fixFile);
console.log('Done fixing unused imports!');

function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}
