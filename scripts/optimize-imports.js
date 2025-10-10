#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting comprehensive import optimization...');

// Files to optimize
const filesToOptimize = [
  'src/page.tsx',
  'src/services/page.tsx',
  'src/it-services/page.tsx',
  'src/micro-saas/page.tsx',
  'app/ai-services/page.tsx',
  'app/web-development/page.tsx'
];

// Icons that are actually used in the main page
const usedIcons = [
  'Phone', 'Mail', 'MapPin', 'Zap', 'Shield', 'Brain', 'Cpu', 'BarChart',
  'MessageSquare', 'Eye', 'CheckCircle', 'Database', 'Cloud', 'Code', 'Smartphone',
  'Settings', 'DollarSign', 'Truck', 'Link', 'HardDrive', 'FileCheck', 'Clock',
  'Star', 'Globe', 'Target', 'Sparkles', 'ArrowRight', 'TrendingUp', 'Users',
  'Award', 'Lock', 'FileText', 'Search', 'Bot', 'Palette', 'Camera', 'Music',
  'Video', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Building', 'Factory',
  'Car', 'Plane', 'Ship', 'Train', 'Home', 'Heart', 'Stethoscope', 'GraduationCap',
  'Briefcase', 'Wrench', 'Hammer', 'Paintbrush', 'Scissors', 'BookOpen',
  'Calculator', 'Calendar', 'Clock3', 'Compass', 'PieChart', 'TrendingDown',
  'Activity', 'Atom', 'Zap as Lightning', 'Target as Crosshair', 'Shield as Security',
  'Users as People', 'Star as StarIcon', 'CheckCircle as Check', 'ArrowRight as Arrow',
  'Phone as PhoneIcon', 'Mail as MailIcon', 'MapPin as Location', 'Mic', 'Rocket',
  'Microscope', 'Layers', 'Database as DbIcon', 'Server', 'Network', 'Cpu as Processor',
  'Wifi', 'Monitor', 'Keyboard', 'Mouse', 'Headphones', 'Printer', 'Router',
  'RotateCcw', 'RefreshCw', 'Move', 'HelpCircle', 'ShieldCheck', 'TestTube',
  'BarChart3', 'Bell', 'FileBarChart', 'LayoutDashboard'
];

function optimizeImports(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  console.log(`📝 Optimizing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find lucide-react import
  const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const match = lucideImportRegex.exec(content);
  
  if (match) {
    const currentImports = match[1].split(',').map(imp => imp.trim());
    const usedImports = currentImports.filter(imp => {
      const cleanImp = imp.split(' as ')[0].trim();
      return usedIcons.includes(imp.trim()) || usedIcons.includes(cleanImp);
    });
    
    if (usedImports.length !== currentImports.length) {
      const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
      content = content.replace(match[0], newImport);
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Optimized imports in ${filePath} (removed ${currentImports.length - usedImports.length} unused imports)`);
    } else {
      console.log(`ℹ️  No unused imports found in ${filePath}`);
    }
  }
}

// Optimize each file
filesToOptimize.forEach(optimizeImports);

console.log('🎉 Import optimization completed!');

// Run build to verify everything still works
console.log('🔨 Running build verification...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful after optimization!');
} catch (error) {
  console.error('❌ Build failed after optimization:', error.message);
  process.exit(1);
}