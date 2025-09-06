<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React, { Suspense } from 'react';
import { Routes, Route  } from 'react-router-dom';
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
=======


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
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App ;
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
<<<<<<< HEAD
import { Toaster } from "./components/ui/toaster";

import { Toaster, as, SonnerToaster } from "./components/ui/sonner";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
=======

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React, { Suspense } from 'react',
import { Routes, Route } from 'react-router-dom',
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import { Toaster } from "./components/ui/toaster",
import { Toaster as SonnerToaster } from "./components/ui/sonner",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
=======
import React, { Suspense } from './react';
import { Routes, Route  } from './react-router-dom';
import "./App.css";
import { ThemeProvider  } from './components / ThemeProvider';
import { WhitelabelProvider  } from './context / WhitelabelContext';
import { Toaster  } from './components / ui / toaster';
import { Toaster, as, SonnerToaster  } from './components / ui / sonner';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
  );
}
export default App;

  )
},

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export default App;
