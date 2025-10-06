<<<<<<< HEAD
import React, { useEffect, lazy, Suspense } from 'react';
=======
import React, { useEffect, lazy } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
<<<<<<< HEAD
<<<<<<< HEAD
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
=======
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
=======
<<<<<<< HEAD
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
=======
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import PerformanceMonitor from './components/PerformanceMonitor';
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
<<<<<<< HEAD
import { performanceOptimizer, prefetchResources } from '../src/utils/performanceOptimizer';
=======
import performanceOptimizer from '../src/utils/performanceOptimizer';
=======
=======
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
=======
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import { LoadingSpinner } from '../components/LoadingComponents';
=======
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
=======
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
=======
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
<<<<<<< HEAD
import LoadingSpinner from '../src/components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
=======
<<<<<<< HEAD
import AccessibilityEnhancer from '../components/disabled/AccessibilityEnhancer';
>>>>>>> main
import PerformanceDashboard from './components/PerformanceDashboard';
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
import PerformanceDashboard from './components/PerformanceDashboard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
=======
<<<<<<< HEAD
import PerformanceDashboard from './components/PerformanceDashboard';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854

// Utils
import performanceOptimizer from '../src/utils/performanceOptimizer';

// Styles
import '../src/index.css';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
=======
<<<<<<< HEAD
// Loading component
const LoadingSpinner = () => (
>>>>>>> main
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);
>>>>>>> main

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
=======
// Pages
import HomePage from './page';
>>>>>>> main

// Utils
<<<<<<< HEAD
import { performanceOptimizer } from '../src/utils/performanceOptimizer';
=======
// import performanceOptimizer from '../src/utils/performanceOptimizer';
>>>>>>> main
>>>>>>> main
>>>>>>> main

// Styles
import './globals.css';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {
      console.log('App initialized');
      console.log('Performance monitoring initialized');
      console.log('🚀 Zion Tech Group App initialized with comprehensive monitoring');
=======
    console.log('App initialized');
    
    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
    prefetchResources(['/api/health']);
=======
    performanceOptimizer.prefetchResources([]);
>>>>>>> main
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.measurePageLoad();
      if (metrics) {
        performanceOptimizer.reportWebVitals(metrics);
      }
    }
    
=======
<<<<<<< HEAD
    performanceOptimizer.lazyLoadImages();
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
<<<<<<< HEAD
      performanceOptimizer.preloadCriticalResources();
=======
      performanceOptimizer.addCriticalResourceHints([]);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
      const metrics = performanceOptimizer.measurePageLoad();
      if (metrics) {
        performanceOptimizer.reportWebVitals(metrics);
      }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
    }
<<<<<<< HEAD
=======
=======
    console.log('Performance monitoring initialized');
>>>>>>> main

>>>>>>> main
    console.log('Performance monitoring initialized');
    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  }, []);

  return (
    <HelmetProvider>
<<<<<<< HEAD
      <Router>
        <div className='App'>
          {/* Skip to main content link for accessibility */}
          <a
            href='#main-content'
            className='skip-link'
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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              {/* Add more routes as needed */}
            </Routes>
          </Suspense>
          {/* Performance Dashboard */}
          <PerformanceDashboard />
        </div>
      </Router>
=======
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

            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
              </div>
            </div>}>
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
=======
      <ErrorBoundary>
<<<<<<< HEAD
        <SEOOptimizer>
          <AccessibilityEnhancer>
=======
<<<<<<< HEAD
        <div>
          <SEOOptimizer />
          <AccessibilityEnhancer>
=======
<<<<<<< HEAD
        <PerformanceMonitor>
          <SEOOptimizer>
            <AccessibilityEnhancer>
=======
        <SEOOptimizer>
          <AccessibilityEnhancer>
>>>>>>> main
>>>>>>> main
>>>>>>> main
            <Router>
              <div className='App'>
                {/* Skip to main content link for accessibility */}
                <a
                  href='#main-content'
                  className='skip-link'
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

<<<<<<< HEAD
                <Suspense fallback={<LoadingSpinner text="Loading..." />}>
                  <Routes>
                    <Route path='/' element={<HomePage />} />
                    {/* Add more routes as needed */}
                  </Routes>
                </Suspense>
=======
                <Navigation />
                
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  {/* Add more routes as needed */}
                </Routes>

                <Footer />
>>>>>>> main

                {/* Performance Dashboard */}
                <PerformanceDashboard />
              </div>
            </Router>
<<<<<<< HEAD
          </AccessibilityEnhancer>
        </SEOOptimizer>
=======
<<<<<<< HEAD
          </AccessibilityEnhancer>
        </div>
=======
<<<<<<< HEAD
            </AccessibilityEnhancer>
          </SEOOptimizer>
        </PerformanceMonitor>
=======
          </AccessibilityEnhancer>
        </SEOOptimizer>
>>>>>>> main
>>>>>>> main
>>>>>>> main
      </ErrorBoundary>
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
    </HelmetProvider>
  );
};

export default App;