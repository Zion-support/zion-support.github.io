import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import EnhancedHeaderNew from './components/EnhancedHeaderNew';
import EnhancedFooter from './components/EnhancedFooter';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/index'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ServicesPage = lazy(() => import('./pages/services'));
const SolutionsPage = lazy(() => import('./pages/solutions'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-center"><h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1><p className="text-gray-600 mb-4">Please refresh the page or contact support.</p><button onClick={() => window.location.reload()} className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors">Refresh Page</button></div></div>}>
      <div className="min-h-screen bg-gray-50">
        <EnhancedHeaderNew />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/*" element={<ServicesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/solutions/*" element={<SolutionsPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <EnhancedFooter />
      </div>
    </ErrorBoundary>
  );
}

export default App;
