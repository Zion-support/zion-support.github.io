import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔧 Starting TypeScript error fixes...');

// 1. Fix AdvancedSEOOptimizer component props
console.log('📝 Fixing AdvancedSEOOptimizer component...');

const seoOptimizerPath = '/workspace/app/components/AdvancedSEOOptimizer.tsx';
if (fs.existsSync(seoOptimizerPath)) {
    let content = fs.readFileSync(seoOptimizerPath, 'utf8');
    
    // Update the interface to include missing props
    content = content.replace(
        /interface AdvancedSEOOptimizerProps \{[^}]*\}/,
        `interface AdvancedSEOOptimizerProps {
  config?: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
    ogImage: string;
    structuredData?: unknown;
  };
  enableStructuredData?: boolean;
  enableAnalytics?: boolean;
  enablePerformanceTracking?: boolean;
}`
    );
    
    fs.writeFileSync(seoOptimizerPath, content);
    console.log('✅ Fixed AdvancedSEOOptimizer props');
}

// 2. Fix App.tsx SEO component usage
console.log('📝 Fixing App.tsx SEO component usage...');

const appPath = '/workspace/App.tsx';
if (fs.existsSync(appPath)) {
    let content = fs.readFileSync(appPath, 'utf8');
    
    // Fix the AdvancedSEOOptimizer usage
    content = content.replace(
        /enableAnalytics={true}\s+enablePerformanceTracking={true}/,
        'enableAnalytics={true} enablePerformanceTracking={true}'
    );
    
    fs.writeFileSync(appPath, content);
    console.log('✅ Fixed App.tsx SEO component usage');
}

// 3. Fix test files
console.log('📝 Fixing test files...');

// Fix AppMinimal.test.tsx
const appMinimalTestPath = '/workspace/__tests__/AppMinimal.test.tsx';
if (fs.existsSync(appMinimalTestPath)) {
    let content = fs.readFileSync(appMinimalTestPath, 'utf8');
    
    // Replace @jest/globals import
    content = content.replace(
        /import.*@jest\/globals.*/,
        "import { describe, it, expect } from 'jest'"
    );
    
    fs.writeFileSync(appMinimalTestPath, content);
    console.log('✅ Fixed AppMinimal.test.tsx');
}

// Fix advanced-components.test.tsx
const advancedComponentsTestPath = '/workspace/__tests__/advanced-components.test.tsx';
if (fs.existsSync(advancedComponentsTestPath)) {
    let content = fs.readFileSync(advancedComponentsTestPath, 'utf8');
    
    // Update AdvancedSEOOptimizer usage in tests
    content = content.replace(
        /<AdvancedSEOOptimizer\s+config=\{/g,
        '<AdvancedSEOOptimizer config={'
    );
    
    fs.writeFileSync(advancedComponentsTestPath, content);
    console.log('✅ Fixed advanced-components.test.tsx');
}

// 4. Fix blog page metadata issues
console.log('📝 Fixing blog page metadata...');

const blogPages = [
    'app/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
    'app/blog/ai-2026-autonomous-agent-factories/page.tsx',
    'app/blog/ai-2026-autonomous-enterprise-architecture/page.tsx'
];

blogPages.forEach(pagePath => {
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        // Remove the 'type' property from metadata
        content = content.replace(/\s+type: ['"][^'"]*['"],?\s*/g, '');
        
        fs.writeFileSync(pagePath, content);
        console.log(`✅ Fixed ${pagePath}`);
    }
});

// 5. Fix OpenGraph authors issue
console.log('📝 Fixing OpenGraph authors...');

const openGraphPages = [
    'app/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
    'app/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx'
];

openGraphPages.forEach(pagePath => {
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        // Fix authors format
        content = content.replace(
            /authors: \[\s*\{\s*name: ['"][^'"]*['"]\s*\}\s*\]/g,
            "authors: ['Zion Tech Group']"
        );
        
        fs.writeFileSync(pagePath, content);
        console.log(`✅ Fixed ${pagePath}`);
    }
});

// 6. Fix missing Calculator import
console.log('📝 Fixing missing Calculator import...');

const calculatorPagePath = '/workspace/app/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx';
if (fs.existsSync(calculatorPagePath)) {
    let content = fs.readFileSync(calculatorPagePath, 'utf8');
    
    // Replace Calculator with CalculatorIcon
    content = content.replace(
        /import \{ Calculator \}/,
        "import { CalculatorIcon }"
    );
    content = content.replace(
        /<Calculator/g,
        '<CalculatorIcon'
    );
    
    fs.writeFileSync(calculatorPagePath, content);
    console.log('✅ Fixed Calculator import');
}

// 7. Fix dataLayer declaration conflicts
console.log('📝 Fixing dataLayer conflicts...');

const analyticsTrackerPath = '/workspace/app/components/AnalyticsTracker.tsx';
if (fs.existsSync(analyticsTrackerPath)) {
    let content = fs.readFileSync(analyticsTrackerPath, 'utf8');
    
    // Add proper dataLayer declaration
    content = content.replace(
        /declare global \{/,
        `declare global {
  interface Window {
    dataLayer: unknown[];
  }`
    );
    
    fs.writeFileSync(analyticsTrackerPath, content);
    console.log('✅ Fixed dataLayer conflicts');
}

// 8. Fix performanceEnhancer references
console.log('📝 Fixing performanceEnhancer references...');

const systemMonitorPath = '/workspace/app/components/SystemMonitor.tsx';
if (fs.existsSync(systemMonitorPath)) {
    let content = fs.readFileSync(systemMonitorPath, 'utf8');
    
    // Add import for performanceEnhancer
    content = content.replace(
        /import React.*from 'react';/,
        `import React from 'react';
import { performanceEnhancer } from '../utils/performanceEnhancer';`
    );
    
    fs.writeFileSync(systemMonitorPath, content);
    console.log('✅ Fixed performanceEnhancer references');
}

// 9. Fix gtag declaration conflicts
console.log('📝 Fixing gtag conflicts...');

const performancePath = '/workspace/lib/performance.ts';
if (fs.existsSync(performancePath)) {
    let content = fs.readFileSync(performancePath, 'utf8');
    
    // Add proper gtag declaration
    content = content.replace(
        /declare global \{/,
        `declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }`
    );
    
    fs.writeFileSync(performancePath, content);
    console.log('✅ Fixed gtag conflicts');
}

console.log('🎉 TypeScript error fixes completed!');