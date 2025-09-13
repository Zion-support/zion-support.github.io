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
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const MarketplaceProducts = React.lazy(() => import('./pages/marketplace/Products'));
const MarketplaceTalent = React.lazy(() => import('./pages/marketplace/Talent'));
const MarketplaceEquipment = React.lazy(() => import('./pages/marketplace/Equipment'));
const MarketplaceServices = React.lazy(() => import('./pages/marketplace/Services'));
const LoginPage = React.lazy(() => import('./pages/Login'));

// New 2025 service imports
const UltimateServicesShowcase2025 = React.lazy(() => import('./pages/UltimateServicesShowcase2025'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = React.lazy(() => import('./pages/ComprehensivePricing2026'));

// 2028 Services Showcase
const InnovativeServicesShowcase2028 = React.lazy(() => import('./pages/InnovativeServicesShowcase2028'));

// Sitemap-aligned pages
const AiSolutions = React.lazy(() => import('./pages/AiSolutions'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const SolutionsEnterprise = React.lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = React.lazy(() => import('./pages/solutions/Healthcare'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));

// Simple placeholder pages for missing ones
const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

const MarketplacePlaceholder = () => (
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

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <AppHeader />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/services" element={<Services />} />
                <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/talent" element={<Talent />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/green-it" element={<GreenIT />} />
                <Route path="/marketplace" element={<MarketplacePlaceholder />} />
                <Route path="/marketplace/products" element={<MarketplaceProducts />} />
                <Route path="/marketplace/talent" element={<MarketplaceTalent />} />
                <Route path="/marketplace/equipment" element={<MarketplaceEquipment />} />
                <Route path="/marketplace/services" element={<MarketplaceServices />} />
                <Route path="/ai-solutions" element={<AiSolutions />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />
                <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
                <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
                <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
                <Route path="/innovative-services-2028" element={<InnovativeServicesShowcase2028 />} />
                <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/comprehensive-pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/comprehensive-services-2025" element={<ComprehensiveServicesLanding2025 />} />
                <Route path="/enhanced-services-landing" element={<EnhancedServicesLanding />} />
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/micro-saas-products" element={<MicroSaaSProducts />} />
                <Route path="/careers" element={<Careers />} />
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