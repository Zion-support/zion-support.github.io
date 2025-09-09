import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage.jsx'));
const MarketplacePage = React.lazy(() => import('./pages/MarketplacePage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.jsx'));
const Marketplace = React.lazy(() => import('./pages/Marketplace.jsx'));
const Talent = React.lazy(() => import('./pages/Talent.jsx'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage.jsx'));
const Categories = React.lazy(() => import('./pages/CategoryDetail.jsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.jsx'));
const ITOnsiteServices = React.lazy(() => import('./pages/EnterpriseIT.jsx'));
const Blog = React.lazy(() => import('./pages/Blog.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const Careers = React.lazy(() => import('./pages/Careers.jsx'));
const Help = React.lazy(() => import('./pages/Help.jsx'));
const Security = React.lazy(() => import('./pages/Security.jsx'));
const Status = React.lazy(() => import('./pages/Status.jsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.jsx'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center" role="status" aria-label="Loading page content">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
    </div>
  </div>
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
    <AccessibilityEnhancer>
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
                <Route path="/green-it" element={<GreenIT />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/enhanced-services" element={<EnhancedServices />} />
                
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
                
                {/* Emerging Tech Routes */}
                <Route path="/emerging-tech" element={<GreenIT />} />
                <Route path="/emerging-tech/:service" element={<GreenIT />} />
                
                {/* Marketplace Routes */}
                <Route path="/marketplace" element={<GreenIT />} />
                <Route path="/marketplace/:service" element={<GreenIT />} />
              </Routes>
            </Suspense>
          </main>
          
          {/* Footer */}
          <FuturisticFooter />
          
          {/* Chat Assistant */}
          <ChatAssistant />
          
          {/* Performance Monitor - Only in development */}
          <PerformanceMonitor />
        </div>
      </Router>
    </AccessibilityEnhancer>
  );
}

export default App;