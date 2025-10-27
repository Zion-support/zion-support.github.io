#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting final linting error fixes...');

// Function to fix final linting issues
function fixFinalIssues(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix about page import issues
  if (filePath.includes('about/page.tsx')) {
    // Remove unused Circle import
    if (fixed.includes("import { Circle, CheckCircle, Users, Target, Award, ArrowRight } from 'lucide-react';")) {
      fixed = fixed.replace("import { Circle, CheckCircle, Users, Target, Award, ArrowRight } from 'lucide-react';", "import { CheckCircle, Users, Target, Award, ArrowRight } from 'lucide-react';");
      changes++;
    }
  }

  // Fix unused imports in specific files
  const filesWithUnusedImports = [
    '5g-data-analytics/page.tsx',
    '5g-edge-computing/page.tsx', 
    '5g-implementation/page.tsx',
    '5g-iot-solutions/page.tsx',
    'accessibility-page/page.tsx'
  ];

  if (filesWithUnusedImports.some(file => filePath.includes(file))) {
    // Remove unused Link and ArrowRight imports
    if (fixed.includes("import Link from 'next/link';") && !fixed.includes('<Link')) {
      fixed = fixed.replace(/import Link from 'next\/link';\s*\n?/g, '');
      changes++;
    }
    if (fixed.includes("import { ArrowRight } from 'lucide-react'") && !fixed.includes('ArrowRight')) {
      fixed = fixed.replace(/import { ArrowRight } from 'lucide-react';\s*\n?/g, '');
      changes++;
    }
  }

  // Fix files with multiple unused icon imports
  const filesWithMultipleUnusedIcons = [
    'ai-powered-devops/page.tsx',
    'ai-powered-email-analyzer/page.tsx',
    'ecommerce-analytics-pro/page.tsx'
  ];

  if (filesWithMultipleUnusedIcons.some(file => filePath.includes(file))) {
    // Remove the entire unused import line
    if (fixed.includes("import { Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Check } from 'lucide-react';")) {
      fixed = fixed.replace(/import { Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Check } from 'lucide-react';\s*\n?/g, '');
      changes++;
    }
  }

  // Fix component files with unused props
  const componentFiles = [
    'AccessibilityComponents.tsx',
    'AdvancedAccessibilityEnhancer.tsx',
    'AdvancedPerformanceMonitor.tsx',
    'AdvancedPerformanceOptimizer.tsx',
    'AnalyticsProvider.tsx',
    'ContentCarousel.tsx',
    'ContentNewsletterSignup.tsx',
    'ContentStatistics.tsx',
    'EnhancedSEO.tsx',
    'GlobalErrorBoundary.tsx',
    'Header.tsx',
    'ImageOptimizer.tsx',
    'NotFoundPage.tsx',
    'PerformanceImage.tsx',
    'SEOOptimizer.tsx',
    'ServicePageTemplate.tsx',
    'ServiceWorkerRegistration.tsx',
    'SystemMonitor.tsx'
  ];

  if (componentFiles.some(file => filePath.includes(file))) {
    // Remove unused props interfaces
    const propInterfaceRegex = /interface\s+(\w+Props)\s*\{[^}]*\}\s*\n?/g;
    const matches = [...fixed.matchAll(propInterfaceRegex)];
    matches.forEach(match => {
      const typeName = match[1];
      if (typeName && !fixed.includes(typeName)) {
        fixed = fixed.replace(match[0], '');
        changes++;
      }
    });

    // Add missing React imports
    if (fixed.includes('<') && !fixed.includes('import React')) {
      fixed = "import React from 'react';\n" + fixed;
      changes++;
    }
  }

  // Fix Footer component unused imports
  if (filePath.includes('Footer.tsx')) {
    if (fixed.includes("import { ArrowRight, Cloud } from 'lucide-react'") && !fixed.includes('ArrowRight') && !fixed.includes('Cloud')) {
      fixed = fixed.replace(/import { ArrowRight, Cloud } from 'lucide-react';\s*\n?/g, '');
      changes++;
    }
  }

  // Fix Navigation component unused imports
  if (filePath.includes('Navigation.tsx')) {
    if (fixed.includes("import { Search, ArrowLeft, RefreshCw } from 'lucide-react'") && !fixed.includes('Search') && !fixed.includes('ArrowLeft') && !fixed.includes('RefreshCw')) {
      fixed = fixed.replace(/import { Search, ArrowLeft, RefreshCw } from 'lucide-react';\s*\n?/g, '');
      changes++;
    }
  }

  // Fix InteractiveAIROICalculator component
  if (filePath.includes('InteractiveAIROICalculator.tsx')) {
    // Fix state variable declarations
    if (fixed.includes('const [currentCost, setCurrentCost] = useState(0);') && !fixed.includes('currentCost')) {
      fixed = fixed.replace(/const \[currentCost, setCurrentCost\] = useState\(0\);\s*\n?/g, '');
      changes++;
    }
    if (fixed.includes('const [efficiencyGain, setEfficiencyGain] = useState(0);') && !fixed.includes('efficiencyGain')) {
      fixed = fixed.replace(/const \[efficiencyGain, setEfficiencyGain\] = useState\(0\);\s*\n?/g, '');
      changes++;
    }
    if (fixed.includes('const [timeframe, setTimeframe] = useState(0);') && !fixed.includes('timeframe')) {
      fixed = fixed.replace(/const \[timeframe, setTimeframe\] = useState\(0\);\s*\n?/g, '');
      changes++;
    }

    // Remove unused useState import
    if (fixed.includes("import { useState } from 'react'") && !fixed.includes('useState')) {
      fixed = fixed.replace(/import { useState } from 'react';\s*\n?/g, '');
      changes++;
    }
  }

  // Fix ModernLoader component
  if (filePath.includes('ModernLoader.tsx')) {
    // Fix state variable declarations
    if (fixed.includes('const [showLoader, setShowLoader] = useState(true);') && !fixed.includes('showLoader')) {
      fixed = fixed.replace(/const \[showLoader, setShowLoader\] = useState\(true\);\s*\n?/g, '');
      changes++;
    }

    // Remove unused useState import
    if (fixed.includes("import { useState } from 'react'") && !fixed.includes('useState')) {
      fixed = fixed.replace(/import { useState } from 'react';\s*\n?/g, '');
      changes++;
    }
  }

  // Fix Navigation-backup component
  if (filePath.includes('Navigation-backup.tsx')) {
    // Fix duplicate imports
    if (fixed.includes("import { X, _Menu } from 'lucide-react';")) {
      fixed = fixed.replace(/import { X, _Menu } from 'lucide-react';\s*\n?/g, '');
      changes++;
    }

    // Fix state variable declarations
    if (fixed.includes('const [isMenuOpen, setIsMenuOpen] = useState(false);') && !fixed.includes('isMenuOpen')) {
      fixed = fixed.replace(/const \[isMenuOpen, setIsMenuOpen\] = useState\(false\);\s*\n?/g, '');
      changes++;
    }
    if (fixed.includes('const [activeSubmenu, setActiveSubmenu] = useState(null);') && !fixed.includes('activeSubmenu')) {
      fixed = fixed.replace(/const \[activeSubmenu, setActiveSubmenu\] = useState\(null\);\s*\n?/g, '');
      changes++;
    }

    // Remove unused useState import
    if (fixed.includes("import { useState } from 'react'") && !fixed.includes('useState')) {
      fixed = fixed.replace(/import { useState } from 'react';\s*\n?/g, '');
      changes++;
    }
  }

  // Fix NewsletterSignup component
  if (filePath.includes('NewsletterSignup.tsx')) {
    // Fix state variable declarations
    if (fixed.includes('const [email, setEmail] = useState("");') && !fixed.includes('email')) {
      fixed = fixed.replace(/const \[email, setEmail\] = useState\(""\);\s*\n?/g, '');
      changes++;
    }

    // Remove unused useState import
    if (fixed.includes("import { useState } from 'react'") && !fixed.includes('useState')) {
      fixed = fixed.replace(/import { useState } from 'react';\s*\n?/g, '');
      changes++;
    }
  }

  // Fix accessibilityUtils.ts
  if (filePath.includes('accessibilityUtils.ts')) {
    // Remove unused React and useState imports
    if (fixed.includes("import React, { useState } from 'react'") && !fixed.includes('React') && !fixed.includes('useState')) {
      fixed = fixed.replace(/import React, { useState } from 'react';\s*\n?/g, '');
      changes++;
    }

    // Fix state variable declarations
    if (fixed.includes('const [state, setState] = useState(null);') && !fixed.includes('state')) {
      fixed = fixed.replace(/const \[state, setState\] = useState\(null\);\s*\n?/g, '');
      changes++;
    }
  }

  // Fix appConfig.ts
  if (filePath.includes('appConfig.ts')) {
    // Remove unused React and X imports
    if (fixed.includes("import React from 'react';") && !fixed.includes('React')) {
      fixed = fixed.replace(/import React from 'react';\s*\n?/g, '');
      changes++;
    }
    if (fixed.includes("import { X } from 'lucide-react';") && !fixed.includes('X')) {
      fixed = fixed.replace(/import { X } from 'lucide-react';\s*\n?/g, '');
      changes++;
    }
  }

  // Fix AccessibilityContext.tsx
  if (filePath.includes('AccessibilityContext.tsx')) {
    // Remove unused React import
    if (fixed.includes("import React from 'react';") && !fixed.includes('React')) {
      fixed = fixed.replace(/import React from 'react';\s*\n?/g, '');
      changes++;
    }
  }

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixFinalIssues(content, filePath);
    
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`✅ Fixed ${result.changes} issues in ${filePath}`);
      return result.changes;
    }
    
    return 0;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
try {
  const appDir = path.join(__dirname, 'app');
  const files = findFiles(appDir);
  
  console.log(`📁 Found ${files.length} files to process...`);
  
  let totalChanges = 0;
  let processedFiles = 0;
  
  for (const file of files) {
    const changes = processFile(file);
    totalChanges += changes;
    if (changes > 0) processedFiles++;
  }
  
  console.log(`\n🎉 Final linting fixes completed!`);
  console.log(`📊 Processed ${processedFiles} files with changes`);
  console.log(`🔧 Total fixes applied: ${totalChanges}`);
  
  // Run linter again to check remaining issues
  console.log('\n🔍 Running linter to check remaining issues...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
    console.log('✅ All linting issues resolved!');
  } catch (error) {
    console.log('⚠️  Some linting issues may remain. Check the output above.');
  }
  
} catch (error) {
  console.error('❌ Error during linting fixes:', error.message);
  process.exit(1);
}