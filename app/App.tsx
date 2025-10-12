import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/futuristic.css';
import './styles/futuristic-enhanced.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import SEOHead from './components/EnhancedSEOHead';
import Breadcrumb from './components/Breadcrumb';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import PerformanceMonitor from './components/PerformanceMonitor';
import FuturisticBackground from './components/FuturisticBackground';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./about/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const ServicesPage = React.lazy(() => import('./services/page'));
const PricingPage = React.lazy(() => import('./pricing/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'));
const CareersPage = React.lazy(() => import('./careers/page'));
const AIServicesPage = React.lazy(() => import('./ai-services/page'));
const ItServicesPage = React.lazy(() => import('./it-services/page'));
const MicroSaasPage = React.lazy(() => import('./micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./tutorials/page'));
const ConsultationPage = React.lazy(() => import('./consultation/page'));
const DemoPage = React.lazy(() => import('./demo/page'));
const SupportPage = React.lazy(() => import('./support/page'));
const PrivacyPage = React.lazy(() => import('./privacy/page'));
const TermsPage = React.lazy(() => import('./terms/page'));
const CookiesPage = React.lazy(() => import('./cookies/page'));
const SitemapPage = React.lazy(() => import('./sitemap/page'));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./ai-chatbot-builder/page'));
const AiCybersecurityPage = React.lazy(() => import('./ai-cybersecurity/page'));
const AiCrmPage = React.lazy(() => import('./ai-crm/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./ai-data-analytics/page'));
const AiHealthcarePage = React.lazy(() => import('./ai-healthcare/page'));
const AiFinancialServicesPage = React.lazy(() => import('./ai-financial-services/page'));
const AiComputerVisionPage = React.lazy(() => import('./ai-computer-vision/page'));
const AiVoiceSolutionsPage = React.lazy(() => import('./ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = React.lazy(() => import('./ai-hr-solutions/page'));
const AiContentGenerationPage = React.lazy(() => import('./ai-content-generation/page'));
const AiWorkflowAutomationPage = React.lazy(() => import('./ai-workflow-automation/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./ai-document-processing/page'));
const AiPredictiveAnalyticsPage = React.lazy(() => import('./ai-predictive-analytics/page'));
const AiEdgeComputingPage = React.lazy(() => import('./ai-edge-computing/page'));
const AiVideoAnalysisPage = React.lazy(() => import('./ai-video-analysis/page'));
const AiSpeechSynthesisPage = React.lazy(() => import('./ai-speech-synthesis/page'));
const AiRecommendationEnginePage = React.lazy(() => import('./ai-recommendation-engine/page'));
const AiSentimentAnalysisPage = React.lazy(() => import('./ai-sentiment-analysis/page'));
const AiChatbotEnterprisePage = React.lazy(() => import('./ai-chatbot-enterprise/page'));
const AiContentModerationPage = React.lazy(() => import('./ai-content-moderation/page'));
const AiPredictiveModelingPage = React.lazy(() => import('./ai-predictive-modeling/page'));
const AiDocumentIntelligencePage = React.lazy(() => import('./ai-document-intelligence/page'));
const AiConversationAnalyticsPage = React.lazy(() => import('./ai-conversation-analytics/page'));
const AiSupplyChainAiPage = React.lazy(() => import('./ai-supply-chain-ai/page'));
const AiHealthcareDiagnosticsPage = React.lazy(() => import('./ai-healthcare-diagnostics/page'));
const AiFinancialForecastingPage = React.lazy(() => import('./ai-financial-forecasting/page'));
const AiIotAnalyticsPage = React.lazy(() => import('./ai-iot-analytics/page'));
const AiConversationalAiPage = React.lazy(() => import('./ai-conversational-ai/page'));
const AiAutomatedTestingPage = React.lazy(() => import('./ai-automated-testing/page'));
const AiKnowledgeManagementPage = React.lazy(() => import('./ai-knowledge-management/page'));
const AiCustomerChurnPage = React.lazy(() => import('./ai-customer-churn/page'));
const AiAutomatedReportingPage = React.lazy(() => import('./ai-automated-reporting/page'));
const AiVoiceAssistantPage = React.lazy(() => import('./ai-voice-assistant/page'));
const AiContentGenerationProPage = React.lazy(() => import('./ai-content-generation-pro/page'));
const AiAccountingAssistantPage = React.lazy(() => import('./ai-accounting-assistant/page'));
const AiCybersecurityMonitorProPage = React.lazy(() => import('./ai-cybersecurity-monitor-pro/page'));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySolutionsPage = React.lazy(() => import('./cybersecurity-solutions/page'));
const WebDevelopmentPage = React.lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = React.lazy(() => import('./mobile-development/page'));
const ApiDevelopmentPage = React.lazy(() => import('./api-development/page'));
const DatabaseManagementPage = React.lazy(() => import('./database-management/page'));
const DevopsCicdPage = React.lazy(() => import('./devops-cicd/page'));
const ItSupportPage = React.lazy(() => import('./it-support/page'));
const DataAnalyticsBiPage = React.lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage = React.lazy(() => import('./custom-software/page'));
const NetworkInfrastructurePage = React.lazy(() => import('./network-infrastructure/page'));
const ItAssetManagementPage = React.lazy(() => import('./it-asset-management/page'));
const ItSecurityServicesPage = React.lazy(() => import('./it-security-services/page'));
const ItProjectManagementPage = React.lazy(() => import('./it-project-management/page'));
const CloudNativeDevelopmentPage = React.lazy(() => import('./cloud-native-development/page'));
const AiIntegrationServicesPage = React.lazy(() => import('./ai-integration-services/page'));
const BlockchainDevelopmentPage = React.lazy(() => import('./blockchain-development/page'));
const IotDevelopmentPage = React.lazy(() => import('./iot-development/page'));
const ECommerceDevelopmentPage = React.lazy(() => import('./e-commerce-development/page'));
const ApiDevelopmentAdvancedPage = React.lazy(() => import('./api-development-advanced/page'));
const DataEngineeringPage = React.lazy(() => import('./data-engineering/page'));
const CybersecurityAdvancedPage = React.lazy(() => import('./cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = React.lazy(() => import('./cloud-migration-advanced/page'));
const DevopsAdvancedPage = React.lazy(() => import('./devops-advanced/page'));
const MachineLearningOpsPage = React.lazy(() => import('./machine-learning-ops/page'));
const EnterpriseIntegrationPage = React.lazy(() => import('./enterprise-integration/page'));
const PerformanceOptimizationPage = React.lazy(() => import('./performance-optimization/page'));
const DisasterRecoveryAdvancedPage = React.lazy(() => import('./disaster-recovery-advanced/page'));
const ComplianceAutomationPage = React.lazy(() => import('./compliance-automation/page'));
const CloudCostOptimizationPage = React.lazy(() => import('./cloud-cost-optimization/page'));
const SecurityAutomationPage = React.lazy(() => import('./security-automation/page'));
const DataVisualizationPage = React.lazy(() => import('./data-visualization/page'));
const WorkflowAutomationPage = React.lazy(() => import('./workflow-automation/page'));
const CloudNativeSecurityPage = React.lazy(() => import('./cloud-native-security/page'));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import('./zion-analytics-pro/page'));
const ZionChatAiPage = React.lazy(() => import('./zion-chat-ai/page'));
const ZionSecurityShieldPage = React.lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = React.lazy(() => import('./zion-cloud-vault/page'));
const ZionContentStudioPage = React.lazy(() => import('./zion-content-studio/page'));
const ZionCrmIntelligencePage = React.lazy(() => import('./zion-crm-intelligence/page'));
const ZionDataSyncPage = React.lazy(() => import('./zion-data-sync/page'));
const ZionLeadMagnetPage = React.lazy(() => import('./zion-lead-magnet/page'));
const ZionProjectMasterPage = React.lazy(() => import('./zion-project-master/page'));
const ZionEmailAutomationPage = React.lazy(() => import('./zion-email-automation/page'));
const ZionSocialSchedulerPage = React.lazy(() => import('./zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = React.lazy(() => import('./zion-workflow-automation/page'));
const ZionAiContentModerationPage = React.lazy(() => import('./zion-ai-content-moderation/page'));
const ZionAiPredictiveMaintenancePage = React.lazy(() => import('./zion-ai-predictive-maintenance/page'));
const ZionAiFraudDetectorPage = React.lazy(() => import('./zion-ai-fraud-detector/page'));
const ZionAiSupplyChainOptimizerPage = React.lazy(() => import('./zion-ai-supply-chain-optimizer/page'));
const ZionAiDocumentAiPage = React.lazy(() => import('./zion-ai-document-ai/page'));
const ZionAiCustomerServiceProPage = React.lazy(() => import('./zion-ai-customer-service-pro/page'));
const ZionAiContractAnalyzerPage = React.lazy(() => import('./zion-ai-contract-analyzer/page'));
const ZionAiTranslatorProPage = React.lazy(() => import('./zion-ai-translator-pro/page'));
const ZionInvoiceGeniusPage = React.lazy(() => import('./zion-invoice-genius/page'));
const ZionInventorySmartPage = React.lazy(() => import('./zion-inventory-smart/page'));
const ZionComplianceManagerPage = React.lazy(() => import('./zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = React.lazy(() => import('./zion-performance-monitor/page'));
const ZionAiCodeReviewerPage = React.lazy(() => import('./zion-ai-code-reviewer/page'));
const ZionAiSurveyBuilderPage = React.lazy(() => import('./zion-ai-survey-builder/page'));
const ZionAiMarketingAutomationPage = React.lazy(() => import('./zion-ai-marketing-automation/page'));
const ZionAiAccountingAssistantPage = React.lazy(() => import('./zion-ai-accounting-assistant/page'));
const ZionAiSeoOptimizerPage = React.lazy(() => import('./zion-ai-seo-optimizer/page'));
const ZionAiDataCleanerPage = React.lazy(() => import('./zion-ai-data-cleaner/page'));
const ZionCustomerInsightsPage = React.lazy(() => import('./zion-customer-insights/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./5g-implementation/page'));
const FiveGIotSolutionsPage = React.lazy(() => import('./5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./5g-solutions/page'));

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <FuturisticBackground />
            <Navigation />
            <Breadcrumb />
            <Suspense fallback={<LoadingSpinner />}>
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
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/micro-saas" element={<MicroSaasPage />} />
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
                <Route path="/ai-automation" element={<AiAutomationPage />} />
                <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                <Route path="/ai-crm" element={<AiCrmPage />} />
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />
                <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
                <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
                <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} />
                <Route path="/ai-video-analysis" element={<AiVideoAnalysisPage />} />
                <Route path="/ai-speech-synthesis" element={<AiSpeechSynthesisPage />} />
                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                <Route path="/ai-sentiment-analysis" element={<AiSentimentAnalysisPage />} />
                <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
                <Route path="/ai-content-moderation" element={<AiContentModerationPage />} />
                <Route path="/ai-predictive-modeling" element={<AiPredictiveModelingPage />} />
                <Route path="/ai-document-intelligence" element={<AiDocumentIntelligencePage />} />
                <Route path="/ai-conversation-analytics" element={<AiConversationAnalyticsPage />} />
                <Route path="/ai-supply-chain-ai" element={<AiSupplyChainAiPage />} />
                <Route path="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
                <Route path="/ai-financial-forecasting" element={<AiFinancialForecastingPage />} />
                <Route path="/ai-iot-analytics" element={<AiIotAnalyticsPage />} />
                <Route path="/ai-conversational-ai" element={<AiConversationalAiPage />} />
                <Route path="/ai-automated-testing" element={<AiAutomatedTestingPage />} />
                <Route path="/ai-knowledge-management" element={<AiKnowledgeManagementPage />} />
                <Route path="/ai-customer-churn" element={<AiCustomerChurnPage />} />
                <Route path="/ai-automated-reporting" element={<AiAutomatedReportingPage />} />
                <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
                <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                <Route path="/ai-cybersecurity-monitor-pro" element={<AiCybersecurityMonitorProPage />} />
                
                {/* IT Service Routes */}
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/api-development" element={<ApiDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/devops-cicd" element={<DevopsCicdPage />} />
                <Route path="/it-support" element={<ItSupportPage />} />
                <Route path="/data-analytics-bi" element={<DataAnalyticsBiPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/it-asset-management" element={<ItAssetManagementPage />} />
                <Route path="/it-security-services" element={<ItSecurityServicesPage />} />
                <Route path="/it-project-management" element={<ItProjectManagementPage />} />
                <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
                <Route path="/ai-integration-services" element={<AiIntegrationServicesPage />} />
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path="/iot-development" element={<IotDevelopmentPage />} />
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
                <Route path="/api-development-advanced" element={<ApiDevelopmentAdvancedPage />} />
                <Route path="/data-engineering" element={<DataEngineeringPage />} />
                <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
                <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                <Route path="/devops-advanced" element={<DevopsAdvancedPage />} />
                <Route path="/machine-learning-ops" element={<MachineLearningOpsPage />} />
                <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
                <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
                <Route path="/compliance-automation" element={<ComplianceAutomationPage />} />
                <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
                <Route path="/security-automation" element={<SecurityAutomationPage />} />
                <Route path="/data-visualization" element={<DataVisualizationPage />} />
                <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
                <Route path="/cloud-native-security" element={<CloudNativeSecurityPage />} />
                
                {/* Micro SAAS Routes */}
                <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                <Route path="/zion-chat-ai" element={<ZionChatAiPage />} />
                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                <Route path="/zion-crm-intelligence" element={<ZionCrmIntelligencePage />} />
                <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                <Route path="/zion-ai-content-moderation" element={<ZionAiContentModerationPage />} />
                <Route path="/zion-ai-predictive-maintenance" element={<ZionAiPredictiveMaintenancePage />} />
                <Route path="/zion-ai-fraud-detector" element={<ZionAiFraudDetectorPage />} />
                <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAiSupplyChainOptimizerPage />} />
                <Route path="/zion-ai-document-ai" element={<ZionAiDocumentAiPage />} />
                <Route path="/zion-ai-customer-service-pro" element={<ZionAiCustomerServiceProPage />} />
                <Route path="/zion-ai-contract-analyzer" element={<ZionAiContractAnalyzerPage />} />
                <Route path="/zion-ai-translator-pro" element={<ZionAiTranslatorProPage />} />
                <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
                <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
                <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
                <Route path="/zion-ai-code-reviewer" element={<ZionAiCodeReviewerPage />} />
                <Route path="/zion-ai-survey-builder" element={<ZionAiSurveyBuilderPage />} />
                <Route path="/zion-ai-marketing-automation" element={<ZionAiMarketingAutomationPage />} />
                <Route path="/zion-ai-accounting-assistant" element={<ZionAiAccountingAssistantPage />} />
                <Route path="/zion-ai-seo-optimizer" element={<ZionAiSeoOptimizerPage />} />
                <Route path="/zion-ai-data-cleaner" element={<ZionAiDataCleanerPage />} />
                <Route path="/zion-customer-insights" element={<ZionCustomerInsightsPage />} />
                
                {/* 5G Solutions Routes */}
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              </Routes>
            </Suspense>
            <Footer />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <EnhancedAccessibility />
            <PerformanceMonitor />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;