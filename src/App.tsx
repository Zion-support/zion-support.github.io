import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityPanel } from './components/ui/accessibility-panel';
import LoadingSpinner from './components/LoadingSpinner';

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
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Demo = React.lazy(() => import('./pages/Demo'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const AllServices2025 = React.lazy(() => import('./pages/AllServices2025'));

// New service pages
const ServicesIndex = React.lazy(() => import('./pages/services/index'));
const AIAnalytics = React.lazy(() => import('./pages/services/ai-analytics'));
const Cybersecurity = React.lazy(() => import('./pages/services/Cybersecurity'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const IoTEdge = React.lazy(() => import('./pages/services/IoTEdgeComputing'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const Blockchain = React.lazy(() => import('./pages/services/BlockchainWeb3'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const Sustainability = React.lazy(() => import('./pages/services/GreenIT'));

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
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
        {/* Futuristic Background */}
        <FuturisticBackground />
        <FuturisticBackgroundOverlay />
        
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Main pages */}
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
              
              {/* Marketplace routes */}
              <Route path="/marketplace" element={<MarketplaceIndex />} />
              
              {/* Fallback for any unmatched routes */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
        <PerformanceOptimizer />
        <AccessibilityPanel 
          enabled={true}
          defaultSettings={{
            highContrast: false,
            largeText: false,
            reducedMotion: false,
            focusIndicator: true,
            keyboardNavigation: true
          }}
          onSettingsChange={(settings) => {
            // Handle accessibility settings changes
            console.log('Accessibility settings updated:', settings);
          }}
        />
      </div>
    </Router>
  )
}

export default App;