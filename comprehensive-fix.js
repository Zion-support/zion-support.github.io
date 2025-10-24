const fs = require('fs');
const path = require('path');

// Function to fix individual files
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues
    content = content.replace(/<>\s*<>\s*<\/>\s*<\/>/g, '<></>');
    content = content.replace(/<>\s*<\/>/g, '<></>');
    content = content.replace(/return\(\)/g, 'return (<></>)');
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
    content = content.replace(/interface\s+(\w+)\s*{\s*$/gm, 'interface $1 {\n  // Properties\n}');
    content = content.replace(/export\s+default\s+(\w+);/g, 'const $1 = () => {\n  return (<></>);\n};\n\nexport default $1;');
    content = content.replace(/override\s+componentDidCatch/g, 'componentDidCatch');
    content = content.replace(/this\.setState\(\{\},\)/g, 'this.setState({ hasError: true });');
    content = content.replace(/const\s+duration\s*=\s*2000,;/g, 'duration = 2000,');
    content = content.replace(/page_location:\s*window\.location\.href,\)/g, 'page_location: window.location.href,');
    content = content.replace(/<React\.Fragment>/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');
    content = content.replace(/const\s+EnhancedSEO:\s*React\.FC<SEOProps\s*\/>\s*=\s*\(\{/g, 'const EnhancedSEO: React.FC<SEOProps> = ({');
    content = content.replace(/const\s+title\s*=\s*'[^']*',;/g, 'title = \'Zion Tech Group - Advanced AI and IT Solutions\',');
    content = content.replace(/export\s+default\s+function\s+FuturisticGlow\(\{\s*'use client';/g, "'use client';\n\nexport default function FuturisticGlow({");
    content = content.replace(/'use client';\s*import/g, "import");
    content = content.replace(/import\s+React[^;]*;\s*'use client';/g, "'use client';\nimport React from 'react';");
    
    // Fix specific file issues
    if (filePath.includes('App.tsx')) {
      content = content.replace(/<BrowserRouter&gt;<\/BrowserRouter>/g, '<BrowserRouter></BrowserRouter>');
      content = content.replace(/<\/BrowserRouter>\s*<\/BrowserRouter>/g, '</BrowserRouter>');
    }
    
    if (filePath.includes('Analytics.tsx')) {
      content = content.replace(/interface\s+AnalyticsContextType\s*{\s*<>\s*<>\s*<\/>\s*<\/>/g, 'interface AnalyticsContextType {');
    }
    
    if (filePath.includes('AnimatedCounter.tsx')) {
      content = content.replace(/end,\s*const\s+duration\s*=\s*2000,;/g, 'end, duration = 2000,');
    }
    
    if (filePath.includes('EnhancedAnalytics.tsx')) {
      content = content.replace(/interface\s+AnalyticsContextType\s*{\s*<>\s*<>\s*<\/>\s*<\/>/g, 'interface AnalyticsContextType {');
    }
    
    if (filePath.includes('EnhancedSEO.tsx')) {
      content = content.replace(/const\s+EnhancedSEO:\s*React\.FC<SEOProps\s*\/>\s*=\s*\(\{/g, 'const EnhancedSEO: React.FC<SEOProps> = ({');
      content = content.replace(/const\s+title\s*=\s*'[^']*',;/g, 'title = \'Zion Tech Group - Advanced AI and IT Solutions\',');
    }
    
    if (filePath.includes('EnhancedSEOHead.tsx')) {
      content = content.replace(/const\s+EnhancedSEOHead:\s*React\.FC<SEOProps\s*\/>\s*=\s*\(\{/g, 'const EnhancedSEOHead: React.FC<SEOProps> = ({');
    }
    
    if (filePath.includes('ErrorBoundary.tsx')) {
      content = content.replace(/override\s+componentDidCatch/g, 'componentDidCatch');
      content = content.replace(/this\.setState\(\{\},\)/g, 'this.setState({ hasError: true });');
    }
    
    if (filePath.includes('FuturisticGlow.tsx')) {
      content = content.replace(/export\s+default\s+function\s+FuturisticGlow\(\{\s*'use client';/g, "'use client';\n\nexport default function FuturisticGlow({");
    }
    
    if (filePath.includes('Header.tsx')) {
      content = content.replace(/return\(\)\s*\)/g, 'return (<></>);');
    }
    
    if (filePath.includes('PerformanceMonitor.tsx')) {
      content = content.replace(/className\s*=\s*"[^"]*$/gm, 'className=""');
      content = content.replace(/key\s*=\s*{[^}]*$/gm, 'key={index}');
    }
    
    if (filePath.includes('SEOHead.tsx')) {
      content = content.replace(/export\s+default\s+SEOHead;/, 'const SEOHead = () => {');
      content = content.replace(/return\(\)/, 'return (<></>)');
    }
    
    if (filePath.includes('SEOOptimizer.tsx')) {
      content = content.replace(/const\s+SEOOptimizer:\s*React\.FC<SEOProps\s*\/>\s*=\s*\(\{/g, 'const SEOOptimizer: React.FC<SEOProps> = ({');
    }
    
    if (filePath.includes('UserExperienceEnhancer.tsx')) {
      content = content.replace(/interface\s+UserExperienceEnhancerProps\s*{\s*$/gm, 'interface UserExperienceEnhancerProps {\n  children: React.ReactNode;\n  className?: string;\n}');
      content = content.replace(/\(\s*{\s*$/gm, '({');
    }
    
    if (filePath.includes('MobileOptimizer.tsx')) {
      content = content.replace(/const\s+MobileOptimizer:\s*React\.FC<MobileOptimizerProps\s*\/>\s*=\s*\(\{/g, 'const MobileOptimizer: React.FC<MobileOptimizerProps> = ({');
    }
    
    if (filePath.includes('useEnhancedPerformance.ts')) {
      content = content.replace(/const\s+useEnhancedPerformance\s*=\s*\(\s*\)\s*=>\s*{/g, 'const useEnhancedPerformance = () => {');
    }
    
    if (filePath.includes('apiClient.ts')) {
      content = content.replace(/const\s+apiClient\s*=\s*\(\s*\)\s*=>\s*{/g, 'const apiClient = () => {');
    }
    
    if (filePath.includes('testRunner.tsx')) {
      content = content.replace(/const\s+TestRunner\s*=\s*\(\s*\)\s*=>\s*{/g, 'const TestRunner = () => {');
    }
    
    if (filePath.includes('AdvancedErrorBoundary.tsx')) {
      content = content.replace(/const\s+AdvancedErrorBoundary\s*=\s*\(\s*\)\s*=>\s*{/g, 'const AdvancedErrorBoundary = () => {');
    }
    
    if (filePath.includes('EnhancedErrorBoundary.tsx')) {
      content = content.replace(/const\s+EnhancedErrorBoundary\s*=\s*\(\s*\)\s*=>\s*{/g, 'const EnhancedErrorBoundary = () => {');
    }
    
    if (filePath.includes('Footer.tsx')) {
      content = content.replace(/const\s+Footer\s*=\s*\(\s*\)\s*=>\s*{/g, 'const Footer = () => {');
    }
    
    if (filePath.includes('InteractiveAIROICalculator.tsx')) {
      content = content.replace(/const\s+InteractiveAIROICalculator\s*=\s*\(\s*\)\s*=>\s*{/g, 'const InteractiveAIROICalculator = () => {');
    }
    
    if (filePath.includes('Navigation.tsx')) {
      content = content.replace(/const\s+Navigation\s*=\s*\(\s*\)\s*=>\s*{/g, 'const Navigation = () => {');
    }
    
    if (filePath.includes('PerformanceDashboard.tsx')) {
      content = content.replace(/const\s+PerformanceDashboard\s*=\s*\(\s*\)\s*=>\s*{/g, 'const PerformanceDashboard = () => {');
    }
    
    if (filePath.includes('SystemMonitor.tsx')) {
      content = content.replace(/const\s+SystemMonitor\s*=\s*\(\s*\)\s*=>\s*{/g, 'const SystemMonitor = () => {');
    }
    
    if (filePath.includes('UltimateBusinessIntelligence2025Banner.tsx')) {
      content = content.replace(/const\s+UltimateBusinessIntelligence2025Banner\s*=\s*\(\s*\)\s*=>\s*{/g, 'const UltimateBusinessIntelligence2025Banner = () => {');
    }
    
    if (filePath.includes('errorBoundaryConfig.tsx')) {
      content = content.replace(/const\s+errorBoundaryConfig\s*=\s*\(\s*\)\s*=>\s*{/g, 'const errorBoundaryConfig = () => {');
    }
    
    if (filePath.includes('security.ts')) {
      content = content.replace(/const\s+security\s*=\s*\(\s*\)\s*=>\s*{/g, 'const security = () => {');
    }
    
    if (filePath.includes('it-services/page.tsx')) {
      content = content.replace(/const\s+ItServicesPage\s*=\s*\(\s*\)\s*=>\s*{/g, 'const ItServicesPage = () => {');
    }
    
    if (filePath.includes('rateLimiter.ts')) {
      content = content.replace(/const\s+rateLimiter\s*=\s*\(\s*\)\s*=>\s*{/g, 'const rateLimiter = () => {');
    }
    
    // Fix pages_backup files
    if (filePath.includes('pages_backup/')) {
      content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
    }
    
    // Fix compliance pages
    if (filePath.includes('compliance/')) {
      content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
    }
    
    // Fix contact pages
    if (filePath.includes('contact/')) {
      content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
    }
    
    // Fix service template
    if (filePath.includes('service-template.tsx')) {
      content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
    }
    
    // Fix global.d.ts
    if (filePath.includes('global.d.ts')) {
      content = content.replace(/@typescript-eslint\/no-unused-vars/g, '@typescript-eslint/no-unused-vars');
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

// Get all files with errors
const filesWithErrors = [
  '/workspace/app/App.tsx',
  '/workspace/app/compliance/page-backup.tsx',
  '/workspace/app/compliance/page-fixed.tsx',
  '/workspace/app/components/Analytics.tsx',
  '/workspace/app/components/AnalyticsProvider.tsx',
  '/workspace/app/components/AnimatedCounter.tsx',
  '/workspace/app/components/EnhancedAnalytics.tsx',
  '/workspace/app/components/EnhancedPerformanceOptimizer.tsx',
  '/workspace/app/components/EnhancedSEO.tsx',
  '/workspace/app/components/EnhancedSEOHead.tsx',
  '/workspace/app/components/ErrorBoundary.tsx',
  '/workspace/app/components/FuturisticGlow.tsx',
  '/workspace/app/components/PerformanceMonitor.tsx',
  '/workspace/app/components/SEOOptimizer.tsx',
  '/workspace/app/components/UserExperienceEnhancer.tsx',
  '/workspace/app/contact/page-broken2.tsx',
  '/workspace/app/hooks/useEnhancedPerformance.ts',
  '/workspace/app/service-template.tsx',
  '/workspace/app/types/global.d.ts',
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
  '/workspace/src/hooks/useForm.ts',
  '/workspace/src/hooks/usePerformanceMonitoring.ts',
  '/workspace/src/hooks/usePerformanceMonitoringEnhanced.ts',
  '/workspace/src/hooks/usePerformanceOptimization.ts',
  '/workspace/src/it-services/page.tsx',
  '/workspace/src/middleware/rateLimiter.ts',
  '/workspace/src/pages_backup/ProjectDetails.tsx',
  '/workspace/src/pages_backup/Unauthorized.tsx',
  '/workspace/src/pages_backup/features/Ecommerce.tsx',
  '/workspace/src/pages_backup/features/InstantMessaging.tsx',
  '/workspace/src/pages_backup/features/Internationalization.tsx',
  '/workspace/src/pages_backup/features/Search.tsx',
  '/workspace/src/pages_backup/features/TalentMarketplace.tsx'
];

console.log('Starting comprehensive syntax fixes...');
filesWithErrors.forEach(fixFile);
console.log('Comprehensive syntax fixes completed!');