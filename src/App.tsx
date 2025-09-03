import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import SecurityHeaders from './components/SecurityHeaders';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/index'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ServicesPage = lazy(() => import('./pages/services'));
const SolutionsPage = lazy(() => import('./pages/solutions'));
const PartnersPage = lazy(() => import('./pages/partners'));
const PricingPage = lazy(() => import('./pages/pricing'));
const FAQPage = lazy(() => import('./pages/faq'));
const SupportPage = lazy(() => import('./pages/support'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="mb-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-6">We're sorry, but something unexpected happened.</p>
      </div>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Reload Page
        </button>
      </div>
    </div>
  </div>
);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <EnhancedErrorBoundary>
        <AccessibilityEnhancer>
          <SecurityHeaders />
          <Router>
            <div className="min-h-screen bg-gray-50">
              <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
                <main className="flex-1">
                  <AnimatePresence mode="wait">
                    <Suspense fallback={<LoadingSpinner />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/solutions" element={<SolutionsPage />} />
                        <Route path="/partners" element={<PartnersPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/faq" element={<FAQPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </Suspense>
                  </AnimatePresence>
                </main>
              </Layout>
            </div>
          </Router>
          <PerformanceMonitor />
        </AccessibilityEnhancer>
      </EnhancedErrorBoundary>
    </HelmetProvider>
  );
}

export default App;