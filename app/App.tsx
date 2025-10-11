import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Import components
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AppLoadingSpinner from './components/AppLoadingSpinner';

// Import pages
import HomePage from './page';
import AboutPage from './about/page';
import AccessibilityPage from './accessibility/page';
import FiveGImplementationPage from './5g-implementation/page';

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300"
      >
        Try again
      </button>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;