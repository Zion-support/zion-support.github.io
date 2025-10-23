import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// // 1. Fix AdvancedSEOOptimizer component props
// // const seoOptimizerPath = '/workspace/app/components/AdvancedSEOOptimizer.tsx';
if (fs.existsSync(seoOptimizerPath)) {
  let _content = fs.readFileSync(seoOptimizerPath, 'utf8');

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
  //     }

// 2. Fix App.tsx SEO component usage
// // const appPath = '/workspace/App.tsx';
if (fs.existsSync(appPath)) {
  let _content = fs.readFileSync(appPath, 'utf8');

  // Fix the AdvancedSEOOptimizer usage
  content = content.replace(
    /enableAnalytics={true}\s+enablePerformanceTracking={true}/,
    'enableAnalytics={true} enablePerformanceTracking={true}'
  );

  fs.writeFileSync(appPath, content);
  //     }

// 3. Fix test files
// // Fix AppMinimal.test.tsx
// const appMinimalTestPath = '/workspace/__tests__/AppMinimal.test.tsx';
if (fs.existsSync(appMinimalTestPath)) {
  let _content = fs.readFileSync(appMinimalTestPath, 'utf8');

  // Replace @jest/globals import
  content = content.replace(
    /import.*@jest\/globals.*/,
    "import { describe, it, expect } from 'jest'"
  );

  fs.writeFileSync(appMinimalTestPath, content);
  //     }

// Fix advanced-components.test.tsx
// const advancedComponentsTestPath = '/workspace/__tests__/advanced-components.test.tsx';
if (fs.existsSync(advancedComponentsTestPath)) {
  let _content = fs.readFileSync(advancedComponentsTestPath, 'utf8');

  // Update AdvancedSEOOptimizer usage in tests
  content = content.replace(/<AdvancedSEOOptimizer\s+config=\{/g, '<AdvancedSEOOptimizer config={');

  fs.writeFileSync(advancedComponentsTestPath, content);
  //     }

// 4. Fix blog page metadata issues
// const blogPages = [
  'app/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
  'app/blog/ai-2026-autonomous-agent-factories/page.tsx',
  'app/blog/ai-2026-autonomous-enterprise-architecture/page.tsx',
];

blogPages.forEach(pagePath => {
  if (fs.existsSync(pagePath)) {
    let _content = fs.readFileSync(pagePath, 'utf8');

    // Remove the 'type' property from metadata
    content = content.replace(/\s+type: ['"][^'"]*['"],?\s*/g, '');

    fs.writeFileSync(pagePath, content);
    //         }
});

// 5. Fix OpenGraph authors issue
// const openGraphPages = [
  'app/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
  'app/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx',
];

openGraphPages.forEach(pagePath => {
  if (fs.existsSync(pagePath)) {
    let _content = fs.readFileSync(pagePath, 'utf8');

    // Fix authors format
    content = content.replace(
      /authors: \[\s*\{\s*name: ['"][^'"]*['"]\s*\}\s*\]/g,
      "authors: ['Zion Tech Group']"
    );

    fs.writeFileSync(pagePath, content);
    //         }
});

// 6. Fix missing Calculator import
// // const calculatorPagePath = '/workspace/app/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx';
if (fs.existsSync(calculatorPagePath)) {
  let _content = fs.readFileSync(calculatorPagePath, 'utf8');

  // Replace Calculator with CalculatorIcon
  content = content.replace(/import \{ Calculator \}/, 'import { CalculatorIcon }');
  content = content.replace(/<Calculator/g, '<CalculatorIcon');

  fs.writeFileSync(calculatorPagePath, content);
  //     }

// 7. Fix dataLayer declaration conflicts
// // const analyticsTrackerPath = '/workspace/app/components/AnalyticsTracker.tsx';
if (fs.existsSync(analyticsTrackerPath)) {
  let _content = fs.readFileSync(analyticsTrackerPath, 'utf8');

  // Add proper dataLayer declaration
  content = content.replace(
    /declare global \{/,
    `declare global {
  interface Window {
    dataLayer: unknown[];
  }`
  );

  fs.writeFileSync(analyticsTrackerPath, content);
  //     }

// 8. Fix performanceEnhancer references
// // const systemMonitorPath = '/workspace/app/components/SystemMonitor.tsx';
if (fs.existsSync(systemMonitorPath)) {
  let _content = fs.readFileSync(systemMonitorPath, 'utf8');

  // Add import for performanceEnhancer
  content = content.replace(
    /import React.*from 'react';/,
    `import React from 'react';
import { performanceEnhancer } from '../utils/performanceEnhancer';`
  );

  fs.writeFileSync(systemMonitorPath, content);
  //     }

// 9. Fix gtag declaration conflicts
// // const performancePath = '/workspace/lib/performance.ts';
if (fs.existsSync(performancePath)) {
  let _content = fs.readFileSync(performancePath, 'utf8');

  // Add proper gtag declaration
  content = content.replace(
    /declare global \{/,
    `declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }`
  );

  fs.writeFileSync(performancePath, content);
  //     }

// 