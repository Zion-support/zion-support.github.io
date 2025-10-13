<<<<<<< HEAD
import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
<<<<<<< HEAD
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import LoadingStates from './app/components/LoadingStates';
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
=======
import './app/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import SkipLink from './app/components/SkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './app/hooks/usePerformanceMonitor';
import AnalyticsProvider from './app/components/AnalyticsProvider';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import SecurityEnhancer from './app/components/SecurityEnhancer';

<<<<<<< HEAD
// Lazy load pages
=======
=======
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import LoadingSpinner from './app/components/LoadingSpinner'
import SEOHead from './app/components/SEOHead'

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'));
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PartnersPage = React.lazy(() => import('./app/partners/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const FAQPage = React.lazy(() => import('./app/faq/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
>>>>>>> origin/cursor/ad-creation-and-management-f267

// AI Services Pages
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AIBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AIFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AIHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AIMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));

// 5G Solutions Pages
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGSmartCitiesPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Current Page' }
  ];

  return (
<<<<<<< HEAD
    <EnhancedErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceMonitor />
          <WebVitalsTracker />
          <EnhancedAccessibility />
          <AccessibilityEnhancer />
          <CoreWebVitals />
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <FuturisticBackground>
                <PerformanceOptimizer>
                  <Navigation />
                  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                  <Breadcrumb items={breadcrumbItems} />
                  
                  <main className="relative z-10" id="main-content" role="main">
                    <Suspense fallback={<LoadingStates isLoading={true}><div>Loading...</div></LoadingStates>}>
                      <Routes>
                        {/* Main Pages */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/blog" element={<BlogPage />} />

                        {/* AI Services */}
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                        <Route path="/ai-automation" element={<AIAutomationPage />} />
                        <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                        <Route path="/ai-customer-service" element={<AICustomerServicePage />} />
                        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                        <Route path="/ai-email-automation" element={<AIEmailAutomationPage />} />
                        <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
                        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                        <Route path="/ai-marketing" element={<AIMarketingPage />} />
                        <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                        <Route path="/ai-project-management" element={<AIProjectManagementPage />} />

                        {/* 5G Solutions */}
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitiesPage />} />

                        {/* Cloud Infrastructure */}
                        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />

                        {/* Catch all route */}
                        <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-white">404 - Page Not Found</h1></div>} />
                      </Routes>
                    </Suspense>
                  </main>
                  
                  <Footer />
                </PerformanceOptimizer>
              </FuturisticBackground>
            </div>
          </Router>
        </AnalyticsProvider>
      </HelmetProvider>
    </EnhancedErrorBoundary>
  );
=======
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <SEOHead />
            <Navigation />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* 404 Route */}
                <Route path="*" element={
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                      <p className="text-xl text-gray-300 mb-8">Page not found</p>
                      <a 
                        href="/" 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
}

export default App;