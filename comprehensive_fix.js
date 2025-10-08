import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// console.log('🔧 Starting comprehensive TypeScript fixes...');

// 1. Fix test imports
// console.log('📝 Fixing test imports...');

// const appMinimalTestPath = '/workspace/__tests__/AppMinimal.test.tsx';
if (fs.existsSync(appMinimalTestPath)) {
    let content = fs.readFileSync(appMinimalTestPath, 'utf8');
    
    // Fix jest imports
    content = content.replace(
        /import \{ describe, it, expect \} from 'jest';/,
        `import { describe, it, expect } from '@jest/globals';`
    );
    
    fs.writeFileSync(appMinimalTestPath, content);
//     console.log('✅ Fixed test imports');
}

// 2. Fix blog page metadata
// console.log('📝 Fixing blog page metadata...');

const blogPages = [
    'app/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
    'app/blog/ai-2026-autonomous-agent-factories/page.tsx',
    'app/blog/ai-2026-autonomous-enterprise-architecture/page.tsx'
];

blogPages.forEach(pagePath => {
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        // Remove publishedTime from metadata
        content = content.replace(/\s+publishedTime: ['"][^'"]*['"],?\s*/g, '');
        
        fs.writeFileSync(pagePath, content);
//         console.log(`✅ Fixed ${pagePath}`);
    }
});

// 3. Fix OpenGraph authors
// console.log('📝 Fixing OpenGraph authors...');

const openGraphPages = [
    'app/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
    'app/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx'
];

openGraphPages.forEach(pagePath => {
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        // Fix authors format to match Author type
        content = content.replace(
            /authors: \['Zion Tech Group'\]/g,
            "authors: [{ name: 'Zion Tech Group' }]"
        );
        
        fs.writeFileSync(pagePath, content);
//         console.log(`✅ Fixed ${pagePath}`);
    }
});

// 4. Fix Calculator import
// console.log('📝 Fixing Calculator import...');

// const calculatorPagePath = '/workspace/app/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx';
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
//     console.log('✅ Fixed Calculator import');
}

// 5. Fix AdvancedSEOOptimizer component
// console.log('📝 Fixing AdvancedSEOOptimizer component...');

// const seoOptimizerPath = '/workspace/app/components/AdvancedSEOOptimizer.tsx';
if (fs.existsSync(seoOptimizerPath)) {
    let content = fs.readFileSync(seoOptimizerPath, 'utf8');
    
    // Update the interface to include all missing props
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
  seoData?: unknown;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableSchemaMarkup?: boolean;
}`
    );
    
    fs.writeFileSync(seoOptimizerPath, content);
//     console.log('✅ Fixed AdvancedSEOOptimizer component');
}

// 6. Fix AnalyticsTracker
// console.log('📝 Fixing AnalyticsTracker...');

// const analyticsTrackerPath = '/workspace/app/components/AnalyticsTracker.tsx';
if (fs.existsSync(analyticsTrackerPath)) {
    let content = fs.readFileSync(analyticsTrackerPath, 'utf8');
    
    // Remove conflicting declarations
    content = content.replace(/declare global \{[^}]*\}/g, '');
    
    // Add proper imports and declarations at the top
    content = `
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

${content}`;
    
    fs.writeFileSync(analyticsTrackerPath, content);
//     console.log('✅ Fixed AnalyticsTracker');
}

// 7. Fix SystemMonitor
// console.log('📝 Fixing SystemMonitor...');

// const systemMonitorPath = '/workspace/app/components/SystemMonitor.tsx';
if (fs.existsSync(systemMonitorPath)) {
    let content = fs.readFileSync(systemMonitorPath, 'utf8');
    
    // Add proper React imports
    content = content.replace(
        /import React from 'react';/,
        `import React, { useState, useEffect } from 'react';`
    );
    
    // Remove the performanceEnhancer import and usage
    content = content.replace(
        /import { performanceEnhancer } from '\.\.\/utils\/performanceEnhancer';\s*/g,
        ''
    );
    
    // Replace performanceEnhancer calls with direct performance API calls
    content = content.replace(/performanceEnhancer\./g, '');
    
    fs.writeFileSync(systemMonitorPath, content);
//     console.log('✅ Fixed SystemMonitor');
}

// 8. Fix lib/performance.ts
// console.log('📝 Fixing lib/performance.ts...');

// const performancePath = '/workspace/lib/performance.ts';
if (fs.existsSync(performancePath)) {
    let content = fs.readFileSync(performancePath, 'utf8');
    
    // Remove conflicting declarations
    content = content.replace(/declare global \{[^}]*\}/g, '');
    
    // Add proper declaration at the top
    content = `declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

${content}`;
    
    fs.writeFileSync(performancePath, content);
//     console.log('✅ Fixed lib/performance.ts');
}

// console.log('🎉 Comprehensive TypeScript fixes completed!');