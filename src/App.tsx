<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy load components for better performance
=======
'use client';
import React, { useEffect, useState, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Lazy load components for better performance
const HomePage = lazy(() => import('../app/page'));
// Import enhancement utilities
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './utils/seoEnhancer';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import UserExperienceEnhancer from './utils/userExperienceEnhancer';
// Import components
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// Lazy load pages for better performance
>>>>>>> origin/resolve-merge-conflicts
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const BlogPage = lazy(() => import('./blog/page'));
<<<<<<< HEAD
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const NotFoundPage = lazy(() => import('./not-found'));
const APIDocumentation = lazy(() => import('../api-documentation'));

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

=======
// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
// Specialized Solutions
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
// Additional pages
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const NotFoundPage = lazy(() => import('./not-found'));
>>>>>>> origin/resolve-merge-conflicts
// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading...</p>
    </div>
  </div>
);
<<<<<<< HEAD

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-cyan-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
=======
// AI Services Pages
import AIServicesPage from './ai-services/page';
import AIMarketingPage from './ai-marketing/page';
import AIAutomationPage from './ai-automation/page';
import AIHealthcarePage from './ai-healthcare/page';
import AIFintechPage from './ai-fintech/page';
import AIContentGenerationPage from './ai-content-generation/page';
import AIDataAnalyticsPage from './ai-data-analytics/page';
import AICybersecurityPage from './ai-cybersecurity/page';
import AIWorkflowAutomationPage from './ai-workflow-automation/page';
import AIMobileAppDevelopmentPage from './ai-mobile-app-development/page';
import AIEcommerceSolutionsPage from './ai-ecommerce-solutions/page';
import AICustomerSupportPage from './ai-customer-support/page';
import AISalesAutomationPage from './ai-sales-automation/page';
import AIDataVisualizationPage from './ai-data-visualization/page';
import AILeadGenerationPage from './ai-lead-generation/page';
import AIDocumentProcessingPage from './ai-document-processing/page';
// IT Services Pages
import ITServicesPage from './it-services/page';
import ITInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import CloudMigrationPage from './cloud-migration/page';
import DevOpsPage from './devops/page';
import DatabasePage from './database/page';
import NetworkingPage from './networking/page';
// Micro SAAS Pages
import AICRMPage from './ai-crm/page';
import AIAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AIEmailMarketingPage from './ai-email-marketing/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';
// Specialized Solutions Pages
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
// Company Pages
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
// Support Pages
// Additional Pages
import PricingPage from './pricing/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';
// AI Services
import AIServicesPage from './ai-services/page';
import AIMarketingPage from './ai-marketing/page';
import AIAutomationPage from './ai-automation/page';
import AIHealthcarePage from './ai-healthcare/page';
import AIFintechPage from './ai-fintech/page';
import AIContentGenerationPage from './ai-content-generation/page';
import AIDataAnalyticsPage from './ai-data-analytics/page';
import AICybersecurityPage from './ai-cybersecurity/page';
import AIWorkflowAutomationPage from './ai-workflow-automation/page';
import AIMobileAppDevelopmentPage from './ai-mobile-app-development/page';
import AIEcommerceSolutionsPage from './ai-ecommerce-solutions/page';
import AICustomerSupportPage from './ai-customer-support/page';
import AISalesAutomationPage from './ai-sales-automation/page';
import AIDataVisualizationPage from './ai-data-visualization/page';
import AILeadGenerationPage from './ai-lead-generation/page';
import AIDocumentProcessingPage from './ai-document-processing/page';
// Micro SAAS Solutions
import AIProjectManagerPage from './ai-project-manager/page';
import AISocialMediaManagerPage from './ai-social-media-manager/page';
import AIAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AIEmailMarketingPage from './ai-email-marketing/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AICodeGenerationPage from './ai-code-generation/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';
import AICRMPage from './ai-crm/page';
// IT Services
import ITServicesPage from './it-services/page';
import ITInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import CloudMigrationPage from './cloud-migration/page';
import DevOpsPage from './devops/page';
import DatabasePage from './database/page';
import NetworkingPage from './networking/page';
// Specialized Solutions
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';
// Company Pages
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import PricingPage from './pricing/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';
// Support Pages
// AI Services Pages
import AIProjectManagerPage from './ai-project-manager/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AIAutomationPage from './ai-automation/page';
import AIMLPlatformPage from './ai-ml-platform/page';
const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    initializeEnhancers();
  }, []);
  const initializeEnhancers = async () => {
    try {
      // Initialize performance enhancer
      const performanceEnhancer = new PerformanceEnhancer({
        enableImageOptimization: true,
        enableLazyLoading: true,
        enableCodeSplitting: true,
        enablePrefetching: true,
        enableServiceWorker: true,
        enableResourceHints: true,
        enableCompression: true,
        enableCaching: true
      });
      // Initialize SEO enhancer
      const seoEnhancer = new SEOEnhancer({
        title: 'Zion Tech Group - Advanced AI and IT Solutions',
        description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
        keywords: ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services'],
        canonicalUrl: 'https://ziontechgroup.com',
        ogImage: 'https://ziontechgroup.com/og-image.jpg',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        },
        robots: 'index, follow',
        language: 'en',
        author: 'Zion Tech Group',
        publisher: 'Zion Tech Group'
      });
      // Initialize accessibility enhancer
      const accessibilityEnhancer = new AccessibilityEnhancer({
        enableKeyboardNavigation: true,
        enableScreenReader: true,
        enableHighContrast: true,
        enableFocusManagement: true,
        enableReducedMotion: true,
        enableColorBlindSupport: true,
        enableVoiceControl: true
      });
      // Initialize security enhancer
      const securityEnhancer = new SecurityEnhancer({
        enableCSP: true,
        enableHSTS: true,
        enableXSSProtection: true,
        enableClickjackingProtection: true,
        enableContentTypeOptions: true,
        enableReferrerPolicy: true,
        enablePermissionsPolicy: true,
        enableCORS: true,
        enableSecureCookies: true
      });
      // Initialize UX enhancer
      const uxEnhancer = new UserExperienceEnhancer({
        enableSmoothScrolling: true,
        enableLoadingStates: true,
        enableErrorBoundaries: true,
        enableAnalytics: true,
        enableNotifications: true,
        enableProgressiveWebApp: true,
        enableOfflineSupport: true,
        enablePushNotifications: false,
        enableDarkMode: true,
        enableAnimations: true
      });
      setEnhancers({
        performance: performanceEnhancer,
        seo: seoEnhancer,
        accessibility: accessibilityEnhancer,
        security: securityEnhancer,
        ux: uxEnhancer
      });
      // Optimize for Core Web Vitals
      seoEnhancer.optimizeForCoreWebVitals();
      // Generate reports (for development)
      if (process.env.NODE_ENV === 'development') {
        // Reports are available but not logged to console
        performanceEnhancer.getMetrics();
        accessibilityEnhancer.generateReport();
        securityEnhancer.generateSecurityReport();
        uxEnhancer.generateUXReport();
      }
      setIsInitialized(true);
    } catch (error) {
      // Silently handle enhancer initialization errors
      setIsInitialized(true); // Continue even if enhancers fail
    }
  };
  if (!isInitialized) {
    return <LoadingSpinner />;
  }
  return (
    <Router>
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
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        {/* AI Services */}
        <Route path="/ai-services" element={<AIServicesPage />} />
        <Route path="/ai-marketing" element={<AIMarketingPage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
        <Route path="/ai-fintech" element={<AIFintechPage />} />
        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
        <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
        <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
        <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
        <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
        <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
        <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
        <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
        {/* Micro SAAS Solutions */}
        <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
        <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
        <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
        <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
        <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
        <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
        <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
        <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} />
        <Route path="/ai-crm" element={<AICRMPage />} />
        {/* IT Services */}
        <Route path="/it-services" element={<ITServicesPage />} />
        <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/cloud-migration" element={<CloudMigrationPage />} />
        <Route path="/devops-cicd" element={<DevOpsPage />} />
        <Route path="/database-management" element={<DatabasePage />} />
        <Route path="/network-solutions" element={<NetworkingPage />} />
        {/* Specialized Solutions */}
        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
        <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
        <Route path="/robotics" element={<RoboticsPage />} />
        {/* Content Pages */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        {/* AI Services Routes */}
        <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
        <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/ai-ml-platform" element={<AIMLPlatformPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    <ErrorBoundary>
      <div className="App">
        <Navigation />
>>>>>>> origin/resolve-merge-conflicts
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
<<<<<<< HEAD
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
<<<<<<< HEAD
            <Route path="/api-docs" element={<APIDocsPage />} />
=======
            <Route path="/api-docs" element={<APIDocumentation />} />
>>>>>>> origin/temp-pr-28049
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
=======
            {/* AI Services */}
            <Route path="/ai-services" element={<AiServicesPage />} />
            <Route path="/ai-marketing" element={<AiMarketingPage />} />
            <Route path="/ai-automation" element={<AiAutomationPage />} />
            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
            <Route path="/ai-fintech" element={<AiFintechPage />} />
            {/* IT Services */}
            <Route path="/it-services" element={<ItServicesPage />} />
            <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            {/* Specialized Solutions */}
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/micro-saas" element={<MicroSaasPage />} />
            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            {/* Catch all route */}
>>>>>>> origin/resolve-merge-conflicts
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};
<<<<<<< HEAD

=======
// 404 Page Component
const NotFoundPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
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
>>>>>>> origin/resolve-merge-conflicts
export default App;