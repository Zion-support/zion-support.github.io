const fs = require('fs');
const path = require('path');

// List of files with unused imports/variables
const filesToFix = [
  'App_clean.tsx',
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-space-mission-optimizer/page.tsx',
  'app/ai-voice-cloning-studio/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx',
  'app/components/EnhancedPerformanceMonitor.tsx',
  'app/components/Footer.tsx',
  'app/components/ImprovedFooter.tsx',
  'app/components/ImprovedImage.tsx',
  'app/components/Navigation.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/consultation/page.tsx',
  'app/custom-development/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/devops-services/page.tsx',
  'app/layout.tsx',
  'app/micro-saas-services/page.tsx',
  'app/page.tsx',
  'app/partners/page.tsx',
  'app/quantum-computing-solutions/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/smart-inventory-optimizer/page.tsx',
  'app/software-development/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-cybersecurity-suite-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx'
];

function removeUnusedImports(content) {
  // Remove unused imports from lucide-react
  const lucideImports = [
    'Zap', 'Clock', 'Award', 'Target', 'TrendingUp', 'Cpu', 'Database', 'Globe', 'Mic', 'Layers', 'Box',
    'Brain', 'Shield', 'Star', 'Users', 'ArrowRight', 'Pause', 'Download', 'Upload', 'CheckCircle',
    'BarChart3', 'Server', 'Network', 'Lock', 'Settings', 'Cloud', 'Calendar', 'Rocket', 'Code', 'WebIcon',
    'Monitor', 'Phone', 'MapPin', 'Package', 'Heart', 'Receipt', 'FileText', 'PieChart', 'Hand',
    'AlertTriangle', 'DollarSign', 'Truck', 'Mail', 'Headphones', 'MessageSquare', 'Share2', 'Search',
    'Filter', 'Edit', 'Trash2', 'Plus', 'Minus', 'Play', 'Stop', 'Volume2', 'VolumeX', 'Wifi', 'WifiOff',
    'Signal', 'Bluetooth'
  ];
  
  // Remove unused React Router imports
  const routerImports = ['Link'];
  
  // Remove unused React Helmet imports
  const helmetImports = ['Helmet'];
  
  // Remove unused component imports
  const componentImports = [
    'LoadingPageEnhanced', 'PerformanceOptimizer', 'EnhancedSEO', 'FuturisticCard', 'FuturisticText',
    'ResponsiveGrid', 'ResponsiveText', 'MobileNavigation'
  ];
  
  // Process each file
  filesToFix.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove unused imports from lucide-react
      lucideImports.forEach(importName => {
        // Remove from import statement
        content = content.replace(new RegExp(`\\s*${importName}\\s*,?`, 'g'), '');
        // Clean up empty import lines
        content = content.replace(/import\s*{\s*}\s*from\s*['"]lucide-react['"];?\s*\n?/g, '');
        // Clean up trailing commas in imports
        content = content.replace(/,\s*}/g, '}');
      });
      
      // Remove unused React Router imports
      routerImports.forEach(importName => {
        content = content.replace(new RegExp(`\\s*${importName}\\s*,?`, 'g'), '');
        content = content.replace(/import\s*{\s*}\s*from\s*['"]react-router-dom['"];?\s*\n?/g, '');
        content = content.replace(/,\s*}/g, '}');
      });
      
      // Remove unused React Helmet imports
      helmetImports.forEach(importName => {
        content = content.replace(new RegExp(`\\s*${importName}\\s*,?`, 'g'), '');
        content = content.replace(/import\s*{\s*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
        content = content.replace(/,\s*}/g, '}');
      });
      
      // Remove unused component imports
      componentImports.forEach(importName => {
        content = content.replace(new RegExp(`\\s*${importName}\\s*,?`, 'g'), '');
        content = content.replace(/,\s*}/g, '}');
      });
      
      // Remove unused variables
      content = content.replace(/const\s+quality\s*=\s*[^;]+;?\s*\n?/g, '');
      content = content.replace(/const\s+isOptimized\s*=\s*[^;]+;?\s*\n?/g, '');
      content = content.replace(/const\s+toggleDropdown\s*=\s*[^;]+;?\s*\n?/g, '');
      content = content.replace(/const\s+structuredData\s*=\s*[^;]+;?\s*\n?/g, '');
      content = content.replace(/const\s+partners\s*=\s*[^;]+;?\s*\n?/g, '');
      content = content.replace(/const\s+tiers\s*=\s*[^;]+;?\s*\n?/g, '');
      content = content.replace(/const\s+selectedPlan\s*=\s*[^;]+;?\s*\n?/g, '');
      content = content.replace(/const\s+setSelectedPlan\s*=\s*[^;]+;?\s*\n?/g, '');
      content = content.replace(/const\s+error\s*=\s*[^;]+;?\s*\n?/g, '');
      
      // Clean up empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  });
}

// Run the fix
removeUnusedImports();
console.log('Unused imports and variables removed successfully!');