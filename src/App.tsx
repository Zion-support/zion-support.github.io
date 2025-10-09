import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { performanceMonitor } from './utils/performanceMonitor';

// Lazy load components for better performance
const HomePage = lazy(() => import('../app/page'));
const AboutPage = lazy(() => import('../app/about/page'));
const ContactPage = lazy(() => import('../app/contact/page'));
const ServicesPage = lazy(() => import('../app/services/page'));
const BlogPage = lazy(() => import('../app/blog/page'));
const CaseStudiesPage = lazy(() => import('../app/case-studies/page'));
const NotFoundPage = lazy(() => import('../app/not-found'));

// AI Services Pages
const AIAnalyticsDashboardPage = lazy(() => import('../app/ai-analytics/page'));
const AIChatbotBuilderPage = lazy(() => import('../app/ai-customer-support-bot/page'));
const AIContentGenerationPage = lazy(() => import('../app/ai-content-writer/page'));
const AICRMPage = lazy(() => import('../app/ai-sales-automation/page'));
const AICustomerSupportPage = lazy(() => import('../app/ai-customer-support/page'));
const AICybersecurityPage = lazy(() => import('../app/ai-fraud-detection/page'));
const AIDataAnalyticsPage = lazy(() => import('../app/ai-analytics/page'));
const AIDataVisualizationPage = lazy(() => import('../app/ai-data-visualization/page'));
const AIDocumentProcessingPage = lazy(() => import('../app/ai-content-writer/page'));
const AIEcommerceSolutionsPage = lazy(() => import('../app/ai-sales-automation/page'));
const AIEmailAssistantPage = lazy(() => import('../app/ai-email-marketing/page'));
const AIFintechPage = lazy(() => import('../app/ai-fraud-detection/page'));
const AIHealthcarePage = lazy(() => import('../app/ai-fitness-coach/page'));
const AILeadGenerationPage = lazy(() => import('../app/ai-sales-automation/page'));
const AIMarketingPage = lazy(() => import('../app/ai-social-media-manager/page'));
const AIMobileAppDevelopmentPage = lazy(() => import('../app/web-development/page'));
const AISalesAutomationPage = lazy(() => import('../app/ai-sales-automation/page'));
const AISchedulerPage = lazy(() => import('../app/ai-project-manager/page'));
const AIServicesPage = lazy(() => import('../app/ai-services/page'));
const AIWorkflowAutomationPage = lazy(() => import('../app/ai-workflow-automation/page'));
const AIWritingAssistantPage = lazy(() => import('../app/ai-content-writer/page'));

// Additional AI Services Pages
const AIProjectManagerPage = lazy(() => import('../app/ai-project-manager/page'));
const AISocialMediaManagerPage = lazy(() => import('../app/ai-social-media-manager/page'));
const AIEmailMarketingPage = lazy(() => import('../app/ai-email-marketing/page'));
const AICustomerSupportBotPage = lazy(() => import('../app/ai-customer-support-bot/page'));
const AISEOOptimizerPage = lazy(() => import('../app/ai-seo-optimizer/page'));
const AIFinancialAnalyzerPage = lazy(() => import('../app/ai-financial-analyzer/page'));
const AIVideoGenerationPage = lazy(() => import('../app/ai-video-generation/page'));
const AIVoiceCloningPage = lazy(() => import('../app/ai-voice-cloning/page'));
const AIMusicCompositionPage = lazy(() => import('../app/ai-music-composition/page'));
const AIFashionDesignPage = lazy(() => import('../app/ai-fashion-design/page'));
const AIFitnessCoachPage = lazy(() => import('../app/ai-fitness-coach/page'));
const AI3DGenerationPage = lazy(() => import('../app/ai-3d-generation/page'));
const MachineLearningPage = lazy(() => import('../app/machine-learning/page'));
const NLPPage = lazy(() => import('../app/nlp/page'));
const ComputerVisionPage = lazy(() => import('../app/computer-vision/page'));
const AIAutomationPage = lazy(() => import('../app/ai-automation/page'));
const QuantumAIPage = lazy(() => import('../app/quantum-ai/page'));
const DatabaseServicesPage = lazy(() => import('../app/database-services/page'));
const NetworkInfrastructurePage = lazy(() => import('../app/network-infrastructure/page'));
const ITSupportPage = lazy(() => import('../app/it-support/page'));

