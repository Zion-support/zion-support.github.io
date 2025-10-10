import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { performanceMonitor } from './utils/performanceMonitor';

// Lazy load components for better performance
const _HomePage = lazy(() => import('./page'));
const _AboutPage = lazy(() => import('./about/page'));
const _ContactPage = lazy(() => import('./contact/page'));
const _ServicesPage = lazy(() => import('./services/page'));
const _BlogPage = lazy(() => import('./blog/page'));
const _CaseStudiesPage = lazy(() => import('./case-studies/page'));
const _NotFoundPage = lazy(() => import('./not-found'));

// AI Services Pages
const _AIAnalyticsDashboardPage = lazy(() => import('./ai-analytics-dashboard/page'));
const _AIChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'));
const _AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const _AICRMPage = lazy(() => import('./ai-crm/page'));
const _AICustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const _AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const _AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const _AIDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));
const _AIDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const _AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const _AIEmailAssistantPage = lazy(() => import('./ai-email-assistant/page'));
const _AIFintechPage = lazy(() => import('./ai-fintech/page'));
const _AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const _AILeadGenerationPage = lazy(() => import('./ai-lead-generation/page'));
const _AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const _AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));
const _AISalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const _AISchedulerPage = lazy(() => import('./ai-scheduler/page'));
const _AIServicesPage = lazy(() => import('./ai-services/page'));
const _AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const _AIWritingAssistantPage = lazy(() => import('./ai-writing-assistant/page'));

// Additional AI Services Pages
const _AIProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const _AISocialMediaManagerPage = lazy(() => import('./ai-social-media-manager/page'));
const _AIEmailMarketingPage = lazy(() => import('./ai-email-marketing/page'));
const _AICustomerSupportBotPage = lazy(() => import('./ai-customer-support-bot/page'));
const _AISEOOptimizerPage = lazy(() => import('./ai-seo-optimizer/page'));
const _AIFinancialAnalyzerPage = lazy(() => import('./ai-financial-analyzer/page'));
const _AIVideoGenerationPage = lazy(() => import('./ai-video-generation/page'));
const _AIVoiceCloningPage = lazy(() => import('./ai-voice-cloning/page'));
const _AIMusicCompositionPage = lazy(() => import('./ai-music-composition/page'));
const _AIFashionDesignPage = lazy(() => import('./ai-fashion-design/page'));
const _AIFitnessCoachPage = lazy(() => import('./ai-fitness-coach/page'));
const _AI3DGenerationPage = lazy(() => import('./ai-3d-generation/page'));
const _MachineLearningPage = lazy(() => import('./machine-learning/page'));
const _NLPPage = lazy(() => import('./nlp/page'));
const _ComputerVisionPage = lazy(() => import('./computer-vision/page'));
const _AIAutomationPage = lazy(() => import('./ai-automation/page'));
const _QuantumAIPage = lazy(() => import('./quantum-ai/page'));
const _DatabaseServicesPage = lazy(() => import('./database-services/page'));
const _NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const _ITSupportPage = lazy(() => import('./it-support/page'));

