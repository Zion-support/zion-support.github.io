const fs = require('fs');
const path = require('path');

// List of files with unused imports that need to be fixed
const filesToFix = [
  'app/consultation/page.tsx',
  'app/devops-services/page.tsx',
  'app/software-development/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-cybersecurity-suite-pro/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-ai-video-generator/page.tsx',
  'app/zion-analytics-pro/page.tsx'
];

// Icons that are commonly unused
const commonlyUnusedIcons = [
  'Zap', 'Clock', 'Award', 'Target', 'TrendingUp', 'Cpu', 'Database', 'Globe', 'Mic',
  'Layers', 'Box', 'Link', 'Brain', 'Shield', 'Star', 'Users', 'ArrowRight', 'Pause',
  'Download', 'Upload', 'Server', 'CheckCircle', 'Lock', 'Settings', 'Cloud', 'Calendar',
  'Rocket', 'Code', 'WebIcon', 'FileText', 'DollarSign', 'Smartphone', 'Headphones',
  'MessageSquare', 'Share2', 'Search', 'Filter', 'Edit', 'Trash2', 'Plus', 'Minus',
  'Play', 'Stop', 'Volume2', 'VolumeX', 'Wifi', 'WifiOff', 'Signal', 'Bluetooth',
  'Battery', 'BatteryLow', 'Power', 'RefreshCw', 'RotateCcw', 'RotateCw', 'Maximize',
  'Minimize', 'Square', 'Circle', 'Triangle', 'Hexagon', 'Octagon', 'Diamond',
  'StarIcon', 'Moon', 'Sun', 'Sunrise', 'Sunset', 'CloudRain', 'CloudSnow',
  'CloudLightning', 'Wind', 'Droplets', 'Thermometer', 'Gauge', 'Timer', 'Stopwatch',
  'Hourglass', 'BarChart3', 'Hand', 'AlertTriangle', 'Truck'
];

function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the import statement for lucide-react
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    
    if (!importMatch) {
      console.log(`No lucide-react import found in ${filePath}`);
      return;
    }
    
    const importContent = importMatch[1];
    const importedIcons = importContent.split(',').map(icon => icon.trim());
    
    // Check which icons are actually used in the file
    const usedIcons = [];
    for (const icon of importedIcons) {
      // Check if the icon is used in JSX (as a component)
      const iconRegex = new RegExp(`<${icon}\\b`, 'g');
      if (iconRegex.test(content)) {
        usedIcons.push(icon);
      }
    }
    
    // If no icons are used, remove the entire import
    if (usedIcons.length === 0) {
      content = content.replace(importMatch[0], '');
    } else {
      // Replace with only used icons
      const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
      content = content.replace(importMatch[0], newImport);
    }
    
    // Also remove unused Link imports from react-router-dom
    const linkImportMatch = content.match(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?/);
    if (linkImportMatch && !content.includes('<Link')) {
      content = content.replace(linkImportMatch[0], '');
    }
    
    // Remove unused variables
    content = content.replace(/const\s+selectedPlan\s*=\s*useState\([^)]+\);\s*const\s+setSelectedPlan\s*=\s*useState\([^)]+\);/g, '');
    content = content.replace(/const\s+partners\s*=\s*[^;]+;/g, '');
    content = content.replace(/const\s+tiers\s*=\s*[^;]+;/g, '');
    content = content.replace(/const\s+\[selectedPlan,\s*setSelectedPlan\]\s*=\s*useState\([^)]+\);/g, '');
    content = content.replace(/const\s+\[selectedPlan,\s*setSelectedPlan\]\s*=\s*useState\([^)]+\);\s*/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    removeUnusedImports(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Unused imports cleanup completed!');