import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context'; // Added CartProvider
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { ConsentProvider } from "./context/ConsentContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import OfflineToast from "./components/OfflineToast";
import PwaInstallButton from "./components/PwaInstallButton";
import { CookieBanner } from "./components/CookieBanner";
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
import Home from './pages/Home';
import AIMatcherPage from './pages/AIMatcher';
import TalentDirectory from './pages/TalentDirectory';
import TalentsPage from './pages/TalentsPage';
import ServicesPage from './pages/ServicesPage';
import EquipmentPage from './pages/EquipmentPage';
import EquipmentDetail from './pages/EquipmentDetail';
import Analytics from './pages/Analytics';
import MobileLaunchPage from './pages/MobileLaunchPage';
import CommunityPage from './pages/CommunityPage';
import { CommunityProvider } from './context';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NewProductsPage from './pages/NewProductsPage';
erpabg-codex/add-new-products-page-with-10-items
import NewServicesPage from './pages/NewServicesPage';
main
import Sitemap from './pages/Sitemap';
import PartnersPage from './pages/Partners';
import Help from './pages/Help';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SimpleSignup from './pages/SimpleSignup';
import ITOnsiteServicesPage from './pages/ITOnsiteServicesPage';
import OpenAppRedirect from './pages/OpenAppRedirect';
import ContactPage from './pages/Contact';
import ZionHireAI from './pages/ZionHireAI';
import RequestQuotePage from './pages/RequestQuote';
import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';
import PrivacyPage from './pages/PrivacyPage';

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/product/:id', element: <ProductPage /> }, // Added ProductPage route
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Signup /> },
  { path: '/signup', element: <SimpleSignup /> },
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
  {
    path: '/community',
    element: (
      <CommunityProvider>
        <CommunityPage />
      </CommunityProvider>
    ),
  },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/help', element: <Help /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/profile/privacy', element: <PrivacyPage /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
    <WhitelabelProvider>
      <ConsentProvider>
        <ThemeProvider defaultTheme="dark">
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
        <OfflineToast />
        <Toaster />
        <SonnerToaster position="top-right" />
          <CookieBanner />
          <PwaInstallButton />
        </ThemeProvider>
      </ConsentProvider>
    </WhitelabelProvider>
  );
}

export default App;
