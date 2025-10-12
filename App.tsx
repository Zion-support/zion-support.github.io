'useclient';
importReact, { Suspense } from 'react';
import { BrowserRouterasRouter, Routes, Route   } from 'react-router-dom';
import { HelmetProvider   } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
importNavigationfrom './app/components/Navigation';
importFooterfrom './app/components/Footer';
importHomePagefrom './app/page';
import { PageLoader   } from './app/components/LoadingStates';
importErrorBoundaryfrom './app/components/ErrorBoundary';
importSEOHeadfrom './app/components/EnhancedSEOHead';
importBreadcrumbfrom './app/components/Breadcrumb';
importPerformanceOptimizerfrom './app/components/EnhancedPerformanceOptimizer';
importAccessibilityEnhancerfrom './app/components/AccessibilityEnhancer';
importEnhancedAccessibilityfrom './app/components/EnhancedAccessibility';
import { usePerformanceMonitor   } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider   } from './app/components/EnhancedAnalytics';
importPerformanceMonitorfrom './app/components/PerformanceMonitor';
importFuturisticBackgroundfrom './app/components/FuturisticBackground';

// LazyloadpagesforbetterperformanceconstAboutPage = React.lazy(() => import('./app/about/page'));
constContactPage = React.lazy(() => import('./app/contact/page'));
constServicesPage = React.lazy(() => import('./app/services/page'));
constPricingPage = React.lazy(() => import('./app/pricing/page'));
constBlogPage = React.lazy(() => import('./app/blog/page'));
constCaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
constCareersPage = React.lazy(() => import('./app/careers/page'));
constAiServicesPage = React.lazy(() => import('./app/ai-services/page'));
constItServicesPage = React.lazy(() => import('./app/it-services/page'));
constMicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
constTutorialsPage = React.lazy(() => import('./app/tutorials/page'));
constConsultationPage = React.lazy(() => import('./app/consultation/page'));
constDemoPage = React.lazy(() => import('./app/demo/page'));
constSupportPage = React.lazy(() => import('./app/support/page'));
constPrivacyPage = React.lazy(() => import('./app/privacy/page'));
constTermsPage = React.lazy(() => import('./app/terms/page'));
constCookiesPage = React.lazy(() => import('./app/cookies/page'));
constSitemapPage = React.lazy(() => import('./app/sitemap/page'));

// AIServicePagesconstAiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
constAiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
constAiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
constAiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
constAiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
constAiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
constAiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
constAiFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'));
constAiComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'));
constAiVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'));
constAiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
constAiHrSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'));
constAiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
constAiWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
constAiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
constAiPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'));
constAiEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));
constAiVideoAnalysisPage = React.lazy(() => import('./app/ai-video-analysis/page'));
constAiSpeechSynthesisPage = React.lazy(() => import('./app/ai-speech-synthesis/page'));
constAiRecommendationEnginePage = React.lazy(() => import('./app/ai-recommendation-engine/page'));
constAiSentimentAnalysisPage = React.lazy(() => import('./app/ai-sentiment-analysis/page'));
constAiChatbotEnterprisePage = React.lazy(() => import('./app/ai-chatbot-enterprise/page'));
constAiContentModerationPage = React.lazy(() => import('./app/ai-content-moderation/page'));
constAiPredictiveModelingPage = React.lazy(() => import('./app/ai-predictive-modeling/page'));
constAiDocumentIntelligencePage = React.lazy(() => import('./app/ai-document-intelligence/page'));
constAiConversationAnalyticsPage = React.lazy(() => import('./app/ai-conversation-analytics/page'));
constAiSupplyChainAiPage = React.lazy(() => import('./app/ai-supply-chain-ai/page'));
constAiHealthcareDiagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
constAiFinancialForecastingPage = React.lazy(() => import('./app/ai-financial-forecasting/page'));
constAiIotAnalyticsPage = React.lazy(() => import('./app/ai-iot-analytics/page'));
constAiConversationalAiPage = React.lazy(() => import('./app/ai-conversational-ai/page'));
constAiAutomatedTestingPage = React.lazy(() => import('./app/ai-automated-testing/page'));
constAiKnowledgeManagementPage = React.lazy(() => import('./app/ai-knowledge-management/page'));
constAiCustomerChurnPage = React.lazy(() => import('./app/ai-customer-churn/page'));
constAiAutomatedReportingPage = React.lazy(() => import('./app/ai-automated-reporting/page'));
constAiVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
constAiContentGenerationProPage = React.lazy(() => import('./app/ai-content-generation-pro/page'));
constAiAccountingAssistantPage = React.lazy(() => import('./app/ai-accounting-assistant/page'));
constAiCybersecurityMonitorProPage = React.lazy(() => import('./app/ai-cybersecurity-monitor-pro/page'));

// ITServicePagesconstCloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
constCybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'));
constWebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));
constMobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));
constApiDevelopmentPage = React.lazy(() => import('./app/api-development/page'));
constDatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
constDevOpsCicdPage = React.lazy(() => import('./app/devops-cicd/page'));
constItSupportPage = React.lazy(() => import('./app/it-support/page'));
constDataAnalyticsBiPage = React.lazy(() => import('./app/data-analytics-bi/page'));
constCustomSoftwarePage = React.lazy(() => import('./app/custom-software/page'));
constNetworkInfrastructurePage = React.lazy(() => import('./app/network-infrastructure/page'));
constItAssetManagementPage = React.lazy(() => import('./app/it-asset-management/page'));
constItSecurityServicesPage = React.lazy(() => import('./app/it-security-services/page'));
constItProjectManagementPage = React.lazy(() => import('./app/it-project-management/page'));
constCloudNativeDevelopmentPage = React.lazy(() => import('./app/cloud-native-development/page'));
constAiIntegrationServicesPage = React.lazy(() => import('./app/ai-integration-services/page'));
constBlockchainDevelopmentPage = React.lazy(() => import('./app/blockchain-development/page'));
constIotDevelopmentPage = React.lazy(() => import('./app/iot-development/page'));
constEcommerceDevelopmentPage = React.lazy(() => import('./app/e-commerce-development/page'));
constApiDevelopmentAdvancedPage = React.lazy(() => import('./app/api-development-advanced/page'));
constDataEngineeringPage = React.lazy(() => import('./app/data-engineering/page'));
constCybersecurityAdvancedPage = React.lazy(() => import('./app/cybersecurity-advanced/page'));
constCloudMigrationAdvancedPage = React.lazy(() => import('./app/cloud-migration-advanced/page'));
constDevOpsAdvancedPage = React.lazy(() => import('./app/devops-advanced/page'));
constMachineLearningOpsPage = React.lazy(() => import('./app/machine-learning-ops/page'));
constEnterpriseIntegrationPage = React.lazy(() => import('./app/enterprise-integration/page'));
constPerformanceOptimizationPage = React.lazy(() => import('./app/performance-optimization/page'));
constDisasterRecoveryAdvancedPage = React.lazy(() => import('./app/disaster-recovery-advanced/page'));
constComplianceAutomationPage = React.lazy(() => import('./app/compliance-automation/page'));
constCloudCostOptimizationPage = React.lazy(() => import('./app/cloud-cost-optimization/page'));
constSecurityAutomationPage = React.lazy(() => import('./app/security-automation/page'));
constDataVisualizationPage = React.lazy(() => import('./app/data-visualization/page'));
constWorkflowAutomationPage = React.lazy(() => import('./app/workflow-automation/page'));
constCloudNativeSecurityPage = React.lazy(() => import('./app/cloud-native-security/page'));

