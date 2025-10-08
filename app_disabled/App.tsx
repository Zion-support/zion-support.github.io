import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages for better performance
// const HomePage = lazy(() => import('./page'));

// Utils
import { performanceOptimizer } from '../src/utils/performanceOptimizer';

// Styles
import '../src/index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
//     console.log('App initialized');

    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
//       const metrics = performanceOptimizer.measurePageLoad();
      if (metrics) {
        performanceOptimizer.reportWebVitals(metrics);
      }
    }

//     console.log('Performance monitoring initialized');
//     console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring'
    );
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceMonitor>
          <SEOOptimizer>
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
          </SEOOptimizer>
        </PerformanceMonitor>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
