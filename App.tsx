import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./app/components/Navigation";
import Sidebar from "./app/components/Sidebar";
import Footer from "./app/components/Footer";
import LoadingPage from "./app/components/Loading";
import HomePage from "./app/page";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import FuturisticBackground from "./app/components/FuturisticBackground";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import EnhancedAnalytics from "./app/components/EnhancedAnalytics";
import ErrorBoundary from "./app/components/ErrorBoundary";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const NotFoundPage = React.lazy(() => import("./app/404/page"));

// AI Services Pages
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// IT Services Pages
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// 5G Services Pages
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Performance optimization
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AnalyticsProvider>
          <PerformanceMonitor>
            <WebVitalsTracker />
            <AccessibilityEnhancer />
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                {/* Skip to main content link */}
                <a href="#main-content" className="skip-link">
                  Skip to main content
                </a>
                
                <FuturisticBackground>
                  <Navigation onSidebarToggle={toggleSidebar} />
                  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                  <Breadcrumb />
                  
                  <main id="main-content" role="main" className="relative z-10">
                    <Suspense fallback={<LoadingPage message="Loading Zion Tech Group..." />}>
                      <Routes>
                        {/* Main Pages */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        <Route path="/support" element={<SupportPage />} />

                        {/* AI Services Routes */}
                        <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                        <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                        <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                        <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                        <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                        <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />

                        {/* IT Services Routes */}
                        <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                        <Route path="/devops" element={<DevOpsServicesPage />} />
                        <Route path="/it-consulting" element={<ITConsultingPage />} />
                        <Route path="/network-security" element={<NetworkSecurityPage />} />
                        <Route path="/custom-software" element={<SoftwareDevelopmentPage />} />
                        <Route path="/system-integration" element={<SystemIntegrationPage />} />
                        <Route path="/web-development" element={<WebDevelopmentPage />} />

                        {/* 5G Services Routes */}
                        <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />

                        {/* 404 Route */}
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  
                  <Footer />
                </FuturisticBackground>
              </div>
            </Router>
          </PerformanceMonitor>
        </AnalyticsProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;