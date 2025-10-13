<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
<<<<<<< HEAD
=======
"use client";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import ErrorBoundary from "./app/components/ErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/EnhancedPerformanceOptimizer";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import { AnalyticsProvider } from "./app/components/EnhancedAnalytics";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import FuturisticBackground from "./app/components/FuturisticBackground";
<<<<<<< HEAD
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import ErrorHandler from "./app/components/ErrorHandler";
import ServiceWorker from "./app/components/ServiceWorker";
import SecurityHeaders from "./app/components/SecurityHeaders";
import EnhancedSEO from "./app/components/EnhancedSEO";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import FuturisticBackground from './app/components/FuturisticBackground';
import AnalyticsProvider from './app/components/AnalyticsProvider';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
<<<<<<< HEAD
import LoadingSpinner from './app/components/LoadingSpinner';

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

function App() {
=======
import { usePerformanceMonitor } from './app/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import ServiceWorker from './app/components/ServiceWorker';
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary';
// Structured data for SEO - moved to SEOHead component
=======
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import EnhancedSEOHead from './app/components/EnhancedSEOHead';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import ServiceWorkerRegistration from './app/components/ServiceWorkerRegistration';
import { PageSkeleton } from './app/components/LoadingSkeleton';
=======
'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import SEOHead from './app/components/SEOHead';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
// Lazy load pages for better performance
<<<<<<< HEAD
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
<<<<<<< HEAD
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
// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <React.Fragment>{children}</React.Fragment>;
};
=======
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasServicesPage = React.lazy(() => import('./app/micro-saas-services/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'));
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const AIContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'));
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'));
const AIEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'));
const AIVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'));
const CybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'));
const DevOpsCICDPage = React.lazy(() => import('./app/devops-cicd/page'));
const DataAnalyticsPage = React.lazy(() => import('./app/data-analytics/page'));
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));
=======
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

// AI Services
const AiServicesPage = lazy(() => import('./app/ai-services/page'));
const AiMarketingPage = lazy(() => import('./app/ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./app/ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./app/ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./app/ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./app/ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./app/ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./app/ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./app/ai-workflow-automation/page'));
const AiCustomerSupportPage = lazy(() => import('./app/ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./app/ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./app/ai-data-visualization/page'));
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

// IT Services
const ItServicesPage = lazy(() => import('./app/it-services/page'));
const ItInfrastructurePage = lazy(() => import('./app/it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./app/it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));

<<<<<<< HEAD

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
// Main App Component
const App: React.FC = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d86
  return (
<<<<<<< HEAD
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <AnalyticsProvider>
            <PerformanceOptimizer>
              <EnhancedAccessibility>
                <AccessibilityEnhancer>
                  <div className="min-h-screen bg-gray-900 text-white">
                    <FuturisticBackground>
                      <Navigation />
                      <main className="relative z-10">
                        <Suspense fallback={<LoadingSpinner />}>
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
      </ErrorBoundary>
    </HelmetProvider>
  );
}
=======
    <ErrorBoundary>
      <HelmetProvider>
        <ServiceWorkerRegistration />
        <Router>
          <SecurityHeaders />
          <ServiceWorker />
          <EnhancedSEO />
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <EnhancedSEOHead />
            <Navigation />
            <Suspense fallback={<PageSkeleton />}>
              <Routes>
=======
// Emerging Technologies
const BlockchainPage = lazy(() => import('./app/blockchain/page'));
const QuantumComputingPage = lazy(() => import('./app/quantum-computing/page'));
const IoTEdgeComputingPage = lazy(() => import('./app/iot-edge-computing/page'));
const ARVRSolutionsPage = lazy(() => import('./app/ar-vr-solutions/page'));
const AutonomousSystemsPage = lazy(() => import('./app/autonomous-systems/page'));

// Micro SaaS
const MicroSaasPage = lazy(() => import('./app/micro-saas/page'));
const AIContentWriterProPage = lazy(() => import('./app/micro-saas/ai-content-writer-pro/page'));

// Support Pages
const DocsPage = lazy(() => import('./app/docs/page'));
const ApiDocsPage = lazy(() => import('./app/api-docs/page'));
const SupportPage = lazy(() => import('./app/support/page'));
const StatusPage = lazy(() => import('./app/status/page'));
const ConsultationPage = lazy(() => import('./app/consultation/page'));

// Loading component
const AppLoadingSpinner = () => <LoadingSpinner />;
=======
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ServicesPage from './app/services/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import ITServicesPage from './app/it-services/page'
import MicroSAASServicesPage from './app/micro-saas-services/page'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <SEOHead />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Navigation />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              <Suspense fallback={<AppLoadingSpinner />}>
                <Routes>
                {/* Main Pages */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
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
<<<<<<< HEAD
                
                {/* AI Service Pages */}
                <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                
                {/* IT Service Pages */}
                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                
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
            <PerformanceMonitor />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37

=======
                <Route path="/cookies" element={<CookiesPage />} />

                {/* AI Services */}
                <Route path="/ai-services" element={<AiServicesPage />} />
                <Route path="/ai-marketing" element={<AiMarketingPage />} />
                <Route path="/ai-automation" element={<AiAutomationPage />} />
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                <Route path="/ai-fintech" element={<AiFintechPage />} />
                <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />

                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
                <Route path="/it-support" element={<ItSupportPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />

                {/* Emerging Technologies */}
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />

                {/* Micro SaaS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/micro-saas/ai-content-writer-pro" element={<AIContentWriterProPage />} />

                {/* Support Pages */}
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<ApiDocsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
=======
import StructuredData from "./app/components/StructuredData";
import PerformanceMonitor from "./app/components/PerformanceMonitor";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <FuturisticBackground>
                <Navigation onSidebarToggle={toggleSidebar} />
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                <Breadcrumb />
                <main id="main-content" role="main">
                  <Suspense fallback={<LoadingPage />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/tutorials" element={<TutorialsPage />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/cookies" element={<CookiesPage />} />
                      <Route path="/sitemap" element={<SitemapPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </FuturisticBackground>
              <StructuredData type="Organization" />
              <StructuredData type="WebSite" />
              <PerformanceMonitor />
            </div>
          </Router>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
  );
}

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
export default App;
