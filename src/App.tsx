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
import LoadingSpinner from './components/ui/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
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

// Enhanced components
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const Community = React.lazy(() => import('./pages/Community'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));

// New pages that we know exist
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

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

// Enhanced Services Showcase 2025
const EnhancedServicesShowcase2025 = lazy(() => import('./pages/EnhancedServicesShowcase2025'));

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
const AIQuantumFinancialTrading = lazy(() => import('./pages/services/AIQuantumFinancialTrading'));
const AIPredictiveMaintenance = lazy(() => import('./pages/services/AIPredictiveMaintenance'));
// const QuantumMachineLearning = lazy(() => import('./pages/services/QuantumMachineLearning'));
const AIAutonomousSupplyChain = lazy(() => import('./pages/services/AIAutonomousSupplyChain'));
const AICybersecurityThreatIntelligence = lazy(() => import('./pages/services/AICybersecurityThreatIntelligence'));
// const AIAutonomousThreatIntelligence = lazy(() => import('./pages/services/AIAutonomousThreatIntelligence'));
const AIAutonomousBusinessIntelligence = lazy(() => import('./pages/services/AIAutonomousBusinessIntelligence'));
const AIQuantumComputingPlatform = lazy(() => import('./pages/services/AIQuantumComputingPlatform'));
const AICodeReviewSecurityScanner = lazy(() => import('./pages/services/AICodeReviewSecurityScanner'));
const AIDevOpsAutomationPlatform = lazy(() => import('./pages/services/AIDevOpsAutomationPlatform'));
const AIBusinessIntelligenceAnalytics = lazy(() => import('./pages/services/AIBusinessIntelligenceAnalytics'));
const AICustomerExperienceSupport = lazy(() => import('./pages/services/AICustomerExperienceSupport'));
const AIMarketingAutomationPersonalization = lazy(() => import('./pages/services/AIMarketingAutomationPersonalization'));
const ComprehensiveServicesShowcase2029 = lazy(() => import('./pages/ComprehensiveServicesShowcase2029'));
const ComprehensiveServicesShowcase2031 = lazy(() => import('./pages/ComprehensiveServicesShowcase2031'));
const ITConsulting = lazy(() => import('./pages/ITConsulting'));
const SpaceTech = lazy(() => import('./pages/SpaceTech'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const ZionTechGroup2025ComprehensiveShowcase = lazy(() => import('./pages/ZionTechGroup2025ComprehensiveShowcase'));

// Additional missing imports for existing routes
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));
const Team = lazy(() => import('./pages/Team'));
const News = lazy(() => import('./pages/News'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));
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

