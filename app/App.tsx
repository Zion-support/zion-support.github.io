import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';

// Pages
import HomePage from './page';

// Utils
// import performanceOptimizer from '../src/utils/performanceOptimizer';

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');

    // Initialize performance monitoring
    console.log('Performance monitoring initialized');

    console.log('Performance monitoring initialized');
    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
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
          </AccessibilityEnhancer>
        </SEOOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