// New Pages
const WebDevelopmentPage = lazy(() => import('../app/web-development/page'));
const AIFraudDetectionPage = lazy(() => import('../app/ai-fraud-detection/page'));
const AIContentWriterPage = lazy(() => import('../app/ai-content-writer/page'));

// IT Services Pages - Most of these don't exist in app directory, will create them
const AnalyticsToolsPage = lazy(() => import('../app/ai-analytics/page'));
const APIDocsPage = lazy(() => import('../app/api-docs/page'));
const APIPage = lazy(() => import('../app/api/page'));
const AutonomousSystemsPage = lazy(() => import('../app/autonomous-systems/page'));
const BlockchainPage = lazy(() => import('../app/blockchain/page'));
const BlockchainWeb3Page = lazy(() => import('../app/blockchain-web3/page'));
const BusinessAppsPage = lazy(() => import('../app/business-apps/page'));
const BusinessIntelligencePage = lazy(() => import('../app/business-intelligence/page'));
const CareersPage = lazy(() => import('../app/careers/page'));
const CloudServicesPage = lazy(() => import('../app/cloud-services/page'));
const CompliancePage = lazy(() => import('../app/compliance/page'));
const ConsultationPage = lazy(() => import('../app/consultation/page'));
const CookiesPage = lazy(() => import('../app/cookies/page'));
const CybersecurityPage = lazy(() => import('../app/cybersecurity/page'));
const DatabasePage = lazy(() => import('../app/database/page'));
const DemoPage = lazy(() => import('../app/demo/page'));
const DeveloperToolsPage = lazy(() => import('../app/developer-tools/page'));
const DevOpsPage = lazy(() => import('../app/devops/page'));
const DocsPage = lazy(() => import('../app/docs/page'));
const EnterprisePage = lazy(() => import('../app/enterprise/page'));
const ExpenseTrackerPage = lazy(() => import('../app/expense-tracker/page'));
const GDPRPage = lazy(() => import('../app/gdpr/page'));
const IoTEdgeComputingPage = lazy(() => import('../app/iot-edge-computing/page'));
const IoTEdgePage = lazy(() => import('../app/iot-edge/page'));
const ITInfrastructurePage = lazy(() => import('../app/it-infrastructure/page'));
const ITServicesPage = lazy(() => import('../app/it-services/page'));
const MarketingToolsPage = lazy(() => import('../app/marketing-tools/page'));
const MicroSAASPage = lazy(() => import('../app/micro-saas/page'));
const NetworkingPage = lazy(() => import('../app/networking/page'));
const NewsPage = lazy(() => import('../app/news/page'));
const OfflinePage = lazy(() => import('../app/offline/page'));
const PricingPage = lazy(() => import('../app/pricing/page'));
const PrivacyPage = lazy(() => import('../app/privacy/page'));
const ProductivityPage = lazy(() => import('../app/productivity/page'));
const QuantumComputingPage = lazy(() => import('../app/quantum-computing/page'));
const RoboticsPage = lazy(() => import('../app/robotics/page'));
const SecurityPage = lazy(() => import('../app/security/page'));
const ServicesAdvertisingPage = lazy(() => import('../app/services-advertising/page'));
const SitemapPage = lazy(() => import('../app/sitemap/page'));
const SmartAnalyticsPage = lazy(() => import('../app/smart-analytics/page'));
const StatusPage = lazy(() => import('../app/status/page'));
const SupportPage = lazy(() => import('../app/support/page'));
const SystemStatusPage = lazy(() => import('../app/system-status/page'));
const TaskManagerProPage = lazy(() => import('../app/task-manager-pro/page'));
const TeamPage = lazy(() => import('../app/team/page'));
const TermsPage = lazy(() => import('../app/terms/page'));

