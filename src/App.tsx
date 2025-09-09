import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { SEO } from './components/SEO';
import { PageLoader } from './components/LoadingSpinner';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices.jsx'));
const ComprehensivePricing = React.lazy(() => import('./pages/ComprehensivePricing.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027.tsx'));

// Enhanced loading spinner with accessibility
const LoadingSpinner = () => (
  <div 
    className="min-h-screen bg-futuristic flex items-center justify-center"
    role="status"
    aria-label="Loading page content"
  >
    <PageLoader />
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
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id'>) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
          <SEO />
          <AppHeader />
          <main className="flex-1" role="main">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/services/overview" element={<ComprehensiveServicesOverview2027 />} />
                <Route path="/services/pricing" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/services/showcase" element={<InnovativeServicesShowcase2027 />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
          <PerformanceMonitor />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;