// MicroSAASPagesconstZionAnalyticsProPage = React.lazy(() => import('./app/zion-analytics-pro/page'));
constZionChatAiPage = React.lazy(() => import('./app/zion-chat-ai/page'));
constZionSecurityShieldPage = React.lazy(() => import('./app/zion-security-shield/page'));
constZionCloudVaultPage = React.lazy(() => import('./app/zion-cloud-vault/page'));
constZionContentStudioPage = React.lazy(() => import('./app/zion-content-studio/page'));
constZionCrmIntelligencePage = React.lazy(() => import('./app/zion-crm-intelligence/page'));
constZionDataSyncPage = React.lazy(() => import('./app/zion-data-sync/page'));
constZionLeadMagnetPage = React.lazy(() => import('./app/zion-lead-magnet/page'));
constZionProjectMasterPage = React.lazy(() => import('./app/zion-project-master/page'));
constZionEmailAutomationPage = React.lazy(() => import('./app/zion-email-automation/page'));
constZionInventorySmartPage = React.lazy(() => import('./app/zion-inventory-smart/page'));
constZionInvoiceGeniusPage = React.lazy(() => import('./app/zion-invoice-genius/page'));
constZionWorkflowAutomationPage = React.lazy(() => import('./app/zion-workflow-automation/page'));
constZionPerformanceMonitorPage = React.lazy(() => import('./app/zion-performance-monitor/page'));
constZionComplianceManagerPage = React.lazy(() => import('./app/zion-compliance-manager/page'));
constZionSocialSchedulerPage = React.lazy(() => import('./app/zion-social-scheduler/page'));
constZionAiVideoEditorPage = React.lazy(() => import('./app/zion-ai-video-editor/page'));
constZionAiTranslatorProPage = React.lazy(() => import('./app/zion-ai-translator-pro/page'));
constZionAiCodeReviewerPage = React.lazy(() => import('./app/zion-ai-code-reviewer/page'));
constZionCustomerInsightsPage = React.lazy(() => import('./app/zion-customer-insights/page'));
constZionAiEmailAssistantPage = React.lazy(() => import('./app/zion-ai-email-assistant/page'));
constZionAiMeetingAssistantPage = React.lazy(() => import('./app/zion-ai-meeting-assistant/page'));
constZionAiSeoOptimizerPage = React.lazy(() => import('./app/zion-ai-seo-optimizer/page'));
constZionAiDataCleanerPage = React.lazy(() => import('./app/zion-ai-data-cleaner/page'));
constZionAiContractAnalyzerPage = React.lazy(() => import('./app/zion-ai-contract-analyzer/page'));
constZionAiSurveyBuilderPage = React.lazy(() => import('./app/zion-ai-survey-builder/page'));
constZionAiAccountingAssistantPage = React.lazy(() => import('./app/zion-ai-accounting-assistant/page'));
constZionAiRecruitmentProPage = React.lazy(() => import('./app/zion-ai-recruitment-pro/page'));
constZionAiContentModerationPage = React.lazy(() => import('./app/zion-ai-content-moderation/page'));
constZionAiPredictiveMaintenancePage = React.lazy(() => import('./app/zion-ai-predictive-maintenance/page'));
constZionAiEnergyManagerPage = React.lazy(() => import('./app/zion-ai-energy-manager/page'));
constZionAiSupplyChainOptimizerPage = React.lazy(() => import('./app/zion-ai-supply-chain-optimizer/page'));
constZionAiFraudDetectorPage = React.lazy(() => import('./app/zion-ai-fraud-detector/page'));
constZionAiCustomerServiceProPage = React.lazy(() => import('./app/zion-ai-customer-service-pro/page'));
constZionAiMarketingAutomationPage = React.lazy(() => import('./app/zion-ai-marketing-automation/page'));
constZionAiDocumentAiPage = React.lazy(() => import('./app/zion-ai-document-ai/page'));

// EmergingTechnologyPagesconstFiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
constAi3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'));
constAiHolographicWorkspacePage = React.lazy(() => import('./app/ai-holographic-workspace/page'));
constAiAutonomousSystemsPage = React.lazy(() => import('./app/ai-autonomous-systems/page'));
constAiBlockchainSolutionsPage = React.lazy(() => import('./app/ai-blockchain-solutions/page'));
constQuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
constArVrSolutionsPage = React.lazy(() => import('./app/ar-vr-solutions/page'));
constIotIntegrationPage = React.lazy(() => import('./app/iot-integration/page'));
constMachineLearningPage = React.lazy(() => import('./app/machine-learning/page'));

