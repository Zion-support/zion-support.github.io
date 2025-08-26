import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
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
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices.jsx'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const NotFound = React.lazy(() => import('./pages/404.jsx'));
const InnovativeServices2027 = React.lazy(() => import('./pages/InnovativeServices2027'));
const ComprehensivePricing2027 = React.lazy(() => import('./pages/ComprehensivePricing2027'));
const AllServices2027 = React.lazy(() => import('./pages/AllServices2027'));

// Additional pages for missing routes
const Signup = React.lazy(() => import('./pages/Signup'));
const Team = React.lazy(() => import('./pages/Team'));
const MicroSAAS = React.lazy(() => import('./pages/MicroSAAS'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const Categories = React.lazy(() => import('./pages/Categories'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const Help = React.lazy(() => import('./pages/HelpCenterPage'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Cookies = React.lazy(() => import('./pages/Cookies'));

// Service-specific pages
const AIAnalytics = React.lazy(() => import('./pages/AIAnalytics'));
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity'));
const CloudDevOps = React.lazy(() => import('./pages/CloudDevOps'));
const IoTEdge = React.lazy(() => import('./pages/IoTEdge'));
const QuantumComputing = React.lazy(() => import('./pages/QuantumComputing'));
const Blockchain = React.lazy(() => import('./pages/Blockchain'));
const DigitalTwin = React.lazy(() => import('./pages/DigitalTwin'));
const Sustainability = React.lazy(() => import('./pages/Sustainability'));

// Micro SAAS pages
const AIBusinessIntelligence = React.lazy(() => import('./pages/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/CustomerExperience'));
const SupplyChain = React.lazy(() => import('./pages/SupplyChain'));
const ContentCreation = React.lazy(() => import('./pages/ContentCreation'));
const HRPlatform = React.lazy(() => import('./pages/HRPlatform'));

// IT Services pages
const Infrastructure = React.lazy(() => import('./pages/Infrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation'));
const Consulting = React.lazy(() => import('./pages/Consulting'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));
const FiveGSolutions = React.lazy(() => import('./pages/FiveGSolutions'));

// Marketplace pages
const Products = React.lazy(() => import('./pages/Products'));
const Services = React.lazy(() => import('./pages/Services'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-futuristic">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold">
        ZION
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-futuristic">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main routes */}
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
              <Route path="/signup" element={<Signup />} />
              <Route path="/team" element={<Team />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services-advertising" element={<ServicesAdvertising />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/news" element={<News />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              
              {/* Micro SAAS routes */}
              <Route path="/micro-saas" element={<MicroSAAS />} />
              <Route path="/micro-saas/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/micro-saas/customer-experience" element={<CustomerExperience />} />
              <Route path="/micro-saas/quantum-computing" element={<QuantumComputing />} />
              <Route path="/micro-saas/supply-chain" element={<SupplyChain />} />
              <Route path="/micro-saas/cybersecurity" element={<Cybersecurity />} />
              <Route path="/micro-saas/iot-edge" element={<IoTEdge />} />
              <Route path="/micro-saas/content-creation" element={<ContentCreation />} />
              <Route path="/micro-saas/hr-platform" element={<HRPlatform />} />
              
              {/* IT Services routes */}
              <Route path="/it-services" element={<ITOnsiteServices />} />
              <Route path="/it-services/infrastructure" element={<Infrastructure />} />
              <Route path="/it-services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/it-services/consulting" element={<Consulting />} />
              <Route path="/it-services/onsite-support" element={<OnsiteSupport />} />
              <Route path="/it-services/green-it" element={<GreenIT />} />
              <Route path="/it-services/5g-solutions" element={<FiveGSolutions />} />
              
              {/* Service-specific routes */}
              <Route path="/services/ai-analytics" element={<AIAnalytics />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/iot-edge" element={<IoTEdge />} />
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/blockchain" element={<Blockchain />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              
              {/* Marketplace routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/products" element={<Products />} />
              <Route path="/marketplace/services" element={<Services />} />
              <Route path="/marketplace/talent" element={<Talent />} />
              <Route path="/marketplace/equipment" element={<Equipment />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/products" element={<Products />} />
              
              {/* Support routes */}
              <Route path="/help" element={<Help />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              
              {/* New pages from main branch */}
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/micro-saas-services" element={<MicroSaasServices />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              <Route path="/hire-ai" element={<ZionHireAI />} />
              <Route path="/innovative-services-2027" element={<InnovativeServices2027 />} />
              <Route path="/comprehensive-pricing-2027" element={<ComprehensivePricing2027 />} />
              <Route path="/all-services-2027" element={<AllServices2027 />} />
              <Route path="*" element={<NotFound />} />
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