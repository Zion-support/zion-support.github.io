import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/index'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Careers = lazy(() => import('./pages/careers'));
const Services = lazy(() => import('./pages/services/index'));
const AIServices = lazy(() => import('./pages/services/ai-services'));
const ITServices = lazy(() => import('./pages/services/it-services'));
const MicroSaaS = lazy(() => import('./pages/services/micro-saas'));
const Pricing = lazy(() => import('./pages/pricing'));
const PricingGuide = lazy(() => import('./pages/pricing-guide'));
const Blog = lazy(() => import('./pages/blog'));
const CaseStudies = lazy(() => import('./pages/case-studies'));
const WhitePapers = lazy(() => import('./pages/white-papers'));
const Webinars = lazy(() => import('./pages/webinars'));
const Team = lazy(() => import('./pages/team'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));
const Sitemap = lazy(() => import('./pages/sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service sub-pages
const AICybersecurityPlatform = lazy(() => import('./pages/services/AICybersecurityPlatform'));
const AICustomerExperience = lazy(() => import('./pages/services/AICustomerExperience'));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/AIHealthcareDiagnostics'));
const AIEnterpriseOrchestrator = lazy(() => import('./pages/services/AIEnterpriseOrchestrator'));
const AIHealthcareAnalyticsPlatform = lazy(() => import('./pages/services/AIHealthcareAnalyticsPlatform'));
const AIAutonomousSupplyChain = lazy(() => import('./pages/services/AIAutonomousSupplyChain'));
const AIFinancialPlanning = lazy(() => import('./pages/services/AIFinancialPlanning'));

// Simple header component
const SimpleHeader = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-gray-900">
            Zion Tech Group
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

// Simple footer component
const SimpleFooter = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/team" className="hover:text-blue-400">Team</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-blue-400">All Services</a></li>
            <li><a href="/ai-solutions" className="hover:text-blue-400">AI Solutions</a></li>
            <li><a href="/cloud-services" className="hover:text-blue-400">Cloud Services</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="/help-center" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/documentation" className="hover:text-blue-400">Documentation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>// Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Sidebar } from './components/Sidebar';

// Optimized lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
<LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const HelpCenter = createLazyComponent(() => import('./pages/Help'));
const PrivacyPolicy = createLazyComponent(() => import('./pages/PrivacyPolicy'));
const TermsOfService = createLazyComponent(() => import('./pages/TermsOfService'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const News = createLazyComponent(() => import('./pages/News'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Login = createLazyComponent(() => import('./pages/Login'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Research = createLazyComponent(() => import('./pages/Research'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// New Autonomous AI Services 2025
const AIAutonomousContentMarketingPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-Content-Marketing-Platform'));
const AIAutonomousCustomerSuccessPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-Customer-Success-Platform'));
const AIAutonomousDevOpsPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-DevOps-Platform'));
const AIAutonomousSalesPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-Sales-Platform'));
const AIAutonomousHRPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-HR-Platform'));

// 2028 Services Showcase
const InnovativeServicesShowcase2028 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2028'));

// 2025 Innovative Services
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// AI Service pages
const AILegalDocumentAutomation = createLazyComponent(() => import('./pages/services/AILegalDocumentAutomation'));
const AIContentGenerator = createLazyComponent(() => import('./pages/services/ai-content-generator'));
const AIContentOptimizer = createLazyComponent(() => import('./pages/services/ai-content-optimizer-pro'));
const AICybersecuritySuite = createLazyComponent(() => import('./pages/services/ai-cybersecurity-suite'));
const AIFinancialTrading = createLazyComponent(() => import('./pages/services/ai-financial-trading-platform'));
const AIHealthcareAnalytics = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIHRPlatform = createLazyComponent(() => import('./pages/services/ai-hr-platform'));
const AIIoTEdgeComputing = createLazyComponent(() => import('./pages/services/ai-iot-edge-computing-platform'));
const AIMarketingAutomation = createLazyComponent(() => import('./pages/services/ai-marketing-automation'));
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/ai-powered-seo'));
const AIPredictiveMaintenance = createLazyComponent(() => import('./pages/services/ai-predictive-maintenance'));
const AIProjectManagement = createLazyComponent(() => import('./pages/services/ai-project-management-platform'));
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization'));
const AIWorkflowAutomation = createLazyComponent(() => import('./pages/services/ai-workflow-automation'));
const AIWorkflowOrchestrator = createLazyComponent(() => import('./pages/services/ai-workflow-orchestrator'));

// New AI Services
const AIDataGovernancePlatform = createLazyComponent(() => import('./pages/services/AI-Data-Governance-Platform'));
const AIFinancialRiskManagement = createLazyComponent(() => import('./pages/services/AI-Financial-Risk-Management'));
const AISupplyChainRiskManagement = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Risk-Management'));
const AIESGCompliancePlatform = createLazyComponent(() => import('./pages/services/AI-ESG-Compliance-Platform'));
const AIDigitalTwinPlatform = createLazyComponent(() => import('./pages/services/AI-Digital-Twin-Platform'));
const AIEdgeComputingPlatform = createLazyComponent(() => import('./pages/services/AI-Edge-Computing-Platform'));
const AIQuantumMachineLearning = createLazyComponent(() => import('./pages/services/AI-Quantum-Machine-Learning'));

// Quantum Computing Services
const QuantumComputing = createLazyComponent(() => import('./pages/services/QuantumComputing'));
const QuantumAIPlatform = createLazyComponent(() => import('./pages/services/QuantumAIPlatform'));
const QuantumAITradingPlatform = createLazyComponent(() => import('./pages/services/QuantumAITradingPlatform'));
const QuantumComputingAsAService = createLazyComponent(() => import('./pages/services/QuantumComputingAsAService'));
const QuantumComputingElite = createLazyComponent(() => import('./pages/services/QuantumComputingElite'));
const QuantumComputingSolutions = createLazyComponent(() => import('./pages/services/QuantumComputingSolutions'));
const QuantumMachineLearning = createLazyComponent(() => import('./pages/services/QuantumMachineLearning'));
const QuantumTechnology = createLazyComponent(() => import('./pages/services/QuantumTechnology'));

// Other Services
const BlockchainEnterpriseSolutions = createLazyComponent(() => import('./pages/services/blockchain-enterprise-solutions'));
const CloudDevOps = createLazyComponent(() => import('./pages/services/cloud-devops'));
const CloudMigrationServices = createLazyComponent(() => import('./pages/services/cloud-migration-services'));
const Cybersecurity = createLazyComponent(() => import('./pages/services/cybersecurity'));
const DigitalTransformation = createLazyComponent(() => import('./pages/services/digital-transformation'));
const DigitalTwin = createLazyComponent(() => import('./pages/services/digital-twin'));
const FinOpsAdvisor = createLazyComponent(() => import('./pages/services/finops-advisor'));
const GreenIT = createLazyComponent(() => import('./pages/services/green-it'));
const HealthcareTech = createLazyComponent(() => import('./pages/services/healthcare-tech'));
const IncidentResponsePlatform = createLazyComponent(() => import('./pages/services/incident-response-platform'));
const InterviewAssessmentAI = createLazyComponent(() => import('./pages/services/interview-assessment-ai'));
const IoTEdgeComputing = createLazyComponent(() => import('./pages/services/iot-edge-computing'));
const LLMContentStudio = createLazyComponent(() => import('./pages/services/llm-content-studio'));
const MicroCRM = createLazyComponent(() => import('./pages/services/micro-crm'));
const MicroSAASSolutions = createLazyComponent(() => import('./pages/services/micro-saas-solutions'));
const SmartInventoryManagement = createLazyComponent(() => import('./pages/services/smart-inventory-management'));
const SpaceTech = createLazyComponent(() => import('./pages/services/space-tech'));
const Sustainability = createLazyComponent(() => import('./pages/services/sustainability'));const SustainableTechnology = createLazyComponent(() => import('./pages/services/sustainable-technology'));
const QuantumMachineLearning = createLazyComponent(() => import('./pages/services/quantum-machine-learning'));
const AIContentCreation = createLazyComponent(() => import('./pages/services/ai-content-creation'));
const IoTEdgeComputing = createLazyComponent(() => import('./pages/services/iot-edge-computing'));
const QuantumComputing = createLazyComponent(() => import('./pages/services/quantum-computing'));
const DigitalTwin = createLazyComponent(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = createLazyComponent(() => import('./pages/services/DataAnalytics'));
const API = createLazyComponent(() => import('./pages/API'));
const DeveloperPortal = createLazyComponent(() => import('./pages/DeveloperPortal'));

// AI Business Intelligence and Digital Transformation
const AIBusinessIntelligence = createLazyComponent(() => import('./pages/services/AIBusinessIntelligence'));
const DigitalTransformation = createLazyComponent(() => import('./pages/services/DigitalTransformation'));

// 2025 New Innovative Services
const AISupplyChainRiskManagement = createLazyComponent(() => import('./pages/services/AISupplyChainRiskManagement'));
const AIESGCompliancePlatform = createLazyComponent(() => import('./pages/services/AIESGCompliancePlatform'));
const AIDigitalTwinPlatform = createLazyComponent(() => import('./pages/services/AIDigitalTwinPlatform'));
const AIQuantumComputingPlatform = createLazyComponent(() => import('./pages/services/AIQuantumComputingPlatform'));
const AIEdgeComputingPlatform = createLazyComponent(() => import('./pages/services/AIEdgeComputingPlatform'));

// 2025 Additional Innovative Services - New
const AICustomerJourneyOrchestrationPlatform = createLazyComponent(() => import('./pages/services/ai-customer-journey-orchestration-platform'));
const QuantumEnhancedCybersecurityOperationsCenter = createLazyComponent(() => import('./pages/services/quantum-enhanced-cybersecurity-operations-center'));
const AIDrivenSustainabilityAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-driven-sustainability-analytics-platform'));
const AutonomousDigitalTwinManagementSystem = createLazyComponent(() => import('./pages/services/autonomous-digital-twin-management-system'));

// 2025 Innovative Services
const InnovativeServicesLanding2025 = createLazyComponent(() => import('./pages/InnovativeServicesLanding2025'));

// Additional innovative services
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AIContentMarketingSuite = createLazyComponent(() => import('./pages/services/AIContentMarketingSuite'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AIQuantumHybridPlatform'));
const AICybersecurityPlatform = createLazyComponent(() => import('./pages/services/AICybersecurityPlatform'));
const AIHealthcarePlatform = createLazyComponent(() => import('./pages/services/AIHealthcarePlatform'));

// Showcase pages
const UltimateServicesShowcase2025 = createLazyComponent(() => import('./components/UltimateServicesShowcase2025'));
const UltimateServicesShowcase2026 = createLazyComponent(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = createLazyComponent(() => import('./pages/ComprehensivePricing2026'));
const ComprehensivePricing2028 = createLazyComponent(() => import('./pages/ComprehensivePricing2028'));
// 2025 Innovative Services Showcase and Pricing Guide
const InnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2025'));
const ComprehensivePricingGuide2025 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2025'));

// 2025 Comprehensive Services Showcase - New
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-900">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-red-200 mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);
return (
<HelmetProvider>
<ErrorBoundary fallback={<ErrorFallback error={new Error()} resetErrorBoundary={() => {}} />}>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* SEO Component */}
            <SEO
              title="Zion Tech Group - Leading AI & Technology Solutions"
              description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
              keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
              ogImage="/og-image.jpg"
              canonicalUrl="https://ziontechgroup.com"
            />

            {/* Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />

            {/* Enhanced Accessibility */}
            <EnhancedAccessibilityEnhancer enabled={true} />

            {/* Security Enhancer */}
            <SecurityEnhancer enabled={true} />

            {/* Mobile Experience Enhancer */}
            <MobileExperienceEnhancer enabled={true} />

            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />

            {/* Header */}
            <EnhancedHeader />

            {/* Main Content */}
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
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
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/data-protection" element={<DataProtection />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/sitemap" element={<Sitemap />} />

                    {/* Service Routes */}
                    <Route path="/services-pricing" element={<ServicesPricingPage />} />
                    <Route path="/system-status" element={<SystemStatus />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/api-playground" element={<ApiPlayground />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/login" element={<Login />} />

                    {/* 2028 Innovative AI Services */}
                    <Route path="/services/ai-autonomous-vehicle-management-platform" element={<AIAutonomousVehicleManagementPlatform />} />
                    <Route path="/services/ai-smart-city-infrastructure-management" element={<AISmartCityInfrastructureManagement />} />
                    <Route path="/services/ai-quantum-financial-trading-platform" element={<AIQuantumFinancialTradingPlatform />} />

                    {/* 2028 Services Showcase */}
                    <Route path="/innovative-services-showcase-2028" element={<InnovativeServicesShowcase2028 />} />

                    {/* 2025 Innovative Services Showcase and Pricing Guide */}
                    <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                    <Route path="/ultimate-innovative-services-showcase-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
                    <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />

                    {/* Service Detail Routes */}
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/ai-seo" element={<AIPoweredSEO />} />
                    <Route path="/services/interview-assessment" element={<InterviewAssessmentAI />} />
                    <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} />
                    <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                    <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                    <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} />
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
                    <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                    <Route path="/services/dsr-portal" element={<DSRPortal />} />
                    <Route path="/services/zero-trust-network-access" element={<ZeroTrustNetworkAccess />} />
                    <Route path="/services/digital-twin" element={<DigitalTwin />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                    <Route path="/services/space-tech" element={<SpaceTech />} />
                    <Route path="/services/data-analytics" element={<DataAnalytics />} />
                    <Route path="/services/micro-crm" element={<MicroCRM />} />
                    <Route path="/services/helpdesk" element={<HelpdeskPlatform />} />
                    <Route path="/services/website-analytics" element={<WebsiteAnalytics />} />
                    <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />

                    {/* AI Service Routes */}
                    <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                    <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                    <Route path="/services/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                    <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} />
                    <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                    <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                    <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                    <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                    <Route path="/services/ai-hr-talent-acquisition" element={<AIHRTalentAcquisition />} />
                    <Route path="/services/ai-iot-edge-computing" element={<AIIoTEdgeComputing />} />
                    <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                    <Route path="/services/ai-sustainable-technology" element={<AISustainableTechnology />} />
                    <Route path="/services/ai-quantum-machine-learning" element={<AIQuantumMachineLearning />} />

                    {/* 2025 New Innovative Services */}
                    <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                    <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                    <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                    <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />
                    <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />

                    {/* 2025 Additional Innovative Services - New */}
                    <Route path="/services/ai-customer-journey-orchestration-platform" element={<AICustomerJourneyOrchestrationPlatform />} />
                    <Route path="/services/quantum-enhanced-cybersecurity-operations-center" element={<QuantumEnhancedCybersecurityOperationsCenter />} />
                    <Route path="/services/ai-driven-sustainability-analytics-platform" element={<AIDrivenSustainabilityAnalyticsPlatform />} />
                    <Route path="/services/autonomous-digital-twin-management-system" element={<AutonomousDigitalTwinManagementSystem />} />

                    {/* New Innovative Services 2025 */}
                    <Route path="/services/ai-email-automation-suite" element={<AIEmailAutomationSuite />} />
                    <Route path="/services/ai-social-media-scheduler" element={<AISocialMediaScheduler />} />
                    <Route path="/services/ai-powered-devops-automation" element={<AIPoweredDevOpsAutomation />} />
                    <Route path="/services/ai-customer-insights-platform" element={<AICustomerInsightsPlatform />} />

                    {/* Additional Service Routes */}
                    <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                    <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                    <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
                    <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                    <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />

                    {/* Additional Pages */}
                    <Route path="/api" element={<API />} />
                    <Route path="/developer-portal" element={<DeveloperPortal />} />

                    {/* Showcase Routes */}
                    <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
                    <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
                    <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
                    <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />
                    <Route path="/innovative-services-2025" element={<InnovativeServicesLanding2025 />} />
                    <Route path="/comprehensive-services-overview-2026" element={<ComprehensiveServicesOverview2026 />} />

                    {/* 2025 Comprehensive Services Showcase - New */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />

                    {/* 2029 Cutting-Edge Services */}
                    <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
                    <Route path="/cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
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
            <EnhancedFooter />

            {/* Floating Action Button */}
            <FloatingActionButton enabled={true} />

            {/* Smart Notification System */}
            <SmartNotificationSystem enabled={true} />

            {/* Chat Assistant */}
            <ChatAssistant
              enabled={true}
              position="bottom-right"
              theme="auto"
              language="en"
            />
          </div>
        </Router>
</ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;