'use client';

<<<<<<< HEAD
import React, { Suspense, useEffect } from 'react';
=======
import React, { Suspense, lazy, useEffect } from 'react';
>>>>>>> 13ccd0fbc208f4996848e3ac5c3a02aa8e6d8971
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
<<<<<<< HEAD
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import HomePage from './page';

// Utils
import { preloadCriticalResources, optimizeImages, optimizeThirdPartyScripts } from './utils/preloadOptimizer';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Performance optimizations initialized');
    }
  }, []);

  return (
    <HelmetProvider>
      <EnhancedErrorBoundary>
        <AccessibilityEnhancer>
          <SEOOptimizer
            title="Zion Tech Group - Advanced AI and IT Solutions"
            description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
          />
          <Router>
            <div className="App">
              <main id="main-content">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* Add more routes as needed */}
                  </Routes>
                </Suspense>

                {/* Performance Dashboard */}
                <PerformanceDashboard />
              </main>
            </div>
          </Router>
        </AccessibilityEnhancer>
      </EnhancedErrorBoundary>
=======
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import SEOOptimizer from './components/SEOOptimizer';

// Lazy load components for better performance
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(
  () => import('./components/InteractiveContentShowcase2026')
);
const InteractiveAIROICalculator = lazy(
  () => import('./components/InteractiveAIROICalculator')
);

// Utils
import { performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.lifecycle('initialized', 'App');

    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.getMetrics();
      if (metrics) {
        logger.info('Performance metrics collected', 'App', { metrics });
      }
    }

    logger.info('Performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', 'App');
  }, []);


  return (
    <HelmetProvider>
      <AccessibilityEnhancer>
        <SEOOptimizer />
        <PerformanceDashboard />
        
        <Router>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<div className="flex items-center justify-center h-64 w-full"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div></div>}>
                <div className="min-h-screen">
                  <h1 className="text-4xl font-bold text-center py-20">
                    Welcome to Zion Tech Group
                  </h1>
                  <div className="container mx-auto px-4">
                    <ContentShowcase />
                    <InteractiveContentShowcase2026 />
                    <InteractiveAIROICalculator />
                  </div>
                </div>
              </Suspense>
            } />
            <Route path="/about" element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">About Us</h1>
              </div>
            } />
            <Route path="/contact" element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
              </div>
            } />
          </Routes>
        </Router>
      </AccessibilityEnhancer>
>>>>>>> 13ccd0fbc208f4996848e3ac5c3a02aa8e6d8971
    </HelmetProvider>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 13ccd0fbc208f4996848e3ac5c3a02aa8e6d8971
