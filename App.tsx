import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import GlobalErrorBoundary from "./app/components/GlobalErrorBoundary";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import LoadingPage from "./app/components/EnhancedLoading";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSAASPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));

// AI Services Pages
const AIBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AICodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionAICRMProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ZionAIProjectManagerProPage = React.lazy(() => import("./app/zion-ai-project-manager-pro/page"));
const ZionAIMarketingAutomationProPage = React.lazy(() => import("./app/zion-ai-marketing-automation-pro/page"));
const ZionFinancialAnalyticsProPage = React.lazy(() => import("./app/zion-financial-analytics-pro/page"));

// IT Services Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const DevOpsSolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));

// 5G Solutions Pages
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));

const App = () => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Add any global initialization here
      console.log('Zion Tech Group - Advanced AI and IT Solutions');
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <GlobalErrorBoundary>
          <AnalyticsProvider>
            <PerformanceMonitor />
            <WebVitalsTracker />
            <CoreWebVitals />
            <AccessibilityEnhancer />
            <EnhancedAccessibility />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
              <FuturisticBackground />
              
              <Navigation />
              <Sidebar />
              
              <main className="relative z-10">
                <Suspense fallback={<LoadingPage />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    
                    {/* Service Categories */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSAASPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    <Route path="/it-services" element={<ServicesPage />} />
                    
                    {/* AI Services */}
                    <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                    <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                    <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                    <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                    <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                    <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                    <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
                    <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                    
                    {/* Micro SAAS */}
                    <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                    <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                    <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                    <Route path="/zion-ai-crm-pro" element={<ZionAICRMProPage />} />
                    <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                    <Route path="/zion-ai-project-manager-pro" element={<ZionAIProjectManagerProPage />} />
                    <Route path="/zion-ai-marketing-automation-pro" element={<ZionAIMarketingAutomationProPage />} />
                    <Route path="/zion-financial-analytics-pro" element={<ZionFinancialAnalyticsProPage />} />
                    
                    {/* IT Services */}
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                    <Route path="/web-development" element={<WebDevelopmentPage />} />
                    <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                    <Route path="/database-management" element={<DatabaseManagementPage />} />
                    <Route path="/custom-software" element={<CustomSoftwarePage />} />
                    <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                    <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                    
                    {/* 5G Solutions */}
                    <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                    <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                    <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                    <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                    <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                    <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
            </div>
          </AnalyticsProvider>
        </GlobalErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default App;