import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
<<<<<<< HEAD
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);
=======
import SEOOptimizer from './components/SEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import PerformanceMonitor from './components/PerformanceMonitor';
>>>>>>> 5fd561acd32fd4817eedd259cb34bdcff04831f0

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
<<<<<<< HEAD
import { performanceOptimizer, prefetchResources } from '../src/utils/performanceOptimizer';
=======
import { performanceOptimizer } from '../src/utils/performanceOptimizer';
>>>>>>> 5fd561acd32fd4817eedd259cb34bdcff04831f0

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');

    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    prefetchResources(['/api/health']);
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.measurePageLoad();
      if (metrics) {
        performanceOptimizer.reportWebVitals(metrics);
      }
    }
    
    console.log('Performance monitoring initialized');
    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
<<<<<<< HEAD
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
=======
        <PerformanceMonitor />
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
>>>>>>> 5fd561acd32fd4817eedd259cb34bdcff04831f0

              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  {/* Add more routes as needed */}
                </Routes>
              </Suspense>

<<<<<<< HEAD
              {/* Performance Dashboard */}
              <PerformanceDashboard />
            </div>
          </Router>
        </AccessibilityEnhancer>
=======
                {/* Performance Dashboard */}
                <PerformanceDashboard />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
>>>>>>> 5fd561acd32fd4817eedd259cb34bdcff04831f0
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;