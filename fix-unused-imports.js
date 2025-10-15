import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with many unused imports
const filesToFix = [
  'app/ai-services/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-services/page.tsx',
  'app/components/EnhancedNavigation.tsx',
  'app/components/Footer.tsx',
  'app/components/Navigation.tsx',
  'app/consultation/page.tsx',
  'app/contact/page.tsx',
  'app/custom-development/page.tsx',
  'app/customer-relationship-manager/page.tsx',
  'app/devops-services/page.tsx',
  'app/email-marketing-platform/page.tsx',
  'app/employee-time-tracker/page.tsx',
  'app/financial-reporting-tool/page.tsx',
  'app/hooks/usePerformance.ts',
  'app/inventory-management-system/page.tsx',
  'app/it-solutions/page.tsx',
  'app/layout.tsx',
  'app/micro-saas-solutions/page.tsx',
  'app/micro-saas/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'ShoppingCart', 'CreditCard', 'Wallet', 'Banknote', 'Coins', 'Gift', 'Tag', 'Percent',
  'PieChart', 'LineChart', 'Activity', 'Grid', 'List', 'Map', 'Compass', 'Navigation',
  'Globe2', 'WifiOff', 'Signal', 'Bluetooth', 'Usb', 'HardDrive', 'MemoryStick',
  'Printer', 'Scanner', 'Fax', 'Phone', 'Voicemail', 'Headset', 'Speaker', 'Volume2',
  'VolumeX', 'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw',
  'Shuffle', 'Repeat', 'Repeat1', 'Shuffle2', 'Maximize', 'Minimize', 'Square', 'Circle',
  'Triangle', 'Hexagon', 'Octagon', 'Diamond', 'StarIcon', 'Moon', 'Sun', 'Sunrise',
  'Sunset', 'CloudRain', 'CloudSnow', 'CloudLightning', 'Wind', 'Droplets', 'Thermometer',
  'Gauge', 'Timer', 'Stopwatch', 'Hourglass', 'Brain', 'Star', 'Users', 'Shield', 'Clock',
  'Database', 'Smartphone', 'Globe', 'Target', 'Lightbulb', 'Rocket', 'Award', 'Mail',
  'MapPin', 'Zap', 'Code', 'Cpu', 'ExternalLink', 'Cloud', 'Sparkles', 'ArrowRightIcon',
  'ArrowRight', 'HeartIcon', 'PlayIcon', 'CheckCircle', 'Link', 'Server', 'BarChart3',
  'Lock', 'Wifi', 'Monitor', 'Layers', 'MessageSquare', 'Eye', 'FileText', 'Network',
  'Settings', 'Calendar', 'Filter', 'Download', 'Upload', 'Bell', 'ThumbsUp', 'Image',
  'Music', 'BookOpen', 'Puzzle', 'Gamepad2', 'PerformanceMetrics'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Fix unused imports in lucide-react imports
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["']/g;
    content = content.replace(lucideImportRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImp) && content.includes(cleanImp);
      });
      
      if (usedImports.length !== importList.length) {
        modified = true;
        return `import { ${usedImports.join(', ')} } from "lucide-react"`;
      }
      return match;
    });

    // Fix unused variables
    content = content.replace(/const\s+(\w+)\s*=\s*[^;]+;\s*$/gm, (match, varName) => {
      if (unusedImports.includes(varName) && !content.includes(varName + '.')) {
        modified = true;
        return '';
      }
      return match;
    });

    // Remove unused parameter names
    content = content.replace(/\(\s*(\w+)\s*:\s*\w+\s*\)\s*=>/g, (match, paramName) => {
      if (unusedImports.includes(paramName)) {
        modified = true;
        return '(_) =>';
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Unused imports cleanup completed!');