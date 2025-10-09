import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { performanceMonitor } from './utils/performanceMonitor';

// Lazy load components for better performance
const HomePage = lazy(() => import('./page.tsx'));
const AboutPage = lazy(() => import('./about/page.tsx'));
const ContactPage = lazy(() => import('./contact/page.tsx'));
const ServicesPage = lazy(() => import('./services/page.tsx'));
const BlogPage = lazy(() => import('./blog/page.tsx'));
const CaseStudiesPage = lazy(() => import('./case-studies/page.tsx'));
const NotFoundPage = lazy(() => import('./not-found.tsx'));

// AI Services Pages
const AIAnalyticsDashboardPage = lazy(() => import('./ai-analytics-dashboard/page.tsx'));
const AIChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page.tsx'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page.tsx'));
const AICRMPage = lazy(() => import('./ai-crm/page.tsx'));
const AICustomerSupportPage = lazy(() => import('./ai-customer-support/page.tsx'));
const AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page.tsx'));
const AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page.tsx'));
const AIDataVisualizationPage = lazy(() => import('./ai-data-visualization/page.tsx'));
const AIDocumentProcessingPage = lazy(() => import('./ai-document-processing/page.tsx'));
const AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page.tsx'));
const AIEmailAssistantPage = lazy(() => import('./ai-email-assistant/page.tsx'));
const AIFintechPage = lazy(() => import('./ai-fintech/page.tsx'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page.tsx'));
const AILeadGenerationPage = lazy(() => import('./ai-lead-generation/page.tsx'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page.tsx'));
const AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page.tsx'));
const AISalesAutomationPage = lazy(() => import('./ai-sales-automation/page.tsx'));
const AISchedulerPage = lazy(() => import('./ai-scheduler/page.tsx'));
const AIServicesPage = lazy(() => import('./ai-services/page.tsx'));
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page.tsx'));
const AIWritingAssistantPage = lazy(() => import('./ai-writing-assistant/page.tsx'));

// Additional AI Services Pages
const AIProjectManagerPage = lazy(() => import('./ai-project-manager/page.tsx'));
const AISocialMediaManagerPage = lazy(() => import('./ai-social-media-manager/page.tsx'));
const AIEmailMarketingPage = lazy(() => import('./ai-email-marketing/page.tsx'));
const AICustomerSupportBotPage = lazy(() => import('./ai-customer-support-bot/page.tsx'));
const AISEOOptimizerPage = lazy(() => import('./ai-seo-optimizer/page.tsx'));
const AIFinancialAnalyzerPage = lazy(() => import('./ai-financial-analyzer/page.tsx'));
const AIVideoGenerationPage = lazy(() => import('./ai-video-generation/page.tsx'));
const AIVoiceCloningPage = lazy(() => import('./ai-voice-cloning/page.tsx'));
const AIMusicCompositionPage = lazy(() => import('./ai-music-composition/page.tsx'));
const AIFashionDesignPage = lazy(() => import('./ai-fashion-design/page.tsx'));
const AIFitnessCoachPage = lazy(() => import('./ai-fitness-coach/page.tsx'));
const AI3DGenerationPage = lazy(() => import('./ai-3d-generation/page.tsx'));
const MachineLearningPage = lazy(() => import('./machine-learning/page.tsx'));
const NLPPage = lazy(() => import('./nlp/page.tsx'));
const ComputerVisionPage = lazy(() => import('./computer-vision/page.tsx'));
const AIAutomationPage = lazy(() => import('./ai-automation/page.tsx'));
const QuantumAIPage = lazy(() => import('./quantum-ai/page.tsx'));
const DatabaseServicesPage = lazy(() => import('./database-services/page.tsx'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page.tsx'));
const ITSupportPage = lazy(() => import('./it-support/page.tsx'));

// IT Services Pages
const AnalyticsToolsPage = lazy(() => import('./analytics-tools/page.tsx'));
const APIDocsPage = lazy(() => import('./api-docs/page.tsx'));
const APIPage = lazy(() => import('./api/page.tsx'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page.tsx'));
const BlockchainPage = lazy(() => import('./blockchain/page.tsx'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page.tsx'));
const BusinessAppsPage = lazy(() => import('./business-apps/page.tsx'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page.tsx'));
const CareersPage = lazy(() => import('./careers/page.tsx'));
const CloudServicesPage = lazy(() => import('./cloud-services/page.tsx'));
const CompliancePage = lazy(() => import('./compliance/page.tsx'));
const ConsultationPage = lazy(() => import('./consultation/page.tsx'));
const CookiesPage = lazy(() => import('./cookies/page.tsx'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page.tsx'));
const DatabasePage = lazy(() => import('./database/page.tsx'));
const DemoPage = lazy(() => import('./demo/page.tsx'));
const DeveloperToolsPage = lazy(() => import('./developer-tools/page.tsx'));
const DevOpsPage = lazy(() => import('./devops/page.tsx'));
const DocsPage = lazy(() => import('./docs/page.tsx'));
const EnterprisePage = lazy(() => import('./enterprise/page.tsx'));
const ExpenseTrackerPage = lazy(() => import('./expense-tracker/page.tsx'));
const GDPRPage = lazy(() => import('./gdpr/page.tsx'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page.tsx'));
const IoTEdgePage = lazy(() => import('./iot-edge/page.tsx'));
const ITInfrastructurePage = lazy(() => import('./it-infrastructure/page.tsx'));
const ITServicesPage = lazy(() => import('./it-services/page.tsx'));
const MarketingToolsPage = lazy(() => import('./marketing-tools/page.tsx'));
const MicroSAASPage = lazy(() => import('./micro-saas/page.tsx'));
const NetworkingPage = lazy(() => import('./networking/page.tsx'));
const NewsPage = lazy(() => import('./news/page.tsx'));
const OfflinePage = lazy(() => import('./offline/page.tsx'));
const PricingPage = lazy(() => import('./pricing/page.tsx'));
const PrivacyPage = lazy(() => import('./privacy/page.tsx'));
const ProductivityPage = lazy(() => import('./productivity/page.tsx'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page.tsx'));
const RoboticsPage = lazy(() => import('./robotics/page.tsx'));
const SecurityPage = lazy(() => import('./security/page.tsx'));
const ServicesAdvertisingPage = lazy(() => import('./services-advertising/page.tsx'));
const SitemapPage = lazy(() => import('./sitemap/page.tsx'));
const SmartAnalyticsPage = lazy(() => import('./smart-analytics/page.tsx'));
const StatusPage = lazy(() => import('./status/page.tsx'));
const SupportPage = lazy(() => import('./support/page.tsx'));
const SystemStatusPage = lazy(() => import('./system-status/page.tsx'));
const TaskManagerProPage = lazy(() => import('./task-manager-pro/page.tsx'));
const TeamPage = lazy(() => import('./team/page.tsx'));
const TermsPage = lazy(() => import('./terms/page.tsx'));

// Blog Pages
const BlogAgentReleaseRunbooksV22026Page = lazy(() => import('./blog/agent-release-runbooks-v2-2026/page.tsx'));
const BlogAI20252026MegaTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-2026-mega-trends-breakthrough/page.tsx'));
const BlogAI2025JanuaryAdvancedAIRevolutionPage = lazy(() => import('./blog/ai-2025-january-advanced-ai-revolution/page.tsx'));
const BlogAI2025JanuaryCuttingEdgeTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-january-cutting-edge-trends-breakthrough/page.tsx'));
const BlogAI2025MarchAutonomousEnterpriseOperationsRevolutionPage = lazy(() => import('./blog/ai-2025-march-autonomous-enterprise-operations-revolution/page.tsx'));
const BlogAI2025Sept30OperationalTrustScorecardsV3Page = lazy(() => import('./blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx'));
const BlogAI2026AdaptiveNeuralArchitecturesBreakthroughPage = lazy(() => import('./blog/ai-2026-adaptive-neural-architectures-breakthrough/page.tsx'));
const BlogAI2026AdvancedNeuralOptimizationRevolutionPage = lazy(() => import('./blog/ai-2026-advanced-neural-optimization-revolution/page.tsx'));
const BlogAI2026AprilRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-april-revolutionary-breakthrough/page.tsx'));
const BlogAI2026AprilUltimateBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-april-ultimate-breakthrough-revolution/page.tsx'));
const BlogAI2026AutonomousAgentFactoriesPage = lazy(() => import('./blog/ai-2026-autonomous-agent-factories/page.tsx'));
const BlogAI2026AutonomousBusinessIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-breakthrough/page.tsx'));
const BlogAI2026AutonomousBusinessIntelligenceMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx'));
const BlogAI2026AutonomousEnterpriseArchitecturePage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-architecture/page.tsx'));
const BlogAI2026AutonomousEnterpriseAutomationMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx'));
const BlogAI2026ConsensusIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-consensus-intelligence-breakthrough/page.tsx'));
const BlogAI2026EnterpriseAutomationRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx'));
const BlogAI2026EnterpriseBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-breakthrough/page.tsx'));
const BlogAI2026FebruaryMegaBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-february-mega-breakthrough-revolution/page.tsx'));
const BlogAI2026FebruaryUltimateConsciousnessBreakthroughPage = lazy(() => import('./blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx'));
const BlogAI2026HyperconsciousComputingRevolutionPage = lazy(() => import('./blog/ai-2026-hyperconscious-computing-revolution/page.tsx'));
const BlogAIAutonomousBusinessSystems2026Page = lazy(() => import('./blog/ai-autonomous-business-systems-2026/page.tsx'));
const BlogAICostOptimizationBreakthrough2026Page = lazy(() => import('./blog/ai-cost-optimization-breakthrough-2026/page.tsx'));
const BlogAIEnterpriseTransformation2025Page = lazy(() => import('./blog/ai-enterprise-transformation-2025/page.tsx'));
const BlogAIEnterpriseTransformationUltimateGuide2025Page = lazy(() => import('./blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx'));
const BlogAIInnovationLabsProductDevelopment2025Page = lazy(() => import('./blog/ai-innovation-labs-product-development-2025/page.tsx'));
const BlogAIPoweredAutonomousBusinessProcesses2026Page = lazy(() => import('./blog/ai-powered-autonomous-business-processes-2026/page.tsx'));
const BlogAITrends2026FutureEnterpriseTransformationPage = lazy(() => import('./blog/ai-trends-2026-future-enterprise-transformation/page.tsx'));

// Main loading component
const MainLoadingSpinner = () => (
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
        <Suspense fallback={<MainLoadingSpinner />}>
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