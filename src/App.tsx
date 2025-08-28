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

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('../pages/contact'));
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
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025.tsx'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising.tsx'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030.tsx'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const InnovativeMicroSAASServices2025 = React.lazy(() => import('./pages/InnovativeMicroSAASServices2025'));

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
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/innovative-micro-saas-services-2025" element={<InnovativeMicroSAASServices2025 />} />

                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />

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