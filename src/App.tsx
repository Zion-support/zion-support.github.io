import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/MicroSAASSolutions'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));

// New pages
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const PricingGuide = React.lazy(() => import('./pages/PricingGuide'));
const Help = React.lazy(() => import('./pages/Help'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Team = React.lazy(() => import('./pages/Team'));
const Press = React.lazy(() => import('./pages/Press'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Signup = React.lazy(() => import('./pages/Signup'));

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Contact = lazy(() => import('./pages/contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Team = lazy(() => import('./pages/Team'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));
const Resources = lazy(() => import('./pages/Resources'));

// Additional missing page imports
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const Partners = lazy(() => import('./pages/Partners'));
const News = lazy(() => import('./pages/News'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// 2026 AI Marketplace Services
const Zion2026AIMarketplaceShowcase = lazy(() => import('./pages/Zion2026AIMarketplaceShowcase'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const APIDocs = React.lazy(() => import('./pages/APIDocs'));
const Developers = React.lazy(() => import('./pages/Developers'));

// Core pages
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const ResearchDevelopment = createLazyComponent(() => import('./pages/ResearchDevelopment'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/AIHealthcarePlatform'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));

// Newly added concrete micro SaaS/AI services
const AiLeadScoring = React.lazy(() => import('./pages/services/AiLeadScoring'));
const WebsiteAiChatbot = React.lazy(() => import('./pages/services/WebsiteAiChatbot'));
const RagSearch = React.lazy(() => import('./pages/services/RagSearch'));
const MlopsPipeline = React.lazy(() => import('./pages/services/MlopsPipeline'));
const EcommercePersonalization = React.lazy(() => import('./pages/services/EcommercePersonalization'));
const ReturnsManagementSaaS = React.lazy(() => import('./pages/services/ReturnsManagementSaaS'));

// New pages we created
const Enterprise = createLazyComponent(() => import('./pages/Enterprise'));
const IndustrySolutions = createLazyComponent(() => import('./pages/IndustrySolutions'));
const DigitalTransformation = createLazyComponent(() => import('./pages/DigitalTransformation'));
const CloudSolutions = createLazyComponent(() => import('./pages/CloudSolutions'));
const EmergingTech = createLazyComponent(() => import('./pages/EmergingTech'));
const Healthcare = createLazyComponent(() => import('./pages/Healthcare'));
const GovernmentSolutions = createLazyComponent(() => import('./pages/GovernmentSolutions'));
const RetailSolutions = createLazyComponent(() => import('./pages/RetailSolutions'));
const Leadership = createLazyComponent(() => import('./pages/Leadership'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const News = createLazyComponent(() => import('./pages/News'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Support = createLazyComponent(() => import('./pages/Support'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Community = createLazyComponent(() => import('./pages/Community'));
const Press = createLazyComponent(() => import('./pages/Press'));
const Developer = createLazyComponent(() => import('./pages/Developer'));
const Docs = createLazyComponent(() => import('./pages/Docs'));

// New services added in this iteration
const APIMonitoringSaaS = React.lazy(() => import('./pages/services/APIMonitoringSaaS'));
const GDPRCookieCompliance = React.lazy(() => import('./pages/services/GDPRCookieCompliance'));
const AIProofreadingStudio = React.lazy(() => import('./pages/services/AIProofreadingStudio'));

// Catalog page
const ServicesCatalog = React.lazy(() => import('./pages/ServicesCatalog'));

// Additional service pages
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));
const GreenIT = React.lazy(() => import('./pages/services/GreenIT'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const SpaceTech = React.lazy(() => import('./pages/services/SpaceTech'));

// New AI Services
const AICybersecuritySuite = React.lazy(() => import('./pages/services/AICybersecuritySuite'));
const QuantumAIPlatform = React.lazy(() => import('./pages/services/QuantumAIPlatform'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/AIDataGovernance'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));
const IncidentResponsePlatform = React.lazy(() => import('./pages/services/IncidentResponsePlatform'));

// Additional innovative services
const AIBusinessIntelligencePlatform = React.lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/AIFinancialTradingPlatform'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));
const Status = React.lazy(() => import('./pages/Status'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Simple placeholder pages for missing ones
const Partners = React.lazy(() => import('./pages/Partners'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));

const Careers = React.lazy(() => import('./pages/Careers'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));

// Company/resources simple pages (declared above in New pages section)

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">About Zion Tech Group</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          Zion Tech Group is a leading technology solutions provider specializing in AI, cybersecurity, 
          cloud infrastructure, and digital transformation services. We help businesses leverage cutting-edge 
          technology to drive innovation and growth.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our team of experts combines deep technical knowledge with industry expertise to deliver 
          customized solutions that meet the unique needs of each client.
        </p>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const ServiceDetailPage = ({ title, description }: { title: string; description: string }) => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">{title}</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Advanced technology implementation</li>
            <li>Expert consultation and support</li>
            <li>Customized solutions for your business</li>
            <li>24/7 monitoring and maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Go Home
      </Link>
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
              <AnimatePresence mode="wait">
                <Routes>
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
                  <Route 
                    path="/pricing" 
                    element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Pricing />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/team" 
                    element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Team />
                      </motion.div>
                    } 
                  />
                  
                  {/* Service Routes */}
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  
                  {/* Additional Routes */}
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/help" element={<HelpCenter />} />
                  <Route path="/emerging-tech" element={<EmergingTech />} />
                  <Route path="/resources" element={<Resources />} />
                  
                  {/* New sitemap routes */}
                  <Route path="/ai-solutions" element={<AiSolutions />} />
                  <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                  <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />
                  
                  {/* Service Routes - only for existing pages */}
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
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
                  <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />
                  
                  {/* New innovative AI services */}
                  <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                  <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                  <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} />
                  <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                  <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
                  <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                  
                  {/* Additional new innovative AI services */}
                  <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                  <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} />
                  
                  {/* New 2025 service routes */}
                  <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
                  <Route path="/ultimate-services-showcase-2025" element={<UltimateServicesShowcase2025 />} />
                  <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                  <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} />
                  <Route path="/services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} />
                  
                  {/* New 2026 service routes */}
                  <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
                  <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
                  <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
                  <Route path="/pricing-2026" element={<ComprehensivePricing2026 />} />
                  
                  {/* 2028 Pricing */}
                  <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />
                  <Route path="/pricing-2028" element={<ComprehensivePricing2028 />} />
                  
                  {/* 2028 Comprehensive Services */}
                  <Route path="/comprehensive-services-2028" element={<ComprehensiveServicesLanding2028 />} />
                  <Route path="/services-2028" element={<ComprehensiveServicesLanding2028 />} />
                  
                  {/* Additional service routes */}
                  <Route path="/services/digital-twin" element={<DigitalTwin />} />
                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  <Route path="/services/data-analytics" element={<DataAnalytics />} />
                  <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                  <Route path="/services/ai" element={<AiSolutions />} />
                  
                  {/* 2026 Services routes */}
                  <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                  <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                  <Route path="/services/ai-iot-edge-computing" element={<IoTEdgeComputing />} />
                  <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                  <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                  <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
                  <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                  <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                  
                  {/* Additional innovative AI services */}
                  <Route path="/services/ai-autonomous-supply-chain" element={<AIAutonomousSupplyChain />} />
                  <Route path="/services/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
                  <Route path="/services/ai-autonomous-threat-intelligence" element={<AIAutonomousThreatIntelligence />} />
                  
                  {/* Additional innovative AI service routes */}
                  <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                  <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                  <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                  <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                  
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
          
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;