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


// Main App Component;
function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>

                {/* AI Service Routes */}
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/ai-marketing" element={<AIMarketingPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                <Route path="/ai-fintech" element={<AIFintechPage />} />
                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                <Route path="/ai-crm" element={<AICRMPage />} />
                <Route path="/ai-voice-solutions" element={<AIVoiceSolutionsPage />} />
                <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
                <Route path="/ai-hr-solutions" element={<AIHRSolutionsPage />} />
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
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}


