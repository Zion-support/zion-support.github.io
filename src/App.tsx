import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import {
  AuthRoutes,
  DashboardRoutes,
  MarketplaceRoutes,
  TalentRoutes,
  AdminRoutes,
  MobileAppRoutes,
  ContentRoutes,
  ErrorRoutes,
  EnterpriseRoutes,
  CommunityRoutes,
  DeveloperRoutes
} from './routes';

// Main page imports
const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const ServicesOverviewPage = React.lazy(() => import('./pages/ServicesOverviewPage'));
const AIServicesShowcase = React.lazy(() => import('./pages/AIServicesShowcase'));

// Additional pages from HEAD branch
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/EnterpriseSolutions'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));
const IoTManagementPlatform = lazy(() => import('./pages/services/IoTManagementPlatform'));
const BlockchainDeFiSolutions = lazy(() => import('./pages/services/BlockchainDeFiSolutions'));
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const IoTDataAnalytics = lazy(() => import('./pages/services/IoTDataAnalytics'));
const NextGenInnovativeServices2025 = lazy(() => import('./pages/NextGenInnovativeServices2025'));
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const NewServices = lazy(() => import('./pages/NewServices'));

// Company information pages
const About = lazy(() => import('./pages/About'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
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
const EnhancedServicesShowcase = lazy(() => import('./pages/EnhancedServicesShowcase'));
const InnovativeServicesShowcase = lazy(() => import('./pages/InnovativeServicesShowcase'));

// Solutions pages
const EnterpriseSolutions = lazy(() => import('./pages/solutions/Enterprise'));
const HealthcareSolutions = lazy(() => import('./pages/solutions/Healthcare'));

// Additional missing pages to fix broken links
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Events = lazy(() => import('./pages/Events'));
const Webinars = lazy(() => import('./pages/Webinars'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Support = lazy(() => import('./pages/Support'));
const Docs = lazy(() => import('./pages/Docs'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Community = lazy(() => import('./pages/CommunityPage'));

// AI Autonomous Service pages
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

// AI Content Generation pages
const AIContentGenerationAutomation = lazy(() => import('./pages/services/AIContentGenerationAutomation'));
const AIContentGenerationPro = lazy(() => import('./pages/services/AIContentGenerationPro'));
const AIConsciousnessEvolution = lazy(() => import('./pages/services/AIConsciousnessEvolution'));

// Enhanced AI service pages
const AIBusinessIntelligenceElite = lazy(() => import('./pages/services/AIBusinessIntelligenceElite'));
const AIBusinessIntelligenceSuite = lazy(() => import('./pages/services/AIBusinessIntelligenceSuite'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
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
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/services-overview', element: <ServicesOverviewPage /> },
  { path: '/ai-services', element: <AIServicesShowcase /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  
  // Additional routes from HEAD branch
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/ai-solutions', element: <AIServices /> },
  { path: '/cloud-devops', element: <CloudDevOps /> },
  { path: '/enterprise-solutions', element: <EnterpriseSolutionsPage /> },
  { path: '/digital-transformation', element: <DigitalTransformation /> },
  { path: '/quantum-neural-network-platform', element: <QuantumNeuralNetworkPlatform /> },
  { path: '/autonomous-business-operations-platform', element: <AutonomousBusinessOperationsPlatform /> },
  { path: '/ai-powered-it-asset-management', element: <AIPoweredITAssetManagement /> },
  { path: '/soc2-compliance-automation', element: <SOC2ComplianceAutomation /> },
  { path: '/ai-autonomous-research-assistant', element: <AIAutonomousResearchAssistant /> },
  { path: '/5g-enterprise-solutions', element: <FiveGEnterpriseSolutions /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/new-services', element: <NewServices /> },
  { path: '/about', element: <About /> },
  { path: '/mission', element: <Mission /> },
  { path: '/team', element: <Team /> },
  { path: '/careers', element: <Careers /> },
  { path: '/news', element: <News /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/cookies', element: <Cookies /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/events', element: <Events /> },
  { path: '/webinars', element: <Webinars /> },
  { path: '/white-papers', element: <WhitePapers /> },
  { path: '/testimonials', element: <Testimonials /> },
  { path: '/support', element: <Support /> },
  { path: '/docs', element: <Docs /> },
  { path: '/marketplace', element: <Marketplace /> },
  { path: '/community', element: <Community /> },
  
  // AI Autonomous Service routes
  { path: '/ai-autonomous-business-manager', element: <AIAutonomousBusinessManager /> },
  { path: '/ai-autonomous-business-platform', element: <AIAutonomousBusinessPlatform /> },
  { path: '/ai-autonomous-research', element: <AIAutonomousResearch /> },
  { path: '/ai-autonomous-systems-platform', element: <AIAutonomousSystemsPlatform /> },
  { path: '/ai-autonomous-code-review', element: <AIAutonomousCodeReview /> },
  { path: '/ai-autonomous-creative-director', element: <AIAutonomousCreativeDirector /> },
  { path: '/ai-autonomous-data', element: <AIAutonomousData /> },
  { path: '/ai-autonomous-decision-engine', element: <AIAutonomousDecisionEngine /> },
  { path: '/ai-autonomous-decision-platform', element: <AIAutonomousDecisionPlatform /> },
  { path: '/ai-autonomous-devops', element: <AIAutonomousDevOps /> },
  { path: '/ai-autonomous-education-professor', element: <AIAutonomousEducationProfessor /> },
  { path: '/ai-autonomous-healthcare-physician', element: <AIAutonomousHealthcarePhysician /> },
  { path: '/ai-autonomous-learning-system', element: <AIAutonomousLearningSystem /> },
  { path: '/ai-autonomous-legal-counsel', element: <AIAutonomousLegalCounsel /> },
  { path: '/ai-autonomous-logistics', element: <AIAutonomousLogistics /> },
  { path: '/ai-autonomous-manufacturing', element: <AIAutonomousManufacturing /> },
  { path: '/ai-autonomous-robotics', element: <AIAutonomousRobotics /> },
  { path: '/ai-autonomous-scientific-researcher', element: <AIAutonomousScientificResearcher /> },
  { path: '/ai-autonomous-security', element: <AIAutonomousSecurity /> },
  { path: '/ai-autonomous-testing', element: <AIAutonomousTesting /> },
  { path: '/ai-autonomous-vehicle-platform', element: <AIAutonomousVehiclePlatform /> },
  { path: '/ai-autonomous-vehicle', element: <AIAutonomousVehicle /> },
  { path: '/ai-autonomous-vehicles-platform', element: <AIAutonomousVehiclesPlatform /> },
  { path: '/ai-autonomous-vehicles', element: <AIAutonomousVehicles /> },
  { path: '/ai-autonomous-venture-capitalist', element: <AIAutonomousVentureCapitalist /> },
  
  // AI Content Generation routes
  { path: '/ai-content-generation-automation', element: <AIContentGenerationAutomation /> },
  { path: '/ai-content-generation-pro', element: <AIContentGenerationPro /> },
  { path: '/ai-consciousness-evolution', element: <AIConsciousnessEvolution /> },
  
  // Enhanced AI service routes
  { path: '/ai-business-intelligence-elite', element: <AIBusinessIntelligenceElite /> },
  { path: '/ai-business-intelligence-suite', element: <AIBusinessIntelligenceSuite /> },
  { path: '/ai-business-intelligence-elite-2026', element: <AIBusinessIntelligenceElite /> },
  { path: '/ai-business-intelligence-suite-2029', element: <AIBusinessIntelligenceSuite /> },
  { path: '/ai-content-generation-automation-2033', element: <AIContentGenerationAutomation /> },
  { path: '/ai-content-generation-pro-2029', element: <AIContentGenerationPro /> },
  { path: '/ai-consciousness-evolution-2025', element: <AIConsciousnessEvolution /> },
  { path: '/ai-consciousness-evolution-2029', element: <AIConsciousnessEvolution /> },
  
  // Quantum and other technology routes
  { path: '/quantum-cloud-infrastructure', element: <QuantumTechnology /> },
  { path: '/quantum-financial-trading', element: <QuantumTechnology /> },
  { path: '/quantum-services', element: <QuantumTechnology /> },
  { path: '/space-tech', element: <News /> },
  { path: '/research-development', element: <News /> },
  { path: '/enterprise-it', element: <ITInfrastructure /> },
  { path: '/micro-saas', element: <MicroSAASSolutions /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />
            <Route path="/talent/*" element={<TalentRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/mobile/*" element={<MobileAppRoutes />} />
            <Route path="/content/*" element={<ContentRoutes />} />
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />
            <Route path="/community/*" element={<CommunityRoutes />} />
            <Route path="/developers/*" element={<DeveloperRoutes />} />
            <Route path="*" element={<ErrorRoutes />} />
          </Routes>
        </Suspense>
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;