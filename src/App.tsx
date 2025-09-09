import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceMonitor } from './components/PerformanceMonitor.tsx';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const EnhancedServices = lazy(() => import('./pages/EnhancedServices'));
const MicroSaasShowcase = lazy(() => import('./pages/MicroSaasShowcase'));
const Contact = lazy(() => import('./pages/Contact'));
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const ServicesComparison = lazy(() => import('./pages/ServicesComparison'));

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Careers = React.lazy(() => import('./pages/Careers'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));

// Lazy load service pages
const AIWorkflowAutomation = React.lazy(() => import('./pages/services/AIWorkflowAutomation'));
const QuantumDataAnalytics = React.lazy(() => import('./pages/services/QuantumDataAnalytics'));
const BlockchainInfrastructure = React.lazy(() => import('./pages/services/BlockchainInfrastructure'));

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const Revolutionary2029ServicesOverview = React.lazy(() => import('./pages/Revolutionary2029ServicesOverview'));

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
        
        {/* Navigation */}
        <FuturisticNavigation />
        
        <main className="flex-1 relative z-10">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              <Route path="/micro-saas-showcase" element={<MicroSaasShowcase />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/case-studies" element={<CaseStudies />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <FuturisticFooter />
        
        {/* Chat Assistant */}
        <ChatAssistant />
        
        {/* Performance Monitor */}
        <PerformanceMonitor />
      </div>
    </Router>
  );
}

export default App;