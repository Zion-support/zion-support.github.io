'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Layout from './app/layout';
import ErrorBoundary from './app/components/ErrorBoundary';
import { PageLoader } from './app/components/LoadingStates';
import SEOHead from './app/components/EnhancedSEOHead';
import SkipLink from './app/components/EnhancedSkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import ServiceWorker from './app/components/ServiceWorker';
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary';
import FuturisticBackground from './app/components/FuturisticBackground';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'));
const AiComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'));
const AiVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'));
const AiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AiWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
const AiPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'));
const AiVideoAnalysisPage = React.lazy(() => import('./app/ai-video-analysis/page'));
const AiSpeechSynthesisPage = React.lazy(() => import('./app/ai-speech-synthesis/page'));
const AiRecommendationEnginePage = React.lazy(() => import('./app/ai-recommendation-engine/page'));
const AiSentimentAnalysisPage = React.lazy(() => import('./app/ai-sentiment-analysis/page'));
const AiChatbotEnterprisePage = React.lazy(() => import('./app/ai-chatbot-enterprise/page'));
const AiContentModerationPage = React.lazy(() => import('./app/ai-content-moderation/page'));
const AiPredictiveModelingPage = React.lazy(() => import('./app/ai-predictive-modeling/page'));
const AiDocumentIntelligencePage = React.lazy(() => import('./app/ai-document-intelligence/page'));
const AiConversationAnalyticsPage = React.lazy(() => import('./app/ai-conversation-analytics/page'));
const AiSupplyChainAiPage = React.lazy(() => import('./app/ai-supply-chain-ai/page'));
const AiHealthcareDiagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
const AiFinancialForecastingPage = React.lazy(() => import('./app/ai-financial-forecasting/page'));
const AiIotAnalyticsPage = React.lazy(() => import('./app/ai-iot-analytics/page'));
const AiConversationalAiPage = React.lazy(() => import('./app/ai-conversational-ai/page'));
const AiAutomatedTestingPage = React.lazy(() => import('./app/ai-automated-testing/page'));
const AiKnowledgeManagementPage = React.lazy(() => import('./app/ai-knowledge-management/page'));
const AiCustomerChurnPage = React.lazy(() => import('./app/ai-customer-churn/page'));
const AiAutomatedReportingPage = React.lazy(() => import('./app/ai-automated-reporting/page'));
const AiVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AiContentGenerationProPage = React.lazy(() => import('./app/ai-content-generation-pro/page'));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const ApiDevelopmentPage = React.lazy(() => import('./app/api-development/page'));
const CybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'));
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));
const DevOpsCicdPage = React.lazy(() => import('./app/devops-cicd/page'));
const ItSupportPage = React.lazy(() => import('./app/it-support/page'));
const DataAnalyticsBiPage = React.lazy(() => import('./app/data-analytics-bi/page'));
const CustomSoftwarePage = React.lazy(() => import('./app/custom-software/page'));
const NetworkInfrastructurePage = React.lazy(() => import('./app/network-infrastructure/page'));
const ItAssetManagementPage = React.lazy(() => import('./app/it-asset-management/page'));
const ItSecurityServicesPage = React.lazy(() => import('./app/it-security-services/page'));
const ItProjectManagementPage = React.lazy(() => import('./app/it-project-management/page'));
const CloudNativeDevelopmentPage = React.lazy(() => import('./app/cloud-native-development/page'));
const AiIntegrationServicesPage = React.lazy(() => import('./app/ai-integration-services/page'));
const BlockchainDevelopmentPage = React.lazy(() => import('./app/blockchain-development/page'));
const IotDevelopmentPage = React.lazy(() => import('./app/iot-development/page'));
const EcommerceDevelopmentPage = React.lazy(() => import('./app/e-commerce-development/page'));
const ApiDevelopmentAdvancedPage = React.lazy(() => import('./app/api-development-advanced/page'));
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
const ZionChatAiPage = React.lazy(() => import('./app/zion-chat-ai/page'));
const ZionSecurityShieldPage = React.lazy(() => import('./app/zion-security-shield/page'));
const ZionCloudVaultPage = React.lazy(() => import('./app/zion-cloud-vault/page'));
const ZionContentStudioPage = React.lazy(() => import('./app/zion-content-studio/page'));
const ZionCrmIntelligencePage = React.lazy(() => import('./app/zion-crm-intelligence/page'));
const ZionDataSyncPage = React.lazy(() => import('./app/zion-data-sync/page'));
const ZionLeadMagnetPage = React.lazy(() => import('./app/zion-lead-magnet/page'));
const ZionProjectMasterPage = React.lazy(() => import('./app/zion-project-master/page'));
const ZionEmailAutomationPage = React.lazy(() => import('./app/zion-email-automation/page'));
const ZionInventorySmartPage = React.lazy(() => import('./app/zion-inventory-smart/page'));
const ZionInvoiceGeniusPage = React.lazy(() => import('./app/zion-invoice-genius/page'));
const ZionWorkflowAutomationPage = React.lazy(() => import('./app/zion-workflow-automation/page'));
const ZionPerformanceMonitorPage = React.lazy(() => import('./app/zion-performance-monitor/page'));
const ZionComplianceManagerPage = React.lazy(() => import('./app/zion-compliance-manager/page'));
const ZionSocialSchedulerPage = React.lazy(() => import('./app/zion-social-scheduler/page'));
const ZionAiVideoEditorPage = React.lazy(() => import('./app/zion-ai-video-editor/page'));
const ZionAiTranslatorProPage = React.lazy(() => import('./app/zion-ai-translator-pro/page'));
const ZionAiCodeReviewerPage = React.lazy(() => import('./app/zion-ai-code-reviewer/page'));
const ZionCustomerInsightsPage = React.lazy(() => import('./app/zion-customer-insights/page'));
const ZionAiEmailAssistantPage = React.lazy(() => import('./app/zion-ai-email-assistant/page'));
const ZionAiMeetingAssistantPage = React.lazy(() => import('./app/zion-ai-meeting-assistant/page'));
const ZionAiSeoOptimizerPage = React.lazy(() => import('./app/zion-ai-seo-optimizer/page'));
const ZionAiDataCleanerPage = React.lazy(() => import('./app/zion-ai-data-cleaner/page'));
const ZionAiContractAnalyzerPage = React.lazy(() => import('./app/zion-ai-contract-analyzer/page'));
const ZionAiSurveyBuilderPage = React.lazy(() => import('./app/zion-ai-survey-builder/page'));
const ZionAiAccountingAssistantPage = React.lazy(() => import('./app/zion-ai-accounting-assistant/page'));
const ZionAiRecruitmentProPage = React.lazy(() => import('./app/zion-ai-recruitment-pro/page'));
const ZionAiContentModerationPage = React.lazy(() => import('./app/zion-ai-content-moderation/page'));
const ZionAiPredictiveMaintenancePage = React.lazy(() => import('./app/zion-ai-predictive-maintenance/page'));
const ZionAiEnergyManagerPage = React.lazy(() => import('./app/zion-ai-energy-manager/page'));
const ZionAiSupplyChainOptimizerPage = React.lazy(() => import('./app/zion-ai-supply-chain-optimizer/page'));
const ZionAiFraudDetectorPage = React.lazy(() => import('./app/zion-ai-fraud-detector/page'));
const ZionAiCustomerServiceProPage = React.lazy(() => import('./app/zion-ai-customer-service-pro/page'));
const ZionAiMarketingAutomationPage = React.lazy(() => import('./app/zion-ai-marketing-automation/page'));
const ZionAiDocumentAiPage = React.lazy(() => import('./app/zion-ai-document-ai/page'));

