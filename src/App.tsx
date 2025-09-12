import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import InstallPrompt from "./components/InstallPrompt";
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
  DeveloperRoutes,
  SellerRoutes
} from './routes';
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
import ITOnsiteServicesPage from './pages/ITOnsiteServicesPage';
import OpenAppRedirect from './pages/OpenAppRedirect';
import ContactPage from './pages/Contact';
import ZionHireAI from './pages/ZionHireAI';
import RequestQuotePage from './pages/RequestQuote';

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

const App = () => {
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
            <Route path="/seller/*" element={<SellerRoutes />} />
            <Route path="*" element={<ErrorRoutes />} />
          </Routes>
        </Suspense>
        <Toaster />
        <SonnerToaster position="top-right" />
          <CookieBanner />
          <PwaInstallButton />
        </ThemeProvider>
      </ConsentProvider>
    </WhitelabelProvider>
  );
}

function HomePage() {
  return (
    <div>
      <h2>Welcome to Zion Tech Group</h2>
      <p>Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default App;