import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import { EnhancedLoadingSpinner } from './components/EnhancedLoadingSpinner';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.jsx'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));
const Help = React.lazy(() => import('./pages/Help'));
const Security = React.lazy(() => import('./pages/Security'));
const Cookies = React.lazy(() => import('./pages/Cookies'));

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const ExpandedServicesShowcase2027 = React.lazy(() => import('./pages/ExpandedServicesShowcase2027'));
const ExpandedPricingGuide2027 = React.lazy(() => import('./pages/ExpandedPricingGuide2027'));

// Enhanced loading component with better UX
const LoadingSpinner = () => (
  <EnhancedLoadingSpinner 
    size="md" 
    variant="cyber" 
    message="Loading amazing experiences..." 
  />
);

// Additional lazy loaded pages
const AIAnalytics = React.lazy(() => import('./pages/services/ai-analytics'));
const Cybersecurity = React.lazy(() => import('./pages/services/cybersecurity'));
const CloudDevOps = React.lazy(() => import('./pages/services/cloud-devops'));
const IoTEdge = React.lazy(() => import('./pages/services/iot-edge'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const Blockchain = React.lazy(() => import('./pages/services/blockchain'));
const DigitalTwin = React.lazy(() => import('./pages/services/digital-twin'));
const Sustainability = React.lazy(() => import('./pages/services/sustainability'));
const Infrastructure = React.lazy(() => import('./pages/services/infrastructure'));
const Team = React.lazy(() => import('./pages/Team'));
const Help = React.lazy(() => import('./pages/Help'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const MicroSaas = React.lazy(() => import('./pages/MicroSaas'));
const ITServices = React.lazy(() => import('./pages/ITServices'));

function App() {
  useEffect(() => {
    // Register service worker
    registerServiceWorker();
    
    // Monitor network status
    monitorNetworkStatus();
    
    // Monitor performance
    monitorPerformance();
    
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-futuristic">
        <AppHeader />
        
        {/* Navigation */}
        <FuturisticNavigation />
        
        <main className="flex-1 relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* AI Services Routes */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-services/:service" element={<AIServicesPage />} />
              
              {/* Micro SAAS Routes */}
              <Route path="/micro-saas" element={<MicroSAASServicesPage />} />
              <Route path="/micro-saas/:service" element={<MicroSAASServicesPage />} />
              
              {/* IT Services Routes */}
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/it-services/:service" element={<ITServicesPage />} />
              
              {/* Innovative Services 2027 Routes */}
              <Route path="/innovative-services-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-guide" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/enhanced-innovative-services-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
              <Route path="/expanded-services-showcase-2027" element={<ExpandedServicesShowcase2027 />} />
              <Route path="/expanded-pricing-guide-2027" element={<ExpandedPricingGuide2027 />} />
              
              {/* Emerging Tech Routes */}
              <Route path="/emerging-tech" element={<Home />} />
              <Route path="/emerging-tech/:service" element={<Home />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<Home />} />
              <Route path="/marketplace/:service" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
        
        {/* Accessibility Enhancer */}
        <AccessibilityEnhancer />
      </div>
    </Router>
  );
}

export default App;