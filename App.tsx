import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import HomePage from "./app/page";
import LoadingStates from './app/components/LoadingStates';
import { AnalyticsProvider } from './app/contexts/AnalyticsContext';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));

function App() {
  return (
    <HelmetProvider>
      <AnalyticsProvider>
        <Router>
          <div className="min-h-screen bg-gray-900">
            <Navigation />
            <ErrorBoundary
              FallbackComponent={({ error, resetErrorBoundary }) => (
                <div className="min-h-screen flex items-center justify-center bg-gray-900">
                  <div className="text-center p-8">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong</h1>
                    <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened.</p>
                    <button
                      onClick={resetErrorBoundary}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Try again
                    </button>
                    {process.env.NODE_ENV === 'development' && (
                      <details className="mt-4 text-left">
                        <summary className="cursor-pointer text-gray-400">Error details</summary>
                        <pre className="mt-2 p-4 bg-gray-800 text-red-400 text-sm overflow-auto">
                          {error?.stack}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
              )}
            >
              <Suspense fallback={<LoadingStates />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <Footer />
          </div>
        </Router>
      </AnalyticsProvider>
    </HelmetProvider>
  );
}

export default App;