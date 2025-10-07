'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import SEOOptimizer from './components/SEOOptimizer';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Error boundary component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Utils
import { preloadCriticalResources, performanceOptimizer } from './utils/performanceOptimizer';
<<<<<<< HEAD
=======
import { logger } from './utils/logger';
>>>>>>> cursor/fix-errors-and-merge-to-main-90b9

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    performanceOptimizer.init();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.getMetrics();
<<<<<<< HEAD
      if (metrics && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Performance metrics:', metrics);
=======
      if (metrics) {
        logger.info('Performance metrics collected', 'App', { metrics });
>>>>>>> cursor/fix-errors-and-merge-to-main-90b9
      }
    }

    // Preload critical resources
    preloadCriticalResources();
<<<<<<< HEAD
=======
    
    logger.info('Performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', 'App');
>>>>>>> cursor/fix-errors-and-merge-to-main-90b9
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div>
          <SEOOptimizer />
          <AccessibilityEnhancer>
            <Router>
              <div className='App'>
                {/* Skip to main content link for accessibility */}
                <a
                  href='#main-content'
                  className='skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
                  onClick={e => {
                    e.preventDefault();
                    const main =
                      document.querySelector('main') ||
                      document.querySelector('#main-content');
                    if (main) {
                      main.focus();
                      main.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Skip to main content
                </a>

                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path='/' element={<HomePage />} />
                    {/* Add more routes as needed */}
                  </Routes>
                </Suspense>

                {/* Performance Dashboard */}
                <PerformanceDashboard />
              </div>
            </Router>
            </AccessibilityEnhancer>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
