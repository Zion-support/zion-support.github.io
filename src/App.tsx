import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load pages with error boundaries
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/solutions'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const Team = React.lazy(() => import('./pages/Team'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Events = React.lazy(() => import('./pages/Events'));
const Help = React.lazy(() => import('./pages/Help'));
const Docs = React.lazy(() => import('./pages/Docs'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Sitemap = React.lazy(() => import('./pages/sitemap'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Support = React.lazy(() => import('./pages/Support'));
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// Add missing imports for existing pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const Services2026 = React.lazy(() => import('./pages/Services2026'));
const Services2027 = React.lazy(() => import('./pages/Services2027'));
const Services2028 = React.lazy(() => import('./pages/Services2028'));
const UltimateInnovativeServices2026 = React.lazy(() => import('./pages/UltimateInnovativeServices2026'));
const EnhancedComprehensiveServices2026 = React.lazy(() => import('./pages/EnhancedComprehensiveServices2026'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/ai-autonomous-research-assistant'));
const AIQuantumHybridPlatform = React.lazy(() => import('./pages/services/ai-quantum-hybrid-platform'));

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

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Explore our marketplace of AI-powered technology solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Explore our solutions</p>
      <p className="text-lg text-gray-400 mt-2">Coming soon - AI-powered marketplace</p>
    </div>
  </div>
);

// Enhanced loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <LoadingSpinner />
      <p className="text-lg text-gray-300 mt-4">Loading amazing content...</p>
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
            <Suspense fallback={<PageLoader />}>
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
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/research-development" element={<ResearchDevelopment />} />
                <Route path="/events" element={<Events />} />
                <Route path="/news" element={<News />} />
                <Route path="/team" element={<Team />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/help" element={<Help />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/support" element={<Support />} />
                <Route path="/enhanced-services-2025" element={<EnhancedServicesShowcase2025 />} />
                <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricingGuide2025 />} />
                
                {/* Add missing routes for footer links */}
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                <Route path="/services2026" element={<Services2026 />} />
                <Route path="/services2027" element={<Services2027 />} />
                <Route path="/services2028" element={<Services2028 />} />
                <Route path="/ultimate-innovative-services-2026" element={<UltimateInnovativeServices2026 />} />
                <Route path="/enhanced-comprehensive-services-2026" element={<EnhancedComprehensiveServices2026 />} />
                
                {/* Business Solution Routes */}
                <Route path="/services/micro-saas-solutions" element={<React.lazy(() => import('./pages/services/MicroSAASSolutions')) />} />
                <Route path="/services/affiliate-tracking" element={<React.lazy(() => import('./pages/services/affiliate-tracking')) />} />
                <Route path="/services/it-helpdesk" element={<React.lazy(() => import('./pages/services/ITHelpdesk')) />} />
                <Route path="/services/green-it" element={<React.lazy(() => import('./pages/services/green-it')) />} />
                <Route path="/talent" element={<React.lazy(() => import('./pages/Talent')) />} />
                <Route path="/equipment" element={<React.lazy(() => import('./pages/Equipment')) />} />
                
                {/* Additional Resource Routes */}
                <Route path="/api" element={<React.lazy(() => import('./pages/API')) />} />
                <Route path="/developers" element={<React.lazy(() => import('./pages/DeveloperPortal')) />} />
                <Route path="/accessibility" element={<React.lazy(() => import('./pages/Accessibility')) />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                
                {/* Additional Service Routes */}
                <Route path="/services/dsr-portal" element={<React.lazy(() => import('./pages/services/GDPRDSARPortal')) />} />
                <Route path="/services/ai-compliance-assistant" element={<React.lazy(() => import('./pages/services/ai-compliance-assistant')) />} />
                <Route path="/services/ai-sales-copilot" element={<React.lazy(() => import('./pages/services/ai-sales-copilot')) />} />
                <Route path="/services/ai-data-analytics" element={<React.lazy(() => import('./pages/services/ai-data-analytics')) />} />
                <Route path="/services/finops-advisor" element={<React.lazy(() => import('./pages/services/finops-advisor')) />} />
                <Route path="/services/cloud-finops-optimizer" element={<React.lazy(() => import('./pages/services/CloudFinOpsOptimizer')) />} />
                <Route path="/services/digital-transformation" element={<React.lazy(() => import('./pages/services/Transformation')) />} />
                <Route path="/services/it-consulting" element={<React.lazy(() => import('./pages/services/ITConsulting')) />} />
                <Route path="/services/business-intelligence" element={<React.lazy(() => import('./pages/services/business-intelligence')) />} />
                <Route path="/services/blockchain" element={<React.lazy(() => import('./pages/services/blockchain')) />} />
                <Route path="/services/affiliate-tracking" element={<React.lazy(() => import('./pages/services/affiliate-tracking')) />} />
                <Route path="/services/cybersecurity" element={<React.lazy(() => import('./pages/services/cybersecurity')) />} />
                
                {/* Core Service Routes */}
                <Route path="/services/quantum-computing" element={<React.lazy(() => import('./pages/services/quantum-computing')) />} />
                <Route path="/services/iot-edge-computing" element={<React.lazy(() => import('./pages/services/iot-edge-computing')) />} />
                <Route path="/services/ai-content-creation" element={<React.lazy(() => import('./pages/services/ai-content-creation')) />} />
                <Route path="/services/ai-hr-platform" element={<React.lazy(() => import('./pages/services/ai-hr-platform')) />} />
                <Route path="/services/sustainable-technology" element={<React.lazy(() => import('./pages/services/sustainable-technology')) />} />
                <Route path="/services/ai-predictive-maintenance" element={<React.lazy(() => import('./pages/services/ai-predictive-maintenance')) />} />
                <Route path="/services/quantum-machine-learning" element={<React.lazy(() => import('./pages/services/quantum-machine-learning')) />} />
                <Route path="/services/space-tech" element={<React.lazy(() => import('./pages/services/space-tech')) />} />
                <Route path="/services/ai-content-generator" element={<React.lazy(() => import('./pages/services/ai-content-generator')) />} />
                <Route path="/services/ai-customer-support" element={<React.lazy(() => import('./pages/services/ai-customer-support')) />} />
                <Route path="/services/ai-cybersecurity" element={<React.lazy(() => import('./pages/services/ai-cybersecurity')) />} />
                <Route path="/services/ai-marketing-automation" element={<React.lazy(() => import('./pages/services/ai-marketing-automation')) />} />
                <Route path="/services/ai-project-management" element={<React.lazy(() => import('./pages/services/ai-project-management')) />} />
                <Route path="/services/ai-workflow-automation" element={<React.lazy(() => import('./pages/services/ai-workflow-automation')) />} />
                <Route path="/services/micro-crm" element={<React.lazy(() => import('./pages/services/micro-crm')) />} />
                <Route path="/services/helpdesk" element={<React.lazy(() => import('./pages/services/HelpdeskPlatform')) />} />
                <Route path="/services/ai-seo" element={<React.lazy(() => import('./pages/services/ai-powered-seo')) />} />
                <Route path="/services/interview-assessment" element={<React.lazy(() => import('./pages/services/interview-assessment-ai')) />} />
                <Route path="/services/ai-workflow-orchestrator" element={<React.lazy(() => import('./pages/services/ai-workflow-orchestrator')) />} />
                <Route path="/services/incident-response-platform" element={<React.lazy(() => import('./pages/services/incident-response-platform')) />} />
                <Route path="/services/security-headers-csp" element={<React.lazy(() => import('./pages/services/SecurityHeadersCSP')) />} />
                <Route path="/services/zero-trust-network-access" element={<React.lazy(() => import('./pages/services/ZeroTrustNetworkAccess')) />} />
                <Route path="/services/ai-autonomous-research-assistant" element={<React.lazy(() => import('./pages/services/ai-autonomous-research-assistant')) />} />
                
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;