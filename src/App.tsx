import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import { EnhancedLoadingSpinner } from './components/EnhancedLoadingSpinner';

// Lazy load pages with better chunking
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ComprehensiveServices = lazy(() => import('./pages/ComprehensiveServices'));
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PartnersPage = lazy(() => import('./pages/Partners'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const GreenIT = lazy(() => import('./pages/GreenIT'));
const EnhancedServices = lazy(() => import('./pages/EnhancedServices'));
const Talent = lazy(() => import('./pages/Talent'));
const Equipment = lazy(() => import('./pages/EquipmentPage'));
const Categories = lazy(() => import('./pages/CategoryDetail'));
const ITOnsiteServices = lazy(() => import('./pages/EnterpriseIT'));
const Help = lazy(() => import('./pages/Help'));
const Security = lazy(() => import('./pages/Security'));
const Status = lazy(() => import('./pages/Status'));
const ComprehensiveServicesShowcase2029 = lazy(() => import('./pages/ComprehensiveServicesShowcase2029'));

// New service pages
const AIServicesPage = lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = lazy(() => import('./pages/ITServicesPage'));
const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));

// Service pages
const AIAnalyticsPage = lazy(() => import('./pages/services/ai-analytics'));
const CybersecurityPage = lazy(() => import('./pages/services/cybersecurity'));
const CloudDevOpsPage = lazy(() => import('./pages/services/cloud-devops'));

// Additional pages
const SolutionsPage = lazy(() => import('./pages/solutions'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
        {/* Futuristic Animated Background */}
        <FuturisticAnimatedBackground />
        
        {/* Navigation */}
        <FuturisticNavigation />
        
        <main className="flex-1 relative z-10">
          <Suspense fallback={<EnhancedLoadingSpinner variant="ai" />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/comprehensive-pricing" element={<ComprehensivePricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Legal & Policy Routes */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              
              {/* Company Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/careers" element={<Careers />} />
              
              {/* Support Routes */}
              <Route path="/help" element={<Help />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/services/showcase-2029" element={<ComprehensiveServicesShowcase2029 />} />
              
              {/* Service Pages */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/microsaas-services" element={<MicroSAASServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/innovative-services-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/comprehensive-services-overview-2027" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/enhanced-innovative-services-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
              
              {/* New Comprehensive Routes */}
              <Route path="/services-overview" element={<ComprehensiveServicesOverview />} />
              <Route path="/pricing-guide" element={<ComprehensivePricingGuide2027New />} />
              
              {/* Emerging Tech Routes */}
              <Route path="/emerging-tech" element={<GreenIT />} />
              <Route path="/emerging-tech/:service" element={<GreenIT />} />
              
              {/* Service routes */}
              <Route path="/services/ai-analytics" element={<AIAnalyticsPage />} />
              <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/services/cloud-devops" element={<CloudDevOpsPage />} />
              
              {/* Additional routes */}
              <Route path="/solutions" element={<SolutionsPage />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <FuturisticFooter />
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;