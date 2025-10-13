import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import FuturisticBackground from './app/components/FuturisticBackground';
import AnalyticsProvider from './app/components/AnalyticsProvider';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import LoadingSpinner from './app/components/LoadingSpinner';
import LoadingStates from './app/components/LoadingStates';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import CaseStudiesPage from './app/case-studies/page';
import PartnersPage from './app/partners/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import AIServicesPage from './app/ai-services/page';
import MicroSAASPage from './app/micro-saas/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import BlogPage from './app/blog/page';
import DemoPage from './app/demo/page';
import SupportPage from './app/support/page';
import TutorialsPage from './app/tutorials/page';

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-lg font-medium text-gray-900">Something went wrong</h1>
        <p className="mt-2 text-sm text-gray-500">
          {error.message}
        </p>
        <div className="mt-6">
          <button
            onClick={resetErrorBoundary}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <Router>
          <AnalyticsProvider>
            <PerformanceOptimizer>
              <EnhancedAccessibility>
                <AccessibilityEnhancer>
                  <div className="min-h-screen bg-gray-900 text-white">
                    <FuturisticBackground>
                      <Navigation />
                      <main className="relative z-10" id="main-content" role="main">
                        <Suspense fallback={<LoadingStates />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/partners" element={<PartnersPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/ai-services" element={<AIServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSAASPage />} />
                            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/tutorials" element={<TutorialsPage />} />
                            {/* Catch all route */}
                            <Route path="*" element={
                              <div className="min-h-screen flex items-center justify-center">
                                <div className="text-center">
                                  <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                                  <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                                  <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Go Home
                                  </a>
                                </div>
                              </div>
                            } />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </FuturisticBackground>
                  </div>
                </AccessibilityEnhancer>
              </EnhancedAccessibility>
            </PerformanceOptimizer>
          </AnalyticsProvider>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
