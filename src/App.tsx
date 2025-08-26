import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Careers = React.lazy(() => import('./pages/Careers'));
const News = React.lazy(() => import('./pages/News').then(module => ({ default: (module as any).default || module })));
const Press = React.lazy(() => import('./pages/Press'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Enhanced lazy loading with preloading hints from incoming branch
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));

// New pages from incoming branch
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// 2027 Innovation Pages
const CuttingEdgeInnovations2027 = lazy(() => import('./pages/CuttingEdgeInnovations2027'));
const PracticalMicroSaas2027 = lazy(() => import('./pages/PracticalMicroSaas2027'));
const AllServices2027 = lazy(() => import('./pages/AllServices2027'));

// Service pages
const AIServices = lazy(() => import('./pages/services/AIServices'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/services/EnterpriseIT'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));

// Additional innovative services
const IoTManagementPlatform = lazy(() => import('./pages/services/IoTManagementPlatform'));
const BlockchainDeFiSolutions = lazy(() => import('./pages/services/BlockchainDeFiSolutions'));

// New innovative service pages
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const IoTDataAnalytics = lazy(() => import('./pages/services/IoTDataAnalytics'));

// Next-Generation Innovative Services 2025
const NextGenInnovativeServices2025 = lazy(() => import('./pages/NextGenInnovativeServices2025'));
const InnovativeServicesShowcase = lazy(() => import('./pages/InnovativeServicesShowcase'));

// Ultimate Innovative Services 2026
const UltimateServicesShowcase2026 = lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = lazy(() => import('./pages/ComprehensivePricing2026'));

// Additional innovative micro SAAS services
const AILegalDocumentAutomation = lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = lazy(() => import('./pages/services/AIFinancialTrading'));
const AISupplyChainOptimization = lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AICustomerServiceAutomation = lazy(() => import('./pages/services/AICustomerServiceAutomation'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const NewServices = lazy(() => import('./pages/NewServices'));

// Additional missing pages from existing structure
const Partners = React.lazy(() => import('./pages/Partners'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Training = React.lazy(() => import('./pages/Training'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Events = React.lazy(() => import('./pages/Events'));
const Support = React.lazy(() => import('./pages/Support'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions'));
const Mobile = React.lazy(() => import('./pages/Mobile'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology'));
const SpaceTech = React.lazy(() => import('./pages/SpaceTech'));

// Service pages from existing structure
const CloudServices = React.lazy(() => import('./pages/services/Cloud'));
const CybersecurityServices = React.lazy(() => import('./pages/services/Cybersecurity'));
const InfrastructureServices = React.lazy(() => import('./pages/services/Infrastructure'));
const ConsultingServices = React.lazy(() => import('./pages/services/Consulting'));
const QuantumAIServices = React.lazy(() => import('./pages/services/quantum-ai'));

// Additional service pages from existing structure
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025'));
const AdvancedServices2025 = React.lazy(() => import('./pages/AdvancedServices2025'));
const AdvancedServicesShowcase2025 = React.lazy(() => import('./pages/AdvancedServicesShowcase2025'));
const ComprehensivePricing2025 = React.lazy(() => import('./pages/ComprehensivePricing2025'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Other pages from existing structure
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));

const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
// const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
// const Login = React.lazy(() => import('./pages/Login'));
// const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
// const About = React.lazy(() => import('./pages/About'));
const Team = React.lazy(() => import('./pages/Team'));
// const Careers = React.lazy(() => import('./pages/Careers'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
// const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const GDPR = React.lazy(() => import('./pages/GDPR'));
const API = React.lazy(() => import('./pages/API'));
const Status = React.lazy(() => import('./pages/Status'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/team', element: <Team /> },
  { path: '/careers', element: <Careers /> },
  { path: '/pricing', element: <Pricing /> },
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
  
  // New routes from incoming branch
  { path: '/services', element: <Services /> },
  { path: '/ai-solutions', element: <AISolutions /> },
  { path: '/services-showcase', element: <ServicesShowcase /> },
  { path: '/innovative-services-showcase', element: <InnovativeServicesShowcase /> },
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/emerging-tech', element: <EmergingTech /> },
  
  // 2027 Innovation Routes
  { path: '/cutting-edge-innovations-2027', element: <CuttingEdgeInnovations2027 /> },
  { path: '/practical-micro-saas-2027', element: <PracticalMicroSaas2027 /> },
  { path: '/all-services-2027', element: <AllServices2027 /> },
  
  // New missing page routes
  { path: '/quantum-neural-network-platform', element: <QuantumNeuralNetworkPlatform /> },
  { path: '/autonomous-business-operations-platform', element: <AutonomousBusinessOperationsPlatform /> },
  { path: '/ai-powered-it-asset-management', element: <AIPoweredITAssetManagement /> },
  { path: '/soc2-compliance-automation', element: <SOC2ComplianceAutomation /> },
  { path: '/ai-autonomous-research-assistant', element: <AIAutonomousResearchAssistant /> },
  { path: '/5g-enterprise-solutions', element: <FiveGEnterpriseSolutions /> },
  
  // Service routes
  { path: '/services/ai', element: <AIServices /> },
  { path: '/services/cloud', element: <CloudServices /> },
  { path: '/services/cybersecurity', element: <CybersecurityServices /> },
  { path: '/services/infrastructure', element: <InfrastructureServices /> },
  { path: '/services/transformation', element: <DigitalTransformation /> },
  { path: '/services/consulting', element: <ConsultingServices /> },
  { path: '/services/quantum-ai', element: <QuantumAIServices /> },
  
  // Additional service routes
  { path: '/innovative-services-2025', element: <InnovativeServices2025 /> },
  { path: '/advanced-services-2025', element: <AdvancedServices2025 /> },
  { path: '/advanced-services-showcase-2025', element: <AdvancedServicesShowcase2025 /> },
  { path: '/comprehensive-pricing-2025', element: <ComprehensivePricing2025 /> },
  { path: '/comprehensive-services-showcase-2025', element: <ComprehensiveServicesShowcase2025 /> },
  { path: '/innovative-services-showcase-2025', element: <InnovativeServicesShowcase2025 /> },
  { path: '/services-showcase-2025', element: <InnovativeServicesShowcase2025 /> },
  
  // Ultimate Innovative Services 2026
  { path: '/ultimate-services-showcase-2026', element: <UltimateServicesShowcase2026 /> },
  { path: '/ultimate-services-2026', element: <UltimateServicesShowcase2026 /> },
  { path: '/comprehensive-pricing-2026', element: <ComprehensivePricing2026 /> },
  { path: '/pricing-2026', element: <ComprehensivePricing2026 /> },
  
  // Other routes
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/accessibility', element: <Accessibility /> },
  { path: '/gdpr', element: <GDPR /> },
  { path: '/api', element: <API /> },
  { path: '/status', element: <Status /> },
];

// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-muted-foreground text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
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
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/api" element={<API />} />
              <Route path="/status" element={<Status />} />
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
