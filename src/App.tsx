import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from 'react-error-boundary';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact.tsx';
import ServicesPage from './pages/ServicesPage';
import EnhancedServicesShowcase2025 from './pages/EnhancedServicesShowcase2025';
import NotFound from './pages/NotFound';
import Training from './pages/Training';
import Webinars from './pages/Webinars';
import WhitePapers from './pages/WhitePapers';
import Research from './pages/Research';
import Documentation from './pages/Documentation';
import API from './pages/API';

// Lazy load AI services
const AIServices = React.lazy(() => import('./pages/AIServicesPage'));
const AIAutonomousBusiness = React.lazy(() => import('./pages/AIServices/AIAutonomousBusinessPlatform'));
const AIAutonomousResearch = React.lazy(() => import('./pages/AIServices/AIAutonomousResearch'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/AIServices/AIBusinessIntelligenceElite'));
const AIComputerVision = React.lazy(() => import('./pages/AIServices/AIComputerVisionPlatform'));

// Lazy load specialized services
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity'));
const CloudDevOps = React.lazy(() => import('./pages/CloudDevOpsServices'));
const QuantumComputing = React.lazy(() => import('./pages/QuantumTechnology'));
const IoTServices = React.lazy(() => import('./pages/IoTServicesPage'));
const BlockchainServices = React.lazy(() => import('./pages/BlockchainServicesPage'));

// Lazy load business solutions
const BusinessSolutions = React.lazy(() => import('./pages/BusinessSolutionsPage'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation'));
const EnterpriseIT = React.lazy(() => import('./pages/EnterpriseIT'));

// Lazy load additional pages
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Events = React.lazy(() => import('./pages/Events'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));

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
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));

// Additional pages
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
      <div className="relative">
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-zion-purple border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-zion-slate-light text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Add futuristic background animation
    const addBackgroundAnimation = () => {
      const body = document.body;
      if (!body.querySelector('.futuristic-bg')) {
        const bg = document.createElement('div');
        bg.className = 'futuristic-bg fixed inset-0 pointer-events-none z-[-1]';
        bg.innerHTML = `
          <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        `;
        body.appendChild(bg);
      }
    };

    addBackgroundAnimation();
  }, []);

  return (
    <Router>
      <div className="min-h-screen futuristic-bg">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              
              {/* User Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* Service Routes */}
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/blockchain" element={<BlockchainServices />} />
              <Route path="/services/iot" element={<IoTServices />} />
              <Route path="/services/quantum" element={<QuantumServices />} />
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingServices />} />
              <Route path="/services/financial" element={<FinancialSolutions />} />
              <Route path="/services/manufacturing" element={<ManufacturingSolutions />} />
              <Route path="/ultimate-innovative-services-2026" element={<UltimateInnovativeServices2026 />} />
              <Route path="/comprehensive-services-overview-2026" element={<ComprehensiveServicesOverview2026 />} />
              
              {/* Solution Routes */}
              <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
              <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
              <Route path="/solutions/government" element={<GovernmentSolutions />} />
              <Route path="/solutions/retail" element={<RetailSolutions />} />
              
              {/* Innovative Services 2027 Routes */}
              <Route path="/innovative-services-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-guide" element={<ComprehensivePricingGuide2027 />} />
              
              {/* Emerging Tech Routes */}
              <Route path="/emerging-tech" element={<GreenIT />} />
              <Route path="/emerging-tech/:service" element={<GreenIT />} />
              
              {/* 404 route */}
              <Route path="*" element={
                <div className="min-h-screen bg-futuristic flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-zion-cyan mb-4">404</h1>
                    <p className="text-xl text-zion-slate-light mb-8">Page not found</p>
                    <button
                      onClick={() => window.history.back()}
                      className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              } />
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