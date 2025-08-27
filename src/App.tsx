import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';
import SEO from './components/SEO';
import { FuturisticAnimatedBackground } from './components/backgrounds/FuturisticAnimatedBackground';

// Core Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
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

// Enhanced Service Pages
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const ManufacturingSolutions = React.lazy(() => import('./pages/services/ManufacturingSolutions'));
const ConsultingServices = React.lazy(() => import('./pages/services/ConsultingServices'));
const FiveGNetworkOptimization = React.lazy(() => import('./pages/services/FiveGNetworkOptimization'));
const ITOnsiteServices = React.lazy(() => import('./pages/services/ITOnsiteServices'));

// New 2026 Services
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));
const UltimateInnovativeServices2026 = React.lazy(() => import('./pages/UltimateInnovativeServices2026'));
const Zion2026InnovativeServicesShowcase = React.lazy(() => import('./pages/Zion2026InnovativeServicesShowcase'));
const Zion2026ComprehensivePricingGuide = React.lazy(() => import('./pages/Zion2026ComprehensivePricingGuide'));
const Zion2026ServicesOverview = React.lazy(() => import('./pages/Zion2026ServicesOverview'));

// Enhanced 2028 Services
const EnhancedServicesShowcase2028 = React.lazy(() => import('./pages/EnhancedServicesShowcase2028'));

// Quantum Computing Services
const QuantumComputingServices = React.lazy(() => import('./pages/services/QuantumComputingServices'));

// Revolutionary 2025 Services
const Revolutionary2025ServicesShowcase = React.lazy(() => import('./pages/Revolutionary2025ServicesShowcase'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));

// Additional Service Pages
const AIHRRecruitment = React.lazy(() => import('./pages/services/AIHRRecruitment'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AILegalTech = React.lazy(() => import('./pages/services/AILegalTech'));
const AISolutions = React.lazy(() => import('./pages/services/AISolutions'));

// Enhanced Pages
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const CompanyWorkspace = React.lazy(() => import('./pages/CompanyWorkspace'));
const Press = React.lazy(() => import('./pages/Press'));
const Tutorials = React.lazy(() => import('./pages/Tutorials'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Status = React.lazy(() => import('./pages/Status'));
const Support = React.lazy(() => import('./pages/Support'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Security = React.lazy(() => import('./pages/Security'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology'));
const SpaceTech = React.lazy(() => import('./pages/SpaceTech'));

// Simple placeholder pages for missing ones
const FAQ = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
    <FuturisticAnimatedBackground />
    <SEO 
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about our AI-powered technology solutions and services."
    />
    <div className="text-center text-white relative z-10">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">FAQ</h1>
      <p className="text-xl text-gray-300">Frequently asked questions</p>
    </div>
  </div>
);

const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
    <FuturisticAnimatedBackground />
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
    />
    <div className="text-center text-white relative z-10">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
    <FuturisticAnimatedBackground />
    <SEO 
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your data and maintains privacy in our technology solutions."
    />
    <div className="text-center text-white relative z-10">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Privacy Policy</h1>
      <p className="text-xl text-gray-300">How we protect your data</p>
    </div>
  </div>
);

const Terms = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
    <FuturisticAnimatedBackground />
    <SEO 
      title="Terms of Service - Zion Tech Group"
      description="Terms and conditions for using Zion Tech Group's AI-powered technology solutions and services."
    />
    <div className="text-center text-white relative z-10">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Terms of Service</h1>
      <p className="text-xl text-gray-300">Our terms and conditions</p>
    </div>
  </div>
);

const Sitemap = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
    <FuturisticAnimatedBackground />
    <SEO 
      title="Sitemap - Zion Tech Group"
      description="Complete site navigation structure for Zion Tech Group's technology solutions and services."
    />
    <div className="text-center text-white relative z-10">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Sitemap</h1>
      <p className="text-xl text-gray-300">Site navigation structure</p>
    </div>
  </div>
);

const Signup = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
    <FuturisticAnimatedBackground />
    <SEO 
      title="Sign Up - Zion Tech Group"
      description="Create your account to access Zion Tech Group's AI-powered technology solutions and services."
    />
    <div className="text-center text-white relative z-10">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Sign Up</h1>
      <p className="text-xl text-gray-300">Create your account</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-futuristic relative overflow-hidden">
          <FuturisticAnimatedBackground />
          <SEO />
          <AppHeader />
          
          <main className="flex-1 relative z-10">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Core Routes */}
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
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/research-development" element={<ResearchDevelopment />} />
                <Route path="/news" element={<News />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/marketplace" element={<Marketplace />} />
                
                {/* Enhanced Service Routes */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/blockchain-services" element={<BlockchainServices />} />
                <Route path="/services/iot-services" element={<IoTServices />} />
                <Route path="/services/manufacturing-solutions" element={<ManufacturingSolutions />} />
                <Route path="/services/consulting-services" element={<ConsultingServices />} />
                <Route path="/services/five-g-network-optimization" element={<FiveGNetworkOptimization />} />
                <Route path="/services/it-onsite-services" element={<ITOnsiteServices />} />
                <Route path="/services/ai-hr-recruitment" element={<AIHRRecruitment />} />
                <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                <Route path="/services/ai-legal-tech" element={<AILegalTech />} />
                <Route path="/services/ai-solutions" element={<AISolutions />} />
                
                {/* New 2026 Service Routes */}
                <Route path="/services-2026" element={<ComprehensiveServicesShowcase2026 />} />
                <Route path="/pricing-2026" element={<ComprehensivePricingGuide2026 />} />
                <Route path="/ultimate-services-2026" element={<UltimateInnovativeServices2026 />} />
                <Route path="/zion-2026-services" element={<Zion2026InnovativeServicesShowcase />} />
                <Route path="/zion-2026-pricing" element={<Zion2026ComprehensivePricingGuide />} />
                <Route path="/zion-2026-overview" element={<Zion2026ServicesOverview />} />
                
                {/* Enhanced 2028 Service Routes */}
                <Route path="/enhanced-services-2028" element={<EnhancedServicesShowcase2028 />} />
                
                {/* Quantum Computing Service Routes */}
                <Route path="/services/quantum-computing" element={<QuantumComputingServices />} />
                
                {/* Revolutionary 2025 Service Routes */}
                <Route path="/revolutionary-2025" element={<Revolutionary2025ServicesShowcase />} />
                <Route path="/revolutionary-2030" element={<RevolutionaryServicesShowcase2030 />} />
                
                {/* Additional Enhanced Routes */}
                <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
                <Route path="/cybersecurity-services" element={<CybersecurityServicesPage />} />
                <Route path="/company-workspace" element={<CompanyWorkspace />} />
                <Route path="/press" element={<Press />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/status" element={<Status />} />
                <Route path="/support" element={<Support />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/security" element={<Security />} />
                <Route path="/quantum-technology" element={<QuantumTechnology />} />
                <Route path="/space-tech" element={<SpaceTech />} />
                
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;