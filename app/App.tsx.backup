import React, { useEffect, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
>>>>>>> main
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Utils
// import { performanceOptimizer } from '../src/utils/performanceOptimizer';

// Styles
import '../src/index.css';
=======
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import PerformanceMonitor from './components/PerformanceMonitor';
>>>>>>> main
>>>>>>> main

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
import { performanceOptimizer, prefetchResources } from '../src/utils/performanceOptimizer';
import performanceOptimizer from '../src/utils/performanceOptimizer';
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import { LoadingSpinner } from '../components/LoadingComponents';
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import LoadingSpinner from '../src/components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AccessibilityEnhancer from '../components/disabled/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
>>>>>>> main

// Loading component (fallback if import fails)
const LoadingSpinnerFallback = () => (
// Loading component
const LoadingSpinner = () => (
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
import { performanceOptimizer } from '../src/utils/performanceOptimizer';
// import performanceOptimizer from '../src/utils/performanceOptimizer';
>>>>>>> main
>>>>>>> main

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');

    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    prefetchResources(['/api/health']);
    performanceOptimizer.prefetchResources([]);
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.measurePageLoad();
      if (metrics) {
        performanceOptimizer.reportWebVitals(metrics);
      }
    }
    
=======
    performanceOptimizer.lazyLoadImages();
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      performanceOptimizer.measurePageLoad().then(metrics => {
    performanceOptimizer.addCriticalResourceHints();
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
>>>>>>> main
>>>>>>> main
      const metrics = performanceOptimizer.measurePageLoad();
      if (metrics) {
>>>>>>> main
        performanceOptimizer.reportWebVitals(metrics);
      });
    }
=======
    console.log('Performance monitoring initialized');
>>>>>>> main

>>>>>>> main
    console.log('Performance monitoring initialized');
    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
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
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
        <div>
          <SEOOptimizer />
          <AccessibilityEnhancer>
        <PerformanceMonitor>
          <SEOOptimizer>
            <AccessibilityEnhancer>
        <SEOOptimizer>
          <AccessibilityEnhancer>
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

                <Suspense fallback={<LoadingSpinner text="Loading..." />}>
                  <Routes>
                    <Route path='/' element={<HomePage />} />
                    {/* Add more routes as needed */}
                  </Routes>
                </Suspense>
                <Navigation />
                
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  {/* Add more routes as needed */}
                </Routes>

                <Footer />

                {/* Performance Dashboard */}
                <PerformanceDashboard />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
          </AccessibilityEnhancer>
        </div>
            </AccessibilityEnhancer>
          </SEOOptimizer>
        </PerformanceMonitor>
          </AccessibilityEnhancer>
        </SEOOptimizer>
>>>>>>> main
>>>>>>> main
      </ErrorBoundary>
>>>>>>> main
    </HelmetProvider>
  );
};

export default App;
