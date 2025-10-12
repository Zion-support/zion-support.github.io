import React, { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <PerformanceMonitor>
        <AccessibilityEnhancer>
          <Suspense fallback={<LoadingSpinner />}>
            {/* App content goes here */}
          </Suspense>
        </AccessibilityEnhancer>
      </PerformanceMonitor>
    </ErrorBoundary>
  );
}

export default App;
