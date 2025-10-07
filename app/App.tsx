import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceDashboard from './components/PerformanceDashboard';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
import { performanceOptimizer, prefetchResources } from '../utils/performanceOptimizer';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');

    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    performanceOptimizer.addCriticalResourceHints();
    prefetchResources(['/api/health']);
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = performanceOptimizer.measurePageLoad();
      if (pageLoadMetrics) {
        performanceOptimizer.reportWebVitals(pageLoadMetrics);
      }
    }
    
    console.log('Performance monitoring initialized');
    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
      <EnhancedErrorBoundary>
        <PerformanceOptimizer>
          <AccessibilityEnhancer>
            <SEOEnhancer
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
            >
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
                </div>
              </Router>
            </SEOEnhancer>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
      </EnhancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;