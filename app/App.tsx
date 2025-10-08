'use client';

import React, { Suspense, lazy, useEffect, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import SEOEnhancer from './components/SEOEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Utilities
import { logger } from './utils/logger';
import { performanceOptimizer, collectPerformanceMetrics } from './utils/performanceOptimizer';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/Home'));
const PerformanceDashboard = lazy(() => import('./components/PerformanceDashboard'));
const AdvancedPerformanceMonitor = lazy(() => import('./components/AdvancedPerformanceMonitor'));

// Helper functions
const lazyLoadImages = () => {
  if (typeof window === 'undefined') return;
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  images.forEach((img) => imageObserver.observe(img));
};

const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;
  // Preload critical resources
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = '/styles/critical.css';
  document.head.appendChild(link);
};

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.lifecycle('initialized', 'App');

    // Initialize performance monitoring
    lazyLoadImages();
    preloadCriticalResources();
    performanceOptimizer.init();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = collectPerformanceMetrics();
      const metrics = performanceOptimizer.getMetrics();
      if (pageLoadMetrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics collected:', pageLoadMetrics);
      }
      if (metrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics:', metrics);
      }
    }
    
    logger.lifecycle('Performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', { component: 'App' });

  }, []);

  const handleError = useCallback((error: Error, errorInfo: any) => {
    logger.error('Application Error', error, { component: 'ErrorBoundary' });
    // eslint-disable-next-line no-console
    console.error('Error info:', errorInfo);
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
                canonicalUrl: 'https://ziontechgroup.com'
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
                    const main = document.querySelector('main') || document.querySelector('#main-content');
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
                <Suspense fallback={null}>
                  <PerformanceDashboard />
                </Suspense>
                
                {/* Advanced Performance Monitor */}
                <Suspense fallback={null}>
                  <AdvancedPerformanceMonitor
                    enableRealTimeMonitoring={process.env['NODE_ENV'] === 'development'}
                    onMetricsUpdate={(metrics) => {
                      if (process.env['NODE_ENV'] === 'development') {
                        logger.performance('Performance Metrics', metrics as unknown as Record<string, unknown>, 'PerformanceMonitor');
                      }
                    }}
                  />
                </Suspense>
              </div>
            </Router>
          </SEOEnhancer>
        </AccessibilityEnhancer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;