// AI Service pages
const AILegalDocumentAutomation = createLazyComponent(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = createLazyComponent(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = createLazyComponent(() => import('./pages/services/AIFinancialTrading'));
const AIContentCreationSuite = createLazyComponent(() => import('./pages/services/AIContentCreationSuite'));
const AIWorkflowOrchestrator = createLazyComponent(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernancePlatform = createLazyComponent(() => import('./pages/services/AIDataGovernancePlatform'));
const AICustomerExperienceAnalytics = createLazyComponent(() => import('./pages/services/AICustomerExperienceAnalytics'));
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AISupplyChainOptimization'));
const AIFinancialRiskManagement = createLazyComponent(() => import('./pages/services/AIFinancialRiskManagement'));
const AIHRTalentAcquisition = createLazyComponent(() => import('./pages/services/AIHRTalentAcquisition'));
const AIIoTEdgeComputing = createLazyComponent(() => import('./pages/services/AIIoTEdgeComputing'));
const AIPredictiveMaintenance = createLazyComponent(() => import('./pages/services/AIPredictiveMaintenance'));
const AISustainableTechnology = createLazyComponent(() => import('./pages/services/AISustainableTechnology'));
const AIQuantumMachineLearning = createLazyComponent(() => import('./pages/services/AIQuantumMachineLearning'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AICybersecurity'));
const AIHRPlatform = createLazyComponent(() => import('./pages/services/AIHRPlatform'));
const SustainableTechnology = createLazyComponent(() => import('./pages/services/sustainable-technology'));
const QuantumMachineLearning = createLazyComponent(() => import('./pages/services/quantum-machine-learning'));
const AIContentCreation = createLazyComponent(() => import('./pages/services/ai-content-creation'));
const IoTEdgeComputing = createLazyComponent(() => import('./pages/services/iot-edge-computing'));
const QuantumComputing = createLazyComponent(() => import('./pages/services/quantum-computing'));
const DigitalTwin = createLazyComponent(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = createLazyComponent(() => import('./pages/services/AIDataAnalytics'));
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

// 2025 Innovative Services
const InnovativeServicesLanding2025 = createLazyComponent(() => import('./pages/InnovativeServicesLanding2025'));
const ComprehensivePricingGuide2025 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2025'));

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
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
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
const NewServicesShowcase2025 = createLazyComponent(() => import('./pages/NewServicesShowcase2025'));

// Error fallback component
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

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          <Sidebar />
          
          <main className="flex-1 lg:ml-80">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
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
                <Route path="/search" element={<SearchPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/community" element={<Community />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/team" element={<Team />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<HelpCenter />} />
                
                {/* New pricing guide route */}
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                
                {/* Service Routes */}
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
                
                {/* New sitemap routes */}
                <Route path="/ai-solutions" element={<AiSolutions />} />
                <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />
                
                {/* Service routes */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
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
                <Route path="/services/returns-management" element={<ReturnsManagement />} />
                <Route path="/services/email-sequencer" element={<EmailSequencer />} />
                <Route path="/services/podcast-transcription" element={<PodcastTranscription />} />
                <Route path="/services/micro-crm" element={<MicroCRM />} />
                <Route path="/services/website-analytics" element={<WebsiteAnalytics />} />
                <Route path="/services/it-helpdesk" element={<ITHelpdesk />} />
                <Route path="/services/affiliate-tracking" element={<AffiliateTracking />} />
                <Route path="/services/mobile-survey" element={<MobileSurvey />} />
                
                {/* Additional new service routes */}
                <Route path="/services/ai-seo" element={<AIPoweredSEO />} />
                <Route path="/services/interview-assessment" element={<InterviewAssessmentAI />} />
                <Route path="/services/helpdesk" element={<HelpdeskPlatform />} />
                <Route path="/services/dsr-portal" element={<DSRPortal />} />
                <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                
                {/* New AI-powered micro SAAS service routes */}
                <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} />
                <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                
                {/* Additional innovative AI services */}
                <Route path="/services/ai-quantum-financial-trading" element={<AIQuantumFinancialTrading />} />
                <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                {/* <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} /> */}
                
                {/* Additional innovative AI services */}
                <Route path="/services/ai-autonomous-supply-chain" element={<AIAutonomousSupplyChain />} />
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
                {/* <Route path="/services/ai-autonomous-threat-intelligence" element={<AIAutonomousThreatIntelligence />} /> */}
                
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                
                {/* New innovative micro SAAS service routes */}
                <Route path="/services/ai-customer-feedback-analytics" element={<AICustomerFeedbackAnalytics />} />
                <Route path="/services/ai-inventory-management" element={<AIInventoryManagement />} />
                <Route path="/services/ai-employee-performance-analytics" element={<AIEmployeePerformanceAnalytics />} />
                <Route path="/services/ai-financial-planning" element={<AIFinancialPlanning />} />
                
                {/* Advanced AI service routes */}
                <Route path="/services/ai-autonomous-business-intelligence" element={<AIAutonomousBusinessIntelligence />} />
                <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />
                
                {/* Service Showcase Pages */}
                <Route path="/new-innovative-services-2025" element={<NewInnovativeServices2025 />} />
                <Route path="/comprehensive-improvements-2025" element={<ComprehensiveImprovements2025 />} />
                
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-code-review-security-scanner" element={<AICodeReviewSecurityScanner />} />
                <Route path="/services/ai-devops-automation-platform" element={<AIDevOpsAutomationPlatform />} />
                <Route path="/services/ai-business-intelligence-analytics" element={<AIBusinessIntelligenceAnalytics />} />
                <Route path="/services/ai-customer-experience-support" element={<AICustomerExperienceSupport />} />
                <Route path="/services/ai-marketing-automation-personalization" element={<AIMarketingAutomationPersonalization />} />
                
                {/* 2029 Services Showcase */}
                <Route path="/comprehensive-services-showcase-2029" element={<ComprehensiveServicesShowcase2029 />} />
                <Route path="/2029-comprehensive-services-showcase" element={<ComprehensiveServicesShowcase2029 />} />
                
                {/* 2031 Comprehensive Services Showcase */}
                <Route path="/comprehensive-services-showcase-2031" element={<ComprehensiveServicesShowcase2031 />} />
                <Route path="/services-2031" element={<ComprehensiveServicesShowcase2031 />} />
                <Route path="/ai-services-2031" element={<ComprehensiveServicesShowcase2031 />} />
                <Route path="/micro-saas-2031" element={<ComprehensiveServicesShowcase2031 />} />
                
                {/* Additional Pages */}
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/it-consulting" element={<ITConsulting />} />
                <Route path="/space-tech" element={<SpaceTech />} />
                <Route path="/sitemap" element={<Sitemap />} />
                
                {/* Enhanced Services Showcase 2025 */}
                <Route path="/services/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />
                
                {/* Zion Tech Group 2025 Comprehensive Showcase */}
                <Route path="/zion-tech-group-2025-comprehensive-showcase" element={<ZionTechGroup2025ComprehensiveShowcase />} />
                
                {/* 404 Page */}
                <Route path="*" element={<div>Page not found</div>} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          {/* <PerformanceOptimizer /> */}
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;