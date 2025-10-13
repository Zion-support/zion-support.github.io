import fs from 'fs';
import { glob } from 'glob';

// Get all TypeScript/JavaScript files
const files = await glob('app/**/*.{ts,tsx,js,jsx}', { ignore: ['node_modules/**'] });

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix lucide-react imports - remove all unused ones
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      
      // Find which imports are actually used
      const usedImports = imports.filter(imp => {
        const iconName = imp.replace(/\s+as\s+\w+/, '').trim();
        return content.includes(`<${iconName}`) || 
               content.includes(`${iconName}.`) || 
               content.includes(`${iconName} `) ||
               content.includes(`${iconName}>`) ||
               content.includes(`${iconName},`) ||
               content.includes(`${iconName};`) ||
               content.includes(`${iconName})`) ||
               content.includes(`${iconName}]`);
      });

      if (usedImports.length !== imports.length) {
        const newImport = usedImports.length > 0 
          ? `import { ${usedImports.join(', ')} } from 'lucide-react';`
          : '';
        
        content = content.replace(lucideImportMatch[0], newImport);
        modified = true;
      }
    }

    // Fix other common unused imports
    const otherImports = [
      'Link', 'ArrowRight', 'Users', 'Zap', 'Shield', 'Globe', 'Mail', 'MapPin', 'Clock', 
      'CheckCircle', 'Star', 'Award', 'Helmet', 'Target', 'TrendingUp', 'Brain', 'Settings',
      'Database', 'Cpu', 'HardDrive', 'Network', 'Monitor', 'Phone', 'AlertTriangle', 'Lock',
      'Eye', 'BarChart3', 'Cloud', 'ExternalLink', 'HelpCircle', 'Menu', 'Download', 'Share2',
      'Code', 'Volume2', 'VolumeX', 'Smartphone', 'FileText', 'Calendar', 'CalendarDays',
      'CalendarCheck', 'CalendarX', 'CalendarPlus', 'CalendarMinus', 'CalendarRange',
      'CalendarSearch', 'CalendarHeart', 'CalendarClock', 'MobileNavigation', 'Server',
      'DollarSign', 'MessageSquare', 'Smile', 'AwardIcon', 'Square', 'Circle', 'StarIcon',
      'Hourglass', 'Play', 'Pause', 'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw',
      'Shuffle', 'Repeat', 'Repeat1', 'Maximize', 'Minimize', 'Triangle', 'Hexagon',
      'Octagon', 'Diamond', 'Moon', 'Sun', 'Sunrise', 'Sunset', 'CloudRain', 'CloudSnow',
      'CloudLightning', 'Wind', 'Droplets', 'Thermometer', 'Gauge', 'Timer', 'watch',
      'Voicemail', 'Headset', 'Speaker', 'Usb', 'Printer', 'Wifi', 'Bluetooth'
    ];

    otherImports.forEach(importName => {
      const regex = new RegExp(`import\\s*{\\s*[^}]*\\b${importName}\\b[^}]*}\\s*from\\s*['"][^'"]*['"];?`, 'g');
      const matches = content.match(regex);
      if (matches) {
        matches.forEach(match => {
          const imports = match.match(/\{([^}]+)\}/)[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const name = imp.replace(/\s+as\s+\w+/, '').trim();
            return name !== importName || content.includes(`<${name}`) || 
                   content.includes(`${name}.`) || content.includes(`${name} `) ||
                   content.includes(`${name}>`) || content.includes(`${name},`) ||
                   content.includes(`${name};`) || content.includes(`${name})`) ||
                   content.includes(`${name}]`);
          });
          
          if (usedImports.length !== imports.length) {
            const newImport = usedImports.length > 0 
              ? match.replace(/\{[^}]+\}/, `{ ${usedImports.join(', ')} }`)
              : '';
            content = content.replace(match, newImport);
            modified = true;
          }
        });
      }
    });

    // Remove unused variables
    const unusedVars = ['benefits', 'caseStudies', 'stats', 'categories', 'testimonials', 
                       'reportMetric', 'glowColors', 'rippleVariants', 'quality', 
                       'onSidebarToggle', 'useEffect', 'onCLS', 'onINP', 'onFCP', 'onLCP', 'onTTFB'];
    unusedVars.forEach(varName => {
      const regex = new RegExp(`\\s*const\\s+${varName}\\s*=.*?;`, 'gs');
      if (content.includes(`const ${varName}`)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    // Fix parsing errors - remove malformed JSX attributes
    content = content.replace(/key=\{index\}\s*\?\s*['"][^'"]*['"]\s*:\s*['"][^'"]*['"]\}/g, 'key={index}');
    content = content.replace(/key=\{index\}\s*%\s*\d+\s*===\s*\d+\s*\?\s*['"][^'"]*['"]\s*:\s*['"][^'"]*['"]\}/g, 'key={index}');

    // Clean up empty import lines
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?\s*\n/g, '');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
for (const file of files) {
  fixFile(file);
}

console.log('All remaining issues fixed!');