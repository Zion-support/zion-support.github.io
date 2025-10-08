#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files to fix based on lint output
const filesToFix = [
  'EnhancedFooter.tsx',
  'app/App.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/blockchain/page.tsx',
  'app/blog/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/components/AdvancedErrorBoundary.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentNewsletterSignup.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/ImprovedErrorBoundary.tsx',
  'app/components/InteractiveAIROICalculator.tsx',
  'app/components/Navigation.tsx',
  'app/components/OptimizedLoadingSpinner.tsx',
  'app/components/PWAInstaller.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/components/SystemMonitor.tsx',
  'app/components/Toast.tsx',
  'app/components/UltimateBusinessIntelligence2025Banner.tsx',
  'app/config/appConfig.ts',
  'app/config/errorBoundaryConfig.tsx',
  'app/config/security.ts',
  'app/hooks/useEnhancedPerformance.ts'
];

console.log('Starting lint warning fixes...');

// Function to remove unused imports
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused lucide-react imports
    const lucideImports = [
      'Star', 'Users', 'Globe', 'Cloud', 'Server', 'Database', 'Lock', 'Shield', 
      'Clock', 'TrendingUp', 'Zap', 'ShoppingCart', 'CreditCard', 'Package',
      'Eye', 'Target', 'BarChart', 'Settings', 'Brain'
    ];

    lucideImports.forEach(icon => {
      const regex = new RegExp(`import\\s*{[^}]*\\b${icon}\\b[^}]*}\\s*from\\s*['"]lucide-react['"];?`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    // Remove unused variable declarations
    const unusedVars = [
      '_currentYear', '_ContentShowcase', 'InteractiveContentShowcase2026',
      'InteractiveAIROICalculator', 'performanceMetrics', '_categories',
      '_featuredPosts', '_regularPosts', '_sessionId', '_currentItem',
      '_err', '_banner', '_isDevelopment', '_array', '_keys',
      '_annualSavings', '_totalSavings', '_roi', '_baseClasses',
      '_fullScreenClasses', '_renderStart', '_renderTime', '_memoryUsage',
      '_memory', '_fps', '_lastTime', '_frameCount', '_interval',
      '_collectPerformanceMetrics', '_navigation', '_paint', '_metrics',
      '_score', '_performanceMetrics', '_performanceScore', '_errorStats',
      '_memoryInfo', '_networkInfo', '_url', '_a', 'handleClose',
      '_currentContent', '_mountTimeRef'
    ];

    unusedVars.forEach(varName => {
      const regex = new RegExp(`\\s*const\\s+${varName}\\s*=.*?;\\s*`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports/variables in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process each file
filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    removeUnusedImports(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Lint warning fixes completed!');