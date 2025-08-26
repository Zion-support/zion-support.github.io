import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { Toaster } from './components/ui/toaster';
import { Toaster as SonnerToaster } from './components/ui/sonner';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import EnhancedScrollToTop from './components/EnhancedScrollToTop';
import { EnhancedLoading } from './components/EnhancedLoading';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/EnterpriseSolutions'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));

// Additional service pages
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025'));
const AdvancedServices2025 = React.lazy(() => import('./pages/AdvancedServices2025'));
const AdvancedServicesShowcase2025 = React.lazy(() => import('./pages/AdvancedServicesShowcase2025'));
const AdvancedInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/AdvancedInnovativeServicesShowcase2025'));
const ComprehensiveServicesMarketing2025 = React.lazy(() => import('./pages/ComprehensiveServicesMarketing2025'));
const ComprehensivePricingShowcase2025 = React.lazy(() => import('./pages/ComprehensivePricingShowcase2025'));
const ComprehensivePricing2025 = React.lazy(() => import('./pages/ComprehensivePricing2025'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));
const AdvancedRealServicesShowcase2025 = React.lazy(() => import('./pages/AdvancedServicesShowcase2025'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const NewServices = lazy(() => import('./pages/NewServices'));
const InnovativeNewServices2025 = lazy(() => import('./pages/InnovativeNewServices2025'));

// Company information pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));

// Service detail pages
const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview'));
const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems'));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions'));
const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions'));
const InnovativeNewServices = lazy(() => import('./pages/services/InnovativeNewServices'));
const SpecializedITInfrastructure = lazy(() => import('./pages/services/SpecializedITInfrastructure'));
const InnovativeMicroSaasServices = lazy(() => import('./pages/InnovativeMicroSaasServices'));
const ComprehensiveInnovativeServices = lazy(() => import('./pages/ComprehensiveInnovativeServices'));
const ComprehensiveServicesOverview = lazy(() => import('./pages/ComprehensiveServicesOverview'));

// Solutions pages
const EnterpriseSolutions = lazy(() => import('./pages/solutions/Enterprise'));
const HealthcareSolutions = lazy(() => import('./pages/solutions/Healthcare'));

// Other pages from existing structure
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const SupportPage = React.lazy(() => import('./pages/Support'));
const PricingPage = React.lazy(() => import('./pages/Pricing'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Define all routes
const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/careers', element: <Careers /> },
  { path: '/news', element: <News /> },
  { path: '/press', element: <Press /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/white-papers', element: <WhitePapers /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  
  // Additional missing pages
  { path: '/partners', element: <Partners /> },
  { path: '/docs', element: <Documentation /> },
  { path: '/cookies', element: <Cookies /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/help', element: <HelpCenter /> },
  { path: '/training', element: <Training /> },
  { path: '/webinars', element: <Webinars /> },
  { path: '/events', element: <Events /> },
  { path: '/support', element: <Support /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/green-it', element: <GreenIT /> },
  { path: '/financial-solutions', element: <FinancialSolutions /> },
  { path: '/mobile', element: <Mobile /> },
  { path: '/quantum-technology', element: <QuantumTechnology /> },
  { path: '/space-tech', element: <SpaceTech /> },
  
  // Service routes
  { path: '/services/ai', element: <AIServices /> },
  { path: '/services/cloud', element: <CloudServices /> },
  { path: '/services/cybersecurity', element: <CybersecurityServices /> },
  { path: '/services/infrastructure', element: <InfrastructureServices /> },
  { path: '/services/transformation', element: <DigitalTransformation /> },
  { path: '/services/consulting', element: <ConsultingServices /> },
  
  // Additional service routes
  { path: '/innovative-services-2025', element: <InnovativeServices2025 /> },
  { path: '/advanced-services-2025', element: <AdvancedServices2025 /> },
  { path: '/advanced-services-showcase-2025', element: <AdvancedServicesShowcase2025 /> },
  { path: '/advanced-innovative-services-showcase-2025', element: <AdvancedInnovativeServicesShowcase2025 /> },
  { path: '/comprehensive-services-marketing-2025', element: <ComprehensiveServicesMarketing2025 /> },
  { path: '/comprehensive-pricing-showcase-2025', element: <ComprehensivePricingShowcase2025 /> },
  { path: '/comprehensive-pricing-2025', element: <ComprehensivePricing2025 /> },
  { path: '/comprehensive-services-showcase-2025', element: <ComprehensiveServicesShowcase2025 /> },
  { path: '/advanced-real-services-showcase-2025', element: <AdvancedRealServicesShowcase2025 /> },
  
  // Other routes
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/support', element: <SupportPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/sitemap', element: <Sitemap /> },
];

// Enhanced loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light flex items-center justify-center">
    <EnhancedLoading 
      size="xl" 
      variant="futuristic" 
      text="Loading Zion Tech Group"
      showProgress={true}
      progress={85}
    />
  </div>
);

function App() {
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

  // Toggle performance monitor with keyboard shortcut (Ctrl+Shift+P)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setShowPerformanceMonitor(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <div className="App min-h-screen bg-background">
        <Header />
        <main className="pt-16 lg:pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
              <Route path="/advanced-services-2025" element={<AdvancedServices2025 />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActionButton />
        <EnhancedScrollToTop />
      </div>
    </Router>
  );
}

export default App;