// IT Services Pages
const _AnalyticsToolsPage = lazy(() => import('./analytics-tools/page'));
const _APIDocsPage = lazy(() => import('./api-docs/page'));
const _APIPage = lazy(() => import('./api/page'));
const _AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const _BlockchainPage = lazy(() => import('./blockchain/page'));
const _BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const _BusinessAppsPage = lazy(() => import('./business-apps/page'));
const _BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const _CareersPage = lazy(() => import('./careers/page'));
const _CloudServicesPage = lazy(() => import('./cloud-services/page'));
const _CompliancePage = lazy(() => import('./compliance/page'));
const _ConsultationPage = lazy(() => import('./consultation/page'));
const _CookiesPage = lazy(() => import('./cookies/page'));
const _CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const _DatabasePage = lazy(() => import('./database/page'));
const _DemoPage = lazy(() => import('./demo/page'));
const _DeveloperToolsPage = lazy(() => import('./developer-tools/page'));
const _DevOpsPage = lazy(() => import('./devops/page'));
const _DocsPage = lazy(() => import('./docs/page'));
const _EnterprisePage = lazy(() => import('./enterprise/page'));
const _ExpenseTrackerPage = lazy(() => import('./expense-tracker/page'));
const _GDPRPage = lazy(() => import('./gdpr/page'));
const _IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const _IoTEdgePage = lazy(() => import('./iot-edge/page'));
const _ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const _ITServicesPage = lazy(() => import('./it-services/page'));
const _MarketingToolsPage = lazy(() => import('./marketing-tools/page'));
const _MicroSAASPage = lazy(() => import('./micro-saas/page'));
const _NetworkingPage = lazy(() => import('./networking/page'));
const _NewsPage = lazy(() => import('./news/page'));
const _OfflinePage = lazy(() => import('./offline/page'));
const _PricingPage = lazy(() => import('./pricing/page'));
const _PrivacyPage = lazy(() => import('./privacy/page'));
const _ProductivityPage = lazy(() => import('./productivity/page'));
const _QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const _RoboticsPage = lazy(() => import('./robotics/page'));
const _SecurityPage = lazy(() => import('./security/page'));
const _ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const _SitemapPage = lazy(() => import('./sitemap/page'));
const _SmartAnalyticsPage = lazy(() => import('./smart-analytics/page'));
const _StatusPage = lazy(() => import('./status/page'));
const _SupportPage = lazy(() => import('./support/page'));
const _SystemStatusPage = lazy(() => import('./system-status/page'));
const _TaskManagerProPage = lazy(() => import('./task-manager-pro/page'));
const _TeamPage = lazy(() => import('./team/page'));
const _TermsPage = lazy(() => import('./terms/page'));

// Blog Pages
const _BlogAgentReleaseRunbooksV22026Page = lazy(() => import('./blog/agent-release-runbooks-v2-2026/page'));
const _BlogAI20252026MegaTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-2026-mega-trends-breakthrough/page'));
const _BlogAI2025JanuaryAdvancedAIRevolutionPage = lazy(() => import('./blog/ai-2025-january-advanced-ai-revolution/page'));
const _BlogAI2025JanuaryCuttingEdgeTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-january-cutting-edge-trends-breakthrough/page'));
const _BlogAI2025MarchAutonomousEnterpriseOperationsRevolutionPage = lazy(() => import('./blog/ai-2025-march-autonomous-enterprise-operations-revolution/page'));
const _BlogAI2025Sept30OperationalTrustScorecardsV3Page = lazy(() => import('./blog/ai-2025-sept-30-operational-trust-scorecards-v3/page'));
const _BlogAI2026AdaptiveNeuralArchitecturesBreakthroughPage = lazy(() => import('./blog/ai-2026-adaptive-neural-architectures-breakthrough/page'));
const _BlogAI2026AdvancedNeuralOptimizationRevolutionPage = lazy(() => import('./blog/ai-2026-advanced-neural-optimization-revolution/page'));
const _BlogAI2026AprilRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-april-revolutionary-breakthrough/page'));
const _BlogAI2026AprilUltimateBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-april-ultimate-breakthrough-revolution/page'));
const _BlogAI2026AutonomousAgentFactoriesPage = lazy(() => import('./blog/ai-2026-autonomous-agent-factories/page'));
const _BlogAI2026AutonomousBusinessIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-breakthrough/page'));
const _BlogAI2026AutonomousBusinessIntelligenceMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page'));
const _BlogAI2026AutonomousEnterpriseArchitecturePage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-architecture/page'));
const _BlogAI2026AutonomousEnterpriseAutomationMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page'));
const _BlogAI2026ConsensusIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-consensus-intelligence-breakthrough/page'));
const _BlogAI2026EnterpriseAutomationRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page'));
const _BlogAI2026EnterpriseBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-breakthrough/page'));
const _BlogAI2026FebruaryMegaBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-february-mega-breakthrough-revolution/page'));
const _BlogAI2026FebruaryUltimateConsciousnessBreakthroughPage = lazy(() => import('./blog/ai-2026-february-ultimate-consciousness-breakthrough/page'));
const _BlogAI2026HyperconsciousComputingRevolutionPage = lazy(() => import('./blog/ai-2026-hyperconscious-computing-revolution/page'));
const _BlogAIAutonomousBusinessSystems2026Page = lazy(() => import('./blog/ai-autonomous-business-systems-2026/page'));
const _BlogAICostOptimizationBreakthrough2026Page = lazy(() => import('./blog/ai-cost-optimization-breakthrough-2026/page'));
const _BlogAIEnterpriseTransformation2025Page = lazy(() => import('./blog/ai-enterprise-transformation-2025/page'));
const _BlogAIEnterpriseTransformationUltimateGuide2025Page = lazy(() => import('./blog/ai-enterprise-transformation-ultimate-guide-2025/page'));
const _BlogAIInnovationLabsProductDevelopment2025Page = lazy(() => import('./blog/ai-innovation-labs-product-development-2025/page'));
const _BlogAIPoweredAutonomousBusinessProcesses2026Page = lazy(() => import('./blog/ai-powered-autonomous-business-processes-2026/page'));
const _BlogAITrends2026FutureEnterpriseTransformationPage = lazy(() => import('./blog/ai-trends-2026-future-enterprise-transformation/page'));

