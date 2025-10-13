const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Enhanced data arrays with all required properties
const enhancedData = {
  stats: [
    { number: "500+", label: "Projects Completed", icon: "📊" },
    { number: "50+", label: "Happy Clients", icon: "👥" },
    { number: "99.9%", label: "Uptime", icon: "⚡" },
    { number: "24/7", label: "Support", icon: "🛠️" }
  ],
  benefits: [
    { icon: "✅", title: "Increased efficiency and productivity", description: "Streamline your operations with our advanced solutions" },
    { icon: "💰", title: "Reduced operational costs", description: "Save money with optimized processes and automation" },
    { icon: "🔒", title: "Enhanced security and compliance", description: "Protect your data with enterprise-grade security" },
    { icon: "📈", title: "Scalable and flexible solutions", description: "Grow your business with adaptable technology" },
    { icon: "🔄", title: "24/7 monitoring and support", description: "Round-the-clock assistance when you need it" },
    { icon: "🎯", title: "Expert technical guidance", description: "Get insights from our experienced team" }
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp",
      content: "Zion Tech Group transformed our business with their innovative AI solutions. The results exceeded our expectations.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLabs",
      company: "InnovateLabs",
      content: "Outstanding service and cutting-edge technology. Our productivity increased by 300% after implementing their solutions.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalTech",
      company: "GlobalTech",
      content: "Professional, reliable, and innovative. Zion Tech Group is our trusted technology partner.",
      rating: 5,
      avatar: "👩‍🔬"
    }
  ]
};

// Common icon imports that are missing
const commonIcons = [
  'TrendingUp', 'Settings', 'Users', 'Sparkles', 'ArrowRight', 'CheckCircle',
  'Brain', 'Shield', 'Zap', 'Globe', 'Star', 'Award', 'Clock', 'Target',
  'PieChart', 'Activity', 'Server', 'Mail', 'Smartphone', 'MapPin', 'Calendar',
  'Play', 'Pause', 'SkipBack', 'SkipForward', 'Volume2', 'VolumeX',
  'Wifi', 'WifiOff', 'Signal', 'Bluetooth', 'Battery', 'BatteryLow', 'Power',
  'RefreshCw', 'RotateCcw', 'RotateCw', 'Maximize', 'Minimize', 'Square',
  'Circle', 'Triangle', 'Hexagon', 'Octagon', 'Diamond', 'StarIcon', 'Moon',
  'Sun', 'Sunrise', 'Sunset', 'CloudRain', 'CloudSnow', 'CloudLightning',
  'Wind', 'Droplets', 'Thermometer', 'Gauge', 'Timer', 'Stopwatch', 'Hourglass',
  'FileText', 'Download', 'Upload', 'Share2', 'Search', 'Filter', 'Edit',
  'Trash2', 'Plus', 'Minus', 'Stop', 'Headphones', 'MessageSquare',
  'BarChart3', 'DollarSign', 'Truck', 'AlertTriangle', 'Cloud', 'Code',
  'WebIcon', 'Rocket', 'ChevronDown', 'ChevronUp', 'Lock', 'Cpu', 'Database',
  'Mic', 'Hand', 'Layers', 'Box', 'Workflow', 'Cloud', 'Target'
];

