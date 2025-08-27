import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages with better chunking
const Home = React.lazy(() => import('./pages/Home.tsx'));
const About = React.lazy(() => import('./pages/About.tsx'));
const Contact = React.lazy(() => import('./pages/Contact.tsx'));
const Blog = React.lazy(() => import('./pages/Blog.tsx'));
const BlogPost = React.lazy(() => import('./pages/BlogPost.tsx'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage.tsx'));
const Login = React.lazy(() => import('./pages/Login.tsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'));
const Careers = React.lazy(() => import('./pages/Careers.tsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.tsx'));
const Terms = React.lazy(() => import('./pages/Terms.tsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.tsx'));
const Services = React.lazy(() => import('./pages/Services.tsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.tsx'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices.tsx'));

// Service pages
const AIServicesPage = React.lazy(() => import('./pages/services/AIServicesPage.tsx'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/services/CybersecurityServicesPage.tsx'));
const CloudSolutionsPage = React.lazy(() => import('./pages/services/CloudSolutionsPage.tsx'));
const ITConsultingPage = React.lazy(() => import('./pages/services/ITConsultingPage.tsx'));
const QuantumTechnologyPage = React.lazy(() => import('./pages/QuantumTechnologyPage.tsx'));
const BlockchainServicesPage = React.lazy(() => import('./pages/BlockchainServicesPage.tsx'));
const DigitalTransformationPage = React.lazy(() => import('./pages/DigitalTransformationPage.tsx'));
const MicroSAASPage = React.lazy(() => import('./pages/MicroSAASPage.tsx'));
const EnterprisePage = React.lazy(() => import('./pages/EnterprisePage.tsx'));

// Company pages
const TeamPage = React.lazy(() => import('./pages/TeamPage.tsx'));

// Additional service pages
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage.tsx'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage.tsx'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027.tsx'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027.tsx'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027.tsx'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview.tsx'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.tsx'));
const EnhancedZionServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedZionServicesShowcase2025.tsx'));
const ZionTechGroupMarketing2025 = React.lazy(() => import('./pages/ZionTechGroupMarketing2025.tsx'));
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
      </div>
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
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/services" element={<Services />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// 2027 Innovation Services
const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensivePricing2027 = lazy(() => import('./pages/ComprehensivePricing2027'));
const AllServices2027 = lazy(() => import('./pages/AllServices2027'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Basic Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 2027 Innovation Services */}
          <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
          <Route path="/comprehensive-pricing-2027" element={<ComprehensivePricing2027 />} />
          <Route path="/all-services-2027" element={<AllServices2027 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;