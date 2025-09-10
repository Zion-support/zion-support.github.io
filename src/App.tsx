import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import ChatAssistant from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { ModernUIEnhancer } from './components/ModernUIEnhancer';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import SEO from './components/SEO';

// Core pages
const Home = React.lazy(() => import('./pages/Index'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/ContactPage'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Pricing = React.lazy(() => import('./pages/Index')); // Placeholder
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const RequestQuote = React.lazy(() => import('./pages/Index')); // Placeholder
const Dashboard = React.lazy(() => import('./pages/Index')); // Placeholder
const Login = React.lazy(() => import('./pages/Index')); // Placeholder
const FAQ = React.lazy(() => import('./pages/Index')); // Placeholder
const Privacy = React.lazy(() => import('./pages/Index')); // Placeholder
const Terms = React.lazy(() => import('./pages/Index')); // Placeholder
const Cookies = React.lazy(() => import('./pages/Index')); // Placeholder
const SearchPage = React.lazy(() => import('./pages/Index')); // Placeholder
const Partners = React.lazy(() => import('./pages/PartnersPage'));
const WhitePapers = React.lazy(() => import('./pages/Index')); // Placeholder
const Webinars = React.lazy(() => import('./pages/Index')); // Placeholder
const APIDocumentation = React.lazy(() => import('./pages/API'));
const Developers = React.lazy(() => import('./pages/Index')); // Placeholder
const Training = React.lazy(() => import('./pages/Index')); // Placeholder
const Community = React.lazy(() => import('./pages/Community'));
const Support = React.lazy(() => import('./pages/Index')); // Placeholder
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const InvestorRelations = React.lazy(() => import('./pages/Index')); // Placeholder
const Press = React.lazy(() => import('./pages/Press'));
const Legal = React.lazy(() => import('./pages/Legal'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const Demo = React.lazy(() => import('./pages/Index')); // Placeholder

// AI Service pages - using placeholders for now
const AIHealthcarePlatform = React.lazy(() => import('./pages/Index')); // Placeholder
const AIContentCreation = React.lazy(() => import('./pages/Index')); // Placeholder
const AICybersecurity = React.lazy(() => import('./pages/Index')); // Placeholder
const QuantumComputing = React.lazy(() => import('./pages/Index')); // Placeholder
const IoTEdgeComputing = React.lazy(() => import('./pages/Index')); // Placeholder

// Enhanced services pages - using placeholders for now
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/Index')); // Placeholder
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/Index')); // Placeholder
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/Index')); // Placeholder
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/Index')); // Placeholder
const EnhancedServicesLanding = React.lazy(() => import('./pages/Index')); // Placeholder
const RevolutionaryServicesLanding = React.lazy(() => import('./pages/Index')); // Placeholder
const RevolutionaryPricingGuide = React.lazy(() => import('./pages/Index')); // Placeholder
const ComprehensiveServicesShowcase2029 = React.lazy(() => import('./pages/Index')); // Placeholder
const InnovativeMicroSaasServicesShowcase2025 = React.lazy(() => import('./pages/Index')); // Placeholder
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/Index')); // Placeholder
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/Index')); // Placeholder

// Service pages - using existing pages
const CloudDevOps = React.lazy(() => import('./pages/Index')); // Placeholder
const DigitalTwin = React.lazy(() => import('./pages/Index')); // Placeholder
const DataAnalytics = React.lazy(() => import('./pages/Index')); // Placeholder
const ITInfrastructure = React.lazy(() => import('./pages/Index')); // Placeholder
const AIBusinessIntelligence = React.lazy(() => import('./pages/Index')); // Placeholder
const MicroSaaSProducts = React.lazy(() => import('./pages/Index')); // Placeholder

// Import the new pages
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const Zion2026InnovativeServicesShowcase = React.lazy(() => import('./pages/Zion2026InnovativeServicesShowcase'));
const Zion2026ServicesOverview = React.lazy(() => import('./pages/Zion2026ServicesOverview'));
const Zion2026ComprehensivePricingGuide = React.lazy(() => import('./pages/Zion2026ComprehensivePricingGuide'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));

// Simple placeholder pages for missing ones
const Signup = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Sign Up - Zion Tech Group"
      description="Join our platform and start building the future with AI-powered solutions."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <p className="text-xl text-gray-300">Join our platform</p>
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

const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center text-white">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <PerformanceOptimizer>
          <AccessibilityEnhancer>
            <ModernUIEnhancer>
              <div className="min-h-screen bg-futuristic">
                <AppHeader />
                
                <main id="main-content" className="flex-1">
                  <Suspense fallback={<EnhancedLoadingSpinner />}>
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
                      <Route path="/sitemap" element={<Sitemap />} />
                      <Route path="/partners" element={<Partners />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/solutions" element={<Solutions />} />
                      <Route path="/resources" element={<Resources />} />
                      <Route path="/case-studies" element={<CaseStudies />} />
                      <Route path="/white-papers" element={<WhitePapers />} />
                      <Route path="/webinars" element={<Webinars />} />
                      <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                      <Route path="/demo" element={<Demo />} />
                      <Route path="/community" element={<Community />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/schedule-demo" element={<ScheduleDemo />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/search" element={<SearchPage />} />
                      <Route path="/api-docs" element={<APIDocumentation />} />
                      <Route path="/developers" element={<Developers />} />
                      <Route path="/training" element={<Training />} />
                      <Route path="/investors" element={<InvestorRelations />} />
                      <Route path="/press" element={<Press />} />
                      <Route path="/legal" element={<Legal />} />
                      <Route path="/marketplace" element={<Marketplace />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/request-quote" element={<RequestQuote />} />
                      
                      {/* Enhanced Services Routes */}
                      <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                      <Route path="/services/comprehensive-2030" element={<ComprehensiveServicesLanding2030 />} />
                      <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                      <Route path="/services/innovative-micro-saas-2025" element={<InnovativeMicroSaasServicesShowcase2025 />} />
                      <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                      <Route path="/services/showcase-2029" element={<ComprehensiveServicesShowcase2029 />} />
                      <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                      <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                      <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                      <Route path="/ultimate-services-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
                      <Route path="/zion-2026-services" element={<Zion2026InnovativeServicesShowcase />} />
                      <Route path="/zion-2026-overview" element={<Zion2026ServicesOverview />} />
                      <Route path="/zion-2026-pricing" element={<Zion2026ComprehensivePricingGuide />} />

                      {/* Service Routes - only for existing pages */}
                      <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                      <Route path="/services/digital-twin" element={<DigitalTwin />} />
                      <Route path="/services/data-analytics" element={<DataAnalytics />} />
                      <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                      <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                      
                      {/* AI Service Routes */}
                      <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                      <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                      <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                      <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                      <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />

                      {/* Catch all route */}
                      <Route path="*" element={<Home />} />
                    </Routes>
                  </Suspense>
                </main>
                
                <Footer />
                <ChatAssistant />
              </div>
            </ModernUIEnhancer>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
      </Router>
    </ErrorBoundary>
  );
}

export default App;