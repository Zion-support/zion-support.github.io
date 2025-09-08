import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader  } from './layout/AppHeader';
import { EnhancedFuturisticFooter  } from './components/EnhancedFuturisticFooter';
import { ChatAssistant  } from './components/ChatAssistant';
import { LoadingSpinner  } from './components/ui/LoadingSpinner';
import { SEO  } from './components/SEO';
import { PerformanceOptimizer  } from './components/PerformanceOptimizer';
import { EnhancedAccessibilityEnhancer  } from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer  } from './components/MobileExperienceEnhancer';
import { ErrorBoundary  } from './components/ErrorBoundary';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Press = React.lazy(() => import('./pages/Press'));
const Docs = React.lazy(() => import('./pages/Docs'));
const Training = React.lazy(() => import('./pages/Training'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Status = React.lazy(() => import('./pages/Status'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Team = React.lazy(() => import('./pages/Team'));
const Partners = React.lazy(() => import('./pages/Partners'));
const News = React.lazy(() => import('./pages/News'));
const Press = React.lazy(() => import('./pages/Press'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Community = React.lazy(() => import('./pages/Community'));
const Support = React.lazy(() => import('./pages/Support'));
const Developers = React.lazy(() => import('./pages/Developers'));

// New pages
const Solutions = React.lazy(() => import('./pages/solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const News = React.lazy(() => import('./pages/news'));
const Events = React.lazy(() => import('./pages/events'));

// Service pages
const Services = createLazyComponent(() => import('./pages/Services'));
const Services2026 = createLazyComponent(() => import('./pages/Services2026'));
const Services2027 = createLazyComponent(() => import('./pages/InnovativeServices2027'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = createLazyComponent(() => import('./pages/services/MicroSAASSolutions'));
const ComprehensiveServices = createLazyComponent(() => import('./pages/ComprehensiveServices'));

// Additional pages
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Team = createLazyComponent(() => import('./pages/Team'));
const HelpCenter = createLazyComponent(() => import('./pages/HelpCenter'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Developers = createLazyComponent(() => import('./pages/Developers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Status = createLazyComponent(() => import('./pages/Status'));
const API = createLazyComponent(() => import('./pages/Api'));

// Enhanced Services Showcase 2025
const EnhancedServicesShowcase2025 = lazy(() => import('./pages/EnhancedServicesShowcase2025'));

// Comprehensive Services Showcase 2025
const ComprehensiveServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// Comprehensive Pricing Guide 2025
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// 2025 Innovative Services
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ZionInnovativeServices2025 = lazy(() => import('./pages/ZionInnovativeServices2025'));

// 2026 Innovative Services
const InnovativeServicesShowcase2026 = lazy(() => import('./pages/InnovativeServicesShowcase2026'));
const ComprehensivePricingGuide2026 = lazy(() => import('./pages/ComprehensivePricingGuide2026'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// New Innovative Services
const AIContentCreationStudioPro = lazy(() => import('./pages/services/AI-Content-Creation-Studio-Pro'));
const QuantumAITradingPlatform = lazy(() => import('./pages/services/Quantum-AI-Trading-Platform'));

// New Cutting-Edge Services 2025
const AIQuantumComputingPlatform = lazy(() => import('./pages/services/AI-Quantum-Computing-Platform'));
const AISpaceTechnologyPlatform = lazy(() => import('./pages/services/AI-Space-Technology-Platform'));
const AIFinancialTechnologyPlatform = lazy(() => import('./pages/services/AI-Financial-Technology-Platform'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// AI Service pages
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));

// New pages
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));

// New pages
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Partners = React.lazy(() => import('./pages/Partners'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));

// NEW INNOVATIVE MICRO SAAS SERVICE PAGES
const AILegalDocumentAnalyzer = React.lazy(() => import('./pages/services/ai-legal-document-analyzer'));
const AIRealEstateInvestmentAnalyzer = React.lazy(() => import('./pages/services/ai-real-estate-investment-analyzer'));
const AIRestaurantManagementSystem = React.lazy(() => import('./pages/services/ai-restaurant-management-system'));
const AIFitnessCoachingPlatform = React.lazy(() => import('./pages/services/ai-fitness-coaching-platform'));
const AIEcommercePersonalizationEngine = React.lazy(() => import('./pages/services/ai-ecommerce-personalization-engine'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const AIVideoContentCreationStudio = React.lazy(() => import('./pages/services/ai-video-content-creation-studio'));
const AICustomerChurnPrediction = React.lazy(() => import('./pages/services/ai-customer-churn-prediction'));
const AIFinancialFraudDetection = React.lazy(() => import('./pages/services/ai-financial-fraud-detection'));
const AIEnergyManagementSystem = React.lazy(() => import('./pages/services/ai-energy-management-system'));

// Enhanced components
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// New pages I've created
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Events = createLazyComponent(() => import('./pages/Events'));

// Additional missing pages
const ZionHireAI = createLazyComponent(() => import('./pages/ZionHireAI'));
const EnhancedServices = createLazyComponent(() => import('./pages/EnhancedServices'));
const ITOnsiteServices = createLazyComponent(() => import('./pages/ITOnsiteServices'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-6">We're working on fixing the problem.</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Discover and purchase cutting-edge AI solutions and technology services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Coming Soon</p>
    </div>
  </div>
);

const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center text-white">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
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
                    <Route path="/support" element={<ModernLayout><Support /></ModernLayout>} />
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
                    <Route path="/team" element={<ModernLayout><Team /></ModernLayout>} />
                    <Route path="/press" element={<ModernLayout><Press /></ModernLayout>} />
                    <Route path="/investors" element={<ModernLayout><Investors /></ModernLayout>} />
                    <Route path="/legal" element={<ModernLayout><Legal /></ModernLayout>} />

                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<ModernLayout><AISupplyChainOptimization /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-platform" element={<ModernLayout><AICybersecurity /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-platform" element={<ModernLayout><AIHealthcare /></ModernLayout>} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<ModernLayout><AIQuantumHybridPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-research-assistant" element={<ModernLayout><AIAutonomousResearchAssistant /></ModernLayout>} />
                    <Route path="/services/ai-financial-trading-platform" element={<ModernLayout><AIFinancialTradingPlatform /></ModernLayout>} />
                    <Route path="/services/blockchain-enterprise-solutions" element={<ModernLayout><BlockchainEnterpriseSolutions /></ModernLayout>} />

                    {/* New Innovative Micro SAAS Services 2025 */}
                    <Route path="/services/ai-business-intelligence-dashboard" element={<ModernLayout><AIBusinessIntelligenceDashboard /></ModernLayout>} />
                    <Route path="/services/ai-customer-support-automation" element={<ModernLayout><AICustomerSupportAutomation /></ModernLayout>} />
                    <Route path="/services/ai-project-management-platform" element={<ModernLayout><AIProjectManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-marketing-automation-platform" element={<ModernLayout><AIMarketingAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-workflow-orchestrator" element={<ModernLayout><AIWorkflowOrchestrator /></ModernLayout>} />
                    <Route path="/services/ai-predictive-maintenance" element={<ModernLayout><AIPredictiveMaintenance /></ModernLayout>} />
                    <Route path="/services/ai-hr-platform" element={<ModernLayout><AIHRPlatform /></ModernLayout>} />
                    <Route path="/services/ai-financial-trading-risk-management" element={<ModernLayout><AIFinancialTradingRiskManagement /></ModernLayout>} />

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
            
                    <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
                    <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />

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
                    <Route path="/services/ai-powered-seo" element={<ModernLayout><AIPoweredSEO /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 - Additional */}
                    <Route path="/services/ai-content-marketing-studio" element={<ModernLayout><AIContentMarketingStudio /></ModernLayout>} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<ModernLayout><AICustomerExperienceAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-devops-automation-platform" element={<ModernLayout><AIDevOpsAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-ecommerce-optimization-platform" element={<ModernLayout><AIEcommerceOptimizationPlatform /></ModernLayout>} />
                    {/* Innovative Services Showcase 2026 */}
                    <Route path="/innovative-services-showcase-2026" element={<ModernLayout><InnovativeServicesShowcase2026 /></ModernLayout>} />

                    {/* Comprehensive Pricing Guide 2026 */}
                    <Route path="/comprehensive-pricing-guide-2026" element={<ModernLayout><ComprehensivePricingGuide2026 /></ModernLayout>} />

                    {/* Innovative Services Showcase 2027 */}
                    <Route path="/innovative-services-showcase-2027" element={<ModernLayout><InnovativeServicesShowcase2027 /></ModernLayout>} />

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
                    
                    {/* New Innovative Services 2026 - Additional */}
                    <Route path="/services/ai-autonomous-financial-advisor-platform" element={<ModernLayout><AIAutonomousFinancialAdvisorPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-supply-chain-intelligence" element={<ModernLayout><AIAutonomousSupplyChainIntelligence /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-cybersecurity-intelligence" element={<ModernLayout><AIAutonomousCybersecurityIntelligence /></ModernLayout>} />

                    {/* New Innovative AI Services 2026-2027 */}
                    <Route path="/services/ai-autonomous-financial-advisor" element={<ModernLayout><AIAutonomousFinancialAdvisor /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-healthcare-diagnostics" element={<ModernLayout><AIAutonomousHealthcareDiagnostics /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-cybersecurity-operations" element={<ModernLayout><AIAutonomousCybersecurityOperations /></ModernLayout>} />

                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-powered-customer-churn-predictor" element={<ModernLayout><AIPoweredCustomerChurnPredictor /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-intelligence-platform" element={<ModernLayout><AICybersecurityIntelligencePlatform /></ModernLayout>} />

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
                    <Route path="/innovative-services-showcase-2029" element={<ModernLayout><InnovativeServicesShowcase2029 /></ModernLayout>} />
                    <Route path="/comprehensive-pricing-guide-2029" element={<ModernLayout><ComprehensivePricingGuide2029 /></ModernLayout>} />
        
        <main id="main-content" className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help" element={<Help />} />
              <Route path="/support" element={<Support />} />
              <Route path="/community" element={<Community />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/training" element={<Training />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/security" element={<Security />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/onsite-support" element={<OnsiteSupport />} />
              <Route path="/pricing" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/pricing-2025" element={<ComprehensivePricingGuide2025 />} />
              <Route path="/pricing-2030" element={<ComprehensivePricingGuide2030 />} />
              <Route path="/pricing-guide" element={<PricingGuide />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services-overview" element={<ServicesOverview />} />
              <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
              <Route path="/revolutionary-services-showcase-2030" element={<RevolutionaryServicesShowcase2030 />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/partners" element={<Partners />} />
              
              {/* New Routes */}
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              
              {/* Service Routes - only for existing pages */}
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/iot-edge" element={<IoTEdge />} />
              <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
              <Route path="/services/healthcare-tech" element={<HealthcareTech />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              <Route path="/services/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
              <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
              <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
              <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
              <Route path="/services/ai-auto-email-responder" element={<AIAutoEmailResponder />} />
              <Route path="/services/mobile-feedback-surveys" element={<CustomerFeedbackSurveys />} />
              <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} />
              <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
              <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
              
              {/* Additional Service Routes */}
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/it-consulting" element={<ITConsulting />} />
              <Route path="/services/onsite-support" element={<OnsiteSupport />} />
              <Route path="/services/green-it" element={<GreenIT />} />
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/space-tech" element={<SpaceTech />} />

  return (
    <ErrorBoundary enableErrorReporting={true} showErrorDetails={process.env.NODE_ENV === 'development'}>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                
                {/* New pages */}
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/api-docs" element={<APIDocs />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/training" element={<Training />} />
                <Route path="/community" element={<Community />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                
                {/* New Routes */}
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/partners" element={<Partners />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                
                {/* Additional pages */}
                <Route path="/docs" element={<Documentation />} />
                <Route path="/community" element={<Community />} />
                <Route path="/support" element={<Support />} />
                <Route path="/developers" element={<Developers />} />
                
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
