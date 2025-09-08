import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Sidebar } from './components/Sidebar';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import FloatingActionButton from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import InteractiveUserExperience from './components/InteractiveUserExperience';
import SecurityEnhancer from './components/SecurityEnhancer';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/about'));
const Contact = React.lazy(() => import('./pages/contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Support = React.lazy(() => import('./pages/Support'));
const Training = React.lazy(() => import('./pages/Training'));
const KnowledgeBase = React.lazy(() => import('./pages/KnowledgeBase'));
const Events = React.lazy(() => import('./pages/Events'));
const VideoTutorials = React.lazy(() => import('./pages/VideoTutorials'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const ServicesCatalog = React.lazy(() => import('./pages/ServicesCatalog'));
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const Resources = React.lazy(() => import('./pages/Resources'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const InnovativeServicesShowcase2030 = React.lazy(() => import('./pages/InnovativeServicesShowcase2030'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const GetStarted = createLazyComponent(() => import('./pages/GetStarted'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Signup = createLazyComponent(() => import('./pages/Signup'));
const Services = createLazyComponent(() => import('./pages/Services'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));
const Leadership = createLazyComponent(() => import('./pages/Leadership'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const News = createLazyComponent(() => import('./pages/News'));
const Events = createLazyComponent(() => import('./pages/Events'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Help = createLazyComponent(() => import('./pages/Help'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Docs = createLazyComponent(() => import('./pages/Documentation'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Training = createLazyComponent(() => import('./pages/Training'));
const ResearchDevelopment = createLazyComponent(() => import('./pages/ResearchDevelopment'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));

// New AI Services 2025 - Combined from both versions
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/ai-autonomous-research-assistant'));
const AIFinancialTradingPlatform = createLazyComponent(() => import('./pages/services/ai-financial-trading-platform'));
const BlockchainEnterpriseSolutions = createLazyComponent(() => import('./pages/services/blockchain-enterprise-solutions'));

// New Innovative Micro SAAS Services 2025
const AIBusinessIntelligenceDashboard = createLazyComponent(() => import('./pages/services/ai-business-intelligence-dashboard'));
const AICustomerSupportAutomation = createLazyComponent(() => import('./pages/services/ai-customer-support-automation'));
const AIProjectManagementPlatform = createLazyComponent(() => import('./pages/services/ai-project-management-platform'));
const AIMarketingAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-marketing-automation-platform'));
const AIWorkflowOrchestrator = createLazyComponent(() => import('./pages/services/ai-workflow-orchestrator'));
const AIPredictiveMaintenance = createLazyComponent(() => import('./pages/services/ai-predictive-maintenance'));
const AIHRPlatform = createLazyComponent(() => import('./pages/services/ai-hr-platform'));
const AIFinancialTradingRiskManagement = createLazyComponent(() => import('./pages/services/ai-financial-trading-risk-management'));

// Enhanced Innovative Micro SAAS Services 2025
const AICustomerSuccessAutomation = createLazyComponent(() => import('./pages/services/ai-customer-success-automation'));
const AISupplyChainOptimizationEnhanced = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization-enhanced'));
const AIFinancialRiskManagementEnhanced = createLazyComponent(() => import('./pages/services/ai-financial-risk-management-enhanced'));

// New Innovative Services 2025 - Additional
const AIEnterpriseIntelligencePlatform = createLazyComponent(() => import('./pages/services/ai-enterprise-intelligence-platform'));
const AIQuantumNeuralNetworkPlatform = createLazyComponent(() => import('./pages/services/ai-quantum-neural-network-platform'));
const AISalesCopilot = createLazyComponent(() => import('./pages/services/ai-sales-copilot'));
const AIComplianceAssistant = createLazyComponent(() => import('./pages/services/ai-compliance-assistant'));
const CloudFinOpsOptimizer = createLazyComponent(() => import('./pages/services/cloud-finops-optimizer'));

// New Innovative Services 2026
const AIAutonomousLogisticsPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-logistics-platform'));
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/ai-powered-seo'));
const QuantumEdgeComputingSolutions = createLazyComponent(() => import('./pages/services/quantum-edge-computing-solutions'));
const AISpaceTechnologyPlatform = createLazyComponent(() => import('./pages/services/ai-space-technology-platform'));
// New Innovative Micro SAAS Services 2026
const AILegalDocumentAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-legal-document-automation-platform'));
const AIHealthcareAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIFinancialRiskManagementPlatform = createLazyComponent(() => import('./pages/services/ai-financial-risk-management-platform'));
const AISupplyChainOptimizationPlatform = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization-platform'));



// Innovative Services Showcase 2026
const InnovativeServicesShowcase2026 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2026'));

// Comprehensive Services Showcase 2031
const ComprehensiveServicesShowcase2031 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2031'));

// Innovative Services Showcase 2032
const InnovativeServicesShowcase2032 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2032'));

// Innovative Services Showcase 2033
const InnovativeServicesShowcase2033 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2033'));

// Comprehensive Pricing Guide 2032
const ComprehensivePricingGuide2032 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2032'));

// New Innovative Services 2025 - Combined from both versions
const AIEnterpriseAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-enterprise-automation-platform'));
const AIDataAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-data-analytics-platform'));
const ITInfrastructureManagement = createLazyComponent(() => import('./pages/services/it-infrastructure-management'));
const MicroSaaSSolutionsComprehensive = createLazyComponent(() => import('./pages/services/micro-saas-solutions-comprehensive'));

// New Innovative AI Services 2025 - From remote version
const AIAutonomousBusinessOperationsPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-Business-Operations-Platform'));
const AICustomerExperienceAnalyticsPlatform = createLazyComponent(() => import('./pages/services/AI-Customer-Experience-Analytics-Platform'));

// Additional services
const QuantumAICybersecurityPlatform = createLazyComponent(() => import('./pages/services/quantum-ai-cybersecurity-platform'));
const AIHRManagementPlatform = createLazyComponent(() => import('./pages/services/ai-hr-management-platform'));

// Solution pages
const HealthcareSolutions = createLazyComponent(() => import('./pages/solutions/Healthcare'));
const FinancialSolutions = createLazyComponent(() => import('./pages/solutions/FinancialSolutions'));
const ManufacturingSolutions = createLazyComponent(() => import('./pages/solutions/ManufacturingSolutions'));
const GovernmentSolutions = createLazyComponent(() => import('./pages/solutions/GovernmentSolutions'));
const RetailSolutions = createLazyComponent(() => import('./pages/solutions/RetailSolutions'));
const QuantumEdgeComputing = createLazyComponent(() => import('./pages/solutions/QuantumEdgeComputing'));
const AIAutonomousBusiness = createLazyComponent(() => import('./pages/solutions/AIAutonomousBusiness'));
const BlockchainWeb3 = createLazyComponent(() => import('./pages/solutions/BlockchainWeb3'));
const IoTEdgeComputing = createLazyComponent(() => import('./pages/solutions/IoTEdgeComputing'));
const SpaceTech = createLazyComponent(() => import('./pages/solutions/SpaceTech'));

// Showcase pages
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
const InnovativeAIServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeAIServicesShowcase2025'));
const InnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2025'));

// Legal and Policy Pages
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const Security = createLazyComponent(() => import('./pages/Security'));
const Compliance = createLazyComponent(() => import('./pages/Compliance'));

// Additional pages from main branch
const Enterprise = createLazyComponent(() => import('./pages/Enterprise'));
const IndustrySolutions = createLazyComponent(() => import('./pages/IndustrySolutions'));
const CloudSolutions = createLazyComponent(() => import('./pages/CloudSolutions'));
const EmergingTech = createLazyComponent(() => import('./pages/EmergingTech'));

// Additional pages
const Research = createLazyComponent(() => import('./pages/Research'));

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
 );

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
            {/* Header */}
            <Header />
            
            {/* Skip Link for Accessibility */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            
            <main id="main-content" className="flex-1 pt-20">
              <Suspense fallback={<EnhancedLoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route
                      path="/"
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ModernLayout showSidebar={false}>
                            <Home />
                          </ModernLayout>
                        </motion.div>
                      }
                    />
                    
                    {/* Additional Core Routes */}
                    <Route path="/get-started" element={<ModernLayout><GetStarted /></ModernLayout>} />
                    <Route path="/request-quote" element={<ModernLayout><RequestQuote /></ModernLayout>} />
                    <Route path="/signup" element={<ModernLayout><Signup /></ModernLayout>} />
                    {/* Main Pages with Sidebar */}
                    <Route path="/about" element={<ModernLayout><About /></ModernLayout>} />
                    <Route path="/contact" element={<ModernLayout><Contact /></ModernLayout>} />
                    <Route path="/services" element={<ModernLayout><Services /></ModernLayout>} />
                    <Route path="/ai-services" element={<ModernLayout><AIServices /></ModernLayout>} />
                    <Route path="/ai-solutions" element={<ModernLayout><AISolutions /></ModernLayout>} />
                    <Route path="/it-services" element={<ModernLayout><ITServices /></ModernLayout>} />
                    <Route path="/micro-saas" element={<ModernLayout><MicroSaaS /></ModernLayout>} />
                    <Route path="/solutions" element={<ModernLayout><Solutions /></ModernLayout>} />
                    <Route path="/leadership" element={<ModernLayout><Leadership /></ModernLayout>} />
                    <Route path="/news" element={<ModernLayout><News /></ModernLayout>} />
                    <Route path="/partners" element={<ModernLayout><Partners /></ModernLayout>} />
                    <Route path="/help" element={<ModernLayout><Help /></ModernLayout>} />
                    <Route path="/pricing" element={<ModernLayout><Pricing /></ModernLayout>} />
                    <Route path="/blog" element={<ModernLayout><Blog /></ModernLayout>} />
                    <Route path="/docs" element={<ModernLayout><Docs /></ModernLayout>} />
                    <Route path="/white-papers" element={<ModernLayout><WhitePapers /></ModernLayout>} />
                    <Route path="/webinars" element={<ModernLayout><Webinars /></ModernLayout>} />
                    <Route path="/training" element={<ModernLayout><Training /></ModernLayout>} />
                    <Route path="/research-development" element={<ModernLayout><ResearchDevelopment /></ModernLayout>} />
                    <Route path="/careers" element={<ModernLayout><Careers /></ModernLayout>} />
                    <Route path="/events" element={<ModernLayout><Events /></ModernLayout>} />
                    <Route path="/case-studies" element={<ModernLayout><CaseStudies /></ModernLayout>} />

          {/* Performance Optimizer */}
          <PerformanceOptimizer enabled={true} />

          {/* Enhanced Accessibility */}
          <EnhancedAccessibilityEnhancer enabled={true} />

          {/* Mobile Experience Enhancer - Temporarily disabled for build troubleshooting */}
          {/* <MobileExperienceEnhancer enabled={true} /> */}

          {/* Advanced Analytics */}
          <AdvancedAnalytics enabled={true} showMetrics={true} />

          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          {/* Header */}
          <EnhancedHeader onMenuClick={() => setSidebarOpen(true)} />

          {/* Main Content */}
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<EnhancedContact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/knowledge-base" element={<KnowledgeBase />} />
                <Route path="/events" element={<Events />} />
                <Route path="/video-tutorials" element={<VideoTutorials />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/comprehensive-2030" element={<ComprehensiveServicesLanding2030 />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/services/overview" element={<InnovativeServicesOverview />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/innovative-micro-saas-services-2025" element={<InnovativeMicroSAASServices2025 />} />
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />
                <Route path="/services/innovative-2025" element={<InnovativeServices2025 />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/community" element={<Community />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/legal" element={<Legal />} />
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                
                {/* New innovative service routes */}
                <Route path="/services/ai-legal-document-analysis" element={<AILegalDocumentAnalysis />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                <Route path="/services/ai-fraud-detection-platform" element={<AIFraudDetectionPlatform />} />
                <Route path="/services/ai-healthcare-diagnosis" element={<AIHealthcareDiagnosis />} />
                <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />

                {/* Site Map */}
                <Route path="/sitemap" element={<Sitemap />} />

                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>

            {/* Enhanced Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />

            {/* Enhanced Accessibility Enhancer */}
            <EnhancedAccessibilityEnhancer enabled={true} />

          {/* Performance Monitor */}
          <PerformanceMonitor enabled={true} showMetrics={true} />

          {/* Chat Assistant - Temporarily disabled for build troubleshooting */}
          {/* <ChatAssistant /> */}
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;