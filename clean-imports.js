const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Extract all import statements
const importRegex = /^import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm;
const imports = content.match(importRegex) || [];

// Remove duplicate imports
const uniqueImports = [...new Set(imports)];

// Find the end of imports section (look for the first non-import line)
const lines = content.split('\n');
let importEndIndex = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() && !lines[i].trim().startsWith('import') && !lines[i].trim().startsWith('//') && !lines[i].trim().startsWith('const') && !lines[i].trim().startsWith('lazy')) {
    importEndIndex = i;
    break;
  }
}

// Keep only essential imports
const essentialImports = [
  "import React, { Suspense, lazy } from 'react';",
  "import Link from 'next/link';",
  "import ErrorBoundary from '../components/ErrorBoundary';",
  "import LoadingSpinner from '../components/LoadingSpinner';",
  "import PerformanceMonitor from '../components/PerformanceMonitor';",
  "import AccessibilityEnhancer from '../components/AccessibilityEnhancer';",
  "import PerformanceOptimizer from '../components/PerformanceOptimizer';",
  "import SEOOptimizer from '../components/SEOOptimizer';",
  "import { LazyStructuredData } from '../components/LazyComponent';",
  "import AnalyticsMonitor from '../components/AnalyticsMonitor';",
  "import { ArrowRight, Brain, Zap, Target } from 'lucide-react';"
];

// Rebuild the file
const beforeImports = lines.slice(0, 1); // Keep the @ts-nocheck comment
const afterImports = lines.slice(importEndIndex);

const newContent = [
  ...beforeImports,
  ...essentialImports,
  '',
  '// Lazy load heavy components',
  "const ROICalculator = lazy(() => import('../components/ROICalculator'));",
  "const StructuredData = lazy(() => import('../components/StructuredData'));",
  '',
  '// Component imports',
  "import NewContentPromotionBanner from '../components/NewContentPromotionBanner';",
  "import InteractiveContentDiscoveryWidget from '../components/InteractiveContentDiscoveryWidget';",
  "import UltimateContentShowcase2025 from '../components/UltimateContentShowcase2025';",
  "import RevolutionaryContentBanner2025 from '../components/RevolutionaryContentBanner2025';",
  "import AI2025UltimateBreakthroughPromotionBanner from '../components/AI2025UltimateBreakthroughPromotionBanner';",
  "import AI2026QuantumNeuralFusionPromotionBanner from '../components/AI2026QuantumNeuralFusionPromotionBanner';",
  "import AI2026UltimateInnovationShowcasePromotionBanner from '../components/AI2026UltimateInnovationShowcasePromotionBanner';",
  "import AI2030FutureVisionPromotionBanner from '../components/AI2030FutureVisionPromotionBanner';",
  "import AI2025ToolsUtilitiesPromotionBanner from '../components/AI2025ToolsUtilitiesPromotionBanner';",
  "import AI2025ToolsUtilitiesShowcase from '../components/AI2025ToolsUtilitiesShowcase';",
  "import AI2025SuccessStoriesShowcase from '../components/AI2025SuccessStoriesShowcase';",
  "import AI2025SuccessStoriesPromotionBanner from '../components/AI2025SuccessStoriesPromotionBanner';",
  "import UltimateContentShowcase2025Banner from '../components/UltimateContentShowcase2025Banner';",
  "import NewContent2025UltimatePromotionBanner from '../components/NewContent2025UltimatePromotionBanner';",
  "import NewContent2025UltimateShowcase from '../components/NewContent2025UltimateShowcase';",
  "import NewContent2025UltimateShowcasePromotionBanner from '../components/NewContent2025UltimateShowcasePromotionBanner';",
  "import NewContent2025UltimateTransformationBanner from '../components/NewContent2025UltimateTransformationBanner';",
  "import AI2025RevolutionaryContentShowcaseBanner from '../components/AI2025RevolutionaryContentShowcaseBanner';",
  "import StructuredData2025 from '../components/StructuredData2025';",
  '',
  ...afterImports
].join('\n');

// Write the cleaned file
fs.writeFileSync('/workspace/app/page.tsx', newContent);

console.log('Cleaned imports successfully');