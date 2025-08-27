import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages with better chunking
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.tsx'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.tsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027.tsx'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027.tsx'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.tsx'));
const EnhancedZionServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedZionServicesShowcase2025.tsx'));
const ZionTechGroupMarketing2025 = React.lazy(() => import('./pages/ZionTechGroupMarketing2025.tsx'));

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

// Enhanced loading spinner with accessibility
const LoadingSpinner = () => (
  <div 
    className="min-h-screen bg-futuristic flex items-center justify-center"
    role="status"
    aria-label="Loading page content"
  >
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
      <div className="sr-only">Loading page content, please wait...</div>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
    <div className="text-center max-w-md">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
      <p className="text-zion-slate-light mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  // Performance monitoring
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <AppHeader />
        <main className="flex-1" role="main">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              
              {/* Service Routes */}
              <Route path="/services/ai" element={<AIServicesPage />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServicesPage />} />
              <Route path="/services/cloud" element={<CloudSolutionsPage />} />
              <Route path="/services/consulting" element={<ITConsultingPage />} />
              <Route path="/quantum-technology" element={<QuantumTechnologyPage />} />
              <Route path="/blockchain-services" element={<BlockchainServicesPage />} />
              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
              <Route path="/micro-saas" element={<MicroSAASPage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
              
              {/* Company Routes */}
              <Route path="/team" element={<TeamPage />} />
              
              {/* Legacy Routes */}
              <Route path="/services/overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/services/pricing" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/services/showcase" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/ultimate-services-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-2025" element={<ComprehensiveServicesLanding2025 />} />
              <Route path="/enhanced-zion-services-2025" element={<EnhancedZionServicesShowcase2025 />} />
              <Route path="/zion-tech-group-marketing-2025" element={<ZionTechGroupMarketing2025 />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
        <PerformanceMonitor />
      </div>
    </Router>
  );
}

export default App;