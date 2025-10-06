import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
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
import AccessibilityEnhancer from '../components/disabled/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
>>>>>>> main

<<<<<<< HEAD
// Loading component (fallback if import fails)
const LoadingSpinnerFallback = () => (
=======
<<<<<<< HEAD
// Loading component
const LoadingSpinner = () => (
>>>>>>> main
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

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

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');

    // Initialize performance monitoring
<<<<<<< HEAD
    performanceOptimizer.lazyLoadImages();
<<<<<<< HEAD
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      performanceOptimizer.measurePageLoad().then(metrics => {
=======
<<<<<<< HEAD
    performanceOptimizer.addCriticalResourceHints();
=======
>>>>>>> main
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

    console.log('Performance monitoring initialized');
    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
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
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
