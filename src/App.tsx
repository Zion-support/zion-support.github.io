import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import { Header } from './components/header/Header';
import { Footer } from './components/layout/Footer';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { EnhancedAccessibilityEnhancer } from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import { FloatingActionButton } from './components/FloatingActionButton';

import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { EnhancedLoadingSpinner } from './components/EnhancedLoadingSpinner';
import { EnhancedNavigation } from './components/ui/EnhancedNavigation';
import { EnhancedFooter } from './components/ui/EnhancedFooter';

// New Enhanced Components
import PerformanceMonitor from './components/PerformanceMonitor';
import ErrorBoundary from './components/ErrorBoundary';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import SEOOptimizer from './components/SEOOptimizer';

// Layout Components
import ModernLayout from './components/layout/ModernLayout';
import { AppFooter } from './components/layout/AppFooter';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Services = createLazyComponent(() => import('./pages/Services'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const DataProtection = createLazyComponent(() => import('./pages/DataProtection'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// Service pages
const ServicesPricingPage = createLazyComponent(() => import('./pages/ServicesPricingPage'));
const SystemStatus = createLazyComponent(() => import('./pages/SystemStatus'));
const Search = createLazyComponent(() => import('./pages/Search'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const ApiPlayground = createLazyComponent(() => import('./pages/ApiPlayground'));
const Research = createLazyComponent(() => import('./pages/Research'));
const Categories = createLazyComponent(() => import('./pages/Categories'));
const Login = createLazyComponent(() => import('./pages/Login'));

// 2028 Innovative AI Services
const AIAutonomousVehicleManagementPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-vehicle-management-platform'));
const AISmartCityInfrastructureManagement = createLazyComponent(() => import('./pages/services/ai-smart-city-infrastructure-management'));
const AIQuantumFinancialTradingPlatform = createLazyComponent(() => import('./pages/services/ai-quantum-financial-trading-platform'));
const AIContentMarketingSuite = createLazyComponent(() => import('./pages/services/ai-content-marketing-suite'));
const AICustomerSupportAutomation = createLazyComponent(() => import('./pages/services/ai-customer-support-automation'));

// New Innovative Services 2028
const AIAutonomousBusinessManager = createLazyComponent(() => import('./pages/services/ai-autonomous-business-manager'));
const QuantumAIHybridPlatform = createLazyComponent(() => import('./pages/services/quantum-ai-hybrid-platform'));

// New AI Services 2025 - Enhanced
const AILegalResearchCompliancePlatform = createLazyComponent(() => import('./pages/services/ai-legal-research-compliance-platform'));
const AIHealthcarePredictiveAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-healthcare-predictive-analytics-platform'));
const AIFinancialRiskManagementTradingPlatform = createLazyComponent(() => import('./pages/services/ai-financial-risk-management-trading-platform'));
const AISupplyChainIntelligenceOptimizationPlatform = createLazyComponent(() => import('./pages/services/ai-supply-chain-intelligence-optimization-platform'));

// 2028 Services Showcase
const InnovativeServicesShowcase2028 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2028'));
const ComprehensivePricingGuide2028 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2028'));

// Comprehensive Services Showcase 2025
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));

// 2025 Services Showcase
const ServicesShowcase2025 = createLazyComponent(() => import('./pages/services-showcase-2025'));

// 2025 Innovative Services
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ZionInnovativeServices2025 = lazy(() => import('./pages/ZionInnovativeServices2025'));
const InnovativeServicesShowcase2025 = lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// 2026 Innovative Services
const InnovativeServicesShowcase2026 = lazy(() => import('./pages/InnovativeServicesShowcase2026'));
const ComprehensivePricingGuide2026 = lazy(() => import('./pages/ComprehensivePricingGuide2026'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// New Innovative Services
const AIContentCreationStudioPro = lazy(() => import('./pages/services/AI-Content-Creation-Studio-Pro'));
const QuantumAITradingPlatform = lazy(() => import('./pages/services/Quantum-AI-Trading-Platform'));
const AIBusinessIntelligencePlatform = lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIHealthcareAnalyticsPlatform = lazy(() => import('./pages/services/AIHealthcareAnalyticsPlatform'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// AI Service pages
const AILegalDocumentAutomation = createLazyComponent(() => import('./pages/services/AILegalDocumentAutomation'));
const AILegalDocumentAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-legal-document-automation-platform'));
const AIContentOptimizer = createLazyComponent(() => import('./pages/services/ai-content-optimizer-pro'));
const AICybersecuritySuite = createLazyComponent(() => import('./pages/services/ai-cybersecurity-suite'));
const AIFinancialTrading = createLazyComponent(() => import('./pages/services/ai-financial-trading-platform'));
const AIHealthcareAnalytics = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIHealthcareAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIHRPlatform = createLazyComponent(() => import('./pages/services/ai-hr-platform'));
const AIIoTEdgeComputing = createLazyComponent(() => import('./pages/services/ai-iot-edge-computing-platform'));
const AIMarketingAutomation = createLazyComponent(() => import('./pages/services/ai-marketing-automation'));
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/ai-powered-seo'));
const AIPredictiveMaintenance = createLazyComponent(() => import('./pages/services/ai-predictive-maintenance'));
const AIProjectManagement = createLazyComponent(() => import('./pages/services/ai-project-management-platform'));
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization'));
const AISupplyChainOptimizationPlatform = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization-platform'));
const AIRealEstateAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-real-estate-analytics-platform'));
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

// Additional New AI Services
const AIAutonomousBusinessManager = createLazyComponent(() => import('./pages/services/AI-Autonomous-Business-Manager'));
const AIQuantumComputingPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Computing-Platform'));

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
const SpaceTech = createLazyComponent(() => import('./pages/services/space-tech'));
const Sustainability = createLazyComponent(() => import('./pages/services/sustainability'));
const SustainableTechnology = createLazyComponent(() => import('./pages/services/sustainable-technology'));

// Marketplace and other pages
const Marketplace = createLazyComponent(() => import('./pages/marketplace/Marketplace'));
const MarketplaceProducts = createLazyComponent(() => import('./pages/marketplace/MarketplaceProducts'));
const MarketplaceTalent = createLazyComponent(() => import('./pages/marketplace/MarketplaceTalent'));
const MarketplaceEquipment = createLazyComponent(() => import('./pages/marketplace/MarketplaceEquipment'));
const MarketplaceServices = createLazyComponent(() => import('./pages/marketplace/MarketplaceServices'));
const Login = createLazyComponent(() => import('./pages/Login'));
const Pricing = createLazyComponent(() => import('./pages/PricingPage'));
const Security = createLazyComponent(() => import('./pages/Security'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Talent = createLazyComponent(() => import('./pages/Talent'));
const Equipment = createLazyComponent(() => import('./pages/Equipment'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Analytics = createLazyComponent(() => import('./pages/Analytics'));
const Match = createLazyComponent(() => import('./pages/Match'));
const SearchPage = createLazyComponent(() => import('./pages/SearchPage'));
const MobileLaunch = createLazyComponent(() => import('./pages/MobileLaunch'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// 2025 New Innovative Services
const AISupplyChainRiskManagement = createLazyComponent(() => import('./pages/services/AISupplyChainRiskManagement'));
const AIESGCompliancePlatform = createLazyComponent(() => import('./pages/services/AIESGCompliancePlatform'));
const AIDigitalTwinPlatform = createLazyComponent(() => import('./pages/services/AIDigitalTwinPlatform'));
const AIQuantumComputingPlatform = createLazyComponent(() => import('./pages/services/AIQuantumComputingPlatform'));
const AIEdgeComputingPlatform = createLazyComponent(() => import('./pages/services/AIEdgeComputingPlatform'));

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

const InnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2025'));
const ZionCuttingEdgeServices2029 = createLazyComponent(() => import('./pages/ZionCuttingEdgeServices2029'));

// Additional service components
const AIComplianceAssistant = createLazyComponent(() => import('./pages/services/AIComplianceAssistant'));
const AISalesCopilot = createLazyComponent(() => import('./pages/services/AISalesCopilot'));
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/AIPoweredSEO'));
const InterviewAssessmentAI = createLazyComponent(() => import('./pages/services/InterviewAssessmentAI'));
const AICustomerSupportAutomation = createLazyComponent(() => import('./pages/services/AICustomerSupportAutomation'));
const AIProjectManagement = createLazyComponent(() => import('./pages/services/AIProjectManagement'));
const AIFinancialAnalytics = createLazyComponent(() => import('./pages/services/AIFinancialAnalytics'));
const CloudDevOps = createLazyComponent(() => import('./pages/services/CloudDevOps'));
const ITInfrastructure = createLazyComponent(() => import('./pages/services/ITInfrastructure'));
const FinOpsAdvisor = createLazyComponent(() => import('./pages/services/FinOpsAdvisor'));
const CloudFinOpsOptimizer = createLazyComponent(() => import('./pages/services/CloudFinOpsOptimizer'));
const SecurityHeadersCSP = createLazyComponent(() => import('./pages/services/SecurityHeadersCSP'));
const DSRPortal = createLazyComponent(() => import('./pages/services/DSRPortal'));
const ZeroTrustNetworkAccess = createLazyComponent(() => import('./pages/services/ZeroTrustNetworkAccess'));
const SpaceTech = createLazyComponent(() => import('./pages/services/SpaceTech'));
const MicroCRM = createLazyComponent(() => import('./pages/services/MicroCRM'));
const HelpdeskPlatform = createLazyComponent(() => import('./pages/services/HelpdeskPlatform'));
const WebsiteAnalytics = createLazyComponent(() => import('./pages/services/WebsiteAnalytics'));

// Additional showcase pages
const ComprehensiveServicesShowcase2025Page = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
const ComprehensiveServicesShowcase2027Page = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2027'));
const ComprehensiveServicesLanding2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensivePricingGuide2027 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2027'));
const UltimateInnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/UltimateInnovativeServicesShowcase2025'));
const ComprehensiveServicesOverview2026 = createLazyComponent(() => import('./pages/ComprehensiveServicesOverview2026'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="text-center text-white max-w-md mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-red-400">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        {error.message || 'An unexpected error occurred'}
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
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
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes>
                  {/* Core Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/home2026" element={<Home2026 />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/blog" element={<Blog />} />

                  {/* Service Routes */}
                  <Route path="/services" element={<Services />} />
                  <Route path="/services2026" element={<Services2026 />} />
                  <Route path="/services2027" element={<Services2027 />} />
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/ai-solutions" element={<AISolutions />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  <Route path="/micro-saas-solutions" element={<MicroSAASSolutions />} />
                  <Route path="/comprehensive-services" element={<ComprehensiveServices />} />

                  {/* Additional Routes */}
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/help-center" element={<HelpCenter />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/developers" element={<Developers />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/status" element={<Status />} />

                  {/* Enhanced Services Showcase 2025 */}
                  <Route path="/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />

                  {/* 2025 Innovative Services */}
                  <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                  <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />

                  {/* Sitemap-aligned Routes */}
                  <Route path="/ai-solutions" element={<AiSolutions />} />
                  <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                  <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />

                  {/* AI Service Routes */}
                  <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                  <Route path="/services/ai-content-optimizer" element={<AIContentOptimizer />} />
                  <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
                  <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                  <Route path="/services/ai-iot-edge-computing" element={<AIIoTEdgeComputing />} />
                  <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                  <Route path="/services/ai-powered-seo" element={<AIPoweredSEO />} />
                  <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                  <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                  <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                  <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                  <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />

                  {/* New AI Services 2026 */}
                  <Route path="/services/ai-business-intelligence-platform" element={<AIBusinessIntelligencePlatform />} />
                  <Route path="/services/ai-customer-experience-platform" element={<AICustomerExperiencePlatform />} />
                  <Route path="/services/ai-supply-chain-optimization-platform" element={<AISupplyChainOptimizationPlatform />} />
                  <Route path="/services/ai-financial-risk-management-platform" element={<AIFinancialRiskManagementPlatform />} />

                  {/* New AI Services */}
                  <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                  <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                  <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                  <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                  <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                  <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />
                  <Route path="/services/ai-quantum-machine-learning" element={<AIQuantumMachineLearning />} />

                  {/* Quantum Computing Service Routes */}
                  <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                  <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
                  <Route path="/services/quantum-ai-trading-platform" element={<QuantumAITradingPlatform />} />
                  <Route path="/services/quantum-computing-as-a-service" element={<QuantumComputingAsAService />} />
                  <Route path="/services/quantum-computing-elite" element={<QuantumComputingElite />} />
                  <Route path="/services/quantum-computing-solutions" element={<QuantumComputingSolutions />} />
                  <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                  <Route path="/services/quantum-technology" element={<QuantumTechnology />} />

                  {/* Other Service Routes */}
                  <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                  <Route path="/services/digital-twin" element={<DigitalTwin />} />
                  <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                  <Route path="/services/green-it" element={<GreenIT />} />
                  <Route path="/services/healthcare-tech" element={<HealthcareTech />} />
                  <Route path="/services/incident-response-platform" element={<IncidentResponsePlatform />} />
                  <Route path="/services/interview-assessment-ai" element={<InterviewAssessmentAI />} />
                  <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                  <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
                  <Route path="/services/micro-crm" element={<MicroCRM />} />
                  <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                  <Route path="/services/space-tech" element={<SpaceTech />} />
                  <Route path="/services/sustainability" element={<Sustainability />} />
                  <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />

                  {/* Marketplace Routes */}
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/marketplace/products" element={<MarketplaceProducts />} />
                  <Route path="/marketplace/talent" element={<MarketplaceTalent />} />
                  <Route path="/marketplace/equipment" element={<MarketplaceEquipment />} />
                  <Route path="/marketplace/services" element={<MarketplaceServices />} />

                  {/* Other Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/talent" element={<Talent />} />
                  <Route path="/equipment" element={<Equipment />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/match" element={<Match />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/mobile-launch" element={<MobileLaunch />} />
                  <Route path="/sitemap" element={<Sitemap />} />

                  {/* Enhanced Components Routes */}
                  <Route path="/performance-optimizer" element={<PerformanceOptimizer />} />
                  <Route path="/accessibility-enhancer" element={<EnhancedAccessibilityEnhancer />} />
                  <Route path="/mobile-responsiveness" element={<MobileExperienceEnhancer />} />
                  <Route path="/seo-optimizer" element={<SEO />} />
                  <Route path="/floating-action" element={<FloatingActionButton />} />
                  <Route path="/advanced-analytics" element={<AdvancedAnalytics />} />
                  <Route path="/smart-notifications" element={<SmartNotificationSystem />} />
                  <Route path="/loading-spinner" element={<LoadingSpinner />} />
                  <Route path="/enhanced-loading" element={<EnhancedLoadingSpinner />} />
                  <Route path="/enhanced-navigation" element={<EnhancedNavigation />} />
                  <Route path="/enhanced-footer" element={<EnhancedFooter />} />


                  {/* 2025 Innovative Services Routes */}
                  <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                  <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                  <Route path="/zion-innovative-services-2025" element={<ZionInnovativeServices2025 />} />
                  <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />

                  {/* 2026 Innovative Services Routes */}
                  <Route path="/innovative-services-showcase-2026" element={<InnovativeServicesShowcase2026 />} />
                  <Route path="/comprehensive-pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />

                  {/* Enhanced Services Showcase 2025 */}
                  <Route path="/enhanced-services-showcase-2025" element={
                    <Suspense fallback={<div className="loading-spinner mx-auto mt-20"></div>}>
                      <EnhancedServicesShowcase2025 />
                    </Suspense>
                  } />

                  {/* Comprehensive Services Routes */}
                  <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} />
                  <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
                  <Route path="/comprehensive-services-showcase-2027" element={<ComprehensiveServicesShowcase2027Page />} />
                  <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
                  <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                  <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
                  <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />

                  {/* Innovative Services Routes */}
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
                  <Route path="/services/ai-legal-document-automation-platform" element={<AILegalDocumentAutomationPlatform />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalyticsPlatform />} />
                  <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                  <Route path="/services/ai-financial-trading-platform" element={<AIFinancialTrading />} />
                  <Route path="/services/ai-supply-chain-optimization-platform" element={<AISupplyChainOptimizationPlatform />} />
                  <Route path="/services/ai-real-estate-analytics-platform" element={<AIRealEstateAnalyticsPlatform />} />
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

                  {/* New AI Service Routes */}
                  <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                  <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                  <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                  <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />

                  {/* Additional New AI Service Routes */}
                  <Route path="/services/ai-autonomous-business-manager" element={<AIAutonomousBusinessManager />} />
                  <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />

                  {/* 2025 New Innovative Services */}
                  <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                  <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                  <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                  <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />
                  <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />

                  {/* New Innovative Services 2025 - Additional */}
                  <Route path="/services/ai-customer-journey-orchestration-platform" element={<AICustomerJourneyOrchestrationPlatform />} />
                  <Route path="/services/quantum-enhanced-cybersecurity-operations-center" element={<QuantumEnhancedCybersecurityOperationsCenter />} />
                  <Route path="/services/ai-driven-sustainability-analytics-platform" element={<AIDrivenSustainabilityAnalyticsPlatform />} />
                  <Route path="/services/autonomous-digital-twin-management-system" element={<AutonomousDigitalTwinManagementSystem />} />

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
                  <Route path="/services-showcase-2025" element={<ServicesShowcase2025 />} />

                  {/* 2029 Cutting-Edge Services */}
                  <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
                  <Route path="/cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />

                  {/* New Innovative Services */}
                  <Route path="/services/AI-Content-Creation-Studio-Pro" element={<AIContentCreationStudioPro />} />
                  <Route path="/services/Quantum-AI-Trading-Platform" element={<QuantumAITradingPlatform />} />
                  <Route path="/services/ai-business-intelligence-platform" element={<AIBusinessIntelligencePlatform />} />
                  <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalyticsPlatform />} />

                  {/* Additional Core Routes */}
                  <Route path="/events" element={<Events />} />
                  <Route path="/leadership" element={<Leadership />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/faq" element={<FAQ />} />

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

          {/* Floating Action Button */}
          <FloatingActionButton />

          {/* Enhanced Accessibility Enhancer */}
          <EnhancedAccessibilityEnhancer enabled={true} showSettings={false} />

          {/* Advanced Analytics */}
          <AdvancedAnalytics enabled={true} />

          {/* Chat Assistant */}
          <ChatAssistant
            enabled={true}
            position="bottom-right"
            theme="auto"
            language="en"
          />

          {/* Smart Notification System */}
          <SmartNotificationSystem />

          {/* New Enhanced Components */}
          <PerformanceMonitor 
            enabled={true} 
            showMetrics={false} 
            position="top-left" 
          />
          
          <AccessibilityEnhancer 
            enabled={true} 
            showPanel={false} 
            position="top-right" 
          />
          
          <SEOOptimizer 
            enabled={true} 
            showPanel={false} 
            position="bottom-right" 
          />
        </div>

      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
