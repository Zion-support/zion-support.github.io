<<<<<<< HEAD
import React, { useEffect, lazy, Suspense } from 'react';
=======
'use client';

import React, { Suspense, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
>>>>>>> main
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const ContactPage = lazy(() => import('./contact/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));

// Utils
import { performanceOptimizer } from '../src/utils/performanceOptimizer';

// Styles
import '../src/index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    });

    // Initialize performance monitoring
    if (performanceOptimizer) {
      performanceOptimizer.initialize();
      performanceOptimizer.lazyLoadImages();
    }
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
<<<<<<< HEAD
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className="App">
                <PerformanceDashboard />
                
                <Navigation />
                
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                  </Routes>
                </Suspense>
                
                <Footer />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
=======
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

              {/* Performance Dashboard - only shows in development */}
              <PerformanceDashboard />
            </div>
          </Router>
        </AccessibilityEnhancer>
>>>>>>> main
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;