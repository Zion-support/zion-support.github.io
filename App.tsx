<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense, useEffect, useState, useCallback } from "react";
=======
<<<<<<< HEAD
import React, { useState, useEffect, Suspense } from "react";
>>>>>>> main
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./app/components/Navigation";
import Sidebar from "./app/components/Sidebar";
import Footer from "./app/components/Footer";
import LoadingPage from "./app/components/Loading";
import HomePage from "./app/page";
<<<<<<< HEAD
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedSEO from "./app/components/EnhancedSEO";
=======
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import ErrorBoundary from "./app/components/ErrorBoundary";
>>>>>>> main

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
<<<<<<< HEAD
const BlogPage = React.lazy(() => import("./app/blog/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));

// AI Services
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIEcommercePage = React.lazy(() => import("./app/ai-ecommerce-solutions/page"));
const AIHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AIMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AIMobileAppPage = React.lazy(() => import("./app/ai-mobile-app-development/page"));
const AIProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AIQualityAssurancePage = React.lazy(() => import("./app/ai-quality-assurance/page"));
const AIRecommendationPage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AIRoboticsPage = React.lazy(() => import("./app/ai-robotics/page"));
const AISalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));

// 5G Services
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCityPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));

function App() {
=======
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const ITServicesPage = React.lazy(() => import("./app/it-services/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));

const App: React.FC = () => {
>>>>>>> main
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

<<<<<<< HEAD
  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

=======
>>>>>>> main
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <AnalyticsProvider>
<<<<<<< HEAD
        <AccessibilityEnhancer>
          <GlobalErrorBoundary>
            <EnhancedErrorBoundary>
              <Router>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <FuturisticBackground />
                  <EnhancedSEO
                    title="Zion Tech Group - Advanced AI and IT Solutions"
                    description="Leading provider of AI-powered solutions, 5G technology, and comprehensive IT services for modern businesses."
                    keywords="AI solutions, 5G technology, IT services, digital transformation, business automation"
                  />
                  
                  <Navigation onMenuClick={toggleSidebar} />
                  <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                  
                  <main className="relative z-10">
                    <Breadcrumb />
                    <Suspense fallback={<LoadingPage />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/partners" element={<PartnersPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        
                        {/* AI Services */}
                        <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                        <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                        <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                        <Route path="/ai-ecommerce-solutions" element={<AIEcommercePage />} />
                        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                        <Route path="/ai-marketing" element={<AIMarketingPage />} />
                        <Route path="/ai-mobile-app-development" element={<AIMobileAppPage />} />
                        <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                        <Route path="/ai-quality-assurance" element={<AIQualityAssurancePage />} />
                        <Route path="/ai-recommendation-engine" element={<AIRecommendationPage />} />
                        <Route path="/ai-robotics" element={<AIRoboticsPage />} />
                        <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
                        
                        {/* 5G Services */}
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                        <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                        <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCityPage />} />
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  
                  <Footer />
                  
                  {/* Performance and Analytics Components */}
                  <PerformanceMonitor />
                  <WebVitalsTracker />
                  <CoreWebVitals />
                  <EnhancedAccessibility />
                </div>
              </Router>
            </EnhancedErrorBoundary>
          </GlobalErrorBoundary>
        </AccessibilityEnhancer>
      </AnalyticsProvider>
    </HelmetProvider>
=======
        <PerformanceMonitor />
        <WebVitalsTracker />
        <AccessibilityEnhancer />
        <CoreWebVitals />
        <FuturisticBackground />
        <ErrorBoundary>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <Navigation 
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <Sidebar 
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
              />
              <main className="relative">
                <Suspense fallback={<LoadingPage />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </ErrorBoundary>
      </AnalyticsProvider>
    </HelmetProvider>
=======
import React, { Suspense, lazy, useEffect } from 'react';";
import { HelmetProvider } from 'react-helmet-async';";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';";
import './app/styles/futuristic.css';";
=======
import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app/styles/futuristic.css';
>>>>>>> main
// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));

// AI Services Pages
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'));

// IT Services Pages
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'));

// 5G Solutions Pages
const FiveGSolutionsPage = lazy(() => import('./app/5g-solutions/page'));

// Micro SaaS Solutions Pages
const MicroSaasSolutionsPage = lazy(() => import('./app/micro-saas-solutions/page'));

// Error fallback component
export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <button onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

function App() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/app/styles/futuristic.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);
    };

    preloadCriticalResources();
  }, []);
  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1">
              <ErrorBoundary>
                <PerformanceMonitor />
                <AccessibilityEnhancer />
                
                <Suspense fallback={<LoadingFallback />}>
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
                    <Route path="/cookies" element={<CookiesPage />} />
                    
                    {/* AI Services */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/ai-solutions" element={<AISolutionsPage />} />
                    
                    {/* IT Services */}
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    
                    {/* 5G Solutions */}
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    
                    {/* Micro SaaS Solutions */}
                    <Route path="/micro-saas-solutions" element={<MicroSaasSolutionsPage />} />
                    
                    {/* Catch all route */}
                    <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                        <p className="text-gray-600 mb-8">Page not found</p>
                        <a href="/" className="text-blue-600 hover:text-blue-800">Go back home</a>
                      </div>
                    </div>} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
=======
>>>>>>> main
  );
}

export default App;