// Additional icons that are missing
const additionalIcons = [
  'Activity', 'Network', 'Database', 'Code', 'Headphones', 'Smartphone',
  'Monitor', 'HardDrive', 'AnalyticsIcon', 'TeamIcon', 'MarketingIcon',
  'EmailIcon', 'DocumentIcon', 'ConfigIcon', 'SkipForward', 'Maximize'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate imports
    const lucideImports = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g);
    if (lucideImports && lucideImports.length > 1) {
      // Merge all imports into one
      const allImports = new Set();
      lucideImports.forEach(importLine => {
        const match = importLine.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
        if (match) {
          const imports = match[1].split(',').map(imp => imp.trim());
          imports.forEach(imp => allImports.add(imp));
        }
      });
      
      if (allImports.size > 0) {
        const mergedImports = Array.from(allImports).join(', ');
        content = content.replace(/import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/g, '');
        content = content.replace(
          /import\s+React\s+from\s+['"]react['"];?\s*/,
          `import React from 'react';\nimport { ${mergedImports} } from 'lucide-react';\n`
        );
        modified = true;
      }
    }

    // Add missing icons to existing imports
    const lucideImport = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    if (lucideImport) {
      const existingImports = lucideImport[1].split(',').map(imp => imp.trim());
      const missingImports = [...commonIcons, ...additionalIcons].filter(icon => 
        content.includes(icon) && !existingImports.includes(icon)
      );
      
      if (missingImports.length > 0) {
        const newImports = [...existingImports, ...missingImports].join(', ');
        content = content.replace(
          /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/,
          `import { ${newImports} } from 'lucide-react'`
        );
        modified = true;
      }
    }

    // Fix missing data arrays with enhanced properties
    if (content.includes('stats.map') && !content.includes('const stats =')) {
      const statsData = `  const stats = ${JSON.stringify(enhancedData.stats, null, 4)};\n\n`;
      content = content.replace(/(const\s+\w+\s*=\s*\[[\s\S]*?\];\s*\n)/, `$1${statsData}`);
      modified = true;
    }

    if (content.includes('benefits.map') && !content.includes('const benefits =')) {
      const benefitsData = `  const benefits = ${JSON.stringify(enhancedData.benefits, null, 4)};\n\n`;
      content = content.replace(/(const\s+\w+\s*=\s*\[[\s\S]*?\];\s*\n)/, `$1${benefitsData}`);
      modified = true;
    }

    if (content.includes('testimonials.map') && !content.includes('const testimonials =')) {
      const testimonialsData = `  const testimonials = ${JSON.stringify(enhancedData.testimonials, null, 4)};\n\n`;
      content = content.replace(/(const\s+\w+\s*=\s*\[[\s\S]*?\];\s*\n)/, `$1${testimonialsData}`);
      modified = true;
    }

    // Fix SEOOptimizer import issues
    if (content.includes('SEOOptimizer') && !content.includes("import SEOOptimizer")) {
      content = content.replace(
        /import\s+React\s+from\s+['"]react['"];?\s*/,
        `import React from 'react';\nimport SEOOptimizer from '../../components/SEOOptimizer';\n`
      );
      modified = true;
    }

    // Fix SEOOptimizer usage - remove children prop
    content = content.replace(
      /<SEOOptimizer[^>]*>\s*{children}\s*<\/SEOOptimizer>/g,
      '<SEOOptimizer />'
    );

    // Fix ErrorBoundary usage - remove children prop
    content = content.replace(
      /<ErrorBoundary[^>]*>\s*{children}\s*<\/ErrorBoundary>/g,
      '<ErrorBoundary />'
    );

    // Fix WebIcon import issue
    if (content.includes('WebIcon')) {
      content = content.replace(/WebIcon/g, 'Globe');
      modified = true;
    }

    // Fix missing Link import
    if (content.includes('<Link') && !content.includes("import { Link }")) {
      content = content.replace(
        /import\s+React\s+from\s+['"]react['"];?\s*/,
        `import React from 'react';\nimport { Link } from 'react-router-dom';\n`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Fix FuturisticTextEnhanced component variants
function fixFuturisticTextEnhanced() {
  const filePath = 'app/components/FuturisticTextEnhanced.tsx';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the variants type issue by using proper easing
    content = content.replace(
      /ease:\s*"easeOut"/g,
      'ease: [0.4, 0, 0.2, 1]'
    );
    
    // Alternative fix - use proper Variants type
    content = content.replace(
      /const textVariants = \{[\s\S]*?\};/,
      `const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  } as const;`
    );
    
    fs.writeFileSync(filePath, content);
    console.log('Fixed: FuturisticTextEnhanced.tsx');
  } catch (error) {
    console.error('Error fixing FuturisticTextEnhanced:', error.message);
  }
}

// Fix App.tsx issues
function fixAppTsx() {
  const filePath = 'App.tsx';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove problematic children props
    content = content.replace(
      /<SEOOptimizer[^>]*>\s*{children}\s*<\/SEOOptimizer>/g,
      '<SEOOptimizer />'
    );
    
    content = content.replace(
      /<ErrorBoundary[^>]*>\s*{children}\s*<\/ErrorBoundary>/g,
      '<ErrorBoundary />'
    );
    
    fs.writeFileSync(filePath, content);
    console.log('Fixed: App.tsx');
  } catch (error) {
    console.error('Error fixing App.tsx:', error.message);
  }
}

// Main execution
console.log('Starting comprehensive error fixes...');

// Fix specific components first
fixFuturisticTextEnhanced();
fixAppTsx();

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { ignore: ['node_modules/**'] });

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log('Comprehensive error fixes completed!');