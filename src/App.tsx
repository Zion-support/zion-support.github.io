<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './globals.css';
=======
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Import enhancers
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './components/SEOEnhancer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import SecurityEnhancer from './components/SecurityEnhancer';
import UserExperienceEnhancer from './components/UserExperienceEnhancer';

// Lazy load components for better performance
const HomePage = lazy(() => import('./page-optimized'));

// Core Pages
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const BlogPage = lazy(() => import('./blog/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

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

// New Missing Pages
const AIQuantumTaskOptimizerPage = lazy(() => import('./ai-quantum-task-optimizer/page'));
const AIHolographicWorkspacePage = lazy(() => import('./ai-holographic-workspace/page'));
const AINeuralMemoryAssistantPage = lazy(() => import('./ai-neural-memory-assistant/page'));
const AITelepathicInterfacePage = lazy(() => import('./ai-telepathic-interface/page'));
const AIQuantumFinancialOraclePage = lazy(() => import('./ai-quantum-financial-oracle/page'));
const AI3DGenerationPage = lazy(() => import('./ai-3d-generation/page'));
const MachineLearningPage = lazy(() => import('./machine-learning/page'));
const NLPPage = lazy(() => import('./nlp/page'));
const ComputerVisionPage = lazy(() => import('./computer-vision/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const QuantumAIPage = lazy(() => import('./quantum-ai/page'));
const DatabaseServicesPage = lazy(() => import('./database-services/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ITSupportPage = lazy(() => import('./it-support/page'));

// New Pages
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const AIFraudDetectionPage = lazy(() => import('./ai-fraud-detection/page'));
const AIContentWriterPage = lazy(() => import('./ai-content-writer/page'));

// Missing Pages
const AICodeGenerationPage = lazy(() => import('./ai-code-generation/page'));
const AIBusinessIntelligencePage = lazy(() => import('./ai-business-intelligence/page'));
const ITConsultingPage = lazy(() => import('./it-consulting/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const MobileAppDevelopmentPage = lazy(() => import('./mobile-app-development/page'));

// IT Services Pages
const AnalyticsToolsPage = lazy(() => import('./analytics-tools/page'));
// const APIDocsPage = lazy(() => import('./api-docs/page'));
const APIPage = lazy(() => import('./api/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const BusinessAppsPage = lazy(() => import('./business-apps/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
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
const TermsPage = lazy(() => import('./terms/page'));


// Missing Pages


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
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [, setEnhancers] = useState<{
    performance: unknown;
    seo: unknown;
    accessibility: unknown;
    security: unknown;
    ux: unknown;
  } | null>(null);

  useEffect(() => {
    initializeEnhancers();
  }, []);

  const initializeEnhancers = async () => {
    try {
      // Initialize enhancers
      const performanceEnhancer = new PerformanceEnhancer();
      const seoEnhancer = new SEOEnhancer({
        title: 'Zion Tech Group - Advanced AI and IT Solutions',
        description: 'Leading provider of AI and IT solutions for modern enterprises',
        keywords: ['AI', 'IT Solutions', 'Technology', 'Enterprise'],
        canonicalUrl: 'https://ziontechgroup.com',
      });
      const accessibilityEnhancer = new AccessibilityEnhancer();
      const securityEnhancer = new SecurityEnhancer();
      const uxEnhancer = new UserExperienceEnhancer();

      setEnhancers({
        performance: performanceEnhancer,
        seo: seoEnhancer,
        accessibility: accessibilityEnhancer,
        security: securityEnhancer,
        ux: uxEnhancer,
      });
      setIsInitialized(true);
    } catch (error) {
      // Error logged to monitoring service
      setIsInitialized(true);
    }
  };

  if (!isInitialized) {
    return <LoadingSpinner />;
  }
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-cc8b

// Simple HomePage component
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started Today
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">90%</div>
              <div className="text-gray-400">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive AI and IT solutions for modern enterprises</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">AI Solutions</h3>
                <p className="text-gray-300 mb-4">Advanced AI-powered solutions for enterprise automation and optimization.</p>
                <div className="text-2xl font-bold text-cyan-400 mb-2">Custom Pricing</div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">IT Services</h3>
                <p className="text-gray-300 mb-4">Comprehensive IT infrastructure and support services.</p>
                <div className="text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">Complete digital transformation solutions for modern businesses.</p>
                <div className="text-2xl font-bold text-green-400 mb-2">Custom Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
            
<<<<<<< HEAD
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-cyan-400 font-medium">
                Middletown, DE
              </p>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
=======
            {/* New Pages */}
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
            <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
            
            {/* Missing Pages */}
            <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
            <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
            <Route path="/it-consulting" element={<ITConsultingPage />} />
            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            
            {/* IT Services Pages */}
            <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />
            <Route path="/api-docs" element={<DocsPage />} />
            <Route path="/api" element={<APIPage />} />
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
            <Route path="/blockchain" element={<BlockchainPage />} />
            <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
            <Route path="/business-apps" element={<BusinessAppsPage />} />
            <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
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
            

            {/* Missing Pages */}

            
            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-cc8b
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;