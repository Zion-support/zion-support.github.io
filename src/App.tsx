import { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { EnhancedSEO } from './components/EnhancedSEO';
import { ServiceWorker } from './components/ServiceWorker';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';

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
const Partners = React.lazy(() => import('./pages/Partners'));

// New pages
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));

// Enhanced components
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const Community = React.lazy(() => import('./pages/Community'));
const Developers = React.lazy(() => import('./pages/Developers'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Revolutionary services pages for 2030
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2030'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));
const ComprehensiveServices2030 = React.lazy(() => import('./pages/ComprehensiveServices2030'));

// Innovative Services Showcase 2025
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Comprehensive Services Showcase 2025
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// Add missing imports for existing pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const Services2026 = React.lazy(() => import('./pages/Services2026'));
const Services2027 = React.lazy(() => import('./pages/Services2027'));
const Services2028 = React.lazy(() => import('./pages/Services2028'));
const UltimateInnovativeServices2026 = React.lazy(() => import('./pages/UltimateInnovativeServices2026'));
const EnhancedComprehensiveServices2026 = React.lazy(() => import('./pages/EnhancedComprehensiveServices2026'));

// New innovative services
const AILegalDocumentAnalysis = React.lazy(() => import('./pages/services/ai-legal-document-analysis'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/ai-financial-trading'));

// Additional service components
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const AICybersecurity = React.lazy(() => import('./pages/services/AICybersecurity'));

// Additional service imports
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions'));
const GDPRDSARPortal = React.lazy(() => import('./pages/services/GDPRDSARPortal'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/ai-compliance-assistant'));
const AISalesCopilot = React.lazy(() => import('./pages/services/ai-sales-copilot'));
const AIDataAnalytics = React.lazy(() => import('./pages/services/ai-data-analytics'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/finops-advisor'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const Transformation = React.lazy(() => import('./pages/services/Transformation'));
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));
const BusinessIntelligence = React.lazy(() => import('./pages/services/business-intelligence'));
const Blockchain = React.lazy(() => import('./pages/services/blockchain'));
const Cybersecurity = React.lazy(() => import('./pages/services/cybersecurity'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AIHRPlatform = React.lazy(() => import('./pages/services/ai-hr-platform'));
const SustainableTechnology = React.lazy(() => import('./pages/services/sustainable-technology'));
const AIPredictiveMaintenance = React.lazy(() => import('./pages/services/ai-predictive-maintenance'));
const QuantumMachineLearning = React.lazy(() => import('./pages/services/quantum-machine-learning'));
const SpaceTech = React.lazy(() => import('./pages/services/space-tech'));
const AIContentGenerator = React.lazy(() => import('./pages/services/ai-content-generator'));
const AICustomerSupport = React.lazy(() => import('./pages/services/ai-customer-support'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/ai-marketing-automation'));
const AIProjectManagement = React.lazy(() => import('./pages/services/ai-project-management'));
const AIWorkflowAutomation = React.lazy(() => import('./pages/services/ai-workflow-automation'));
const MicroCRM = React.lazy(() => import('./pages/services/micro-crm'));
const HelpdeskPlatform = React.lazy(() => import('./pages/services/HelpdeskPlatform'));
const AIPoweredSEO = React.lazy(() => import('./pages/services/ai-powered-seo'));
const InterviewAssessmentAI = React.lazy(() => import('./pages/services/interview-assessment-ai'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/ai-workflow-orchestrator'));
const IncidentResponsePlatform = React.lazy(() => import('./pages/services/incident-response-platform'));
const SecurityHeadersCSP = React.lazy(() => import('./pages/services/SecurityHeadersCSP'));
const ZeroTrustNetworkAccess = React.lazy(() => import('./pages/services/ZeroTrustNetworkAccess'));

// Additional page imports
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const API = React.lazy(() => import('./pages/API'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));

// Enhanced placeholder pages with better UX
const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
      <p className="text-lg text-gray-400 mt-2">We're always looking for talented individuals</p>
    </div>
  </div>
);

const Support = React.lazy(() => import('./pages/Support'));

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider>
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
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/support" element={<Support />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/comprehensive-services-2030" element={<ComprehensiveServices2030 />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                
                {/* New Routes */}
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                
                {/* New innovative service routes */}
                <Route path="/services/ai-legal-document-analysis" element={<AILegalDocumentAnalysis />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                
                {/* Additional service routes */}
                <Route path="/services/developer-productivity-copilot" element={<DeveloperProductivityCopilot />} />
                <Route path="/services/ai-sales-assistant" element={<AISalesAssistant />} />
                <Route path="/services/security-posture-guardian" element={<SecurityPostureGuardian />} />
                <Route path="/services/ai-data-pipeline-optimizer" element={<AIDataPipelineOptimizer />} />

                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          
          <EnhancedFuturisticFooter />
          <ChatAssistant />
          <PerformanceOptimizer showMetrics={true} />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;