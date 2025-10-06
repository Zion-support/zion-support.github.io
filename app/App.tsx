import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';

// Pages
import HomePage from './page';

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');
    console.log('🚀 Zion Tech Group App initialized');
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
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
                    main.scrollIntoView();
                  }
                }}
              >
                Skip to main content
              </a>

              <Routes>
                <Route path='/' element={<HomePage />} />
              </Routes>
            </div>
          </Router>
        </SEOOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;