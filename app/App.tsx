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

const App = () => {
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
                <Route path="/about" element={<AboutPage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                
                {/* Add more routes as needed */}
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;