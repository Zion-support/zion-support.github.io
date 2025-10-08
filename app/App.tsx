'use client';

import React, { Suspense, lazy, useEffect, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import SEOEnhancer from './components/SEOEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
import { preloadCriticalResources, performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.lifecycle('initialized', 'App');

    // Initialize performance monitoring
    performanceOptimizer.init();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.getMetrics();
      if (metrics) {
        console.log('Performance metrics:', metrics);
      }
    }

    // Preload critical resources
    preloadCriticalResources();
    
    logger.lifecycle('performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', 'App');
  }, []);

  const handleError = useCallback((error: Error, errorInfo: any) => {
    logger.error('Application Error', 'ErrorBoundary', { error: error.message, errorInfo });
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={handleError}
      >
        <AccessibilityEnhancer>
          <SEOEnhancer
            title="Zion Tech Group - Advanced AI and IT Solutions"
            description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
          >
            <AdvancedSEOOptimizer
              seoData={{
                title: 'Zion Tech Group - Advanced AI and IT Solutions',
                description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
                keywords: ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation', 'automation', 'cloud services', 'AI consulting', 'business intelligence', 'machine learning'],
                canonicalUrl: 'https://ziontechgroup.com',
                ogImage: 'https://ziontechgroup.com/og-image.jpg',
                structuredData: {
                  '@type': 'TechCompany',
                  name: 'Zion Tech Group',
                  description: 'Advanced AI and IT Solutions Provider',
                  foundingDate: '2020',
                  numberOfEmployees: '50-100',
                  industry: 'Technology',
                  services: [
                    'AI Solutions',
                    'Digital Transformation',
                    'Cloud Services',
                    'Automation',
                    'Business Intelligence'
                  ]
                }
              }}
              enableStructuredData={true}
              enableOpenGraph={true}
              enableTwitterCards={true}
              enableSchemaMarkup={true}
            />
            <Router>
              <div className="App">
                {/* Skip to main content link for accessibility */}
                <a
                  href="#main-content"
                  className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
                  onClick={(e) => {
                    e.preventDefault();
                    const main =
                      document.querySelector('main') ||
                      document.querySelector('#main-content');
                    if (main) {
                      (main as HTMLElement).focus();
                      main.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Skip to main content
                </a>

                <main id="main-content">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      {/* Add more routes as needed */}
                    </Routes>
                  </Suspense>
                </main>

                {/* Performance Dashboard */}
                <PerformanceDashboard />
                
                {/* Advanced Performance Monitor */}
                <AdvancedPerformanceMonitor
                  enableRealTimeMonitoring={process.env['NODE_ENV'] === 'development'}
                  onMetricsUpdate={(metrics) => {
                    if (process.env['NODE_ENV'] === 'development') {
                      logger.performance('Performance Metrics', metrics as unknown as Record<string, unknown>, 'PerformanceMonitor');
                    }
                  }}
                />
              </div>
            </Router>
          </SEOEnhancer>
        </AccessibilityEnhancer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
