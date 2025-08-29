import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Essential pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/about'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Enhanced components
const Community = React.lazy(() => import('./pages/Community'));
const Demo = React.lazy(() => import('./pages/Demo'));

// New pages - only import existing ones
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2030'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));

// New 2026 service pages
const InnovativeMicroSaasServices2026 = React.lazy(() => import('./pages/InnovativeMicroSaasServices2026'));
const AIServices2026 = React.lazy(() => import('./pages/AIServices2026'));
const ITInfrastructure2026 = React.lazy(() => import('./pages/ITInfrastructure2026'));

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
                <Route path="/comprehensive-services-2030" element={<ComprehensiveServicesLanding2030 />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/community" element={<Community />} />
                <Route path="/demo" element={<Demo />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                
                {/* New comprehensive services showcase 2026 */}
                <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                
                {/* New comprehensive pricing guide 2026 */}
                <Route path="/comprehensive-pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />

                {/* New 2026 service routes */}
                <Route path="/innovative-micro-saas-services-2026" element={<InnovativeMicroSaasServices2026 />} />
                <Route path="/ai-services-2026" element={<AIServices2026 />} />
                <Route path="/it-infrastructure-2026" element={<ITInfrastructure2026 />} />

                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;