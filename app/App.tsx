import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Performance utilities
import { performanceOptimizer } from './utils/performanceOptimizer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const ContactPage = lazy(() => import('./contact/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));

// Styles
import '../src/index.css';

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
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.getMetrics();
      const score = performanceOptimizer.getPerformanceScore();
      console.log('Performance metrics:', metrics, 'Score:', score);
    }
    // Performance monitoring is handled by other components
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer />
        <AccessibilityEnhancer>
          <Router>
            <div className="App">
              <Navigation />
              
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/enterprise" element={<EnterprisePage />} />
                </Routes>
              </Suspense>
              
              <Footer />
            </div>
          </Router>
        </AccessibilityEnhancer>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;