import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Team = React.lazy(() => import('./pages/Team'));
const Login = React.lazy(() => import('./pages/Login'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

// New service pages
const Cybersecurity = React.lazy(() => import('./pages/services/Cybersecurity'));
const IoTEdge = React.lazy(() => import('./pages/services/IoTEdge'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const Blockchain = React.lazy(() => import('./pages/services/Blockchain'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const AIAnalytics = React.lazy(() => import('./pages/services/AIAnalytics'));

// Import the new pages
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));

// Micro SAAS pages
const AIBusinessIntelligenceSAAS = React.lazy(() => import('./pages/micro-saas/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/micro-saas/CustomerExperience'));

// IT Services pages
const Infrastructure = React.lazy(() => import('./pages/it-services/Infrastructure'));

// Marketplace pages
const Products = React.lazy(() => import('./pages/marketplace/Products'));

const Sitemap = React.lazy(() => import('./pages/Sitemap'));

const Signup = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <p className="text-xl text-gray-300">Create your account</p>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Browse our services and solutions</p>
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
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/team" element={<Team />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/news" element={<News />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/ultimate-services-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
              <Route path="/revolutionary-services-2026" element={<ComprehensiveServicesShowcase2026 />} />
              <Route path="/pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />
              
              {/* Service Routes - only for existing pages */}
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              
              {/* New Service Routes */}
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/iot-edge" element={<IoTEdge />} />
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/blockchain" element={<Blockchain />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              <Route path="/services/ai-analytics" element={<AIAnalytics />} />
              
              {/* Micro SAAS Routes */}
              <Route path="/micro-saas/ai-business-intelligence" element={<AIBusinessIntelligenceSAAS />} />
              <Route path="/micro-saas/customer-experience" element={<CustomerExperience />} />
              
              {/* IT Services Routes */}
              <Route path="/it-services/infrastructure" element={<Infrastructure />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace/products" element={<Products />} />
              
              {/* Catch all route */}
              <Route path="*" element={<Home />} />
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