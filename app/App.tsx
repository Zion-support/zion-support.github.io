'use client';

<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense, lazy, useCallback, useEffect, ErrorInfo } from 'react';
=======
import React, { Suspense, lazy, useEffect } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-90ff
=======
import React, { Suspense, lazy, useEffect } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './utils/performanceOptimizer';
=======
import { performanceOptimizer } from './utils/performanceOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-d703
=======
import { preloadCriticalResources, performanceOptimizer } from './utils/performanceOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-90ff
import { logger } from './utils/logger';
=======
import { preloadCriticalResources, performanceOptimizer } from './utils/performanceOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f

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
      if (metrics) {
        logger.info('Performance metrics collected', 'App', { metrics });
=======
      if (metrics && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Performance metrics:', metrics);
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f
      }
    }

    // Preload critical resources
    preloadCriticalResources();
<<<<<<< HEAD
    
    logger.info('Performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', 'App');
  }, []);

<<<<<<< HEAD
  const handleError = useCallback((error: Error, errorInfo: ErrorInfo) => {
    logger.error('Application Error', 'ErrorBoundary', { error: error.message, errorInfo });
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f
  }, []);
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-90ff

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

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-d703
export default App;
