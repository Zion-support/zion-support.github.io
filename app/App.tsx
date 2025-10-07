import React, { Suspense, lazy, useEffect } from 'react';
import Link from 'next/link';
import { HelmetProvider } from 'react-helmet-async';
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

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    });

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AccessibilityEnhancer>
          <div className="min-h-screen bg-gray-50">
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          </div>
        </AccessibilityEnhancer>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;