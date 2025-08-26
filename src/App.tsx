import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

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
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));

// Service pages
const AIServices = React.lazy(() => import('./pages/services/AIServices'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const Sustainability = React.lazy(() => import('./pages/services/GreenIT'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ConsultingServices = React.lazy(() => import('./pages/services/ConsultingServices'));
const ITOnsiteServices = React.lazy(() => import('./pages/services/ITOnsiteServices'));
const FiveGSolutions = React.lazy(() => import('./pages/services/FiveGNetworkOptimization'));

// Micro SAAS pages
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/services/AICustomerServiceAutomation'));
const SupplyChain = React.lazy(() => import('./pages/services/ManufacturingSolutions'));
const ContentCreation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const HRPlatform = React.lazy(() => import('./pages/services/AIWorkflowAutomation'));

// Marketplace pages
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Products = React.lazy(() => import('./pages/Marketplace'));
const Talent = React.lazy(() => import('./pages/Marketplace'));
const Equipment = React.lazy(() => import('./pages/Marketplace'));

// Company pages
const Team = React.lazy(() => import('./pages/About'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Help = React.lazy(() => import('./pages/HelpCenterPage'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Cookies = React.lazy(() => import('./pages/Cookies'));

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
              <Route path="/search" element={<SearchPage />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services-advertising" element={<ServicesAdvertising />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/news" element={<News />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              
              {/* Service Routes */}
              <Route path="/services/ai-analytics" element={<AIServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/iot-edge" element={<IoTServices />} />
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/blockchain" element={<BlockchainServices />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              <Route path="/services/onsite-support" element={<ITOnsiteServices />} />
              <Route path="/services/5g-solutions" element={<FiveGSolutions />} />
              
              {/* Micro SAAS Routes */}
              <Route path="/micro-saas" element={<ServicesPage />} />
              <Route path="/micro-saas/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/micro-saas/customer-experience" element={<CustomerExperience />} />
              <Route path="/micro-saas/quantum-computing" element={<QuantumComputing />} />
              <Route path="/micro-saas/supply-chain" element={<SupplyChain />} />
              <Route path="/micro-saas/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/micro-saas/iot-edge" element={<IoTServices />} />
              <Route path="/micro-saas/content-creation" element={<ContentCreation />} />
              <Route path="/micro-saas/hr-platform" element={<HRPlatform />} />
              
              {/* IT Services Routes */}
              <Route path="/it-services" element={<ITInfrastructure />} />
              <Route path="/it-services/infrastructure" element={<ITInfrastructure />} />
              <Route path="/it-services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/it-services/consulting" element={<ConsultingServices />} />
              <Route path="/it-services/onsite-support" element={<ITOnsiteServices />} />
              <Route path="/it-services/green-it" element={<Sustainability />} />
              <Route path="/it-services/5g-solutions" element={<FiveGSolutions />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/products" element={<Products />} />
              <Route path="/marketplace/talent" element={<Talent />} />
              <Route path="/marketplace/equipment" element={<Equipment />} />
              <Route path="/marketplace/services" element={<ServicesPage />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/categories" element={<Marketplace />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              
              {/* Company Routes */}
              <Route path="/team" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;