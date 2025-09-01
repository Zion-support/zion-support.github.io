import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Sidebar } from './components/Sidebar';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { EnhancedAccessibility } from './components/EnhancedAccessibility';

// Helper function for lazy loading with error boundary
const createLazyComponent = (importFunc: () => Promise<any>) => {
  const LazyComponent = lazy(importFunc);
  return (props: any) => (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

// Lazy load pages - only import existing ones
const Home = createLazyComponent(() => import('./pages/EnhancedHome'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const BlogPost = createLazyComponent(() => import('./pages/BlogPost'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));
const Resources = createLazyComponent(() => import('./pages/Resources'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const Login = createLazyComponent(() => import('./pages/Login'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const SearchPage = createLazyComponent(() => import('./pages/SearchPage'));

// New AI Services 2025
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));

// Additional Service Pages
const AISalesCopilot = createLazyComponent(() => import('./pages/services/ai-sales-copilot'));
const CloudFinOpsOptimizer = createLazyComponent(() => import('./pages/services/cloud-finops-optimizer'));
const AIComplianceAssistant = createLazyComponent(() => import('./pages/services/ai-compliance-assistant'));
const AIBusinessIntelligence = createLazyComponent(() => import('./pages/services/ai-business-intelligence'));
const AICustomerSupportAutomation = createLazyComponent(() => import('./pages/services/ai-customer-support-automation'));

// Showcase pages
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));

// 2031 Cutting-Edge Services
const ZionCuttingEdgeServices2031 = createLazyComponent(() => import('./pages/ZionCuttingEdgeServices2031'));

// Comprehensive Pricing Guide 2031
const ComprehensivePricingGuide2031 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2031'));

// Additional pages that actually exist
const Help = createLazyComponent(() => import('./pages/Help'));
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

// New pages I've created
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Events = createLazyComponent(() => import('./pages/Events'));

// Additional missing pages
const Community = createLazyComponent(() => import('./pages/Community'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const Security = createLazyComponent(() => import('./pages/Security'));
const Compliance = createLazyComponent(() => import('./pages/Compliance'));
const SystemStatus = createLazyComponent(() => import('./pages/SystemStatus'));

// Additional new service pages
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/AIPoweredSEO'));
const InterviewAssessmentAI = createLazyComponent(() => import('./pages/services/InterviewAssessmentAI'));
const HelpdeskPlatform = createLazyComponent(() => import('./pages/services/HelpdeskPlatform'));
const DSRPortal = createLazyComponent(() => import('./pages/services/DSRPortal'));
const SecurityHeadersCSP = createLazyComponent(() => import('./pages/services/SecurityHeadersCSP'));

// Additional AI Services
const AIAutonomousBusinessManager = createLazyComponent(() => import('./pages/services/AIAutonomousBusinessManager'));
const AIAutonomousBusinessPlatform = createLazyComponent(() => import('./pages/services/AIAutonomousBusinessPlatform'));
const AIAutonomousSystems = createLazyComponent(() => import('./pages/services/AIAutonomousSystems'));
const AIAutonomousVehicle = createLazyComponent(() => import('./pages/services/AIAutonomousVehicle'));
const AIAutonomousVentureCapitalist = createLazyComponent(() => import('./pages/services/AIAutonomousVentureCapitalist'));
const AIAnalytics = createLazyComponent(() => import('./pages/services/AIAnalytics'));
const AIAnalyticsCopilot = createLazyComponent(() => import('./pages/services/AIAnalyticsCopilot'));
const AIAutonomousBusinessOperations = createLazyComponent(() => import('./pages/services/AIAutonomousBusinessOperations'));
const AIAutonomousLegalResearchAssistant = createLazyComponent(() => import('./pages/services/AIAutonomousLegalResearchAssistant'));
const AIBusinessSolutions = createLazyComponent(() => import('./pages/services/AIBusinessSolutions'));
const AICodeReview = createLazyComponent(() => import('./pages/services/AICodeReview'));
const AIContentGenerator = createLazyComponent(() => import('./pages/services/AIContentGenerator'));
const AIMatcher = createLazyComponent(() => import('./pages/services/AIMatcher'));
const AIPoweredITAssetManagement = createLazyComponent(() => import('./pages/services/AIPoweredITAssetManagement'));
const AIResearchAssistant = createLazyComponent(() => import('./pages/services/AIResearchAssistant'));

// Additional pages
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceOptimizer>
          <EnhancedAccessibility>
            <Router>
              <div className="app">
                <Sidebar />
                <main className="main-content">
                  <AnimatePresence mode="wait">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      
                      {/* Core Pages */}
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:slug" element={<BlogPost />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/solutions" element={<Solutions />} />
                      <Route path="/resources" element={<Resources />} />
                      <Route path="/case-studies" element={<CaseStudies />} />
                      <Route path="/white-papers" element={<WhitePapers />} />
                      <Route path="/webinars" element={<Webinars />} />
                      <Route path="/request-quote" element={<RequestQuote />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/docs" element={<Documentation />} />
                      <Route path="/documentation" element={<Documentation />} />
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/cookies" element={<Cookies />} />
                      <Route path="/partners" element={<Partners />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/search" element={<SearchPage />} />
                      
                      {/* New AI Services 2025 */}
                      <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                      <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurity />} />
                      <Route path="/services/ai-healthcare-platform" element={<AIHealthcare />} />
                      <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                      
                      {/* Additional Service Pages */}
                      <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                      <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                      <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                      <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                      <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                      
                      {/* Showcase pages */}
                      <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                      
                      {/* 2031 Cutting-Edge Services */}
                      <Route path="/zion-cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
                      
                      {/* Comprehensive Pricing Guide 2031 */}
                      <Route path="/comprehensive-pricing-guide-2031" element={<ComprehensivePricingGuide2031 />} />
                      
                      {/* Additional pages */}
                      <Route path="/help" element={<Help />} />
                      <Route path="/news" element={<News />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/testimonials" element={<Testimonials />} />
                      <Route path="/training" element={<Training />} />
                      <Route path="/tutorials" element={<Tutorials />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/sustainability" element={<Sustainability />} />
                      <Route path="/space-tech" element={<SpaceTech />} />
                      <Route path="/startup-solutions" element={<StartupSolutions />} />
                      <Route path="/supply-chain" element={<SupplyChain />} />
                      <Route path="/talent" element={<Talent />} />
                      <Route path="/video-call" element={<VideoCall />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      
                      {/* New pages I've created */}
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/events" element={<Events />} />
                      
                      {/* Additional missing pages */}
                      <Route path="/community" element={<Community />} />
                      <Route path="/marketplace" element={<Marketplace />} />
                      <Route path="/sitemap" element={<Sitemap />} />
                      <Route path="/accessibility" element={<Accessibility />} />
                      <Route path="/security" element={<Security />} />
                      <Route path="/compliance" element={<Compliance />} />
                      <Route path="/status" element={<SystemStatus />} />
                      
                      {/* Additional new service pages */}
                      <Route path="/services/ai-powered-seo" element={<AIPoweredSEO />} />
                      <Route path="/services/interview-assessment-ai" element={<InterviewAssessmentAI />} />
                      <Route path="/services/helpdesk-platform" element={<HelpdeskPlatform />} />
                      <Route path="/services/dsr-portal" element={<DSRPortal />} />
                      <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                      
                      {/* Additional AI Services */}
                      <Route path="/services/ai-autonomous-business-manager" element={<AIAutonomousBusinessManager />} />
                      <Route path="/services/ai-autonomous-business-platform" element={<AIAutonomousBusinessPlatform />} />
                      <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                      <Route path="/services/ai-autonomous-vehicle" element={<AIAutonomousVehicle />} />
                      <Route path="/services/ai-autonomous-venture-capitalist" element={<AIAutonomousVentureCapitalist />} />
                      <Route path="/services/ai-analytics" element={<AIAnalytics />} />
                      <Route path="/services/ai-analytics-copilot" element={<AIAnalyticsCopilot />} />
                      <Route path="/services/ai-autonomous-business-operations" element={<AIAutonomousBusinessOperations />} />
                      <Route path="/services/ai-autonomous-legal-research-assistant" element={<AIAutonomousLegalResearchAssistant />} />
                      <Route path="/services/ai-business-solutions" element={<AIBusinessSolutions />} />
                      <Route path="/services/ai-code-review" element={<AICodeReview />} />
                      <Route path="/services/ai-content-generator" element={<AIContentGenerator />} />
                      <Route path="/services/ai-matcher" element={<AIMatcher />} />
                      <Route path="/services/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                      <Route path="/services/ai-research-assistant" element={<AIResearchAssistant />} />
                      
                      {/* Additional pages */}
                      <Route path="/micro-saas" element={<MicroSaaS />} />
                      <Route path="/it-services" element={<ITServices />} />
                      
                      {/* Catch-all route for 404 */}
                      <Route path="*" element={<div>404 - Page Not Found</div>} />
                    </Routes>
                  </AnimatePresence>
                </main>
                <ChatAssistant />
              </div>
            </Router>
          </EnhancedAccessibility>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;