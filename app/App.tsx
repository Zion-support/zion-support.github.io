'use client';

import React, { Suspense, lazy, useEffect, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import SEOEnhancer from './components/SEOEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import { logger } from './utils/logger';
import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './utils/performanceOptimizer';

<<<<<<< HEAD
// Lazy load pages  
const HomePage = lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Home Page</div> })));
=======
// Lazy load the HomePage
const HomePage = lazy(() => import('./page'));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-16e0

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    if (typeof console !== 'undefined') {
      console.log('App initialized');
    }

    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = window.performance.timing;
      if (pageLoadMetrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics collected:', pageLoadMetrics);
      }
    }
    
    if (typeof console !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized with comprehensive monitoring');
    }

  }, []);

  const handleError = useCallback((error: Error, errorInfo: any) => {
    console.error('Application Error:', error);
    // eslint-disable-next-line no-console
    console.error('Error info:', errorInfo);
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
                keywords: ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation', 'automation', 'cloud services', 'AI consulting', 'business intelligence', 'machine learning'],
<<<<<<< HEAD
                url: 'https://ziontechgroup.com',
                canonicalUrl: 'https://ziontechgroup.com',
                structuredData: {}
=======
                canonicalUrl: 'https://ziontechgroup.com'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-16e0
              }}
              enableStructuredData={true}
              enableOpenGraph={true}
              enableTwitterCards={true}
              enableSchemaMarkup={true}
            />
            <Router>
              <div className="App">
                {/* Skip to main content link for accessibility */}
                <a
                  href="#main-content"
                  className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
                  onClick={(e) => {
                    e.preventDefault();
                    const main = document.querySelector('main') || document.querySelector('#main-content');
                    if (main) {
                      (main as HTMLElement).focus();
                      main.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Skip to main content
                </a>

                <main id="main-content">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      {/* Add more routes as needed */}
                    </Routes>
                  </Suspense>
                </main>

                {/* Performance Dashboard */}
                <PerformanceDashboard />
                
                {/* Advanced Performance Monitor */}
                <AdvancedPerformanceMonitor
                  enableRealTimeMonitoring={process.env['NODE_ENV'] === 'development'}
                  onMetricsUpdate={(metrics) => {
                    if (process.env['NODE_ENV'] === 'development') {
                      console.log('Performance Metrics:', metrics);
                    }
                  }}
                />
              </div>
            </Router>
          </SEOEnhancer>
        </AccessibilityEnhancer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;