import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Loading component
const AppLoadingSpinner = () => (
  <LoadingSpinner />
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;