// Blog Pages
const BlogAgentReleaseRunbooksV22026Page = lazy(() => import('../app/blog/agent-release-runbooks-v2-2026/page'));
const BlogAI20252026MegaTrendsBreakthroughPage = lazy(() => import('../app/blog/ai-2025-2026-mega-trends-breakthrough/page'));
const BlogAI2025JanuaryAdvancedAIRevolutionPage = lazy(() => import('../app/blog/ai-2025-january-advanced-ai-revolution/page'));
const BlogAI2025JanuaryCuttingEdgeTrendsBreakthroughPage = lazy(() => import('../app/blog/ai-2025-january-cutting-edge-trends-breakthrough/page'));
const BlogAI2025MarchAutonomousEnterpriseOperationsRevolutionPage = lazy(() => import('../app/blog/ai-2025-march-autonomous-enterprise-operations-revolution/page'));
const BlogAI2025Sept30OperationalTrustScorecardsV3Page = lazy(() => import('../app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page'));
const BlogAI2026AdaptiveNeuralArchitecturesBreakthroughPage = lazy(() => import('../app/blog/ai-2026-adaptive-neural-architectures-breakthrough/page'));
const BlogAI2026AdvancedNeuralOptimizationRevolutionPage = lazy(() => import('../app/blog/ai-2026-advanced-neural-optimization-revolution/page'));
const BlogAI2026AprilRevolutionaryBreakthroughPage = lazy(() => import('../app/blog/ai-2026-april-revolutionary-breakthrough/page'));
const BlogAI2026AprilUltimateBreakthroughRevolutionPage = lazy(() => import('../app/blog/ai-2026-april-ultimate-breakthrough-revolution/page'));
const BlogAI2026AutonomousAgentFactoriesPage = lazy(() => import('../app/blog/ai-2026-autonomous-agent-factories/page'));
const BlogAI2026AutonomousBusinessIntelligenceBreakthroughPage = lazy(() => import('../app/blog/ai-2026-autonomous-business-intelligence-breakthrough/page'));
const BlogAI2026AutonomousBusinessIntelligenceMegaBreakthroughPage = lazy(() => import('../app/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page'));
const BlogAI2026AutonomousEnterpriseArchitecturePage = lazy(() => import('../app/blog/ai-2026-autonomous-enterprise-architecture/page'));
const BlogAI2026AutonomousEnterpriseAutomationMegaBreakthroughPage = lazy(() => import('../app/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page'));
const BlogAI2026ConsensusIntelligenceBreakthroughPage = lazy(() => import('../app/blog/ai-2026-consensus-intelligence-breakthrough/page'));
const BlogAI2026EnterpriseAutomationRevolutionaryBreakthroughPage = lazy(() => import('../app/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page'));
const BlogAI2026EnterpriseBreakthroughPage = lazy(() => import('../app/blog/ai-2026-enterprise-breakthrough/page'));
const BlogAI2026FebruaryMegaBreakthroughRevolutionPage = lazy(() => import('../app/blog/ai-2026-february-mega-breakthrough-revolution/page'));
const BlogAI2026FebruaryUltimateConsciousnessBreakthroughPage = lazy(() => import('../app/blog/ai-2026-february-ultimate-consciousness-breakthrough/page'));
const BlogAI2026HyperconsciousComputingRevolutionPage = lazy(() => import('../app/blog/ai-2026-hyperconscious-computing-revolution/page'));
const BlogAIAutonomousBusinessSystems2026Page = lazy(() => import('../app/blog/ai-autonomous-business-systems-2026/page'));
const BlogAICostOptimizationBreakthrough2026Page = lazy(() => import('../app/blog/ai-cost-optimization-breakthrough-2026/page'));
const BlogAIEnterpriseTransformation2025Page = lazy(() => import('../app/blog/ai-enterprise-transformation-2025/page'));
const BlogAIEnterpriseTransformationUltimateGuide2025Page = lazy(() => import('../app/blog/ai-enterprise-transformation-ultimate-guide-2025/page'));
const BlogAIInnovationLabsProductDevelopment2025Page = lazy(() => import('../app/blog/ai-innovation-labs-product-development-2025/page'));
const BlogAIPoweredAutonomousBusinessProcesses2026Page = lazy(() => import('../app/blog/ai-powered-autonomous-business-processes-2026/page'));
const BlogAITrends2026FutureEnterpriseTransformationPage = lazy(() => import('../app/blog/ai-trends-2026-future-enterprise-transformation/page'));

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
            
            {/* New Pages */}
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
            <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
            
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