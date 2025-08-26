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
const Team = React.lazy(() => import('./pages/Team'));

// Service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const CloudDevOpsServicesPage = React.lazy(() => import('./pages/CloudDevOpsServices'));
const IoTServicesPage = React.lazy(() => import('./pages/IoTServicesPage'));
const QuantumComputingServicesPage = React.lazy(() => import('./pages/QuantumComputingServicesPage'));
const BlockchainServicesPage = React.lazy(() => import('./pages/BlockchainServicesPage'));
const DigitalTwinServicesPage = React.lazy(() => import('./pages/DigitalTwinServicesPage'));
const SustainabilityServicesPage = React.lazy(() => import('./pages/SustainabilityServicesPage'));

// Micro SAAS pages
const MicroSAAS = React.lazy(() => import('./pages/MicroSAAS'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/MicroSAAS/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/MicroSAAS/CustomerExperience'));
const QuantumComputing = React.lazy(() => import('./pages/MicroSAAS/QuantumComputing'));
const SupplyChain = React.lazy(() => import('./pages/MicroSAAS/SupplyChain'));
const Cybersecurity = React.lazy(() => import('./pages/MicroSAAS/Cybersecurity'));
const IoTServices = React.lazy(() => import('./pages/MicroSAAS/IoTServices'));
const ContentCreation = React.lazy(() => import('./pages/MicroSAAS/ContentCreation'));
const HRPlatform = React.lazy(() => import('./pages/MicroSAAS/HRPlatform'));

// IT Services pages
const ITServices = React.lazy(() => import('./pages/ITServices'));
const Infrastructure = React.lazy(() => import('./pages/ITServices/Infrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/ITServices/DigitalTransformation'));
const Consulting = React.lazy(() => import('./pages/ITServices/Consulting'));
const OnsiteSupport = React.lazy(() => import('./pages/ITServices/OnsiteSupport'));
const GreenITServices = React.lazy(() => import('./pages/ITServices/GreenIT'));
const FiveGSolutions = React.lazy(() => import('./pages/ITServices/FiveGSolutions'));

// Marketplace pages
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Products = React.lazy(() => import('./pages/Marketplace/Products'));
const Talent = React.lazy(() => import('./pages/Marketplace/Talent'));
const Equipment = React.lazy(() => import('./pages/Marketplace/Equipment'));
const MarketplaceServices = React.lazy(() => import('./pages/Marketplace/Services'));

// Support and legal pages
const Help = React.lazy(() => import('./pages/Help'));
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
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              
              {/* Services */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/ai-analytics" element={<AIServicesPage />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServicesPage />} />
              <Route path="/services/cloud-devops" element={<CloudDevOpsServicesPage />} />
              <Route path="/services/iot-edge" element={<IoTServicesPage />} />
              <Route path="/services/quantum-computing" element={<QuantumComputingServicesPage />} />
              <Route path="/services/blockchain" element={<BlockchainServicesPage />} />
              <Route path="/services/digital-twin" element={<DigitalTwinServicesPage />} />
              <Route path="/services/sustainability" element={<SustainabilityServicesPage />} />
              <Route path="/green-it" element={<GreenIT />} />
              
              {/* Micro SAAS */}
              <Route path="/micro-saas" element={<MicroSAAS />} />
              <Route path="/micro-saas/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/micro-saas/customer-experience" element={<CustomerExperience />} />
              <Route path="/micro-saas/quantum-computing" element={<QuantumComputing />} />
              <Route path="/micro-saas/supply-chain" element={<SupplyChain />} />
              <Route path="/micro-saas/cybersecurity" element={<Cybersecurity />} />
              <Route path="/micro-saas/iot-edge" element={<IoTServices />} />
              <Route path="/micro-saas/content-creation" element={<ContentCreation />} />
              <Route path="/micro-saas/hr-platform" element={<HRPlatform />} />
              
              {/* IT Services */}
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/it-services/infrastructure" element={<Infrastructure />} />
              <Route path="/it-services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/it-services/consulting" element={<Consulting />} />
              <Route path="/it-services/onsite-support" element={<OnsiteSupport />} />
              <Route path="/it-services/green-it" element={<GreenITServices />} />
              <Route path="/it-services/5g-solutions" element={<FiveGSolutions />} />
              
              {/* Marketplace */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/products" element={<Products />} />
              <Route path="/marketplace/talent" element={<Talent />} />
              <Route path="/marketplace/equipment" element={<Equipment />} />
              <Route path="/marketplace/services" element={<MarketplaceServices />} />
              
              {/* Support and legal */}
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