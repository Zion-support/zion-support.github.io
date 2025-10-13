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
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import ErrorBoundary from "./app/components/ErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import EnhancedAnalytics from "./app/components/EnhancedAnalytics";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));

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

// Micro SAAS Pages
const ProjectManagementToolPage = React.lazy(() => import("./app/project-management-tool/page"));
const TeamCollaborationPage = React.lazy(() => import("./app/team-collaboration/page"));
const AnalyticsDashboardPage = React.lazy(() => import("./app/analytics-dashboard/page"));
const CustomerRelationshipPage = React.lazy(() => import("./app/customer-relationship/page"));
const InventoryManagementPage = React.lazy(() => import("./app/inventory-management/page"));
const FinancialTrackingPage = React.lazy(() => import("./app/financial-tracking/page"));

// IT Services Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecurityPage = React.lazy(() => import("./app/cybersecurity/page"));
const DataManagementPage = React.lazy(() => import("./app/data-management/page"));
const NetworkSolutionsPage = React.lazy(() => import("./app/network-solutions/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));

// 5G Solutions Pages
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCityPage = React.lazy(() => import("./app/5g-smart-city/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGMobileAppsPage = React.lazy(() => import("./app/5g-mobile-apps/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <FuturisticBackground />
            <div className="relative z-10">
              <Navigation onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
              
              <main className="min-h-screen">
                <Breadcrumb />
                <Suspense fallback={<LoadingPage />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSaasPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    <Route path="/tutorials" element={<TutorialsPage />} />
                    <Route path="/demo" element={<DemoPage />} />
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
                    
                    {/* Micro SAAS Routes */}
                    <Route path="/project-management-tool" element={<ProjectManagementToolPage />} />
                    <Route path="/team-collaboration" element={<TeamCollaborationPage />} />
                    <Route path="/analytics-dashboard" element={<AnalyticsDashboardPage />} />
                    <Route path="/customer-relationship" element={<CustomerRelationshipPage />} />
                    <Route path="/inventory-management" element={<InventoryManagementPage />} />
                    <Route path="/financial-tracking" element={<FinancialTrackingPage />} />
                    
                    {/* IT Services Routes */}
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/cybersecurity" element={<CybersecurityPage />} />
                    <Route path="/data-management" element={<DataManagementPage />} />
                    <Route path="/network-solutions" element={<NetworkSolutionsPage />} />
                    <Route path="/it-consulting" element={<ITConsultingPage />} />
                    <Route path="/system-integration" element={<SystemIntegrationPage />} />
                    
                    {/* 5G Solutions Routes */}
                    <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                    <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                    <Route path="/5g-smart-city" element={<FiveGSmartCityPage />} />
                    <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                    <Route path="/5g-mobile-apps" element={<FiveGMobileAppsPage />} />
                    <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
            </div>
          </div>
          
          <AnalyticsProvider>
            <PerformanceMonitor />
            <WebVitalsTracker />
            <AccessibilityEnhancer />
            <CoreWebVitals />
            <PerformanceOptimizer />
            <EnhancedAnalytics />
          </AnalyticsProvider>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
