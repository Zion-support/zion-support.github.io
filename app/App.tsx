'use client';

import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import SEOEnhancer from './components/SEOEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(
  () => import('./components/InteractiveContentShowcase2026')
);
const InteractiveAIROICalculator = lazy(
  () => import('./components/InteractiveAIROICalculator')
);

// Utils
import { performanceOptimizer, collectPerformanceMetrics, lazyLoadImages, preloadCriticalResources } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.lifecycle('initialized', 'App');

    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.getMetrics();
      if (metrics) {
        console.log('Performance metrics:', metrics);
      }
    }
    
    logger.lifecycle('performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', 'App');
  }, []);

  const handlePerformanceOptimization = useCallback(() => {
    if (typeof window !== 'undefined') {
      lazyLoadImages();
      preloadCriticalResources();
      collectPerformanceMetrics();
    }
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <SEOOptimizer />
            <AccessibilityEnhancer>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </Suspense>
            </AccessibilityEnhancer>
            
            {/* Performance monitoring components */}
            <AdvancedPerformanceMonitor />
            <PerformanceDashboard />
            
            {/* SEO and content components */}
            <AdvancedSEOOptimizer seoData={{
              title: 'Zion Tech Group - AI Solutions',
              description: 'Leading AI and technology solutions for enterprise',
              keywords: ['AI', 'technology', 'enterprise', 'solutions'],
              canonicalUrl: 'https://ziontechgroup.com',
              ogImage: '/og-image.jpg'
            }} />
            <SEOEnhancer />
            <ContentShowcase />
            <InteractiveContentShowcase2026 />
            <InteractiveAIROICalculator />
          </div>
        </Router>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

// Loading fallback component
const LoadingFallback: React.FC<{ height?: string }> = ({
  height = 'h-32',
}) => (
  <div className={`flex items-center justify-center ${height} w-full`}>
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  </div>
);

export default App;