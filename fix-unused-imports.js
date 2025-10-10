import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with unused imports
const filesToFix = [
  'src/ai-content-writer/page.tsx',
  'src/ai-fraud-detection/page.tsx',
  'src/it-services/page.tsx',
  'src/page.tsx',
  'src/services/page.tsx',
  'src/web-development/page.tsx',
  'App.tsx'
];

// Unused imports to remove
const unusedImports = [
  'Zap', 'ArrowRight', 'Mail', 'Shield', 'AlertTriangle', 'Eye',
  'Smartphone', 'Clock', 'Lock', 'Target', 'Sparkles', 'TrendingUp',
  'Users', 'Award', 'FileText', 'Search', 'Bot', 'Palette', 'Camera',
  'Music', 'Video', 'Gamepad2', 'Building', 'Factory', 'Car', 'Plane',
  'Ship', 'Train', 'Home', 'Heart', 'GraduationCap', 'Hammer',
  'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar',
  'Clock3', 'Compass', 'PieChart', 'TrendingDown', 'Activity',
  'Lightning', 'Crosshair', 'Security', 'People', 'StarIcon', 'Check',
  'Arrow', 'PhoneIcon', 'MailIcon', 'Location', 'Rocket', 'Microscope',
  'DbIcon', 'Processor', 'HardDrive', 'Wifi', 'Monitor', 'Keyboard',
  'Mouse', 'Headphones', 'Printer', 'Router', 'RotateCcw', 'RefreshCw',
  'Move', 'Link', 'HelpCircle', 'ShieldCheck', 'FileCheck', 'TestTube',
  'BarChart3', 'Bell', 'FileBarChart', 'LayoutDashboard', 'Globe',
  'Cpu', 'MapPin', 'DollarSign', 'CreditCard', 'Stethoscope',
  'Briefcase', 'Wrench', 'Phone', 'Helmet'
];

function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find import statements and remove unused imports
    const importRegex = /import\s*{([^}]+)}\s*from\s*['"][^'"]+['"];?/g;
    
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImp);
      });

      if (usedImports.length === 0) {
        modified = true;
        return ''; // Remove entire import line
      } else if (usedImports.length !== importList.length) {
        modified = true;
        return match.replace(imports, usedImports.join(', '));
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    removeUnusedImports(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Unused imports cleanup completed!');