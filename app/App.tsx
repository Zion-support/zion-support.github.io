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
import { logger } from './utils/enhancedLogger';

// Lazy load components
const HomePage = lazy(() => import('./page'));
const PerformanceDashboard = lazy(() => import('./components/PerformanceDashboard'));
const AdvancedPerformanceMonitor = lazy(() => import('./components/AdvancedPerformanceMonitor'));

// Performance utilities
const lazyLoadImages = () => {
  if (typeof window === 'undefined') return;
  const images = document.querySelectorAll('img[data-src]');
  images.forEach((img) => {
    if (img instanceof HTMLImageElement) {
      img.src = img.dataset.src || '';
    }
  });
};

const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;
  // Preload critical resources if needed
};

const collectPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return null;
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  return {
    loadTime: navigation?.loadEventEnd || 0,
    domContentLoaded: navigation?.domContentLoadedEventEnd || 0,
  };
};

const performanceOptimizer = {
  init: () => {
    if (typeof window !== 'undefined') {
      // Initialize performance monitoring
    }
  },
  getMetrics: () => {
    if (typeof window === 'undefined' || !('performance' in window)) return null;
    return {
      timing: performance.timing,
      navigation: performance.navigation,
    };
  },
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-600">Please refresh the page to try again</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.info('initialized', { component: 'App' });

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
    
    logger.info('Performance monitoring initialized', { component: 'App' });
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', { component: 'App' });
  }, []);

  const handleError = useCallback((error: Error, errorInfo: any) => {
    logger.error('Application Error', { error: error.message, stack: error.stack, component: 'ErrorBoundary' });
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
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
              keywords={['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation', 'automation', 'cloud services', 'AI consulting', 'business intelligence', 'machine learning']}
              url="https://ziontechgroup.com"
              canonicalUrl="https://ziontechgroup.com"
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
                <PerformanceDashboard />
                
                {/* Advanced Performance Monitor */}
                <AdvancedPerformanceMonitor
                  enableRealTimeMonitoring={process.env['NODE_ENV'] === 'development'}
                  onMetricsUpdate={(metrics) => {
                    if (process.env['NODE_ENV'] === 'development') {
                      logger.info('Performance Metrics', { metrics, component: 'PerformanceMonitor' });
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