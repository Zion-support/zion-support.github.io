import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
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

const { lazy } = React;
const Home = lazy(() => import('./pages/Home'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage'));
const Analytics = lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const Categories = lazy(() => import('./pages/Categories'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = lazy(() => import('./pages/ITOnsiteServicesPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Signup /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/more-talents', element: <MoreTalentsPage /> },
  { path: '/additional-talents', element: <AdditionalTalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/it-onsite-services/:country', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/new-products', element: <NewProductsPage /> },
  { path: '/more-products', element: <MoreProductsPage /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/profile/privacy', element: <PrivacyPage /> },
];

// New pages
const Solutions = React.lazy(() => import('./pages/solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const News = React.lazy(() => import('./pages/news'));
const Events = React.lazy(() => import('./pages/events'));

// Service pages
const Services = createLazyComponent(() => import('./pages/Services'));
const Services2026 = createLazyComponent(() => import('./pages/Services2026'));
const Services2027 = createLazyComponent(() => import('./pages/InnovativeServices2027'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = createLazyComponent(() => import('./pages/services/MicroSAASSolutions'));
const ComprehensiveServices = createLazyComponent(() => import('./pages/ComprehensiveServices'));

// Additional pages
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Team = createLazyComponent(() => import('./pages/Team'));
const HelpCenter = createLazyComponent(() => import('./pages/HelpCenter'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Developers = createLazyComponent(() => import('./pages/Developers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Status = createLazyComponent(() => import('./pages/Status'));
const API = createLazyComponent(() => import('./pages/Api'));

// Enhanced Services Showcase 2025
const EnhancedServicesShowcase2025 = lazy(() => import('./pages/EnhancedServicesShowcase2025'));

// Comprehensive Services Showcase 2025
const ComprehensiveServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// Comprehensive Pricing Guide 2025
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// 2025 Innovative Services
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ZionInnovativeServices2025 = lazy(() => import('./pages/ZionInnovativeServices2025'));

// 2026 Innovative Services
const InnovativeServicesShowcase2026 = lazy(() => import('./pages/InnovativeServicesShowcase2026'));
const ComprehensivePricingGuide2026 = lazy(() => import('./pages/ComprehensivePricingGuide2026'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// New Innovative Services
const AIContentCreationStudioPro = lazy(() => import('./pages/services/AI-Content-Creation-Studio-Pro'));
const QuantumAITradingPlatform = lazy(() => import('./pages/services/Quantum-AI-Trading-Platform'));

// New Cutting-Edge Services 2025
const AIQuantumComputingPlatform = lazy(() => import('./pages/services/AI-Quantum-Computing-Platform'));
const AISpaceTechnologyPlatform = lazy(() => import('./pages/services/AI-Space-Technology-Platform'));
const AIFinancialTechnologyPlatform = lazy(() => import('./pages/services/AI-Financial-Technology-Platform'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// AI Service pages
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));

// New pages
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));

// New pages
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Partners = React.lazy(() => import('./pages/Partners'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));

// NEW INNOVATIVE MICRO SAAS SERVICE PAGES
const AILegalDocumentAnalyzer = React.lazy(() => import('./pages/services/ai-legal-document-analyzer'));
const AIRealEstateInvestmentAnalyzer = React.lazy(() => import('./pages/services/ai-real-estate-investment-analyzer'));
const AIRestaurantManagementSystem = React.lazy(() => import('./pages/services/ai-restaurant-management-system'));
const AIFitnessCoachingPlatform = React.lazy(() => import('./pages/services/ai-fitness-coaching-platform'));
const AIEcommercePersonalizationEngine = React.lazy(() => import('./pages/services/ai-ecommerce-personalization-engine'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const AIVideoContentCreationStudio = React.lazy(() => import('./pages/services/ai-video-content-creation-studio'));
const AICustomerChurnPrediction = React.lazy(() => import('./pages/services/ai-customer-churn-prediction'));
const AIFinancialFraudDetection = React.lazy(() => import('./pages/services/ai-financial-fraud-detection'));
const AIEnergyManagementSystem = React.lazy(() => import('./pages/services/ai-energy-management-system'));

// Enhanced components
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// New pages I've created
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Events = createLazyComponent(() => import('./pages/Events'));

// Additional missing pages
const ZionHireAI = createLazyComponent(() => import('./pages/ZionHireAI'));
const EnhancedServices = createLazyComponent(() => import('./pages/EnhancedServices'));
const ITOnsiteServices = createLazyComponent(() => import('./pages/ITOnsiteServices'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-6">We're working on fixing the problem.</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Discover and purchase cutting-edge AI solutions and technology services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Coming Soon</p>
    </div>
  </div>
);

const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center text-white">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
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
        </React.Suspense>
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
}

export default App;