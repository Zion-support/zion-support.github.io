import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster as SonnerToaster } from './components/ui/sonner';
import { Toaster } from './components/ui/toaster';
import { WhitelabelProvider } from './context/WhitelabelContext';

// Lazy load all pages - combining both versions
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Careers = React.lazy(() => import('./pages/Careers'));
const News = React.lazy(() => import('./pages/News'));
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

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/EnterpriseSolutions'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
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

// Service detail pages
const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview'));
const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems'));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));

// Additional missing imports from incoming branch
const Contact = lazy(() => import('./pages/Contact'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Docs = lazy(() => import('./pages/Docs'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Community = lazy(() => import('./pages/Community'));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions'));
const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions'));
const SpecializedITInfrastructure = lazy(() => import('./pages/services/SpecializedITInfrastructure'));
const InnovativeMicroSaasServices = lazy(() => import('./pages/services/InnovativeMicroSaasServices'));
const ComprehensiveInnovativeServices = lazy(() => import('./pages/services/ComprehensiveInnovativeServices'));
const ComprehensiveServicesOverview = lazy(() => import('./pages/services/ComprehensiveServicesOverview'));
const EnhancedInnovativeServices = lazy(() => import('./pages/services/EnhancedInnovativeServices'));
const HealthcareSolutions = lazy(() => import('./pages/services/HealthcareSolutions'));
const EnterpriseSolutions = lazy(() => import('./pages/services/EnterpriseSolutions'));

// AI Autonomous Services
const AIAutonomousBusinessManager = lazy(() => import('./pages/services/AIAutonomousBusinessManager'));
const AIAutonomousBusinessPlatform = lazy(() => import('./pages/services/AIAutonomousBusinessPlatform'));
const AIAutonomousCodeReview = lazy(() => import('./pages/services/AIAutonomousCodeReview'));
const AIAutonomousCreativeDirector = lazy(() => import('./pages/services/AIAutonomousCreativeDirector'));
const AIAutonomousData = lazy(() => import('./pages/services/AIAutonomousData'));
const AIAutonomousDecisionEngine = lazy(() => import('./pages/services/AIAutonomousDecisionEngine'));
const AIAutonomousDecisionPlatform = lazy(() => import('./pages/services/AIAutonomousDecisionPlatform'));
const AIAutonomousDevOps = lazy(() => import('./pages/services/AIAutonomousDevOps'));
const AIAutonomousEducationProfessor = lazy(() => import('./pages/services/AIAutonomousEducationProfessor'));
const AIAutonomousHealthcarePhysician = lazy(() => import('./pages/services/AIAutonomousHealthcarePhysician'));
const AIAutonomousLearningSystem = lazy(() => import('./pages/services/AIAutonomousLearningSystem'));
const AIAutonomousLegalCounsel = lazy(() => import('./pages/services/AIAutonomousLegalCounsel'));
const AIAutonomousLogistics = lazy(() => import('./pages/services/AIAutonomousLogistics'));
const AIAutonomousManufacturing = lazy(() => import('./pages/services/AIAutonomousManufacturing'));
const AIAutonomousResearch = lazy(() => import('./pages/services/AIAutonomousResearch'));
const AIAutonomousRobotics = lazy(() => import('./pages/services/AIAutonomousRobotics'));
const AIAutonomousScientificResearcher = lazy(() => import('./pages/services/AIAutonomousScientificResearcher'));
const AIAutonomousSecurity = lazy(() => import('./pages/services/AIAutonomousSecurity'));
const AIAutonomousSystemsPlatform = lazy(() => import('./pages/services/AIAutonomousSystemsPlatform'));
const AIAutonomousTesting = lazy(() => import('./pages/services/AIAutonomousTesting'));
const AIAutonomousVehiclePlatform = lazy(() => import('./pages/services/AIAutonomousVehiclePlatform'));
const AIAutonomousVehicle = lazy(() => import('./pages/services/AIAutonomousVehicle'));
const AIAutonomousVehiclesPlatform = lazy(() => import('./pages/services/AIAutonomousVehiclesPlatform'));
const AIAutonomousVehicles = lazy(() => import('./pages/services/AIAutonomousVehicles'));
const AIAutonomousVentureCapitalist = lazy(() => import('./pages/services/AIAutonomousVentureCapitalist'));

// AI Content Generation
const AIContentGenerationAutomation = lazy(() => import('./pages/services/AIContentGenerationAutomation'));
const AIContentGenerationPro = lazy(() => import('./pages/services/AIContentGenerationPro'));
const AIConsciousnessEvolution = lazy(() => import('./pages/services/AIConsciousnessEvolution'));

// Enhanced AI Services
const AIBusinessIntelligenceElite = lazy(() => import('./pages/services/AIBusinessIntelligenceElite'));
const AIBusinessIntelligenceSuite = lazy(() => import('./pages/services/AIBusinessIntelligenceSuite'));

// Enhanced components
const EnhancedSEO = lazy(() => import('./components/EnhancedSEO'));
const EnhancedAccessibility = lazy(() => import('./components/EnhancedAccessibility'));
const AIChatbot = lazy(() => import('./components/AIChatbot'));
const CollaborativeTextEditor = lazy(() => import('./components/CollaborativeTextEditor'));
const AICodeGenerator = lazy(() => import('./components/AICodeGenerator'));
const PerformanceDashboard = lazy(() => import('./components/PerformanceDashboard'));
const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard'));
const EnterpriseDashboard = lazy(() => import('./components/EnterpriseDashboard'));
const SecurityComplianceDashboard = lazy(() => import('./components/SecurityComplianceDashboard'));
const MachineLearningDashboard = lazy(() => import('./components/MachineLearningDashboard'));
const PerformanceMonitor = lazy(() => import('./components/PerformanceMonitor'));
const LinkHealthMonitor = lazy(() => import('./components/LinkHealthMonitor'));
const EnhancedErrorBoundary = lazy(() => import('./components/EnhancedErrorBoundary'));
const PerformanceOptimizer = lazy(() => import('./components/PerformanceOptimizer'));
const Sidebar = lazy(() => import('./components/Sidebar'));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions'));
const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions'));
const InnovativeNewServices = lazy(() => import('./pages/services/InnovativeNewServices'));
const SpecializedITInfrastructure = lazy(() => import('./pages/services/SpecializedITInfrastructure'));
const InnovativeMicroSaasServices = lazy(() => import('./pages/InnovativeMicroSaasServices'));
const ComprehensiveInnovativeServices = lazy(() => import('./pages/ComprehensiveInnovativeServices'));
const ComprehensiveServicesOverview = lazy(() => import('./pages/ComprehensiveServicesOverview'));
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
>>>>>>> origin/cursor/simple-innovative-services-2025

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
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Define all routes - combining both versions
const routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
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
  
  // New routes from incoming branch
  { path: '/services', element: <Services /> },
  { path: '/ai-solutions', element: <AISolutions /> },
  { path: '/services-showcase', element: <ServicesShowcase /> },
  { path: '/innovative-services-showcase', element: <InnovativeServicesShowcase /> },
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/emerging-tech', element: <EmergingTech /> },
  
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
  
  // Other routes
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/ai-matcher', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talent-directory', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
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
  
  { path: '*', element: <NotFound /> }
];

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <WhitelabelProvider>
      <ThemeProvider>
        <Router>
          <div className="App min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/ai-solutions" element={<AISolutions />} />
                  <Route path="/services-showcase" element={<ServicesShowcase />} />
                  <Route path="/ai-matcher" element={<AIMatcherPage />} />
                  <Route path="/talent-directory" element={<TalentDirectory />} />
                  <Route path="/talents" element={<TalentsPage />} />
                  <Route path="/emerging-tech" element={<EmergingTech />} />
                  
                  {/* Service Routes */}
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformation />} />
                  
                  {/* Company Routes */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/green-it" element={<GreenIT />} />
                  <Route path="/financial-solutions" element={<FinancialSolutions />} />
                  <Route path="/mobile" element={<Mobile />} />
                  <Route path="/quantum-technology" element={<QuantumTechnology />} />
                  <Route path="/space-tech" element={<SpaceTech />} />
                  
                  {/* Service Detail Routes */}
                  <Route path="/services/cloud" element={<CloudServices />} />
                  <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
                  <Route path="/services/infrastructure" element={<InfrastructureServices />} />
                  <Route path="/services/consulting" element={<ConsultingServices />} />
                  <Route path="/services/quantum-ai" element={<QuantumAIServices />} />
                  <Route path="/services-overview" element={<ServicesOverview />} />
                  <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                  <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                  
                  {/* Innovative Services */}
                  <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                  <Route path="/next-gen-innovative-services-2025" element={<NextGenInnovativeServices2025 />} />
                  <Route path="/innovative-services-showcase" element={<InnovativeServicesShowcase />} />
                  <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  
                  {/* Additional innovative service routes */}
                  <Route path="/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                  <Route path="/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                  <Route path="/iot-data-analytics" element={<IoTDataAnalytics />} />
                  <Route path="/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                  <Route path="/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/ai-financial-trading" element={<AIFinancialTrading />} />
                  <Route path="/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                  <Route path="/ai-customer-service-automation" element={<AICustomerServiceAutomation />} />
                  
                  {/* Missing pages from analysis */}
                  <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
                  <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
                  <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                  <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
                  <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                  <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
                  <Route path="/help" element={<HelpCenter />} />
                  <Route path="/new-services" element={<NewServices />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <Toaster />
            <SonnerToaster />
          </div>
        </Router>
      </ThemeProvider>
    </WhitelabelProvider>
  );
}

export default App;