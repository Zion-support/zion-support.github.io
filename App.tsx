import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/EnhancedLoadingStates";
import AdvancedPerformanceEnhancer from "./app/components/AdvancedPerformanceEnhancer";
import AdvancedPerformanceOptimizer from "./app/components/AdvancedPerformanceOptimizer";
import EnhancedSEOOptimizer from "./app/components/EnhancedSEOOptimizer";
import EnhancedAccessibilityManager from "./app/components/EnhancedAccessibilityManager";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const AIHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AISupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// New AI Services
const AIVoiceAssistantProPage = React.lazy(() => import("./app/ai-voice-assistant-pro/page"));
const AIBlockchainAnalyticsProPage = React.lazy(() => import("./app/ai-blockchain-analytics-pro/page"));
const AIClimatePredictionEnginePage = React.lazy(() => import("./app/ai-climate-prediction-engine/page"));
const AI3DGenerationProPage = React.lazy(() => import("./app/ai-3d-generation-pro/page"));

// AI Service Pages
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
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const DevopsSolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ZionDataSyncPage = React.lazy(() => import("./app/zion-data-sync/page"));
const ZionLeadMagnetPage = React.lazy(() => import("./app/zion-lead-magnet/page"));
const ZionProjectMasterPage = React.lazy(() => import("./app/zion-project-master/page"));
const ZionEmailAutomationPage = React.lazy(() => import("./app/zion-email-automation/page"));
const ZionCrmIntelligencePage = React.lazy(() => import("./app/zion-crm-intelligence/page"));
const ZionAiCustomerServiceProPage = React.lazy(() => import("./app/zion-ai-customer-service-pro/page"));
const ZionWorkflowAutomationPage = React.lazy(() => import("./app/zion-workflow-automation/page"));
const ZionAiAccountingAssistantPage = React.lazy(() => import("./app/zion-ai-accounting-assistant/page"));
const ZionSocialSchedulerPage = React.lazy(() => import("./app/zion-social-scheduler/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <FuturisticBackground>
                  <Navigation onSidebarToggle={toggleSidebar} />
                  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                  <Breadcrumb />
                  <main id="main-content" role="main">
                    <Suspense fallback={<LoadingPage />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
                        <Route path="/ai-supply-chain-optimizer" element={<AISupplyChainOptimizerPage />} />
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
                        
                        {/* New AI Services */}
                        <Route path="/ai-voice-assistant-pro" element={<AIVoiceAssistantProPage />} />
                        <Route path="/ai-blockchain-analytics-pro" element={<AIBlockchainAnalyticsProPage />} />
                        <Route path="/ai-climate-prediction-engine" element={<AIClimatePredictionEnginePage />} />
                        <Route path="/ai-3d-generation-pro" element={<AI3DGenerationProPage />} />
                        
                        {/* AI Services */}
                        <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                        <Route path="/ai-automation" element={<AiAutomationPage />} />
                        <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                        <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                        <Route path="/ai-customer-support" element={<AiCustomerServicePage />} />
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
                        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                        <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                        <Route path="/web-development" element={<WebDevelopmentPage />} />
                        <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                        <Route path="/database-management" element={<DatabaseManagementPage />} />
                        <Route path="/custom-software" element={<CustomSoftwarePage />} />
                        <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                        <Route path="/devops-solutions" element={<DevopsSolutionsPage />} />
                        
                        {/* Micro SAAS */}
                        <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                        <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                        <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                        <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                        <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                        <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                        <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                        <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                        <Route path="/zion-crm-intelligence" element={<ZionCrmIntelligencePage />} />
                        <Route path="/zion-ai-customer-service-pro" element={<ZionAiCustomerServiceProPage />} />
                        <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                        <Route path="/zion-ai-accounting-assistant" element={<ZionAiAccountingAssistantPage />} />
                        <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                        
                        {/* 5G Solutions */}
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                        <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                        <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                  <AdvancedPerformanceOptimizer 
                    enableImageOptimization={true}
                    enablePreloading={true}
                    enableCaching={true}
                    enableCompression={true}
                  />
                  <AdvancedPerformanceEnhancer 
                    enableImageOptimization={true}
                    enablePreloading={true}
                    enableCaching={true}
                    enableCompression={true}
                  />
                  <EnhancedAccessibilityManager
                    enableKeyboardNavigation={true}
                    enableScreenReader={true}
                    enableHighContrast={true}
                    enableFocusManagement={true}
                    enableVoiceNavigation={true}
                    enableReducedMotion={true}
                  />
                  <EnhancedAccessibility>
                    <div></div>
                  </EnhancedAccessibility>
                </FuturisticBackground>
                <AnalyticsProvider>
                  <div>
                    <PerformanceMonitor />
                    <WebVitalsTracker />
                    <EnhancedSEOOptimizer />
                  </div>
                </AnalyticsProvider>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;