import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/EnhancedContact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Legal = React.lazy(() => import('./pages/Legal'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising.tsx'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030.tsx'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025.tsx'));

// New pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2027 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2027'));
const InnovativeServices2025 = React.lazy(() => import('./pages/NewInnovativeServices2025'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2030'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));
const InnovativeServicesOverview = React.lazy(() => import('./pages/InnovativeServicesOverview'));

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
const Support = createLazyComponent(() => import('./pages/Support'));

// New AI Services 2025 - Combined from both versions
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));
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
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/ai-powered-seo'));
const QuantumEdgeComputingSolutions = createLazyComponent(() => import('./pages/services/quantum-edge-computing-solutions'));

// New Enterprise Services 2025
const AIBusinessIntelligencePlatformEnterprise = createLazyComponent(() => import('./pages/services/ai-business-intelligence-platform-enterprise'));
const AICybersecurityThreatDetectionEnterprise = createLazyComponent(() => import('./pages/services/ai-cybersecurity-threat-detection-enterprise'));
const AIQuantumComputingSolutionsEnterprise = createLazyComponent(() => import('./pages/services/ai-quantum-computing-solutions-enterprise'));
const AIBlockchainWeb3SolutionsEnterprise = createLazyComponent(() => import('./pages/services/ai-blockchain-web3-solutions-enterprise'));

// Enterprise Services Showcase 2025
const EnterpriseServicesShowcase2025 = createLazyComponent(() => import('./pages/EnterpriseServicesShowcase2025'));
const AISpaceTechnologyPlatform = createLazyComponent(() => import('./pages/services/ai-space-technology-platform'));
// New Innovative Micro SAAS Services 2026
const AILegalDocumentAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-legal-document-automation-platform'));
const AIPoweredCustomerChurnPredictor = createLazyComponent(() => import('./pages/services/ai-powered-customer-churn-predictor'));

// New Innovative AI Services 2026
const AIAutonomousLogisticsPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-logistics-platform'));
const AIAutonomousManufacturingPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-manufacturing-platform'));
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/ai-autonomous-research-assistant'));

// New Innovative Services 2026 - Additional
const AIContentMarketingStudio = createLazyComponent(() => import('./pages/services/ai-content-marketing-studio'));
const AICustomerExperienceAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-customer-experience-analytics-platform'));
const AIDevOpsAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-devops-automation-platform'));
const AIEcommerceOptimizationPlatform = createLazyComponent(() => import('./pages/services/ai-ecommerce-optimization-platform'));
const AIHealthcareAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIFinancialRiskManagementPlatform = createLazyComponent(() => import('./pages/services/ai-financial-risk-management-platform'));
const AISupplyChainOptimizationPlatform = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization-platform'));

// New Innovative Services 2026 - Additional
const AIAutonomousLegalResearchPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-legal-research-platform'));

// New Innovative Services 2026 - Additional
const AICarbonFootprintManagementPlatform = createLazyComponent(() => import('./pages/services/ai-carbon-footprint-management-platform'));
const AIMentalHealthSupportPlatform = createLazyComponent(() => import('./pages/services/ai-mental-health-support-platform'));
const AISmartHomeEnergyManagementPlatform = createLazyComponent(() => import('./pages/services/ai-smart-home-energy-management-platform'));

// New Innovative Services 2025 - Additional
const AIEnterpriseWorkflowAutomation = createLazyComponent(() => import('./pages/services/ai-enterprise-workflow-automation'));
const AIQuantumComputingSolutions = createLazyComponent(() => import('./pages/services/ai-quantum-computing-solutions'));
const AICybersecurityThreatIntelligence = createLazyComponent(() => import('./pages/services/ai-cybersecurity-threat-intelligence'));

// New AI Services 2026
const AIEnterpriseResourcePlanning = createLazyComponent(() => import('./pages/services/ai-enterprise-resource-planning'));

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
const ComprehensivePricingGuide2025 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2025'));
const InnovativeServicesHub = createLazyComponent(() => import('./pages/InnovativeServicesHub'));

// Legal and Policy Pages
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const Security = createLazyComponent(() => import('./pages/Security'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));
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
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
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
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/comprehensive-2030" element={<ComprehensiveServicesLanding2030 />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/services/showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
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
                
                {/* New innovative service routes */}
                <Route path="/services/ai-legal-document-analysis" element={<AILegalDocumentAnalysis />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                <Route path="/services/ai-customer-experience-platform" element={<AICustomerExperiencePlatform />} />

                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<ModernLayout><AISupplyChainOptimization /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-platform" element={<ModernLayout><AICybersecurity /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-platform" element={<ModernLayout><AIHealthcare /></ModernLayout>} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<ModernLayout><AIQuantumHybridPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-research-assistant" element={<ModernLayout><AIAutonomousResearchAssistant /></ModernLayout>} />
                    <Route path="/services/ai-financial-trading-platform" element={<ModernLayout><AIFinancialTradingPlatform /></ModernLayout>} />
                    <Route path="/services/blockchain-enterprise-solutions" element={<ModernLayout><BlockchainEnterpriseSolutions /></ModernLayout>} />

            {/* Mobile Navigation */}
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <nav className="space-y-3">
                <a href="/" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">Home</a>
                <div className="space-y-2">
                  <div className="font-medium text-gray-900 dark:text-white">Services</div>
                  <div className="ml-4 space-y-2">
                    <div className="mb-2">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">AI & Automation</div>
                      <a href="/ai-autonomous-business-automation" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">Business Automation</a>
                      <a href="/ai-cybersecurity-platform" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">AI Cybersecurity</a>
                    </div>
                    <div className="mb-2">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Platforms</div>
                      <a href="/cloud-devops-platform" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">Cloud & DevOps</a>
                      <a href="/data-analytics-platform" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">Data Analytics</a>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                      <a href="/comprehensive-services-2029" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">All Services</a>
                      <a href="/comprehensive-pricing-guide-2029" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">Pricing Guide</a>
                    </div>
                  </div>
                </div>
                <a href="/about" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">About</a>
                <a href="/contact" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">Contact</a>
                <a href="tel:+13024640950" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-center">
                  Call +1 302 464 0950
                </a>
              </nav>
            </div>
          </div>
        </header>

                    {/* Enhanced Innovative Micro SAAS Services 2025 */}
                    <Route path="/services/ai-customer-success-automation" element={<ModernLayout><AICustomerSuccessAutomation /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-enhanced" element={<ModernLayout><AISupplyChainOptimizationEnhanced /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-enhanced" element={<ModernLayout><AIFinancialRiskManagementEnhanced /></ModernLayout>} />

                    {/* New Innovative Services 2025 - Additional */}
                    <Route path="/services/ai-enterprise-intelligence-platform" element={<ModernLayout><AIEnterpriseIntelligencePlatform /></ModernLayout>} />
                    <Route path="/services/ai-quantum-neural-network-platform" element={<ModernLayout><AIQuantumNeuralNetworkPlatform /></ModernLayout>} />
                    <Route path="/services/ai-sales-copilot" element={<ModernLayout><AISalesCopilot /></ModernLayout>} />
                    <Route path="/services/ai-compliance-assistant" element={<ModernLayout><AIComplianceAssistant /></ModernLayout>} />
                    <Route path="/services/cloud-finops-optimizer" element={<ModernLayout><CloudFinOpsOptimizer /></ModernLayout>} />

                    {/* Comprehensive Services Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
            
            {/* Our New Innovative Services Routes */}
            <Route path="/innovative-services-showcase-2029" element={<InnovativeServicesShowcase2029 />} />
            <Route path="/comprehensive-pricing-guide-2029" element={<ComprehensivePricingGuide2029 />} />
            <Route path="/comprehensive-services-2029" element={<ComprehensiveServices2029 />} />
            <Route path="/innovative-ai-services-2029" element={<InnovativeAIServices2029 />} />
            
            {/* New Comprehensive Service Platforms */}
            <Route path="/ai-autonomous-business-automation" element={<AIAutonomousBusinessAutomation />} />
            <Route path="/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
            <Route path="/cloud-devops-platform" element={<CloudDevOpsPlatform />} />
            <Route path="/data-analytics-platform" element={<DataAnalyticsPlatform />} />
            
            {/* Fallback Route */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>

                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-legal-document-automation-platform" element={<ModernLayout><AILegalDocumentAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<ModernLayout><AIHealthcareAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-platform" element={<ModernLayout><AIFinancialRiskManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-platform" element={<ModernLayout><AISupplyChainOptimizationPlatform /></ModernLayout>} />

                    {/* New Innovative Services 2025 - Additional */}
                    <Route path="/services/ai-enterprise-workflow-automation" element={<ModernLayout><AIEnterpriseWorkflowAutomation /></ModernLayout>} />
                    <Route path="/services/ai-quantum-computing-solutions" element={<ModernLayout><AIQuantumComputingSolutions /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-threat-intelligence" element={<ModernLayout><AICybersecurityThreatIntelligence /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 */}
                    <Route path="/services/ai-autonomous-logistics-platform" element={<ModernLayout><AIAutonomousLogisticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-manufacturing-platform" element={<ModernLayout><AIAutonomousManufacturingPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-research-assistant" element={<ModernLayout><AIAutonomousResearchAssistant /></ModernLayout>} />
                    <Route path="/services/ai-powered-seo" element={<ModernLayout><AIPoweredSEO /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 - Additional */}
                    <Route path="/services/ai-content-marketing-studio" element={<ModernLayout><AIContentMarketingStudio /></ModernLayout>} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<ModernLayout><AICustomerExperienceAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-devops-automation-platform" element={<ModernLayout><AIDevOpsAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-ecommerce-optimization-platform" element={<ModernLayout><AIEcommerceOptimizationPlatform /></ModernLayout>} />
                    {/* Innovative Services Showcase 2026 */}
                    <Route path="/innovative-services-showcase-2026" element={<ModernLayout><InnovativeServicesShowcase2026 /></ModernLayout>} />

                    {/* Innovative Services Showcase 2032 */}
                    <Route path="/innovative-services-showcase-2032" element={<ModernLayout><InnovativeServicesShowcase2032 /></ModernLayout>} />

                    {/* Comprehensive Pricing Guide 2032 */}
                    <Route path="/comprehensive-pricing-guide-2032" element={<ModernLayout><ComprehensivePricingGuide2032 /></ModernLayout>} />
                    {/* New Innovative Services 2025 - Combined from both versions */}
                    <Route path="/services/ai-enterprise-automation-platform" element={<AIEnterpriseAutomationPlatform />} />
                    <Route path="/services/ai-data-analytics-platform" element={<AIDataAnalyticsPlatform />} />
                    <Route path="/services/it-infrastructure-management" element={<ITInfrastructureManagement />} />
                    <Route path="/services/micro-saas-solutions-comprehensive" element={<MicroSaaSSolutionsComprehensive />} />

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
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/ai-enterprise-resource-planning" element={<ModernLayout><AIEnterpriseResourcePlanning /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-manufacturing-platform" element={<ModernLayout><AIAutonomousManufacturingPlatform /></ModernLayout>} />
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />

                    {/* New Innovative Services 2025 - Content Creation & Analytics */}
                    <Route path="/services/ai-content-creation-studio" element={<AIContentCreationStudio />} />
                    <Route path="/pricing-guide" element={<PricingGuide />} />
                    
                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-legal-document-automation-platform" element={<ModernLayout><AILegalDocumentAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<ModernLayout><AIHealthcareAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-platform" element={<ModernLayout><AIFinancialRiskManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-platform" element={<ModernLayout><AISupplyChainOptimizationPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 - Additional */}
                    <Route path="/services/ai-carbon-footprint-management-platform" element={<ModernLayout><AICarbonFootprintManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-mental-health-support-platform" element={<ModernLayout><AIMentalHealthSupportPlatform /></ModernLayout>} />
                    <Route path="/services/ai-smart-home-energy-management-platform" element={<ModernLayout><AISmartHomeEnergyManagementPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 - Legal & Education */}
                    <Route path="/services/ai-autonomous-legal-research-platform" element={<ModernLayout><AIAutonomousLegalResearchPlatform /></ModernLayout>} />
                    <Route path="/services/ai-educational-content-creation-platform" element={<ModernLayout><AIEducationalContentCreationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-real-estate-investment-analytics-platform" element={<ModernLayout><AIRealEstateInvestmentAnalyticsPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 */}
                    <Route path="/services/ai-autonomous-logistics-platform" element={<ModernLayout><AIAutonomousLogisticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-logistics-optimization" element={<ModernLayout><AIAutonomousLogisticsOptimization /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-cybersecurity-platform" element={<ModernLayout><AIAutonomousCybersecurityPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-manufacturing-platform" element={<ModernLayout><AIAutonomousManufacturingPlatform /></ModernLayout>} />
                    <Route path="/services/ai-powered-seo" element={<ModernLayout><AIPoweredSEO /></ModernLayout>} />
                    <Route path="/services/quantum-edge-computing-solutions" element={<ModernLayout><QuantumEdgeComputingSolutions /></ModernLayout>} />
                    <Route path="/services/ai-space-technology-platform" element={<ModernLayout><AISpaceTechnologyPlatform /></ModernLayout>} />

                    {/* New Innovative AI Services 2026-2027 */}
                    <Route path="/services/ai-autonomous-financial-advisor" element={<ModernLayout><AIAutonomousFinancialAdvisor /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-healthcare-diagnostics" element={<ModernLayout><AIAutonomousHealthcareDiagnostics /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-cybersecurity-operations" element={<ModernLayout><AIAutonomousCybersecurityOperations /></ModernLayout>} />

                    {/* New Innovative AI Services 2025 - Additional */}
                    <Route path="/services/ai-autonomous-education-platform" element={<ModernLayout><AIAutonomousEducationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-agriculture-platform" element={<ModernLayout><AIAutonomousAgriculturePlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-energy-management-platform" element={<ModernLayout><AIAutonomousEnergyManagementPlatform /></ModernLayout>} />

                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-powered-customer-churn-predictor" element={<AIPoweredCustomerChurnPredictor />} />

                    {/* Solution Routes */}
                    <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                    <Route path="/solutions/financial" element={<FinancialSolutions />} />
                    <Route path="/solutions/manufacturing" element={<ManufacturingSolutions />} />
                    <Route path="/solutions/government" element={<GovernmentSolutions />} />
                    <Route path="/solutions/retail" element={<RetailSolutions />} />
                    <Route path="/solutions/quantum-edge-computing" element={<QuantumEdgeComputing />} />
                    <Route path="/solutions/ai-autonomous-business" element={<AIAutonomousBusiness />} />
                    <Route path="/solutions/blockchain-web3" element={<BlockchainWeb3 />} />
                    <Route path="/solutions/iot-edge-computing" element={<IoTEdgeComputing />} />
                    <Route path="/solutions/space-tech" element={<SpaceTech />} />

                    {/* New Innovative Services 2025 */}
                    <Route path="/services/ai-enterprise-workflow-automation" element={<AIEnterpriseWorkflowAutomation />} />
                    <Route path="/services/ai-customer-intelligence-platform" element={<AICustomerIntelligencePlatform />} />
                    <Route path="/services/ai-financial-trading-platform" element={<AIFinancialTradingPlatform />} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ModernLayout><ComprehensiveServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-ai-services-showcase-2025" element={<ModernLayout><InnovativeAIServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-services-showcase-2025" element={<ModernLayout><InnovativeServicesShowcase2025 /></ModernLayout>} />
        
        <EnhancedFuturisticFooter />
        <ChatAssistant />
        <PerformanceOptimizer />
      </div>
    </ErrorBoundary>
  );
}

export default App;