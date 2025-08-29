import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Enhanced lazy loading with preloading hints
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
const Home2026 = createLazyComponent(() => import('./pages/Home2026'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const News = createLazyComponent(() => import('./pages/News'));
const Press = createLazyComponent(() => import('./pages/Press'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Blog = createLazyComponent(() => import('./pages/Blog'));

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
const Training = createLazyComponent(() => import('./pages/Training'));
const Support = createLazyComponent(() => import('./pages/Support'));
const Events = createLazyComponent(() => import('./pages/Events'));
const Security = createLazyComponent(() => import('./pages/Security'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));
const Talent = createLazyComponent(() => import('./pages/Talent'));
const Equipment = createLazyComponent(() => import('./pages/Equipment'));
const GreenIT = createLazyComponent(() => import('./pages/GreenIT'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const MarketplaceProducts = createLazyComponent(() => import('./pages/marketplace/Products'));
const MarketplaceTalent = createLazyComponent(() => import('./pages/marketplace/Talent'));
const MarketplaceEquipment = createLazyComponent(() => import('./pages/marketplace/Equipment'));
const MarketplaceServices = createLazyComponent(() => import('./pages/marketplace/Services'));
const Login = createLazyComponent(() => import('./pages/Login'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const SearchPage = createLazyComponent(() => import('./pages/SearchPage'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const ResearchDevelopment = createLazyComponent(() => import('./pages/research-development'));
const MobileLaunch = createLazyComponent(() => import('./pages/MobileLaunch'));
const Analytics = createLazyComponent(() => import('./pages/Analytics'));
const Match = createLazyComponent(() => import('./pages/Match'));
const Solutions = createLazyComponent(() => import('./pages/solutions'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// Service pages - only import existing ones
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const AISalesCopilot = lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = lazy(() => import('./pages/services/FinOpsAdvisor'));
const ReturnsManagement = lazy(() => import('./pages/services/ReturnsManagement'));
const EmailSequencer = lazy(() => import('./pages/services/EmailSequencer'));
const PodcastTranscription = lazy(() => import('./pages/services/PodcastTranscription'));
const MicroCRM = lazy(() => import('./pages/services/MicroCRM'));

// New real service pages
const WebsiteAnalytics = lazy(() => import('./pages/services/WebsiteAnalytics'));
const ITHelpdesk = lazy(() => import('./pages/services/ITHelpdesk'));
const AffiliateTracking = lazy(() => import('./pages/services/AffiliateTracking'));
const MobileSurvey = lazy(() => import('./pages/services/MobileSurvey'));

// Additional innovative services
const AIAutonomousCodeReviewer = lazy(() => import('./pages/services/AIAutonomousCodeReviewer'));
const ZeroTrustNetworkAccess = lazy(() => import('./pages/services/ZeroTrustNetworkAccess'));

// Additional new service pages
const AIPoweredSEO = lazy(() => import('./pages/services/AIPoweredSEO'));
const InterviewAssessmentAI = lazy(() => import('./pages/services/InterviewAssessmentAI'));
const HelpdeskPlatform = lazy(() => import('./pages/services/HelpdeskPlatform'));
const DSRPortal = lazy(() => import('./pages/services/DSRPortal'));
const SecurityHeadersCSP = lazy(() => import('./pages/services/SecurityHeadersCSP'));

// New AI-powered micro SAAS services
const AIProjectManagement = lazy(() => import('./pages/services/AIProjectManagement'));
const AICustomerSupportAutomation = lazy(() => import('./pages/services/AICustomerSupportAutomation'));
const AIFinancialAnalytics = lazy(() => import('./pages/services/AIFinancialAnalytics'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025'));

// 2025 New Innovative Services
const AIWorkflowOrchestrator = lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernancePlatform = lazy(() => import('./pages/services/AIDataGovernancePlatform'));
const AICustomerExperienceAnalytics = lazy(() => import('./pages/services/AICustomerExperienceAnalytics'));
const AISupplyChainOptimization = lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIFinancialRiskManagement = lazy(() => import('./pages/services/AIFinancialRiskManagement'));
const NewInnovativeServices2025 = lazy(() => import('./pages/NewInnovativeServices2025'));

// Comprehensive improvements components
const AdvancedAIServicesHub = lazy(() => import('./components/AdvancedAIServicesHub'));
const PerformanceAnalytics = lazy(() => import('./components/PerformanceAnalytics'));
const EnhancedSEOManager = lazy(() => import('./components/EnhancedSEOManager'));
const ComprehensiveImprovements2025 = lazy(() => import('./pages/ComprehensiveImprovements2025'));

// New innovative AI services
const AIAutonomousResearchAssistant = lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AIContentMarketingSuite = lazy(() => import('./pages/services/AIContentMarketingSuite'));
const AIQuantumHybridPlatform = lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
const AICybersecurityPlatform = lazy(() => import('./pages/services/AICybersecurityPlatform'));
const AIHealthcarePlatform = lazy(() => import('./pages/services/AIHealthcarePlatform'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));

// 2025 Innovative Services
const InnovativeServicesLanding2025 = lazy(() => import('./pages/InnovativeServicesLanding2025'));
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// Additional missing imports
const AILegalDocumentAutomation = lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = lazy(() => import('./pages/services/AIFinancialTrading'));
const AIContentCreationSuite = lazy(() => import('./pages/services/AIContentCreationSuite'));
const AICybersecurity = lazy(() => import('./pages/services/ai-cybersecurity'));
const AIHRPlatform = lazy(() => import('./pages/services/ai-hr-platform'));
const SustainableTechnology = lazy(() => import('./pages/services/sustainable-technology'));
const AIPredictiveMaintenance = lazy(() => import('./pages/services/ai-predictive-maintenance'));
const QuantumMachineLearning = lazy(() => import('./pages/services/quantum-machine-learning'));
const AIContentCreation = lazy(() => import('./pages/services/ai-content-creation'));

// New innovative AI services
const AIQuantumComputingPlatform = lazy(() => import('./pages/services/AIQuantumComputingPlatform'));
const AIAutonomousVehiclePlatform = lazy(() => import('./pages/services/AIAutonomousVehiclePlatform'));
const AIMetaverseDevelopmentPlatform = lazy(() => import('./pages/services/AIMetaverseDevelopmentPlatform'));

// Comprehensive services imports
const ComprehensiveServicesShowcase2027Page = lazy(() => import('./pages/ComprehensiveServicesShowcase2027'));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensivePricing2026 = lazy(() => import('./pages/ComprehensivePricing2026'));
const ComprehensivePricing2028 = lazy(() => import('./pages/ComprehensivePricing2028'));

// Innovative services imports
const InnovativeServicesShowcase2025 = lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const UltimateInnovativeServicesShowcase2025 = lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025'));
const UltimateServicesShowcase2026 = lazy(() => import('./pages/UltimateServicesShowcase2026'));

// Additional service imports
const SpaceTech = lazy(() => import('./pages/SpaceTech'));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'));
const QuantumComputing = lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = lazy(() => import('./pages/services/iot-edge-computing'));
const DigitalTwin = lazy(() => import('./pages/services/DigitalTwin'));
const ITConsulting = lazy(() => import('./pages/ITConsulting'));

// Service showcase pages
const UltimateServicesShowcase2025 = React.lazy(() => import('./pages/UltimateServicesShowcase2025'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// New innovative AI services
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernancePlatform = React.lazy(() => import('./pages/services/AIDataGovernancePlatform'));
const AICustomerExperienceAnalytics = React.lazy(() => import('./pages/services/AICustomerExperienceAnalytics'));
const AIFinancialRiskManagement = React.lazy(() => import('./pages/services/AIFinancialRiskManagement'));
const AIHRTalentAcquisition = React.lazy(() => import('./pages/services/AIHRTalentAcquisition'));
const AIIoTEdgeComputing = React.lazy(() => import('./pages/services/AIIoTEdgeComputing'));
const AISustainableTechnology = React.lazy(() => import('./pages/services/AISustainableTechnology'));
const AIQuantumMachineLearning = React.lazy(() => import('./pages/services/AIQuantumMachineLearning'));

// Additional pages
const API = createLazyComponent(() => import('./pages/API'));
const DeveloperPortal = createLazyComponent(() => import('./pages/DeveloperPortal'));

// Accessibility page
const Accessibility = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

// Enhanced loading component
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-cyan-400/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse">Loading Zion Tech...</div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
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
            
            {/* Mobile Experience Enhancer */}
            <MobileExperienceEnhancer enabled={true} />
            
            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} />
            
            {/* Header */}
            <AppHeader />
            
            {/* Main Content */}
            <main className="flex-1">
              <Suspense fallback={<EnhancedLoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/home2026" element={<Home2026 />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    <Route path="/talent" element={<Talent />} />
                    <Route path="/equipment" element={<Equipment />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/marketplace/products" element={<MarketplaceProducts />} />
                    <Route path="/marketplace/talent" element={<MarketplaceTalent />} />
                    <Route path="/marketplace/equipment" element={<MarketplaceEquipment />} />
                    <Route path="/marketplace/services" element={<MarketplaceServices />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services2026" element={<Services2026 />} />
                    <Route path="/services2027" element={<Services2027 />} />
                    
                    {/* Service Routes */}
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                    <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
                    <Route path="/mobile-launch" element={<MobileLaunch />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/match" element={<Match />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/developers" element={<Developers />} />
                    <Route path="/research-development" element={<ResearchDevelopment />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/green-it" element={<GreenIT />} />
                    <Route path="/space-tech" element={<Accessibility />} />
                    <Route path="/quantum-technology" element={<Accessibility />} />
                    <Route path="/financial-solutions" element={<Accessibility />} />
                    <Route path="/mobile" element={<Accessibility />} />
                    
                    {/* Additional Service Routes */}
                    <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
                    <Route path="/ai-solutions" element={<AiSolutions />} />
                    <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                    <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />
                    
                    {/* 2025 Innovative Services Routes */}
                    <Route path="/innovative-services-landing-2025" element={<InnovativeServicesLanding2025 />} />
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                    
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
                    
                    {/* Additional Service Routes */}
                    <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                    <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                    <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                    <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} />
                    <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                    <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                    <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
                    <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                    <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                    <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                    
                    {/* 2025 New Innovative Service Routes */}
                    <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                    <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                    <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                    <Route path="/new-innovative-services-2025" element={<NewInnovativeServices2025 />} />
                    
                    {/* Additional Pages */}
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/it-consulting" element={<ITConsulting />} />
                    
                    {/* 2029 Cutting-Edge Services */}
                    <Route path="/cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
                    
                    {/* Additional routes */}
                    <Route path="/api" element={<API />} />
                    <Route path="/developer-portal" element={<DeveloperPortal />} />
                    
                    {/* Innovative services showcase */}
                    <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase2025 />} />
                    
                    {/* New 2025 service routes */}
                    <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
                    <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
                    <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
                    <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                    <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                    
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