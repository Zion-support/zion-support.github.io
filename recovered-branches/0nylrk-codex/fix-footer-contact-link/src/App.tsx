<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { Suspense } from 'react';
import { Routes, Route  } from 'react-router-dom';
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App ;
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import {
  AuthRoutes
  DashboardRoutes
  MarketplaceRoutes
  TalentRoutes
  AdminRoutes
  MobileAppRoutes
  ContentRoutes
  ErrorRoutes
  EnterpriseRoutes
  CommunityRoutes
  DeveloperRoutes

import {;
  AuthRoutes,;
  DashboardRoutes,;
  MarketplaceRoutes,;
  TalentRoutes,;
  AdminRoutes,;
  MobileAppRoutes,;
  ContentRoutes,;
  ErrorRoutes,;
  EnterpriseRoutes,;
  CommunityRoutes,;
  DeveloperRoutes,;
} from "./routes";
const Home = React && React.lazy(() => import("./pages/Home"));
const AIMatcherPage = React && React.lazy(() => import("./pages/AIMatcher"));
const TalentDirectory = React && React.lazy(() => import("./pages/TalentDirectory"));
const TalentsPage = React && React.lazy(() => import("./pages/TalentsPage"));
const ServicesPage = React && React.lazy(() => import("./pages/ServicesPage"));
const EquipmentPage = React && React.lazy(() => import("./pages/EquipmentPage"));
const Analytics = React && React.lazy(() => import("./pages/Analytics"));
const MobileLaunchPage = React && React.lazy(() => import("./pages/MobileLaunchPage"));
const CommunityPage = React && React.lazy(() => import("./pages/CommunityPage"));
const Categories = React && React.lazy(() => import("./pages/Categories"));
const Login = React && React.lazy(() => import("./pages/Login"));
const Signup = React && React.lazy(() => import("./pages/Signup"));
const ITOnsiteServicesPage = React && React.lazy(;
  () => import("./pages/ITOnsiteServicesPage"),;
);
const OpenAppRedirect = React && React.lazy(() => import("./pages/OpenAppRedirect"));
const ContactPage = React && React.lazy(() => import("./pages/Contact"));

const baseRoutes = [;
  { path: "/", element: <Home /> },;
  { path: "/match", element: <AIMatcherPage /> },;
  { path: "/login", element: <Login /> },;
  { path: "/signup", element: <Signup /> },;
  { path: "/talent", element: <TalentDirectory /> },;
  { path: "/talents", element: <TalentsPage /> },;
  { path: "/services", element: <ServicesPage /> },;
  { path: "/it-onsite-services", element: <ITOnsiteServicesPage /> },;
  { path: "/categories", element: <Categories /> },;
  { path: "/equipment", element: <EquipmentPage /> },;
  { path: "/analytics", element: <Analytics /> },;
  { path: "/mobile-launch", element: <MobileLaunchPage /> },;
  { path: "/open-app", element: <OpenAppRedirect /> },;
  { path: "/community", element: <CommunityPage /> },;
  { path: "/contact", element: <ContactPage /> },;
];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { Suspense } from 'react',
import { Routes, Route } from 'react-router-dom',
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import { Toaster } from "./components/ui/toaster",
import { Toaster as SonnerToaster } from "./components/ui/sonner",
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './components/ThemeProvider';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { Toaster } from './components/ui/toaster';
import { Toaster as SonnerToaster } from './components/ui/sonner';
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======

const App = () => {;

  return (
    <WhitelabelProvider>;
      <ThemeProvider defaultTheme="dark">;
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;
          <Routes>;
            {baseRoutes && baseRoutes.map(({ path, element }) => (;
              <Route key={path} path={path} element={element} />;
            ))}
import React, { Suspense } from './react';
import { Routes, Route  } from './react-router-dom';
import "./App.css";
import { ThemeProvider  } from './components / ThemeProvider';
import { WhitelabelProvider  } from './context / WhitelabelContext';
import { Toaster  } from './components / ui / toaster';
import { Toaster, as, SonnerToaster  } from './components / ui / sonner';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { Suspense } from 'react';
import { Routes, Route  } from 'react-router-dom';
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";

import { Toaster, as, SonnerToaster } from "./components/ui/sonner";
import {
  AuthRoutes
  DashboardRoutes
  MarketplaceRoutes
  TalentRoutes
  AdminRoutes
  MobileAppRoutes
  ContentRoutes
  ErrorRoutes
  EnterpriseRoutes
  CommunityRoutes
  DeveloperRoutes
} from "./routes";
const Home = React.lazy(() => import("./pages/Home"));
const AIMatcherPage = React.lazy(() => import("./pages/AIMatcher"));
const TalentDirectory = React.lazy(() => import("./pages/TalentDirectory"));
const TalentsPage = React.lazy(() => import("./pages/TalentsPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const EquipmentPage = React.lazy(() => import("./pages/EquipmentPage"));
const Analytics = React.lazy(() => import("./pages/Analytics"));
const MobileLaunchPage = React.lazy(() => import("./pages/MobileLaunchPage"));
const CommunityPage = React.lazy(() => import("./pages/CommunityPage"));
const Categories = React.lazy(() => import("./pages/Categories"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const ITOnsiteServicesPage = React.lazy(
  () => import("./pages/ITOnsiteServicesPage")
);
const OpenAppRedirect = React.lazy(() => import("./pages/OpenAppRedirect"));
const ContactPage = React.lazy(() => import("./pages/Contact"));
const baseRoutes = [
  { path: "/", element: <Home /> }
  { path: "/match", element: <AIMatcherPage /> }
  { path: "/login", element: <Login /> }
  { path: "/signup", element: <Signup /> }
  { path: "/talent", element: <TalentDirectory /> }
  { path: "/talents", element: <TalentsPage /> }
  { path: "/services", element: <ServicesPage /> }
  { path: "/it-onsite-services", element: <ITOnsiteServicesPage /> }
  { path: "/categories", element: <Categories /> }
  { path: "/equipment", element: <EquipmentPage /> }
  { path: "/analytics", element: <Analytics /> }
  { path: "/mobile-launch", element: <MobileLaunchPage /> }
  { path: "/open-app", element: <OpenAppRedirect /> }
  { path: "/community", element: <CommunityPage /> }
  { path: "/contact", element: <ContactPage /> }
];
import React, { Suspense } from 'react',
import { Routes, Route } from 'react-router-dom',
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import { Toaster } from "./components/ui/toaster",
import { Toaster as SonnerToaster } from "./components/ui/sonner",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  DeveloperRoutes,
} from './routes';
const Home = React.lazy (() => import ("./pages / Home"));
const AIMatcherPage = React.lazy (() => import ("./pages / AIMatcher"));
const TalentDirectory = React.lazy (() => import ("./pages / TalentDirectory"));
const TalentsPage = React.lazy (() => import ("./pages / TalentsPage"));
const ServicesPage = React.lazy (() => import ("./pages / ServicesPage"));
const EquipmentPage = React.lazy (() => import ("./pages / EquipmentPage"));
const Analytics = React.lazy (() => import ("./pages / Analytics"));
const MobileLaunchPage = React.lazy (() => import ("./pages / MobileLaunchPage"));
const CommunityPage = React.lazy (() => import ("./pages / CommunityPage"));
const Categories = React.lazy (() => import ("./pages / Categories"));
const Login = React.lazy (() => import ("./pages / Login"));
const Signup = React.lazy (() => import ("./pages / Signup"));
const ITOnsiteServicesPage = React.lazy (
  () => import ("./pages / ITOnsiteServicesPage"),
);
const OpenAppRedirect = React.lazy (() => import ("./pages / OpenAppRedirect"));
const ContactPage = React.lazy (() => import ("./pages / Contact"));
;
const base_routes = [;
  { path: "/", element: <Home /> },
  { path: "/match", element: <AIMatcherPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/talent", element: <TalentDirectory /> },
  { path: "/talents", element: <TalentsPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/it - onsite - services", element: <ITOnsiteServicesPage /> },
  { path: "/categories", element: <Categories /> },
  { path: "/equipment", element: <EquipmentPage /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/mobile - launch", element: <MobileLaunchPage /> },
  { path: "/open - app", element: <OpenAppRedirect /> },
  { path: "/community", element: <CommunityPage /> },
  { path: "/contact", element: <ContactPage /> },
];
;
const App = () =>: any {
  return (
    <WhitelabelProvider>;
      <ThemeProvider default_theme="dark">;
        <Suspense fallback={<div className="p - 4 text-center">Loading...</div>}>;
          <Routes>;
            {base_routes.map (({ path, element }) => (
              <Route key={path} path={path} element={element} />))}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Route path="/auth/*" element={<AuthRoutes />} />;
            <Route path="/dashboard/*" element={<DashboardRoutes />} />;
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />;
            <Route path="/talent/*" element={<TalentRoutes />} />;
            <Route path="/admin/*" element={<AdminRoutes />} />;
            <Route path="/mobile/*" element={<MobileAppRoutes />} />;
            <Route path="/content/*" element={<ContentRoutes />} />;
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />;
            <Route path="/community/*" element={<CommunityRoutes />} />;
            <Route path="/developers/*" element={<DeveloperRoutes />} />;
            <Route path="*" element={<ErrorRoutes />} />;
          </Routes>;
        </Suspense>;
        <Toaster />;


import { Toaster } from "./components/ui/toaster";

import { Toaster, as, SonnerToaster } from "./components/ui/sonner";


import React, { Suspense } from 'react',
import { Routes, Route } from 'react-router-dom',
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import { Toaster } from "./components/ui/toaster",
import { Toaster as SonnerToaster } from "./components/ui/sonner",



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

<<<<<<< HEAD
=======
  DeveloperRoutes,;
} from "./routes";
const Home = React.lazy(() => import("./pages/Home"));
const AIMatcherPage = React.lazy(() => import("./pages/AIMatcher"));
const TalentDirectory = React.lazy(() => import("./pages/TalentDirectory"));
const TalentsPage = React.lazy(() => import("./pages/TalentsPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const EquipmentPage = React.lazy(() => import("./pages/EquipmentPage"));
const Analytics = React.lazy(() => import("./pages/Analytics"));
const MobileLaunchPage = React.lazy(() => import("./pages/MobileLaunchPage"));
const CommunityPage = React.lazy(() => import("./pages/CommunityPage"));
const Categories = React.lazy(() => import("./pages/Categories"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const ITOnsiteServicesPage = React.lazy(
  () => import("./pages/ITOnsiteServicesPage"),
);
const OpenAppRedirect = React.lazy(() => import("./pages/OpenAppRedirect"));
const ContactPage = React.lazy(() => import("./pages/Contact"));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  DeveloperRoutes
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  DeveloperRoutes,
} from './routes';
const Home = React.lazy (() => import ("./pages / Home"));
const AIMatcherPage = React.lazy (() => import ("./pages / AIMatcher"));
const TalentDirectory = React.lazy (() => import ("./pages / TalentDirectory"));
const TalentsPage = React.lazy (() => import ("./pages / TalentsPage"));
const ServicesPage = React.lazy (() => import ("./pages / ServicesPage"));
const EquipmentPage = React.lazy (() => import ("./pages / EquipmentPage"));
const Analytics = React.lazy (() => import ("./pages / Analytics"));
const MobileLaunchPage = React.lazy (() => import ("./pages / MobileLaunchPage"));
const CommunityPage = React.lazy (() => import ("./pages / CommunityPage"));
const Categories = React.lazy (() => import ("./pages / Categories"));
const Login = React.lazy (() => import ("./pages / Login"));
const Signup = React.lazy (() => import ("./pages / Signup"));
const ITOnsiteServicesPage = React.lazy (
  () => import ("./pages / ITOnsiteServicesPage"),
);
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD
  { path: '/contact', element: <ContactPage /> }],

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
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
        </Suspense>
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
<<<<<<< HEAD

=======
  );
}
export default App;

<<<<<<< HEAD
=======
  )
},

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default App,
import React, { Suspense } from 'react',;
import { Routes, Route } from 'react-router-dom',;
import './App.css',;
import { ThemeProvider } from "./components/ThemeProvider",;
import { WhitelabelProvider } from "./context/WhitelabelContext",;
import { Toaster } from "./components/ui/toaster",;
import { Toaster as SonnerToaster } from "./components/ui/sonner",;
import {;
  AuthRoutes,;
  DashboardRoutes,;
  MarketplaceRoutes,;
  TalentRoutes,;
  AdminRoutes,;
  MobileAppRoutes,;
  ContentRoutes,;
  ErrorRoutes,;
  EnterpriseRoutes,;
  CommunityRoutes,;
  DeveloperRoutes;
} from './routes',;
const Home = React.lazy(() => import('./pages/Home')),;
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher')),;
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory')),;
const TalentsPage = React.lazy(() => import('./pages/TalentsPage')),;
const ServicesPage = React.lazy(() => import('./pages/ServicesPage')),;
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage')),;
const Analytics = React.lazy(() => import('./pages/Analytics')),;
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage')),;
const CommunityPage = React.lazy(() => import('./pages/CommunityPage')),;
const Categories = React.lazy(() => import('./pages/Categories')),;
const Login = React.lazy(() => import('./pages/Login')),;
const Signup = React.lazy(() => import('./pages/Signup')),;
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage')),;
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect')),;
const ContactPage = React.lazy(() => import('./pages/Contact')),;
const baseRoutes = [;
  { path: '/', element: <Home /> },;
  { path: '/match', element: <AIMatcherPage /> },;
  { path: '/login', element: <Login /> },;
  { path: '/signup', element: <Signup /> },;
  { path: '/talent', element: <TalentDirectory /> },;
  { path: '/talents', element: <TalentsPage /> },;
  { path: '/services', element: <ServicesPage /> },;
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },;
  { path: '/categories', element: <Categories /> },;
  { path: '/equipment', element: <EquipmentPage /> },;
  { path: '/analytics', element: <Analytics /> },;
  { path: '/mobile-launch', element: <MobileLaunchPage /> },;
  { path: '/open-app', element: <OpenAppRedirect /> },;
  { path: '/community', element: <CommunityPage /> },;
  { path: '/contact', element: <ContactPage /> }],;
const App = () => {;
  return (;
    <WhitelabelProvider>;
      <ThemeProvider defaultTheme="dark">;
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;
          <Routes>;
            {baseRoutes.map(({ path, element }) => (;
              <Route key={path} path={path} element={element} />;
            ))}
const OpenAppRedirect = React.lazy (() => import ("./pages / OpenAppRedirect"));
const ContactPage = React.lazy (() => import ("./pages / Contact"));
;
const base_routes = [;
  { path: "/", element: <Home /> },
  { path: "/match", element: <AIMatcherPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/talent", element: <TalentDirectory /> },
  { path: "/talents", element: <TalentsPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/it - onsite - services", element: <ITOnsiteServicesPage /> },
  { path: "/categories", element: <Categories /> },
  { path: "/equipment", element: <EquipmentPage /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/mobile - launch", element: <MobileLaunchPage /> },
  { path: "/open - app", element: <OpenAppRedirect /> },
  { path: "/community", element: <CommunityPage /> },
  { path: "/contact", element: <ContactPage /> },
];
;
const App = () =>: any {
  return (
    <WhitelabelProvider>;
      <ThemeProvider default_theme="dark">;
        <Suspense fallback={<div className="p - 4 text-center">Loading...</div>}>;
          <Routes>;
            {base_routes.map (({ path, element }) => (
              <Route key={path} path={path} element={element} />))}
            <Route path="/auth/*" element={<AuthRoutes />} />;
            <Route path="/dashboard/*" element={<DashboardRoutes />} />;
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />;
            <Route path="/talent/*" element={<TalentRoutes />} />;
            <Route path="/admin/*" element={<AdminRoutes />} />;
            <Route path="/mobile/*" element={<MobileAppRoutes />} />;
            <Route path="/content/*" element={<ContentRoutes />} />;
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />;
            <Route path="/community/*" element={<CommunityRoutes />} />;
            <Route path="/developers/*" element={<DeveloperRoutes />} />;
            <Route path="*" element={<ErrorRoutes />} />;
          </Routes>;
        </Suspense>;
        <Toaster />;

export default App;  )
},

export default App;

=======export default App;
export default App;
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
export default App;
export default App;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  { path: '/contact', element: <ContactPage /> },
];

<<<<<<< HEAD
const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme='dark'>
        <Suspense fallback={<div className='p-4 text-center'>Loading...</div>}>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path='/auth/*' element={<AuthRoutes />} />
            <Route path='/dashboard/*' element={<DashboardRoutes />} />
            <Route path='/marketplace/*' element={<MarketplaceRoutes />} />
            <Route path='/talent/*' element={<TalentRoutes />} />
            <Route path='/admin/*' element={<AdminRoutes />} />
            <Route path='/mobile/*' element={<MobileAppRoutes />} />
            <Route path='/content/*' element={<ContentRoutes />} />
            <Route path='/enterprise/*' element={<EnterpriseRoutes />} />
            <Route path='/community/*' element={<CommunityRoutes />} />
            <Route path='/developers/*' element={<DeveloperRoutes />} />
            <Route path='*' element={<ErrorRoutes />} />
          </Routes>
        </Suspense>
        <Toaster />
        <SonnerToaster position='top-right' />
      </ThemeProvider>
    </WhitelabelProvider>
  );
=======
 import {
  {
  {
  AuthRoutes;
DashboardRoutes;
MarketplaceRoutes;
TalentRoutes;
AdminRoutes;
MobileAppRoutes;
ContentRoutes;
ErrorRoutes;
EnterpriseRoutes;
CommunityRoutes;
DeveloperRoutes 
}from './routes';
const Home = React.lazy ( () => import ('./pages/Home') );
const AIMatcherPage = React.lazy ( () => import ('./pages/AIMatcher') );
const TalentDirectory = React.lazy ( () => import ('./pages/TalentDirectory') );
const TalentsPage = React.lazy ( () => import ('./pages/TalentsPage') );
const ServicesPage = React.lazy ( () => import ('./pages/ServicesPage') );
const EquipmentPage = React.lazy ( () => import ('./pages/EquipmentPage') );
const Analytics = React.lazy ( () => import ('./pages/Analytics') );
const MobileLaunchPage = React.lazy ( () => import ('./pages/MobileLaunchPage') );
const CommunityPage = React.lazy ( () => import ('./pages/CommunityPage') );
const Categories = React.lazy ( () => import ('./pages/Categories') );
const Login = React.lazy ( () => import ('./pages/Login') );
const Signup = React.lazy ( () => import ('./pages/Signup') );
const ITOnsiteServicesPage = React.lazy ( () => import ('./pages/ITOnsiteServicesPage') );
const OpenAppRedirect = React.lazy ( () => import ('./pages/OpenAppRedirect') );
const ContactPage = React.lazy ( () => import ('./pages/Contact') );
const baseRoutes = [ {
  path: '/', element: <Home /> 
};
{
  path: '/match', element: <AIMatcherPage /> 
};
{
  path: '/login', element: <Login /> 
};
{
  path: '/signup', element: <Signup /> 
};
{
  path: '/talent', element: <TalentDirectory /> 
};
{
  path: '/talents', element: <TalentsPage /> 
};
{
  path: '/services', element: <ServicesPage /> 
};
{
  path: '/it-onsite-services', element: <ITOnsiteServicesPage /> 
};
{
  path: '/categories', element: <Categories /> 
};
{
  path: '/equipment', element: <EquipmentPage /> 
};
{
  path: '/analytics', element: <Analytics /> 
};
{
  path: '/mobile-launch', element: <MobileLaunchPage /> 
};
{
  path: '/open-app', element: <OpenAppRedirect /> 
};
{
  path: '/community', element: <CommunityPage /> 
};
{
  path: '/contact', element: <ContactPage /> 
}];
const App = () => {
  return (<WhitelabelProvider> <ThemeProvider defaultTheme="dark" > <Suspense fallback= {
  <div className="p-4 text-center" >Loading...</div> 
}> baseRoutes.map ( ({
  path, element 
}) => (<Route key= {
  path 
}path= {
  path 
}element= {
  element 
}/>) ) 
}</Routes> </Suspense> <Toaster /> <SonnerToaster position="top-right" /> </ThemeProvider> </WhitelabelProvider>) 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
export default App;
export default App;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
export default App,
import React, { Suspense } from 'react',;
import { Routes, Route } from 'react-router-dom',;
import './App.css',;
import { ThemeProvider } from "./components/ThemeProvider",;
import { WhitelabelProvider } from "./context/WhitelabelContext",;
import { Toaster } from "./components/ui/toaster",;
import { Toaster as SonnerToaster } from "./components/ui/sonner",;
import {;
  AuthRoutes,;
  DashboardRoutes,;
  MarketplaceRoutes,;
  TalentRoutes,;
  AdminRoutes,;
  MobileAppRoutes,;
  ContentRoutes,;
  ErrorRoutes,;
  EnterpriseRoutes,;
  CommunityRoutes,;
  DeveloperRoutes;
} from './routes',;
const Home = React.lazy(() => import('./pages/Home')),;
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher')),;
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory')),;
const TalentsPage = React.lazy(() => import('./pages/TalentsPage')),;
const ServicesPage = React.lazy(() => import('./pages/ServicesPage')),;
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage')),;
const Analytics = React.lazy(() => import('./pages/Analytics')),;
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage')),;
const CommunityPage = React.lazy(() => import('./pages/CommunityPage')),;
const Categories = React.lazy(() => import('./pages/Categories')),;
const Login = React.lazy(() => import('./pages/Login')),;
const Signup = React.lazy(() => import('./pages/Signup')),;
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage')),;
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect')),;
const ContactPage = React.lazy(() => import('./pages/Contact')),;
const baseRoutes = [;
  { path: '/', element: <Home /> },;
  { path: '/match', element: <AIMatcherPage /> },;
  { path: '/login', element: <Login /> },;
  { path: '/signup', element: <Signup /> },;
  { path: '/talent', element: <TalentDirectory /> },;
  { path: '/talents', element: <TalentsPage /> },;
  { path: '/services', element: <ServicesPage /> },;
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },;
  { path: '/categories', element: <Categories /> },;
  { path: '/equipment', element: <EquipmentPage /> },;
  { path: '/analytics', element: <Analytics /> },;
  { path: '/mobile-launch', element: <MobileLaunchPage /> },;
  { path: '/open-app', element: <OpenAppRedirect /> },;
  { path: '/community', element: <CommunityPage /> },;
  { path: '/contact', element: <ContactPage /> }],;
const App = () => {;
  return (;
    <WhitelabelProvider>;
      <ThemeProvider defaultTheme="dark">;
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;
          <Routes>;
            {baseRoutes.map(({ path, element }) => (;
              <Route key={path} path={path} element={element} />;
            ))}
            <Route path="/auth/*" element={<AuthRoutes />} />;
            <Route path="/dashboard/*" element={<DashboardRoutes />} />;
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />;
            <Route path="/talent/*" element={<TalentRoutes />} />;
            <Route path="/admin/*" element={<AdminRoutes />} />;
            <Route path="/mobile/*" element={<MobileAppRoutes />} />;
            <Route path="/content/*" element={<ContentRoutes />} />;
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />;
            <Route path="/community/*" element={<CommunityRoutes />} />;
            <Route path="/developers/*" element={<DeveloperRoutes />} />;
            <Route path="*" element={<ErrorRoutes />} />;
          </Routes>;
        </Suspense>;
        <Toaster />;
        <SonnerToaster position="top-right" />;
      </ThemeProvider>;
    </WhitelabelProvider>;
  );
},;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default App;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export default App;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
