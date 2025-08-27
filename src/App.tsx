import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { LinkHealthMonitor } from './components/LinkHealthMonitor';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { ScrollToTop } from './components/ScrollToTop';
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
// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = lazy(() => import('./pages/EquipmentDetail'));
const Analytics = lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const Categories = lazy(() => import('./pages/Categories'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PartnersPage = lazy(() => import('./pages/Partners'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = lazy(() => import('./pages/Contact'));
const ZionHireAI = lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuote'));
const ExpandedServicesPage = lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesPricingPage = lazy(() => import('./pages/ServicesPricingPage'));
const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
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
];
// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/EnterpriseSolutions'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));
// New innovative service pages
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const IoTDataAnalytics = lazy(() => import('./pages/services/IoTDataAnalytics'));
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
const ComprehensiveServicesShowcase = lazy(() => import('./pages/ComprehensiveServicesShowcase'));
const InnovativeServicesMarketing = lazy(() => import('./pages/InnovativeServicesMarketing'));
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
const Support = lazy(() => import('./pages/HelpCenter'));
const Docs = lazy(() => import('./pages/HelpCenter'));
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
// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
  </div>
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
export default App;
