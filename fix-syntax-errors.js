const fs = require('fs');
const path = require('path');

// List of files with syntax errors to fix
const filesToFix = [
  '/workspace/app/components/PerformanceMonitor.tsx',
  '/workspace/app/components/UserExperienceEnhancer.tsx',
  '/workspace/app/components/SEOHead.tsx',
  '/workspace/app/components/SEOOptimizer.tsx',
  '/workspace/app/components/MobileOptimizer.tsx',
  '/workspace/app/hooks/useEnhancedPerformance.ts',
  '/workspace/app/utils/apiClient.ts',
  '/workspace/app/utils/testRunner.tsx',
  '/workspace/src/components/AdvancedErrorBoundary.tsx',
  '/workspace/src/components/EnhancedErrorBoundary.tsx',
  '/workspace/src/components/Footer.tsx',
  '/workspace/src/components/InteractiveAIROICalculator.tsx',
  '/workspace/src/components/Navigation.tsx',
  '/workspace/src/components/PerformanceDashboard.tsx',
  '/workspace/src/components/SystemMonitor.tsx',
  '/workspace/src/components/UltimateBusinessIntelligence2025Banner.tsx',
  '/workspace/src/config/errorBoundaryConfig.tsx',
  '/workspace/src/config/security.ts',
  '/workspace/src/it-services/page.tsx',
  '/workspace/src/middleware/rateLimiter.ts'
];

// Common fixes
const commonFixes = [
  // Fix unterminated strings
  { pattern: /className\s*=\s*"[^"]*$/gm, replacement: 'className=""' },
  { pattern: /"[^"]*$/gm, replacement: '""' },
  
  // Fix malformed JSX
  { pattern: /<>\s*<>\s*<\/>\s*<\/>/gm, replacement: '<></>' },
  { pattern: /<>\s*<\/>/gm, replacement: '<></>' },
  
  // Fix function declarations
  { pattern: /return\(\)/gm, replacement: 'return (<></>)' },
  { pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/gm, replacement: 'const $1 = () => {' },
  
  // Fix missing semicolons
  { pattern: /(\w+)\s*=\s*[^;]+$/gm, replacement: '$1;' },
  
  // Fix malformed interfaces
  { pattern: /interface\s+(\w+)\s*{\s*$/gm, replacement: 'interface $1 {\n  // Properties\n}' },
  
  // Fix React imports
  { pattern: /'use client';\s*import/gm, replacement: "import" },
  { pattern: /import\s+React[^;]*;\s*'use client';/gm, replacement: "'use client';\nimport React from 'react';" },
  
  // Fix console statements
  { pattern: /console\.(log|warn|error)\([^)]*\)/gm, replacement: '// $&' },
  
  // Fix malformed props
  { pattern: /:\s*React\.FC<[^>]*>\s*=\s*\(/gm, replacement: ': React.FC<$1> = (' },
  
  // Fix missing closing braces
  { pattern: /}\s*$/gm, replacement: '}\n' }
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply common fixes
    commonFixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Specific fixes for known issues
    if (filePath.includes('PerformanceMonitor.tsx')) {
      content = content.replace(/className\s*=\s*"[^"]*$/gm, 'className=""');
      content = content.replace(/key\s*=\s*{[^}]*$/gm, 'key={index}');
    }
    
    if (filePath.includes('UserExperienceEnhancer.tsx')) {
      content = content.replace(/interface\s+UserExperienceEnhancerProps\s*{\s*$/gm, 'interface UserExperienceEnhancerProps {\n  children: React.ReactNode;\n  className?: string;\n}');
      content = content.replace(/\(\s*{\s*$/gm, '({');
    }
    
    if (filePath.includes('SEOHead.tsx')) {
      content = content.replace(/export\s+default\s+SEOHead;/, 'const SEOHead = () => {');
      content = content.replace(/return\(\)/, 'return (<></>)');
    }
    
    if (filePath.includes('ErrorBoundary')) {
      content = content.replace(/override\s+componentDidCatch/gm, 'componentDidCatch');
      content = content.replace(/this\.setState\(\{\},\)/gm, 'this.setState({ hasError: true });');
    }
    
    if (filePath.includes('Header.tsx')) {
      content = content.replace(/return\(\)\s*\)/gm, 'return (<></>);');
    }
    
    if (filePath.includes('AnimatedCounter.tsx')) {
      content = content.replace(/const\s+duration\s*=\s*2000,;/gm, 'duration = 2000,');
    }
    
    if (filePath.includes('Analytics.tsx')) {
      content = content.replace(/page_location:\s*window\.location\.href,\)/gm, 'page_location: window.location.href,');
    }
    
    if (filePath.includes('EnhancedAccessibility.tsx')) {
      content = content.replace(/<React\.Fragment>/gm, '<>');
      content = content.replace(/<\/React\.Fragment>/gm, '</>');
    }
    
    if (filePath.includes('EnhancedAnalytics.tsx')) {
      content = content.replace(/interface\s+AnalyticsContextType\s*{\s*<>\s*<>\s*<\/>\s*<\/>/gm, 'interface AnalyticsContextType {');
    }
    
    if (filePath.includes('EnhancedSEO.tsx')) {
      content = content.replace(/const\s+EnhancedSEO:\s*React\.FC<SEOProps\s*\/>\s*=\s*\(\{/gm, 'const EnhancedSEO: React.FC<SEOProps> = ({');
      content = content.replace(/const\s+title\s*=\s*'[^']*',;/gm, 'title = \'Zion Tech Group - Advanced AI and IT Solutions\',');
    }
    
    if (filePath.includes('FuturisticGlow.tsx')) {
      content = content.replace(/export\s+default\s+function\s+FuturisticGlow\(\{\s*'use client';/gm, "'use client';\n\nexport default function FuturisticGlow({");
    }
    
    // Write the fixed content back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting syntax error fixes...');
filesToFix.forEach(fixFile);
console.log('Syntax error fixes completed!');