const fs = require('fs');
const path = require('path');

// Files to fix with their unused imports
const fixes = [
  {
    file: 'app/components/AdvancedPerformanceMonitor.tsx',
    remove: ['reportMetric']
  },
  {
    file: 'app/components/CoreWebVitals.tsx',
    remove: ['useEffect', 'onCLS', 'onINP', 'onFCP', 'onLCP', 'onTTFB']
  },
  {
    file: 'app/components/FuturisticButtonEnhanced.tsx',
    remove: ['glowColors', 'rippleVariants']
  },
  {
    file: 'app/components/ImprovedFooter.tsx',
    remove: ['Cloud']
  },
  {
    file: 'app/components/ImprovedImage.tsx',
    remove: ['quality']
  },
  {
    file: 'app/components/Navigation.tsx',
    remove: ['onSidebarToggle']
  },
  {
    file: 'app/components/PerformanceOptimizer.tsx',
    remove: ['isOptimized']
  },
  {
    file: 'app/consultation/page.tsx',
    remove: ['Link']
  },
  {
    file: 'app/custom-development/page.tsx',
    remove: ['Phone']
  },
  {
    file: 'app/it-services/page.tsx',
    remove: ['Minimize', 'StarIcon', 'categories', 'stats', 'testimonials']
  },
  {
    file: 'app/layout.tsx',
    remove: ['Link', 'MobileNavigation']
  },
  {
    file: 'app/micro-saas-services/page.tsx',
    remove: ['Shield', 'Cloud', 'Calendar', 'Code', 'WebIcon']
  },
  {
    file: 'app/micro-saas/page.tsx',
    remove: ['Star', 'Award', 'Clock', 'Smartphone', 'Grid']
  },
  {
    file: 'app/page.tsx',
    remove: ['FuturisticButton', 'FuturisticText', 'FuturisticBackgroundEnhanced', 'FuturisticCardEnhanced', 'ResponsiveGrid', 'ResponsiveText', 'LazyImage', 'EnhancedLoadingSpinner']
  },
  {
    file: 'app/partners/page.tsx',
    remove: ['Link', 'partners', 'benefits', 'tiers']
  },
  {
    file: 'app/zion-ai-analytics-pro/page.tsx',
    remove: ['Users', 'Cloud', 'Watch']
  },
  {
    file: 'app/zion-ai-crm-pro/page.tsx',
    remove: ['Watch', 'Video']
  },
  {
    file: 'app/zion-ai-customer-insights/page.tsx',
    remove: ['selectedPlan', 'setSelectedPlan']
  },
  {
    file: 'app/zion-ai-cybersecurity-suite-pro/page.tsx',
    remove: ['Link']
  },
  {
    file: 'app/zion-ai-document-analyzer/page.tsx',
    remove: ['Link']
  },
  {
    file: 'app/zion-ai-email-analyzer/page.tsx',
    remove: ['Share', 'selectedPlan', 'setSelectedPlan']
  },
  {
    file: 'app/zion-ai-invoice-generator/page.tsx',
    remove: ['selectedPlan', 'setSelectedPlan']
  },
  {
    file: 'app/zion-ai-marketing-automation-pro/page.tsx',
    remove: ['StarIcon', 'ZapIcon', 'StarIcon2', 'Growth', 'Success', 'Address']
  },
  {
    file: 'app/zion-ai-project-manager-pro/page.tsx',
    remove: ['Link']
  },
  {
    file: 'app/zion-ai-video-generator/page.tsx',
    remove: ['selectedPlan', 'setSelectedPlan']
  },
  {
    file: 'app/zion-ai-voice-assistant-pro/page.tsx',
    remove: ['StarIcon']
  },
  {
    file: 'app/zion-analytics-pro/page.tsx',
    remove: ['StarIcon', 'benefits']
  },
  {
    file: 'app/zion-smart-inventory-optimizer/page.tsx',
    remove: ['Minimize', 'selectedPlan', 'setSelectedPlan']
  }
];

// Function to remove unused imports and variables
function fixFile(filePath, itemsToRemove) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports
    itemsToRemove.forEach(item => {
      // Remove from import statements
      const importRegex = new RegExp(`\\b${item}\\b,?\\s*`, 'g');
      content = content.replace(importRegex, '');
      
      // Remove variable declarations
      const varRegex = new RegExp(`\\s*const\\s+${item}\\s*=.*?;\\s*`, 'gs');
      content = content.replace(varRegex, '');
      
      // Remove let/var declarations
      const letVarRegex = new RegExp(`\\s*(let|var)\\s+${item}\\s*=.*?;\\s*`, 'gs');
      content = content.replace(letVarRegex, '');
    });
    
    // Clean up empty import lines
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    content = content.replace(/import\s*{\s*,?\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    
    // Clean up trailing commas in imports
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/{\s*,/g, '{');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Apply fixes
fixes.forEach(fix => {
  const fullPath = path.join(__dirname, fix.file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath, fix.remove);
  } else {
    console.log(`File not found: ${fix.file}`);
  }
});

console.log('Done fixing unused imports and variables');