import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

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

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));

// Revolutionary services pages for 2030
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));

// Innovative Services Showcase 2025
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Innovative Services Showcase 2028
const InnovativeServicesShowcase2028 = React.lazy(() => import('./pages/InnovativeServicesShowcase2028'));
const ComprehensivePricingGuide2028 = React.lazy(() => import('./pages/ComprehensivePricingGuide2028'));
const ComprehensiveServicesLanding2028 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2028'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const IoTEdge = React.lazy(() => import('./pages/services/IoTEdge'));
const BlockchainEnterpriseSolutions = React.lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const HealthcareTech = React.lazy(() => import('./pages/services/HealthcareTech'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const ZeroTrustNetworkArchitecture = React.lazy(() => import('./pages/services/ZeroTrustNetworkArchitecture'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AISalesCopilot = React.lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));

// Newly added concrete micro SaaS/AI services
const AiLeadScoring = React.lazy(() => import('./pages/services/AiLeadScoring'));
const WebsiteAiChatbot = React.lazy(() => import('./pages/services/WebsiteAiChatbot'));
const RagSearch = React.lazy(() => import('./pages/services/RagSearch'));
const MlopsPipeline = React.lazy(() => import('./pages/services/MlopsPipeline'));
const EcommercePersonalization = React.lazy(() => import('./pages/services/EcommercePersonalization'));

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

// Simple placeholder pages for missing ones
const Community = React.lazy(() => import('./pages/Community'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));

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

function App() {
  return (
    <ErrorBoundary>
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
              <Route path="/help" element={<Help />} />
              <Route path="/support" element={<Support />} />
              <Route path="/community" element={<Community />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/training" element={<Training />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/security" element={<Security />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/team" element={<Team />} />
              <Route path="/press" element={<Press />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/onsite-support" element={<OnsiteSupport />} />
              <Route path="/pricing" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/pricing-2030" element={<ComprehensivePricingGuide2030 />} />
              <Route path="/pricing-guide" element={<PricingGuide />} />
              <Route path="/services" element={<Services />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/services-overview" element={<ServicesOverview />} />
              <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
              <Route path="/revolutionary-services-showcase-2030" element={<RevolutionaryServicesShowcase2030 />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
              <Route path="/innovative-services-showcase-2028" element={<InnovativeServicesShowcase2028 />} />
              <Route path="/pricing-guide-2028" element={<ComprehensivePricingGuide2028 />} />
              <Route path="/comprehensive-services-landing-2028" element={<ComprehensiveServicesLanding2028 />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/partners" element={<Partners />} />
              
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

              {/* New concrete services */}
              <Route path="/services/ai-lead-scoring" element={<AiLeadScoring />} />
              <Route path="/services/website-ai-chatbot" element={<WebsiteAiChatbot />} />
              <Route path="/services/rag-search" element={<RagSearch />} />
              <Route path="/services/mlops-pipeline" element={<MlopsPipeline />} />
              <Route path="/services/ecommerce-personalization" element={<EcommercePersonalization />} />
              
              {/* Additional Service Routes */}
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/it-consulting" element={<ITConsulting />} />
              <Route path="/services/onsite-support" element={<OnsiteSupport />} />
              <Route path="/services/green-it" element={<GreenIT />} />
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/space-tech" element={<SpaceTech />} />

              {/* New AI Services Routes */}
              <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
              <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
              <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
              <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
              <Route path="/services/ai-data-governance" element={<AIDataGovernance />} />
              <Route path="/services/edge-computing-platform" element={<EdgeComputingPlatform />} />
              <Route path="/services/ai-customer-success-platform" element={<AICustomerSuccessPlatform />} />
              
              {/* Catch all route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <EnhancedFuturisticFooter />
        <ChatAssistant />
        <PerformanceOptimizer />
      </div>
    </ErrorBoundary>
  );
}

export default App;