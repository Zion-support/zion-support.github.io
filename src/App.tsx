import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

// Missing pages that need to be added to routing
const Team = React.lazy(() => import('./pages/Team'));
const Press = React.lazy(() => import('./pages/Press'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));

// Enhanced services pages
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const PricingGuide = React.lazy(() => import('./pages/PricingGuide'));
const Help = React.lazy(() => import('./pages/Help'));
const Partners = React.lazy(() => import('./pages/Partners'));

// Comprehensive pricing guides
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));

// Services showcase pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const NewServicesShowcase2025 = React.lazy(() => import('./pages/NewServicesShowcase2025'));
const ServicesComparisonMatrix2025 = React.lazy(() => import('./pages/ServicesComparisonMatrix2025'));

// Core service pages
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
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const ReturnsManagement = React.lazy(() => import('./pages/services/ReturnsManagement'));
const AffiliateTracking = React.lazy(() => import('./pages/services/AffiliateTracking'));
const MobileFeedbackSurveys = React.lazy(() => import('./pages/services/MobileFeedbackSurveys'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));

// Additional service pages
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));
const GreenIT = React.lazy(() => import('./pages/services/GreenIT'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const SpaceTech = React.lazy(() => import('./pages/services/SpaceTech'));

// Advanced AI Services
const AICybersecuritySuite = React.lazy(() => import('./pages/services/AICybersecuritySuite'));
const QuantumAIPlatform = React.lazy(() => import('./pages/services/QuantumAIPlatform'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/AIDataGovernance'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));
const AIEnterpriseResourcePlanning = React.lazy(() => import('./pages/services/AIEnterpriseResourcePlanning'));
const AIQuantumFinancialTrading = React.lazy(() => import('./pages/services/AIQuantumFinancialTrading'));
const AIHealthcareDiagnostics = React.lazy(() => import('./pages/services/AIHealthcareDiagnostics'));
const AIBlockchainSupplyChain = React.lazy(() => import('./pages/services/AIBlockchainSupplyChain'));
const AICyberThreatIntelligence = React.lazy(() => import('./pages/services/AICyberThreatIntelligence'));

// Simple placeholder pages for missing ones
const Community = React.lazy(() => import('./pages/Community'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));

// Optimized placeholder components
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));

// New AI-powered micro SAAS services from merge branch
const AIProjectManagement = React.lazy(() => import('./pages/services/AIProjectManagement'));
const AICustomerSupportAutomation = React.lazy(() => import('./pages/services/AICustomerSupportAutomation'));
const AIFinancialAnalytics = React.lazy(() => import('./pages/services/AIFinancialAnalytics'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <h2 className="text-xl font-semibold mb-2">Loading Zion Tech Group</h2>
      <p className="text-gray-400">Preparing your futuristic experience...</p>
    </div>
  </div>
);

function App() {
  useScrollToTop();
  
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <ErrorBoundary>
          <div className="min-h-screen bg-futuristic">
            <AppHeader />
            
            <main id="main-content" className="flex-1">
              <Suspense fallback={<EnhancedLoadingSpinner />}>
                <Routes>
                  {/* Core Routes */}
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
                  <Route path="/onsite-support" element={<OnsiteSupport />} />
                  
                  {/* Pricing Routes */}
                  <Route path="/pricing" element={<ComprehensivePricingGuide2027 />} />
                  <Route path="/pricing-2030" element={<ComprehensivePricingGuide2030 />} />
                  <Route path="/pricing-guide" element={<PricingGuide />} />
                  <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                  <Route path="/comprehensive-pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />
                  
                  {/* Services Routes */}
                  <Route path="/services" element={<Services />} />
                  <Route path="/services-overview" element={<ServicesOverview />} />
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/partners" element={<Partners />} />
                  
                  {/* Service Showcase Routes */}
                  <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                  <Route path="/revolutionary-services-showcase-2030" element={<RevolutionaryServicesShowcase2030 />} />
                  <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                  <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                  <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                  <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />
                  <Route path="/services-comparison-matrix-2025" element={<ServicesComparisonMatrix2025 />} />
                  
                  {/* Individual Service Routes */}
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
                  <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                  <Route path="/services/ai-auto-email-responder" element={<AIAutoEmailResponder />} />
                  <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
                  <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                  <Route path="/services/returns-management" element={<ReturnsManagement />} />
                  <Route path="/services/affiliate-tracking" element={<AffiliateTracking />} />
                  <Route path="/services/mobile-feedback-surveys" element={<MobileFeedbackSurveys />} />
                  <Route path="/services/customer-feedback-surveys" element={<CustomerFeedbackSurveys />} />
                  <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} />
                  <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                  
                  {/* Additional Service Routes */}
                  <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                  <Route path="/services/it-consulting" element={<ITConsulting />} />
                  <Route path="/services/green-it" element={<GreenIT />} />
                  <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                  <Route path="/services/space-tech" element={<SpaceTech />} />

                  {/* Advanced AI Services Routes */}
                  <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
                  <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                  <Route path="/services/ai-data-governance" element={<AIDataGovernance />} />
                  <Route path="/services/edge-computing-platform" element={<EdgeComputingPlatform />} />
                  <Route path="/services/ai-customer-success-platform" element={<AICustomerSuccessPlatform />} />
                  <Route path="/services/ai-enterprise-resource-planning" element={<AIEnterpriseResourcePlanning />} />
                  <Route path="/services/ai-quantum-financial-trading" element={<AIQuantumFinancialTrading />} />
                  <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
                  <Route path="/services/ai-blockchain-supply-chain" element={<AIBlockchainSupplyChain />} />
                  <Route path="/services/ai-cyber-threat-intelligence" element={<AICyberThreatIntelligence />} />
                  
                  {/* New AI-powered micro SAAS service routes */}
                  <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                  <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                  <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} />
                  <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                  
                  {/* Search and Utility Routes */}
                  <Route path="/search" element={<SearchPage />} />
                  
                  {/* Missing Routes */}
                  <Route path="/team" element={<Team />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>
            
            <EnhancedFuturisticFooter />
            <ChatAssistant />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
          </div>
        </ErrorBoundary>
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
}

export default App;