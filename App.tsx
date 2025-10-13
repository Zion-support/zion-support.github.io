import React, { Suspense, useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/futuristic-advanced.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
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
import LoadingPageEnhanced from "./app/components/EnhancedLoading";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import EnhancedSEO from "./app/components/EnhancedSEO";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// AI Service pages
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AiDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AiEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AiFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AiHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AiMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AiPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AiProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AiRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AiSalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AiWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// IT Service Pages
const ItServicesPage = React.lazy(() => import("./app/it-services/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecurityPage = React.lazy(() => import("./app/security/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const CustomDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));

// 5G Solutions
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));

// Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <AnalyticsProvider>
            <PerformanceMonitor />
            <WebVitalsTracker />
            <CoreWebVitals />
            <AccessibilityEnhancer />
            <EnhancedAccessibility />
            <PerformanceOptimizer />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
              <FuturisticBackground />
              
              <Navigation 
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
              
              <Sidebar 
                isOpen={isSidebarOpen} 
                onClose={closeSidebar} 
              />
              
              <main className="relative z-10">
                <Breadcrumb />
                <Suspense fallback={<LoadingPageEnhanced />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/tutorials" element={<TutorialsPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    <Route path="/sitemap" element={<SitemapPage />} />
                    
                    {/* AI Services */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                    <Route path="/ai-automation" element={<AiAutomationPage />} />
                    <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                    <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                    <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                    <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                    <Route path="/ai-email-automation" element={<AiEmailAutomationPage />} />
                    <Route path="/ai-fraud-detection" element={<AiFraudDetectionPage />} />
                    <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                    <Route path="/ai-marketing" element={<AiMarketingPage />} />
                    <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                    <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                    <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                    <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                    <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                    
                    {/* IT Services */}
                    <Route path="/it-services" element={<ItServicesPage />} />
                    <Route path="/cloud-services" element={<CloudServicesPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/security" element={<CybersecurityPage />} />
                    <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                    <Route path="/custom-software" element={<CustomDevelopmentPage />} />
                    <Route path="/web-development" element={<WebDevelopmentPage />} />
                    <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                    <Route path="/database-management" element={<DatabaseManagementPage />} />
                    <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                    
                    {/* 5G Solutions */}
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                    <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                    <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                    <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                    <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                    <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                    
                    {/* Micro SAAS */}
                    <Route path="/micro-saas" element={<MicroSaasPage />} />
                    <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                    <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                    <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                    <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
            </div>
          </AnalyticsProvider>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
}

export default App;