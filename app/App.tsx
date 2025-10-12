import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
export default App;

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// AI Services

const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AICRMPage = lazy(() => import('./ai-crm/page'));
const AIVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'));
const AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AIHRSolutionsPage = lazy(() => import('./ai-hr-solutions/page'));
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AIDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AIPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'));
const AIEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'));
const AIVideoAnalysisPage = lazy(() => import('./ai-video-analysis/page'));
const AISpeechSynthesisPage = lazy(() => import('./ai-speech-synthesis/page'));
const AIRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AISentimentAnalysisPage = lazy(() => import('./ai-sentiment-analysis/page'));
const AIChatbotEnterprisePage = lazy(() => import('./ai-chatbot-enterprise/page'));
const AIContentModerationPage = lazy(() => import('./ai-content-moderation/page'));
const AIPredictiveModelingPage = lazy(() => import('./ai-predictive-modeling/page'));
const AIDocumentIntelligencePage = lazy(() => import('./ai-document-intelligence/page'));
const AIConversationAnalyticsPage = lazy(() => import('./ai-conversation-analytics/page'));
const AISupplyChainAIPage = lazy(() => import('./ai-supply-chain-ai/page'));
const AIHealthcareDiagnosticsPage = lazy(() => import('./ai-healthcare-diagnostics/page'));
const AIFinancialForecastingPage = lazy(() => import('./ai-financial-forecasting/page'));
const AIIoTAnalyticsPage = lazy(() => import('./ai-iot-analytics/page'));
const AIConversationalAIPage = lazy(() => import('./ai-conversational-ai/page'));
const AIAutomatedTestingPage = lazy(() => import('./ai-automated-testing/page'));
const AIKnowledgeManagementPage = lazy(() => import('./ai-knowledge-management/page'));
const AICustomerChurnPage = lazy(() => import('./ai-customer-churn/page'));
const AIAutomatedReportingPage = lazy(() => import('./ai-automated-reporting/page'));
const AIVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'));
const AIContentGenerationProPage = lazy(() => import('./ai-content-generation-pro/page'));
const AIAccountingAssistantPage = lazy(() => import('./ai-accounting-assistant/page'));
const AICybersecurityMonitorProPage = lazy(() => import('./ai-cybersecurity-monitor-pro/page'));

// IT Services
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));

