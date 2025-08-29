import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { AIServiceRecommendationEngine } from './components/AIServiceRecommendationEngine';
import { EnhancedServiceShowcase } from './components/EnhancedServiceShowcase';

// Core pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Resources = lazy(() => import('./pages/Resources'));
const Pricing = lazy(() => import('./pages/Pricing'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Partners = lazy(() => import('./pages/Partners'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const ScheduleDemo = lazy(() => import('./pages/ScheduleDemo'));
const InvestorRelations = lazy(() => import('./pages/InvestorRelations'));
const Press = lazy(() => import('./pages/Press'));
const Legal = lazy(() => import('./pages/Legal'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Webinars = lazy(() => import('./pages/Webinars'));
const Documentation = lazy(() => import('./pages/Documentation'));
const APIDocumentation = lazy(() => import('./pages/APIDocumentation'));
const Developers = lazy(() => import('./pages/Developers'));
const Training = lazy(() => import('./pages/Training'));
const Community = lazy(() => import('./pages/Community'));
const Support = lazy(() => import('./pages/Support'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const InnovativeServicesShowcase2025 = lazy(() => import('./pages/InnovativeServicesShowcase2025.tsx'));

// Service pages - only import existing ones
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = lazy(() => import('./pages/services/MicroSaaSProducts'));

// Additional service pages
const BlockchainWeb3Platform = lazy(() => import('./pages/services/blockchain-web3-platform'));
const AIHealthcareDiagnosticsPlatform = lazy(() => import('./pages/services/ai-healthcare-diagnostics-platform'));
const AIEducationPlatform = lazy(() => import('./pages/services/ai-education-platform'));
const AIMetaversePlatform = lazy(() => import('./pages/services/ai-metaverse-platform'));
const AISpaceTechnologyPlatform = lazy(() => import('./pages/services/ai-space-technology-platform'));
const AIGreenTechnologyPlatform = lazy(() => import('./pages/services/ai-green-technology-platform'));
const AIDevelopmentPlatform = lazy(() => import('./pages/services/ai-development-platform'));
const AIContentCreation = lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = lazy(() => import('./pages/services/ai-cybersecurity'));
const QuantumComputing = lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = lazy(() => import('./pages/services/iot-edge-computing'));
const Showcase2025 = lazy(() => import('./pages/services/showcase-2025'));
const MicroSAAS = lazy(() => import('./pages/services/micro-saas'));

// Simple placeholder pages for missing ones
const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Coming Soon</p>
    </div>
  </div>
);

// New innovative services
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
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/enhanced-services-showcase" element={<EnhancedServiceShowcase />} />
                <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase2025 />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/api-docs" element={<APIDocumentation />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/training" element={<Training />} />
                <Route path="/community" element={<Community />} />
                <Route path="/support" element={<Support />} />
                <Route path="/demo" element={<ScheduleDemo />} />
                <Route path="/investors" element={<InvestorRelations />} />
                <Route path="/press" element={<Press />} />
                <Route path="/legal" element={<Legal />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                
                {/* Additional service routes */}
                <Route path="/services/blockchain-web3-platform" element={<BlockchainWeb3Platform />} />
                <Route path="/services/ai-healthcare-diagnostics-platform" element={<AIHealthcareDiagnosticsPlatform />} />
                <Route path="/services/ai-education-platform" element={<AIEducationPlatform />} />
                <Route path="/services/ai-metaverse-platform" element={<AIMetaversePlatform />} />
                <Route path="/services/ai-space-technology-platform" element={<AISpaceTechnologyPlatform />} />
                <Route path="/services/ai-green-technology-platform" element={<AIGreenTechnologyPlatform />} />
                <Route path="/services/ai-development-platform" element={<AIDevelopmentPlatform />} />
                <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                <Route path="/services/showcase-2025" element={<Showcase2025 />} />
                <Route path="/services/micro-saas" element={<MicroSAAS />} />
                
                {/* New innovative service routes */}
                <Route path="/services/ai-contract-analysis" element={<AIContractAnalysis />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimizationNew />} />
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
                <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
                
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <AdvancedPerformanceMonitor />
          <AIServiceRecommendationEngine />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;