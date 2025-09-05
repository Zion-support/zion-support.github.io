import React, { Suspense } from 'react',
import { Routes, Route } from 'react-router-dom',
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import { Toaster } from "./components/ui/toaster",
import { Toaster as SonnerToaster } from "./components/ui/sonner",import {
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
} from './routes',
const Home = React.lazy(() => import('./pages/Home')),
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher')),
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory')),
const TalentsPage = React.lazy(() => import('./pages/TalentsPage')),
const ServicesPage = React.lazy(() => import('./pages/ServicesPage')),
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage')),
const Analytics = React.lazy(() => import('./pages/Analytics')),
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage')),
const CommunityPage = React.lazy(() => import('./pages/CommunityPage')),
const Categories = React.lazy(() => import('./pages/Categories')),
const Login = React.lazy(() => import('./pages/Login')),
const Signup = React.lazy(() => import('./pages/Signup')),
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage')),
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect')),
const ContactPage = React.lazy(() => import('./pages/Contact')),

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
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> }],

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme=&quot;dark&quot;>
        <Suspense fallback={<div className=&quot;p-4 text-center&quot;>Loading...</div>}>
import React, {Suspense} from 'react';
import './App.css';
import {AuthRoutes, DashboardRoutes, MarketplaceRoutes, TalentRoutes, AdminRoutes, MobileAppRoutes, ContentRoutes, ErrorRoutes, EnterpriseRoutes, CommunityRoutes, DeveloperRoutes} from './routes';
const Home = React.lazy_(() => import('./pages/Home'));
const AIMatcherPage = React.lazy_(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy_(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy_(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy_(() => import('./pages/ServicesPage'));
const EquipmentPage = React.lazy_(() => import('./pages/EquipmentPage'));
const Analytics = React.lazy_(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy_(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy_(() => import('./pages/CommunityPage'));
const Categories = React.lazy_(() => import('./pages/Categories'));
const Login = React.lazy_(() => import('./pages/Login'));
const Signup = React.lazy_(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy_(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy_(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy_(() => import('./pages/Contact'));

const baseRoutes = [
  {path: '/', element: <Home />},
  {path: '/match', element: <AIMatcherPage />},
  {path: '/login', element: <Login />},
  {path: '/signup', element: <Signup />},
  {path: '/talent', element: <TalentDirectory />},
  {path: '/talents', element: <TalentsPage />},
  {path: '/services', element: <ServicesPage />},
  {path: '/it-onsite-services', element: <ITOnsiteServicesPage />},
  {path: '/categories', element: <Categories />},
  {path: '/equipment', element: <EquipmentPage />},
  {path: '/analytics', element: <Analytics />},
  {path: '/mobile-launch', element: <MobileLaunchPage />},
  {path: '/open-app', element: <OpenAppRedirect />},
  {path: '/community', element: <CommunityPage />},
  {path: '/contact', element: <ContactPage />}];

const App = () => {return (_<WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {baseRoutes.map(({ path, element}) => (
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
            <Route path=&quot;*&quot; element={<ErrorRoutes />} />          </Routes>
        </Suspense>
        <Toaster />
        <SonnerToaster position=&quot;top-right&quot; />
      </ThemeProvider>
    </WhitelabelProvider>
  )
},

export default App,
