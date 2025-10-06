import React, { useEffect } from 'react';

// Components
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import PerformanceDashboard from './components/PerformanceDashboard';

// Utils
import { performanceOptimizer } from '../src/utils/performanceOptimizer';

// Styles
import './globals.css';

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');

    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    performanceOptimizer.addCriticalResourceHints();
    
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
    <ErrorBoundary>
      <div>
        <SEOOptimizer>
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

            {children}

            {/* Performance Dashboard */}
            <PerformanceDashboard />
          </div>
        </SEOOptimizer>
      </div>
    </ErrorBoundary>
  );
};

export default App;