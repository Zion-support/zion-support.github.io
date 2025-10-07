import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Utils
import { logger } from './utils/logger';

// Components
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
import { performanceOptimizer } from './utils/performanceOptimizer';

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
    
    console.log('Performance monitoring initialized');
    console.log('🚀 Zion Tech Group App initialized with comprehensive monitoring');
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={(error, errorInfo) => {
          logger.error('Application Error', 'ErrorBoundary', { error: error.message, errorInfo });
        }}
      >
        <PerformanceOptimizer>
          <AccessibilityEnhancer>
            <SEOEnhancer
              title='Zion Tech Group - Advanced AI and IT Solutions'
              description='Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.'
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
                <div className='App'>
                  <main id='main-content'>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Routes>
                        <Route path='/' element={<HomePage />} />
                        {/* Add more routes as needed */}
                      </Routes>
                    </Suspense>
                  </main>

                  {/* Performance Dashboard */}
                  <PerformanceDashboard />
                  
                  {/* Advanced Performance Monitor */}
                  <AdvancedPerformanceMonitor
                    enableRealTimeMonitoring={process.env.NODE_ENV === 'development'}
                    onMetricsUpdate={(metrics) => {
                      if (process.env.NODE_ENV === 'development') {
                        logger.performance('Performance Metrics', metrics as unknown as Record<string, unknown>, 'PerformanceMonitor');
                      }
                    }}
                  />
                </div>
              </Router>
            </SEOEnhancer>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
