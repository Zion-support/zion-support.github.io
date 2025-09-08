import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Sidebar } from './components/Sidebar';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { InteractiveUserExperience } from './components/InteractiveUserExperience';
import SecurityEnhancer from './components/SecurityEnhancer';

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

// Core pages
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));

// New innovative services
const AILegalDocumentAnalysis = React.lazy(() => import('./pages/services/ai-legal-document-analysis'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/ai-financial-trading'));

// Additional AI & ML services
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICustomerSupport = React.lazy(() => import('./pages/services/ai-customer-support'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/ai-marketing-automation'));
const AIProjectManagement = React.lazy(() => import('./pages/services/ai-project-management'));
const AIWorkflowAutomation = React.lazy(() => import('./pages/services/ai-workflow-automation'));

// Cloud & DevOps services
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));

// Cybersecurity services
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const SecurityHeadersCSP = React.lazy(() => import('./pages/services/SecurityHeadersCSP'));
const ZeroTrustNetworkAccess = React.lazy(() => import('./pages/services/ZeroTrustNetworkAccess'));
const GDPRDSARPortal = React.lazy(() => import('./pages/services/GDPRDSARPortal'));
const IncidentResponsePlatform = React.lazy(() => import('./pages/services/incident-response-platform'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));

// Emerging Technologies services
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const SpaceTech = React.lazy(() => import('./pages/services/space-tech'));
const SustainableTechnology = React.lazy(() => import('./pages/services/sustainable-technology'));
const RoboticsAutomation = React.lazy(() => import('./pages/services/RoboticsAutomation'));

// Micro SaaS services
const MicroCRM = React.lazy(() => import('./pages/services/micro-crm'));
const HelpdeskPlatform = React.lazy(() => import('./pages/services/HelpdeskPlatform'));
const LandingPageGenerator = React.lazy(() => import('./pages/services/LandingPageGenerator'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));

// Additional pages
const Help = React.lazy(() => import('./pages/Help'));
const Events = React.lazy(() => import('./pages/Events'));
const Training = React.lazy(() => import('./pages/Training'));

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

// New Innovative Services 2025
const AIEdgeComputingPlatform = createLazyComponent(() => import('./pages/services/AI-Edge-Computing-Platform'));
const AIDigitalTwinPlatform = createLazyComponent(() => import('./pages/services/AI-Digital-Twin-Platform'));
const AICustomerExperienceAnalytics = createLazyComponent(() => import('./pages/services/AI-Customer-Experience-Analytics'));

// New Innovative AI Services 2025 - Additional
const AIAutonomousLegalResearchPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-legal-research-platform'));
const AIAutonomousManufacturingPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-manufacturing-platform'));
const AICarbonFootprintManagementPlatform = createLazyComponent(() => import('./pages/services/ai-carbon-footprint-management-platform'));
const AIMentalHealthSupportPlatform = createLazyComponent(() => import('./pages/services/ai-mental-health-support-platform'));
const AISmartHomeEnergyManagementPlatform = createLazyComponent(() => import('./pages/services/ai-smart-home-energy-management-platform'));

// Showcase pages
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));

// 2031 Cutting-Edge Services
const ZionCuttingEdgeServices2031 = createLazyComponent(() => import('./pages/ZionCuttingEdgeServices2031'));

// Comprehensive Pricing Guide 2031
const ComprehensivePricingGuide2031 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2031'));

