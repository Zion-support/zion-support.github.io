<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import {
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider","
import { WhitelabelProvider } from "./context/WhitelabelContext",
>>>>>>> origin/chore/fix-lint-and-merge

class ErrorBoundary extends React.Component {
  constructor(props) {

    super(props);
<<<<<<< HEAD

=======
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {'
    console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> origin/chore/fix-lint-and-merge
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
"
import React, { Suspense } from "react";"
import { Routes, Route } from "react-router-dom";"
import "./App ;"
import { ThemeProvider } from "./components/ThemeProvider";"
<<<<<<< HEAD
=======
=======

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App ;
import { ThemeProvider } from "./components/ThemeProvider";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { WhitelabelProvider } from "./context/WhitelabelContext";
import {};
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
  DeveloperRoutes;
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
  DeveloperRoutes,;"
} from "./routes";"
const Home = React && React.lazy(() => import("./pages/Home"));"
const AIMatcherPage = React && React.lazy(() => import("./pages/AIMatcher"));"
const TalentDirectory = React && React.lazy(() => import("./pages/TalentDirectory"));"
const TalentsPage = React && React.lazy(() => import("./pages/TalentsPage"));"
const ServicesPage = React && React.lazy(() => import("./pages/ServicesPage"));"
const EquipmentPage = React && React.lazy(() => import("./pages/EquipmentPage"));"
const Analytics = React && React.lazy(() => import("./pages/Analytics"));"
const MobileLaunchPage = React && React.lazy(() => import("./pages/MobileLaunchPage"));"
const CommunityPage = React && React.lazy(() => import("./pages/CommunityPage"));"
const Categories = React && React.lazy(() => import("./pages/Categories"));"
const Login = React && React.lazy(() => import("./pages/Login"));"
const Signup = React && React.lazy(() => import("./pages/Signup"));
const ITOnsiteServicesPage = React && React.lazy(;"
  () => import("./pages/ITOnsiteServicesPage"),;
);"
const OpenAppRedirect = React && React.lazy(() => import("./pages/OpenAppRedirect"));"
const ContactPage = React && React.lazy(() => import("./pages/Contact"));

const baseRoutes = [;"
  { path: "/", element: <Home /> },;"
  { path: "/match", element: <AIMatcherPage /> },;"
  { path: "/login", element: <Login /> },;"
  { path: "/signup", element: <Signup /> },;"
  { path: "/talent", element: <TalentDirectory /> },;"
  { path: "/talents", element: <TalentsPage /> },;"
  { path: "/services", element: <ServicesPage /> },;"
  { path: "/it-onsite-services", element: <ITOnsiteServicesPage /> },;"
  { path: "/categories", element: <Categories /> },;"
  { path: "/equipment", element: <EquipmentPage /> },;"
  { path: "/analytics", element: <Analytics /> },;"
  { path: "/mobile-launch", element: <MobileLaunchPage /> },;"
  { path: "/open-app", element: <OpenAppRedirect /> },;"
  { path: "/community", element: <CommunityPage /> },;"
  { path: "/contact", element: <ContactPage /> },;

const App = () => {;

  return (
    <WhitelabelProvider>;"
      <ThemeProvider defaultTheme="dark">;"
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;
          <Routes>;
            {baseRoutes && baseRoutes.map(({ path, element }) => (;
              <Route key={path} path={path} element={element} />;
            ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
=======
=======
import React, { Suspense } from './react';
import { Routes, Route  } from './react-router-dom';
import "./App.css";
import { ThemeProvider  } from './components / ThemeProvider';
import { WhitelabelProvider  } from './context / WhitelabelContext';
import { Toaster  } from './components / ui / toaster';
import { Toaster, as, SonnerToaster  } from './components / ui / sonner';
<<<<<<< HEAD
import React, { Suspense } from 'react';
import { Routes, Route  } from 'react-router-dom';
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";

import { Toaster, as, SonnerToaster } from "./components/ui/sonner";
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

import {

=======
<<<<<<< HEAD

import {

=======
import {
=======
import {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
  DeveloperRoutes
} from './routes',
const Home = $2;
const AIMatcherPage = $2;
const TalentDirectory = $2;
const TalentsPage = $2;
const ServicesPage = $2;
const EquipmentPage = $2;
const Analytics = $2;
const MobileLaunchPage = $2;
const CommunityPage = $2;
const Categories = $2;
const Login = $2;
const Signup = $2;
const ITOnsiteServicesPage = $2;
const OpenAppRedirect = $2;
const ContactPage = $2;
=======

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
>>>>>>> origin/chore/fix-lint-and-merge
const App = () =>: any {
  return (
    <WhitelabelProvider>;
<<<<<<< HEAD

          <Routes>;
            {baseRoutes.map(({ path, element }) => (;
              <Route key={path} path={path} element={element} />;
            ))}

}
return (;
    <WhitelabelProvider>;

=======
      <ThemeProvider default_theme="dark">;
        <Suspense fallback={<div className="p - 4 text - center">Loading...</div>}>;
          <Routes>;
            {base_routes.map (({ path, element }) => (
              <Route key={path} path={path} element={element} />))}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======

import { Toaster } from "./components/ui/toaster";

import { Toaster, as, SonnerToaster } from "./components/ui/sonner";


import React, { Suspense } from 'react',
import { Routes, Route } from 'react-router-dom',
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import { Toaster } from "./components/ui/toaster",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Toaster as SonnerToaster } from "./components/ui/sonner",

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
const App = () =>: any {
  return (
    <WhitelabelProvider>;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  DeveloperRoutes
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
              <Route key = $2;
export default App,
=======

  { path: '/contact', element: <ContactPage /> }],

<<<<<<< HEAD
const App = () => {}
=======
const App = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <WhitelabelProvider>"
      <ThemeProvider defaultTheme="dark">"

        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />

        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
<<<<<<< HEAD
  );
}
export default App;

export default App,
import React, { Suspense } from 'react',;
import { Routes, Route } from 'react-router-dom',;
import './App.css',;
import { ThemeProvider } from "./components/ThemeProvider",;
import { WhitelabelProvider } from "./context/WhitelabelContext",;
import { Toaster } from "./components/ui/toaster",;

<<<<<<< HEAD
=======
export default App,
import React, { Suspense } from 'react',;
import { Routes, Route } from 'react-router-dom',;
import './App.css',;
import { ThemeProvider } from "./components/ThemeProvider",;
import { WhitelabelProvider } from "./context/WhitelabelContext",;
import { Toaster } from "./components/ui/toaster",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  DeveloperRoutes;'
} from './routes',;'
const Home = React.lazy(() => import('./pages/Home')),;'
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher')),;'
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory')),;'
const TalentsPage = React.lazy(() => import('./pages/TalentsPage')),;'
const ServicesPage = React.lazy(() => import('./pages/ServicesPage')),;'
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage')),;'
const Analytics = React.lazy(() => import('./pages/Analytics')),;'
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage')),;'
const CommunityPage = React.lazy(() => import('./pages/CommunityPage')),;'
const Categories = React.lazy(() => import('./pages/Categories')),;'
const Login = React.lazy(() => import('./pages/Login')),;'
const Signup = React.lazy(() => import('./pages/Signup')),;'
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage')),;'
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect')),;'
const ContactPage = React.lazy(() => import('./pages/Contact')),;
const baseRoutes = [;'
  { path: '/', element: <Home /> },;'
  { path: '/match', element: <AIMatcherPage /> },;'
  { path: '/login', element: <Login /> },;'
  { path: '/signup', element: <Signup /> },;'
  { path: '/talent', element: <TalentDirectory /> },;'
  { path: '/talents', element: <TalentsPage /> },;'
  { path: '/services', element: <ServicesPage /> },;'
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },;'
  { path: '/categories', element: <Categories /> },;'
  { path: '/equipment', element: <EquipmentPage /> },;'
  { path: '/analytics', element: <Analytics /> },;'
  { path: '/mobile-launch', element: <MobileLaunchPage /> },;'
  { path: '/open-app', element: <OpenAppRedirect /> },;'
  { path: '/community', element: <CommunityPage /> },;'
  { path: '/contact', element: <ContactPage /> }],;
const App = () => {;
  return (;
    <WhitelabelProvider>;"
      <ThemeProvider defaultTheme="dark">;"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;
          <Routes>;
            {baseRoutes.map(({ path, element }) => (;
              <Route key={path} path={path} element={element} />;
<<<<<<< HEAD
            ))}"
const OpenAppRedirect = React.lazy (() => import ("./pages / OpenAppRedirect"));"
const ContactPage = React.lazy (() => import ("./pages / Contact"));
;
const base_routes = [;"
  { path: "/", element: <Home /> },"
  { path: "/match", element: <AIMatcherPage /> },"
  { path: "/login", element: <Login /> },"
  { path: "/signup", element: <Signup /> },"
  { path: "/talent", element: <TalentDirectory /> },"
  { path: "/talents", element: <TalentsPage /> },"
  { path: "/services", element: <ServicesPage /> },"
  { path: "/it - onsite - services", element: <ITOnsiteServicesPage /> },"
  { path: "/categories", element: <Categories /> },"
  { path: "/equipment", element: <EquipmentPage /> },"
  { path: "/analytics", element: <Analytics /> },"
  { path: "/mobile - launch", element: <MobileLaunchPage /> },"
  { path: "/open - app", element: <OpenAppRedirect /> },"
  { path: "/community", element: <CommunityPage /> },"
  { path: "/contact", element: <ContactPage /> },
];
;
const App = () =>: any {}
  return (

          <Routes>;
            {base_routes.map (({ path, element }) => (
              <Route key={path} path={path} element={element} />))}"
            <Route path="/auth/*" element={<AuthRoutes />} />;"
            <Route path="/dashboard/*" element={<DashboardRoutes />} />;"
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />;"
            <Route path="/talent/*" element={<TalentRoutes />} />;"
            <Route path="/admin/*" element={<AdminRoutes />} />;"
            <Route path="/mobile/*" element={<MobileAppRoutes />} />;"
            <Route path="/content/*" element={<ContentRoutes />} />;"
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />;"
            <Route path="/community/*" element={<CommunityRoutes />} />;"
            <Route path="/developers/*" element={<DeveloperRoutes />} />;"
            <Route path="*" element={<ErrorRoutes />} />;
>>>>>>> origin/chore/fix-lint-and-merge
          </Routes>;
        </Suspense>;
        <Toaster />;

};

export default App;
export default App;

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

<<<<<<< HEAD
}
return (;
    <WhitelabelProvider>;

=======
      <ThemeProvider default_theme="dark">;
        <Suspense fallback={<div className="p - 4 text - center">Loading...</div>}>;
          <Routes>;
            {base_routes.map (({ path, element }) => (
              <Route key={path} path={path} element={element} />))}

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Route path="*" element={<ErrorRoutes />} />;
          </Routes>;
        </Suspense>;
        <Toaster />;
<<<<<<< HEAD

import { Toaster as SonnerToaster } from "./components/ui/sonner",

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

const App = () => {}
  return (
    <WhitelabelProvider>"
      <ThemeProvider defaultTheme="dark">"

        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />

        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>

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
  DeveloperRoutes;'
} from './routes',;'
const Home = React.lazy(() => import('./pages/Home')),;'
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher')),;'
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory')),;'
const TalentsPage = React.lazy(() => import('./pages/TalentsPage')),;'
const ServicesPage = React.lazy(() => import('./pages/ServicesPage')),;'
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage')),;'
const Analytics = React.lazy(() => import('./pages/Analytics')),;'
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage')),;'
const CommunityPage = React.lazy(() => import('./pages/CommunityPage')),;'
const Categories = React.lazy(() => import('./pages/Categories')),;'
const Login = React.lazy(() => import('./pages/Login')),;'
const Signup = React.lazy(() => import('./pages/Signup')),;'
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage')),;'
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect')),;'
const ContactPage = React.lazy(() => import('./pages/Contact')),;
const baseRoutes = [;'
  { path: '/', element: <Home /> },;'
  { path: '/match', element: <AIMatcherPage /> },;'
  { path: '/login', element: <Login /> },;'
  { path: '/signup', element: <Signup /> },;'
  { path: '/talent', element: <TalentDirectory /> },;'
  { path: '/talents', element: <TalentsPage /> },;'
  { path: '/services', element: <ServicesPage /> },;'
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },;'
  { path: '/categories', element: <Categories /> },;'
  { path: '/equipment', element: <EquipmentPage /> },;'
  { path: '/analytics', element: <Analytics /> },;'
  { path: '/mobile-launch', element: <MobileLaunchPage /> },;'
  { path: '/open-app', element: <OpenAppRedirect /> },;'
  { path: '/community', element: <CommunityPage /> },;'
  { path: '/contact', element: <ContactPage /> }],;
const App = () => {;
  return (;
    <WhitelabelProvider>;"
      <ThemeProvider defaultTheme="dark">;"
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;
          <Routes>;
            {baseRoutes.map(({ path, element }) => (;
              <Route key={path} path={path} element={element} />;
            ))}"
const OpenAppRedirect = React.lazy (() => import ("./pages / OpenAppRedirect"));"
const ContactPage = React.lazy (() => import ("./pages / Contact"));
;
const base_routes = [;"
  { path: "/", element: <Home /> },"
  { path: "/match", element: <AIMatcherPage /> },"
  { path: "/login", element: <Login /> },"
  { path: "/signup", element: <Signup /> },"
  { path: "/talent", element: <TalentDirectory /> },"
  { path: "/talents", element: <TalentsPage /> },"
  { path: "/services", element: <ServicesPage /> },"
  { path: "/it - onsite - services", element: <ITOnsiteServicesPage /> },"
  { path: "/categories", element: <Categories /> },"
  { path: "/equipment", element: <EquipmentPage /> },"
  { path: "/analytics", element: <Analytics /> },"
  { path: "/mobile - launch", element: <MobileLaunchPage /> },"
  { path: "/open - app", element: <OpenAppRedirect /> },"
  { path: "/community", element: <CommunityPage /> },"
  { path: "/contact", element: <ContactPage /> },
];
;
const App = () =>: any {}
  return (

          <Routes>;
            {base_routes.map (({ path, element }) => (
              <Route key={path} path={path} element={element} />))}"
            <Route path="/auth/*" element={<AuthRoutes />} />;"
            <Route path="/dashboard/*" element={<DashboardRoutes />} />;"
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />;"
            <Route path="/talent/*" element={<TalentRoutes />} />;"
            <Route path="/admin/*" element={<AdminRoutes />} />;"
            <Route path="/mobile/*" element={<MobileAppRoutes />} />;"
            <Route path="/content/*" element={<ContentRoutes />} />;"
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />;"
            <Route path="/community/*" element={<CommunityRoutes />} />;"
            <Route path="/developers/*" element={<DeveloperRoutes />} />;"
            <Route path="*" element={<ErrorRoutes />} />;
>>>>>>> origin/chore/fix-lint-and-merge
          </Routes>;
        </Suspense>;
        <Toaster />;

};

export default App;
export default App;

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

=======
        <SonnerToaster position="top-right" />;
      </ThemeProvider>;
    </WhitelabelProvider>;
  );
},;

export default App;
=======
            ))}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

export default App;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
