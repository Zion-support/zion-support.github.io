

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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App ;
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";

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

const App = () => {;

  return (
    <WhitelabelProvider>;
      <ThemeProvider defaultTheme="dark">;
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;
          <Routes>;
            {baseRoutes && baseRoutes.map(({ path, element }) => (;
              <Route key={path} path={path} element={element} />;
            ))}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { Suspense } from './react';
import { Routes, Route  } from './react-router-dom';
import "./App.css";
import { ThemeProvider  } from './components / ThemeProvider';
import { WhitelabelProvider  } from './context / WhitelabelContext';
import { Toaster  } from './components / ui / toaster';
import { Toaster, as, SonnerToaster  } from './components / ui / sonner';
<<<<<<< HEAD
<<<<<<< HEAD
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
import {
=======
import {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        <Suspense fallback={<div className="p - 4 text - center">Loading...</div>}>;
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


import { Toaster } from "./components/ui/toaster";

import { Toaster, as, SonnerToaster } from "./components/ui/sonner";


import React, { Suspense } from 'react',
import { Routes, Route } from 'react-router-dom',
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import { Toaster } from "./components/ui/toaster",
import { Toaster as SonnerToaster } from "./components/ui/sonner",



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
export default App;

  )
},

<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
},


export default App;

        <SonnerToaster position="top - right" />;
      </ThemeProvider>;
    </WhitelabelProvider>);
}
;
export default App;
;
<<<<<<< HEAD
export default App;
export default App;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default App;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
