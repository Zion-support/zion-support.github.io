import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
<<<<<<< HEAD
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
=======
import Footer from './components/Footer';
>>>>>>> 0019087cc94659218a6a56b7d706ee956e6c4958
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Import pages
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ServicesPage from './pages/services';
import PricingPage from './pages/pricing';

<<<<<<< HEAD
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
=======
export default function App() {
>>>>>>> 0019087cc94659218a6a56b7d706ee956e6c4958
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppHeader />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
        </div>
      </Router>
    </ErrorBoundary>
  );
}