import fs from 'fs';
import path from 'path';

// Common data arrays that are missing
const commonDataArrays = {
  testimonials: [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their innovative AI solutions. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "CTO, InnovateLabs",
      content: "Outstanding service and cutting-edge technology. Our productivity increased by 300% after implementing their solutions.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Director, DataFlow Inc",
      content: "Professional, reliable, and innovative. Zion Tech Group delivered exactly what they promised and more.",
      rating: 5
    }
  ],
  benefits: [
    {
      icon: "🚀",
      title: "Increased Efficiency",
      description: "Streamline your operations with our AI-powered automation tools."
    },
    {
      icon: "🔒",
      title: "Enhanced Security",
      description: "Protect your data with enterprise-grade security measures."
    },
    {
      icon: "📈",
      title: "Better Analytics",
      description: "Make data-driven decisions with our advanced analytics platform."
    },
    {
      icon: "⚡",
      title: "Faster Performance",
      description: "Optimize your systems for maximum speed and reliability."
    }
  ],
  stats: [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ]
};

// Common missing imports
const commonImports = {
  'lucide-react': [
    'ArrowRight', 'Brain', 'Shield', 'Users', 'Award', 'Mail', 'Smartphone', 'Globe',
    'TrendingUp', 'Settings', 'Sparkles', 'CheckCircle', 'Clock', 'Star', 'Cpu',
    'Database', 'Mic', 'Layers', 'Box', 'Target', 'PieChart', 'MapPin', 'Pause',
    'Download', 'Upload', 'Play', 'SkipBack', 'SkipForward', 'Volume2', 'VolumeX',
    'Wifi', 'WifiOff', 'Signal', 'Bluetooth', 'Battery', 'BatteryLow', 'Power',
    'RefreshCw', 'RotateCcw', 'RotateCw', 'Maximize', 'Minimize', 'Square',
    'Circle', 'Triangle', 'Hexagon', 'Octagon', 'Diamond', 'StarIcon', 'Moon',
    'Sun', 'Sunrise', 'Sunset', 'CloudRain', 'CloudSnow', 'CloudLightning',
    'Wind', 'Droplets', 'Thermometer', 'Gauge', 'Timer', 'Stopwatch', 'Hourglass',
    'FileText', 'DollarSign', 'Lock', 'Settings', 'Target', 'Headphones',
    'MessageSquare', 'Share2', 'Search', 'Filter', 'Edit', 'Trash2', 'Plus',
    'Minus', 'Stop', 'Calendar', 'MapPin', 'Activity', 'BarChart3', 'Hand',
    'Server', 'Cloud', 'Rocket', 'Code', 'WebIcon', 'ChevronDown', 'ChevronUp'
  ]
};

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file uses any of the common data arrays
    const needsTestimonials = content.includes('testimonials.map') || content.includes('testimonials.forEach');
    const needsBenefits = content.includes('benefits.map') || content.includes('benefits.forEach');
    const needsStats = content.includes('stats.map') || content.includes('stats.forEach');

    // Add missing data arrays
    if (needsTestimonials || needsBenefits || needsStats) {
      const dataArrays = [];
      if (needsTestimonials) dataArrays.push(`  const testimonials = ${JSON.stringify(commonDataArrays.testimonials, null, 2)};`);
      if (needsBenefits) dataArrays.push(`  const benefits = ${JSON.stringify(commonDataArrays.benefits, null, 2)};`);
      if (needsStats) dataArrays.push(`  const stats = ${JSON.stringify(commonDataArrays.stats, null, 2)};`);

      // Find the function declaration and add data arrays after it
      const functionMatch = content.match(/(export default function \w+\(\) \{[^}]*)/);
      if (functionMatch) {
        const insertPoint = functionMatch.index + functionMatch[0].length;
        content = content.slice(0, insertPoint) + '\n\n' + dataArrays.join('\n') + '\n' + content.slice(insertPoint);
        modified = true;
      }
    }

    // Fix missing imports from lucide-react
    const lucideImports = [];
    commonImports['lucide-react'].forEach(icon => {
      if (content.includes(icon) && !content.includes(`import { ${icon}`)) {
        lucideImports.push(icon);
      }
    });

    if (lucideImports.length > 0) {
      // Find existing lucide-react import
      const lucideImportMatch = content.match(/import\s*\{[^}]*\}\s*from\s*['"]lucide-react['"];?/);
      if (lucideImportMatch) {
        // Add missing icons to existing import
        const existingIcons = lucideImportMatch[0].match(/\{([^}]+)\}/)[1].split(',').map(s => s.trim());
        const allIcons = [...new Set([...existingIcons, ...lucideImports])];
        const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(lucideImportMatch[0], newImport);
        modified = true;
      } else {
        // Add new import
        const newImport = `import { ${lucideImports.join(', ')} } from 'lucide-react';\n`;
        content = newImport + content;
        modified = true;
      }
    }

    // Remove unused imports (basic cleanup)
    const lines = content.split('\n');
    const cleanedLines = lines.filter(line => {
      // Skip lines that are just unused imports
      if (line.trim().startsWith('import {') && line.includes('} from')) {
        const importMatch = line.match(/import\s*\{([^}]+)\}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(s => s.trim());
          const usedImports = imports.filter(imp => content.includes(imp) && !line.includes(imp));
          if (usedImports.length === 0) {
            return false; // Remove this line
          }
        }
      }
      return true;
    });

    if (cleanedLines.length !== lines.length) {
      content = cleanedLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/TSX files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Run the fix
console.log('Starting comprehensive fix...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files.`);