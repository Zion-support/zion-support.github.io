'use client';

import React, { Suspense, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
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
    </HelmetProvider>
  );
};

export default App;