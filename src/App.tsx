import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnhancedFuturisticNavigation } from './components/EnhancedFuturisticNavigation';
import { EnhancedFuturisticFooter } from './components/EnhancedFuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages - comprehensive import of all available pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Services = lazy(() => import('./pages/Services'));
const Events = lazy(() => import('./pages/Events'));
const News = lazy(() => import('./pages/News'));
const ResearchDevelopment = lazy(() => import('./pages/ResearchDevelopment'));
const Solutions = lazy(() => import('./pages/Solutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Pricing = lazy(() => import('./pages/Pricing'));
const GreenIT = lazy(() => import('./pages/GreenIT'));
const EnhancedServices = lazy(() => import('./pages/EnhancedServices'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const Login = lazy(() => import('./pages/Login'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudServices = lazy(() => import('./pages/CloudServices'));
const CybersecurityServices = lazy(() => import('./pages/CybersecurityServices'));
const InfrastructureServices = lazy(() => import('./pages/InfrastructureServices'));
const DigitalTransformationServices = lazy(() => import('./pages/DigitalTransformationServices'));
const ConsultingServices = lazy(() => import('./pages/ConsultingServices'));

// Enhanced service pages
const AIServicesPage = lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = lazy(() => import('./pages/ITServicesPage'));

// Service pages that exist
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));

// Zion 2026 Innovative Services pages
const Zion2026InnovativeServicesShowcase = lazy(() => import('./pages/Zion2026InnovativeServicesShowcase'));
const Zion2026ComprehensivePricingGuide = lazy(() => import('./pages/Zion2026ComprehensivePricingGuide'));
const Zion2026ServicesOverview = lazy(() => import('./pages/Zion2026ServicesOverview'));

// Enhanced 2027 Services pages
const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview = lazy(() => import('./pages/ComprehensiveServicesOverview'));

// Zion 2027 Advanced Services pages
const Zion2027AdvancedServicesShowcase = lazy(() => import('./pages/Zion2027AdvancedServicesShowcase'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-zion-cyan text-sm animate-pulse">Loading amazing experiences...</div>
        <p className="text-zion-cyan text-lg font-medium">Loading Zion Tech Group...</p>
        <p className="text-zion-slate-light text-sm mt-2">Preparing your experience</p>
      </div>
    </div>
  </div>
);

// 404 Not Found component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-cyan-500 mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">
        Go back home
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <FuturisticAnimatedBackground />
        
        {/* Navigation */}
        <EnhancedFuturisticNavigation />
        
        <main className="flex-1 relative z-10">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              
              {/* Service pages */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/infrastructure" element={<InfrastructureServices />} />
              <Route path="/services/transformation" element={<DigitalTransformationServices />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              
              {/* AI Services Routes */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
              <Route path="/it-services-page" element={<ITServicesPage />} />
              
              {/* Service Routes */}
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
              
              {/* Zion 2026 Innovative Services Routes */}
              <Route path="/zion-2026-innovative-services" element={<Zion2026InnovativeServicesShowcase />} />
              <Route path="/innovative-services-2026" element={<Zion2026InnovativeServicesShowcase />} />
              <Route path="/zion-2026-pricing-guide" element={<Zion2026ComprehensivePricingGuide />} />
              <Route path="/pricing-guide-2026" element={<Zion2026ComprehensivePricingGuide />} />
              <Route path="/zion-2026-services-overview" element={<Zion2026ServicesOverview />} />
              <Route path="/services-overview-2026" element={<Zion2026ServicesOverview />} />
              
              {/* Enhanced 2027 Services Routes */}
              <Route path="/innovative-services-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/comprehensive-services-overview-2027" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/enhanced-innovative-services-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
              <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview />} />
              
              {/* Zion 2027 Advanced Services Routes */}
              <Route path="/zion-2027-advanced-services" element={<Zion2027AdvancedServicesShowcase />} />
              <Route path="/advanced-services-2027" element={<Zion2027AdvancedServicesShowcase />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<GreenIT />} />
              <Route path="/marketplace/:service" element={<GreenIT />} />
              
              {/* 404 catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <EnhancedFuturisticFooter />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;