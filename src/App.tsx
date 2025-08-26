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

// New service pages
const AIServicesPage = lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = lazy(() => import('./pages/ITServicesPage'));
const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));

// Additional pages
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Partners = lazy(() => import('./pages/Partners'));
const Help = lazy(() => import('./pages/Help'));
const Services = lazy(() => import('./pages/Services'));

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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              
              {/* Service Routes */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/innovative-services-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/comprehensive-services-2027" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-2027" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/enhanced-innovative-services-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
              
              {/* Additional Routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/help" element={<Help />} />
              <Route path="/services-overview" element={<Services />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-white text-2xl">Page Not Found</div>} />
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