'use client';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import PerformanceMonitor from './app/components/PerformanceMonitor';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'));

// Main App Component
function App() {

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
