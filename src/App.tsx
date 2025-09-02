import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/index'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Careers = lazy(() => import('./pages/careers'));
const Services = lazy(() => import('./pages/services/index'));
const AIServices = lazy(() => import('./pages/services/ai-services'));
const ITServices = lazy(() => import('./pages/services/it-services'));
const MicroSaaS = lazy(() => import('./pages/services/micro-saas'));
const Pricing = lazy(() => import('./pages/pricing'));
const PricingGuide = lazy(() => import('./pages/pricing-guide'));
const Blog = lazy(() => import('./pages/blog'));
const CaseStudies = lazy(() => import('./pages/case-studies'));
const WhitePapers = lazy(() => import('./pages/white-papers'));
const Webinars = lazy(() => import('./pages/webinars'));
const Team = lazy(() => import('./pages/team'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));
const Sitemap = lazy(() => import('./pages/sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service sub-pages
const AICybersecurityPlatform = lazy(() => import('./pages/services/AICybersecurityPlatform'));
const AICustomerExperience = lazy(() => import('./pages/services/AICustomerExperience'));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/AIHealthcareDiagnostics'));
const AIEnterpriseOrchestrator = lazy(() => import('./pages/services/AIEnterpriseOrchestrator'));
const AIHealthcareAnalyticsPlatform = lazy(() => import('./pages/services/AIHealthcareAnalyticsPlatform'));
const AIAutonomousSupplyChain = lazy(() => import('./pages/services/AIAutonomousSupplyChain'));
const AIFinancialPlanning = lazy(() => import('./pages/services/AIFinancialPlanning'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/team" element={<Team />} />
                
                {/* Services Routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/services-overview" element={<Services />} />
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
                
                {/* Service Sub-pages */}
                <Route path="/services/ai-autonomous-cybersecurity-platform" element={<AICybersecurityPlatform />} />
                <Route path="/services/ai-customer-experience-platform" element={<AICustomerExperience />} />
                <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
                <Route path="/services/ai-enterprise-orchestrator" element={<AIEnterpriseOrchestrator />} />
                <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalyticsPlatform />} />
                <Route path="/services/ai-autonomous-supply-chain" element={<AIAutonomousSupplyChain />} />
                <Route path="/services/ai-financial-planning" element={<AIFinancialPlanning />} />
                
                {/* Pricing Routes */}
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/pricing-guide" element={<PricingGuide />} />
                
                {/* Content Routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                
                {/* Legal Routes */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

// Core pages
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));

// New AI Services 2025
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));
const AIComplianceCopilot = createLazyComponent(() => import('./pages/services/ai-compliance-copilot'));

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

// New Micro SAAS Services 2025
const AILegalDocumentAutomationPlatform = createLazyComponent(() => import('./pages/services/AILegalDocumentAutomationPlatform'));
const AIHealthcareAnalyticsPlatform = createLazyComponent(() => import('./pages/services/AIHealthcareAnalyticsPlatform'));
const AIFinancialTradingPlatform = createLazyComponent(() => import('./pages/services/AIFinancialTradingPlatform'));
const AISupplyChainOptimizationPlatform = createLazyComponent(() => import('./pages/services/AISupplyChainOptimizationPlatform'));
const AIRealEstateInvestmentPlatform = createLazyComponent(() => import('./pages/services/AIRealEstateInvestmentPlatform'));

// New Micro SAAS Services Showcase 2025
const NewMicroSaasServicesShowcase2025 = createLazyComponent(() => import('./pages/NewMicroSaasServicesShowcase2025'));

// New pages I've created
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Events = createLazyComponent(() => import('./pages/Events'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));
const ScheduleDemo = createLazyComponent(() => import('./pages/ScheduleDemo'));

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

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error!}
          resetErrorBoundary={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return this.props.children;
  }
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <Router>
            <div className="min-h-screen bg-zion-blue">
              <Header onMenuClick={toggleSidebar} />
              
              <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
              
              <main className="flex-1">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    
                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurity />} />
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcare />} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                    <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} />
                    
                    {/* New Micro SAAS Services 2025 */}
                    <Route path="/services/ai-legal-document-automation-platform" element={<AILegalDocumentAutomationPlatform />} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalyticsPlatform />} />
                    <Route path="/services/ai-financial-trading-platform" element={<AIFinancialTradingPlatform />} />
                    <Route path="/services/ai-supply-chain-optimization-platform" element={<AISupplyChainOptimizationPlatform />} />
                    <Route path="/services/ai-real-estate-investment-platform" element={<AIRealEstateInvestmentPlatform />} />
                    
                    {/* Showcase pages */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                    <Route path="/new-micro-saas-services-2025" element={<NewMicroSaasServicesShowcase2025 />} />
                    
                    {/* 2031 Cutting-Edge Services */}
                    <Route path="/zion-cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
                    
                    {/* Comprehensive Pricing Guide 2031 */}
                    <Route path="/comprehensive-pricing-guide-2031" element={<ComprehensivePricingGuide2031 />} />
                    
                    {/* Additional pages */}
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/pricing" element={<Pricing />} />
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
                    <Route path="/video-call/:roomId" element={<VideoCall />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    
                    {/* New pages I've created */}
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    <Route path="/schedule-demo" element={<ScheduleDemo />} />
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