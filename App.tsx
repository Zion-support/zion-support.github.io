import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/accessibility-enhanced.css";
import "./app/styles/responsive-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import EnhancedSEO from "./app/components/EnhancedSEO";
import FuturisticBackground from "./app/components/FuturisticBackground";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const ItServicesPage = React.lazy(() => import("./app/it-services/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// AI Service Pages - Only existing ones
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AiDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AiEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AiFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AiMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AiPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AiProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AiRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AiSalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AiWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// New AI Services
const AiQuantumComputingPage = React.lazy(() => import("./app/ai-quantum-computing/page"));
const AiBlockchainSolutionsPage = React.lazy(() => import("./app/ai-blockchain-solutions/page"));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const IotSolutionsPage = React.lazy(() => import("./app/iot-solutions/page"));
const DevopsSolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));
const MachineLearningPage = React.lazy(() => import("./app/machine-learning/page"));

// Micro SAAS Pages - Only existing ones
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionAiCrmProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ZionDataSyncPage = React.lazy(() => import("./app/zion-data-sync/page"));
const ZionLeadMagnetPage = React.lazy(() => import("./app/zion-lead-magnet/page"));
const ZionProjectMasterPage = React.lazy(() => import("./app/zion-project-master/page"));
const ZionEmailAutomationPage = React.lazy(() => import("./app/zion-email-automation/page"));
const ZionSocialSchedulerPage = React.lazy(() => import("./app/zion-social-scheduler/page"));
const ZionWorkflowAutomationPage = React.lazy(() => import("./app/zion-workflow-automation/page"));
const ZionInvoiceGeniusPage = React.lazy(() => import("./app/zion-invoice-genius/page"));
const ZionInventorySmartPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const ZionComplianceManagerPage = React.lazy(() => import("./app/zion-compliance-manager/page"));
const ZionPerformanceMonitorPage = React.lazy(() => import("./app/zion-performance-monitor/page"));

// New Micro SAAS Services
const ZionAISalesPredictorPage = React.lazy(() => import("./app/zion-ai-sales-predictor/page"));
const ZionAIWorkflowOptimizerPage = React.lazy(() => import("./app/zion-ai-workflow-optimizer/page"));
const ZionAICustomerInsightsProPage = React.lazy(() => import("./app/zion-ai-customer-insights-pro/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveG5gIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));

function App() {
  useEffect(() => {
    // Performance optimization
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => console.log('SW registered'))
        .catch(error => console.log('SW registration failed'));
    }
  }, []);

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <Router>
          <AnalyticsProvider>
            <WebVitalsTracker />
            <CoreWebVitals />
            <AccessibilityEnhancer />
            <PerformanceEnhancer />
            <SEOOptimizer />
            <EnhancedSEO />
            <FuturisticBackground />
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <Navigation />
              <Sidebar />
              <Breadcrumb />
              <main className="relative z-10">
                <Suspense fallback={<LoadingPage />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/tutorials" element={<TutorialsPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    <Route path="/sitemap" element={<SitemapPage />} />

                    {/* Service Categories */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSaasPage />} />
                    <Route path="/it-services" element={<ItServicesPage />} />
                    <Route path="/cloud-services" element={<CloudServicesPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />

                    {/* AI Services */}
                    <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                    <Route path="/ai-automation" element={<AiAutomationPage />} />
                    <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                    <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                    <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                    <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                    <Route path="/ai-email-automation" element={<AiEmailAutomationPage />} />
                    <Route path="/ai-fraud-detection" element={<AiFraudDetectionPage />} />
                    <Route path="/ai-marketing" element={<AiMarketingPage />} />
                    <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                    <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                    <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                    <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                    <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                    <Route path="/ai-quantum-computing" element={<AiQuantumComputingPage />} />
                    <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />

                    {/* IT Services */}
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                    <Route path="/web-development" element={<WebDevelopmentPage />} />
                    <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                    <Route path="/database-management" element={<DatabaseManagementPage />} />
                    <Route path="/custom-software" element={<CustomSoftwarePage />} />
                    <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                    <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                    <Route path="/iot-solutions" element={<IotSolutionsPage />} />
                    <Route path="/devops-solutions" element={<DevopsSolutionsPage />} />
                    <Route path="/machine-learning" element={<MachineLearningPage />} />

                    {/* Micro SAAS Services */}
                    <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                    <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                    <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                    <Route path="/zion-ai-crm-pro" element={<ZionAiCrmProPage />} />
                    <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                    <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                    <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                    <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                    <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                    <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                    <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                    <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
                    <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                    <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
                    <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
                    <Route path="/zion-ai-sales-predictor" element={<ZionAISalesPredictorPage />} />
                    <Route path="/zion-ai-workflow-optimizer" element={<ZionAIWorkflowOptimizerPage />} />
                    <Route path="/zion-ai-customer-insights-pro" element={<ZionAICustomerInsightsProPage />} />

                    {/* 5G Solutions */}
                    <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                    <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                    <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                    <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                    <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                    <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                    <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                    <Route path="/5g-iot-solutions" element={<FiveG5gIotSolutionsPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </AnalyticsProvider>
        </Router>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;