import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingSpinner from './components/ui/loading-spinner';

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
      <div className="App">
        <div className="min-h-screen">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/*" element={<ServicesPage />} />
              <Route path="/comprehensive-services" element={<SimplePage />} />
              <Route path="/pricing" element={<SimplePage />} />
              <Route path="/solutions" element={<SimplePage />} />
              <Route path="/solutions/*" element={<SimplePage />} />
              <Route path="/about" element={<SimplePage />} />
              <Route path="/about/*" element={<SimplePage />} />
              <Route path="/contact" element={<SimplePage />} />
              <Route path="/blog" element={<SimplePage />} />
              <Route path="/blog/*" element={<SimplePage />} />
              <Route path="/careers" element={<SimplePage />} />
              <Route path="/partners" element={<SimplePage />} />
              <Route path="/press" element={<SimplePage />} />
              <Route path="/case-studies" element={<SimplePage />} />
              <Route path="/research-development" element={<SimplePage />} />
              <Route path="/docs" element={<SimplePage />} />
              <Route path="/api" element={<SimplePage />} />
              <Route path="/developer" element={<SimplePage />} />
              <Route path="/help" element={<SimplePage />} />
              <Route path="/training" element={<SimplePage />} />
              <Route path="/community" element={<SimplePage />} />
              <Route path="/support" element={<SimplePage />} />
              <Route path="/sitemap" element={<SimplePage />} />
              <Route path="/comprehensive-sitemap" element={<SimplePage />} />
              <Route path="/privacy-policy" element={<SimplePage />} />
              <Route path="/terms-of-service" element={<SimplePage />} />
              <Route path="/cookie-policy" element={<SimplePage />} />
              <Route path="/request-quote" element={<SimplePage />} />
              <Route path="*" element={<SimplePage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;

