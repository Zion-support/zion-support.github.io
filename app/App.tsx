import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';

// Pages
import HomePage from './page';

// Utils
import { setupGlobalErrorHandling, monitorPerformance } from '../utils/errorHandling';
import { performanceOptimizer } from '../utils/performanceOptimizer';

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    setupGlobalErrorHandling();
    
    // Start performance monitoring
    monitorPerformance();
    
    // Initialize performance optimizer
    performanceOptimizer.init();
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <PerformanceDashboard>
              <Router>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </Router>
            </PerformanceDashboard>
          </AccessibilityEnhancer>
        </SEOOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;