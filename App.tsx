import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';
import PerformanceMonitor from './app/components/PerformanceMonitor';

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
    <HelmetProvider>
      <EnhancedErrorBoundary>
        <Router>
          <div className="min-h-screen bg-slate-900">
            <Header />
            <main className="relative z-10" id="main-content" role="main">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Main Pages */}
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
                  <Route path="/solutions" element={<SolutionsPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  
                  {/* Service Categories */}
                  <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/it-solutions" element={<ITSolutionsPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  
                  {/* Individual Service Pages */}
                  <Route path="/ai-analytics" element={<AIServicesPage />} />
                  <Route path="/ai-automation" element={<AIServicesPage />} />
                  <Route path="/ai-content-generation" element={<AIServicesPage />} />
                  <Route path="/ai-customer-support" element={<AIServicesPage />} />
                  <Route path="/ai-cybersecurity" element={<AIServicesPage />} />
                  <Route path="/ai-data-analytics" element={<AIServicesPage />} />
                  <Route path="/ai-chatbot" element={<AIServicesPage />} />
                  <Route path="/ai-computer-vision" element={<AIServicesPage />} />
                  <Route path="/ai-crm" element={<AIServicesPage />} />
                  <Route path="/ai-customer-insights" element={<AIServicesPage />} />
                  <Route path="/ai-content-management" element={<AIServicesPage />} />
                  <Route path="/ai-conversational-ai" element={<AIServicesPage />} />
                  <Route path="/ai-customer-sentiment-tracker" element={<AIServicesPage />} />
                  <Route path="/ai-customer-support-bot" element={<AIServicesPage />} />
                  <Route path="/ai-customer-support-chatbot" element={<AIServicesPage />} />
                  <Route path="/ai-cybersecurity-monitor" element={<AIServicesPage />} />
                  <Route path="/ai-cybersecurity-suite" element={<AIServicesPage />} />
                  <Route path="/ai-data-visualization" element={<AIServicesPage />} />
                  <Route path="/ai-enterprise-solutions" element={<AIServicesPage />} />
                  <Route path="/ai-fraud-detection" element={<AIServicesPage />} />
                  <Route path="/ai-healthcare-solutions" element={<AIServicesPage />} />
                  <Route path="/ai-image-recognition" element={<AIServicesPage />} />
                  <Route path="/ai-inventory-management" element={<AIServicesPage />} />
                  <Route path="/ai-logistics-optimization" element={<AIServicesPage />} />
                  <Route path="/ai-machine-learning" element={<AIServicesPage />} />
                  <Route path="/ai-natural-language-processing" element={<AIServicesPage />} />
                  <Route path="/ai-predictive-analytics" element={<AIServicesPage />} />
                  <Route path="/ai-process-automation" element={<AIServicesPage />} />
                  <Route path="/ai-quality-assurance" element={<AIServicesPage />} />
                  <Route path="/ai-recommendation-engine" element={<AIServicesPage />} />
                  <Route path="/ai-sales-forecasting" element={<AIServicesPage />} />
                  <Route path="/ai-supply-chain-optimization" element={<AIServicesPage />} />
                  <Route path="/ai-text-analysis" element={<AIServicesPage />} />
                  <Route path="/ai-voice-assistant" element={<AIServicesPage />} />
                  <Route path="/ai-workflow-automation" element={<AIServicesPage />} />
                  
                  {/* 5G Solutions */}
                  <Route path="/5g-solutions" element={<ITSolutionsPage />} />
                  <Route path="/5g-data-analytics" element={<ITSolutionsPage />} />
                  <Route path="/5g-edge-computing" element={<ITSolutionsPage />} />
                  <Route path="/5g-implementation" element={<ITSolutionsPage />} />
                  <Route path="/5g-iot-solutions" element={<ITSolutionsPage />} />
                  <Route path="/5g-mobile-applications" element={<ITSolutionsPage />} />
                  <Route path="/5g-network-infrastructure" element={<ITSolutionsPage />} />
                  <Route path="/5g-private-networks" element={<ITSolutionsPage />} />
                  <Route path="/5g-smart-city-solutions" element={<ITSolutionsPage />} />
                  
                  {/* 404 Page */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-xl text-gray-600 mb-8">Page not found</p>
                      <a href="/" className="text-blue-600 hover:text-blue-800 underline">Go back home</a>
                    </div>
                  </div>} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <AccessibilityEnhancer />
            <PerformanceMonitor />
          </div>
        </Router>
      </EnhancedErrorBoundary>
    </HelmetProvider>
  );
}

export default App;