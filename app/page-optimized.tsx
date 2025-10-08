import React from 'react';
import dynamic from 'next/dynamic';
import SEOOptimizer from './components/SEOOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Lazy load heavy components - these may not exist, so make them optional
const UnifiedBanner = dynamic(() => import('./components/NewestContent2025Banner').catch(() => ({ default: () => null as any })), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>,
  ssr: false
});

const ContentPromotion = dynamic(() => import('./components/UltimateBusinessIntelligence2025Banner').catch(() => import('./components/NewestContent2025Banner')), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  ssr: false
});

const ContentShowcase = dynamic(() => import('./components/UltimateBusinessIntelligenceShowcase2025').catch(() => ({ default: () => null as any })), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>,
  ssr: false
});

export default function OptimizedHomePage() {
  return (
    <main className="min-h-screen">
      <SEOOptimizer />
      <PerformanceMonitor />
      <AccessibilityEnhancer>
        <UnifiedBanner />
        <ContentPromotion />
        <ContentShowcase />
      </AccessibilityEnhancer>
    </main>
  );
}