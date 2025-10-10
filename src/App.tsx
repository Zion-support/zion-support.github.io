import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { performanceMonitor } from './utils/performanceMonitor';
// Lazy load components for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const BlogPage = lazy(() => import('./blog/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const NotFoundPage = lazy(() => import('./not-found'));
// AI Services Pages
const AIAnalyticsDashboardPage = lazy(() => import('./ai-analytics-dashboard/page'));
const AIChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AICRMPage = lazy(() => import('./ai-crm/page'));
const AICustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AIDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));
const AIDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AIEmailAssistantPage = lazy(() => import('./ai-email-assistant/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AILeadGenerationPage = lazy(() => import('./ai-lead-generation/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));
const AISalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AISchedulerPage = lazy(() => import('./ai-scheduler/page'));
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AIWritingAssistantPage = lazy(() => import('./ai-writing-assistant/page'));
// Additional AI Services Pages
const AIProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const AISocialMediaManagerPage = lazy(() => import('./ai-social-media-manager/page'));
const AIEmailMarketingPage = lazy(() => import('./ai-email-marketing/page'));
const AICustomerSupportBotPage = lazy(() => import('./ai-customer-support-bot/page'));
const AISEOOptimizerPage = lazy(() => import('./ai-seo-optimizer/page'));
const AIFinancialAnalyzerPage = lazy(() => import('./ai-financial-analyzer/page'));
const AIVideoGenerationPage = lazy(() => import('./ai-video-generation/page'));
const AIVoiceCloningPage = lazy(() => import('./ai-voice-cloning/page'));
const AIMusicCompositionPage = lazy(() => import('./ai-music-composition/page'));
const AIFashionDesignPage = lazy(() => import('./ai-fashion-design/page'));
const AIFitnessCoachPage = lazy(() => import('./ai-fitness-coach/page'));
const AI3DGenerationPage = lazy(() => import('./ai-3d-generation/page'));
const MachineLearningPage = lazy(() => import('./machine-learning/page'));
const NLPPage = lazy(() => import('./nlp/page'));
const ComputerVisionPage = lazy(() => import('./computer-vision/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const QuantumAIPage = lazy(() => import('./quantum-ai/page'));
const DatabaseServicesPage = lazy(() => import('./database-services/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ITSupportPage = lazy(() => import('./it-support/page'));
// IT Services Pages
const AnalyticsToolsPage = lazy(() => import('./analytics-tools/page'));
const APIDocsPage = lazy(() => import('./api-docs/page'));
const APIPage = lazy(() => import('./api/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const BusinessAppsPage = lazy(() => import('./business-apps/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const CareersPage = lazy(() => import('./careers/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DatabasePage = lazy(() => import('./database/page'));
const DemoPage = lazy(() => import('./demo/page'));
const DeveloperToolsPage = lazy(() => import('./developer-tools/page'));
const DevOpsPage = lazy(() => import('./devops/page'));
const DocsPage = lazy(() => import('./docs/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const ExpenseTrackerPage = lazy(() => import('./expense-tracker/page'));
const GDPRPage = lazy(() => import('./gdpr/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const IoTEdgePage = lazy(() => import('./iot-edge/page'));
const ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ITServicesPage = lazy(() => import('./it-services/page'));
const MarketingToolsPage = lazy(() => import('./marketing-tools/page'));
const MicroSAASPage = lazy(() => import('./micro-saas/page'));
const NetworkingPage = lazy(() => import('./networking/page'));
const NewsPage = lazy(() => import('./news/page'));
const OfflinePage = lazy(() => import('./offline/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const ProductivityPage = lazy(() => import('./productivity/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));
const SecurityPage = lazy(() => import('./security/page'));
const ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const SitemapPage = lazy(() => import('./sitemap/page'));
const SmartAnalyticsPage = lazy(() => import('./smart-analytics/page'));
const StatusPage = lazy(() => import('./status/page'));
const SupportPage = lazy(() => import('./support/page'));
const SystemStatusPage = lazy(() => import('./system-status/page'));
const TaskManagerProPage = lazy(() => import('./task-manager-pro/page'));
const TeamPage = lazy(() => import('./team/page'));
const TermsPage = lazy(() => import('./terms/page'));
// Blog Pages
const BlogAgentReleaseRunbooksV22026Page = lazy(() => import('./blog/agent-release-runbooks-v2-2026/page'));
const BlogAI20252026MegaTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-2026-mega-trends-breakthrough/page'));
const BlogAI2025JanuaryAdvancedAIRevolutionPage = lazy(() => import('./blog/ai-2025-january-advanced-ai-revolution/page'));
const BlogAI2025JanuaryCuttingEdgeTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-january-cutting-edge-trends-breakthrough/page'));
const BlogAI2025MarchAutonomousEnterpriseOperationsRevolutionPage = lazy(() => import('./blog/ai-2025-march-autonomous-enterprise-operations-revolution/page'));
const BlogAI2025Sept30OperationalTrustScorecardsV3Page = lazy(() => import('./blog/ai-2025-sept-30-operational-trust-scorecards-v3/page'));
const BlogAI2026AdaptiveNeuralArchitecturesBreakthroughPage = lazy(() => import('./blog/ai-2026-adaptive-neural-architectures-breakthrough/page'));
const BlogAI2026AdvancedNeuralOptimizationRevolutionPage = lazy(() => import('./blog/ai-2026-advanced-neural-optimization-revolution/page'));
const BlogAI2026AprilRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-april-revolutionary-breakthrough/page'));
const BlogAI2026AprilUltimateBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-april-ultimate-breakthrough-revolution/page'));
const BlogAI2026AutonomousAgentFactoriesPage = lazy(() => import('./blog/ai-2026-autonomous-agent-factories/page'));
const BlogAI2026AutonomousBusinessIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-breakthrough/page'));
const BlogAI2026AutonomousBusinessIntelligenceMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page'));
const BlogAI2026AutonomousEnterpriseArchitecturePage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-architecture/page'));
const BlogAI2026AutonomousEnterpriseAutomationMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page'));
const BlogAI2026ConsensusIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-consensus-intelligence-breakthrough/page'));
const BlogAI2026EnterpriseAutomationRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page'));
const BlogAI2026EnterpriseBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-breakthrough/page'));
const BlogAI2026FebruaryMegaBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-february-mega-breakthrough-revolution/page'));
const BlogAI2026FebruaryUltimateConsciousnessBreakthroughPage = lazy(() => import('./blog/ai-2026-february-ultimate-consciousness-breakthrough/page'));
const BlogAI2026HyperconsciousComputingRevolutionPage = lazy(() => import('./blog/ai-2026-hyperconscious-computing-revolution/page'));
const BlogAIAutonomousBusinessSystems2026Page = lazy(() => import('./blog/ai-autonomous-business-systems-2026/page'));
const BlogAICostOptimizationBreakthrough2026Page = lazy(() => import('./blog/ai-cost-optimization-breakthrough-2026/page'));
const BlogAIEnterpriseTransformation2025Page = lazy(() => import('./blog/ai-enterprise-transformation-2025/page'));
const BlogAIEnterpriseTransformationUltimateGuide2025Page = lazy(() => import('./blog/ai-enterprise-transformation-ultimate-guide-2025/page'));
const BlogAIInnovationLabsProductDevelopment2025Page = lazy(() => import('./blog/ai-innovation-labs-product-development-2025/page'));
const BlogAIPoweredAutonomousBusinessProcesses2026Page = lazy(() => import('./blog/ai-powered-autonomous-business-processes-2026/page'));
const BlogAITrends2026FutureEnterpriseTransformationPage = lazy(() => import('./blog/ai-trends-2026-future-enterprise-transformation/page'));
// Main loading component
const MainLoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <LoadingSpinner size="xl" text="Loading Zion Tech Group..." />
  </div
);
const App: React.FC = () => {
  // Initialize performance monitoring
  React.useEffect(() => {
    performanceMonitor.reportMetrics();
  }, []);
  return (
    <ErrorBoundary
      <Router
        <Suspense fallback={<MainLoadingSpinner />}</ErrorBoundary
          <Routes
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} /</Routes
            <Route path="/about" element={<AboutPage />} /</Route
            <Route path="/contact" element={<ContactPage />} /</Route
            <Route path="/services" element={<ServicesPage />} /</Route
            <Route path="/blog" element={<BlogPage />} /</Route
            <Route path="/case-studies" element={<CaseStudiesPage />} /</Route
            {/* AI Services Pages */}
            <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} /</Route
            <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} /</Route
            <Route path="/ai-content-generation" element={<AIContentGenerationPage />} /</Route
            <Route path="/ai-crm" element={<AICRMPage />} /</Route
            <Route path="/ai-customer-support" element={<AICustomerSupportPage />} /</Route
            <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} /</Route
            <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} /</Route
            <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} /</Route
            <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} /</Route
            <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} /</Route
            <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} /</Route
            <Route path="/ai-fintech" element={<AIFintechPage />} /</Route
            <Route path="/ai-healthcare" element={<AIHealthcarePage />} /</Route
            <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} /</Route
            <Route path="/ai-marketing" element={<AIMarketingPage />} /</Route
            <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} /</Route
            <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} /</Route
            <Route path="/ai-scheduler" element={<AISchedulerPage />} /</Route
            <Route path="/ai-services" element={<AIServicesPage />} /</Route
            <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} /</Route
            <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} /</Route
            {/* Additional AI Services Pages */}
            <Route path="/ai-project-manager" element={<AIProjectManagerPage />} /</Route
            <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} /</Route
            <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} /</Route
            <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} /</Route
            <Route path="/ai-seo-optimizer" element={<AISEOOptimizerPage />} /</Route
            <Route path="/ai-financial-analyzer" element={<AIFinancialAnalyzerPage />} /</Route
            <Route path="/ai-video-generation" element={<AIVideoGenerationPage />} /</Route
            <Route path="/ai-voice-cloning" element={<AIVoiceCloningPage />} /</Route
            <Route path="/ai-music-composition" element={<AIMusicCompositionPage />} /</Route
            <Route path="/ai-fashion-design" element={<AIFashionDesignPage />} /</Route
            <Route path="/ai-fitness-coach" element={<AIFitnessCoachPage />} /</Route
            <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} /</Route
            <Route path="/machine-learning" element={<MachineLearningPage />} /</Route
            <Route path="/nlp" element={<NLPPage />} /</Route
            <Route path="/computer-vision" element={<ComputerVisionPage />} /</Route
            <Route path="/ai-automation" element={<AIAutomationPage />} /</Route
            <Route path="/quantum-ai" element={<QuantumAIPage />} /</Route
            <Route path="/database-services" element={<DatabaseServicesPage />} /</Route
            <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} /</Route
            <Route path="/it-support" element={<ITSupportPage />} /</Route
            {/* IT Services Pages */}
            <Route path="/analytics-tools" element={<AnalyticsToolsPage />} /</Route
            <Route path="/api-docs" element={<APIDocsPage />} /</Route
            <Route path="/api" element={<APIPage />} /</Route
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} /</Route
            <Route path="/blockchain" element={<BlockchainPage />} /</Route
            <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} /</Route
            <Route path="/business-apps" element={<BusinessAppsPage />} /</Route
            <Route path="/business-intelligence" element={<BusinessIntelligencePage />} /</Route
            <Route path="/careers" element={<CareersPage />} /</Route
            <Route path="/cloud-services" element={<CloudServicesPage />} /</Route
            <Route path="/compliance" element={<CompliancePage />} /</Route
            <Route path="/consultation" element={<ConsultationPage />} /</Route
            <Route path="/cookies" element={<CookiesPage />} /</Route
            <Route path="/cybersecurity" element={<CybersecurityPage />} /</Route
            <Route path="/database" element={<DatabasePage />} /</Route
            <Route path="/demo" element={<DemoPage />} /</Route
            <Route path="/developer-tools" element={<DeveloperToolsPage />} /</Route
            <Route path="/devops" element={<DevOpsPage />} /</Route
            <Route path="/docs" element={<DocsPage />} /</Route
            <Route path="/enterprise" element={<EnterprisePage />} /</Route
            <Route path="/expense-tracker" element={<ExpenseTrackerPage />} /</Route
            <Route path="/gdpr" element={<GDPRPage />} /</Route
            <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} /</Route
            <Route path="/iot-edge" element={<IoTEdgePage />} /</Route
            <Route path="/it-infrastructure" element={<ITInfrastructurePage />} /</Route
            <Route path="/it-services" element={<ITServicesPage />} /</Route
            <Route path="/marketing-tools" element={<MarketingToolsPage />} /</Route
            <Route path="/micro-saas" element={<MicroSAASPage />} /</Route
            <Route path="/networking" element={<NetworkingPage />} /</Route
            <Route path="/news" element={<NewsPage />} /</Route
            <Route path="/offline" element={<OfflinePage />} /</Route
            <Route path="/pricing" element={<PricingPage />} /</Route
            <Route path="/privacy" element={<PrivacyPage />} /</Route
            <Route path="/productivity" element={<ProductivityPage />} /</Route
            <Route path="/quantum-computing" element={<QuantumComputingPage />} /</Route
            <Route path="/robotics" element={<RoboticsPage />} /</Route
            <Route path="/security" element={<SecurityPage />} /</Route
            <Route path="/services-advertising" element={<ServicesAdvertisingPage />} /</Route
            <Route path="/sitemap" element={<SitemapPage />} /</Route
            <Route path="/smart-analytics" element={<SmartAnalyticsPage />} /</Route
            <Route path="/status" element={<StatusPage />} /</Route
            <Route path="/support" element={<SupportPage />} /</Route
            <Route path="/system-status" element={<SystemStatusPage />} /</Route
            <Route path="/task-manager-pro" element={<TaskManagerProPage />} /</Route
            <Route path="/team" element={<TeamPage />} /</Route
            <Route path="/terms" element={<TermsPage />} /</Route
            {/* Blog Pages */}
            <Route path="/blog/agent-release-runbooks-v2-2026" element={<BlogAgentReleaseRunbooksV22026Page />} /</Route
            <Route path="/blog/ai-2025-2026-mega-trends-breakthrough" element={<BlogAI20252026MegaTrendsBreakthroughPage />} /</Route
            <Route path="/blog/ai-2025-january-advanced-ai-revolution" element={<BlogAI2025JanuaryAdvancedAIRevolutionPage />} /</Route
            <Route path="/blog/ai-2025-january-cutting-edge-trends-breakthrough" element={<BlogAI2025JanuaryCuttingEdgeTrendsBreakthroughPage />} /</Route
            <Route path="/blog/ai-2025-march-autonomous-enterprise-operations-revolution" element={<BlogAI2025MarchAutonomousEnterpriseOperationsRevolutionPage />} /</Route
            <Route path="/blog/ai-2025-sept-30-operational-trust-scorecards-v3" element={<BlogAI2025Sept30OperationalTrustScorecardsV3Page />} /</Route
            <Route path="/blog/ai-2026-adaptive-neural-architectures-breakthrough" element={<BlogAI2026AdaptiveNeuralArchitecturesBreakthroughPage />} /</Route
            <Route path="/blog/ai-2026-advanced-neural-optimization-revolution" element={<BlogAI2026AdvancedNeuralOptimizationRevolutionPage />} /</Route
            <Route path="/blog/ai-2026-april-revolutionary-breakthrough" element={<BlogAI2026AprilRevolutionaryBreakthroughPage />} /</Route
            <Route path="/blog/ai-2026-april-ultimate-breakthrough-revolution" element={<BlogAI2026AprilUltimateBreakthroughRevolutionPage />} /</Route
            <Route path="/blog/ai-2026-autonomous-agent-factories" element={<BlogAI2026AutonomousAgentFactoriesPage />} /</Route
            <Route path="/blog/ai-2026-autonomous-business-intelligence-breakthrough" element={<BlogAI2026AutonomousBusinessIntelligenceBreakthroughPage />} /</Route
            <Route path="/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough" element={<BlogAI2026AutonomousBusinessIntelligenceMegaBreakthroughPage />} /</Route
            <Route path="/blog/ai-2026-autonomous-enterprise-architecture" element={<BlogAI2026AutonomousEnterpriseArchitecturePage />} /</Route
            <Route path="/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough" element={<BlogAI2026AutonomousEnterpriseAutomationMegaBreakthroughPage />} /</Route
            <Route path="/blog/ai-2026-consensus-intelligence-breakthrough" element={<BlogAI2026ConsensusIntelligenceBreakthroughPage />} /</Route
            <Route path="/blog/ai-2026-enterprise-automation-revolutionary-breakthrough" element={<BlogAI2026EnterpriseAutomationRevolutionaryBreakthroughPage />} /</Route
            <Route path="/blog/ai-2026-enterprise-breakthrough" element={<BlogAI2026EnterpriseBreakthroughPage />} /</Route
            <Route path="/blog/ai-2026-february-mega-breakthrough-revolution" element={<BlogAI2026FebruaryMegaBreakthroughRevolutionPage />} /</Route
            <Route path="/blog/ai-2026-february-ultimate-consciousness-breakthrough" element={<BlogAI2026FebruaryUltimateConsciousnessBreakthroughPage />} /</Route
            <Route path="/blog/ai-2026-hyperconscious-computing-revolution" element={<BlogAI2026HyperconsciousComputingRevolutionPage />} /</Route
            <Route path="/blog/ai-autonomous-business-systems-2026" element={<BlogAIAutonomousBusinessSystems2026Page />} /</Route
            <Route path="/blog/ai-cost-optimization-breakthrough-2026" element={<BlogAICostOptimizationBreakthrough2026Page />} /</Route
            <Route path="/blog/ai-enterprise-transformation-2025" element={<BlogAIEnterpriseTransformation2025Page />} /</Route
            <Route path="/blog/ai-enterprise-transformation-ultimate-guide-2025" element={<BlogAIEnterpriseTransformationUltimateGuide2025Page />} /</Route
            <Route path="/blog/ai-innovation-labs-product-development-2025" element={<BlogAIInnovationLabsProductDevelopment2025Page />} /</Route
            <Route path="/blog/ai-powered-autonomous-business-processes-2026" element={<BlogAIPoweredAutonomousBusinessProcesses2026Page />} /</Route
            <Route path="/blog/ai-trends-2026-future-enterprise-transformation" element={<BlogAITrends2026FutureEnterpriseTransformationPage />} /</Route
            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} /</Route
          </Routes
        </Suspense
      </Router
    </ErrorBoundary
  );
};
export default App