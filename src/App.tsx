import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import { MainSidebar } from './components/layout/MainSidebar';
import { EnhancedFuturisticFooter } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { AppLoadingSpinner } from './components/ui/LoadingSpinner.tsx';
import { LoadingSpinner } from './components/ui/LoadingSpinner.tsx';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Lazy load only the essential, working pages
const Home = React.lazy(() => import('./pages/Home'));
const Home2026 = React.lazy(() => import('./pages/Home2026'));
const About = React.lazy(() => import('./pages/About'));
const ApiDemo = React.lazy(() => import('./components/ApiDemo'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Services2026 = React.lazy(() => import('./pages/Services2026'));
const Services2027 = React.lazy(() => import('./pages/InnovativeServices2027'));
const Services2028 = React.lazy(() => import('./pages/Services2028'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const Solutions = React.lazy(() => import('./pages/solutions'));
const Careers = React.lazy(() => import('./pages/Careers'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Help = React.lazy(() => import('./pages/Help'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Developers = React.lazy(() => import('./pages/Developers'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Status = React.lazy(() => import('./pages/Status'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// New service page imports
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const AICybersecurity = React.lazy(() => import('./pages/services/AICybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/IoTEdgeComputing'));
const AIContentCreation = React.lazy(() => import('./pages/services/AIContentCreation'));

// Additional simple pages
const Events = React.lazy(() => import('./pages/Events'));
const Help = React.lazy(() => import('./pages/Help'));
const Security = React.lazy(() => import('./pages/Security'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Team = React.lazy(() => import('./pages/Team'));
const News = React.lazy(() => import('./pages/News'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Status = React.lazy(() => import('./pages/Status'));
const Training = React.lazy(() => import('./pages/Training'));
const Community = React.lazy(() => import('./pages/Community'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Solutions = React.lazy(() => import('./pages/solutions'));

// Sitemap-aligned pages
const AiSolutions = React.lazy(() => import('./pages/AiSolutions'));
const SolutionsPage = React.lazy(() => import('./pages/Solutions'));
const SolutionsEnterprise = React.lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = React.lazy(() => import('./pages/solutions/Healthcare'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));

// Additional innovative services
const AIBlockchainIntegration = React.lazy(() => import('./pages/services/AIBlockchainIntegration'));
const AIHealthcareDiagnostics = React.lazy(() => import('./pages/services/AIHealthcareDiagnostics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/AIFinancialTrading'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));

// Additional service imports
const AIPoweredSEO = lazy(() => import('./pages/AIPoweredSEO'));
const InterviewAssessmentAI = lazy(() => import('./pages/InterviewAssessmentAI'));
const HelpdeskPlatform = lazy(() => import('./pages/HelpdeskPlatform'));
const DSRPortal = lazy(() => import('./pages/services/DSRPortal'));
const GDPRDSARPortal = lazy(() => import('./pages/services/GDPRDSARPortal'));
const SecurityHeadersCSP = lazy(() => import('./pages/services/SecurityHeadersCSP'));
const SecurityHeadersCSPManager = lazy(() => import('./pages/services/SecurityHeadersCSPManager'));
const CheckoutPerformanceOptimizer = lazy(() => import('./pages/services/CheckoutPerformanceOptimizer'));
const StatusIncidentHub = lazy(() => import('./pages/services/StatusIncidentHub'));
const AIProjectManagement = lazy(() => import('./pages/services/AIProjectManagement'));
const AICustomerSupportAutomation = lazy(() => import('./pages/services/AICustomerSupportAutomation'));
const AIFinancialAnalytics = lazy(() => import('./pages/services/AIFinancialAnalytics'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025'));
const AIWorkflowOrchestrator = lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernancePlatform = lazy(() => import('./pages/services/AIDataGovernancePlatform'));
const AICustomerExperienceAnalytics = lazy(() => import('./pages/services/AICustomerExperienceAnalytics'));
const AIFinancialRiskManagement = lazy(() => import('./pages/services/AIFinancialRiskManagement'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AIContentMarketingSuite = lazy(() => import('./pages/services/AIContentMarketingSuite'));
const AIQuantumHybridPlatform = lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
const AICybersecurityPlatform = lazy(() => import('./pages/services/AICybersecurityPlatform'));
const AIHealthcarePlatform = lazy(() => import('./pages/services/AIHealthcarePlatform'));

// Additional service pages
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));

// 2026 Services pages
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AIHRPlatform = React.lazy(() => import('./pages/services/ai-hr-platform'));
const SustainableTechnology = React.lazy(() => import('./pages/services/sustainable-technology'));
const AIPredictiveMaintenance = React.lazy(() => import('./pages/services/ai-predictive-maintenance'));
const QuantumMachineLearning = React.lazy(() => import('./pages/services/quantum-machine-learning'));

// New 2026 service routes
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = React.lazy(() => import('./pages/ComprehensivePricing2026'));

// 2028 Pricing
const ComprehensivePricing2028 = React.lazy(() => import('./pages/ComprehensivePricing2028'));

// Additional routes
const API = React.lazy(() => import('./pages/API'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));
const ApiDemo = React.lazy(() => import('./components/ApiDemo'));

// Service pages
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));

// 2029 Revolutionary Services
const RevolutionaryServices2029 = React.lazy(() => import('./pages/RevolutionaryServices2029'));

// Sitemap-aligned pages
const AiSolutions = React.lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = React.lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = React.lazy(() => import('./pages/solutions/Healthcare'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AISalesCopilot = React.lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));
const ReturnsManagement = React.lazy(() => import('./pages/services/ReturnsManagement'));
const EmailSequencer = React.lazy(() => import('./pages/services/EmailSequencer'));
const PodcastTranscription = React.lazy(() => import('./pages/services/PodcastTranscription'));
const MicroCRM = React.lazy(() => import('./pages/services/MicroCRM'));
const WebsiteAnalytics = React.lazy(() => import('./pages/services/WebsiteAnalytics'));
const ITHelpdesk = React.lazy(() => import('./pages/services/ITHelpdesk'));
const AffiliateTracking = React.lazy(() => import('./pages/services/AffiliateTracking'));
const MobileSurvey = React.lazy(() => import('./pages/services/MobileSurvey'));
const AIAutonomousCodeReviewer = React.lazy(() => import('./pages/services/AIAutonomousCodeReviewer'));
const ZeroTrustNetworkAccess = React.lazy(() => import('./pages/services/ZeroTrustNetworkAccess'));

// Additional new service imports
const AIPoweredSEO = React.lazy(() => import('./pages/services/AIPoweredSEO'));
const InterviewAssessmentAI = React.lazy(() => import('./pages/services/InterviewAssessmentAI'));
const HelpdeskPlatform = React.lazy(() => import('./pages/services/HelpdeskPlatform'));
const DSRPortal = React.lazy(() => import('./pages/services/DSRPortal'));
const SecurityHeadersCSP = React.lazy(() => import('./pages/services/SecurityHeadersCSP'));
// New innovative micro SAAS services
const AIProjectManager = React.lazy(() => import('./pages/services/AIProjectManager'));
const AIContentOptimizer = React.lazy(() => import('./pages/services/AIContentOptimizer'));
const AICustomerSupport = React.lazy(() => import('./pages/services/AICustomerSupport'));
const AIDataAnalytics = React.lazy(() => import('./pages/services/AIDataAnalytics'));

// New AI-powered micro SAAS service imports
const AIProjectManagement = React.lazy(() => import('./pages/services/AIProjectManagement'));
const AICustomerSupportAutomation = React.lazy(() => import('./pages/services/AICustomerSupportAutomation'));
const AIFinancialAnalytics = React.lazy(() => import('./pages/services/AIFinancialAnalytics'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AIBusinessProcessOptimizer = React.lazy(() => import('./pages/services/AIBusinessProcessOptimizer'));
const AICybersecurityThreatHunter = React.lazy(() => import('./pages/services/AICybersecurityThreatHunter'));
const AIMarketingAutomationSuite = React.lazy(() => import('./pages/services/AIMarketingAutomationSuite'));
const AIFinancialAnalyticsPlatform = React.lazy(() => import('./pages/services/AIFinancialAnalyticsPlatform'));
const AICustomerSupportAutomationService = React.lazy(() => import('./pages/services/AICustomerSupportAutomation'));
const AIProjectManagementPlatform = React.lazy(() => import('./pages/services/AIProjectManagementPlatform'));
const NewServicesShowcase2025 = React.lazy(() => import('./pages/NewServicesShowcase2025'));

// Advanced AI services imports
const AdvancedAIServicesHub = React.lazy(() => import('./components/AdvancedAIServicesHub'));
const PerformanceAnalytics = React.lazy(() => import('./components/PerformanceAnalytics'));
const EnhancedSEOManager = React.lazy(() => import('./components/EnhancedSEOManager'));
const ComprehensiveImprovements2025 = React.lazy(() => import('./pages/ComprehensiveImprovements2025'));

// New innovative AI services imports
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIContentMarketingSuite = React.lazy(() => import('./pages/services/AIContentMarketingSuite'));
const AIQuantumHybridPlatform = React.lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
const AICybersecurityPlatform = React.lazy(() => import('./pages/services/AICybersecurityPlatform'));
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/AIHealthcarePlatform'));

// Additional new innovative AI services imports
const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/AIFinancialTrading'));
const AIContentCreationSuite = React.lazy(() => import('./pages/services/AIContentCreationSuite'));

// Additional service imports
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));

// 2026 Services imports - only import existing files
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AIHRPlatform = React.lazy(() => import('./pages/services/ai-hr-platform'));
const SustainableTechnology = React.lazy(() => import('./pages/services/sustainable-technology'));
const AIPredictiveMaintenance = React.lazy(() => import('./pages/services/ai-predictive-maintenance'));
const QuantumMachineLearning = React.lazy(() => import('./pages/services/quantum-machine-learning'));

// Additional route imports
const API = React.lazy(() => import('./pages/API'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));

// Innovative services imports
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const ComprehensiveServicesShowcase2025Page = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// All imports are now handled above - no duplicates needed

// Additional Innovative Services
const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/AIFinancialTrading'));
const NewInnovativeServicesShowcase = React.lazy(() => import('./pages/NewInnovativeServicesShowcase'));

// Accessibility page
const Accessibility = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO
      title="Accessibility - Zion Tech Group"
      description="Learn about our commitment to accessibility and inclusive design."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Accessibility</h1>
      <p className="text-xl text-gray-300">We strive to meet WCAG 2.1 AA guidelines.</p>
    </div>
  </div>
);

// Not Found page
const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO
      title="Page Not Found - Zion Tech Group"
      description="The page you're looking for doesn't exist."
      noindex
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-xl text-gray-300">Please check the URL or go back to the homepage.</p>
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
            <EnhancedSEO 
              title="Zion Tech Group - Leading AI & Technology Solutions"
              description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
              keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
              ogImage="/og-image.jpg"
              canonicalUrl="https://ziontechgroup.com"
            />
            
            {/* Service Worker */}
            <ServiceWorker />
            
            {/* Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />
            
            {/* Enhanced Accessibility */}
            <EnhancedAccessibilityEnhancer enabled={true} showControls={true} />
            
            {/* Mobile Experience Enhancer */}
            <MobileExperienceEnhancer enabled={true} />
            
            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />
            
            {/* Smart Notification System */}
            <SmartNotificationSystem enabled={true} />
            
            {/* Header */}
            <AppHeader />
            
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
                    
                    {/* Basic Pages */}
                    <Route 
                      path="/about" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <About />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Services />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/contact" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Contact />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/blog" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Blog />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/careers" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Careers />
                        </motion.div>
                      } 
                    />
                    
                    {/* Service Routes */}
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    
                    {/* Revolutionary Services 2030 */}
                    <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                    
                    {/* 2029 Innovative Services Showcase */}
                    <Route path="/innovative-services-2029" element={<InnovativeServicesShowcase2029 />} />
                    
                    {/* 2029 Comprehensive Services Showcase */}
                    <Route path="/comprehensive-services-2029" element={<ComprehensiveServicesShowcase2029 />} />
                    
                    {/* Comprehensive Service Routes */}
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                    <Route path="/innovative-services-landing-2025" element={<InnovativeServicesLanding2025 />} />
                    <Route path="/new-innovative-services-2025" element={<NewServicesShowcase2025 />} />
                    <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
                    
                    {/* Service Detail Routes */}
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/ai-auto-email-responder" element={<AIAutoEmailResponder />} />
                    <Route path="/services/customer-feedback-surveys" element={<CustomerFeedbackSurveys />} />
                    <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} />
                    <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
                    <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                    <Route path="/services/returns-management" element={<ReturnsManagement />} />
                    <Route path="/services/email-sequencer" element={<EmailSequencer />} />
                    <Route path="/services/podcast-transcription" element={<PodcastTranscription />} />
                    <Route path="/services/micro-crm" element={<MicroCRM />} />
                    <Route path="/services/website-analytics" element={<WebsiteAnalytics />} />
                    <Route path="/services/it-helpdesk" element={<ITHelpdesk />} />
                    <Route path="/services/affiliate-tracking" element={<AffiliateTracking />} />
                    <Route path="/services/mobile-survey" element={<MobileSurvey />} />
                    <Route path="/services/ai-autonomous-code-reviewer" element={<AIAutonomousCodeReviewer />} />
                    <Route path="/services/zero-trust-network-access" element={<ZeroTrustNetworkAccess />} />
                    <Route path="/services/ai-powered-seo" element={<AIPoweredSEO />} />
                    <Route path="/services/interview-assessment-ai" element={<InterviewAssessmentAI />} />
                    <Route path="/services/helpdesk-platform" element={<HelpdeskPlatform />} />
                    <Route path="/services/dsr-portal" element={<DSRPortal />} />
                    <Route path="/services/gdpr-dsar-portal" element={<GDPRDSARPortal />} />
                    <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                    <Route path="/services/security-headers-csp-manager" element={<SecurityHeadersCSPManager />} />
                    <Route path="/services/checkout-performance-optimizer" element={<CheckoutPerformanceOptimizer />} />
                    <Route path="/services/status-incident-hub" element={<StatusIncidentHub />} />
                    <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                    <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                    <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} />
                    <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                    <Route path="/services/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />
                    <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                    <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                    <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                    
                    {/* AI Service Routes */}
                    <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
<Route path="/services/digital-transformation" element={<DigitalTransformation />} />
<Route path="/services/ai-business-process-optimization" element={<AIBusinessProcessOptimization />} />
<Route path="/services/ai-customer-success-platform" element={<AICustomerSuccessPlatform />} />
                    
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
                    
                    {/* Additional Pages */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/it-consulting" element={<ITConsulting />} />
                    <Route path="/space-tech" element={<SpaceTech />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    
                    {/* Sitemap XML Route */}
                    <Route path="/sitemap.xml" element={<Sitemap />} />
                    
                    {/* Catch-all route for 404 */}
                    <Route 
                      path="*" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="min-h-screen flex items-center justify-center">
                            <div className="text-center">
                              <h1 className="text-4xl font-bold text-zion-slate-dark mb-4">404 - Page Not Found</h1>
                              <p className="text-zion-slate mb-6">The page you're looking for doesn't exist.</p>
                              <a 
                                href="/" 
                                className="inline-flex items-center px-6 py-3 bg-zion-blue text-white font-semibold rounded-lg hover:bg-zion-blue-dark transition-colors"
                              >
                                Go Home
                              </a>
                            </div>
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
            
            {/* Chat Assistant */}
            <ChatAssistant 
              enabled={true} 
              position="bottom-right"
              theme="auto"
              language="en"
            />
            
            {/* Toast Container */}
            <ToastContainer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}