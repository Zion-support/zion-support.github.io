'use client';

import React, { Suspense, lazy, useEffect, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
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

  const handleError = useCallback((error: Error, errorInfo: any) => {
    logger.error('Application Error', 'ErrorBoundary', { error: error.message, errorInfo });
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
    </HelmetProvider>
  );
};

export default App;
