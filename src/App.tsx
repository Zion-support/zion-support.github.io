'use client';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import PromotionalBanner from './components/PromotionalBanner';
import NewContentPromotionalBanner from './components/NewContentPromotionalBanner';
// Removed direct import to avoid name collision with lazy import below
import { ServicesHighlight } from './components/ServicesHighlight';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));

// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const DevOpsPage = lazy(() => import('./devops/page'));

// Specialized Solutions
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));

// Company Pages
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const NewsPage = lazy(() => import('./news/page'));

// Support Pages
const SupportPage = lazy(() => import('./support/page'));
const DocumentationPage = lazy(() => import('./documentation/page'));
const FAQPage = lazy(() => import('./faq/page'));

// Additional Pages
const PricingPage = lazy(() => import('./pricing/page'));
const DemoPage = lazy(() => import('./demo/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));

// Legal Pages
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize app
    const initApp = async () => {
      try {
        // Add any initialization logic here
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize app:', error);
        setIsInitialized(true); // Still show the app even if initialization fails
      }
    };

    initApp();
  }, []);

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              
              {/* Company Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Main Services */}
              <Route path="/services" element={<ItServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              
              {/* AI Services */}
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/ai-marketing" element={<AiMarketingPage />} />
              <Route path="/ai-automation" element={<AiAutomationPage />} />
              <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
              <Route path="/ai-fintech" element={<AiFintechPage />} />
              
              {/* IT Services */}
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/data-analytics" element={<DataAnalyticsPage />} />
              <Route path="/devops" element={<DevOpsPage />} />
              
              {/* Specialized Solutions */}
              <Route path="/quantum-computing" element={<QuantumComputingPage />} />
              <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
              <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
              <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
              <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
              <Route path="/robotics" element={<RoboticsPage />} />
              
              {/* Support Pages */}
              <Route path="/support" element={<SupportPage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/faq" element={<FAQPage />} />
              
              {/* Content Pages */}
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

// 404 Page Component
const NotFoundPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="cyber-button inline-flex items-center px-6 py-3 text-lg font-semibold"
      >
        Go Home
      </a>
    </div>
  </div>
);

export default App;
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
)
const App: React.FC = () => {
  // Initialize performance monitoring
  React.useEffect(() => {
    performanceMonitor.reportMetrics()
  }, [])
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
  )
}
export default App</div>