// Additional pages that actually exist
const Solutions = createLazyComponent(() => import('./pages/solutions'));
const CaseStudies = createLazyComponent(() => import('./pages/case-studies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const Login = createLazyComponent(() => import('./pages/Login'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Help = createLazyComponent(() => import('./pages/Help'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const News = createLazyComponent(() => import('./pages/News'));
const Signup = createLazyComponent(() => import('./pages/Signup'));
const Testimonials = createLazyComponent(() => import('./pages/Testimonials'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Tutorials = createLazyComponent(() => import('./pages/Tutorials'));
const Support = createLazyComponent(() => import('./pages/Support'));
const Sustainability = createLazyComponent(() => import('./pages/Sustainability'));
const SpaceTech = createLazyComponent(() => import('./pages/SpaceTech'));
const StartupSolutions = createLazyComponent(() => import('./pages/StartupSolutions'));
const SupplyChain = createLazyComponent(() => import('./pages/SupplyChain'));
const Talent = createLazyComponent(() => import('./pages/Talent'));
const VideoCall = createLazyComponent(() => import('./pages/VideoCall'));
const Wishlist = createLazyComponent(() => import('./pages/Wishlist'));

// Enhanced Services and additional pages
const EnhancedServices = createLazyComponent(() => import('./pages/EnhancedServices'));
const QuantumNeuralNetwork = createLazyComponent(() => import('./pages/quantum-neural-network-platform'));
const AutonomousBusinessOperations = createLazyComponent(() => import('./pages/autonomous-business-operations-platform'));
const AIPoweredITAssetManagement = createLazyComponent(() => import('./pages/ai-powered-it-asset-management'));
const ITOnsiteServices = createLazyComponent(() => import('./pages/OnsiteSupport'));
const CloudDevOps = createLazyComponent(() => import('./pages/services/cloud-devops'));
const AISalesCopilot = createLazyComponent(() => import('./pages/services/ai-sales-copilot'));

// New pages I've created
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Events = createLazyComponent(() => import('./pages/Events'));

// Additional pages referenced in navigation and footer
const Security = createLazyComponent(() => import('./pages/Security'));
const Compliance = createLazyComponent(() => import('./pages/Compliance'));
const Community = createLazyComponent(() => import('./pages/Community'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const Status = createLazyComponent(() => import('./pages/Status'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-6">We're working on fixing the problem.</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

// New innovative services - only import existing ones
const AIContractAnalysis = lazy(() => import('./pages/services/AI-Powered-Contract-Analysis'));
const AISupplyChainOptimizationNew = lazy(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurityThreatIntelligence = lazy(() => import('./pages/services/AI-Cybersecurity-Threat-Intelligence'));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/AI-Healthcare-Diagnostics'));

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
                <Route path="/contact" element={<EnhancedContact />} />
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
                <Route path="/services/comprehensive-2030" element={<ComprehensiveServicesLanding2030 />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/services/overview" element={<InnovativeServicesOverview />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/innovative-micro-saas-services-2025" element={<InnovativeMicroSAASServices2025 />} />
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />
                <Route path="/services/innovative-2025" element={<InnovativeServices2025 />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/community" element={<Community />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/help" element={<Help />} />
                <Route path="/events" element={<Events />} />
                <Route path="/training" element={<Training />} />
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                
                {/* New innovative service routes */}
                <Route path="/services/ai-legal-document-analysis" element={<AILegalDocumentAnalysis />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                <Route path="/services/ai-customer-support" element={<AICustomerSupport />} />
                <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                
                {/* Cloud & DevOps service routes */}
                <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                <Route path="/services/it-consulting" element={<ITConsulting />} />
                <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                
                {/* Cybersecurity service routes */}
                <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                <Route path="/services/zero-trust-network-access" element={<ZeroTrustNetworkAccess />} />
                <Route path="/services/gdpr-dsar-portal" element={<GDPRDSARPortal />} />
                <Route path="/services/incident-response-platform" element={<IncidentResponsePlatform />} />
                <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                
                {/* Emerging Technologies service routes */}
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                <Route path="/services/space-tech" element={<SpaceTech />} />
                <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
                <Route path="/services/robotics-automation" element={<RoboticsAutomation />} />
                
                {/* Micro SaaS service routes */}
                <Route path="/services/micro-crm" element={<MicroCRM />} />
                <Route path="/services/helpdesk-platform" element={<HelpdeskPlatform />} />
                <Route path="/services/landing-page-generator" element={<LandingPageGenerator />} />
                <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />

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
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/sustainability" element={<Sustainability />} />
                    <Route path="/space-tech" element={<SpaceTech />} />
                    <Route path="/startup-solutions" element={<StartupSolutions />} />
                    <Route path="/supply-chain" element={<SupplyChain />} />
                    <Route path="/talent" element={<Talent />} />
                    <Route path="/video-call/:roomId" element={<VideoCall />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    
                    {/* Enhanced Services and additional pages */}
                    <Route path="/enhanced-services" element={<EnhancedServices />} />
                    <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetwork />} />
                    <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperations />} />
                    <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                    <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
                    <Route path="/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/ai-sales-copilot" element={<AISalesCopilot />} />
                    
                    {/* New pages I've created */}
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/events" element={<Events />} />
                    
                    {/* Additional pages referenced in navigation and footer */}
                    <Route path="/security" element={<Security />} />
                    <Route path="/compliance" element={<Compliance />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                  </Routes>
                </AnimatePresence>
              </main>
              
              <Footer />
              
              {/* Enhanced Components */}
              <EnhancedAccessibilityPanel />
              <AdvancedPerformanceMonitor />
              <InteractiveUserExperience />
              <SecurityEnhancer />
              <ChatAssistant />
            </div>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;