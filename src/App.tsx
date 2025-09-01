import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingSpinner from './components/ui/loading-spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.default })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.default })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing2025').then(module => ({ default: module.default })));
const SimplePage = lazy(() => import('./pages/SimplePage').then(module => ({ default: module.default })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
      <div className="App">
        <div className="min-h-screen">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Services Routes */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/*" element={<ServicesPage />} />
              
              {/* Solutions Routes */}
              <Route path="/solutions" element={<SimplePage />} />
              <Route path="/solutions/*" element={<SimplePage />} />
              
              {/* Company Routes */}
              <Route path="/team" element={<SimplePage />} />
              <Route path="/careers" element={<SimplePage />} />
              <Route path="/partners" element={<SimplePage />} />
              <Route path="/press" element={<SimplePage />} />
              
              {/* Resource Routes */}
              <Route path="/blog" element={<SimplePage />} />
              <Route path="/blog/*" element={<SimplePage />} />
              <Route path="/case-studies" element={<SimplePage />} />
              <Route path="/research-development" element={<SimplePage />} />
              <Route path="/events" element={<SimplePage />} />
              <Route path="/webinars" element={<SimplePage />} />
              <Route path="/training" element={<SimplePage />} />
              <Route path="/white-papers" element={<SimplePage />} />
              
              {/* Support Routes */}
              <Route path="/help" element={<SimplePage />} />
              <Route path="/support" element={<SimplePage />} />
              <Route path="/faq" element={<SimplePage />} />
              <Route path="/docs" element={<SimplePage />} />
              <Route path="/api" element={<SimplePage />} />
              <Route path="/developer" element={<SimplePage />} />
              
              {/* Business Routes */}
              <Route path="/pricing" element={<ComprehensivePricing />} />
              <Route path="/request-quote" element={<SimplePage />} />
              <Route path="/marketplace" element={<SimplePage />} />
              <Route path="/talent" element={<SimplePage />} />
              <Route path="/community" element={<SimplePage />} />
              
              {/* Legal Routes */}
              <Route path="/privacy" element={<SimplePage />} />
              <Route path="/privacy-policy" element={<SimplePage />} />
              <Route path="/terms" element={<SimplePage />} />
              <Route path="/terms-of-service" element={<SimplePage />} />
              <Route path="/cookies" element={<SimplePage />} />
              <Route path="/cookie-policy" element={<SimplePage />} />
              
              {/* Utility Routes */}
              <Route path="/sitemap" element={<SimplePage />} />
              <Route path="/comprehensive-sitemap" element={<SimplePage />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<SimplePage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
