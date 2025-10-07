'use client';

import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import PerformanceDashboard from './components/PerformanceDashboard';
import LoadingSpinner from './components/LoadingSpinner';
import SEOEnhancer from './components/SEOEnhancer';

// Lazy load components for better performance
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(
  () => import('./components/InteractiveContentShowcase2026')
);
const InteractiveAIROICalculator = lazy(
  () => import('./components/InteractiveAIROICalculator')
);

// Utils
import { performanceOptimizer, preloadCriticalResources } from './utils/performanceOptimizer';
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
        logger.performance('Performance Metrics', metrics as unknown as Record<string, unknown>, 'PerformanceMonitor');
        logger.info('Performance metrics collected', 'App', { metrics });
      }
    }

    // Preload critical resources
    preloadCriticalResources();
    
    logger.info('Performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', 'App');
  }, []);

  const handleError = useCallback((error: Error, errorInfo: React.ErrorInfo) => {
    logger.error('Application Error', 'ErrorBoundary', { error: error.message, errorInfo });
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={handleError}
      >
        <AccessibilityEnhancer>
          <SEOEnhancer
            title="Zion Tech Group - Advanced AI and IT Solutions"
            description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
          >
            <AdvancedSEOOptimizer
              seoData={{
                title: 'Zion Tech Group - Advanced AI and IT Solutions',
                description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
                keywords: ['AI', 'artificial intelligence', 'quantum computing', 'enterprise solutions', 'technology consulting'],
                canonicalUrl: 'https://ziontechgroup.com',
                ogImage: 'https://ziontechgroup.com/og-image.jpg'
              }}
              enableSchemaMarkup={true}
            />
            <Router>
              <div className="App">
                <main id="main-content">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<ContentShowcase />} />
                      {/* Add more routes as needed */}
                    </Routes>
                  </Suspense>

                  {/* Performance Dashboard */}
                  <PerformanceDashboard />

                  {/* Advanced Performance Monitor */}
                  <AdvancedPerformanceMonitor />

                  {/* Interactive Components */}
                  <Suspense fallback={<div>Loading...</div>}>
                    <InteractiveContentShowcase2026 />
                    <InteractiveAIROICalculator />
                  </Suspense>
                </main>
              </div>
            </Router>
          </SEOEnhancer>
        </AccessibilityEnhancer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
