const fs = require('fs');
const path = require('path');

// List of files with unused imports
const filesToFix = [
  'app/ai-analytics/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ai-quantum-computing/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-voice-assistant-pro/page.tsx',
  'app/ar-vr-development/page.tsx',
  'app/asset-management/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'TrendingUp', 'Zap', 'Shield', 'Code', 'Database', 'Star', 'Bot',
  'Link', 'Users', 'Award', 'Clock', 'Smartphone', 'Mail', 'Globe',
  'BarChart3', 'Target', 'Activity', 'LineChart', 'DollarSign', 'Brain',
  'UserCheck', 'Calendar', 'Cpu', 'Settings', 'Sparkles', 'Lock',
  'Monitor', 'MessageSquare', 'Search', 'Filter', 'Download', 'Upload',
  'Share', 'Bell', 'Eye', 'Heart', 'ThumbsUp', 'AwardIcon', 'Rocket',
  'Wifi', 'Battery', 'Camera', 'Headphones', 'Mic', 'Video', 'Music',
  'BookOpen', 'Lightbulb', 'Puzzle', 'Gamepad2', 'ShoppingCart',
  'CreditCard', 'Wallet', 'Banknote', 'Coins', 'Gift', 'Tag', 'Percent',
  'Calculator', 'PieChart', 'Activity', 'Layers', 'Grid', 'List', 'Map',
  'Compass', 'Navigation', 'Globe2', 'WifiOff', 'Signal', 'Bluetooth',
  'Usb', 'HardDrive', 'MemoryStick', 'Printer', 'Scanner', 'Fax',
  'Voicemail', 'Headset', 'Speaker', 'Volume2', 'VolumeX', 'Play',
  'Pause', 'Stop', 'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw',
  'Shuffle', 'Repeat', 'Repeat1', 'Shuffle2', 'Maximize', 'Minimize',
  'Square', 'Circle', 'Triangle', 'Hexagon', 'Octagon', 'Diamond',
  'StarIcon', 'Moon', 'Sun', 'Sunrise', 'Sunset', 'CloudRain',
  'CloudSnow', 'CloudLightning', 'Wind', 'Droplets', 'Thermometer',
  'Gauge', 'Timer', 'Stopwatch', 'Hourglass'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the lucide-react import line
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["'];/;
    const match = content.match(lucideImportRegex);
    
    if (match) {
      const currentImports = match[1].split(',').map(imp => imp.trim());
      
      // Keep only the imports that are actually used in the file
      const usedImports = currentImports.filter(imp => {
        // Check if the import is used in the file content (excluding the import line)
        const importName = imp.split(' as ')[0].trim();
        const contentWithoutImport = content.replace(match[0], '');
        return contentWithoutImport.includes(importName);
      });
      
      if (usedImports.length > 0) {
        const newImport = `import { ${usedImports.join(', ')} } from "lucide-react";`;
        content = content.replace(lucideImportRegex, newImport);
      } else {
        // Remove the entire import if no lucide icons are used
        content = content.replace(lucideImportRegex, '');
      }
    }
    
    // Remove unused Link imports
    if (content.includes('import { Link } from "react-router-dom";') && !content.includes('<Link')) {
      content = content.replace(/import\s*{\s*Link\s*}\s*from\s*["']react-router-dom["'];\n?/, '');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Done fixing unused imports');