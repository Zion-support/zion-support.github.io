'use client';

import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
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
import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    logger.lifecycle('initialized', 'App');

    // Initialize performance monitoring
    lazyLoadImages();
    preloadCriticalResources();
    performanceOptimizer.init();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = collectPerformanceMetrics();
      const metrics = performanceOptimizer.getMetrics();
      if (pageLoadMetrics) {
        console.log('Performance metrics collected:', pageLoadMetrics);
      }
      if (metrics) {
        console.log('Performance metrics:', metrics);
      }
    }
    
    logger.lifecycle('performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', 'App');
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={(error, errorInfo) => {
          logger.error('Application Error', 'ErrorBoundary', { error: error.message, errorInfo });
        }}
      >
        <Router>
          <AccessibilityEnhancer />
          <SEOEnhancer />
          <AdvancedSEOOptimizer />
          <AdvancedPerformanceMonitor />
          <PerformanceDashboard />
          
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<ContentShowcase />} />
              <Route path="/showcase" element={<InteractiveContentShowcase2026 />} />
              <Route path="/calculator" element={<InteractiveAIROICalculator />} />
            </Routes>
          </Suspense>
        </Router>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