const APIDevelopmentPage = lazy(() => import('./api-development/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DevOpsCICDPage = lazy(() => import('./devops-cicd/page'));
const ITSupportPage = lazy(() => import('./it-support/page'));
const DataAnalyticsBIPage = lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage = lazy(() => import('./custom-software/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ITAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const ITSecurityServicesPage = lazy(() => import('./it-security-services/page'));
const ITProjectManagementPage = lazy(() => import('./it-project-management/page'));
const CloudNativeDevelopmentPage = lazy(() => import('./cloud-native-development/page'));
const AIIntegrationServicesPage = lazy(() => import('./ai-integration-services/page'));
const BlockchainDevelopmentPage = lazy(() => import('./blockchain-development/page'));
const IoTDevelopmentPage = lazy(() => import('./iot-development/page'));
const ECommerceDevelopmentPage = lazy(() => import('./e-commerce-development/page'));
const APIDevelopmentAdvancedPage = lazy(() => import('./api-development-advanced/page'));
const DataEngineeringPage = lazy(() => import('./data-engineering/page'));
const CybersecurityAdvancedPage = lazy(() => import('./cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = lazy(() => import('./cloud-migration-advanced/page'));
const DevOpsAdvancedPage = lazy(() => import('./devops-advanced/page'));

const MachineLearningOpsPage = lazy(() => import('./machine-learning-ops/page'));
const EnterpriseIntegrationPage = lazy(() => import('./enterprise-integration/page'));
const PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'));
const DisasterRecoveryAdvancedPage = lazy(() => import('./disaster-recovery-advanced/page'));
const ComplianceAutomationPage = lazy(() => import('./compliance-automation/page'));
const CloudCostOptimizationPage = lazy(() => import('./cloud-cost-optimization/page'));
const SecurityAutomationPage = lazy(() => import('./security-automation/page'));
const DataVisualizationPage = lazy(() => import('./data-visualization/page'));
const WorkflowAutomationPage = lazy(() => import('./workflow-automation/page'));
const CloudNativeSecurityPage = lazy(() => import('./cloud-native-security/page'));

// Micro SAAS Pages
const ZionAnalyticsProPage = lazy(() => import('./zion-analytics-pro/page'));

const ZionChatAIPage = lazy(() => import('./zion-chat-ai/page'));
const ZionSecurityShieldPage = lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = lazy(() => import('./zion-cloud-vault/page'));
const ZionContentStudioPage = lazy(() => import('./zion-content-studio/page'));
const ZionCRMIntelligencePage = lazy(() => import('./zion-crm-intelligence/page'));

const ZionDataSyncPage = lazy(() => import('./zion-data-sync/page'));
const ZionLeadMagnetPage = lazy(() => import('./zion-lead-magnet/page'));
const ZionProjectMasterPage = lazy(() => import('./zion-project-master/page'));
const ZionEmailAutomationPage = lazy(() => import('./zion-email-automation/page'));
const ZionSocialSchedulerPage = lazy(() => import('./zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = lazy(() => import('./zion-workflow-automation/page'));

const ZionAIContentModerationPage = lazy(() => import('./zion-ai-content-moderation/page'));
const ZionAIPredictiveMaintenancePage = lazy(() => import('./zion-ai-predictive-maintenance/page'));
const ZionAIFraudDetectorPage = lazy(() => import('./zion-ai-fraud-detector/page'));
const ZionAISupplyChainOptimizerPage = lazy(() => import('./zion-ai-supply-chain-optimizer/page'));
const ZionAIDocumentAIPage = lazy(() => import('./zion-ai-document-ai/page'));
const ZionAICustomerServiceProPage = lazy(() => import('./zion-ai-customer-service-pro/page'));
const ZionAIContractAnalyzerPage = lazy(() => import('./zion-ai-contract-analyzer/page'));
const ZionAITranslatorProPage = lazy(() => import('./zion-ai-translator-pro/page'));

const ZionInvoiceGeniusPage = lazy(() => import('./zion-invoice-genius/page'));
const ZionInventorySmartPage = lazy(() => import('./zion-inventory-smart/page'));
const ZionComplianceManagerPage = lazy(() => import('./zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = lazy(() => import('./zion-performance-monitor/page'));

const ZionAICodeReviewerPage = lazy(() => import('./zion-ai-code-reviewer/page'));
const ZionAISurveyBuilderPage = lazy(() => import('./zion-ai-survey-builder/page'));
const ZionAIMarketingAutomationPage = lazy(() => import('./zion-ai-marketing-automation/page'));
const ZionAIAccountingAssistantPage = lazy(() => import('./zion-ai-accounting-assistant/page'));
const ZionAISEOOptimizerPage = lazy(() => import('./zion-ai-seo-optimizer/page'));
const ZionAIDataCleanerPage = lazy(() => import('./zion-ai-data-cleaner/page'));

const ZionCustomerInsightsPage = lazy(() => import('./zion-customer-insights/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));

const FiveGIoTSolutionsPage = lazy(() => import('./5g-iot-solutions/page'));

const FiveGMobileApplicationsPage = lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'));
'use client';

// Lazy load pages for better performance;
const HomePage = React.lazy(() => import('./page'));
const AboutPage = React.lazy(() => import('./about/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const ServicesPage = React.lazy(() => import('./services/page'));
const PricingPage = React.lazy(() => import('./pricing/page'));
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const TeamPage = React.lazy(() => import('./team/page'));
const CareersPage = React.lazy(() => import('./careers/page'));
const PrivacyPage = React.lazy(() => import('./privacy/page'));
const TermsPage = React.lazy(() => import('./terms/page'));
const CookiesPage = React.lazy(() => import('./cookies/page'));

// AI Services;
const AIServicesPage = React.lazy(() => import('./ai-services/page'));
const AIMarketingPage = React.lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = React.lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = React.lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = React.lazy(() => import('./ai-fintech/page'));
const AIContentGenerationPage = React.lazy(() => import('./ai-content-generation/page'));
const AIDataAnalyticsPage = React.lazy(() => import('./ai-data-analytics/page'));
const AICybersecurityPage = React.lazy(() => import('./ai-cybersecurity/page'));
const AICRMPage = React.lazy(() => import('./ai-crm/page'));
const AIVoiceSolutionsPage = React.lazy(() => import('./ai-voice-solutions/page'));
const AIEcommerceSolutionsPage = React.lazy(() => import('./ai-ecommerce-solutions/page'));
const AIHRSolutionsPage = React.lazy(() => import('./ai-hr-solutions/page'));
const AIWorkflowAutomationPage = React.lazy(() => import('./ai-workflow-automation/page'));
const AIDocumentProcessingPage = React.lazy(() => import('./ai-document-processing/page'));
const AIPredictiveAnalyticsPage = React.lazy(() => import('./ai-predictive-analytics/page'));
const AIEdgeComputingPage = React.lazy(() => import('./ai-edge-computing/page'));
const AIVideoAnalysisPage = React.lazy(() => import('./ai-video-analysis/page'));
const AISpeechSynthesisPage = React.lazy(() => import('./ai-speech-synthesis/page'));
const AIRecommendationEnginePage = React.lazy(() => import('./ai-recommendation-engine/page'));
const AISentimentAnalysisPage = React.lazy(() => import('./ai-sentiment-analysis/page'));
const AIChatbotEnterprisePage = React.lazy(() => import('./ai-chatbot-enterprise/page'));
const AIContentModerationPage = React.lazy(() => import('./ai-content-moderation/page'));
const AIPredictiveModelingPage = React.lazy(() => import('./ai-predictive-modeling/page'));
const AIDocumentIntelligencePage = React.lazy(() => import('./ai-document-intelligence/page'));
const AIConversationAnalyticsPage = React.lazy(() => import('./ai-conversation-analytics/page'));
const AISupplyChainAIPage = React.lazy(() => import('./ai-supply-chain-ai/page'));
const AIHealthcareDiagnosticsPage = React.lazy(() => import('./ai-healthcare-diagnostics/page'));
const AIFinancialForecastingPage = React.lazy(() => import('./ai-financial-forecasting/page'));
const AIIoTAnalyticsPage = React.lazy(() => import('./ai-iot-analytics/page'));
const AIConversationalAIPage = React.lazy(() => import('./ai-conversational-ai/page'));
const AIAutomatedTestingPage = React.lazy(() => import('./ai-automated-testing/page'));
const AIKnowledgeManagementPage = React.lazy(() => import('./ai-knowledge-management/page'));
const AICustomerChurnPage = React.lazy(() => import('./ai-customer-churn/page'));
const AIAutomatedReportingPage = React.lazy(() => import('./ai-automated-reporting/page'));
const AIVoiceAssistantPage = React.lazy(() => import('./ai-voice-assistant/page'));
const AIContentGenerationProPage = React.lazy(() => import('./ai-content-generation-pro/page'));
const AIAccountingAssistantPage = React.lazy(() => import('./ai-accounting-assistant/page'));
const AICybersecurityMonitorProPage = React.lazy(() => import('./ai-cybersecurity-monitor-pro/page'));

// IT Services;
const CloudInfrastructurePage = React.lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySolutionsPage = React.lazy(() => import('./cybersecurity-solutions/page'));
const WebDevelopmentPage = React.lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = React.lazy(() => import('./mobile-development/page'));
const APIDevelopmentPage = React.lazy(() => import('./api-development/page'));
const DatabaseManagementPage = React.lazy(() => import('./database-management/page'));
const DevOpsCICDPage = React.lazy(() => import('./devops-cicd/page'));
const ITSupportPage = React.lazy(() => import('./it-support/page'));
const DataAnalyticsBIPage = React.lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage = React.lazy(() => import('./custom-software/page'));
const NetworkInfrastructurePage = React.lazy(() => import('./network-infrastructure/page'));
const ITAssetManagementPage = React.lazy(() => import('./it-asset-management/page'));
const ITSecurityServicesPage = React.lazy(() => import('./it-security-services/page'));
const ITProjectManagementPage = React.lazy(() => import('./it-project-management/page'));
const CloudNativeDevelopmentPage = React.lazy(() => import('./cloud-native-development/page'));
const AIIntegrationServicesPage = React.lazy(() => import('./ai-integration-services/page'));
const BlockchainDevelopmentPage = React.lazy(() => import('./blockchain-development/page'));
const IoTDevelopmentPage = React.lazy(() => import('./iot-development/page'));
const ECommerceDevelopmentPage = React.lazy(() => import('./e-commerce-development/page'));
const APIDevelopmentAdvancedPage = React.lazy(() => import('./api-development-advanced/page'));
const DataEngineeringPage = React.lazy(() => import('./data-engineering/page'));
const CybersecurityAdvancedPage = React.lazy(() => import('./cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = React.lazy(() => import('./cloud-migration-advanced/page'));
const DevOpsAdvancedPage = React.lazy(() => import('./devops-advanced/page'));
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

// Micro SAAS Pages;
const ZionAnalyticsProPage = React.lazy(() => import('./zion-analytics-pro/page'));
const ZionChatAIPage = React.lazy(() => import('./zion-chat-ai/page'));
const ZionSecurityShieldPage = React.lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = React.lazy(() => import('./zion-cloud-vault/page'));
const ZionContentStudioPage = React.lazy(() => import('./zion-content-studio/page'));
const ZionCRMIntelligencePage = React.lazy(() => import('./zion-crm-intelligence/page'));
const ZionDataSyncPage = React.lazy(() => import('./zion-data-sync/page'));
const ZionLeadMagnetPage = React.lazy(() => import('./zion-lead-magnet/page'));
const ZionProjectMasterPage = React.lazy(() => import('./zion-project-master/page'));
const ZionEmailAutomationPage = React.lazy(() => import('./zion-email-automation/page'));
const ZionSocialSchedulerPage = React.lazy(() => import('./zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = React.lazy(() => import('./zion-workflow-automation/page'));
const ZionAIContentModerationPage = React.lazy(() => import('./zion-ai-content-moderation/page'));
const ZionAIPredictiveMaintenancePage = React.lazy(() => import('./zion-ai-predictive-maintenance/page'));
const ZionAIFraudDetectorPage = React.lazy(() => import('./zion-ai-fraud-detector/page'));
const ZionAISupplyChainOptimizerPage = React.lazy(() => import('./zion-ai-supply-chain-optimizer/page'));
const ZionAIDocumentAIPage = React.lazy(() => import('./zion-ai-document-ai/page'));
const ZionAICustomerServiceProPage = React.lazy(() => import('./zion-ai-customer-service-pro/page'));
const ZionAIContractAnalyzerPage = React.lazy(() => import('./zion-ai-contract-analyzer/page'));
const ZionAITranslatorProPage = React.lazy(() => import('./zion-ai-translator-pro/page'));
const ZionInvoiceGeniusPage = React.lazy(() => import('./zion-invoice-genius/page'));
const ZionInventorySmartPage = React.lazy(() => import('./zion-inventory-smart/page'));
const ZionComplianceManagerPage = React.lazy(() => import('./zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = React.lazy(() => import('./zion-performance-monitor/page'));
const ZionAICodeReviewerPage = React.lazy(() => import('./zion-ai-code-reviewer/page'));
const ZionAISurveyBuilderPage = React.lazy(() => import('./zion-ai-survey-builder/page'));
const ZionAIMarketingAutomationPage = React.lazy(() => import('./zion-ai-marketing-automation/page'));
const ZionAIAccountingAssistantPage = React.lazy(() => import('./zion-ai-accounting-assistant/page'));
const ZionAISeoOptimizerPage = React.lazy(() => import('./zion-ai-seo-optimizer/page'));
const ZionAIDataCleanerPage = React.lazy(() => import('./zion-ai-data-cleaner/page'));
const ZionCustomerInsightsPage = React.lazy(() => import('./zion-customer-insights/page'));

// 5G Solutions Pages;
const FiveGDataAnalyticsPage = React.lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./5g-implementation/page'));
const FiveGIotSolutionsPage = React.lazy(() => import('./5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./5g-solutions/page'));

// Main App Component;
function App() {
  return (
    <ErrorBoundary></ErrorBoundar></ErrorBoundary>
      <HelmetProvider></HelmetProvide></HelmetProvider>
        <BrowserRouter></BrowserRout></BrowserRoute>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <Suspense fallback={<LoadingSpinner />} >
            <Routes></Rou></Rout>

              <Route path="/" element={<HomePage />} />

                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                
    <BrowserRouter&gt;</BrowserRouter></BrowserRout></BrowserRoute></BrowserRouter>
      <Suspense fallback={<LoadingSpinner /&gt;} ></Suspen></Suspens></BrowserRouter>
        <Routes></Rou></Rout></Routes>
                <Route path="/" element={<HomePage /&gt;} /></Route>
                <Route path="/about" element={<AboutPage /&gt;} /></Route>
                <Route path="/contact" element={<ContactPage /&gt;} /></Route>
                <Route path="/services" element={<ServicesPage /&gt;} /></Route>
                <Route path="/pricing" element={<PricingPage /&gt;} /></Route>
                <Route path="/case-studies" element={<CaseStudiesPage /&gt;} /></Route>
                <Route path="/blog" element={<BlogPage /&gt;} /></Route>
                <Route path="/team" element={<TeamPage /&gt;} /></Route>
                <Route path="/careers" element={<CareersPage /&gt;} /></Route>
                <Route path="/privacy" element={<PrivacyPage /&gt;} /></Route>
                <Route path="/terms" element={<TermsPage /&gt;} /></Route>
                <Route path="/cookies" element={<CookiesPage /&gt;} /></Route>

                {/* AI Service Routes */}  <Route path="/ai-services" element={<AIServicesPage /&gt;} /></Route>
                <Route path="/ai-marketing" element={<AIMarketingPage /&gt;} /></Route>
                <Route path="/ai-automation" element={<AIAutomationPage /&gt;} /></Route>
                <Route path="/ai-healthcare" element={<AIHealthcarePage /&gt;} /></Route>
                <Route path="/ai-fintech" element={<AIFintechPage /&gt;} /></Route>
                <Route path="/ai-content-generation" element={<AIContentGenerationPage /&gt;} /></Route>
                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage /&gt;} /></Route>
                <Route path="/ai-cybersecurity" element={<AICybersecurityPage /&gt;} /></Route>
                <Route path="/ai-crm" element={<AICRMPage /&gt;} /></Route>
                <Route path="/ai-voice-solutions" element={<AIVoiceSolutionsPage /&gt;} /></Route>
                <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage /&gt;} /></Route>
                <Route path="/ai-hr-solutions" element={<AIHRSolutionsPage /&gt;} /></Route>
                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage /&gt;} /></Route>
                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage /&gt;} /></Route>
                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage /&gt;} /></Route>
                <Route path="/ai-edge-computing" element={<AIEdgeComputingPage /&gt;} /></Route>
                <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage /&gt;} /></Route>
                <Route path="/ai-speech-synthesis" element={<AISpeechSynthesisPage /&gt;} /></Route>
                <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage /&gt;} /></Route>
                <Route path="/ai-sentiment-analysis" element={<AISentimentAnalysisPage /&gt;} /></Route>
                <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage /&gt;} /></Route>
                <Route path="/ai-content-moderation" element={<AIContentModerationPage /&gt;} /></Route>
                <Route path="/ai-predictive-modeling" element={<AIPredictiveModelingPage /&gt;} /></Route>
                <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage /&gt;} /></Route>
                <Route path="/ai-conversation-analytics" element={<AIConversationAnalyticsPage /&gt;} /></Route>
                <Route path="/ai-supply-chain-ai" element={<AISupplyChainAIPage /&gt;} /></Route>
                <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage /&gt;} /></Route>
                <Route path="/ai-financial-forecasting" element={<AIFinancialForecastingPage /&gt;} /></Route>
                <Route path="/ai-iot-analytics" element={<AIIoTAnalyticsPage /&gt;} /></Route>
                <Route path="/ai-conversational-ai" element={<AIConversationalAIPage /&gt;} /></Route>
                <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage /&gt;} /></Route>
                <Route path="/ai-knowledge-management" element={<AIKnowledgeManagementPage /&gt;} /></Route>
                <Route path="/ai-customer-churn" element={<AICustomerChurnPage /&gt;} /></Route>
                <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage /&gt;} /></Route>
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage /&gt;} /></Route>
                <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage /&gt;} /></Route>
                <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage /&gt;} /></Route>
                <Route path="/ai-cybersecurity-monitor-pro" element={<AICybersecurityMonitorProPage /&gt;} /></Route>
                {/* IT Service Routes */}  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage /&gt;} /></Route>
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage /&gt;} /></Route>
                <Route path="/web-development" element={<WebDevelopmentPage /&gt;} /></Route>
                <Route path="/mobile-development" element={<MobileDevelopmentPage /&gt;} /></Route>
                <Route path="/api-development" element={<APIDevelopmentPage /&gt;} /></Route>
                <Route path="/database-management" element={<DatabaseManagementPage /&gt;} /></Route>
                <Route path="/devops-cicd" element={<DevOpsCICDPage /&gt;} /></Route>
                <Route path="/it-support" element={<ITSupportPage /&gt;} /></Route>
                <Route path="/data-analytics-bi" element={<DataAnalyticsBIPage /&gt;} /></Route>
                <Route path="/custom-software" element={<CustomSoftwarePage /&gt;} /></Route>
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage /&gt;} /></Route>
                <Route path="/it-asset-management" element={<ITAssetManagementPage /&gt;} /></Route>
                <Route path="/it-security-services" element={<ITSecurityServicesPage /&gt;} /></Route>
                <Route path="/it-project-management" element={<ITProjectManagementPage /&gt;} /></Route>
                <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage /&gt;} /></Route>
                <Route path="/ai-integration-services" element={<AIIntegrationServicesPage /&gt;} /></Route>
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage /&gt;} /></Route>
                <Route path="/iot-development" element={<IoTDevelopmentPage /&gt;} /></Route>
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage /&gt;} /></Route>
                <Route path="/api-development-advanced" element={<APIDevelopmentAdvancedPage /&gt;} /></Route>
                <Route path="/data-engineering" element={<DataEngineeringPage /&gt;} /></Route>
                <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage /&gt;} /></Route>
                <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage /&gt;} /></Route>
                <Route path="/devops-advanced" element={<DevOpsAdvancedPage /&gt;} /></Route>
                <Route path="/machine-learning-ops" element={<MachineLearningOpsPage /&gt;} /></Route>
                <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage /&gt;} /></Route>
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage /&gt;} /></Route>
                <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage /&gt;} /></Route>
                <Route path="/compliance-automation" element={<ComplianceAutomationPage /&gt;} /></Route>
                <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage /&gt;} /></Route>
                <Route path="/security-automation" element={<SecurityAutomationPage /&gt;} /></Route>
                <Route path="/data-visualization" element={<DataVisualizationPage /&gt;} /></Route>
                <Route path="/workflow-automation" element={<WorkflowAutomationPage /&gt;} /></Route>
                <Route path="/cloud-native-security" element={<CloudNativeSecurityPage /&gt;} /></Route>
                {/* Micro SAAS Routes */}  <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage /&gt;} /></Route>
                <Route path="/zion-chat-ai" element={<ZionChatAIPage /&gt;} /></Route>
                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage /&gt;} /></Route>
                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage /&gt;} /></Route>
                <Route path="/zion-content-studio" element={<ZionContentStudioPage /&gt;} /></Route>
                <Route path="/zion-crm-intelligence" element={<ZionCRMIntelligencePage /&gt;} /></Route>
                <Route path="/zion-data-sync" element={<ZionDataSyncPage /&gt;} /></Route>
                <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage /&gt;} /></Route>
                <Route path="/zion-project-master" element={<ZionProjectMasterPage /&gt;} /></Route>
                <Route path="/zion-email-automation" element={<ZionEmailAutomationPage /&gt;} /></Route>
                <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage /&gt;} /></Route>
                <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage /&gt;} /></Route>
                <Route path="/zion-ai-content-moderation" element={<ZionAIContentModerationPage /&gt;} /></Route>
                <Route path="/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage /&gt;} /></Route>
                <Route path="/zion-ai-fraud-detector" element={<ZionAIFraudDetectorPage /&gt;} /></Route>
                <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage /&gt;} /></Route>
                <Route path="/zion-ai-document-ai" element={<ZionAIDocumentAIPage /&gt;} /></Route>
                <Route path="/zion-ai-customer-service-pro" element={<ZionAICustomerServiceProPage /&gt;} /></Route>
                <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage /&gt;} /></Route>
                <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage /&gt;} /></Route>
                <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage /&gt;} /></Route>
                <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage /&gt;} /></Route>
                <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage /&gt;} /></Route>
                <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage /&gt;} /></Route>
                <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage /&gt;} /></Route>
                <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage /&gt;} /></Route>
                <Route path="/zion-ai-marketing-automation" element={<ZionAIMarketingAutomationPage /&gt;} /></Route>
                <Route path="/zion-ai-accounting-assistant" element={<ZionAIAccountingAssistantPage /&gt;} /></Route>
                <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage /&gt;} /></Route>
                <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage /&gt;} /></Route>
                <Route path="/zion-customer-insights" element={<ZionAICustomerInsightsPage /&gt;} /></Route>
                {/* 5G Solutions Routes */}  <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage /&gt;} /></Route>
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage /&gt;} /></Route>
                <Route path="/5g-implementation" element={<FiveGImplementationPage /&gt;} /></Route>
                <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage /&gt;} /></Route>
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage /&gt;} /></Route>
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage /&gt;} /></Route>
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage /&gt;} /></Route>
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage /&gt;} /></Route>
                <Route path="/5g-solutions" element={<FiveGSolutionsPage /&gt;} /></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>

  );
}

