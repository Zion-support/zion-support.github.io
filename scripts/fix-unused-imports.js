import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const lucideMatches = [...content.matchAll(lucideImportRegex)];
    
    for (const match of lucideMatches) {
      const importLine = match[0];
      const imports = match[1].split(',').map(imp => imp.trim());
      
      // Check which imports are actually used
      const usedImports = imports.filter(imp => {
        const importName = imp.split(' as ')[0].trim();
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        const matches = content.match(regex);
        return matches && matches.length > 1; // More than just the import itself
      });
      
      if (usedImports.length === 0) {
        // Remove entire import line
        content = content.replace(importLine, '');
        modified = true;
      } else if (usedImports.length < imports.length) {
        // Replace with only used imports
        const newImportLine = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importLine, newImportLine);
        modified = true;
      }
    }
    
    // Remove other common unused imports
    const unusedImports = [
      'TrendingUp', 'Clock', 'Star', 'Brain', 'Cloud', 'Cpu', 'Settings', 'Sparkles', 'Users',
      'Smartphone', 'Lock', 'Target', 'Calendar', 'Search', 'Filter', 'Download', 'Upload',
      'Share', 'Bell', 'Heart', 'ThumbsUp', 'AwardIcon', 'Wifi', 'Battery', 'Camera',
      'Headphones', 'Mic', 'Video', 'Music', 'BookOpen', 'Lightbulb', 'Puzzle', 'Gamepad2',
      'ShoppingCart', 'CreditCard', 'Wallet', 'Banknote', 'Coins', 'Gift', 'Tag', 'Percent',
      'Calculator', 'PieChart', 'LineChart', 'Activity', 'Layers', 'Grid', 'List', 'Map',
      'Compass', 'Navigation', 'Globe2', 'WifiOff', 'Signal', 'Bluetooth', 'Usb', 'HardDrive',
      'MemoryStick', 'Printer', 'Scanner', 'Fax', 'Voicemail', 'Headset', 'Speaker', 'Volume2',
      'VolumeX', 'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw',
      'Shuffle', 'Repeat', 'Repeat1', 'Shuffle2', 'Maximize', 'Minimize', 'Square', 'Circle',
      'Triangle', 'Hexagon', 'Octagon', 'Diamond', 'StarIcon', 'Moon', 'Sun', 'Sunrise',
      'Sunset', 'CloudRain', 'CloudSnow', 'CloudLightning', 'Wind', 'Droplets', 'Thermometer',
      'Gauge', 'Timer', 'Stopwatch', 'Hourglass', 'Zap', 'DollarSign', 'Eye', 'Rocket'
    ];
    
    for (const unusedImport of unusedImports) {
      const regex = new RegExp(`\\b${unusedImport}\\b`, 'g');
      const matches = content.match(regex);
      if (matches && matches.length === 1) {
        // Only appears once, likely unused
        content = content.replace(new RegExp(`,\\s*${unusedImport}`, 'g'), '');
        content = content.replace(new RegExp(`${unusedImport}\\s*,?`, 'g'), '');
        content = content.replace(new RegExp(`{\\s*,?\\s*}`, 'g'), '{}');
        modified = true;
      }
    }
    
    // Clean up empty import lines
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n?/g, '');
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Fixing unused imports...');

const files = getAllFiles('./app');
let fixedCount = 0;

for (const file of files) {
  try {
    const originalContent = fs.readFileSync(file, 'utf8');
    fixUnusedImports(file);
    const newContent = fs.readFileSync(file, 'utf8');
    
    if (originalContent !== newContent) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);

// Also fix the main App.tsx
fixUnusedImports('./App.tsx');

console.log('Unused imports fix completed!');