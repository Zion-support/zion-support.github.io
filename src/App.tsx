import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer.jsx';
import { PerformanceMonitor } from './components/PerformanceMonitor.jsx';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage.jsx'));
const MarketplacePage = React.lazy(() => import('./pages/MarketplacePage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const AdvancedServicesShowcase2027 = React.lazy(() => import('./pages/AdvancedServicesShowcase2027'));
const AdvancedPricingGuide2027 = React.lazy(() => import('./pages/AdvancedPricingGuide2027'));

// IT Services pages
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ITConsulting = React.lazy(() => import('./pages/services/ConsultingServices'));
const ITOnsiteSupport = React.lazy(() => import('./pages/services/ITOnsiteServices'));
const FiveGSolutions = React.lazy(() => import('./pages/services/FiveGEnterpriseSolutions'));

// Micro SaaS pages
const MicroSaasIndex = React.lazy(() => import('./pages/micro-saas/index'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/micro-saas/ai-business-intelligence'));
const CustomerExperience = React.lazy(() => import('./pages/micro-saas/customer-experience'));

// Marketplace pages
const MarketplaceIndex = React.lazy(() => import('./pages/marketplace/index'));

// Team pages
const Team = React.lazy(() => import('./pages/team/index'));

// Auth pages
const Signup = React.lazy(() => import('./pages/signup'));

// Support pages
const Help = React.lazy(() => import('./pages/help/index'));

// Legal & Security pages
const Security = React.lazy(() => import('./pages/security'));
const Status = React.lazy(() => import('./pages/status'));
const Cookies = React.lazy(() => import('./pages/cookies'));

// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-muted-foreground text-sm">Preparing your AI marketplace experience</p>
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
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        {/* Skip Links for Accessibility */}
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <a href="#navigation" className="skip-link sr-only focus:not-sr-only">
          Skip to navigation
        </a>
        
        <AppHeader />
        <main id="main-content" className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/team" element={<Team />} />
              <Route path="/help" element={<Help />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              
              {/* Services routes */}
              <Route path="/services" element={<ServicesIndex />} />
              <Route path="/services/ai-analytics" element={<AIAnalytics />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/iot-edge" element={<IoTEdge />} />
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/blockchain" element={<Blockchain />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              
              {/* IT Services routes */}
              <Route path="/it-services" element={<ServicesIndex />} />
              <Route path="/it-services/infrastructure" element={<ITInfrastructure />} />
              <Route path="/it-services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/it-services/consulting" element={<ITConsulting />} />
              <Route path="/it-services/onsite-support" element={<ITOnsiteSupport />} />
              <Route path="/it-services/green-it" element={<GreenIT />} />
              <Route path="/it-services/5g-solutions" element={<FiveGSolutions />} />
              
              {/* Micro SaaS routes */}
              <Route path="/micro-saas" element={<MicroSaasIndex />} />
              <Route path="/micro-saas/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/micro-saas/customer-experience" element={<CustomerExperience />} />
              
              {/* Innovative Services 2027 Routes */}
              <Route path="/innovative-services-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-guide" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/advanced-services-showcase" element={<AdvancedServicesShowcase2027 />} />
              <Route path="/advanced-pricing-guide" element={<AdvancedPricingGuide2027 />} />
              
              {/* Fallback for any unmatched routes */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
        <AccessibilityEnhancer />
        <PerformanceMonitor />
      </div>
    </Router>
  )
}

export default App;