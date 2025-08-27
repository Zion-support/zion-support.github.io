import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages - comprehensive import list
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

// Service pages
const AIServices = React.lazy(() => import('./pages/services/AIServices'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices'));
const DigitalTwin = React.lazy(() => import('./pages/services/GreenIT'));
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

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-zion-slate-dark">
        {/* App Header */}
        <AppHeader />
        
        {/* Main Content */}
        <main className="pt-24">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/services-advertising" element={<ServicesAdvertising />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/news" element={<News />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              
              {/* Information Pages */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Service Routes */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/iot" element={<IoTServices />} />
              <Route path="/services/quantum" element={<QuantumComputing />} />
              <Route path="/services/blockchain" element={<BlockchainServices />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              <Route path="/services/five-g" element={<FiveGSolutions />} />
              
              {/* Micro SAAS Routes */}
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/customer-experience" element={<CustomerExperience />} />
              <Route path="/services/supply-chain" element={<SupplyChain />} />
              <Route path="/services/content-creation" element={<ContentCreation />} />
              <Route path="/services/hr-platform" element={<HRPlatform />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<div className="text-center py-20"><h1>Page Not Found</h1></div>} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;