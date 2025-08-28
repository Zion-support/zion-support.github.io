import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
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
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising.tsx'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030.tsx'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));

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

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Explore our marketplace of AI-powered technology solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Explore our solutions</p>
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
                <Route path="/support" element={<Support />} />
                <Route path="/community" element={<Community />} />
                <Route path="/partnerships" element={<Partnerships />} />
                <Route path="/investors" element={<Investors />} />
                <Route path="/press" element={<Press />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/training" element={<Training />} />
                <Route path="/api-docs" element={<API />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/whitepapers" element={<Whitepapers />} />

                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/blockchain" element={<Blockchain />} />
                <Route path="/services/space-tech" element={<SpaceTech />} />
                <Route path="/services/green-it" element={<GreenIT />} />
                <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                <Route path="/services/ai-customer-support" element={<AICustomerSupport />} />
                <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                <Route path="/services/ai-powered-seo" element={<AIPoweredSEO />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                <Route path="/services/cloud" element={<Cloud />} />
                <Route path="/services/infrastructure" element={<Infrastructure />} />
                <Route path="/services/custom-development" element={<CustomDevelopment />} />
                <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                <Route path="/services/sustainability" element={<Sustainability />} />
                <Route path="/services/incident-response-platform" element={<IncidentResponsePlatform />} />
                <Route path="/services/interview-assessment-ai" element={<InterviewAssessmentAI />} />
                <Route path="/services/micro-crm" element={<MicroCRM />} />
                <Route path="/services/podcast-transcription" element={<PodcastTranscription />} />
                <Route path="/services/price-intelligence-service" element={<PriceIntelligenceService />} />
                <Route path="/services/quantum-ai-trading-platform" element={<QuantumAITradingPlatform />} />
                <Route path="/services/quantum-computing-elite" element={<QuantumComputingElite />} />
                <Route path="/services/quantum-computing-solutions" element={<QuantumComputingSolutions />} />
                <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                <Route path="/services/remote-meeting-summarizer" element={<RemoteMeetingSummarizer />} />
                <Route path="/services/returns-management" element={<ReturnsManagement />} />
                <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                <Route path="/services/security-headers-csp-manager" element={<SecurityHeadersCSPManager />} />
                <Route path="/services/seo-auditor" element={<SEOAuditor />} />
                <Route path="/services/status-incident-hub" element={<StatusIncidentHub />} />
                <Route path="/services/website-analytics" element={<WebsiteAnalytics />} />
                <Route path="/services/zero-trust-network-access" element={<ZeroTrustNetworkAccess />} />
                <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                <Route path="/services/customer-feedback-surveys" element={<CustomerFeedbackSurveys />} />
                <Route path="/services/customer-support-chatbot" element={<CustomerSupportChatbot />} />
                <Route path="/services/developer-api-tester" element={<DeveloperAPITester />} />
                <Route path="/services/developer-productivity-copilot" element={<DeveloperProductivityCopilot />} />
                <Route path="/services/dsr-portal" element={<DSRPortal />} />
                <Route path="/services/email-sequencer" element={<EmailSequencer />} />
                <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                <Route path="/services/gdpr-dsar-portal" element={<GDPRDSARPortal />} />
                <Route path="/services/helpdesk-platform" element={<HelpdeskPlatform />} />
                <Route path="/services/it-helpdesk" element={<ITHelpdesk />} />
                <Route path="/services/landing-page-generator" element={<LandingPageGenerator />} />
                <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
                <Route path="/services/mobile-first-survey-tool" element={<MobileFirstSurveyTool />} />
                <Route path="/services/mobile-survey" element={<MobileSurvey />} />
                <Route path="/services/micro-saas-platform-elite" element={<MicroSaaSPlatformElite />} />
                <Route path="/services/transformation" element={<Transformation />} />

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
  );
}

export default App;