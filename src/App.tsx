import React, { Suspense } from 'react.ts';
import { Routes, Route  } from 'react-router-dom.ts';
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
const Services = React.lazy(() => import('./pages/Services'));
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

// Missing pages that need to be added to routing
const Team = React.lazy(() => import('./pages/Team'));
const Press = React.lazy(() => import('./pages/Press'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));

// 2025 Services pages
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// 2027 Services pages
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesShowcase2027 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2027'));
const AllServices2027 = React.lazy(() => import('./pages/AllServices2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));

// Revolutionary services pages for 2030
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));

// Innovative Services Showcase 2025
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Comprehensive Services Showcase 2025
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

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
const AIBusinessIntelligenceDashboard = React.lazy(() => import('./pages/services/AIBusinessIntelligenceDashboard'));
const AISalesCopilot = React.lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));

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
const AIWorkflowAutomation = React.lazy(() => import('./pages/services/AIWorkflowAutomation'));
const AICustomerExperiencePlatform = React.lazy(() => import('./pages/services/AICustomerExperiencePlatform'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AISupplyChainOptimizationPlatform = React.lazy(() => import('./pages/services/AISupplyChainOptimizationPlatform'));
const AIAutonomousBusinessOperations = React.lazy(() => import('./pages/services/AIAutonomousBusinessOperations'));
const QuantumComputingSolutions = React.lazy(() => import('./pages/services/QuantumComputingSolutions'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/AIDataGovernance'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));
const AIEnterpriseResourcePlanning = React.lazy(() => import('./pages/services/AIEnterpriseResourcePlanning'));
const AIQuantumFinancialTrading = React.lazy(() => import('./pages/services/AIQuantumFinancialTrading'));
const AIHealthcareDiagnostics = React.lazy(() => import('./pages/services/AIHealthcareDiagnostics'));
const AIBlockchainSupplyChain = React.lazy(() => import('./pages/services/AIBlockchainSupplyChain'));
const AICyberThreatIntelligence = React.lazy(() => import('./pages/services/AICyberThreatIntelligence'));
const AIQuantumComputingPlatform = React.lazy(() => import('./pages/services/AIQuantumComputingPlatform'));

// New AI-Powered Micro SAAS Services
const AICodeReviewSecurity = React.lazy(() => import('./pages/services/ai-code-review-security'));
const AICustomerExperienceAnalytics = React.lazy(() => import('./pages/services/ai-customer-experience-analytics'));
const AIDevOpsAutomationPlatform = React.lazy(() => import('./pages/services/ai-devops-automation-platform'));
const AIIoTEdgeComputingPlatform = React.lazy(() => import('./pages/services/ai-iot-edge-computing-platform'));

// AI Services Showcase
const AIServicesShowcase = React.lazy(() => import('./pages/AIServicesShowcase'));

// Comprehensive Services Landing
const ComprehensiveServicesLanding = React.lazy(() => import('./pages/ComprehensiveServicesLanding'));

// Services Sitemap
const ServicesSitemap = React.lazy(() => import('./pages/ServicesSitemap'));

// All Services Index
const AllServicesIndex = React.lazy(() => import('./pages/AllServicesIndex'));

// Pricing Comparison
const PricingComparison = React.lazy(() => import('./pages/PricingComparison'));

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

function App(...args[]):  {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-futuristic">
        <AppHeader />
        
        <main id="main-content" className="flex-1">
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
              <Route path="/comprehensive-services-showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
              
              {/* 2027 Services Routes */}
              <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/comprehensive-services-showcase-2027" element={<ComprehensiveServicesShowcase2027 />} />
              <Route path="/all-services-2027" element={<AllServices2027 />} />
              <Route path="/comprehensive-services-overview-2027" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/enhanced-innovative-services-showcase-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
              
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/partners" element={<Partners />} />
              
              {/* Missing page routes */}
              <Route path="/team" element={<Team />} />
              <Route path="/press" element={<Press />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              
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
              <Route path="/services/ai-business-intelligence-dashboard" element={<AIBusinessIntelligenceDashboard />} />
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

              {/* New AI Services Routes */}
              <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
              <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
              <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
              <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
              <Route path="/services/ai-customer-experience-platform" element={<AICustomerExperiencePlatform />} />
              <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
              <Route path="/services/ai-supply-chain-optimization-platform" element={<AISupplyChainOptimizationPlatform />} />
              <Route path="/services/ai-autonomous-business-operations" element={<AIAutonomousBusinessOperations />} />
              <Route path="/services/quantum-computing-solutions" element={<QuantumComputingSolutions />} />
              <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
              <Route path="/services/ai-data-governance" element={<AIDataGovernance />} />
              <Route path="/services/edge-computing-platform" element={<EdgeComputingPlatform />} />
              <Route path="/services/ai-customer-success-platform" element={<AICustomerSuccessPlatform />} />
              {/* New AI-Powered Micro SAAS Service Routes */}
              <Route path="/services/ai-code-review-security" element={<AICodeReviewSecurity />} />
              <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
              <Route path="/services/ai-devops-automation-platform" element={<AIDevOpsAutomationPlatform />} />
              <Route path="/services/ai-iot-edge-computing-platform" element={<AIIoTEdgeComputingPlatform />} />

              {/* AI Services Showcase Route */}
              <Route path="/ai-services-showcase" element={<AIServicesShowcase />} />

              {/* Additional AI Services Routes */}
              <Route path="/services/ai-enterprise-resource-planning" element={<AIEnterpriseResourcePlanning />} />
              <Route path="/services/ai-quantum-financial-trading" element={<AIQuantumFinancialTrading />} />
              <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
              <Route path="/services/ai-blockchain-supply-chain" element={<AIBlockchainSupplyChain />} />
              <Route path="/services/ai-cyber-threat-intelligence" element={<AICyberThreatIntelligence />} />
              <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />
              
              {/* Comprehensive Services Landing Route */}
              <Route path="/comprehensive-services" element={<ComprehensiveServicesLanding />} />
              
                      {/* Services Sitemap Route */}
        <Route path="/services-sitemap" element={<ServicesSitemap />} />
        
        {/* All Services Index Route */}
        <Route path="/all-services" element={<AllServicesIndex />} />
        
        {/* Pricing Comparison Route */}
        <Route path="/pricing" element={<PricingComparison />} />
        
        {/* Catch all route */}
        <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <EnhancedFuturisticFooter />
        <ChatAssistant />
        <PerformanceOptimizer />
        <EnhancedAccessibilityEnhancer />
        <MobileExperienceEnhancer />
      </div>
    </ErrorBoundary>
  )}

export default App;