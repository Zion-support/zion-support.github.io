import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import { performanceMonitor } from './utils/performanceMonitor'
// Lazy load components for better performance
const HomePage = lazy(() => import('./page'))
const AboutPage = lazy(() => import('./about/page'))
const ContactPage = lazy(() => import('./contact/page'))
const ServicesPage = lazy(() => import('./services/page'))
const BlogPage = lazy(() => import('./blog/page'))
const CaseStudiesPage = lazy(() => import('./case-studies/page'))
const NotFoundPage = lazy(() => import('./not-found'))
// AI Services Pages
const AIAnalyticsDashboardPage = lazy(() => import('./ai-analytics-dashboard/page'))
const AIChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'))
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'))
const AICRMPage = lazy(() => import('./ai-crm/page'))
const AICustomerSupportPage = lazy(() => import('./ai-customer-support/page'))
const AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'))
const AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'))
const AIDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'))
const AIDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'))
const AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'))
const AIEmailAssistantPage = lazy(() => import('./ai-email-assistant/page'))
const AIFintechPage = lazy(() => import('./ai-fintech/page'))
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'))
const AILeadGenerationPage = lazy(() => import('./ai-lead-generation/page'))
const AIMarketingPage = lazy(() => import('./ai-marketing/page'))
const AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'))
const AISalesAutomationPage = lazy(() => import('./ai-sales-automation/page'))
const AISchedulerPage = lazy(() => import('./ai-scheduler/page'))
const AIServicesPage = lazy(() => import('./ai-services/page'))
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'))
const AIWritingAssistantPage = lazy(() => import('./ai-writing-assistant/page'))
// Additional AI Services Pages
const AIProjectManagerPage = lazy(() => import('./ai-project-manager/page'))
const AISocialMediaManagerPage = lazy(() => import('./ai-social-media-manager/page'))
const AIEmailMarketingPage = lazy(() => import('./ai-email-marketing/page'))
const AICustomerSupportBotPage = lazy(() => import('./ai-customer-support-bot/page'))
const AISEOOptimizerPage = lazy(() => import('./ai-seo-optimizer/page'))
const AIFinancialAnalyzerPage = lazy(() => import('./ai-financial-analyzer/page'))
const AIVideoGenerationPage = lazy(() => import('./ai-video-generation/page'))
const AIVoiceCloningPage = lazy(() => import('./ai-voice-cloning/page'))
const AIMusicCompositionPage = lazy(() => import('./ai-music-composition/page'))
const AIFashionDesignPage = lazy(() => import('./ai-fashion-design/page'))
const AIFitnessCoachPage = lazy(() => import('./ai-fitness-coach/page'))
const AI3DGenerationPage = lazy(() => import('./ai-3d-generation/page'))
const MachineLearningPage = lazy(() => import('./machine-learning/page'))
const NLPPage = lazy(() => import('./nlp/page'))
const ComputerVisionPage = lazy(() => import('./computer-vision/page'))
const AIAutomationPage = lazy(() => import('./ai-automation/page'))
const QuantumAIPage = lazy(() => import('./quantum-ai/page'))
const DatabaseServicesPage = lazy(() => import('./database-services/page'))
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'))
const ITSupportPage = lazy(() => import('./it-support/page'))
// IT Services Pages
const AnalyticsToolsPage = lazy(() => import('./analytics-tools/page'))
const APIDocsPage = lazy(() => import('./api-docs/page'))
const APIPage = lazy(() => import('./api/page'))
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'))
const BlockchainPage = lazy(() => import('./blockchain/page'))
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'))
const BusinessAppsPage = lazy(() => import('./business-apps/page'))
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'))
const CareersPage = lazy(() => import('./careers/page'))
const CloudServicesPage = lazy(() => import('./cloud-services/page'))
const CompliancePage = lazy(() => import('./compliance/page'))
const ConsultationPage = lazy(() => import('./consultation/page'))
const CookiesPage = lazy(() => import('./cookies/page'))
const CybersecurityPage = lazy(() => import('./cybersecurity/page'))
const DatabasePage = lazy(() => import('./database/page'))
const DemoPage = lazy(() => import('./demo/page'))
const DeveloperToolsPage = lazy(() => import('./developer-tools/page'))
const DevOpsPage = lazy(() => import('./devops/page'))
const DocsPage = lazy(() => import('./docs/page'))
const EnterprisePage = lazy(() => import('./enterprise/page'))
const ExpenseTrackerPage = lazy(() => import('./expense-tracker/page'))
const GDPRPage = lazy(() => import('./gdpr/page'))
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'))
const IoTEdgePage = lazy(() => import('./iot-edge/page'))
const ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'))
const ITServicesPage = lazy(() => import('./it-services/page'))
const MarketingToolsPage = lazy(() => import('./marketing-tools/page'))
const MicroSAASPage = lazy(() => import('./micro-saas/page'))
const NetworkingPage = lazy(() => import('./networking/page'))
const NewsPage = lazy(() => import('./news/page'))
const OfflinePage = lazy(() => import('./offline/page'))
const PricingPage = lazy(() => import('./pricing/page'))
const PrivacyPage = lazy(() => import('./privacy/page'))
const ProductivityPage = lazy(() => import('./productivity/page'))
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'))
const RoboticsPage = lazy(() => import('./robotics/page'))
const SecurityPage = lazy(() => import('./security/page'))
const ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'))
const SitemapPage = lazy(() => import('./sitemap/page'))
const SmartAnalyticsPage = lazy(() => import('./smart-analytics/page'))
const StatusPage = lazy(() => import('./status/page'))
const SupportPage = lazy(() => import('./support/page'))
const SystemStatusPage = lazy(() => import('./system-status/page'))
const TaskManagerProPage = lazy(() => import('./task-manager-pro/page'))
const TeamPage = lazy(() => import('./team/page'))
const TermsPage = lazy(() => import('./terms/page'))
// Blog Pages
const BlogAgentReleaseRunbooksV22026Page = lazy(() => import('./blog/agent-release-runbooks-v2-2026/page'))
const BlogAI20252026MegaTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-2026-mega-trends-breakthrough/page'))
const BlogAI2025JanuaryAdvancedAIRevolutionPage = lazy(() => import('./blog/ai-2025-january-advanced-ai-revolution/page'))
const BlogAI2025JanuaryCuttingEdgeTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-january-cutting-edge-trends-breakthrough/page'))
const BlogAI2025MarchAutonomousEnterpriseOperationsRevolutionPage = lazy(() => import('./blog/ai-2025-march-autonomous-enterprise-operations-revolution/page'))
const BlogAI2025Sept30OperationalTrustScorecardsV3Page = lazy(() => import('./blog/ai-2025-sept-30-operational-trust-scorecards-v3/page'))
const BlogAI2026AdaptiveNeuralArchitecturesBreakthroughPage = lazy(() => import('./blog/ai-2026-adaptive-neural-architectures-breakthrough/page'))
const BlogAI2026AdvancedNeuralOptimizationRevolutionPage = lazy(() => import('./blog/ai-2026-advanced-neural-optimization-revolution/page'))
const BlogAI2026AprilRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-april-revolutionary-breakthrough/page'))
const BlogAI2026AprilUltimateBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-april-ultimate-breakthrough-revolution/page'))
const BlogAI2026AutonomousAgentFactoriesPage = lazy(() => import('./blog/ai-2026-autonomous-agent-factories/page'))
const BlogAI2026AutonomousBusinessIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-breakthrough/page'))
const BlogAI2026AutonomousBusinessIntelligenceMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page'))
const BlogAI2026AutonomousEnterpriseArchitecturePage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-architecture/page'))
const BlogAI2026AutonomousEnterpriseAutomationMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page'))
const BlogAI2026ConsensusIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-consensus-intelligence-breakthrough/page'))
const BlogAI2026EnterpriseAutomationRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page'))
const BlogAI2026EnterpriseBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-breakthrough/page'))
const BlogAI2026FebruaryMegaBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-february-mega-breakthrough-revolution/page'))
const BlogAI2026FebruaryUltimateConsciousnessBreakthroughPage = lazy(() => import('./blog/ai-2026-february-ultimate-consciousness-breakthrough/page'))
const BlogAI2026HyperconsciousComputingRevolutionPage = lazy(() => import('./blog/ai-2026-hyperconscious-computing-revolution/page'))
const BlogAIAutonomousBusinessSystems2026Page = lazy(() => import('./blog/ai-autonomous-business-systems-2026/page'))
const BlogAICostOptimizationBreakthrough2026Page = lazy(() => import('./blog/ai-cost-optimization-breakthrough-2026/page'))
const BlogAIEnterpriseTransformation2025Page = lazy(() => import('./blog/ai-enterprise-transformation-2025/page'))
const BlogAIEnterpriseTransformationUltimateGuide2025Page = lazy(() => import('./blog/ai-enterprise-transformation-ultimate-guide-2025/page'))
const BlogAIInnovationLabsProductDevelopment2025Page = lazy(() => import('./blog/ai-innovation-labs-product-development-2025/page'))
const BlogAIPoweredAutonomousBusinessProcesses2026Page = lazy(() => import('./blog/ai-powered-autonomous-business-processes-2026/page'))
const BlogAITrends2026FutureEnterpriseTransformationPage = lazy(() => import('./blog/ai-trends-2026-future-enterprise-transformation/page'))
// Main loading component
const MainLoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <LoadingSpinner size="xl" text="Loading Zion Tech Group..." />
  </div>
)
const App: React.FC = () => {
  // Initialize performance monitoring
  React.useEffect(() => {
    performanceMonitor.reportMetrics()
  }, [])
  return (
    <ErrorBoundary>
      <Router>
        <Suspense>}</Suspense>
          <Routes>
            {/* Main Pages */}
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            {/* AI Services Pages */}
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            {/* Additional AI Services Pages */}
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            {/* IT Services Pages */}
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            {/* Blog Pages */}
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            <Route>} /</Route>
            {/* 404 Page */}
            <Route>} /</Route>
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}
export default App