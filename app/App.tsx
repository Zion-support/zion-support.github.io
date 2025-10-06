import React, { useEffect, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import PerformanceDashboard from './components/PerformanceDashboard';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
import performanceOptimizer from '../src/utils/performanceOptimizer';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');

    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    performanceOptimizer.prefetchResources([]);
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.measurePageLoad();
      if (metrics) {
        performanceOptimizer.reportWebVitals(metrics);
      }
    }
    
    console.log('Performance monitoring initialized');
    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className='App'>
          {/* Skip to main content link for accessibility */}
          <a
            href='#main-content'
            className='skip-link'
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

          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* Add more routes as needed */}
          </Routes>

          {/* Performance Dashboard */}
          <PerformanceDashboard />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;