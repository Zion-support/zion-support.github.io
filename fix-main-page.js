#!/usr/bin/env node

import fs from 'fs';

// Function to fix the main page
function fixMainPage() {
  const filePath = 'app/page.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix import statements
  content = content.replace(/'use client'/, "'use client';");
  content = content.replace(/import React, {useCallback, useState, useEffect, Suspense, lazy, memo} from 'react'/, "import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';");
  content = content.replace(/import Navigation from '\.\/components\/Navigation'/, "import Navigation from './components/Navigation';");
  content = content.replace(/import Footer from '\.\/components\/Footer'/, "import Footer from './components/Footer';");
  content = content.replace(/import PerformanceOptimizer from '\.\/components\/EnhancedPerformanceOptimizer'/, "import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';");
  content = content.replace(/import SEOOptimizer from '\.\/components\/SEOOptimizer'/, "import SEOOptimizer from './components/SEOOptimizer';");
  content = content.replace(/import AccessibilityEnhancer\s+from '\.\/components\/AccessibilityEnhancer'/, "import AccessibilityEnhancer from './components/AccessibilityEnhancer';");
  
  // Fix semicolons after imports
  content = content.replace(/;\s*\/\/ Dynamically import heavy components for better performance;/, ";\n\n// Dynamically import heavy components for better performance");
  content = content.replace(/const ContentPromotionBanner = lazy\(\(\) => import\('\.\/components\/ContentPromotionBanner'\)\);/, "const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));");
  content = content.replace(/const ContentCarousel = lazy\(\(\) => import\('\.\/components\/ContentCarousel'\)\);/, "const ContentCarousel = lazy(() => import('./components/ContentCarousel'));");
  content = content.replace(/const DynamicContentShowcase = lazy\(\(\) => import\('\.\/components\/DynamicContentShowcase'\)\);/, "const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));");
  content = content.replace(/const ContentStatistics = lazy\(\(\) => import\('\.\/components\/ContentStatistics'\)\);/, "const ContentStatistics = lazy(() => import('./components/ContentStatistics'));");
  content = content.replace(/const ContentNewsletterSignup = lazy\(\(\) => import\('\.\/components\/ContentNewsletterSignup'\)\);/, "const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));");
  
  // Fix function declarations
  content = content.replace(/const preloadComponents = \(\) => \{if \(typeof window !== 'undefined'\) \{;/, "const preloadComponents = () => {\n  if (typeof window !== 'undefined') {");
  content = content.replace(/\/\/ Preload critical components after initial render;/, "    // Preload critical components after initial render");
  content = content.replace(/setTimeout\(\(\) => \{;/, "    setTimeout(() => {");
  content = content.replace(/import\('\.\/components\/ContentPromotionBanner'\);/, "      import('./components/ContentPromotionBanner');");
  content = content.replace(/import\('\.\/components\/ContentCarousel'\);\}\}, 100\);/, "      import('./components/ContentCarousel');\n    }, 100);");
  content = content.replace(/\}\s*\}/, "  }\n};");
  
  // Fix component declarations
  content = content.replace(/const ServiceCardSkeleton: React\.FC = memo\(\(\) => \(;/, "const ServiceCardSkeleton: React.FC = memo(() => (");
  
  // Fix JSX syntax
  content = content.replace(/<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">/, "  <div className=\"bg-white rounded-lg shadow-lg p-6 animate-pulse\" role=\"status\" aria-label=\"Loading service card\">");
  
  // Remove extra semicolons
  content = content.replace(/;\s*$/gm, '');
  content = content.replace(/,\s*;/g, ',');
  content = content.replace(/\(\s*;/g, '(');
  content = content.replace(/;\s*\)/g, ')');
  
  // Fix function calls
  content = content.replace(/if \(typeof window !== 'undefined'\) \{;/, "if (typeof window !== 'undefined') {");
  content = content.replace(/setTimeout\(\(\) => \{;/, "setTimeout(() => {");
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed main page');
}

fixMainPage();