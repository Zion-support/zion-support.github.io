import React, { useEffect, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
// import { performanceOptimizer } from '../src/utils/performanceOptimizer';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    });

    // Initialize performance monitoring
    // if (performanceOptimizer) {
    //   performanceOptimizer.init();
    // }
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <PerformanceDashboard />
          </AccessibilityEnhancer>
        </SEOOptimizer>
        <Router>
          <div className="min-h-screen bg-white">
            <Navigation />
            <main>
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <React.Suspense fallback={<LoadingSpinner />}>
                      <HomePage />
                    </React.Suspense>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;