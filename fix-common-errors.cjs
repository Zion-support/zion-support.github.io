const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common missing imports that need to be added
const commonImports = {
  'TrendingUp': 'lucide-react',
  'Settings': 'lucide-react',
  'Users': 'lucide-react',
  'Sparkles': 'lucide-react',
  'ArrowRight': 'lucide-react',
  'CheckCircle': 'lucide-react',
  'Clock': 'lucide-react',
  'Award': 'lucide-react',
  'Star': 'lucide-react',
  'Globe': 'lucide-react',
  'Shield': 'lucide-react',
  'Zap': 'lucide-react',
  'Brain': 'lucide-react',
  'BarChart3': 'lucide-react',
  'PieChart': 'lucide-react',
  'Database': 'lucide-react',
  'Cpu': 'lucide-react',
  'Target': 'lucide-react',
  'Mic': 'lucide-react',
  'Layers': 'lucide-react',
  'Box': 'lucide-react',
  'Hand': 'lucide-react',
  'FileText': 'lucide-react',
  'DollarSign': 'lucide-react',
  'Smartphone': 'lucide-react',
  'Lock': 'lucide-react',
  'Mail': 'lucide-react',
  'Headphones': 'lucide-react',
  'MessageSquare': 'lucide-react',
  'Download': 'lucide-react',
  'Share2': 'lucide-react',
  'Search': 'lucide-react',
  'Filter': 'lucide-react',
  'Edit': 'lucide-react',
  'Trash2': 'lucide-react',
  'Plus': 'lucide-react',
  'Minus': 'lucide-react',
  'Play': 'lucide-react',
  'Pause': 'lucide-react',
  'Stop': 'lucide-react',
  'Volume2': 'lucide-react',
  'VolumeX': 'lucide-react',
  'Wifi': 'lucide-react',
  'WifiOff': 'lucide-react',
  'Signal': 'lucide-react',
  'Bluetooth': 'lucide-react',
  'Calendar': 'lucide-react',
  'MapPin': 'lucide-react',
  'Phone': 'lucide-react',
  'Code': 'lucide-react',
  'Package': 'lucide-react',
  'Heart': 'lucide-react',
  'Receipt': 'lucide-react',
  'Network': 'lucide-react',
  'Server': 'lucide-react',
  'Activity': 'lucide-react',
  'AlertTriangle': 'lucide-react',
  'Truck': 'lucide-react',
  'Rocket': 'lucide-react',
  'WebIcon': 'lucide-react'
};

// Common missing variables that need to be defined
const commonVariables = {
  'stats': `const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" }
  ];`,
  'testimonials': `const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions.",
      avatar: "/images/testimonials/john-smith.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO, InnovateLabs",
      content: "The team's expertise in AI and automation is unmatched.",
      avatar: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      name: "Mike Chen",
      role: "Founder, StartupXYZ",
      content: "We saw immediate results after implementing their solutions.",
      avatar: "/images/testimonials/mike-chen.jpg"
    }
  ];`,
  'benefits': `const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];`
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if it's a React component file
    if (!filePath.includes('.tsx') && !filePath.includes('.jsx')) {
      return;
    }

    // Find existing lucide-react import
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    
    if (lucideImportMatch) {
      const existingImports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const missingImports = [];
      
      // Check which common imports are missing
      for (const [importName, source] of Object.entries(commonImports)) {
        if (source === 'lucide-react' && !existingImports.includes(importName)) {
          // Check if the import is actually used in the file
          if (content.includes(importName)) {
            missingImports.push(importName);
          }
        }
      }
      
      if (missingImports.length > 0) {
        const newImports = [...existingImports, ...missingImports].join(', ');
        content = content.replace(
          lucideImportMatch[0],
          `import { ${newImports} } from 'lucide-react'`
        );
        modified = true;
      }
    } else {
      // No lucide-react import exists, check if we need to add one
      const neededImports = [];
      for (const [importName, source] of Object.entries(commonImports)) {
        if (source === 'lucide-react' && content.includes(importName)) {
          neededImports.push(importName);
        }
      }
      
      if (neededImports.length > 0) {
        // Add import after React import
        const reactImportMatch = content.match(/import\s+React[^;]+;/);
        if (reactImportMatch) {
          content = content.replace(
            reactImportMatch[0],
            `${reactImportMatch[0]}\nimport { ${neededImports.join(', ')} } from 'lucide-react';`
          );
          modified = true;
        }
      }
    }

    // Add missing variables
    for (const [varName, varDefinition] of Object.entries(commonVariables)) {
      if (content.includes(varName) && !content.includes(`const ${varName}`)) {
        // Find a good place to add the variable (after the component definition but before return)
        const componentMatch = content.match(/(const\s+\w+\s*[=:]\s*\([^)]*\)\s*=>\s*{)/);
        if (componentMatch) {
          const insertPoint = componentMatch.index + componentMatch[0].length;
          content = content.slice(0, insertPoint) + '\n  ' + varDefinition + '\n' + content.slice(insertPoint);
          modified = true;
        }
      }
    }

    // Fix GlobeIcon reference
    if (content.includes('GlobeIcon') && !content.includes('GlobeIcon')) {
      content = content.replace(/GlobeIcon/g, 'Globe');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all React component files
const files = glob.sync('app/**/*.{tsx,jsx}', { ignore: ['node_modules/**', 'dist/**', '.next/**'] });

console.log(`Found ${files.length} files to check...`);

files.forEach(fixFile);

console.log('Done fixing common errors!');