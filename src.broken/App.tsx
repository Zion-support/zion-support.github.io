import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from &quot;./components/ThemeProvider&quot;;
import { WhitelabelProvider } from &quot;./context/WhitelabelContext&quot;;
import { Toaster } from &quot;./components/ui/toaster&quot;;
import { Toaster as SonnerToaster } from &quot;./components/ui/sonner&quot;;
import InstallPrompt from &quot;./components/InstallPrompt&quot;;
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
const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/it-services', element: <ITServicesPage /> },
  { path: '/micro-saas-services', element: <MicroSAASServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> }];

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider>
        <Suspense fallback={<div className=&quot;p-4 text-center&quot;>Loading...</div>}>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path=&quot;/auth/*&quot; element={<AuthRoutes />} />
            <Route path=&quot;/dashboard/*&quot; element={<DashboardRoutes />} />
            <Route path=&quot;/marketplace/*&quot; element={<MarketplaceRoutes />} />
            <Route path=&quot;/talent/*&quot; element={<TalentRoutes />} />
            <Route path=&quot;/admin/*&quot; element={<AdminRoutes />} />
            <Route path=&quot;/mobile/*&quot; element={<MobileAppRoutes />} />
            <Route path=&quot;/content/*&quot; element={<ContentRoutes />} />
            <Route path=&quot;/enterprise/*&quot; element={<EnterpriseRoutes />} />
            <Route path=&quot;/community/*&quot; element={<CommunityRoutes />} />
            <Route path=&quot;/developers/*&quot; element={<DeveloperRoutes />} />
            <Route path=&quot;/seller/*&quot; element={<SellerRoutes />} />
            <Route path=&quot;*&quot; element={<ErrorRoutes />} />
          </Routes>
        </Suspense>
        <Toaster />
        <SonnerToaster position=&quot;top-right&quot; />
        <InstallPrompt />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;
