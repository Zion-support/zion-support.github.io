import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load page components for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/pages/AboutPage'));
const ContactPage = lazy(() => import('./app/pages/ContactPage'));
const ServicesPage = lazy(() => import('./app/pages/ServicesPage'));
const BlogPage = lazy(() => import('./app/pages/BlogPage'));
const TutorialsPage = lazy(() => import('./app/pages/TutorialsPage'));
const DemoPage = lazy(() => import('./app/pages/DemoPage'));
const SupportPage = lazy(() => import('./app/pages/SupportPage'));
const PrivacyPage = lazy(() => import('./app/pages/PrivacyPage'));
const TermsPage = lazy(() => import('./app/pages/TermsPage'));
const PricingPage = lazy(() => import('./app/pages/PricingPage'));
const SolutionsPage = lazy(() => import('./app/pages/SolutionsPage'));
const MicroSaaSSolutionsPage = lazy(() => import('./app/micro-saas-solutions/page'));
const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'));
const ITSolutionsPage = lazy(() => import('./app/it-solutions/page'));

// Service Pages
const AIServicesPage = lazy(() => import('./app/pages/AIServicesPage'));
const ITServicesPage = lazy(() => import('./app/pages/ITServicesPage'));
const CloudInfrastructurePage = lazy(() => import('./app/pages/CloudInfrastructurePage'));
const DigitalTransformationPage = lazy(() => import('./app/pages/DigitalTransformationPage'));
const CaseStudiesPage = lazy(() => import('./app/pages/CaseStudiesPage'));
const CareersPage = lazy(() => import('./app/pages/CareersPage'));

// Error fallback component
export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
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
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900">
            <Navigation />
            <main className="relative z-10" id="main-content" role="main">
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                    <Route path="/ai-solutions" element={<AISolutionsPage />} />
                    <Route path="/it-solutions" element={<ITSolutionsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/tutorials" element={<TutorialsPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    
                    {/* Service Pages */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    
                    {/* Catch all route */}
                    <Route path="*" element={
                      <div className="min-h-screen flex items-center justify-center bg-slate-900">
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                          <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                          <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                            Go Home
                          </a>
                        </div>
                      </div>
                    } />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>
            <Footer />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;