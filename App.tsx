'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import FuturisticBackground from './app/components/FuturisticBackground';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSAASPage = React.lazy(() => import('./app/micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

// AI Service Pages
const AIAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AICybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AICRMPage = React.lazy(() => import('./app/ai-crm/page'));
const AIDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AIHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AIFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'));
const AIComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'));
const AIVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'));
const AIEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AIHRSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'));
const AIContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AIWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
const AIDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
const AIPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'));
const AIEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));
const AIVideoAnalysisPage = React.lazy(() => import('./app/ai-video-analysis/page'));
const AISpeechSynthesisPage = React.lazy(() => import('./app/ai-speech-synthesis/page'));
const AIRecommendationEnginePage = React.lazy(() => import('./app/ai-recommendation-engine/page'));
const AISentimentAnalysisPage = React.lazy(() => import('./app/ai-sentiment-analysis/page'));
const AIChatbotEnterprisePage = React.lazy(() => import('./app/ai-chatbot-enterprise/page'));
const AIContentModerationPage = React.lazy(() => import('./app/ai-content-moderation/page'));
const AIPredictiveModelingPage = React.lazy(() => import('./app/ai-predictive-modeling/page'));
const AIDocumentIntelligencePage = React.lazy(() => import('./app/ai-document-intelligence/page'));
const AIConversationAnalyticsPage = React.lazy(() => import('./app/ai-conversation-analytics/page'));
const AISupplyChainAIPage = React.lazy(() => import('./app/ai-supply-chain-ai/page'));
const AIHealthcareDiagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
const AIFinancialForecastingPage = React.lazy(() => import('./app/ai-financial-forecasting/page'));
const AIIoTAnalyticsPage = React.lazy(() => import('./app/ai-iot-analytics/page'));
const AIConversationalAIPage = React.lazy(() => import('./app/ai-conversational-ai/page'));
const AIAutomatedTestingPage = React.lazy(() => import('./app/ai-automated-testing/page'));
const AIKnowledgeManagementPage = React.lazy(() => import('./app/ai-knowledge-management/page'));
const AICustomerChurnPage = React.lazy(() => import('./app/ai-customer-churn/page'));
const AIAutomatedReportingPage = React.lazy(() => import('./app/ai-automated-reporting/page'));
const AIVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AIContentGenerationProPage = React.lazy(() => import('./app/ai-content-generation-pro/page'));
const AIAccountingAssistantPage = React.lazy(() => import('./app/ai-accounting-assistant/page'));
const AICybersecurityMonitorProPage = React.lazy(() => import('./app/ai-cybersecurity-monitor-pro/page'));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const CybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'));
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));
const APIDevelopmentPage = React.lazy(() => import('./app/api-development/page'));
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
const DevOpsCICDPage = React.lazy(() => import('./app/devops-cicd/page'));
const ITSupportPage = React.lazy(() => import('./app/it-support/page'));
const DataAnalyticsBIPage = React.lazy(() => import('./app/data-analytics-bi/page'));
const CustomSoftwarePage = React.lazy(() => import('./app/custom-software/page'));
const NetworkInfrastructurePage = React.lazy(() => import('./app/network-infrastructure/page'));
const ITAssetManagementPage = React.lazy(() => import('./app/it-asset-management/page'));
const ITSecurityServicesPage = React.lazy(() => import('./app/it-security-services/page'));
const ITProjectManagementPage = React.lazy(() => import('./app/it-project-management/page'));
const CloudNativeDevelopmentPage = React.lazy(() => import('./app/cloud-native-development/page'));
const AIIntegrationServicesPage = React.lazy(() => import('./app/ai-integration-services/page'));
const BlockchainDevelopmentPage = React.lazy(() => import('./app/blockchain-development/page'));
const IoTDevelopmentPage = React.lazy(() => import('./app/iot-development/page'));
const ECommerceDevelopmentPage = React.lazy(() => import('./app/e-commerce-development/page'));
const APIDevelopmentAdvancedPage = React.lazy(() => import('./app/api-development-advanced/page'));
const DataEngineeringPage = React.lazy(() => import('./app/data-engineering/page'));
const CybersecurityAdvancedPage = React.lazy(() => import('./app/cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = React.lazy(() => import('./app/cloud-migration-advanced/page'));
const DevOpsAdvancedPage = React.lazy(() => import('./app/devops-advanced/page'));
const MachineLearningOpsPage = React.lazy(() => import('./app/machine-learning-ops/page'));
const EnterpriseIntegrationPage = React.lazy(() => import('./app/enterprise-integration/page'));
const PerformanceOptimizationPage = React.lazy(() => import('./app/performance-optimization/page'));
const DisasterRecoveryAdvancedPage = React.lazy(() => import('./app/disaster-recovery-advanced/page'));
const ComplianceAutomationPage = React.lazy(() => import('./app/compliance-automation/page'));
const CloudCostOptimizationPage = React.lazy(() => import('./app/cloud-cost-optimization/page'));
const SecurityAutomationPage = React.lazy(() => import('./app/security-automation/page'));
const DataVisualizationPage = React.lazy(() => import('./app/data-visualization/page'));
const WorkflowAutomationPage = React.lazy(() => import('./app/workflow-automation/page'));
const CloudNativeSecurityPage = React.lazy(() => import('./app/cloud-native-security/page'));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import('./app/zion-analytics-pro/page'));
const ZionChatAIPage = React.lazy(() => import('./app/zion-chat-ai/page'));
const ZionSecurityShieldPage = React.lazy(() => import('./app/zion-security-shield/page'));
const ZionCloudVaultPage = React.lazy(() => import('./app/zion-cloud-vault/page'));
const ZionContentStudioPage = React.lazy(() => import('./app/zion-content-studio/page'));
const ZionCRMIntelligencePage = React.lazy(() => import('./app/zion-crm-intelligence/page'));
const ZionDataSyncPage = React.lazy(() => import('./app/zion-data-sync/page'));
const ZionLeadMagnetPage = React.lazy(() => import('./app/zion-lead-magnet/page'));
const ZionProjectMasterPage = React.lazy(() => import('./app/zion-project-master/page'));
const ZionEmailAutomationPage = React.lazy(() => import('./app/zion-email-automation/page'));
const ZionSocialSchedulerPage = React.lazy(() => import('./app/zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = React.lazy(() => import('./app/zion-workflow-automation/page'));
const ZionAIContentModerationPage = React.lazy(() => import('./app/zion-ai-content-moderation/page'));
const ZionAIPredictiveMaintenancePage = React.lazy(() => import('./app/zion-ai-predictive-maintenance/page'));
const ZionAIFraudDetectorPage = React.lazy(() => import('./app/zion-ai-fraud-detector/page'));
const ZionAISupplyChainOptimizerPage = React.lazy(() => import('./app/zion-ai-supply-chain-optimizer/page'));
const ZionAIDocumentAIPage = React.lazy(() => import('./app/zion-ai-document-ai/page'));
const ZionAICustomerServiceProPage = React.lazy(() => import('./app/zion-ai-customer-service-pro/page'));
const ZionAIContractAnalyzerPage = React.lazy(() => import('./app/zion-ai-contract-analyzer/page'));
const ZionAITranslatorProPage = React.lazy(() => import('./app/zion-ai-translator-pro/page'));
const ZionInvoiceGeniusPage = React.lazy(() => import('./app/zion-invoice-genius/page'));
const ZionInventorySmartPage = React.lazy(() => import('./app/zion-inventory-smart/page'));
const ZionComplianceManagerPage = React.lazy(() => import('./app/zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = React.lazy(() => import('./app/zion-performance-monitor/page'));
const ZionAICodeReviewerPage = React.lazy(() => import('./app/zion-ai-code-reviewer/page'));
const ZionAISurveyBuilderPage = React.lazy(() => import('./app/zion-ai-survey-builder/page'));
const ZionAIMarketingAutomationPage = React.lazy(() => import('./app/zion-ai-marketing-automation/page'));
const ZionAIAccountingAssistantPage = React.lazy(() => import('./app/zion-ai-accounting-assistant/page'));
const ZionAISEOOptimizerPage = React.lazy(() => import('./app/zion-ai-seo-optimizer/page'));
const ZionAIDataCleanerPage = React.lazy(() => import('./app/zion-ai-data-cleaner/page'));
const ZionCustomerInsightsPage = React.lazy(() => import('./app/zion-customer-insights/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./app/5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./app/5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const FiveGIoTSolutionsPage = React.lazy(() => import('./app/5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./app/5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./app/5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./app/5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./app/5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./app/5g-solutions/page'));

// Main App Component
function App() {
  const { performanceData } = usePerformanceMonitor();

  return (
    <HelmetProvider>
      <Router>
        <AnalyticsProvider>
          <ErrorBoundary>
            <FuturisticBackground />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <EnhancedAccessibility />
            <PerformanceMonitor performanceData={performanceData} />
            <Navigation />
            <Breadcrumb />
            <SEOHead />
            <Suspense fallback={<PageLoader />}>
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
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/micro-saas" element={<MicroSAASPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
                
                {/* AI Service Routes */}
                <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                <Route path="/ai-crm" element={<AICRMPage />} />
                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                <Route path="/ai-financial-services" element={<AIFinancialServicesPage />} />
                <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
                <Route path="/ai-voice-solutions" element={<AIVoiceSolutionsPage />} />
                <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
                <Route path="/ai-hr-solutions" element={<AIHRSolutionsPage />} />
                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                <Route path="/ai-edge-computing" element={<AIEdgeComputingPage />} />
                <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage />} />
                <Route path="/ai-speech-synthesis" element={<AISpeechSynthesisPage />} />
                <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
                <Route path="/ai-sentiment-analysis" element={<AISentimentAnalysisPage />} />
                <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
                <Route path="/ai-content-moderation" element={<AIContentModerationPage />} />
                <Route path="/ai-predictive-modeling" element={<AIPredictiveModelingPage />} />
                <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />
                <Route path="/ai-conversation-analytics" element={<AIConversationAnalyticsPage />} />
                <Route path="/ai-supply-chain-ai" element={<AISupplyChainAIPage />} />
                <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
                <Route path="/ai-financial-forecasting" element={<AIFinancialForecastingPage />} />
                <Route path="/ai-iot-analytics" element={<AIIoTAnalyticsPage />} />
                <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
                <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage />} />
                <Route path="/ai-knowledge-management" element={<AIKnowledgeManagementPage />} />
                <Route path="/ai-customer-churn" element={<AICustomerChurnPage />} />
                <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
                <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />
                <Route path="/ai-cybersecurity-monitor-pro" element={<AICybersecurityMonitorProPage />} />
                
                {/* IT Service Routes */}
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/api-development" element={<APIDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
                <Route path="/it-support" element={<ITSupportPage />} />
                <Route path="/data-analytics-bi" element={<DataAnalyticsBIPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/it-asset-management" element={<ITAssetManagementPage />} />
                <Route path="/it-security-services" element={<ITSecurityServicesPage />} />
                <Route path="/it-project-management" element={<ITProjectManagementPage />} />
                <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
                <Route path="/ai-integration-services" element={<AIIntegrationServicesPage />} />
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path="/iot-development" element={<IoTDevelopmentPage />} />
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
                <Route path="/api-development-advanced" element={<APIDevelopmentAdvancedPage />} />
                <Route path="/data-engineering" element={<DataEngineeringPage />} />
                <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
                <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                <Route path="/devops-advanced" element={<DevOpsAdvancedPage />} />
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
                <Route path="/zion-chat-ai" element={<ZionChatAIPage />} />
                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                <Route path="/zion-crm-intelligence" element={<ZionCRMIntelligencePage />} />
                <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                <Route path="/zion-ai-content-moderation" element={<ZionAIContentModerationPage />} />
                <Route path="/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage />} />
                <Route path="/zion-ai-fraud-detector" element={<ZionAIFraudDetectorPage />} />
                <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
                <Route path="/zion-ai-document-ai" element={<ZionAIDocumentAIPage />} />
                <Route path="/zion-ai-customer-service-pro" element={<ZionAICustomerServiceProPage />} />
                <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
                <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
                <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
                <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
                <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
                <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
                <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />
                <Route path="/zion-ai-marketing-automation" element={<ZionAIMarketingAutomationPage />} />
                <Route path="/zion-ai-accounting-assistant" element={<ZionAIAccountingAssistantPage />} />
                <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />
                <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
                <Route path="/zion-customer-insights" element={<ZionAICustomerInsightsPage />} />
                
                {/* 5G Solutions Routes */}
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              </Routes>
            </Suspense>
            <Footer />
          </ErrorBoundary>
        </AnalyticsProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;