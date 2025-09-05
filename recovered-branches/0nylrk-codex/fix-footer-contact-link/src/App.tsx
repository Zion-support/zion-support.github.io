<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense } from 'react',
import { Routes, Route } from 'react-router-dom',
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import { Toaster } from "./components/ui/toaster",
import { Toaster as SonnerToaster } from "./components/ui/sonner",
=======
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from &quot;./components/ThemeProvider&quot;;
import { WhitelabelProvider } from &quot;./context/WhitelabelContext&quot;;
import { Toaster } from &quot;./components/ui/toaster&quot;;
import { Toaster as SonnerToaster } from &quot;./components/ui/sonner&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
import React, {_Suspense} from 'react';
import './App.css';
import {_AuthRoutes, _DashboardRoutes, _MarketplaceRoutes, _TalentRoutes, _AdminRoutes, _MobileAppRoutes, _ContentRoutes, _ErrorRoutes, _EnterpriseRoutes, _CommunityRoutes, _DeveloperRoutes} from './routes';
const _Home = React.lazy__(() => import('./pages/Home'));
const _AIMatcherPage = React.lazy__(() => import('./pages/AIMatcher'));
const _TalentDirectory = React.lazy__(() => import('./pages/TalentDirectory'));
const _TalentsPage = React.lazy__(() => import('./pages/TalentsPage'));
const _ServicesPage = React.lazy__(() => import('./pages/ServicesPage'));
const _EquipmentPage = React.lazy__(() => import('./pages/EquipmentPage'));
const _Analytics = React.lazy__(() => import('./pages/Analytics'));
const _MobileLaunchPage = React.lazy__(() => import('./pages/MobileLaunchPage'));
const _CommunityPage = React.lazy__(() => import('./pages/CommunityPage'));
const _Categories = React.lazy__(() => import('./pages/Categories'));
const _Login = React.lazy__(() => import('./pages/Login'));
const _Signup = React.lazy__(() => import('./pages/Signup'));
const _ITOnsiteServicesPage = React.lazy__(() => import('./pages/ITOnsiteServicesPage'));
const _OpenAppRedirect = React.lazy__(() => import('./pages/OpenAppRedirect'));
const _ContactPage = React.lazy__(() => import('./pages/Contact'));

const _baseRoutes = [
  {_path: '/', _element: <Home />},
  {_path: '/match', _element: <AIMatcherPage />},
  {_path: '/login', _element: <Login />},
  {_path: '/signup', _element: <Signup />},
  {_path: '/talent', _element: <TalentDirectory />},
  {_path: '/talents', _element: <TalentsPage />},
  {_path: '/services', _element: <ServicesPage />},
  {_path: '/it-onsite-services', _element: <ITOnsiteServicesPage />},
  {_path: '/categories', _element: <Categories />},
  {_path: '/equipment', _element: <EquipmentPage />},
  {_path: '/analytics', _element: <Analytics />},
  {_path: '/mobile-launch', _element: <MobileLaunchPage />},
  {_path: '/open-app', _element: <OpenAppRedirect />},
  {_path: '/community', _element: <CommunityPage />},
  {_path: '/contact', _element: <ContactPage />}];

const _App = () => {_return (_<WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <Routes>
            {_baseRoutes.map(({ path, _element}) => (
              <Route key={_path} path={_path} element={_element} />
            ))}
<<<<<<< HEAD
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
            <Route path=&quot;*&quot; element={<ErrorRoutes />} />
=======
            <Route path="/auth/*" element={_<AuthRoutes />} />
            <Route path="/dashboard/*" element={_<DashboardRoutes />} />
            <Route path="/marketplace/*" element={_<MarketplaceRoutes />} />
            <Route path="/talent/*" element={_<TalentRoutes />} />
            <Route path="/admin/*" element={_<AdminRoutes />} />
            <Route path="/mobile/*" element={_<MobileAppRoutes />} />
            <Route path="/content/*" element={_<ContentRoutes />} />
            <Route path="/enterprise/*" element={_<EnterpriseRoutes />} />
            <Route path="/community/*" element={_<CommunityRoutes />} />
            <Route path="/developers/*" element={_<DeveloperRoutes />} />
            <Route path="*" element={_<ErrorRoutes />} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Routes>
        </Suspense>
        <Toaster />
        <SonnerToaster position=&quot;top-right&quot; />
      </ThemeProvider>
    </WhitelabelProvider>
  )
},

export default App,
