'use client';
import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load the home page
const HomePage = lazy(() => import('./page'));

// Loading component
const AppLoadingSpinner = () => (
  <LoadingSpinner />
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <div className="App">
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <Suspense fallback={<AppLoadingSpinner />}>
            <HomePage />
          </Suspense>
        </div>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;