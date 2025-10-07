'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Error boundary component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
import { performanceOptimizer, collectPerformanceMetrics } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

// Type definitions
interface ErrorEvent extends globalThis.Event {
  error?: Error;
}

interface PromiseRejectionEvent extends globalThis.Event {
  reason?: unknown;
}

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    const handleError = (error: ErrorEvent) => {
      logger.error('Global error:', error.error?.message || 'Unknown error');
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logger.error('Unhandled promise rejection:', String(event.reason));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      performanceOptimizer.init();
      collectPerformanceMetrics();
    }

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="App">
          <AccessibilityEnhancer>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <HomePage />
                    </Suspense>
                  }
                />
                {/* Add other routes here */}
              </Routes>
            </Router>
          </AccessibilityEnhancer>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;