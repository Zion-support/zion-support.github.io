import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Sidebar } from './components/Sidebar';
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

// Service pages that exist
const AIEnterpriseOrchestrator = React.lazy(() => import('./pages/services/ai-enterprise-orchestrator'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/ai-business-intelligence'));
const AICybersecuritySuite = React.lazy(() => import('./pages/services/ai-cybersecurity-suite'));
const DigitalTwin = React.lazy(() => import('./pages/services/digital-twin'));
const IoTEdge = React.lazy(() => import('./pages/services/iot-edge'));
const BlockchainEnterpriseSolutions = React.lazy(() => import('./pages/services/blockchain-enterprise-solutions'));
const HealthcareTech = React.lazy(() => import('./pages/services/healthcare-tech'));
const Sustainability = React.lazy(() => import('./pages/services/sustainability'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/micro-saas-solutions'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/ai-auto-email-responder'));
const LLMContentStudio = React.lazy(() => import('./pages/services/llm-content-studio'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/finops-advisor'));
const AILeadScoring = React.lazy(() => import('./pages/services/ai-lead-scoring'));
const AIHealthcarePredictiveAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-predictive-analytics'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const DigitalTransformation = React.lazy(() => import('./pages/services/digital-transformation'));
const CloudDevOps = React.lazy(() => import('./pages/services/cloud-devops'));

// New AI Services 2025
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

// New Innovative Services 2026 - Additional
const AICarbonFootprintManagementPlatform = createLazyComponent(() => import('./pages/services/ai-carbon-footprint-management-platform'));
const AIMentalHealthSupportPlatform = createLazyComponent(() => import('./pages/services/ai-mental-health-support-platform'));
const AISmartHomeEnergyManagementPlatform = createLazyComponent(() => import('./pages/services/ai-smart-home-energy-management-platform'));

// New Innovative Micro SAAS Services 2026 - Additional
const AIPoweredCustomerChurnPredictor = createLazyComponent(() => import('./pages/services/ai-powered-customer-churn-predictor'));

// New Innovative Services 2025 - Additional
const AIEnterpriseWorkflowAutomation = createLazyComponent(() => import('./pages/services/ai-enterprise-workflow-automation'));
const AIQuantumComputingSolutions = createLazyComponent(() => import('./pages/services/ai-quantum-computing-solutions'));
const AICybersecurityThreatIntelligence = createLazyComponent(() => import('./pages/services/ai-cybersecurity-threat-intelligence'));

// New AI Services 2026
const AIEnterpriseResourcePlanning = createLazyComponent(() => import('./pages/services/ai-enterprise-resource-planning'));
const AIAutonomousManufacturingPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-manufacturing-platform'));

// Innovative Services Showcase 2026
const InnovativeServicesShowcase2026 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2026'));

// Innovative Services Showcase 2032
const InnovativeServicesShowcase2032 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2032'));

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
const CloudDevOps = createLazyComponent(() => import('./pages/services/cloud-devops'));
const Cybersecurity = createLazyComponent(() => import('./pages/services/cybersecurity'));
const DigitalTransformation = createLazyComponent(() => import('./pages/services/digital-transformation'));
const ITInfrastructure = createLazyComponent(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = createLazyComponent(() => import('./pages/services/ai-business-intelligence'));
const AIHealthcareAnalytics = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));

// Solution pages
const HealthcareSolutions = createLazyComponent(() => import('./pages/solutions/Healthcare'));
const FinancialSolutions = createLazyComponent(() => import('./pages/financial-solutions'));
const ManufacturingSolutions = createLazyComponent(() => import('./pages/manufacturing-solutions'));
const GovernmentSolutions = createLazyComponent(() => import('./pages/solutions/GovernmentSolutions'));
const RetailSolutions = createLazyComponent(() => import('./pages/solutions/RetailSolutions'));
const QuantumEdgeComputing = createLazyComponent(() => import('./pages/solutions/QuantumEdgeComputing'));
const AIAutonomousBusiness = createLazyComponent(() => import('./pages/solutions/AIAutonomousBusiness'));
const BlockchainWeb3 = createLazyComponent(() => import('./pages/solutions/BlockchainWeb3'));
const IoTEdgeComputing = createLazyComponent(() => import('./pages/solutions/IoTEdgeComputing'));
const SpaceTech = createLazyComponent(() => import('./pages/solutions/SpaceTech'));

// New Innovative Services 2025
const AIAutonomousBusinessIntelligence = createLazyComponent(() => import('./pages/services/ai-autonomous-business-intelligence-platform'));

// Showcase pages
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));

// New pages we created
const Enterprise = createLazyComponent(() => import('./pages/Enterprise'));
const IndustrySolutions = createLazyComponent(() => import('./pages/IndustrySolutions'));
const DigitalTransformation = createLazyComponent(() => import('./pages/DigitalTransformation'));
const CloudSolutions = createLazyComponent(() => import('./pages/CloudSolutions'));
const EmergingTech = createLazyComponent(() => import('./pages/EmergingTech'));
const SpaceTech = createLazyComponent(() => import('./pages/SpaceTech'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const News = createLazyComponent(() => import('./pages/News'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
      <p className="text-gray-400 mb-6">We're sorry, but something unexpected happened. Please try again.</p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Go home
        </button>
      </div>
    </div>
  </div>
));

EnhancedLoadingSpinner.displayName = 'EnhancedLoadingSpinner';

// Enhanced error boundary component
const EnhancedErrorBoundary = React.memo(({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary
    fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-slate-900 to-red-900">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-slate-300 mb-6">We're working to fix this issue. Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    }
  >
    {children}
  </ErrorBoundary>
));

EnhancedErrorBoundary.displayName = 'EnhancedErrorBoundary';

// Main App component with performance optimizations
const App = React.memo(() => {
  // Memoize the routes to prevent unnecessary re-renders
  const routes = useMemo(() => [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/services', element: <Services /> },
    { path: '/solutions', element: <Solutions /> },
    { path: '/case-studies', element: <CaseStudies /> },
    { path: '/white-papers', element: <WhitePapers /> },
    { path: '/webinars', element: <Webinars /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/privacy', element: <Privacy /> },
    { path: '/terms', element: <Terms /> },
    { path: '/team', element: <Team /> },
    { path: '/signup', element: <Signup /> },
    { path: '/status', element: <Status /> },
    { path: '/events', element: <Events /> },
    { path: '/news', element: <News /> },
    { path: '/help', element: <Help /> },
    { path: '/support', element: <Support /> },
    { path: '/training', element: <Training /> },
    { path: '/search', element: <SearchPage /> },
    { path: '/services-catalog', element: <ServicesCatalog /> },
    { path: '/services-overview', element: <ServicesOverview /> },
    { path: '/resources', element: <Resources /> },
    { path: '/services-comparison', element: <ServicesComparisonPage /> },
    { path: '/revolutionary-services-2030', element: <RevolutionaryServices2030 /> },
    { path: '/revolutionary-services-showcase-2030', element: <RevolutionaryServicesShowcase2030 /> },
    { path: '/comprehensive-services-showcase-2026', element: <ComprehensiveServicesShowcase2026 /> },
    { path: '/comprehensive-pricing-guide-2027', element: <ComprehensivePricingGuide2027 /> },
    { path: '/innovative-services-showcase-2025', element: <InnovativeServicesShowcase2025 /> },
    { path: '/innovative-services-showcase-2030', element: <InnovativeServicesShowcase2030 /> },
    { path: '/comprehensive-pricing-guide-2030', element: <ComprehensivePricingGuide2030 /> },
    { path: '/schedule-demo', element: <ScheduleDemo /> },
    { path: '/request-quote', element: <RequestQuote /> },
    { path: '/services/cloud-devops', element: <CloudDevOps /> },
    { path: '/services/digital-transformation', element: <DigitalTransformation /> },
    { path: '/services/ai-supply-chain-optimization', element: <AISupplyChainOptimization /> },
    { path: '/services/ai-enterprise-orchestrator', element: <AIEnterpriseOrchestrator /> },
    { path: '/services/ai-business-intelligence', element: <AIBusinessIntelligence /> },
    { path: '/services/ai-cybersecurity-suite', element: <AICybersecuritySuite /> },
    { path: '/services/digital-twin', element: <DigitalTwin /> },
    { path: '/services/iot-edge', element: <IoTEdge /> },
    { path: '/services/blockchain-enterprise-solutions', element: <BlockchainEnterpriseSolutions /> },
    { path: '/services/healthcare-tech', element: <HealthcareTech /> },
    { path: '/services/sustainability', element: <Sustainability /> },
    { path: '/services/micro-saas-solutions', element: <MicroSAASSolutions /> },
    { path: '/services/ai-auto-email-responder', element: <AIAutoEmailResponder /> },
            { path: '/services/llm-content-studio', element: <LLMContentStudio /> },
        { path: '/services/finops-advisor', element: <FinOpsAdvisor /> },
            { path: '/services/ai-supply-chain-optimization', element: <AISupplyChainOptimization /> },
    { path: '/services/digital-transformation', element: <DigitalTransformation /> },
    { path: '/services/cloud-devops', element: <CloudDevOps /> },
    { path: '/services/ai-lead-scoring', element: <AILeadScoring /> },
    { path: '/services/ai-healthcare-predictive-analytics', element: <AIHealthcarePredictiveAnalytics /> },
  ], []);

  // Memoize the route elements to prevent unnecessary re-renders
  const routeElements = useMemo(() => 
    routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    )), [routes]
  );

  // Memoize the header and footer to prevent unnecessary re-renders
  const header = useMemo(() => <AppHeader />, []);
  const footer = useMemo(() => <Footer />, []);

  // Memoize the chat assistant to prevent unnecessary re-renders
  const chatAssistant = useMemo(() => <ChatAssistant />, []);

  // Memoize the performance components to prevent unnecessary re-renders
  const performanceComponents = useMemo(() => (
    <>
      {/* <PerformanceOptimizer /> */}
      {/* <AdvancedPerformanceMonitor /> */}
      {/* <InteractiveUserExperience /> */}
      {/* <SecurityEnhancer /> */}
      {/* <EnhancedAccessibilityPanel /> */}
    </>
  ), []);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Header */}
            <Header />
            
            {/* Skip Link for Accessibility */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            
            {/* Main Content */}
            <main id="main-content" className="flex-1 pt-32">
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
                          <Home />
                        </motion.div>
                      }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />

                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<ModernLayout><AISupplyChainOptimization /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-platform" element={<ModernLayout><AICybersecurity /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-platform" element={<ModernLayout><AIHealthcare /></ModernLayout>} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<ModernLayout><AIQuantumHybridPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-research-assistant" element={<ModernLayout><AIAutonomousResearchAssistant /></ModernLayout>} />
                    <Route path="/services/ai-financial-trading-platform" element={<ModernLayout><AIFinancialTradingPlatform /></ModernLayout>} />
                    <Route path="/services/blockchain-enterprise-solutions" element={<ModernLayout><BlockchainEnterpriseSolutions /></ModernLayout>} />

                    {/* New Innovative Services 2025 - Combined from both versions */}
                    <Route path="/services/ai-enterprise-automation-platform" element={<ModernLayout><AIEnterpriseAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-data-analytics-platform" element={<ModernLayout><AIDataAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/it-infrastructure-management" element={<ModernLayout><ITInfrastructureManagement /></ModernLayout>} />
                    <Route path="/services/micro-saas-solutions-comprehensive" element={<ModernLayout><MicroSaaSSolutionsComprehensive /></ModernLayout>} />

                    {/* New Innovative AI Services 2025 - Enhanced */}
                    <Route path="/services/ai-quantum-neural-network-platform" element={<ModernLayout><AIQuantumNeuralNetworkPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-business-operations-platform" element={<ModernLayout><AIAutonomousBusinessOperationsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<ModernLayout><AICustomerExperienceAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/quantum-edge-computing-solutions" element={<ModernLayout><QuantumEdgeComputingSolutions /></ModernLayout>} />

                    {/* Additional Innovative Services 2025 */}
                    <Route path="/services/ai-enterprise-intelligence-platform" element={<ModernLayout><AIEnterpriseIntelligencePlatform /></ModernLayout>} />
                    <Route path="/services/quantum-ai-cybersecurity-platform" element={<ModernLayout><QuantumAICybersecurityPlatform /></ModernLayout>} />
                    <Route path="/services/ai-hr-management-platform" element={<ModernLayout><AIHRManagementPlatform /></ModernLayout>} />

                    {/* Additional service routes from remote branch */}
                    <Route path="/services/ai-sales-copilot" element={<ModernLayout><AISalesCopilot /></ModernLayout>} />
                    <Route path="/services/cloud-finops-optimizer" element={<ModernLayout><CloudFinOpsOptimizer /></ModernLayout>} />
                    <Route path="/services/ai-compliance-assistant" element={<ModernLayout><AIComplianceAssistant /></ModernLayout>} />
                    <Route path="/services/ai-enterprise-resource-planning" element={<ModernLayout><AIEnterpriseResourcePlanning /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-manufacturing-platform" element={<ModernLayout><AIAutonomousManufacturingPlatform /></ModernLayout>} />
                    <Route path="/services/cloud-devops" element={<ModernLayout><CloudDevOps /></ModernLayout>} />
                    <Route path="/services/cybersecurity" element={<ModernLayout><Cybersecurity /></ModernLayout>} />
                    <Route path="/services/digital-transformation" element={<ModernLayout><DigitalTransformation /></ModernLayout>} />
                    <Route path="/services/it-infrastructure" element={<ModernLayout><ITInfrastructure /></ModernLayout>} />
                    <Route path="/services/ai-business-intelligence" element={<ModernLayout><AIBusinessIntelligence /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics" element={<ModernLayout><AIHealthcareAnalytics /></ModernLayout>} />

                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-legal-document-automation-platform" element={<ModernLayout><AILegalDocumentAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<ModernLayout><AIHealthcareAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-platform" element={<ModernLayout><AIFinancialRiskManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-platform" element={<ModernLayout><AISupplyChainOptimizationPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 - Additional */}
                    <Route path="/services/ai-carbon-footprint-management-platform" element={<ModernLayout><AICarbonFootprintManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-mental-health-support-platform" element={<ModernLayout><AIMentalHealthSupportPlatform /></ModernLayout>} />
                    <Route path="/services/ai-smart-home-energy-management-platform" element={<ModernLayout><AISmartHomeEnergyManagementPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 */}
                    <Route path="/services/ai-autonomous-logistics-platform" element={<ModernLayout><AIAutonomousLogisticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-powered-seo" element={<ModernLayout><AIPoweredSEO /></ModernLayout>} />
                    <Route path="/services/quantum-edge-computing-solutions" element={<ModernLayout><QuantumEdgeComputingSolutions /></ModernLayout>} />
                    <Route path="/services/ai-space-technology-platform" element={<ModernLayout><AISpaceTechnologyPlatform /></ModernLayout>} />

                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-powered-customer-churn-predictor" element={<ModernLayout><AIPoweredCustomerChurnPredictor /></ModernLayout>} />

                    {/* Solution Routes */}
                    <Route path="/solutions/healthcare" element={<ModernLayout><HealthcareSolutions /></ModernLayout>} />
                    <Route path="/solutions/financial" element={<ModernLayout><FinancialSolutions /></ModernLayout>} />
                    <Route path="/solutions/manufacturing" element={<ModernLayout><ManufacturingSolutions /></ModernLayout>} />
                    <Route path="/solutions/government" element={<ModernLayout><GovernmentSolutions /></ModernLayout>} />
                    <Route path="/solutions/retail" element={<ModernLayout><RetailSolutions /></ModernLayout>} />
                    <Route path="/solutions/quantum-edge-computing" element={<ModernLayout><QuantumEdgeComputing /></ModernLayout>} />
                    <Route path="/solutions/ai-autonomous-business" element={<ModernLayout><AIAutonomousBusiness /></ModernLayout>} />
                    <Route path="/solutions/blockchain-web3" element={<ModernLayout><BlockchainWeb3 /></ModernLayout>} />
                    <Route path="/solutions/iot-edge-computing" element={<ModernLayout><IoTEdgeComputing /></ModernLayout>} />
                    <Route path="/solutions/space-tech" element={<ModernLayout><SpaceTech /></ModernLayout>} />

                    {/* New Innovative Services 2025 */}
                    <Route path="/services/ai-autonomous-business-intelligence-platform" element={<ModernLayout><AIAutonomousBusinessIntelligence /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-threat-intelligence-platform" element={<ModernLayout><AICybersecurityThreatIntelligence /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<ModernLayout><AIHealthcareAnalytics /></ModernLayout>} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ModernLayout><ComprehensiveServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-ai-services-showcase-2025" element={<ModernLayout><InnovativeAIServicesShowcase2025 /></ModernLayout>} />

                    {/* Legal and Policy Pages */}
                    <Route path="/privacy" element={<ModernLayout><Privacy /></ModernLayout>} />
                    <Route path="/terms" element={<ModernLayout><Terms /></ModernLayout>} />
                    <Route path="/cookies" element={<ModernLayout><Cookies /></ModernLayout>} />
                    <Route path="/accessibility" element={<ModernLayout><Accessibility /></ModernLayout>} />
                    <Route path="/security" element={<ModernLayout><Security /></ModernLayout>} />
                    <Route path="/compliance" element={<ModernLayout><Compliance /></ModernLayout>} />
                    
                                        {/* Request Quote Page */}
                    <Route path="/request-quote" element={<ModernLayout><RequestQuote /></ModernLayout>} />
                    
                    {/* Careers Page */}
                    <Route path="/careers" element={<ModernLayout><Careers /></ModernLayout>} />
                    
                    {/* News Page */}
                    <Route path="/news" element={<ModernLayout><News /></ModernLayout>} />
                    <Route path="/research" element={<ModernLayout><Research /></ModernLayout>} />

                    {/* Pricing Route */}
                    <Route path="/pricing" element={<ModernLayout><Pricing /></ModernLayout>} />

                    {/* 404 Page */}
                    <Route
                      path="*"
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                        >
                          <div className="text-center text-white">
                            <h1 className="text-6xl font-bold mb-4">404</h1>
                            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                            <p className="text-gray-300 mb-8">
                              The page you're looking for doesn't exist or has been moved.
                            </p>
                            <button
                              onClick={() => window.history.back()}
                              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4"
                            >
                              Go Back
                            </button>
                            <button
                              onClick={() => window.location.href = '/'}
                              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            >
                              Go Home
                            </button>
                          </div>
                        </motion.div>
                      }
                    />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>

            {/* Footer */}
            <Footer />

            {/* Enhanced Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />

            {/* Enhanced Accessibility Enhancer */}
            <EnhancedAccessibilityEnhancer enabled={true} />

            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />

            {/* Smart Notification System */}
            <SmartNotificationSystem enabled={true} />

            {/* Advanced Analytics Dashboard */}
            <AdvancedAnalyticsDashboard enabled={true} />

            {/* AI Content Optimizer */}
            <AIContentOptimizer enabled={true} />

            {/* Security Monitoring System */}
            <SecurityMonitoringSystem enabled={true} />

            {/* User Experience Optimizer */}
            <UserExperienceOptimizer enabled={true} />

            {/* Floating Action Button */}
            <FloatingActionButton enabled={true} />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;