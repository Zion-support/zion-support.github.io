import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
import SEOOptimizer from './components/SEOOptimizer';

// Lazy load pages for better performance
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));

// AI Services Pages
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AISolutionsPage = lazy(() => import('./ai-solutions/page'));

// IT Services Pages
const ITServicesPage = lazy(() => import('./it-services/page'));
const ITSolutionsPage = lazy(() => import('./it-solutions/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const SolutionsPage = lazy(() => import('./solutions/page'));

// 5G Solutions Pages
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'));

// Error fallback component
export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">
          Something went wrong
        </h3>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
);

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

const App = () => {
  return (
<<<<<<< HEAD
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <main className="flex-1">
              <ErrorBoundary>
                <PerformanceMonitor />
                <AccessibilityEnhancer>
                  <SEOOptimizer 
                    title="Zion Tech Group - Advanced AI and IT Solutions"
                    description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
                    keywords={['AI solutions', 'IT services', 'quantum computing', 'autonomous systems', 'enterprise technology']}
                  >
                    <Suspense fallback={<LoadingFallback />}>
                      <ErrorBoundary>
                        <Routes>
                          {/* Main Pages */}
                          <Route path="/" element={<HomePage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/services" element={<ServicesPage />} />
                          <Route path="/pricing" element={<PricingPage />} />
                          <Route path="/case-studies" element={<CaseStudiesPage />} />
                          <Route path="/blog" element={<BlogPage />} />
                          <Route path="/team" element={<TeamPage />} />
                          <Route path="/careers" element={<CareersPage />} />
                          <Route path="/privacy" element={<PrivacyPage />} />
                          <Route path="/terms" element={<TermsPage />} />
=======
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          App
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-309a

                          {/* AI Services */}
                          <Route path="/ai-services" element={<AIServicesPage />} />
                          <Route path="/ai-solutions" element={<AISolutionsPage />} />

                          {/* IT Services */}
                          <Route path="/it-services" element={<ITServicesPage />} />
                          <Route path="/it-solutions" element={<ITSolutionsPage />} />
                          <Route
                            path="/cloud-infrastructure"
                            element={<CloudInfrastructurePage />}
                          />
                          <Route
                            path="/digital-transformation"
                            element={<DigitalTransformationPage />}
                          />
                          <Route
                            path="/cybersecurity"
                            element={<CybersecurityPage />}
                          />
                          <Route path="/solutions" element={<SolutionsPage />} />

                          {/* 5G Solutions */}
                          <Route
                            path="/5g-solutions"
                            element={<FiveGSolutionsPage />}
                          />

                          {/* Catch all route */}
                          <Route
                            path="*"
                            element={
                              <div className="min-h-screen flex items-center justify-center">
                                <div className="text-center">
                                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    404
                                  </h1>
                                  <p className="text-gray-600 mb-8">
                                    Page not found
                                  </p>
                                  <a
                                    href="/"
                                    className="text-blue-600 hover:text-blue-800"
                                  >
                                    Go back home
                                  </a>
                                </div>
                              </div>
                            }
                          />
                        </Routes>
                      </ErrorBoundary>
                    </Suspense>
                  </SEOOptimizer>
                </AccessibilityEnhancer>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
};

App.displayName = 'App';
export default App;