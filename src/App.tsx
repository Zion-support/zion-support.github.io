import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import PerformanceMonitor from './components/PerformanceMonitor';
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
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));
const Help = React.lazy(() => import('./pages/Help'));
const Status = React.lazy(() => import('./pages/Status'));
const Security = React.lazy(() => import('./pages/Security'));

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));

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

// New missing pages - using placeholder components for now
const Team = React.lazy(() => import('./pages/Team'));
const Help = React.lazy(() => import('./pages/Help'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Leadership = React.lazy(() => import('./pages/Leadership'));
const Events = React.lazy(() => import('./pages/Events'));

// Service sub-pages
const AIAnalytics = React.lazy(() => import('./pages/Services/AIAnalytics'));
const Cybersecurity = React.lazy(() => import('./pages/Services/Cybersecurity'));
const CloudDevOps = React.lazy(() => import('./pages/Services/CloudDevOps'));
const IoTEdge = React.lazy(() => import('./pages/Services/IoTEdge'));
const QuantumComputing = React.lazy(() => import('./pages/Services/QuantumComputing'));
const Blockchain = React.lazy(() => import('./pages/Services/Blockchain'));
const DigitalTwin = React.lazy(() => import('./pages/Services/DigitalTwin'));
const Sustainability = React.lazy(() => import('./pages/Services/Sustainability'));
const FiveGSolutions = React.lazy(() => import('./pages/Services/FiveGSolutions'));

// Micro SAAS sub-pages
const AIBusinessIntelligence = React.lazy(() => import('./pages/MicroSAAS/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/MicroSAAS/CustomerExperience'));
const QuantumComputingSAAS = React.lazy(() => import('./pages/MicroSAAS/QuantumComputing'));
const SupplyChain = React.lazy(() => import('./pages/MicroSAAS/SupplyChain'));
const CybersecuritySAAS = React.lazy(() => import('./pages/MicroSAAS/Cybersecurity'));
const IoTEdgeSAAS = React.lazy(() => import('./pages/MicroSAAS/IoTEdge'));
const ContentCreation = React.lazy(() => import('./pages/MicroSAAS/ContentCreation'));
const HRPlatform = React.lazy(() => import('./pages/MicroSAAS/HRPlatform'));

// IT Services sub-pages
const Infrastructure = React.lazy(() => import('./pages/ITServices/Infrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/ITServices/DigitalTransformation'));
const Consulting = React.lazy(() => import('./pages/ITServices/Consulting'));
const OnsiteSupport = React.lazy(() => import('./pages/ITServices/OnsiteSupport'));
const GreenITServices = React.lazy(() => import('./pages/ITServices/GreenIT'));

// Marketplace sub-pages
const Marketplace = React.lazy(() => import('./pages/Marketplace/Marketplace'));
const Products = React.lazy(() => import('./pages/Marketplace/Products'));
const Talent = React.lazy(() => import('./pages/Marketplace/Talent'));
const Equipment = React.lazy(() => import('./pages/Marketplace/Equipment'));
const Categories = React.lazy(() => import('./pages/Marketplace/Categories'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
        {/* Futuristic Animated Background */}
        <FuturisticAnimatedBackground />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
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
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services-advertising" element={<ServicesAdvertising />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/micro-saas-services" element={<MicroSaasServices />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              <Route path="/hire-ai" element={<ZionHireAI />} />
              <Route path="/innovative-services-2027" element={<InnovativeServices2027 />} />
              <Route path="/comprehensive-pricing-2027" element={<ComprehensivePricing2027 />} />
              <Route path="/all-services-2027" element={<AllServices2027 />} />
              
              {/* Company Pages */}
              <Route path="/team" element={<Team />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/events" element={<Events />} />
              
              {/* Support & Resources */}
              <Route path="/help" element={<Help />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              
              {/* Service Sub-pages */}
              <Route path="/services/ai-analytics" element={<AIAnalytics />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/iot-edge" element={<IoTEdge />} />
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/blockchain" element={<Blockchain />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              <Route path="/services/5g-solutions" element={<FiveGSolutions />} />
              
              {/* Micro SAAS Sub-pages */}
              <Route path="/micro-saas/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/micro-saas/customer-experience" element={<CustomerExperience />} />
              <Route path="/micro-saas/quantum-computing" element={<QuantumComputingSAAS />} />
              <Route path="/micro-saas/supply-chain" element={<SupplyChain />} />
              <Route path="/micro-saas/cybersecurity" element={<CybersecuritySAAS />} />
              <Route path="/micro-saas/iot-edge" element={<IoTEdgeSAAS />} />
              <Route path="/micro-saas/content-creation" element={<ContentCreation />} />
              <Route path="/micro-saas/hr-platform" element={<HRPlatform />} />
              
              {/* IT Services Sub-pages */}
              <Route path="/it-services/infrastructure" element={<Infrastructure />} />
              <Route path="/it-services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/it-services/consulting" element={<Consulting />} />
              <Route path="/it-services/onsite-support" element={<OnsiteSupport />} />
              <Route path="/it-services/green-it" element={<GreenITServices />} />
              <Route path="/it-onsite-services" element={<OnsiteSupport />} />
              
              {/* Marketplace Sub-pages */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/products" element={<Products />} />
              <Route path="/marketplace/talent" element={<Talent />} />
              <Route path="/marketplace/equipment" element={<Equipment />} />
              <Route path="/marketplace/services" element={<ServicesPage />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/categories" element={<Categories />} />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <Sidebar />
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
                <Route path="/help" element={<Help />} />
                <Route path="/status" element={<Status />} />
                <Route path="/security" element={<Security />} />
                
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
        </div>
        
        {/* Footer */}
        <FuturisticFooter />
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;