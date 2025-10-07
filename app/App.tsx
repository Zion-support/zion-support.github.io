import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
import performanceOptimizer from '../src/utils/performanceOptimizer';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    if (process.env.NODE_ENV === 'development') {
      console.log('App initialized');
    }

    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      performanceOptimizer.measurePageLoad().then(metrics => {
        performanceOptimizer.reportWebVitals(metrics);
      });
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance monitoring initialized');
      console.log(
        '🚀 Zion Tech Group App initialized with comprehensive monitoring',
      );
    }
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
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

              <Navigation />

              <Suspense fallback={<LoadingSpinner text="Loading..." />}>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  {/* Add more routes as needed */}
                </Routes>
              </Suspense>

            <Footer />
            <PerformanceMonitor />
          </div>
        </Router>
      </AccessibilityEnhancer>
    </ErrorBoundary>
  </HelmetProvider>
);
};

export default App;