import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/SEOHead';

// Lazy load pages for better performance
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
const AiEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));
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
const CybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'));
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));
const ApiDevelopmentPage = React.lazy(() => import('./app/api-development/page'));
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
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

// Emerging Technology Pages
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const Ai3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'));
const AiHolographicWorkspacePage = React.lazy(() => import('./app/ai-holographic-workspace/page'));
const AiAutonomousSystemsPage = React.lazy(() => import('./app/ai-autonomous-systems/page'));
const AiBlockchainSolutionsPage = React.lazy(() => import('./app/ai-blockchain-solutions/page'));
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
const ArVrSolutionsPage = React.lazy(() => import('./app/ar-vr-solutions/page'));
const IotIntegrationPage = React.lazy(() => import('./app/iot-integration/page'));
const MachineLearningPage = React.lazy(() => import('./app/machine-learning/page'));

// Company Pages
const TeamPage = React.lazy(() => import('./app/team/page'));
const PartnersPage = React.lazy(() => import('./app/partners/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));

// Resource Pages
const FaqPage = React.lazy(() => import('./app/faq/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const CommunityPage = React.lazy(() => import('./app/community/page'));
const CompliancePage = React.lazy(() => import('./app/compliance/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <React.Fragment>{children}</React.Fragment>
};
// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

// Main App Component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <main className="pt-20">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  <Route path="/cloud-services" element={<CloudServicesPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  
                  {/* Legal Pages */}
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  
                  {/* AI Service Pages */}
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                  <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                  <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                  <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
                  <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                  <Route path="/ai-automation" element={<AIAutomationPage />} />
                  
                  {/* IT Service Pages */}
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                  <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  
                  {/* 404 Route */}
                  <Route path="*" element={
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                        <p className="text-xl text-gray-300 mb-8">Page not found</p>
                        <a 
                          href="/" 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                        >
                          Go Home
                        </a>
                      </div>
                    </div>
                  } />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