// Main loading component
const _MainLoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <LoadingSpinner size="xl" text="Loading Zion Tech Group..." />
  </div>
);

const App: React.FC = () => {
  // Initialize performance monitoring
  React.useEffect(() => {
    performanceMonitor.reportMetrics();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Suspense _fallback={<MainLoadingSpinner />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            
            {/* AI Services Pages */}
            <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
            <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
            <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
            <Route path="/ai-crm" element={<AICRMPage />} />
            <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
            <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
            <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
            <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
            <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
            <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
            <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
            <Route path="/ai-fintech" element={<AIFintechPage />} />
            <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
            <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
            <Route path="/ai-marketing" element={<AIMarketingPage />} />
            <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
            <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
            <Route path="/ai-scheduler" element={<AISchedulerPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
            <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} />
            
            {/* Additional AI Services Pages */}
            <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
            <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
            <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
            <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
            <Route path="/ai-seo-optimizer" element={<AISEOOptimizerPage />} />
            <Route path="/ai-financial-analyzer" element={<AIFinancialAnalyzerPage />} />
            <Route path="/ai-video-generation" element={<AIVideoGenerationPage />} />
            <Route path="/ai-voice-cloning" element={<AIVoiceCloningPage />} />
            <Route path="/ai-music-composition" element={<AIMusicCompositionPage />} />
            <Route path="/ai-fashion-design" element={<AIFashionDesignPage />} />
            <Route path="/ai-fitness-coach" element={<AIFitnessCoachPage />} />
            <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
            <Route path="/machine-learning" element={<MachineLearningPage />} />
            <Route path="/nlp" element={<NLPPage />} />
            <Route path="/computer-vision" element={<ComputerVisionPage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/quantum-ai" element={<QuantumAIPage />} />
            <Route path="/database-services" element={<DatabaseServicesPage />} />
            <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
            <Route path="/it-support" element={<ITSupportPage />} />
            
            {/* IT Services Pages */}
            <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />
            <Route path="/api-docs" element={<APIDocsPage />} />
            <Route path="/api" element={<APIPage />} />
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
            <Route path="/blockchain" element={<BlockchainPage />} />
            <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
            <Route path="/business-apps" element={<BusinessAppsPage />} />
            <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/database" element={<DatabasePage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/developer-tools" element={<DeveloperToolsPage />} />
            <Route path="/devops" element={<DevOpsPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
            <Route path="/gdpr" element={<GDPRPage />} />
            <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
            <Route path="/iot-edge" element={<IoTEdgePage />} />
            <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
            <Route path="/it-services" element={<ITServicesPage />} />
            <Route path="/marketing-tools" element={<MarketingToolsPage />} />
            <Route path="/micro-saas" element={<MicroSAASPage />} />
            <Route path="/networking" element={<NetworkingPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/offline" element={<OfflinePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/productivity" element={<ProductivityPage />} />
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/system-status" element={<SystemStatusPage />} />
            <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* Blog Pages */}
            <Route path="/blog/agent-release-runbooks-v2-2026" element={<BlogAgentReleaseRunbooksV22026Page />} />
            <Route path="/blog/ai-2025-2026-mega-trends-breakthrough" element={<BlogAI20252026MegaTrendsBreakthroughPage />} />
            <Route path="/blog/ai-2025-january-advanced-ai-revolution" element={<BlogAI2025JanuaryAdvancedAIRevolutionPage />} />
            <Route path="/blog/ai-2025-january-cutting-edge-trends-breakthrough" element={<BlogAI2025JanuaryCuttingEdgeTrendsBreakthroughPage />} />
            <Route path="/blog/ai-2025-march-autonomous-enterprise-operations-revolution" element={<BlogAI2025MarchAutonomousEnterpriseOperationsRevolutionPage />} />
            <Route path="/blog/ai-2025-sept-30-operational-trust-scorecards-v3" element={<BlogAI2025Sept30OperationalTrustScorecardsV3Page />} />
            <Route path="/blog/ai-2026-adaptive-neural-architectures-breakthrough" element={<BlogAI2026AdaptiveNeuralArchitecturesBreakthroughPage />} />
            <Route path="/blog/ai-2026-advanced-neural-optimization-revolution" element={<BlogAI2026AdvancedNeuralOptimizationRevolutionPage />} />
            <Route path="/blog/ai-2026-april-revolutionary-breakthrough" element={<BlogAI2026AprilRevolutionaryBreakthroughPage />} />
            <Route path="/blog/ai-2026-april-ultimate-breakthrough-revolution" element={<BlogAI2026AprilUltimateBreakthroughRevolutionPage />} />
            <Route path="/blog/ai-2026-autonomous-agent-factories" element={<BlogAI2026AutonomousAgentFactoriesPage />} />
            <Route path="/blog/ai-2026-autonomous-business-intelligence-breakthrough" element={<BlogAI2026AutonomousBusinessIntelligenceBreakthroughPage />} />
            <Route path="/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough" element={<BlogAI2026AutonomousBusinessIntelligenceMegaBreakthroughPage />} />
            <Route path="/blog/ai-2026-autonomous-enterprise-architecture" element={<BlogAI2026AutonomousEnterpriseArchitecturePage />} />
            <Route path="/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough" element={<BlogAI2026AutonomousEnterpriseAutomationMegaBreakthroughPage />} />
            <Route path="/blog/ai-2026-consensus-intelligence-breakthrough" element={<BlogAI2026ConsensusIntelligenceBreakthroughPage />} />
            <Route path="/blog/ai-2026-enterprise-automation-revolutionary-breakthrough" element={<BlogAI2026EnterpriseAutomationRevolutionaryBreakthroughPage />} />
            <Route path="/blog/ai-2026-enterprise-breakthrough" element={<BlogAI2026EnterpriseBreakthroughPage />} />
            <Route path="/blog/ai-2026-february-mega-breakthrough-revolution" element={<BlogAI2026FebruaryMegaBreakthroughRevolutionPage />} />
            <Route path="/blog/ai-2026-february-ultimate-consciousness-breakthrough" element={<BlogAI2026FebruaryUltimateConsciousnessBreakthroughPage />} />
            <Route path="/blog/ai-2026-hyperconscious-computing-revolution" element={<BlogAI2026HyperconsciousComputingRevolutionPage />} />
            <Route path="/blog/ai-autonomous-business-systems-2026" element={<BlogAIAutonomousBusinessSystems2026Page />} />
            <Route path="/blog/ai-cost-optimization-breakthrough-2026" element={<BlogAICostOptimizationBreakthrough2026Page />} />
            <Route path="/blog/ai-enterprise-transformation-2025" element={<BlogAIEnterpriseTransformation2025Page />} />
            <Route path="/blog/ai-enterprise-transformation-ultimate-guide-2025" element={<BlogAIEnterpriseTransformationUltimateGuide2025Page />} />
            <Route path="/blog/ai-innovation-labs-product-development-2025" element={<BlogAIInnovationLabsProductDevelopment2025Page />} />
            <Route path="/blog/ai-powered-autonomous-business-processes-2026" element={<BlogAIPoweredAutonomousBusinessProcesses2026Page />} />
            <Route path="/blog/ai-trends-2026-future-enterprise-transformation" element={<BlogAITrends2026FutureEnterpriseTransformationPage />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;