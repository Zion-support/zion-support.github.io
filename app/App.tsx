'use client';

<<<<<<< HEAD
import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import Link from 'next/link';
=======
import React, { Suspense, lazy, useEffect } from 'react';
>>>>>>> 9f279756f4679d4a3fe100469cdf0ea089dda745
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
<<<<<<< HEAD
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import SEOEnhancer from './components/SEOEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import LoadingSpinner from './components/LoadingSpinner';
=======
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import SEOOptimizer from './components/SEOOptimizer';
>>>>>>> 9f279756f4679d4a3fe100469cdf0ea089dda745

// Lazy load components for better performance
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(
  () => import('./components/InteractiveContentShowcase2026')
);
const InteractiveAIROICalculator = lazy(
  () => import('./components/InteractiveAIROICalculator')
);

// Utils
<<<<<<< HEAD
import { performanceOptimizer, collectPerformanceMetrics } from './utils/performanceOptimizer';
=======
import { preloadCriticalResources, performanceOptimizer } from './utils/performanceOptimizer';
>>>>>>> 9f279756f4679d4a3fe100469cdf0ea089dda745
import { logger } from './utils/logger';
import { initializePerformanceEnhancements } from './utils/performanceEnhancer';
import { initializeAccessibilityEnhancements } from './utils/accessibilityEnhancer';
import { initializeSEOEnhancements } from './utils/seoEnhancer';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
<<<<<<< HEAD
    // Initialize global error handling
    logger.lifecycle('initialized', 'App');

=======
>>>>>>> 9f279756f4679d4a3fe100469cdf0ea089dda745
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.getMetrics();
<<<<<<< HEAD
      logger.performance('Performance Metrics', metrics as unknown as Record<string, unknown>, 'PerformanceMonitor');
    }

    // Preload critical resources
    // preloadCriticalResources(); // Function not available
  }, []);

  const handleError = useCallback((error: Error, errorInfo: any) => {
    logger.error('Application Error', 'ErrorBoundary', { error: error.message, errorInfo });
=======
      if (metrics) {
        logger.info('Performance metrics collected', 'App', { metrics });
      }
    }

    // Preload critical resources
    preloadCriticalResources();
    
    // Initialize all enhancement utilities
    initializePerformanceEnhancements();
    initializeAccessibilityEnhancements();
    initializeSEOEnhancements();
    
    logger.info('Performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', 'App');
>>>>>>> 9f279756f4679d4a3fe100469cdf0ea089dda745
  }, []);

  return (
    <AdvancedErrorBoundary onError={handleError}>
      <HelmetProvider>
        <AccessibilityEnhancer>
          <SEOOptimizer />
          <AdvancedSEOOptimizer seoData={{
            title: 'Zion Tech Group - AI Solutions',
            description: 'Leading provider of AI-powered enterprise solutions',
            keywords: ['AI', 'technology', 'enterprise solutions'],
            canonicalUrl: 'https://ziontechgroup.com',
            ogImage: 'https://ziontechgroup.com/og-image.jpg'
          }} />
          <AdvancedPerformanceMonitor />
          <PerformanceDashboard />
          
          <Router>
            <Routes>
              <Route path="/" element={
                <Suspense fallback={<LoadingSpinner />}>
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
    </AdvancedErrorBoundary>
  );
};

<<<<<<< HEAD
// Loading fallback component
const LoadingFallback: React.FC<{ height?: string }> = ({
  height = 'h-32',
}) => (
  <div className={`flex items-center justify-center ${height} w-full`}>
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  </div>
);

=======
>>>>>>> 9f279756f4679d4a3fe100469cdf0ea089dda745
export default App;