// CompanyPagesconstTeamPage = React.lazy(() => import('./app/team/page'));
constPartnersPage = React.lazy(() => import('./app/partners/page'));
constStatusPage = React.lazy(() => import('./app/status/page'));

// ResourcePagesconstFaqPage = React.lazy(() => import('./app/faq/page'));
constDocsPage = React.lazy(() => import('./app/docs/page'));
constApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
constCommunityPage = React.lazy(() => import('./app/community/page'));
constCompliancePage = React.lazy(() => import('./app/compliance/page'));

// PerformancemonitoringhookconstAppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <React.Fragment>{children}</React.Fragment>
};

// MainAppComponentconstApp: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <Router>
          <AppWithPerformanceMonitoring>
            <AnalyticsProvider>
              <PerformanceOptimizer>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer>
                    <PerformanceMonitor />
                    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 cyber-gridneural-network-bgmatrix-rain">
                      <FuturisticBackground />
                      <Navigation />
                      <Breadcrumb />
                      <mainid="main-content" className="f l ex-1" tabIndex={-1}>
                        <Suspensefallback={<PageLoader />}>
                          <Routes>
                            <Routepath="/" element={<HomePage />} />
                            <Routepath="/about" element={<AboutPage />} />
                            <Routepath="/contact" element={<ContactPage />} />
                            <Routepath="/services" element={<ServicesPage />} />
                            <Routepath="/pricing" element={<PricingPage />} />
                            <Routepath="/blog" element={<BlogPage />} />
                            <Routepath="/case-studies" element={<CaseStudiesPage />} />
                            <Routepath="/careers" element={<CareersPage />} />
                            <Routepath="/ai-services" element={<AiServicesPage />} />
                            <Routepath="/it-services" element={<ItServicesPage />} />
                            <Routepath="/micro-saas" element={<MicroSaasPage />} />
                            <Routepath="/tutorials" element={<TutorialsPage />} />
                            <Routepath="/consultation" element={<ConsultationPage />} />
                            <Routepath="/demo" element={<DemoPage />} />
                            <Routepath="/support" element={<SupportPage />} />
                            <Routepath="/privacy" element={<PrivacyPage />} />
                            <Routepath="/terms" element={<TermsPage />} />
                            <Routepath="/cookies" element={<CookiesPage />} />
                            <Routepath="/sitemap" element={<SitemapPage />} />
                            
                            {/* AIServicePages */}
                            <Routepath="/ai-analytics" element={<AiAnalyticsPage />} />
                            <Routepath="/ai-automation" element={<AiAutomationPage />} />
                            <Routepath="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                            <Routepath="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            <Routepath="/ai-crm" element={<AiCrmPage />} />
                            <Routepath="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                            <Routepath="/ai-healthcare" element={<AiHealthcarePage />} />
                            <Routepath="/ai-financial-services" element={<AiFinancialServicesPage />} />
                            <Routepath="/ai-computer-vision" element={<AiComputerVisionPage />} />
                            <Routepath="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
                            <Routepath="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                            <Routepath="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
                            <Routepath="/ai-content-generation" element={<AiContentGenerationPage />} />
                            <Routepath="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                            <Routepath="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                            <Routepath="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                            <Routepath="/ai-edge-computing" element={<AiEdgeComputingPage />} />
                            <Routepath="/ai-video-analysis" element={<AiVideoAnalysisPage />} />
                            <Routepath="/ai-speech-synthesis" element={<AiSpeechSynthesisPage />} />
                            <Routepath="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                            <Routepath="/ai-sentiment-analysis" element={<AiSentimentAnalysisPage />} />
                            <Routepath="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
                            <Routepath="/ai-content-moderation" element={<AiContentModerationPage />} />
                            <Routepath="/ai-predictive-modeling" element={<AiPredictiveModelingPage />} />
                            <Routepath="/ai-document-intelligence" element={<AiDocumentIntelligencePage />} />
                            <Routepath="/ai-conversation-analytics" element={<AiConversationAnalyticsPage />} />
                            <Routepath="/ai-supply-chain-ai" element={<AiSupplyChainAiPage />} />
                            <Routepath="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
                            <Routepath="/ai-financial-forecasting" element={<AiFinancialForecastingPage />} />
                            <Routepath="/ai-iot-analytics" element={<AiIotAnalyticsPage />} />
                            <Routepath="/ai-conversational-ai" element={<AiConversationalAiPage />} />
                            <Routepath="/ai-automated-testing" element={<AiAutomatedTestingPage />} />
                            <Routepath="/ai-knowledge-management" element={<AiKnowledgeManagementPage />} />
                            <Routepath="/ai-customer-churn" element={<AiCustomerChurnPage />} />
                            <Routepath="/ai-automated-reporting" element={<AiAutomatedReportingPage />} />
                            <Routepath="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                            <Routepath="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
                            <Routepath="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                            <Routepath="/ai-cybersecurity-monitor-pro" element={<AiCybersecurityMonitorProPage />} />

                            {/* ITServicePages */}
                            <Routepath="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                            <Routepath="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                            <Routepath="/web-development" element={<WebDevelopmentPage />} />
                            <Routepath="/mobile-development" element={<MobileDevelopmentPage />} />
                            <Routepath="/api-development" element={<ApiDevelopmentPage />} />
                            <Routepath="/database-management" element={<DatabaseManagementPage />} />
                            <Routepath="/devops-cicd" element={<DevOpsCicdPage />} />
                            <Routepath="/it-support" element={<ItSupportPage />} />
                            <Routepath="/data-analytics-bi" element={<DataAnalyticsBiPage />} />
                            <Routepath="/custom-software" element={<CustomSoftwarePage />} />
                            <Routepath="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                            <Routepath="/it-asset-management" element={<ItAssetManagementPage />} />
                            <Routepath="/it-security-services" element={<ItSecurityServicesPage />} />
                            <Routepath="/it-project-management" element={<ItProjectManagementPage />} />
                            <Routepath="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
                            <Routepath="/ai-integration-services" element={<AiIntegrationServicesPage />} />
                            <Routepath="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                            <Routepath="/iot-development" element={<IotDevelopmentPage />} />
                            <Routepath="/e-commerce-development" element={<EcommerceDevelopmentPage />} />
                            <Routepath="/api-development-advanced" element={<ApiDevelopmentAdvancedPage />} />
                            <Routepath="/data-engineering" element={<DataEngineeringPage />} />
                            <Routepath="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
                            <Routepath="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                            <Routepath="/devops-advanced" element={<DevOpsAdvancedPage />} />
                            <Routepath="/machine-learning-ops" element={<MachineLearningOpsPage />} />
                            <Routepath="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
                            <Routepath="/performance-optimization" element={<PerformanceOptimizationPage />} />
                            <Routepath="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
                            <Routepath="/compliance-automation" element={<ComplianceAutomationPage />} />
                            <Routepath="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
                            <Routepath="/security-automation" element={<SecurityAutomationPage />} />
                            <Routepath="/data-visualization" element={<DataVisualizationPage />} />
                            <Routepath="/workflow-automation" element={<WorkflowAutomationPage />} />
                            <Routepath="/cloud-native-security" element={<CloudNativeSecurityPage />} />

                            {/* MicroSAASPages */}
                            <Routepath="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                            <Routepath="/zion-chat-ai" element={<ZionChatAiPage />} />
                            <Routepath="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                            <Routepath="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                            <Routepath="/zion-content-studio" element={<ZionContentStudioPage />} />
                            <Routepath="/zion-crm-intelligence" element={<ZionCrmIntelligencePage />} />
                            <Routepath="/zion-data-sync" element={<ZionDataSyncPage />} />
                            <Routepath="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                            <Routepath="/zion-project-master" element={<ZionProjectMasterPage />} />
                            <Routepath="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                            <Routepath="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                            <Routepath="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
                            <Routepath="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                            <Routepath="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
                            <Routepath="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
                            <Routepath="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                            <Routepath="/zion-ai-video-editor" element={<ZionAiVideoEditorPage />} />
                            <Routepath="/zion-ai-translator-pro" element={<ZionAiTranslatorProPage />} />
                            <Routepath="/zion-ai-code-reviewer" element={<ZionAiCodeReviewerPage />} />
                            <Routepath="/zion-customer-insights" element={<ZionCustomerInsightsPage />} />
                            <Routepath="/zion-ai-email-assistant" element={<ZionAiEmailAssistantPage />} />
                            <Routepath="/zion-ai-meeting-assistant" element={<ZionAiMeetingAssistantPage />} />
                            <Routepath="/zion-ai-seo-optimizer" element={<ZionAiSeoOptimizerPage />} />
                            <Routepath="/zion-ai-data-cleaner" element={<ZionAiDataCleanerPage />} />
                            <Routepath="/zion-ai-contract-analyzer" element={<ZionAiContractAnalyzerPage />} />
                            <Routepath="/zion-ai-survey-builder" element={<ZionAiSurveyBuilderPage />} />
                            <Routepath="/zion-ai-accounting-assistant" element={<ZionAiAccountingAssistantPage />} />
                            <Routepath="/zion-ai-recruitment-pro" element={<ZionAiRecruitmentProPage />} />
                            <Routepath="/zion-ai-content-moderation" element={<ZionAiContentModerationPage />} />
                            <Routepath="/zion-ai-predictive-maintenance" element={<ZionAiPredictiveMaintenancePage />} />
                            <Routepath="/zion-ai-energy-manager" element={<ZionAiEnergyManagerPage />} />
                            <Routepath="/zion-ai-supply-chain-optimizer" element={<ZionAiSupplyChainOptimizerPage />} />
                            <Routepath="/zion-ai-fraud-detector" element={<ZionAiFraudDetectorPage />} />
                            <Routepath="/zion-ai-customer-service-pro" element={<ZionAiCustomerServiceProPage />} />
                            <Routepath="/zion-ai-marketing-automation" element={<ZionAiMarketingAutomationPage />} />
                            <Routepath="/zion-ai-document-ai" element={<ZionAiDocumentAiPage />} />

                            {/* EmergingTechnologyPages */}
                            <Routepath="/5g-implementation" element={<FiveGImplementationPage />} />
                            <Routepath="/ai-3d-generation" element={<Ai3DGenerationPage />} />
                            <Routepath="/ai-holographic-workspace" element={<AiHolographicWorkspacePage />} />
                            <Routepath="/ai-autonomous-systems" element={<AiAutonomousSystemsPage />} />
                            <Routepath="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                            <Routepath="/quantum-computing" element={<QuantumComputingPage />} />
                            <Routepath="/ar-vr-solutions" element={<ArVrSolutionsPage />} />
                            <Routepath="/iot-integration" element={<IotIntegrationPage />} />
                            <Routepath="/machine-learning" element={<MachineLearningPage />} />

                            {/* CompanyPages */}
                            <Routepath="/team" element={<TeamPage />} />
                            <Routepath="/partners" element={<PartnersPage />} />
                            <Routepath="/status" element={<StatusPage />} />

                            {/* ResourcePages */}
                            <Routepath="/faq" element={<FaqPage />} />
                            <Routepath="/docs" element={<DocsPage />} />
                            <Routepath="/api-docs" element={<ApiDocsPage />} />
                            <Routepath="/community" element={<CommunityPage />} />
                            <Routepath="/compliance" element={<CompliancePage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </div>
                  </AccessibilityEnhancer>
                </EnhancedAccessibility>
              </PerformanceOptimizer>
            </AnalyticsProvider>
          </AppWithPerformanceMonitoring>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

exportdefaultApp;