// Emerging Tech Pages
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const Ai3dGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'));
const AiHolographicWorkspacePage = React.lazy(() => import('./app/ai-holographic-workspace/page'));
const AiAutonomousSystemsPage = React.lazy(() => import('./app/ai-autonomous-systems/page'));
const AiBlockchainSolutionsPage = React.lazy(() => import('./app/ai-blockchain-solutions/page'));
const AiEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
const ArVrSolutionsPage = React.lazy(() => import('./app/ar-vr-solutions/page'));
const IotIntegrationPage = React.lazy(() => import('./app/iot-integration/page'));
const MachineLearningPage = React.lazy(() => import('./app/machine-learning/page'));

// Performance monitoring hook
const usePerformanceMonitoring = () => {
  usePerformanceMonitor();
};

const App: React.FC = () => {
  usePerformanceMonitoring();

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <AnalyticsProvider>
            <SEOHead />
            <SkipLink />
            <Breadcrumb />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <EnhancedAccessibility />
            <PerformanceMonitor />
            <ServiceWorker />
            <FuturisticBackground />
            
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/about" element={<Layout><AboutPage /></Layout>} />
                <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
                <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
                <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
                <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
                <Route path="/case-studies" element={<Layout><CaseStudiesPage /></Layout>} />
                <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
                <Route path="/ai-services" element={<Layout><AiServicesPage /></Layout>} />
                <Route path="/it-services" element={<Layout><ItServicesPage /></Layout>} />
                <Route path="/micro-saas" element={<Layout><MicroSaasPage /></Layout>} />
                <Route path="/tutorials" element={<Layout><TutorialsPage /></Layout>} />
                <Route path="/consultation" element={<Layout><ConsultationPage /></Layout>} />
                <Route path="/demo" element={<Layout><DemoPage /></Layout>} />
                <Route path="/support" element={<Layout><SupportPage /></Layout>} />
                <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
                <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
                <Route path="/cookies" element={<Layout><CookiesPage /></Layout>} />
                <Route path="/sitemap" element={<Layout><SitemapPage /></Layout>} />

                {/* AI Service Pages */}
                <Route path="/ai-analytics" element={<Layout><AiAnalyticsPage /></Layout>} />
                <Route path="/ai-automation" element={<Layout><AiAutomationPage /></Layout>} />
                <Route path="/ai-chatbot-builder" element={<Layout><AiChatbotBuilderPage /></Layout>} />
                <Route path="/ai-cybersecurity" element={<Layout><AiCybersecurityPage /></Layout>} />
                <Route path="/ai-crm" element={<Layout><AiCrmPage /></Layout>} />
                <Route path="/ai-data-analytics" element={<Layout><AiDataAnalyticsPage /></Layout>} />
                <Route path="/ai-healthcare" element={<Layout><AiHealthcarePage /></Layout>} />
                <Route path="/ai-financial-services" element={<Layout><AiFinancialServicesPage /></Layout>} />
                <Route path="/ai-computer-vision" element={<Layout><AiComputerVisionPage /></Layout>} />
                <Route path="/ai-voice-solutions" element={<Layout><AiVoiceSolutionsPage /></Layout>} />
                <Route path="/ai-ecommerce-solutions" element={<Layout><AiEcommerceSolutionsPage /></Layout>} />
                <Route path="/ai-hr-solutions" element={<Layout><AiHrSolutionsPage /></Layout>} />
                <Route path="/ai-content-generation" element={<Layout><AiContentGenerationPage /></Layout>} />
                <Route path="/ai-workflow-automation" element={<Layout><AiWorkflowAutomationPage /></Layout>} />
                <Route path="/ai-document-processing" element={<Layout><AiDocumentProcessingPage /></Layout>} />
                <Route path="/ai-predictive-analytics" element={<Layout><AiPredictiveAnalyticsPage /></Layout>} />
                <Route path="/ai-edge-computing" element={<Layout><AiEdgeComputingPage /></Layout>} />
                <Route path="/ai-video-analysis" element={<Layout><AiVideoAnalysisPage /></Layout>} />
                <Route path="/ai-speech-synthesis" element={<Layout><AiSpeechSynthesisPage /></Layout>} />
                <Route path="/ai-recommendation-engine" element={<Layout><AiRecommendationEnginePage /></Layout>} />
                <Route path="/ai-sentiment-analysis" element={<Layout><AiSentimentAnalysisPage /></Layout>} />
                <Route path="/ai-chatbot-enterprise" element={<Layout><AiChatbotEnterprisePage /></Layout>} />
                <Route path="/ai-content-moderation" element={<Layout><AiContentModerationPage /></Layout>} />
                <Route path="/ai-predictive-modeling" element={<Layout><AiPredictiveModelingPage /></Layout>} />
                <Route path="/ai-document-intelligence" element={<Layout><AiDocumentIntelligencePage /></Layout>} />
                <Route path="/ai-conversation-analytics" element={<Layout><AiConversationAnalyticsPage /></Layout>} />
                <Route path="/ai-supply-chain-ai" element={<Layout><AiSupplyChainAiPage /></Layout>} />
                <Route path="/ai-healthcare-diagnostics" element={<Layout><AiHealthcareDiagnosticsPage /></Layout>} />
                <Route path="/ai-financial-forecasting" element={<Layout><AiFinancialForecastingPage /></Layout>} />
                <Route path="/ai-iot-analytics" element={<Layout><AiIotAnalyticsPage /></Layout>} />
                <Route path="/ai-conversational-ai" element={<Layout><AiConversationalAiPage /></Layout>} />
                <Route path="/ai-automated-testing" element={<Layout><AiAutomatedTestingPage /></Layout>} />
                <Route path="/ai-knowledge-management" element={<Layout><AiKnowledgeManagementPage /></Layout>} />
                <Route path="/ai-customer-churn" element={<Layout><AiCustomerChurnPage /></Layout>} />
                <Route path="/ai-automated-reporting" element={<Layout><AiAutomatedReportingPage /></Layout>} />
                <Route path="/ai-voice-assistant" element={<Layout><AiVoiceAssistantPage /></Layout>} />
                <Route path="/ai-content-generation-pro" element={<Layout><AiContentGenerationProPage /></Layout>} />

                {/* IT Service Pages */}
                <Route path="/cloud-infrastructure" element={<Layout><CloudInfrastructurePage /></Layout>} />
                <Route path="/api-development" element={<Layout><ApiDevelopmentPage /></Layout>} />
                <Route path="/cybersecurity-solutions" element={<Layout><CybersecuritySolutionsPage /></Layout>} />
                <Route path="/database-management" element={<Layout><DatabaseManagementPage /></Layout>} />
                <Route path="/mobile-development" element={<Layout><MobileDevelopmentPage /></Layout>} />
                <Route path="/web-development" element={<Layout><WebDevelopmentPage /></Layout>} />
                <Route path="/devops-cicd" element={<Layout><DevOpsCicdPage /></Layout>} />
                <Route path="/it-support" element={<Layout><ItSupportPage /></Layout>} />
                <Route path="/data-analytics-bi" element={<Layout><DataAnalyticsBiPage /></Layout>} />
                <Route path="/custom-software" element={<Layout><CustomSoftwarePage /></Layout>} />
                <Route path="/network-infrastructure" element={<Layout><NetworkInfrastructurePage /></Layout>} />
                <Route path="/it-asset-management" element={<Layout><ItAssetManagementPage /></Layout>} />
                <Route path="/it-security-services" element={<Layout><ItSecurityServicesPage /></Layout>} />
                <Route path="/it-project-management" element={<Layout><ItProjectManagementPage /></Layout>} />
                <Route path="/cloud-native-development" element={<Layout><CloudNativeDevelopmentPage /></Layout>} />
                <Route path="/ai-integration-services" element={<Layout><AiIntegrationServicesPage /></Layout>} />
                <Route path="/blockchain-development" element={<Layout><BlockchainDevelopmentPage /></Layout>} />
                <Route path="/iot-development" element={<Layout><IotDevelopmentPage /></Layout>} />
                <Route path="/e-commerce-development" element={<Layout><EcommerceDevelopmentPage /></Layout>} />
                <Route path="/api-development-advanced" element={<Layout><ApiDevelopmentAdvancedPage /></Layout>} />
                <Route path="/data-engineering" element={<Layout><DataEngineeringPage /></Layout>} />
                <Route path="/cybersecurity-advanced" element={<Layout><CybersecurityAdvancedPage /></Layout>} />
                <Route path="/cloud-migration-advanced" element={<Layout><CloudMigrationAdvancedPage /></Layout>} />
                <Route path="/devops-advanced" element={<Layout><DevOpsAdvancedPage /></Layout>} />
                <Route path="/machine-learning-ops" element={<Layout><MachineLearningOpsPage /></Layout>} />
                <Route path="/enterprise-integration" element={<Layout><EnterpriseIntegrationPage /></Layout>} />
                <Route path="/performance-optimization" element={<Layout><PerformanceOptimizationPage /></Layout>} />
                <Route path="/disaster-recovery-advanced" element={<Layout><DisasterRecoveryAdvancedPage /></Layout>} />
                <Route path="/compliance-automation" element={<Layout><ComplianceAutomationPage /></Layout>} />
                <Route path="/cloud-cost-optimization" element={<Layout><CloudCostOptimizationPage /></Layout>} />
                <Route path="/security-automation" element={<Layout><SecurityAutomationPage /></Layout>} />
                <Route path="/data-visualization" element={<Layout><DataVisualizationPage /></Layout>} />
                <Route path="/workflow-automation" element={<Layout><WorkflowAutomationPage /></Layout>} />
                <Route path="/cloud-native-security" element={<Layout><CloudNativeSecurityPage /></Layout>} />

                {/* Micro SAAS Pages */}
                <Route path="/zion-analytics-pro" element={<Layout><ZionAnalyticsProPage /></Layout>} />
                <Route path="/zion-chat-ai" element={<Layout><ZionChatAiPage /></Layout>} />
                <Route path="/zion-security-shield" element={<Layout><ZionSecurityShieldPage /></Layout>} />
                <Route path="/zion-cloud-vault" element={<Layout><ZionCloudVaultPage /></Layout>} />
                <Route path="/zion-content-studio" element={<Layout><ZionContentStudioPage /></Layout>} />
                <Route path="/zion-crm-intelligence" element={<Layout><ZionCrmIntelligencePage /></Layout>} />
                <Route path="/zion-data-sync" element={<Layout><ZionDataSyncPage /></Layout>} />
                <Route path="/zion-lead-magnet" element={<Layout><ZionLeadMagnetPage /></Layout>} />
                <Route path="/zion-project-master" element={<Layout><ZionProjectMasterPage /></Layout>} />
                <Route path="/zion-email-automation" element={<Layout><ZionEmailAutomationPage /></Layout>} />
                <Route path="/zion-inventory-smart" element={<Layout><ZionInventorySmartPage /></Layout>} />
                <Route path="/zion-invoice-genius" element={<Layout><ZionInvoiceGeniusPage /></Layout>} />
                <Route path="/zion-workflow-automation" element={<Layout><ZionWorkflowAutomationPage /></Layout>} />
                <Route path="/zion-performance-monitor" element={<Layout><ZionPerformanceMonitorPage /></Layout>} />
                <Route path="/zion-compliance-manager" element={<Layout><ZionComplianceManagerPage /></Layout>} />
                <Route path="/zion-social-scheduler" element={<Layout><ZionSocialSchedulerPage /></Layout>} />
                <Route path="/zion-ai-video-editor" element={<Layout><ZionAiVideoEditorPage /></Layout>} />
                <Route path="/zion-ai-translator-pro" element={<Layout><ZionAiTranslatorProPage /></Layout>} />
                <Route path="/zion-ai-code-reviewer" element={<Layout><ZionAiCodeReviewerPage /></Layout>} />
                <Route path="/zion-customer-insights" element={<Layout><ZionCustomerInsightsPage /></Layout>} />
                <Route path="/zion-ai-email-assistant" element={<Layout><ZionAiEmailAssistantPage /></Layout>} />
                <Route path="/zion-ai-meeting-assistant" element={<Layout><ZionAiMeetingAssistantPage /></Layout>} />
                <Route path="/zion-ai-seo-optimizer" element={<Layout><ZionAiSeoOptimizerPage /></Layout>} />
                <Route path="/zion-ai-data-cleaner" element={<Layout><ZionAiDataCleanerPage /></Layout>} />
                <Route path="/zion-ai-contract-analyzer" element={<Layout><ZionAiContractAnalyzerPage /></Layout>} />
                <Route path="/zion-ai-survey-builder" element={<Layout><ZionAiSurveyBuilderPage /></Layout>} />
                <Route path="/zion-ai-accounting-assistant" element={<Layout><ZionAiAccountingAssistantPage /></Layout>} />
                <Route path="/zion-ai-recruitment-pro" element={<Layout><ZionAiRecruitmentProPage /></Layout>} />
                <Route path="/zion-ai-content-moderation" element={<Layout><ZionAiContentModerationPage /></Layout>} />
                <Route path="/zion-ai-predictive-maintenance" element={<Layout><ZionAiPredictiveMaintenancePage /></Layout>} />
                <Route path="/zion-ai-energy-manager" element={<Layout><ZionAiEnergyManagerPage /></Layout>} />
                <Route path="/zion-ai-supply-chain-optimizer" element={<Layout><ZionAiSupplyChainOptimizerPage /></Layout>} />
                <Route path="/zion-ai-fraud-detector" element={<Layout><ZionAiFraudDetectorPage /></Layout>} />
                <Route path="/zion-ai-customer-service-pro" element={<Layout><ZionAiCustomerServiceProPage /></Layout>} />
                <Route path="/zion-ai-marketing-automation" element={<Layout><ZionAiMarketingAutomationPage /></Layout>} />
                <Route path="/zion-ai-document-ai" element={<Layout><ZionAiDocumentAiPage /></Layout>} />

                {/* Emerging Tech Pages */}
                <Route path="/5g-implementation" element={<Layout><FiveGImplementationPage /></Layout>} />
                <Route path="/ai-3d-generation" element={<Layout><Ai3dGenerationPage /></Layout>} />
                <Route path="/ai-holographic-workspace" element={<Layout><AiHolographicWorkspacePage /></Layout>} />
                <Route path="/ai-autonomous-systems" element={<Layout><AiAutonomousSystemsPage /></Layout>} />
                <Route path="/ai-blockchain-solutions" element={<Layout><AiBlockchainSolutionsPage /></Layout>} />
                <Route path="/ai-edge-computing" element={<Layout><AiEdgeComputingPage /></Layout>} />
                <Route path="/quantum-computing" element={<Layout><QuantumComputingPage /></Layout>} />
                <Route path="/ar-vr-solutions" element={<Layout><ArVrSolutionsPage /></Layout>} />
                <Route path="/iot-integration" element={<Layout><IotIntegrationPage /></Layout>} />
                <Route path="/machine-learning" element={<Layout><MachineLearningPage /></Layout>} />
              </Routes>
            </Suspense>
          </AnalyticsProvider>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;