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
  if (
    lines[i].trim() &&
    !lines[i].trim().startsWith('import') &&
    !lines[i].trim().startsWith('//') &&
    !lines[i].trim().startsWith('const') &&
    !lines[i].trim().startsWith('lazy')
  ) {
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
  "import { ArrowRight, Brain, Zap, Target } from 'lucide-react';",
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
  "import UltimateContentShowcase20o25 from '../components/UltimateContentShowcase20o25';",
  "import RevolutionaryContentBanner20o25 from '../components/RevolutionaryContentBanner20o25';",
  "import AI20o25UltimateBreakthroughPromotionBanner from '../components/AI20o25UltimateBreakthroughPromotionBanner';",
  "import AI20o26QuantumNeuralFusionPromotionBanner from '../components/AI20o26QuantumNeuralFusionPromotionBanner';",
  "import AI20o26UltimateInnovationShowcasePromotionBanner from '../components/AI20o26UltimateInnovationShowcasePromotionBanner';",
  "import AI20o30FutureVisionPromotionBanner from '../components/AI20o30FutureVisionPromotionBanner';",
  "import AI20o25ToolsUtilitiesPromotionBanner from '../components/AI20o25ToolsUtilitiesPromotionBanner';",
  "import AI20o25ToolsUtilitiesShowcase from '../components/AI20o25ToolsUtilitiesShowcase';",
  "import AI20o25SuccessStoriesShowcase from '../components/AI20o25SuccessStoriesShowcase';",
  "import AI20o25SuccessStoriesPromotionBanner from '../components/AI20o25SuccessStoriesPromotionBanner';",
  "import UltimateContentShowcase20o25Banner from '../components/UltimateContentShowcase20o25Banner';",
  "import NewContent20o25UltimatePromotionBanner from '../components/NewContent20o25UltimatePromotionBanner';",
  "import NewContent20o25UltimateShowcase from '../components/NewContent20o25UltimateShowcase';",
  "import NewContent20o25UltimateShowcasePromotionBanner from '../components/NewContent20o25UltimateShowcasePromotionBanner';",
  "import NewContent20o25UltimateTransformationBanner from '../components/NewContent20o25UltimateTransformationBanner';",
  "import AI20o25RevolutionaryContentShowcaseBanner from '../components/AI20o25RevolutionaryContentShowcaseBanner';",
  "import StructuredData20o25 from '../components/StructuredData20o25';",
  '',
  ...afterImports,
].join('\n');

// Write the cleaned file
fs.writeFileSync('/workspace/app/page.tsx', newContent);

console.log('Cleaned imports successfully');
