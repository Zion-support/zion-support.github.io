#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to remove unused variables and console statements
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused variables that start with underscore
    const unusedVarPattern = /const _[a-zA-Z][a-zA-Z0-9]* = [^;]+;/g;
    const newContent1 = content.replace(unusedVarPattern, '');
    if (newContent1 !== content) {
      content = newContent1;
      modified = true;
    }
    
    // Remove console statements
    const consolePattern = /console\.(log|warn|error|info)\([^)]*\);/g;
    const newContent2 = content.replace(consolePattern, '');
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
    }
    
    // Remove unused parameters in catch blocks
    const catchPattern = /catch\s*\(\s*_\w*\s*\)/g;
    const newContent3 = content.replace(catchPattern, 'catch');
    if (newContent3 !== content) {
      content = newContent3;
      modified = true;
    }
    
    // Remove unused parameters in map functions
    const mapPattern = /\.map\(\([^,)]*,\s*_\w*\s*\)/g;
    const newContent4 = content.replace(mapPattern, (match) => {
      return match.replace(/,\s*_\w*\s*/, '');
    });
    if (newContent4 !== content) {
      content = newContent4;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Files to fix
const filesToFix = [
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/components/ContentNewsletterSignup.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/InteractiveAIROICalculator.tsx',
  'app/components/OptimizedLoadingSpinner.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/components/SystemMonitor.tsx',
  'app/components/UltimateBusinessIntelligence2025Banner.tsx',
  'app/config/appConfig.ts',
  'app/config/errorBoundaryConfig.tsx',
  'app/config/security.ts',
  'app/hooks/useEnhancedPerformance.ts',
  'app/hooks/useErrorMonitoring.ts',
  'app/hooks/useForm.ts',
  'app/hooks/usePerformance.ts',
  'app/hooks/usePerformanceMonitoring.ts',
  'app/hooks/usePerformanceMonitoringEnhanced.ts',
  'app/hooks/usePerformanceOptimization.ts',
  'app/main.tsx',
  'app/middleware/rateLimiter.ts'
];

// Apply fixes
filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    fixFile(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Component fixes completed!');