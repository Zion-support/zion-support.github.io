import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnhancedFuturisticNavigation } from './components/EnhancedFuturisticNavigation';
import { EnhancedFuturisticFooter } from './components/EnhancedFuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages - only import existing pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Services = React.lazy(() => import('./pages/Services'));
const Events = React.lazy(() => import('./pages/Events'));
const News = React.lazy(() => import('./pages/News'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));

// Service pages that exist
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));

// Zion 2026 Innovative Services pages
const Zion2026InnovativeServicesShowcase = React.lazy(() => import('./pages/Zion2026InnovativeServicesShowcase'));
const Zion2026ComprehensivePricingGuide = React.lazy(() => import('./pages/Zion2026ComprehensivePricingGuide'));
const Zion2026ServicesOverview = React.lazy(() => import('./pages/Zion2026ServicesOverview'));

// Enhanced 2027 Services pages
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview'));

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
        <EnhancedFuturisticNavigation />
        <main>
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/services" element={<Services />} />
              <Route path="/events" element={<Events />} />
              <Route path="/news" element={<News />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
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
              
              {/* 404 Route */}
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