import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
// Core pages
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Partners = React.lazy(() => import('./pages/Partners'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Webinars = React.lazy(() => import('./pages/Webinars'));

// Additional pages from enhancement branch
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Signup = React.lazy(() => import('./pages/Signup'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const APIDocumentation = React.lazy(() => import('./pages/APIDocumentation'));
const Developers = React.lazy(() => import('./pages/Developers'));
const Training = React.lazy(() => import('./pages/Training'));
const Community = React.lazy(() => import('./pages/Community'));
const Support = React.lazy(() => import('./pages/Support'));
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const InvestorRelations = React.lazy(() => import('./pages/InvestorRelations'));
const Press = React.lazy(() => import('./pages/Press'));
const Legal = React.lazy(() => import('./pages/Legal'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding.tsx'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App min-h-screen bg-zion-slate-dark">
          {/* Futuristic animated background */}
          <FuturisticAnimatedBackground variant="default" intensity="low" />
          
          {/* Enhanced Header */}
          <AppHeader />
          
          {/* Main Content */}
          <main className="pt-24">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Core Routes */}
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
                <Route path="/resources" element={<Resources />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/api-docs" element={<APIDocumentation />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/training" element={<Training />} />
                <Route path="/community" element={<Community />} />
                <Route path="/support" element={<Support />} />
                <Route path="/demo" element={<ScheduleDemo />} />
                <Route path="/investors" element={<InvestorRelations />} />
                <Route path="/press" element={<Press />} />
                <Route path="/legal" element={<Legal />} />
                
                {/* Additional Routes from Enhancement Branch */}
                <Route path="/talent" element={<Talent />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/green-it" element={<GreenIT />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/security" element={<Security />} />
                <Route path="/status" element={<Status />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/enhanced-services" element={<EnhancedServices />} />
                <Route path="/ultimate-services-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
                <Route path="/enhanced-services-2025" element={<EnhancedServicesPage />} />
                <Route path="/comprehensive-services-2025" element={<EnhancedServicesShowcase2025 />} />
                <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServicesShowcase2030 />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                
                {/* Pricing Guide Routes */}
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                
                {/* Catch all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          
          {/* Enhanced Footer */}
          <EnhancedFooter />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;