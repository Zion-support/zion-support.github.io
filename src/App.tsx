import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { MainSidebar } from './components/MainSidebar';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

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
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Signup = React.lazy(() => import('./pages/Signup'));
// Removed missing page import: ZionHireAI
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

// New service page imports (use canonical kebab-case paths that exist)
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));

// Additional simple pages
const Events = React.lazy(() => import('./pages/Events'));
const Security = React.lazy(() => import('./pages/Security'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Legal = React.lazy(() => import('./pages/Legal'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Support and onboarding pages
const GetStarted = createLazyComponent(() => import('./pages/GetStarted'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Support = createLazyComponent(() => import('./pages/Support'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Status = createLazyComponent(() => import('./pages/Status'));

// New AI Services 2025 - Combined from both versions
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/ai-autonomous-research-assistant'));
const AIFinancialTradingPlatform = createLazyComponent(() => import('./pages/services/ai-financial-trading-platform'));
const BlockchainEnterpriseSolutions = createLazyComponent(() => import('./pages/services/blockchain-enterprise-solutions'));

// New pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2027 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2027'));
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/revolutionary-services-2030'));
const PricingGuide2025 = React.lazy(() => import('./pages/pricing-guide-2025'));
const Developers = React.lazy(() => import('./pages/developers'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/digital-twin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/ai-business-intelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const Cybersecurity = React.lazy(() => import('./pages/services/cybersecurity'));

// Additional service pages that exist
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const Blockchain = React.lazy(() => import('./pages/services/Blockchain'));
const SpaceTech = React.lazy(() => import('./pages/services/space-tech'));
const GreenIT = React.lazy(() => import('./pages/services/green-it'));
const AIWorkflowAutomation = React.lazy(() => import('./pages/services/ai-workflow-automation'));
const AICustomerSupport = React.lazy(() => import('./pages/services/ai-customer-support'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/ai-marketing-automation'));
const AIProjectManagement = React.lazy(() => import('./pages/services/ai-project-management'));
const AIHRPlatform = React.lazy(() => import('./pages/services/ai-hr-platform'));
const AIPredictiveMaintenance = React.lazy(() => import('./pages/services/ai-predictive-maintenance'));
const AIQuantumHybridPlatform = React.lazy(() => import('./pages/services/ai-quantum-hybrid-platform'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/ai-workflow-orchestrator'));
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/ai-autonomous-research-assistant'));
const AIPoweredSEO = React.lazy(() => import('./pages/services/ai-powered-seo'));
const Cybersecurity = React.lazy(() => import('./pages/services/cybersecurity'));
const Cloud = React.lazy(() => import('./pages/services/Cloud'));
const Infrastructure = React.lazy(() => import('./pages/services/Infrastructure'));
const CustomDevelopment = React.lazy(() => import('./pages/services/CustomDevelopment'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const IncidentResponsePlatform = React.lazy(() => import('./pages/services/incident-response-platform'));
const InterviewAssessmentAI = React.lazy(() => import('./pages/services/interview-assessment-ai'));
const MicroCRM = React.lazy(() => import('./pages/services/micro-crm'));
const PodcastTranscription = React.lazy(() => import('./pages/services/PodcastTranscription'));
const PriceIntelligenceService = React.lazy(() => import('./pages/services/PriceIntelligenceService'));
const QuantumAITradingPlatform = React.lazy(() => import('./pages/services/QuantumAITradingPlatform'));
const QuantumComputingElite = React.lazy(() => import('./pages/services/QuantumComputingElite'));
const QuantumComputingSolutions = React.lazy(() => import('./pages/services/quantum-computing-solutions'));
const QuantumMachineLearning = React.lazy(() => import('./pages/services/quantum-machine-learning'));
const RemoteMeetingSummarizer = React.lazy(() => import('./pages/services/RemoteMeetingSummarizer'));
const ReturnsManagement = React.lazy(() => import('./pages/services/ReturnsManagement'));
const SecurityHeadersCSP = React.lazy(() => import('./pages/services/SecurityHeadersCSP'));
const SecurityHeadersCSPManager = React.lazy(() => import('./pages/services/SecurityHeadersCSPManager'));
const SEOAuditor = React.lazy(() => import('./pages/services/SEOAuditor'));
const StatusIncidentHub = React.lazy(() => import('./pages/services/StatusIncidentHub'));
const WebsiteAnalytics = React.lazy(() => import('./pages/services/WebsiteAnalytics'));
const ZeroTrustNetworkAccess = React.lazy(() => import('./pages/services/ZeroTrustNetworkAccess'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const CustomerSupportChatbot = React.lazy(() => import('./pages/services/CustomerSupportChatbot'));
const DeveloperAPITester = React.lazy(() => import('./pages/services/DeveloperAPITester'));
const DeveloperProductivityCopilot = React.lazy(() => import('./pages/services/DeveloperProductivityCopilot'));
const DSRPortal = React.lazy(() => import('./pages/services/DSRPortal'));
const EmailSequencer = React.lazy(() => import('./pages/services/EmailSequencer'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));
const GDPRDSARPortal = React.lazy(() => import('./pages/services/GDPRDSARPortal'));
const HelpdeskPlatform = React.lazy(() => import('./pages/services/HelpdeskPlatform'));
const ITHelpdesk = React.lazy(() => import('./pages/services/ITHelpdesk'));
const LandingPageGenerator = React.lazy(() => import('./pages/services/LandingPageGenerator'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const MobileFirstSurveyTool = React.lazy(() => import('./pages/services/MobileFirstSurveyTool'));
const MobileSurvey = React.lazy(() => import('./pages/services/MobileSurvey'));
const MicroSaaSPlatformElite = React.lazy(() => import('./pages/services/MicroSaaSPlatformElite'));
const Transformation = React.lazy(() => import('./pages/services/Transformation'));

// Simple placeholder pages for missing ones
const Careers = () => (
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

// Additional placeholder pages for missing routes
const ScheduleDemo = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Schedule Demo - Zion Tech Group"
      description="Schedule a personalized demo of our AI-powered solutions and see how we can transform your business."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Schedule Demo</h1>
      <p className="text-xl text-gray-300">See our solutions in action</p>
    </div>
  </div>
);

const Demo = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Demo - Zion Tech Group"
      description="Experience our AI-powered solutions through interactive demos and demonstrations."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Demo</h1>
      <p className="text-xl text-gray-300">Experience our solutions</p>
    </div>
  </div>
);

const Support = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Support - Zion Tech Group"
      description="Get expert support and assistance for all our AI-powered solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Support</h1>
      <p className="text-xl text-gray-300">Get help when you need it</p>
    </div>
  </div>
);

const Community = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Community - Zion Tech Group"
      description="Join our community of technology enthusiasts, developers, and business leaders."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Community</h1>
      <p className="text-xl text-gray-300">Connect with like-minded professionals</p>
    </div>
  </div>
);

const Partnerships = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Partnerships - Zion Tech Group"
      description="Explore partnership opportunities and strategic alliances with Zion Tech Group."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Partnerships</h1>
      <p className="text-xl text-gray-300">Grow together with us</p>
    </div>
  </div>
);

const Investors = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Investor Relations - Zion Tech Group"
      description="Learn about investment opportunities and our company's growth trajectory."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Investor Relations</h1>
      <p className="text-xl text-gray-300">Investment opportunities</p>
    </div>
  </div>
);

const Press = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Press & Media - Zion Tech Group"
      description="Latest news, press releases, and media resources from Zion Tech Group."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
      <p className="text-xl text-gray-300">Latest news and updates</p>
    </div>
  </div>
);

const Legal = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Legal - Zion Tech Group"
      description="Legal information, terms, and policies for Zion Tech Group services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Legal</h1>
      <p className="text-xl text-gray-300">Legal information and policies</p>
    </div>
  </div>
);

const Training = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Training & Certification - Zion Tech Group"
      description="Professional training and certification programs for AI and technology solutions."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Training & Certification</h1>
      <p className="text-xl text-gray-300">Enhance your skills</p>
    </div>
  </div>
);

const API = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="API Reference - Zion Tech Group"
      description="Comprehensive API documentation and developer resources for our AI services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">API Reference</h1>
      <p className="text-xl text-gray-300">Developer resources</p>
    </div>
  </div>
);

const Developers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Developer Portal - Zion Tech Group"
      description="Developer tools, documentation, and resources for building with our AI platform."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Developer Portal</h1>
      <p className="text-xl text-gray-300">Build with our platform</p>
    </div>
  </div>
);

const Whitepapers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="White Papers - Zion Tech Group"
      description="In-depth research papers and technical insights on AI and emerging technologies."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">White Papers</h1>
      <p className="text-xl text-gray-300">Research and insights</p>
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
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/team" element={<Team />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<HelpCenter />} />
                
                {/* New pricing guide route */}
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                <Route path="/pricing-guide-2025" element={<PricingGuide2025 />} />
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                <Route path="/developers" element={<Developers />} />
                
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
                <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                
                {/* New innovative service routes */}
                <Route path="/services/ai-legal-document-analysis" element={<AILegalDocumentAnalysis />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />

                    {/* New Innovative Services 2025 - Combined from both versions */}
                    <Route path="/services/ai-enterprise-automation-platform" element={<AIEnterpriseAutomationPlatform />} />
                    <Route path="/services/ai-data-analytics-platform" element={<AIDataAnalyticsPlatform />} />
                    <Route path="/services/it-infrastructure-management" element={<ITInfrastructureManagement />} />
                    <Route path="/services/micro-saas-solutions-comprehensive" element={<MicroSaaSSolutionsComprehensive />} />

                    {/* New Innovative AI Services 2025 - From remote version */}
                    <Route path="/services/ai-quantum-neural-network-platform" element={<AIQuantumNeuralNetworkPlatform />} />
                    <Route path="/services/ai-autonomous-business-operations-platform" element={<AIAutonomousBusinessOperationsPlatform />} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<AICustomerExperienceAnalyticsPlatform />} />

                    {/* Missing Service Pages */}
                    <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/services/cloud-devops-automation" element={<CloudDevOpsAutomation />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/cybersecurity-solutions" element={<CybersecuritySolutions />} />
                    <Route path="/services/network-infrastructure" element={<NetworkInfrastructure />} />
                    <Route path="/services/it-onsite-services" element={<ITOnsiteServices />} />

                    {/* Get Started Page */}
                    <Route path="/get-started" element={<GetStarted />} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ModernLayout><ComprehensiveServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-ai-services-showcase-2025" element={<ModernLayout><InnovativeAIServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-services-showcase-2025" element={<ModernLayout><InnovativeServicesShowcase2025 /></ModernLayout>} />

                    {/* Legal and Policy Pages */}
                    <Route path="/privacy" element={<ModernLayout><Privacy /></ModernLayout>} />
                    <Route path="/terms" element={<ModernLayout><Terms /></ModernLayout>} />
                    <Route path="/cookies" element={<ModernLayout><Cookies /></ModernLayout>} />
                    <Route path="/accessibility" element={<ModernLayout><Accessibility /></ModernLayout>} />
                    <Route path="/security" element={<ModernLayout><Security /></ModernLayout>} />
                    <Route path="/compliance" element={<ModernLayout><Compliance /></ModernLayout>} />

                    {/* New pages we created */}
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/industry-solutions" element={<IndustrySolutions />} />
                    <Route path="/cloud-solutions" element={<CloudSolutions />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />
                    <Route path="/get-started" element={<GetStarted />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/status" element={<Status />} />

                    {/* Additional navigation pages */}
                    <Route path="/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/blockchain" element={<Blockchain />} />
                    <Route path="/iot-solutions" element={<IoTSolutions />} />

                    {/* Company pages */}
                    <Route path="/news" element={<News />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/careers" element={<Careers />} />

                    {/* Resource pages */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/support" element={<Support />} />

                    {/* Additional pages we created */}
                    <Route path="/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/blockchain-solutions" element={<BlockchainSolutions />} />
                    <Route path="/iot-solutions" element={<IoTSolutions />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/training" element={<Training />} />

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
          </div>
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