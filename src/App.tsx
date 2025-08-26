import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { AppLayout } from "@/layout/AppLayout";
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

// Lazy loaded components
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const EnhancedServicesShowcase = React.lazy(() => import('./pages/EnhancedServicesShowcase'));
const ComprehensiveContact = React.lazy(() => import('./pages/ComprehensiveContact'));
const FAQPage = React.lazy(() => import('./pages/FAQ'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const WishlistPage = React.lazy(() => import('./pages/Wishlist'));
const CartPage = React.lazy(() => import('./pages/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const InnovativeServicesShowcase = React.lazy(() => import('./pages/InnovativeServicesShowcase'));

// New AI Service pages
const AIAutonomousBusinessManager = lazy(() => import('./pages/ai-services/AIAutonomousBusinessManager'));
const AIAutonomousBusinessPlatform = lazy(() => import('./pages/ai-services/AIAutonomousBusinessPlatform'));
const AIAutonomousCodeReview = lazy(() => import('./pages/ai-services/AIAutonomousCodeReview'));

// Direct imports
import Home from './pages/Home';
import AIMatcherPage from './pages/AIMatcher';
import TalentDirectory from './pages/TalentDirectory';
import TalentsPage from './pages/TalentsPage';
import MoreTalentsPage from './pages/MoreTalentsPage';
import ServicesPage from './pages/ServicesPage';
import EquipmentPage from './pages/EquipmentPage';
import EquipmentDetail from './pages/EquipmentDetail';
import Analytics from './pages/Analytics';
import MobileLaunchPage from './pages/MobileLaunchPage';
import CommunityPage from './pages/CommunityPage';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NewProductsPage from './pages/NewProductsPage';
import MoreProductsPage from './pages/MoreProductsPage';
import Sitemap from './pages/Sitemap';
import PartnersPage from './pages/Partners';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignUp from './pages/SignUp';
import ITOnsiteServicesPage from './pages/ITOnsiteServicesPage';
import OpenAppRedirect from './pages/OpenAppRedirect';
import ContactPage from './pages/Contact';
import ZionHireAI from './pages/ZionHireAI';
import RequestQuotePage from './pages/RequestQuote';

const baseRoutes = [
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
  
  // Innovative Services 2026
  { path: '/innovative-services-showcase-2026', element: <InnovativeServicesShowcase2026 /> },
  { path: '/innovative-services-2026', element: <InnovativeServicesShowcase2026 /> },
  
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
  { path: '/enhanced-services', element: <EnhancedServicesShowcase /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/cybersecurity-services', element: <CybersecurityServicesPage /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/innovative-services-2025', element: <InnovativeServicesShowcase /> },
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
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
  { path: '/faq', element: <FAQPage /> },
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <Checkout /> },
  // AI Service routes
  { path: '/ai-autonomous-business-manager', element: <AIAutonomousBusinessManager /> },
  { path: '/ai-autonomous-business-platform', element: <AIAutonomousBusinessPlatform /> },
  { path: '/ai-autonomous-code-review', element: <AIAutonomousCodeReview /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
    <WhitelabelProvider>
      <ThemeProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <Routes>
              <Route element={<AppLayout />}>
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
              </Route>
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;