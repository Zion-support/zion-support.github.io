import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import HomePage from './app/page';
<<<<<<< HEAD
import PageLoader from './app/components/LoadingStates';
=======
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import FuturisticBackground from './app/components/FuturisticBackground';
>>>>>>> cursor/fix-errors-and-merge-to-main-9874

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
<<<<<<< HEAD
=======
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSAASPage = React.lazy(() => import('./app/micro-saas/page'));
>>>>>>> cursor/fix-errors-and-merge-to-main-9874
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

<<<<<<< HEAD
=======
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
const ZionAICustomerInsightsPage = React.lazy(() => import('./app/zion-customer-insights/page'));

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

>>>>>>> cursor/fix-errors-and-merge-to-main-9874
// Main App Component
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;