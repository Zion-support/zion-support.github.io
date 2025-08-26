import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
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
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
=======
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
=======
const FAQPage = React.lazy(() => import('./pages/FAQ'));
=======
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
=======
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
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Signup /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/enhanced-services', element: <EnhancedServicesShowcase /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/cybersecurity-services', element: <CybersecurityServicesPage /> },
=======
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
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
  { path: '/comprehensive-contact', element: <ComprehensiveContact /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
// New AI Service pages to fix broken links
const AIAutonomousBusinessManager = lazy(() => import('./pages/ai-services/AIAutonomousBusinessManager'));
const AIAutonomousBusinessPlatform = lazy(() => import('./pages/ai-services/AIAutonomousBusinessPlatform'));
const AIAutonomousCodeReview = lazy(() => import('./pages/ai-services/AIAutonomousCodeReview'));
=======
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/cybersecurity-services', element: <CybersecurityServicesPage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/faq', element: <FAQPage /> },
=======
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <Checkout /> },
];

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-gray-400 text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  
  return (
    <WhitelabelProvider>
      <ThemeProvider>
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <ErrorBoundary>
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
          </ErrorBoundary>
        </Suspense>
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
};

export default App;