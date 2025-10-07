'use client';

import React, { Suspense, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import HomePage from './page';

// Lazy load components for better performance (currently unused but available for future use)
// const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
// const InteractiveContentShowcase2026 = lazy(
//   () => import('./components/InteractiveContentShowcase2026')
// );
// const InteractiveAIROICalculator = lazy(
//   () => import('./components/InteractiveAIROICalculator')
// );

// Utils
import { preloadCriticalResources, optimizeImages, optimizeThirdPartyScripts } from './utils/preloadOptimizer';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

// Styles
import './globals.css';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();

    // Initialize global error handling
    logger.lifecycle('initialized', 'App');

    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.getMetrics();
      if (metrics) {
        logger.info('Performance metrics collected', 'App', { metrics });
      }
    }

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Performance optimizations initialized');
    }

    logger.info('Performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', 'App');
  }, []);

  return (
    <HelmetProvider>
      <EnhancedErrorBoundary>
        <AccessibilityEnhancer>
          <SEOOptimizer
            title="Zion Tech Group - Advanced AI and IT Solutions"
            description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
          />
          <Router>
            <div className="App">
              <main id="main-content">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={
                      <div className="min-h-screen flex items-center justify-center">
                        <h1 className="text-4xl font-bold">About Us</h1>
                      </div>
                    } />
                    <Route path="/contact" element={
                      <div className="min-h-screen flex items-center justify-center">
                        <h1 className="text-4xl font-bold">Contact Us</h1>
                      </div>
                    } />
                  </Routes>
                </Suspense>

                {/* Performance Dashboard */}
                <PerformanceDashboard />
              </main>
            </div>
          </Router>
        </AccessibilityEnhancer>
      </EnhancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
