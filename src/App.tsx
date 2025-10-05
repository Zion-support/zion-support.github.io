import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PromotionalBanner } from './components/PromotionalBanner';
import { NewContentPromotionalBanner } from './components/NewContentPromotionalBanner';
// Removed direct import to avoid name collision with lazy import below
import { ServicesHighlight } from './components/ServicesHighlight';
import { LoggingTest } from './components/LoggingTest';
import './index.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  useEffect(() => {
    // Initialize all optimization systems
    const initializeOptimizations = () => {
      try {
        // Initialize performance monitoring
        performanceOptimizer.startPerformanceMonitoring();
        performanceMonitor.startMonitoring();
        
        // Initialize security enhancements
        // securityEnhancer.setupSecurityMonitoring();
        
        // Initialize SEO tracking
        // seoOptimizer.trackPageView();
        
        // Set up error reporting
        // errorHandler.setReportingEnabled(true);
        
        console.log('All optimization systems initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
        // errorHandler.handleError({
        //   type: 'Initialization Error' 
        //   message: 'Failed to initialize optimization systems' 
        //   error: error.message 
        //   timestamp: new Date().toISOString()
        // });
      }
    };

    // Initialize optimizations after component mount
    initializeOptimizations();

    // Cleanup on unmount
    return () => {
      performanceOptimizer.cleanup();
      performanceMonitor.stopMonitoring();
    };
  }, []);

  return (
    <div>
      {/* <EnhancedSEO /> */}
      <Router>
<<<<<<< HEAD
        <Suspense fallback={<EnhancedLoading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/team' element={<Team />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} />
          </Routes>
        </Suspense>
=======
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          <PromotionalBanner />
          <NewContentPromotionalBanner />
          
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
                <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/logging-test" element={<LoggingTest />} />
                
                {/* New routes for missing pages */}
                <Route path="/api-docs" element={<APIDocumentation />} />
                <Route path="/developers" element={<DeveloperPortal />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/community" element={<Community />} />
                
                {/* Enhanced Routes */}
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />
                <Route path="/services/innovative-2025" element={<InnovativeServicesLanding2025 />} />
                <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                <Route path="/training" element={<Training />} />
                <Route path="/support" element={<Support />} />
                <Route path="/demo" element={<Demo />} />
                
                {/* New Content Showcase Routes */}
                <Route path="/ultimate-services-showcase-2025" element={<UltimateServicesShowcase2025Page />} />
                <Route path="/content-showcase" element={<ContentShowcase />} />
                <Route path="/interactive-demos" element={<InteractiveDemoShowcase />} />

                <Route path="/investors" element={<Investors />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/press" element={<Press />} />
                <Route path="/blog/ai-business-trends-2025" element={<NewBlogPost />} />
                
                {/* New content showcase routes */}
                <Route path="/new-content-showcase" element={<NewContentShowcase />} />
                <Route path="/ai-innovation-hub" element={<AIInnovationHub />} />
                <Route path="/blog/new-ai-services-announcement" element={<BlogPostNewContent />} />
                <Route path="/case-study-ai-automation-success" element={<CaseStudyAIAutomationSuccess />} />
                
                {/* New blog posts */}
                <Route path="/blog/ai-revolution-2025" element={<AIRevolution2025 />} />
                <Route path="/blog/quantum-computing-business" element={<QuantumComputingBusiness />} />
                <Route path="/blog/AI-Business-Automation-2025" element={<AIBusinessAutomation2025 />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />

                {/* New innovative service routes */}
                <Route path="/services/ai-legal-document-generator" element={<AIPoweredLegalDocumentGenerator />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPlatform />} />
                <Route path="/services/blockchain-supply-chain-transparency" element={<BlockchainSupplyChainTransparency />} />
                <Route path="/services/quantum-computing-solutions" element={<QuantumComputingSolutions />} />
                <Route path="/services/ai-powered-customer-success-platform" element={<AIPoweredCustomerSuccessPlatform />} />
                <Route path="/services/AI-Business-Automation" element={<AIBusinessAutomation />} />

                {/* New content routes */}
                <Route path="/innovative-tech-solutions-2025" element={<InnovativeTechSolutions2025 />} />
                <Route path="/blog/the-future-of-ai-in-business-2025" element={<TheFutureOfAIInBusiness2025 />} />

                {/* New AI-powered service routes */}
                <Route path="/services/ai-powered-customer-success-platform" element={<AIPoweredCustomerSuccessPlatform />} />
                <Route path="/services/ai-powered-marketing-automation" element={<AIPoweredMarketingAutomation />} />

                {/* Enhanced 404 route */}
                <Route path="*" element={
                  <div className="min-h-screen bg-futuristic flex items-center justify-center">
                    <SEO 
                      title="Page Not Found - Zion Tech Group"
                      description="The page you're looking for doesn't exist."
                      keywords="404, page not found, Zion Tech Group"
                      ogType="website"
                    />
                    <div className="text-center text-white">
                      <h1 className="text-6xl font-bold mb-4 animate-fade-in">404</h1>
                      <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-200">Page Not Found</p>
                      <p className="text-gray-400 mb-8 animate-fade-in animation-delay-400">The page you're looking for doesn't exist.</p>
                      <button 
                        onClick={() => window.history.back()} 
                        className="btn-futuristic mr-4"
                      >
                        Go Back
                      </button>
                      <button 
                        onClick={() => window.location.href = '/'} 
                        className="btn-futuristic"
                      >
                        Go Home
                      </button>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
        </div>
>>>>>>> origin/cursor/undefined-awde-task-40d3
      </Router>
      <SystemMonitor />
    </div>
  );
}

export default App;