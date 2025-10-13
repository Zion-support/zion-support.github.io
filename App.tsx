"use client";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import AdvancedPerformanceEnhancer from "./app/components/AdvancedPerformanceEnhancer";
import EnhancedAccessibilityManager from "./app/components/EnhancedAccessibilityManager";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedPerformanceOptimizer from "./app/components/EnhancedPerformanceOptimizer";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import EnhancedSEO from "./app/components/EnhancedSEO";
import { AnalyticsProvider } from "./app/components/EnhancedAnalytics";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import FuturisticBackground from "./app/components/FuturisticBackground";
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import ErrorHandler from "./app/components/ErrorHandler";
import { usePerformanceOptimization } from "./hooks/usePerformanceOptimization";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAnalyticsDashboardProPage = React.lazy(() => import("./app/ai-analytics-dashboard-pro/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AiBusinessIntelligenceProPage = React.lazy(() => import("./app/ai-business-intelligence-pro/page"));
const AiCodeAssistantProPage = React.lazy(() => import("./app/ai-code-assistant-pro/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiContentGeneratorPage = React.lazy(() => import("./app/ai-content-generator/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AiCustomerSupportChatbotPage = React.lazy(() => import("./app/ai-customer-support-chatbot/page"));
const AiCybersecuritySuiteProPage = React.lazy(() => import("./app/ai-cybersecurity-suite-pro/page"));
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

// Additional AI Service Pages
const AccessibilityPage = React.lazy(() => import("./app/accessibility/page"));
const AiAccountingAssistantPage = React.lazy(() => import("./app/ai-accounting-assistant/page"));
const AiAgriculturalIntelligenceProPage = React.lazy(() => import("./app/ai-agricultural-intelligence-pro/page"));
const AiApiManagementPage = React.lazy(() => import("./app/ai-api-management/page"));
const AiApiManagerPage = React.lazy(() => import("./app/ai-api-manager/page"));
const AiAutomatedReportingPage = React.lazy(() => import("./app/ai-automated-reporting/page"));
const AiAutomatedTestingPage = React.lazy(() => import("./app/ai-automated-testing/page"));
const AiAutonomousSystemsPage = React.lazy(() => import("./app/ai-autonomous-systems/page"));
const AiBlockchainAnalyticsPage = React.lazy(() => import("./app/ai-blockchain-analytics/page"));
const AiBlockchainSolutionsPage = React.lazy(() => import("./app/ai-blockchain-solutions/page"));
const AiChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AiChatbotEnterprisePage = React.lazy(() => import("./app/ai-chatbot-enterprise/page"));
const AiClimatePredictionEnginePage = React.lazy(() => import("./app/ai-climate-prediction-engine/page"));
const AiClimateSolutionsProPage = React.lazy(() => import("./app/ai-climate-solutions-pro/page"));
const AiCloudInfrastructurePage = React.lazy(() => import("./app/ai-cloud-infrastructure/page"));
const AiCodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AiCodeGenerationPage = React.lazy(() => import("./app/ai-code-generation/page"));
const AiCodeSecurityAuditorPage = React.lazy(() => import("./app/ai-code-security-auditor/page"));
const AiComputerVisionPage = React.lazy(() => import("./app/ai-computer-vision/page"));
const AiContentDeliveryNetworkPage = React.lazy(() => import("./app/ai-content-delivery-network/page"));
const AiContentGenerationProPage = React.lazy(() => import("./app/ai-content-generation-pro/page"));
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
const AiCyberDefenseMatrixPage = React.lazy(() => import("./app/ai-cyber-defense-matrix/page"));
const AiCybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AiCybersecurityMonitorPage = React.lazy(() => import("./app/ai-cybersecurity-monitor/page"));
const AiCybersecurityMonitorProPage = React.lazy(() => import("./app/ai-cybersecurity-monitor-pro/page"));
const AiCybersecuritySuitePage = React.lazy(() => import("./app/ai-cybersecurity-suite/page"));
const AiDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AiDesignStudioPage = React.lazy(() => import("./app/ai-design-studio/page"));
const AiDevopsAutomationPage = React.lazy(() => import("./app/ai-devops-automation/page"));
const AiDocumentIntelligencePage = React.lazy(() => import("./app/ai-document-intelligence/page"));
const AiDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(
  () => import("./app/cloud-infrastructure/page"),
);
const CybersecuritySolutionsPage = React.lazy(
  () => import("./app/cybersecurity-solutions/page"),
);
const WebDevelopmentPage = React.lazy(
  () => import("./app/web-development/page"),
);
const MobileDevelopmentPage = React.lazy(
  () => import("./app/mobile-development/page"),
);
const DatabaseManagementPage = React.lazy(
  () => import("./app/database-management/page"),
);
const CustomSoftwarePage = React.lazy(
  () => import("./app/custom-software/page"),
);
const NetworkInfrastructurePage = React.lazy(
  () => import("./app/network-infrastructure/page"),
);
const CloudNativeDevelopmentPage = React.lazy(
  () => import("./app/cloud-native-development/page"),
);
const BlockchainDevelopmentPage = React.lazy(
  () => import("./app/blockchain-development/page"),
);
const ECommerceDevelopmentPage = React.lazy(
  () => import("./app/e-commerce-development/page"),
);
const DataEngineeringPage = React.lazy(
  () => import("./app/data-engineering/page"),
);
const CybersecurityAdvancedPage = React.lazy(
  () => import("./app/cybersecurity-advanced/page"),
);
const CloudMigrationAdvancedPage = React.lazy(
  () => import("./app/cloud-migration-advanced/page"),
);
const MachineLearningOpsPage = React.lazy(
  () => import("./app/machine-learning-ops/page"),
);
const EnterpriseIntegrationPage = React.lazy(
  () => import("./app/enterprise-integration/page"),
);
const PerformanceOptimizationPage = React.lazy(
  () => import("./app/performance-optimization/page"),
);
const DisasterRecoveryAdvancedPage = React.lazy(
  () => import("./app/disaster-recovery-advanced/page"),
);
const ComplianceAutomationPage = React.lazy(
  () => import("./app/compliance-automation/page"),
);
const CloudCostOptimizationPage = React.lazy(
  () => import("./app/cloud-cost-optimization/page"),
);
const SecurityAutomationPage = React.lazy(
  () => import("./app/security-automation/page"),
);
const DataVisualizationPage = React.lazy(
  () => import("./app/data-visualization/page"),
);
const WorkflowAutomationPage = React.lazy(
  () => import("./app/workflow-automation/page"),
);
const CloudNativeSecurityPage = React.lazy(
  () => import("./app/cloud-native-security/page"),
);
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const IotSolutionsPage = React.lazy(() => import("./app/iot-solutions/page"));
const DevopsSolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));
const MachineLearningPage = React.lazy(() => import("./app/machine-learning/page"));
const QuantumComputingPage = React.lazy(() => import("./app/quantum-computing/page"));
const RoboticsPage = React.lazy(() => import("./app/robotics/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(
  () => import("./app/zion-analytics-pro/page"),
);
const ZionSecurityShieldPage = React.lazy(
  () => import("./app/zion-security-shield/page"),
);
const ZionCloudVaultPage = React.lazy(
  () => import("./app/zion-cloud-vault/page"),
);
const ZionContentStudioPage = React.lazy(
  () => import("./app/zion-content-studio/page"),
);
const ZionDataSyncPage = React.lazy(() => import("./app/zion-data-sync/page"));
const ZionLeadMagnetPage = React.lazy(
  () => import("./app/zion-lead-magnet/page"),
);
const ZionProjectMasterPage = React.lazy(
  () => import("./app/zion-project-master/page"),
);
const ZionEmailAutomationPage = React.lazy(
  () => import("./app/zion-email-automation/page"),
);
const ZionSocialSchedulerPage = React.lazy(
  () => import("./app/zion-social-scheduler/page"),
);
const ZionWorkflowAutomationPage = React.lazy(
  () => import("./app/zion-workflow-automation/page"),
);
const ZionInvoiceGeniusPage = React.lazy(
  () => import("./app/zion-invoice-genius/page"),
);
const ZionInventorySmartPage = React.lazy(
  () => import("./app/zion-inventory-smart/page"),
);
const ZionComplianceManagerPage = React.lazy(
  () => import("./app/zion-compliance-manager/page"),
);
const ZionPerformanceMonitorPage = React.lazy(
  () => import("./app/zion-performance-monitor/page"),
);

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(
  () => import("./app/5g-data-analytics/page"),
);
const FiveGEdgeComputingPage = React.lazy(
  () => import("./app/5g-edge-computing/page"),
);
const FiveGImplementationPage = React.lazy(
  () => import("./app/5g-implementation/page"),
);
const FiveGMobileApplicationsPage = React.lazy(
  () => import("./app/5g-mobile-applications/page"),
);
const FiveGNetworkInfrastructurePage = React.lazy(
  () => import("./app/5g-network-infrastructure/page"),
);
const FiveGPrivateNetworksPage = React.lazy(
  () => import("./app/5g-private-networks/page"),
);
const FiveGSmartCitySolutionsPage = React.lazy(
  () => import("./app/5g-smart-city-solutions/page"),
);
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // Initialize performance optimizations
  usePerformanceOptimization({
    enableLazyLoading: true,
    enablePreloading: true,
    enableImageOptimization: true,
    enableCodeSplitting: true,
    enableCaching: true,
  });

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <GlobalErrorBoundary>
      <ErrorHandler>
        <EnhancedErrorBoundary>
        <HelmetProvider>
          <AccessibilityEnhancer>
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
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ServicesPage />} />
                  <Route path="/micro-saas" element={<ServicesPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />

                  {/* AI Service Routes */}
                  <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                  <Route path="/ai-analytics-dashboard-pro" element={<AiAnalyticsDashboardProPage />} />
                  <Route path="/ai-automation" element={<AiAutomationPage />} />
                  <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                  <Route path="/ai-business-intelligence-pro" element={<AiBusinessIntelligenceProPage />} />
                  <Route path="/ai-code-assistant-pro" element={<AiCodeAssistantProPage />} />
                  <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                  <Route path="/ai-content-generator" element={<AiContentGeneratorPage />} />
                  <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                  <Route path="/ai-customer-support-chatbot" element={<AiCustomerSupportChatbotPage />} />
                  <Route path="/ai-cybersecurity-suite-pro" element={<AiCybersecuritySuiteProPage />} />
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

                  {/* Additional AI Service Routes */}
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                  <Route path="/ai-agricultural-intelligence-pro" element={<AiAgriculturalIntelligenceProPage />} />
                  <Route path="/ai-api-management" element={<AiApiManagementPage />} />
                  <Route path="/ai-api-manager" element={<AiApiManagerPage />} />
                  <Route path="/ai-automated-reporting" element={<AiAutomatedReportingPage />} />
                  <Route path="/ai-automated-testing" element={<AiAutomatedTestingPage />} />
                  <Route path="/ai-autonomous-systems" element={<AiAutonomousSystemsPage />} />
                  <Route path="/ai-blockchain-analytics" element={<AiBlockchainAnalyticsPage />} />
                  <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                  <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                  <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
                  <Route path="/ai-climate-prediction-engine" element={<AiClimatePredictionEnginePage />} />
                  <Route path="/ai-climate-solutions-pro" element={<AiClimateSolutionsProPage />} />
                  <Route path="/ai-cloud-infrastructure" element={<AiCloudInfrastructurePage />} />
                  <Route path="/ai-code-assistant" element={<AiCodeAssistantPage />} />
                  <Route path="/ai-code-generation" element={<AiCodeGenerationPage />} />
                  <Route path="/ai-code-security-auditor" element={<AiCodeSecurityAuditorPage />} />
                  <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                  <Route path="/ai-content-delivery-network" element={<AiContentDeliveryNetworkPage />} />
                  <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
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
                  <Route path="/ai-cyber-defense-matrix" element={<AiCyberDefenseMatrixPage />} />
                  <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                  <Route path="/ai-cybersecurity-monitor" element={<AiCybersecurityMonitorPage />} />
                  <Route path="/ai-cybersecurity-monitor-pro" element={<AiCybersecurityMonitorProPage />} />
                  <Route path="/ai-cybersecurity-suite" element={<AiCybersecuritySuitePage />} />
                  <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
                  <Route path="/ai-design-studio" element={<AiDesignStudioPage />} />
                  <Route path="/ai-devops-automation" element={<AiDevopsAutomationPage />} />
                  <Route path="/ai-document-intelligence" element={<AiDocumentIntelligencePage />} />
                  <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />

                  {/* IT Service Routes */}
                  <Route
                    path="/cloud-infrastructure"
                    element={<CloudInfrastructurePage />}
                  />
                  <Route
                    path="/cybersecurity-solutions"
                    element={<CybersecuritySolutionsPage />}
                  />
                  <Route
                    path="/web-development"
                    element={<WebDevelopmentPage />}
                  />
                  <Route
                    path="/mobile-development"
                    element={<MobileDevelopmentPage />}
                  />
                  <Route
                    path="/database-management"
                    element={<DatabaseManagementPage />}
                  />
                  <Route
                    path="/custom-software"
                    element={<CustomSoftwarePage />}
                  />
                  <Route
                    path="/network-infrastructure"
                    element={<NetworkInfrastructurePage />}
                  />
                  <Route
                    path="/cloud-native-development"
                    element={<CloudNativeDevelopmentPage />}
                  />
                  <Route
                    path="/blockchain-development"
                    element={<BlockchainDevelopmentPage />}
                  />
                  <Route
                    path="/e-commerce-development"
                    element={<ECommerceDevelopmentPage />}
                  />
                  <Route
                    path="/data-engineering"
                    element={<DataEngineeringPage />}
                  />
                  <Route
                    path="/cybersecurity-advanced"
                    element={<CybersecurityAdvancedPage />}
                  />
                  <Route
                    path="/cloud-migration-advanced"
                    element={<CloudMigrationAdvancedPage />}
                  />
                  <Route
                    path="/machine-learning-ops"
                    element={<MachineLearningOpsPage />}
                  />
                  <Route
                    path="/enterprise-integration"
                    element={<EnterpriseIntegrationPage />}
                  />
                  <Route
                    path="/performance-optimization"
                    element={<PerformanceOptimizationPage />}
                  />
                  <Route
                    path="/disaster-recovery-advanced"
                    element={<DisasterRecoveryAdvancedPage />}
                  />
                  <Route
                    path="/compliance-automation"
                    element={<ComplianceAutomationPage />}
                  />
                  <Route
                    path="/cloud-cost-optimization"
                    element={<CloudCostOptimizationPage />}
                  />
                  <Route
                    path="/security-automation"
                    element={<SecurityAutomationPage />}
                  />
                  <Route
                    path="/data-visualization"
                    element={<DataVisualizationPage />}
                  />
                  <Route
                    path="/workflow-automation"
                    element={<WorkflowAutomationPage />}
                  />
                  <Route
                    path="/cloud-native-security"
                    element={<CloudNativeSecurityPage />}
                  />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/iot-solutions" element={<IotSolutionsPage />} />
                  <Route path="/devops-solutions" element={<DevopsSolutionsPage />} />
                  <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                  <Route path="/machine-learning" element={<MachineLearningPage />} />
                  <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                  <Route path="/robotics" element={<RoboticsPage />} />

                  {/* Micro SAAS Routes */}
                  <Route
                    path="/zion-analytics-pro"
                    element={<ZionAnalyticsProPage />}
                  />
                  <Route
                    path="/zion-security-shield"
                    element={<ZionSecurityShieldPage />}
                  />
                  <Route
                    path="/zion-cloud-vault"
                    element={<ZionCloudVaultPage />}
                  />
                  <Route
                    path="/zion-content-studio"
                    element={<ZionContentStudioPage />}
                  />
                  <Route
                    path="/zion-data-sync"
                    element={<ZionDataSyncPage />}
                  />
                  <Route
                    path="/zion-lead-magnet"
                    element={<ZionLeadMagnetPage />}
                  />
                  <Route
                    path="/zion-project-master"
                    element={<ZionProjectMasterPage />}
                  />
                  <Route
                    path="/zion-email-automation"
                    element={<ZionEmailAutomationPage />}
                  />
                  <Route
                    path="/zion-social-scheduler"
                    element={<ZionSocialSchedulerPage />}
                  />
                  <Route
                    path="/zion-workflow-automation"
                    element={<ZionWorkflowAutomationPage />}
                  />
                  <Route
                    path="/zion-invoice-genius"
                    element={<ZionInvoiceGeniusPage />}
                  />
                  <Route
                    path="/zion-inventory-smart"
                    element={<ZionInventorySmartPage />}
                  />
                  <Route
                    path="/zion-compliance-manager"
                    element={<ZionComplianceManagerPage />}
                  />
                  <Route
                    path="/zion-performance-monitor"
                    element={<ZionPerformanceMonitorPage />}
                  />

                  {/* 5G Solutions Routes */}
                  <Route
                    path="/5g-data-analytics"
                    element={<FiveGDataAnalyticsPage />}
                  />
                  <Route
                    path="/5g-edge-computing"
                    element={<FiveGEdgeComputingPage />}
                  />
                  <Route
                    path="/5g-implementation"
                    element={<FiveGImplementationPage />}
                  />
                  <Route
                    path="/5g-mobile-applications"
                    element={<FiveGMobileApplicationsPage />}
                  />
                  <Route
                    path="/5g-network-infrastructure"
                    element={<FiveGNetworkInfrastructurePage />}
                  />
                  <Route
                    path="/5g-private-networks"
                    element={<FiveGPrivateNetworksPage />}
                  />
                  <Route
                    path="/5g-smart-city-solutions"
                    element={<FiveGSmartCitySolutionsPage />}
                  />
                  <Route
                    path="/5g-solutions"
                    element={<FiveGSolutionsPage />}
                  />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                  <EnhancedPerformanceOptimizer />
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
                  />
                  <EnhancedAccessibility>
                    <div></div>
                  </EnhancedAccessibility>
                </FuturisticBackground>
                <AnalyticsProvider>
                  <div>
                    <PerformanceMonitor />
                    <WebVitalsTracker />
                    <PerformanceEnhancer />
                    <SEOOptimizer />
                    <EnhancedSEO />
                  </div>
                </AnalyticsProvider>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
        </EnhancedErrorBoundary>
      </ErrorHandler>
    </GlobalErrorBoundary>
  );
}

export default App;
