import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Breadcrumb } from './components/Breadcrumb';
import { FloatingContactButton } from './components/FloatingContactButton';

const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const AIServicesShowcase = React.lazy(() => import('./pages/AIServicesShowcase'));
const EnterpriseSolutionsPage = React.lazy(() => import('./pages/EnterpriseSolutionsPage'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

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
  { path: '/new-products', element: <NewProductsPage /> },
  { path: '/more-products', element: <MoreProductsPage /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/cart', element: <Checkout /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/privacy-settings', element: <PrivacySettings /> },
];

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

// Enhanced App component with accessibility, performance, and SEO
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <Breadcrumb />
      <Suspense fallback={<div className="p-4 text-center text-white">Loading...</div>}>
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
      <FloatingContactButton />
    </div>
  );
};

export default App;