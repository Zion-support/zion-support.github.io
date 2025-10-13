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
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import EnhancedSEO from "./app/components/EnhancedSEO";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import { performanceOptimizer } from "./utils/performanceUtils";
import { accessibilityManager } from "./utils/accessibilityUtils";

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
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecurityPage = React.lazy(() => import("./app/security/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const CustomDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

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

// Additional AI Services
const Ai3dGenerationPage = React.lazy(() => import("./app/ai-3d-generation/page"));
const AiAccountingAssistantPage = React.lazy(() => import("./app/ai-accounting-assistant/page"));
const AiAgriculturalIntelligenceProPage = React.lazy(() => import("./app/ai-agricultural-intelligence-pro/page"));
const AiAnalyticsDashboardPage = React.lazy(() => import("./app/ai-analytics-dashboard/page"));
const AiAnalyticsDashboardProPage = React.lazy(() => import("./app/ai-analytics-dashboard-pro/page"));
const AiApiManagementPage = React.lazy(() => import("./app/ai-api-management/page"));
const AiApiManagerPage = React.lazy(() => import("./app/ai-api-manager/page"));
const AiAutomatedReportingPage = React.lazy(() => import("./app/ai-automated-reporting/page"));
const AiAutomatedTestingPage = React.lazy(() => import("./app/ai-automated-testing/page"));
const AiAutonomousSystemsPage = React.lazy(() => import("./app/ai-autonomous-systems/page"));
const AiBlockchainAnalyticsPage = React.lazy(() => import("./app/ai-blockchain-analytics/page"));
const AiBlockchainSolutionsPage = React.lazy(() => import("./app/ai-blockchain-solutions/page"));
const AiBusinessIntelligenceProPage = React.lazy(() => import("./app/ai-business-intelligence-pro/page"));
const AiChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AiChatbotEnterprisePage = React.lazy(() => import("./app/ai-chatbot-enterprise/page"));
const AiClimatePredictionEnginePage = React.lazy(() => import("./app/ai-climate-prediction-engine/page"));
const AiClimateSolutionsProPage = React.lazy(() => import("./app/ai-climate-solutions-pro/page"));
const AiCloudInfrastructurePage = React.lazy(() => import("./app/ai-cloud-infrastructure/page"));
const AiCodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AiCodeAssistantProPage = React.lazy(() => import("./app/ai-code-assistant-pro/page"));
const AiCodeGenerationPage = React.lazy(() => import("./app/ai-code-generation/page"));
const AiCodeSecurityAuditorPage = React.lazy(() => import("./app/ai-code-security-auditor/page"));
const AiComputerVisionPage = React.lazy(() => import("./app/ai-computer-vision/page"));
const AiContentDeliveryNetworkPage = React.lazy(() => import("./app/ai-content-delivery-network/page"));
const AiContentGenerationProPage = React.lazy(() => import("./app/ai-content-generation-pro/page"));
const AiContentGeneratorPage = React.lazy(() => import("./app/ai-content-generator/page"));
const AiContentManagementPage = React.lazy(() => import("./app/ai-content-management/page"));
const AiContentModerationPage = React.lazy(() => import("./app/ai-content-moderation/page"));
const AiContentModerationProPage = React.lazy(() => import("./app/ai-content-moderation-pro/page"));
const AiContentStudioPage = React.lazy(() => import("./app/ai-content-studio/page"));
const AiContentWriterPage = React.lazy(() => import("./app/ai-content-writer/page"));
const AiConversationAnalyticsPage = React.lazy(() => import("./app/ai-conversation-analytics/page"));
const AiConversationalAiPage = React.lazy(() => import("./app/ai-conversational-ai/page"));
const AiCrmPage = React.lazy(() => import("./app/ai-crm/page"));
const AiCrmAssistantPage = React.lazy(() => import("./app/ai-crm-assistant/page"));
const AiCustomerChurnPage = React.lazy(() => import("./app/ai-customer-churn/page"));
const AiCustomerInsightsPage = React.lazy(() => import("./app/ai-customer-insights/page"));
const AiCustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AiCustomerSupportBotPage = React.lazy(() => import("./app/ai-customer-support-bot/page"));
const AiCustomerSupportChatbotPage = React.lazy(() => import("./app/ai-customer-support-chatbot/page"));
const AiCyberDefenseMatrixPage = React.lazy(() => import("./app/ai-cyber-defense-matrix/page"));
const AiCybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AiCybersecurityMonitorPage = React.lazy(() => import("./app/ai-cybersecurity-monitor/page"));
const AiCybersecurityMonitorProPage = React.lazy(() => import("./app/ai-cybersecurity-monitor-pro/page"));
const AiCybersecuritySuitePage = React.lazy(() => import("./app/ai-cybersecurity-suite/page"));
const AiCybersecuritySuiteProPage = React.lazy(() => import("./app/ai-cybersecurity-suite-pro/page"));
const AiDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AiDesignStudioPage = React.lazy(() => import("./app/ai-design-studio/page"));
const AiDevopsAutomationPage = React.lazy(() => import("./app/ai-devops-automation/page"));
const AiDocumentIntelligencePage = React.lazy(() => import("./app/ai-document-intelligence/page"));
const AiDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionAiCrmProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const ZionAiMarketingAutomationProPage = React.lazy(() => import("./app/zion-ai-marketing-automation-pro/page"));
const ZionAiProjectManagerProPage = React.lazy(() => import("./app/zion-ai-project-manager-pro/page"));
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

// New Innovative Services
const ZionAiClimateOptimizerPage = React.lazy(() => import("./app/zion-ai-climate-optimizer/page"));
const ZionAiMentalHealthAssistantPage = React.lazy(() => import("./app/zion-ai-mental-health-assistant/page"));
const ZionAiSupplyChainPredictorPage = React.lazy(() => import("./app/zion-ai-supply-chain-predictor/page"));
const ZionAiVoiceAnalyticsPage = React.lazy(() => import("./app/zion-ai-voice-analytics/page"));

// Additional Pages
const AccessibilityPage = React.lazy(() => import("./app/accessibility/page"));
const AdvancedSecuritySuitePage = React.lazy(() => import("./app/advanced-security-suite/page"));

function App() {
  useEffect(() => {
    // Initialize performance optimization
    performanceOptimizer.init();
    
    // Initialize accessibility manager
    accessibilityManager.init();
    
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png',
        '/images/ai-services-bg.jpg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };
    
    preloadCriticalResources();
  }, []);

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <AnalyticsProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <PerformanceEnhancer />
              <SEOOptimizer />
              <EnhancedSEO />
              <WebVitalsTracker />
              <CoreWebVitals />
              
              <Navigation />
              <Breadcrumb />
              
              <main className="relative">
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
                    <Route path="/accessibility" element={<AccessibilityPage />} />
                    
                    {/* Service Categories */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSaasPage />} />
                    <Route path="/it-services" element={<ItServicesPage />} />
                    <Route path="/cloud-services" element={<CloudServicesPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    
                    {/* IT Services */}
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/security" element={<CybersecurityPage />} />
                    <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                    <Route path="/custom-software" element={<CustomDevelopmentPage />} />
                    <Route path="/web-development" element={<WebDevelopmentPage />} />
                    <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                    <Route path="/database-management" element={<DatabaseManagementPage />} />
                    
                    {/* 5G Solutions */}
                    <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                    <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                    <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                    <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                    <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                    <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                    <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                    <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                    
                    {/* AI Services */}
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
                    
                    {/* Additional AI Services */}
                    <Route path="/ai-3d-generation" element={<Ai3dGenerationPage />} />
                    <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                    <Route path="/ai-agricultural-intelligence-pro" element={<AiAgriculturalIntelligenceProPage />} />
                    <Route path="/ai-analytics-dashboard" element={<AiAnalyticsDashboardPage />} />
                    <Route path="/ai-analytics-dashboard-pro" element={<AiAnalyticsDashboardProPage />} />
                    <Route path="/ai-api-management" element={<AiApiManagementPage />} />
                    <Route path="/ai-api-manager" element={<AiApiManagerPage />} />
                    <Route path="/ai-automated-reporting" element={<AiAutomatedReportingPage />} />
                    <Route path="/ai-automated-testing" element={<AiAutomatedTestingPage />} />
                    <Route path="/ai-autonomous-systems" element={<AiAutonomousSystemsPage />} />
                    <Route path="/ai-blockchain-analytics" element={<AiBlockchainAnalyticsPage />} />
                    <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                    <Route path="/ai-business-intelligence-pro" element={<AiBusinessIntelligenceProPage />} />
                    <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                    <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
                    <Route path="/ai-climate-prediction-engine" element={<AiClimatePredictionEnginePage />} />
                    <Route path="/ai-climate-solutions-pro" element={<AiClimateSolutionsProPage />} />
                    <Route path="/ai-cloud-infrastructure" element={<AiCloudInfrastructurePage />} />
                    <Route path="/ai-code-assistant" element={<AiCodeAssistantPage />} />
                    <Route path="/ai-code-assistant-pro" element={<AiCodeAssistantProPage />} />
                    <Route path="/ai-code-generation" element={<AiCodeGenerationPage />} />
                    <Route path="/ai-code-security-auditor" element={<AiCodeSecurityAuditorPage />} />
                    <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                    <Route path="/ai-content-delivery-network" element={<AiContentDeliveryNetworkPage />} />
                    <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
                    <Route path="/ai-content-generator" element={<AiContentGeneratorPage />} />
                    <Route path="/ai-content-management" element={<AiContentManagementPage />} />
                    <Route path="/ai-content-moderation" element={<AiContentModerationPage />} />
                    <Route path="/ai-content-moderation-pro" element={<AiContentModerationProPage />} />
                    <Route path="/ai-content-studio" element={<AiContentStudioPage />} />
                    <Route path="/ai-content-writer" element={<AiContentWriterPage />} />
                    <Route path="/ai-conversation-analytics" element={<AiConversationAnalyticsPage />} />
                    <Route path="/ai-conversational-ai" element={<AiConversationalAiPage />} />
                    <Route path="/ai-crm" element={<AiCrmPage />} />
                    <Route path="/ai-crm-assistant" element={<AiCrmAssistantPage />} />
                    <Route path="/ai-customer-churn" element={<AiCustomerChurnPage />} />
                    <Route path="/ai-customer-insights" element={<AiCustomerInsightsPage />} />
                    <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                    <Route path="/ai-customer-support-bot" element={<AiCustomerSupportBotPage />} />
                    <Route path="/ai-customer-support-chatbot" element={<AiCustomerSupportChatbotPage />} />
                    <Route path="/ai-cyber-defense-matrix" element={<AiCyberDefenseMatrixPage />} />
                    <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                    <Route path="/ai-cybersecurity-monitor" element={<AiCybersecurityMonitorPage />} />
                    <Route path="/ai-cybersecurity-monitor-pro" element={<AiCybersecurityMonitorProPage />} />
                    <Route path="/ai-cybersecurity-suite" element={<AiCybersecuritySuitePage />} />
                    <Route path="/ai-cybersecurity-suite-pro" element={<AiCybersecuritySuiteProPage />} />
                    <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
                    <Route path="/ai-design-studio" element={<AiDesignStudioPage />} />
                    <Route path="/ai-devops-automation" element={<AiDevopsAutomationPage />} />
                    <Route path="/ai-document-intelligence" element={<AiDocumentIntelligencePage />} />
                    <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                    
                    {/* Micro SAAS Services */}
                    <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                    <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                    <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                    <Route path="/zion-ai-crm-pro" element={<ZionAiCrmProPage />} />
                    <Route path="/zion-ai-marketing-automation-pro" element={<ZionAiMarketingAutomationProPage />} />
                    <Route path="/zion-ai-project-manager-pro" element={<ZionAiProjectManagerProPage />} />
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
                    
                    {/* Additional Services */}
                    <Route path="/advanced-security-suite" element={<AdvancedSecuritySuitePage />} />
                    
                    {/* New Innovative Services */}
                    <Route path="/zion-ai-climate-optimizer" element={<ZionAiClimateOptimizerPage />} />
                    <Route path="/zion-ai-mental-health-assistant" element={<ZionAiMentalHealthAssistantPage />} />
                    <Route path="/zion-ai-supply-chain-predictor" element={<ZionAiSupplyChainPredictorPage />} />
                    <Route path="/zion-ai-voice-analytics" element={<ZionAiVoiceAnalyticsPage />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <Sidebar />
            </div>
          </Router>
        </AnalyticsProvider>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;